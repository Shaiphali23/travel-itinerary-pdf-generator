import React from "react";
import footerImg from "../assets/PLAN.PACK.GO!.png";

const BookNowButton = () => {
  return (
    <div className="flex justify-center items-center w-full mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-20">
      {/* Inner Box (Image + Button) */}
      <div className="flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[444px] px-4 sm:px-0">
        {/* Centered Image */}
        <img
          src={footerImg}
          alt="Plan Pack Go"
          className="w-64 sm:w-72 md:w-80 lg:w-[350px] h-auto object-contain mb-4 sm:mb-5 md:mb-6"
        />

        {/* Book Now Button */}
        <button className="h-[73px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[444px] bg-[#541C9C] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-3 rounded-full sm:rounded-[52px] shadow-md hover:bg-[#53197d] transition-all duration-300 font-roboto font-semibold text-base sm:text-lg md:text-xl lg:text-[26px] leading-tight sm:leading-6 md:leading-7 lg:leading-[27px] align-middle">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookNowButton;