import React from "react";

const HotelDetailsForm = ({ hotels, setHotels }) => {
  const updateHotel = (index, key, value) => {
    const newHotels = hotels.map((h, i) =>
      i === index ? { ...h, [key]: value } : h
    );
    setHotels(newHotels);
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h3 className="font-semibold mb-2">Hotel Details</h3>
      {hotels.map((hotel, i) => (
        <div key={i} className="border p-3 rounded mb-4">
          <h4 className="font-medium mb-2">Hotel {i + 1}</h4>
          <input
            value={hotel.name}
            onChange={(e) => updateHotel(i, "name", e.target.value)}
            placeholder="Hotel Name"
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            value={hotel.city}
            onChange={(e) => updateHotel(i, "city", e.target.value)}
            placeholder="City"
            className="border p-2 rounded mb-2 w-full"
          />
          <div className="grid grid-cols-2 gap-2 mb-2">
            <input
              type="date"
              value={hotel.checkIn}
              onChange={(e) => updateHotel(i, "checkIn", e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="date"
              value={hotel.checkOut}
              onChange={(e) => updateHotel(i, "checkOut", e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
          <input
            type="number"
            value={hotel.nights}
            onChange={(e) => updateHotel(i, "nights", e.target.value)}
            placeholder="Nights"
            className="border p-2 rounded w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default HotelDetailsForm;
