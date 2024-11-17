import React from "react";
import Slider from "react-slick";
import Testimonial from "../data/Testimonials.json";
import { FaStar, FaHeart } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mt-10">
      {Testimonial.map((item) => (
        <div key={item.id} className="p-4">
          <div className="w-full p-4 mb-6 rounded-lg shadow-lg bg-gradient-to-b from-blue-500 to-blue-600">
            <div className="flex items-start text-left">
              <div className="flex-shrink-0">
                <div className="relative inline-block">
                  <a href="#" className="relative block">
                    <img
                      alt="profile"
                      src={`/assets/testimonils/${item.profileImage}`}
                      className="mx-auto object-cover rounded-full h-16 w-16"
                    />
                  </a>
                </div>
              </div>
              <div className="ml-6">
                <p className="flex items-baseline">
                  <span className="text-white">{item.name}</span>
                </p>
                <div className="flex items-center mt-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-300" />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p className="max-w-xs mt-1 font-light text-white">
                {item.testimonial}
              </p>
            </div>
            <div className="flex items-start mt-6 text-gray-100">
              <button className="mr-4 hover:text-white">
                <FaHeart className="w-8 h-6" />
              </button>
              <button className="hover:text-white">
                <IoShareSocialSharp className="w-8 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
