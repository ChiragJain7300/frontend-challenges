import React from "react";

const ProdCard = ({ prod, index }) => {
  return (
    <div key={index} className="flex gap-5 mb-7">
      <div className="w-26 h-26 rounded-lg bg-white flex items-center justify-center">
        <img src={prod.src} alt="prodImg" />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between *:font-bold">
          <span>{prod.name}</span> <span>${prod.price}</span>
        </div>
        <div className="text-[#394150]">{prod.color}</div>
        <div className="mt-auto flex justify-between">
          <span className="text-[#394150]">x {prod.qty}</span>
          <button className="cursor-pointer hover:bg-gray-300 duration-150 hover:text-white rounded-lg p-1">
            <img src="./resources/close-icon.svg" alt="close-icon.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
