import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const HomeScreen = () => {
  return (
    <section
      id="home"
      className="flex justify-center items-center h-screen flex-col-reverse lg:flex-row"
    >
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start h-full lg:pl-8 pt-10 lg:pt-0 pb-14">
        <div className="w-full px-4 text-center lg:text-left">
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
          <div className="flex justify-center lg:justify-start items-center my-2">
            <span className="text-red-400 text-xl font-bold">+91</span>
            <a
              href="tel:+919465313982"
              className="text-red-500 text-4xl font-extrabold pl-2"
            >
              9465313982
            </a>
          </div>
          <div className="flex my-5 flex-col justify-center items-center lg:block">
            <a
              href="#booking"
              className="py-3 px-6 bg-charade-500 text-white font-bold text-xl rounded-xl lg:mr-3 border-2 border-charade-500 w-full md:w-1/2"
            >
              Book Cab
            </a>
            <a className="p-3 text-charade-500 font-bold text-xl border-2 border-charade-500 rounded-xl w-full md:w-1/2 my-2 lg:my-0">
              <FaWhatsapp className="inline-block -my-2 mr-1 text-2xl" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      <div className="w-8/12 lg:w-1/2 flex justify-center items-center pt-5 lg:pt-0">
        <img src="/img/home.png" className="w-72 lg:w-full" />
      </div>
    </section>
  );
};

export default HomeScreen;
