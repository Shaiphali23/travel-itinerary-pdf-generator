import React from "react";
import Plane from "../assets/Vector.png";
import Building from "../assets/building.png";
import Globe from "../assets/globe.png";
import Car from "../assets/bxs_taxi.png";
import Utensils from "../assets/visa purple 1.png";

const Header = ({overview}) => {
  return (
    <div className="bg-gradient-to-r from-[#4BA1EB] to-[#936FE0] text-white text-center py-16 px-8 relative shadow-lg w-full h-[289px] rounded-[30px] flex flex-col items-center justify-center">
      <h2 className="font-poppins font-medium text-[48px] leading-[32px] tracking-normal align-middle capitalize w-[224px] h-[32px] top-[245px] left-[579px] rotate-0 opacity-100">
        Hi, {overview.name ? overview.name : "Rahul"}
      </h2>
      <h1 className="mt-8 font-poppins font-semibold text-[48px] leading-[32px] tracking-normal align-middle capitalize w-[471px] h-[32px] top-[317px] left-[458px] rotate-0 opacity-100">
        {overview.title || "Singapore Itinerary"}
      </h1>
      <p className="mt-6 font-poppins font-medium text-[34px] leading-[32px] tracking-normal align-middle capitalize w-[264px] h-[32px] top-[379px] left-[561px] rotate-0 opacity-100">
        {overview.duration || "4 Days 3 Nights"}
      </p>

      {/* icons row */}
      <div className="flex justify-center gap-8 mt-8 text-white w-[230px] h-[32px] top-[438px] left-[579px] rotate-0 opacity-100">
        <img src={Plane} size={28} strokeWidth={1.5} />
        <img src={Building} size={28} strokeWidth={1.5} />
        <img src={Globe} size={28} strokeWidth={1.5} />
        <img src={Car} size={28} strokeWidth={1.5} />
        <img src={Utensils} size={28} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default Header;
