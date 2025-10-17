import React from "react";

const ActivityTable = () => {
  const activity = {
    activityTable: {
      columns: ["City", "Activity", "Type", "Time Required"],
      activities: [
        {
          id: 1,
          city: "Rio De Janeiro",
          activity: "Sydney Harbour Cruise & Taronga Zoo",
          type: "Nature/Sightseeing",
          timeRequired: "2-3 Hours",
          highlighted: true,
        },
        {
          id: 2,
          city: "Rio De Janeiro",
          activity: "Sugarloaf Mountain Cable Car",
          type: "Adventure",
          timeRequired: "3 Hours",
          highlighted: false,
        },
        {
          id: 3,
          city: "Rio De Janeiro",
          activity: "Christ the Redeemer Visit",
          type: "Sightseeing",
          timeRequired: "2 Hours",
          highlighted: false,
        },
      ],
    },
  };

  const items = activity.activityTable.activities;

  return (
    <div className="w-full mb-24">
      {/* Header */}
      <h2 className="mb-10 text-[#000000] font-roboto font-bold text-[34px] leading-[32px] capitalize">
        Activity <span className="text-[#680099]">Table</span>
      </h2>

      {/* Grid Layout */}
      <div className="flex gap-3 items-stretch">
        {/* City Column */}
        <div className="w-[177px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            City
          </div>
          <div className="mt-2 flex-1">
            {items.map((data) => (
              <div
                key={data.id}
                className={`last:rounded-b-[30px] flex items-center justify-center px-6 py-4 text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light bg-[#F9EEFF]`}
              >
                {data.city}
              </div>
            ))}
          </div>
        </div>

        {/* Activity Column */}
        <div className="w-[523px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Activity
          </div>
          <div className="mt-2 flex-1">
            {items.map((data) => (
              <div
                key={data.id}
                className={`last:rounded-b-[30px] px-6 py-4 flex items-center justify-center text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light bg-[#F9EEFF]`}
              >
                {data.activity}
              </div>
            ))}
          </div>
        </div>

        {/* Type Column */}
        <div className="w-[204px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Type
          </div>
          <div className="mt-2 flex-1">
            {items.map((data) => (
              <div
                key={data.id}
                className={`bg-[#F9EEFF] last:rounded-b-[30px] px-12 py-4 flex items-center justify-center text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light"
                }`}
              >
                {data.type}
              </div>
            ))}
          </div>
        </div>

        {/* Time Required Column */}
        <div className="w-[251px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Time Required
          </div>
          <div className="mt-2 flex-1">
            {items.map((data) => (
              <div
                key={data.id}
                className={`bg-[#F9EEFF] px-6 py-4 flex items-center justify-center text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light last:rounded-b-[30px]`}
              >
                {data.timeRequired}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTable;
