import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import routes from '../data/routes';
import PriceCard from '../components/PriceCard/PriceCard';

const RouteScreen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="routes" className="w-full bg-charade-500 pt-8 pb-14">
      <span className="block text-center text-4xl text-white font-bold">
        Popular Routes
      </span>
      <span className="block text-center text-charade-200 my-5 text-xl">
        One Way
      </span>
      <div className="w-full px-8">
        <Slider {...settings}>
          {routes.map((route) => (
            <PriceCard route={route} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RouteScreen;
