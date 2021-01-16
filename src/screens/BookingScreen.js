import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

const BookingScreen = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (userData) => {
    reset({ name: '', startLoc: '', endLoc: '', mobile: '' });
    userData.dateTime = startDate.toDateString();
    setLoading(true);
    fetch('/api/mail', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(userData),
    })
      .then(function (response) {
        if (!response.ok) {
          setLoading(false);
          throw new Error('Invalid Data');
        }
        return response.json();
      })
      .then(function (data) {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log('Invalid Data');
      });
  };

  return (
    <section
      id="booking"
      className="w-full flex-col bg-mustard-500 pt-10 flex justify-center items-center pl-4 pr-4"
    >
      <span className="font-bold text-3xl pb-10">Book Your Ride</span>
      <div className="w-full max-w-md bg-mustard-400 rounded-2xl p-4">
        <div className="space-y-4 text-gray-700">
          <div className="flex flex-wrap">
            <div className="w-full">
              <label className="block mb-1">
                Your Name
                {errors.name && (
                  <span className="text-red-400">*Name Required</span>
                )}
              </label>
              <input
                className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                type="text"
                name="name"
                ref={register({ required: true })}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
            <div className="w-full px-2 md:w-1/2">
              <label className="block mb-1">
                Start Destination{' '}
                {errors.startLoc && (
                  <span className="text-red-400">*Required</span>
                )}
              </label>
              <input
                className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                name="startLoc"
                ref={register({ required: true })}
              />
            </div>
            <div className="w-full px-2 md:w-1/2">
              <label className="block mb-1">
                End Destination{' '}
                {errors.endLoc && (
                  <span className="text-red-400">*Required</span>
                )}
              </label>
              <input
                className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                name="endLoc"
                ref={register({ required: true })}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
            <div className="w-full px-2 md:w-1/2">
              <label className="block mb-1">
                Date
                {errors.dateTime && (
                  <span className="text-red-400">*Required</span>
                )}
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="relative w-full px-2 md:w-1/2">
              <label className="block mb-1">
                Select Your Car{' '}
                {errors.car && (
                  <span className="text-red-400">*Select your car</span>
                )}
              </label>
              <select
                className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                placeholder="Regular input"
                name="car"
                ref={register({ required: true })}
              >
                <option defaultValue>Swift</option>
                <option>Etios</option>
                <option>Ertiga</option>
                <option>Innova</option>
                <option>Traveller</option>
              </select>
              <div className="absolute inset-y-0 top-7 right-1 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-full px-2">
              <label className="block mb-1">
                Mobile Number{' '}
                {errors.mobile && (
                  <span className="text-red-400">*Mobile Number Required</span>
                )}
              </label>
              <input
                className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="number"
                name="mobile"
                ref={register({ required: true })}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit((data) => onSubmit(data))}
        className="bg-charade-500 text-white text-xl py-4 px-10 mt-5 mb-16 rounded-full font-bold"
        disabled={loading}
      >
        {loading ? `Booking...` : `Book Now`}
      </button>
    </section>
  );
};

export default BookingScreen;
