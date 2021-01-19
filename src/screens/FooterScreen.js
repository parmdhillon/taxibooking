import React from 'react';
import { FaCopyright, FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';

const FooterScreen = () => {
  return (
    <div className="w-full">
      <div className="bg-charade-500 py-4 flex flex-col md:flex-row justify-around items-center">
        <div className="px-2">
          <span className="text-charade-100 block my-2 text-center md:text-left">Contact Us</span>
          <span className="text-white font-bold text-xl block my-2">
            <FaUser className="inline -mt-1 mr-2" /> Manpreet Singh
          </span>
          <span className="text-white text-xl block my-2">
            <FaEnvelope className="inline -mt-1 mr-2" /> kirattours@gmail.com
          </span>
          <span className="text-white text-xl block my-2">
            <FaPhoneAlt className="inline -mt-1 mr-2" /> +91 9465313982
          </span>
        </div>
        <div className="px-6 flex flex-col justify-center items-center">
        <span className="text-charade-100 block my-2">Booking on WhatsApp</span>
        <div className="p-4 bg-charade-300 rounded-3xl w-32 h-32 flex items-center justify-center">
            <img src="/img/whatsapp.svg" className="w-20" />
        </div>
        </div>
      </div>
      <div className="bg-white text-center my-4">
        <p className="font-bold text-xl">
          <FaCopyright className="inline -mt-1" /> Kirat Tour and Travels, 2021
        </p>
        <p className="text-charade-400">Chandigarh, Punjab, India</p>
      </div>
    </div>
  );
};

export default FooterScreen;
