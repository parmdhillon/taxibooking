import React from 'react';

const MenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={() => {
        toggleMenu();
      }}
      className="p-2 rounded-full bg-charade-500 text-white md:hidden focus:outline-none"
    >
      {isOpen ? (
        <svg
          className="block h-6 w-6 transition-all transform rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
};

export default MenuButton;
