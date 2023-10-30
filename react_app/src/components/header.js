import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import DropDownMenu from "./dropDownMenu";
import {
  setJwtToken,
  setIsAuthenticated,
  setUser,
  selectIsAuthenticated,
} from "../../redux/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { getUserById } from "../api/users";

function isTokenExpired(token) {
  try {
    const decoded = jwtDecode(token);
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      return true; // token is expired
    } else {
      return false; // token is not expired
    }
  } catch (err) {
    return true; // if there's an error decoding, assume token is expired or invalid
  }
}
export default function Header({ setShowLoginModal }) {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (isTokenExpired(token)) {
      console.log("Token is expired or invalid");
      dispatch(setJwtToken(null));
      dispatch(setUser(null));
      dispatch(setIsAuthenticated(false));
      // Redirect to login page
      setShowLoginModal(true);
    } else {
      console.log("Token is valid");
      dispatch(setJwtToken(token));
      dispatch(setIsAuthenticated(true));
      // Continue with the application logic
    }
  });

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token && isAuthenticated) {
      // This will check for any falsy value including null, undefined, and empty string
      console.log("token", token);
      try {
        const decodedToken = jwtDecode(token);
        const fetchUser = async () => {
          const user = await getUserById(decodedToken.id);
          dispatch(setUser(user));
        };
        fetchUser();
      } catch (error) {
        console.error("Invalid token", error);
        console.log("Token is expired or invalid");
        // Handle the error appropriately, e.g., by logging out the user or showing an error message
      }
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    function handleOutsideClick(event) {
      // If the click is outside the dropdown, close it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }

    // Add the event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setOpenMenu]);
  return (
    <header className=" bg-white flex h-16 shadow-md w-full px-10  justify-between items-center">
      <h1 className="text-2xl">NXU Energy</h1>
      <div className="flex">
        <div
          ref={dropdownRef}
          className=" relative justify-center flex items-center"
        >
          <button
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <Bars3Icon className="h-10 w-10" />
          </button>
          {openMenu && (
            <div className=" z-50 absolute top-14 right-32 h-4 w-4 rounded-full">
              <DropDownMenu
                setOpenMenu={setOpenMenu}
                setShowLoginModal={setShowLoginModal}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
