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
    <div className="w-full max-w-[1105px] mt-14 border-b border-b-[#777777] pb-8">
      <h2 className="mb-8 text-[#000000] font-roboto font-bold text-[34px] leading-[32px] tracking-normal capitalize">
        Flight <span className="text-[#680099]">Summary</span>
      </h2>

      <div className="space-y-6">
        {flights.map((f, i) => (
          <div
            key={i}
            className="flex justify-start items-center border border-[#541C9C] overflow-hidden h-[70px] rounded-[8.72px]"
          >
            {/* Date Box */}
            <div className="bg-[#F9EEFF] text-[#000000] flex items-center justify-center w-[319px] h-[70px] border border-[#541C9C] rounded-[8.26px] font-roboto font-medium text-[26px] leading-[32px] capitalize mr-6 flex-shrink-0">
              {formatFlightDate(f.date)}
            </div>

            {/* Flight Info */}
            <div className="whitespace-nowrap overflow-hidden text-ellipsis font-roboto font-light text-[26px]">
              <span className="font-bold">{`Fly ${f.airline} (${f.flightNumber})`}</span>{" "}
              From {f.from} To {f.to}.
            </div>
          </div>
        ))}
      </div>

      <p className="font-roboto font-light text-[18px] leading-[32px] mt-4 text-[#000000]">
        Note: All flights include meals, seat choice (excluding XL), and 20kg/25Kg checked baggage.
      </p>
    </div>
  );
};

export default FlightSummary;
