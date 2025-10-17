import React from "react";
import Plane from "../assets/Vector.png";
import Building from "../assets/building.png";
import Globe from "../assets/globe.png";
import Car from "../assets/bxs_taxi.png";
import Utensils from "../assets/visa purple 1.png";

const Header = ({overview}) => {
  return (
    <div className="bg-gradient-to-r from-[#4BA1EB] to-[#936FE0] text-white text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 relative shadow-lg w-full rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center">
      {/* Name */}
      <h2 className="font-poppins font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight sm:leading-8 md:leading-9 lg:leading-[32px] align-middle capitalize">
        Hi, {overview.name ? overview.name : "Rahul"}
      </h2>
      
      {/* Main Title */}
      <h1 className="mt-4 sm:mt-6 md:mt-8 font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight sm:leading-10 md:leading-[32px] align-middle capitalize max-w-full px-2 sm:px-0">
        {overview.title || "Singapore Itinerary"}
      </h1>
      
      {/* Duration */}
      <p className="mt-4 sm:mt-5 md:mt-6 font-poppins font-medium text-xl sm:text-2xl md:text-3xl lg:text-[34px] leading-tight sm:leading-7 md:leading-8 lg:leading-[32px] align-middle capitalize">
        {overview.duration || "4 Days 3 Nights"}
      </p>

      {/* Icons Row */}
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8 text-white">
        <img src={Plane} alt="Flight" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <img src={Building} alt="Hotel" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <img src={Globe} alt="Globe" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <img src={Car} alt="Transport" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <img src={Utensils} alt="Visa" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </div>
    </div>
  );
};

export default Header;