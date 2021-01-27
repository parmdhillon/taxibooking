import React from 'react';
import { FaArrowDown, FaArrowUp, FaCarSide, FaRupeeSign } from 'react-icons/fa';

const PriceCard = ({ route: { startLoc, endLoc, sedan, suv, traveller } }) => {
  return (
    <div className="w-full px-5 transform transition-all hover:scale-110 py-10">
      <div
        style={{ borderRadius: '20px' }}
        className="bg-white w-full md:w-52 py-3 overflow-hidden"
      >
        <div className="px-3 flex flex-col justify-center items-center">
          <span className="text-charade-500 font-bold">{startLoc}</span>
          <span className="w-8 h-8 p-1 bg-charade-500 rounded-full text-white flex justify-center items-center font-bold">
            <FaArrowDown className="inline-block mr-0.5" />
            <FaArrowUp className="inline-block" />
          </span>
          <span className="text-charade-500 font-bold">{endLoc}</span>
        </div>
        <div className="w-full my-2 bg-gray-300 text-charade-500 flex justify-between py-1 px-5 text-xl">
          <FaCarSide />
          <FaRupeeSign />
        </div>
        <div className="w-full px-3 font-bold text-charade-500">
          <div className="flex justify-between my-3">
            <span>Sedan</span>
            <span>{sedan.toLocaleString('en')}</span>
          </div>

          <div className="flex justify-between my-3">
            <span>SUV</span>
            <span>{suv.toLocaleString('en')}</span>
          </div>

          <div className="flex justify-between my-3">
            <span>Traveller</span>
            <span>{traveller.toLocaleString('en')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
