import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

const CarScreen = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <span className="block text-center text-4xl font-extrabold text-charade-500">
        Our Cars
      </span>
      <p className="text-center text-charade-300 my-5">
        All size of cars are available, according to your need.
      </p>

      <div className="w-full flex-wrap flex justify-center flex-row items-center">
        <div className="w-44 bg-white rounded-2xl shadow h-52 m-3 flex flex-col justify-between items-center py-6">
          <span className="font-bold text-lg text-charade-500 ">Swift</span>
          <img src="/img/cars/swift.png" width="100px" />
          <span className="py-2 px-4 bg-red-200 rounded-full text-red-500 font-bold">
            <FaRupeeSign className="inline -mt-1" />
            9/km
          </span>
        </div>

        <div className="w-44 bg-white rounded-2xl shadow h-52 m-3 flex flex-col justify-between items-center py-6">
          <span className="font-bold text-lg text-charade-500 ">Etios</span>
          <img src="/img/cars/etios.png" width="100px" />
          <span className="py-2 px-4 bg-red-200 rounded-full text-red-500 font-bold">
            <FaRupeeSign className="inline -mt-1" />
            10/km
          </span>
        </div>

        <div className="w-44 bg-white rounded-2xl shadow h-52 m-3 flex flex-col justify-between items-center py-6">
          <span className="font-bold text-lg text-charade-500 ">Ertiga</span>
          <img src="/img/cars/ertiga.png" width="100px" />
          <span className="py-2 px-4 bg-red-200 rounded-full text-red-500 font-bold">
            <FaRupeeSign className="inline -mt-1" />
            12/km
          </span>
        </div>

        <div className="w-44 bg-white rounded-2xl shadow h-52 m-3 flex flex-col justify-between items-center py-6">
          <span className="font-bold text-lg text-charade-500 ">Innova</span>
          <img src="/img/cars/innova.png" width="100px" />
          <span className="py-2 px-4 bg-red-200 rounded-full text-red-500 font-bold">
            <FaRupeeSign className="inline -mt-1" />
            14/km
          </span>
        </div>

        <div className="w-44 bg-white rounded-2xl shadow h-52 m-3 flex flex-col justify-between items-center py-6">
          <span className="font-bold text-lg text-charade-500 ">Travller</span>
          <img src="/img/cars/traveller.png" width="100px" />
          <span className="py-2 px-4 bg-red-200 rounded-full text-red-500 font-bold">
            <FaRupeeSign className="inline -mt-1" />
            20/km
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarScreen;
