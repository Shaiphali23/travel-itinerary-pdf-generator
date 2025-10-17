import React from "react";
import { formatDate } from "../utils/formatDate";

const TripDetails = ({ overview }) => {
  return (
    <div className="mt-8 p-6 rotate-0 opacity-100 rounded-[30px] border border-[#541C9C] bg-[#FFFFFF] h-[104px]">
      <div className="grid grid-cols-5 gap-4 text-sm w-[1105px] h-[64px] top-[553px] left-[137px] rotate-0 opacity-100 text-[#000000]">
        <div className="w-[157px] h-[64px] font-roboto text-[16px] leading-[32px] tracking-normal align-middle">
          <p className="font-bold capitalize">Departure From :</p>
          <p className="font-normal capitalize">{overview.departureCity}</p>
        </div>
        <div className="w-[107px] h-[64px] font-roboto text-[16px] leading-[32px] tracking-normal align-middle">
          <p className="font-bold capitalize">Departure :</p>
          <p className="font-normal capitalize">
            {formatDate(overview.departureDate)}
          </p>
        </div>
        <div className="w-[107px] h-[64px] font-roboto text-[16px] leading-[32px] tracking-normal align-middle">
          <p className="font-bold capitalize">Arrival :</p>
          <p className="font-normal capitalize">
            {formatDate(overview.arrivalDate)}
          </p>
        </div>
        <div className="w-[119px] h-[64px] font-roboto text-[16px] leading-[32px] tracking-normal align-middle">
          <p className="font-bold capitalize">Destination :</p>
          <p className="font-normal capitalize">{overview.arrivalCity}</p>
        </div>
        <div className="w-[167px] h-[64px] font-roboto text-[16px] leading-[32px] tracking-normal align-middle">
          <p className="font-bold capitalize">No. Of Travellers :</p>
          <p className="font-normal capitalize">{overview.travelers}</p>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
