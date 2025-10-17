import React from "react";

const TourOverviewForm = ({ overview, setOverview }) => {
  const onChange = (key, value) => setOverview({ ...overview, [key]: value });

  return (
    <div className="bg-white p-3 sm:p-4 rounded shadow-sm">
      <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-2">Tour Overview</h3>

      <div className="space-y-3 sm:space-y-3">
        {/* Name */}
        <input
          value={overview.name}
          onChange={(e) => onChange("name", e.target.value)}
          placeholder="Your Name"
          className="w-full border p-2 rounded text-sm sm:text-base"
        />

        {/* Tour Title */}
        <input
          value={overview.title}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="Singapore Itinerary"
          className="w-full border p-2 rounded text-sm sm:text-base"
        />

        {/* Duration & Travelers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            value={overview.duration}
            onChange={(e) => onChange("duration", e.target.value)}
            placeholder="Duration (e.g. 5 Days 4 Nights)"
            className="border p-2 rounded text-sm sm:text-base"
          />
          <input
            type="number"
            value={overview.travelers}
            onChange={(e) => onChange("travelers", e.target.value)}
            placeholder="Number of travellers"
            className="border p-2 rounded text-sm sm:text-base"
          />
        </div>

        {/* Departure Fields */}
        <h4 className="font-medium mt-4 text-gray-700 text-base sm:text-lg">Departure</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            value={overview.departureCity}
            onChange={(e) => onChange("departureCity", e.target.value)}
            placeholder="Departure City"
            className="border p-2 rounded text-sm sm:text-base"
          />
          <input
            type="date"
            value={overview.departureDate}
            onChange={(e) => onChange("departureDate", e.target.value)}
            className="border p-2 rounded text-sm sm:text-base"
          />
        </div>

        {/* Arrival Fields */}
        <h4 className="font-medium mt-4 text-gray-700 text-base sm:text-lg">Arrival</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            value={overview.arrivalCity}
            onChange={(e) => onChange("arrivalCity", e.target.value)}
            placeholder="Arrival City"
            className="border p-2 rounded text-sm sm:text-base"
          />
          <input
            type="date"
            value={overview.arrivalDate}
            onChange={(e) => onChange("arrivalDate", e.target.value)}
            className="border p-2 rounded text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default TourOverviewForm;