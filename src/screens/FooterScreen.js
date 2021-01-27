import React from 'react';
import {
  FaCopyright,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';

const FooterScreen = () => {
  return (
    <section id="contact" className="w-full">
      <div className="bg-charade-500 py-4 flex flex-col md:flex-row justify-around">
        <div className="px-2 flex justify-center flex-col items-center">
          <span className="text-charade-100 block my-2 text-center md:text-left">
            Contact Us
          </span>
          <div className="inline-block">
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
        </div>

        <div className="px-6 max-w-full md:max-w-sm text-center md:text-left">
          <span className="font-bold text-charade-100">Our Services</span>
          <span className="text-white block my-2">
            We offer Taxi from Chandigarh to Delhi, Shimla, Manali, Amritsar,
            Jammu at best prices. We are just one call away from you.
          </span>
        </div>
        <div className="px-6 max-w-full md:max-w-sm text-center md:text-left">
          <span className="block my-2 md:text-left text-charade-100 text-center">
            <b>Follow Us</b>
          </span>
          <div className="my-2 text-charade-100 text-2xl">
            <FaFacebook className="inline-block mr-3" />
            <FaInstagram className="inline-block mr-3" />
            <FaTwitter className="inline-block" />
          </div>
        </div>
      </div>
      <div className="bg-white text-center my-4">
        <p className="font-bold text-xl">
          <FaCopyright className="inline -mt-1" /> Kirat Tour and Travels, 2021
        </p>
        <p className="text-charade-400">Chandigarh, Punjab, India</p>
      </div>
    </section>
  );
};

export default FooterScreen;
