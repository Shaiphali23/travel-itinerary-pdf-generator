import React from "react";
import footerImg from "../assets/PLAN.PACK.GO!.png";

const BookNowButton = () => {
  return (
    <div className="flex justify-center items-center w-full mt-10 mb-20">
      {/* Inner Box (Image + Button) */}
      <div className="flex flex-col items-center justify-center w-[444px] h-[160px]">
        {/* Centered Image */}
        <img
          src={footerImg}
          alt="Plan Pack Go"
          className="w-[350px] h-auto object-contain mb-6"
        />

        {/* Book Now Button */}
        <button className="mt-2 bg-[#541C9C] text-[#FFFFFF] text-lg px-10 py-3 rounded-[52px] shadow-md hover:bg-[#53197d] transition-all duration-300 w-[444px] h-[73px] font-roboto font-semibold text-[26px] leading-[27px] tracking-normal align-middle">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookNowButton;
