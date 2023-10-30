import React, { useState } from "react";
import InputBox from "./inputBox";
import { XMarkIcon } from "@heroicons/react/24/solid";
import MainButton from "./mainButton";
import { loginUser } from "../api/users";
import { useDispatch, useSelector } from "react-redux";
import {
  setJwtToken,
  setIsAuthenticated,
  selectIsAuthenticated,
} from "../../redux/globalSlice";
export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleLogin = async () => {
    try {
      const { token } = await loginUser({
        email: email,
        password: password,
      });

      dispatch(setJwtToken(token));
      dispatch(setIsAuthenticated(true));

      console.log("Login successful:", token);
      onClose();
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 h-auto flex flex-col justify-center items-center relative">
        {isAuthenticated && (
          <XMarkIcon
            className="w-8 h-8 text-red-500 absolute top-4 left-4 cursor-pointer"
            onClick={onClose} // Call the onClose function when the X icon is clicked
          />
        )}
        <h4 className="mb-4 text-center">Login Modal</h4>

        <div className="mb-4 w-full">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 text-center"
          >
            Username
          </label>
          <InputBox
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 text-center"
          >
            Password
          </label>
          <InputBox
            type={"password"}
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <MainButton
          buttonText={"Login"}
          onClick={() => {
            handleLogin();
          }}
        />
      </div>
    </div>
  );
}
