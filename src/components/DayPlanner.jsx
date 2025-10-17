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
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Day Planner</h3>
        <div>
          <button
            onClick={addDay}
            className="text-sm px-3 py-1 bg-green-600 text-white rounded"
          >
            Add Day
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {days.map((d) => (
          <div key={d.id} className="border p-3 rounded">
            <div className="flex justify-between items-center">
              <div className="font-medium">Day {d.id}</div>
              <button
                onClick={() => removeDay(d.id)}
                className="text-sm text-red-600"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2 mt-2">
              {/* Only Day 1 can set the starting arrival date */}
              {d.id === 1 && (
                <input
                  type="date"
                  value={d.arrivalDate || ""}
                  onChange={(e) => updateDay1Date(e.target.value)}
                  className="border p-2 rounded"
                  placeholder="Arrival Date"
                />
              )}

              <input
                value={d.morning}
                onChange={(e) => updateDay(d.id, "morning", e.target.value)}
                placeholder="Morning activity"
                className="border p-2 rounded"
              />
              <input
                value={d.afternoon}
                onChange={(e) => updateDay(d.id, "afternoon", e.target.value)}
                placeholder="Afternoon activity"
                className="border p-2 rounded"
              />
              <input
                value={d.evening}
                onChange={(e) => updateDay(d.id, "evening", e.target.value)}
                placeholder="Evening activity"
                className="border p-2 rounded"
              />
              <input
                value={d.transport}
                onChange={(e) => updateDay(d.id, "transport", e.target.value)}
                placeholder="Transport / flight details"
                className="border p-2 rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayPlanner;
