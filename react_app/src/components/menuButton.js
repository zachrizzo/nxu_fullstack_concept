import React from "react";

export default function MenuButton({ buttonText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="shadow-lg my-5 mx-5 w-[90%] p-2 rounded-lg flex justify-center items-center hover:scale-110 duration-500 hover:bg-blue-500 hover:text-white cursor-pointer "
    >
      <h3>{buttonText}</h3>
    </button>
  );
}
