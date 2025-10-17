import React from "react";
import { addDays } from "../utils/dateUtils";

const DayPlanner = ({ days, setDays }) => {
  const addDay = () => {
    const id = days.length ? Math.max(...days.map((d) => d.id)) + 1 : 1;

    // get Day 1 date
    let newArrivalDate = "";
    if (days.length && days[0].arrivalDate) {
      // increment date by (id - 1)
      newArrivalDate = addDays(days[0].arrivalDate, id - 1);
    }

    setDays([
      ...days,
      {
        id,
        morning: "",
        afternoon: "",
        evening: "",
        transport: "",
        arrivalDate: newArrivalDate,
      },
    ]);
  };

  const removeDay = (id) => {
    setDays(days.filter((d) => d.id !== id));
  };

  const updateDay = (id, key, value) => {
    setDays(days.map((d, idx) => (d.id === id ? { ...d, [key]: value } : d)));
  };

  const updateDay1Date = (newDate) => {
    // propagate Day 1 date to all days
    setDays(
      days.map((d, idx) => ({
        ...d,
        arrivalDate: addDays(newDate, idx),
      }))
    );
  };

  return (
    <div className="bg-white p-3 sm:p-4 rounded shadow-sm">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-3 sm:mb-2">
        <h3 className="font-semibold text-lg sm:text-xl">Day Planner</h3>
        <div>
          <button
            onClick={addDay}
            className="w-full sm:w-auto text-sm px-4 py-2 sm:px-3 sm:py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Add Day
          </button>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {days.map((d) => (
          <div key={d.id} className="border p-3 sm:p-4 rounded">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
              <div className="font-medium text-base sm:text-lg">Day {d.id}</div>
              <button
                onClick={() => removeDay(d.id)}
                className="text-sm text-red-600 hover:text-red-800 transition-colors w-full sm:w-auto text-left sm:text-center py-1 sm:py-0"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:gap-3 mt-3 sm:mt-2">
              {/* Only Day 1 can set the starting arrival date */}
              {d.id === 1 && (
                <input
                  type="date"
                  value={d.arrivalDate || ""}
                  onChange={(e) => updateDay1Date(e.target.value)}
                  className="border p-2 sm:p-2 rounded text-sm sm:text-base"
                  placeholder="Arrival Date"
                />
              )}

              <input
                value={d.morning}
                onChange={(e) => updateDay(d.id, "morning", e.target.value)}
                placeholder="Morning activity"
                className="border p-2 sm:p-2 rounded text-sm sm:text-base"
              />
              <input
                value={d.afternoon}
                onChange={(e) => updateDay(d.id, "afternoon", e.target.value)}
                placeholder="Afternoon activity"
                className="border p-2 sm:p-2 rounded text-sm sm:text-base"
              />
              <input
                value={d.evening}
                onChange={(e) => updateDay(d.id, "evening", e.target.value)}
                placeholder="Evening activity"
                className="border p-2 sm:p-2 rounded text-sm sm:text-base"
              />
              <input
                value={d.transport}
                onChange={(e) => updateDay(d.id, "transport", e.target.value)}
                placeholder="Transport / flight details"
                className="border p-2 sm:p-2 rounded text-sm sm:text-base"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayPlanner;