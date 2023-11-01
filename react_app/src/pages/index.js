import React, { useState, useEffect } from "react";
import { getUserCarsByUserId } from "../api/userCar";
import { getChargeHistoryById } from "../api/carChargeHistory";

import Header from "../components/header";
import LoginModal from "../components/loginModal";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectJwtToken } from "../../redux/globalSlice";
import jwtDecode from "jwt-decode";
import SegmentSelector from "../components/segmentSelector";
import ChargeHistoryCard from "../components/chargeHistoryCard";
import Tesla from "../components/tesla";

function App() {
  const [userCars, setUserCars] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const jwtToken = useSelector(selectJwtToken);
  const [selectedCar, setSelectedCar] = useState(userCars[0]);
  const [carChargingHistory, setCarChargingHistory] = useState([]);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [total, setTotal] = useState(0);

  //   get current user with user id in redux
  useEffect(() => {
    if (jwtToken) {
      const decodedToken = jwtDecode(jwtToken);

      const getUserCar = async () => {
        const userCar = await getUserCarsByUserId(decodedToken.id);

        setUserCars(userCar);
        if (userCar.length > 0) {
          //check if car model is duplicate from fake data
          // if yes, remove it
          userCar.forEach((car, index) => {
            if (index > 0) {
              if (car.model === userCar[0].model) {
                userCar.splice(index, 1);
              } else if (car.model === userCar[1].model) {
                userCar.splice(index, 1);
              } else if (car.model === userCar[2].model) {
                userCar.splice(index, 1);
              }
            }
          });
        }
        setSelectedCar(userCar[0]);
      };

      getUserCar();
    }
  }, [jwtToken]);

  useEffect(() => {
    if (userCars.length > 0 && selectedCar !== null) {
      setTotal(0);
      const fetchChargeHistory = async () => {
        const chargeHistory = await getChargeHistoryById(selectedCar.id);
        setCarChargingHistory(chargeHistory);
        chargeHistory.forEach((history) => {
          setTotal((prev) => prev + history.price);
        });
      };
      fetchChargeHistory();
    }
  }, [userCars, selectedCar]);

  return (
    <div className="flex bg-[#ffffff25]  h-full w-full flex-col justify-center items-center">
      <Header setShowLoginModal={setShowLogin} />

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      <div className="flex h-[95vh] w-full flex-col-reverse justify-center items-center  md:flex-row ">
        <div className="w-full md:w-[20%]  md:overflow-y-scroll h-[53%] flex items-center flex-col md:h-[95%]">
          <div className=" w-full flex justify-center items-center ">
            <h3 className=" text-[#858585] text-xl font-bold">
              Vehicle Charging History
            </h3>
          </div>

          {carChargingHistory.length > 0 &&
            carChargingHistory.map((history) => {
              return <ChargeHistoryCard chargeHistory={history} />;
            })}
        </div>
        <div className="w-full h-[67%] md:h-full  ">
          <div className=" w-full  h-[80%] md:h-[70%]">
            <div className=" h-[20%] justify-center items-center flex">
              {userCars.length > 0 && (
                <SegmentSelector
                  options={userCars}
                  setSelectedCar={setSelectedCar}
                />
              )}
            </div>
            {isAuthenticated && (
              <div className="h-[75%]">
                <Tesla
                  selectedCar={
                    selectedCar ? selectedCar.model : "Tesla Model 3"
                  }
                />
              </div>
            )}
          </div>
          <div className=" flex  justify-center items-center  h-[20%] w-full md:h-[20%]">
            <div className=" bg-[#acacac36] mt-1 rounded-lg flex-row flex justify-center items-center  h-[60%] md:w-[40%] w-[90%]">
              <h2 className="mx-2">Miles: 20,000</h2>
              <h2 className="mx-2">
                Total: <span className="text-green-500">${total}</span>
              </h2>
              <h2 className="mx-2">Total KWh: 100,000</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
