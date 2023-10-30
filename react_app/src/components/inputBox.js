import React from "react";

export default function InputBox({ onChange, value, id, type, placeholder }) {
  return (
    <input
      className="rounded-xl p-4 w-[100%] shadow-lg outline-none"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
}
