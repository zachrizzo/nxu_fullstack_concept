import React from "react";

export default function ChargeHistoryCard({ chargeHistory }) {
  if (chargeHistory.price === null) {
    return null;
  } else {
    const end_date = new Date(chargeHistory.end_date).toLocaleDateString();
    return (
      <div className=" justify-center flex items-center flex-col w-[70%]  my-4 rounded-xl shadow-xl ">
        <h4 className="text-green-500">
          <span className="text-green-400">$</span>
          {chargeHistory.price}
        </h4>

        <p className="text-[#c1c1c1f0]">{end_date}</p>
      </div>
    );
  }
}
