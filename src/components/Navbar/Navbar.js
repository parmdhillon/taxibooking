import React, { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const openMenuHandler = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <div className="w-full p-6 flex justify-between items-center fixed">
      <div className="w-56 mr-5">
        <img src="/img/logo.png" className="object-contain" />
      </div>
      <MenuButton isOpen={isOpen} toggleMenu={openMenuHandler} />
      <div
        className={`transition-all origin-top transform absolute ${
          isOpen
            ? `scale-y-100 flex flex-col bg-charade-500 text-white rounded-2xl p-4 top-20`
            : `scale-y-0 top-20 md:top-0`
        } md:scale-100 md:block md:relative`}
        style={{ width: `${isOpen ? `calc(100% - 48px)` : `auto`}` }}
      >
        <a
          className="py-3  inline-block px-6 font-bold hover:bg-charade-300 hover:text-white rounded-2xl"
          href="#"
        >
          Home
        </a>
        <a
          className="py-3  inline-block px-6 font-bold hover:bg-charade-300 hover:text-white rounded-2xl"
          href="#"
        >
          Book Cab
        </a>
        <a
          className="py-3  inline-block px-6 font-bold hover:bg-charade-300 hover:text-white rounded-2xl"
          href="#"
        >
          Routes
        </a>
        <a
          className="py-3 inline-block px-6 font-bold hover:bg-charade-300 hover:text-white rounded-2xl"
          href="#"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
