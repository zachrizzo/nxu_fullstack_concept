import React from "react";

export default function MainButton({ onClick, buttonText }) {
  return (
    <button
      className="m-5 shadow-lg p-4 w-[80%] text-white bg-blue-500 rounded-[25px] hover:scale-110 duration-500 "
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
