import React, { useRef, useEffect } from "react";
import MenuButton from "./menuButton";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsAuthenticated,
  setJwtToken,
  setUser,
  selectIsAuthenticated,
  selectUser,
} from "../../redux/globalSlice";

export default function DropDownMenu({ setOpenMenu, setShowLoginModal }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  return (
    <div className="bg-white z-50 w-[130px] flex justify-center items-center flex-col p-4 shadow-md rounded-[20px]">
      <div className=" hover:scale-110 duration-500 flex-col w-[98%] rounded-lg shadow-lg flex justify-center items-center">
        <h4 className=" text-sm text-[#7e7e7eed]">Welcome,</h4>
        <h5>{user?.first_name}!</h5>
      </div>
      {!isAuthenticated ? (
        <MenuButton
          buttonText={"Login"}
          onClick={() => {
            setShowLoginModal(true);
            setOpenMenu(false);
          }}
        />
      ) : (
        <MenuButton
          buttonText={"Logout"}
          onClick={() => {
            dispatch(setJwtToken(null));
            dispatch(setUser(null));
            dispatch(setIsAuthenticated(false));
            localStorage.removeItem("jwtToken");
            setOpenMenu(false);
          }}
        />
      )}
    </div>
  );
}
