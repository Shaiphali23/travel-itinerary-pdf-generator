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
    <div className="w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      {/* Header */}
      <h2 className="mb-6 sm:mb-8 md:mb-10 text-[#000000] font-roboto font-bold text-2xl sm:text-3xl md:text-[34px] leading-7 sm:leading-8 md:leading-[32px] capitalize">
        Activity <span className="text-[#680099]">Table</span>
      </h2>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:flex gap-2 md:gap-3 items-stretch">
        {/* City Column */}
        <div className="w-full max-w-[140px] lg:max-w-[177px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
            City
          </div>
          <div className="mt-1 sm:mt-2 flex-1">
            {items.map((data) => (
              <div
                key={data.id}
                className={`last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px] flex items-center justify-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-[#000000] text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize font-light bg-[#F9EEFF]`}
              >
                {data.city}
              </div>
            ))}
          </div>
        </div>

        {/* Activity Column */}
        <div className="w-full max-w-[300px] lg:max-w-[523px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
            Activity
          </div>
          <div className="mt-1 sm:mt-2 flex-1">
            {items.map((data) => (
              <div
                key={data.id}
                className={`last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px] px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-center text-center text-[#000000] text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize font-light bg-[#F9EEFF]`}
              >
                {data.activity}
              </div>
            ))}
          </div>
        </div>

        {/* Type Column */}
        <div className="w-full max-w-[120px] lg:max-w-[204px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
            Type
          </div>
          <div className="mt-1 sm:mt-2 flex-1">
            {items.map((data) => (
              <div
                key={data.id}
                className={`bg-[#F9EEFF] last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px] px-3 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 flex items-center justify-center text-center text-[#000000] text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize font-light`}
              >
                {data.type}
              </div>
            ))}
          </div>
        </div>

        {/* Time Required Column */}
        <div className="w-full max-w-[150px] lg:max-w-[251px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
            Time Required
          </div>
          <div className="mt-1 sm:mt-2 flex-1">
            {items.map((data) => (
              <div
                key={data.id}
                className={`bg-[#F9EEFF] px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-center text-center text-[#000000] text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize font-light last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px]`}
              >
                {data.timeRequired}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="lg:hidden space-y-4">
        {items.map((data) => (
          <div
            key={data.id}
            className="bg-[#F9EEFF] rounded-2xl p-4 sm:p-6 shadow-sm"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 sm:col-span-1">
                <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">City</div>
                <div className="text-[#000000] font-light text-sm sm:text-base">{data.city}</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">Time Required</div>
                <div className="text-[#000000] font-light text-sm sm:text-base">{data.timeRequired}</div>
              </div>
              <div className="col-span-2">
                <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">Activity</div>
                <div className="text-[#000000] font-light text-sm sm:text-base">{data.activity}</div>
              </div>
              <div className="col-span-2">
                <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">Type</div>
                <div className="text-[#000000] font-light text-sm sm:text-base">{data.type}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTable;