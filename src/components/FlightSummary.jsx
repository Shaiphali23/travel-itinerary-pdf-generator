import React from "react";

const flights = [
  {
    date: "2024-01-10",
    airline: "Air India",
    flightNumber: "AX-123",
    from: "Delhi (DEL)",
    to: "Singapore (SIN)",
  },
  {
    date: "2024-01-10",
    airline: "Air India",
    flightNumber: "AX-123",
    from: "Delhi (DEL)",
    to: "Singapore (SIN)",
  },
  {
    date: "2024-01-10",
    airline: "Air India",
    flightNumber: "AX-123",
    from: "Delhi (DEL)",
    to: "Singapore (SIN)",
  },
  {
    date: "2024-01-10",
    airline: "Air India",
    flightNumber: "AX-123",
    from: "Delhi (DEL)",
    to: "Singapore (SIN)",
  },
];

// helper to format date like Thu 10 Jan'24
const formatFlightDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "2-digit",
  };
  return date.toLocaleDateString("en-GB", options).replace(",", "");
};

const FlightSummary = () => {
  return (
    <div className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 border-b border-b-[#777777] pb-6 sm:pb-7 md:pb-8">
      <h2 className="mb-6 sm:mb-7 md:mb-8 text-[#000000] font-roboto font-bold text-2xl sm:text-3xl md:text-[34px] leading-7 sm:leading-8 md:leading-[32px] tracking-normal capitalize">
        Flight <span className="text-[#680099]">Summary</span>
      </h2>

      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        {flights.map((f, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center border border-[#541C9C] overflow-hidden min-h-[60px] sm:h-[70px] rounded-lg sm:rounded-[8.72px]"
          >
            {/* Date Box */}
            <div className="bg-[#F9EEFF] text-[#000000] flex items-center justify-center w-full sm:w-48 md:w-64 lg:w-[319px] h-12 sm:h-[70px] border-b sm:border-b-0 sm:border-r border-[#541C9C] rounded-t-lg sm:rounded-tr-none sm:rounded-l-[8.26px] font-roboto font-medium text-base sm:text-lg md:text-xl lg:text-[26px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize flex-shrink-0">
              {formatFlightDate(f.date)}
            </div>

            {/* Flight Info */}
            <div className="p-3 sm:p-4 flex-1">
              <div className="font-roboto font-light text-sm sm:text-base md:text-lg lg:text-[26px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] break-words">
                <span className="font-bold">{`Fly ${f.airline} (${f.flightNumber})`}</span>{" "}
                From {f.from} To {f.to}.
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="font-roboto font-light text-sm sm:text-base md:text-[18px] leading-5 sm:leading-6 md:leading-[32px] mt-3 sm:mt-4 text-[#000000]">
        Note: All flights include meals, seat choice (excluding XL), and 20kg/25Kg checked baggage.
      </p>
    </div>
  );
};

export default FlightSummary;