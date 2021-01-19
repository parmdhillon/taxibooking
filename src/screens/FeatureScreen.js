import React from 'react';
import Image from 'next/image';
const FeatureScreen = () => {
  return (
    <>
      <section className="w-full bg-white py-16">
        <span className="block text-center text-5xl font-extrabold gradient-text">
          What we offer?
        </span>
        <p className="text-center text-charade-300 text-xl my-8">
          Service is our attitude, and attitude is everything!
        </p>
        <div className="flex flex-col justify-between items-start md:flex-row w-full my-16">
          <div className="w-full">
            <div>
              <img
                src="/img/features/pin.svg"
                width="100px"
                className="m-auto"
              />
            </div>
            <span className="block text-center font-bold text-charade-500 my-4 text-xl">
              Location Pickup
            </span>
            <div className="m-auto max-w-xs">
              <p className="text-center text-lg text-gray-400">
                We are 24/7 available to pickup you from your marked location.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div>
              <img
                src="/img/features/airplane.svg"
                width="100px"
                className="m-auto"
              />
            </div>
            <span className="block text-center font-bold text-charade-500 my-4 text-xl">
              Airport Pickup
            </span>
            <div className="m-auto max-w-xs">
              <p className="text-center text-lg text-gray-400">
                On arrival, we are there for you. We are just one call away from
                you.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div>
              <img
                src="/img/features/india.svg"
                width="100px"
                className="m-auto"
              />
            </div>
            <span className="block text-center font-bold text-charade-500 my-4 text-xl">
              All India Tours
            </span>
            <div className="m-auto max-w-xs">
              <p className="text-center text-lg text-gray-400">
                Need a Taxi For your Vacations? You’ve come at the right place
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #30cfd0 35%, #8367ed 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
};

export default FeatureScreen;
