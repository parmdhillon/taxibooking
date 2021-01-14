import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const HomeScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start h-full md:pl-8">
        <div className="w-full px-4 text-center md:text-left">
          <span className="font-extrabold text-charade-500 block my-2 text-5xl">
            Need Ride?
          </span>
          <button
            onClick={() => {
              document.location.href = 'tel:+919465313982';
            }}
            className="bg-yellow-400 p-2 rounded-lg my-2 inline-block text-charade-500"
          >
            <FaPhoneAlt className="inline -my-1 text-xl" />{' '}
            <span className="font-bold">Call Us</span>
          </button>
          <div className="flex justify-center md:justify-start items-center my-2">
            <span className="text-red-400 text-xl font-bold">+91</span>
            <a
              href="tel:+919465313982"
              className="text-red-500 text-4xl font-extrabold pl-2"
            >
              9465313982
            </a>
          </div>
          <div className=" mt-6 flex flex-col md:block">
            <a className="py-3 px-6 bg-charade-500 text-white font-bold text-xl rounded-xl border-2 border-charade-500 mr-3 w-full md:w-auto">
              Book Cab
            </a>
            <a className="p-3 text-charade-500 font-bold text-xl border-2 border-charade-500 rounded-xl w-full md:w-auto my-2 md:my-0">
              <FaWhatsapp className="inline-block -my-2 mr-1 text-2xl" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      <div className="w-8/12 md:w-1/2 h-5/6 justify-center items-end md:items-center flex">
        <img src="/img/home.png" />
      </div>
    </div>
  );
};

export default HomeScreen;
