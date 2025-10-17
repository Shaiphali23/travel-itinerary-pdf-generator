import React from "react";
import { formatDate } from "../utils/formatDate";

const HotelBookings = ({ hotels = [] }) => {
  // Handle both single object and array of objects
  const hotelsArray = Array.isArray(hotels) ? hotels : [hotels];

  return (
    <div className="w-full mt-14 mb-24 h-[745px]">
      {/* Header */}
      <h2 className="mb-10 text-[#000000] font-roboto font-bold text-[34px] leading-[32px] capitalize">
        Hotel <span className="text-[#680099]">Bookings</span>
      </h2>

      {/* Grid Layout */}
      <div className="flex gap-3 h-[508px] mb-6 items-stretch">
        {/* City Column */}
        <div className="w-[257px] flex flex-col h-full">
          <div className="rounded-t-[45px] bg-[#321E5D] text-[#FFFFFF] px-6 py-4 text-center font-roboto font-medium text-[26px] leading-[32px] capitalize">
            City
          </div>
          <div className="flex-1 flex flex-col justify-between">
            {hotelsArray.map((item, idx) => (
              <div
                key={idx}
                className={`flex-1 bg-[#F9EEFF] px-6 py-6 text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light ${
                  idx === hotelsArray.length - 1 ? "rounded-b-[30px]" : ""
                }`}
              >
                {item.city}
              </div>
            ))}
          </div>
        </div>

        {/* Check In Column */}
        <div className="w-[214px] flex flex-col h-full">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Check In
          </div>
          <div className="flex-1 flex flex-col justify-between">
            {hotelsArray.map((item, idx) => (
              <div
                key={idx}
                className={`flex-1 bg-[#F9EEFF] px-6 py-6 text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light ${
                  idx === hotelsArray.length - 1 ? "rounded-b-[30px]" : ""
                }`}
              >
                {formatDate(item.checkIn)}
              </div>
            ))}
          </div>
        </div>

        {/* Check Out Column */}
        <div className="w-[219px] flex flex-col h-full">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Check Out
          </div>
          <div className="flex-1 flex flex-col justify-between">
            {hotelsArray.map((item, idx) => (
              <div
                key={idx}
                className={`flex-1 bg-[#F9EEFF] px-6 py-6 text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light ${
                  idx === hotelsArray.length - 1 ? "rounded-b-[30px]" : ""
                }`}
              >
                {formatDate(item.checkOut)}
              </div>
            ))}
          </div>
        </div>

        {/* Nights Column */}
        <div className="w-[138px] flex flex-col h-full">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Nights
          </div>
          <div className="flex-1 flex flex-col justify-between">
            {hotelsArray.map((item, idx) => (
              <div
                key={idx}
                className={`flex-1 bg-[#F9EEFF] px-6 py-6 text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light ${
                  idx === hotelsArray.length - 1 ? "rounded-b-[30px]" : ""
                }`}
              >
                {item.nights}
              </div>
            ))}
          </div>
        </div>

        {/* Hotel Name Column  */}
        <div className="w-[336px] flex flex-col h-full">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Hotel Name
          </div>
          <div className="flex-1 flex flex-col justify-between">
            {hotelsArray.map((item, idx) => (
              <div
                key={idx}
                className={`flex-1 bg-[#F9EEFF] px-6 py-6 text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light whitespace-nowrap overflow-hidden text-ellipsis ${
                  idx === hotelsArray.length - 1 ? "rounded-b-[30px]" : ""
                }`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Notes */}
      <div className="w-full border-b border-[#777777] py-8 space-y-2 text-[#000000] font-roboto font-light text-[18px] leading-[32px] capitalize">
        <p>1. All Hotels Are Tentative And Can Be Replaced With Similar.</p>
        <p>2. Breakfast Included For All Hotel Stays.</p>
        <p>3. All Hotels Will Be 4* And Above Category</p>
        <p>
          4. A maximum occupancy of 2 people/room is allowed in most hotels.
        </p>
      </div>
    </div>
  );
};

export default HotelBookings;
