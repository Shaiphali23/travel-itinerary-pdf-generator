import React from "react";

const InclusionSummary = () => {
  const summary = {
    inclusionSummary: {
      title: "Inclusion Summary",
      items: [
        {
          id: 1,
          category: "Flight",
          count: 2,
          details: "All Flights Mentioned",
          status: "Awaiting Confirmation",
        },
        {
          id: 2,
          category: "Tourist Tax",
          count: 2,
          details:
            "Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Novotel (Gold Coast), Holiday Inn (Melbourne)",
          status: "Awaiting Confirmation",
        },
        {
          id: 3,
          category: "Hotel",
          count: 2,
          details: "Airport To Hotel - Hotel To Attractions - Day Trips If Any",
          status: "Included",
        },
      ],
      transferPolicy: {
        title: "Transfer Policy (Refundable Upon Claim)",
        description:
          "If Any Transfer Is Delayed Beyond 15 Minutes, Customers May Book An App-Based Or Radio Taxi And Claim A Refund For That Specific Leg.",
      },
    },
  };

  const items = summary.inclusionSummary.items;

  return (
    <div className="w-full mb-24">
      {/* Header */}
      <h2 className="mb-10 text-[#000000] font-roboto font-bold text-[34px] leading-[32px] capitalize">
        Inclusion <span className="text-[#680099]">summary</span>
      </h2>

      {/* Grid Layout */}
      <div className="flex gap-3 items-stretch">
        {/* Category Column */}
        <div className="w-[185px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Category
          </div>
          <div className="mt-2 grid grid-rows-3 flex-1">
            {items.map((data, idx) => (
              <div
                key={data.id}
                className="flex items-center justify-center bg-[#F9EEFF] px-6 py-6 text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light last:rounded-b-[30px]"
              >
                {data.category}
              </div>
            ))}
          </div>
        </div>

        {/* Count Column */}
        <div className="w-[130px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Count
          </div>
          <div className="mt-2 grid grid-rows-3 flex-1">
            {items.map((data, idx) => (
              <div
                key={data.id}
                className="px-6 py-3 flex items-center justify-center bg-[#F9EEFF] text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light last:rounded-b-[30px]"
              >
                {data.count}
              </div>
            ))}
          </div>
        </div>

        {/* Details Column */}
        <div className="w-[584px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Details
          </div>
          <div className="mt-2 grid grid-rows-3 flex-1">
            {items.map((data, idx) => (
              <div
                key={data.id}
                className="px-12 py-3 flex items-center justify-center bg-[#F9EEFF] text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light last:rounded-b-[30px]"
              >
                {data.details}
              </div>
            ))}
          </div>
        </div>

        {/* Status / Comments Column */}
        <div className="w-[269px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Status / Comments
          </div>
          <div className="mt-2 grid grid-rows-3 flex-1">
            {items.map((data, idx) => (
              <div
                key={data.id}
                className="px-6 py-3 flex items-center justify-center bg-[#F9EEFF] text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light last:rounded-b-[30px]"
              >
                {data.status}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transfer Policy Section */}
      <div className="mt-6 rounded-[30px] text-[#000000] font-roboto">
        <h3 className="font-roboto font-medium text-[18px] leading-[32px] tracking-normal align-middle capitalize">
          {summary.inclusionSummary.transferPolicy.title}
        </h3>
        <p className="font-roboto font-light text-[18px] leading-[32px] tracking-normal align-middle capitalize">
          {summary.inclusionSummary.transferPolicy.description}
        </p>
      </div>
    </div>
  );
};

export default InclusionSummary;
