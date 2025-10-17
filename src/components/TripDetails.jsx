import React from "react";
import { formatDate } from "../utils/formatDate";

const TripDetails = ({ overview }) => {
  return (
    <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#541C9C] bg-white">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-[#000000]">
        <div className="font-roboto">
          <p className="font-bold text-sm sm:text-base capitalize">Departure From :</p>
          <p className="font-normal text-sm sm:text-base capitalize">{overview.departureCity || "-"}</p>
        </div>
        <div className="font-roboto">
          <p className="font-bold text-sm sm:text-base capitalize">Departure :</p>
          <p className="font-normal text-sm sm:text-base capitalize">
            {overview.departureDate ? formatDate(overview.departureDate) : "-"}
          </p>
        </div>
        <div className="font-roboto">
          <p className="font-bold text-sm sm:text-base capitalize">Arrival :</p>
          <p className="font-normal text-sm sm:text-base capitalize">
            {overview.arrivalDate ? formatDate(overview.arrivalDate) : "-"}
          </p>
        </div>
        <div className="font-roboto">
          <p className="font-bold text-sm sm:text-base capitalize">Destination :</p>
          <p className="font-normal text-sm sm:text-base capitalize">{overview.arrivalCity || "-"}</p>
        </div>
        <div className="font-roboto">
          <p className="font-bold text-sm sm:text-base capitalize">No. Of Travellers :</p>
          <p className="font-normal text-sm sm:text-base capitalize">{overview.travelers || "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;