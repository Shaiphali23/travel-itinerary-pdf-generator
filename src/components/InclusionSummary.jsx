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
    <div className="w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      {/* Header */}
      <h2 className="mb-6 sm:mb-8 md:mb-10 text-[#000000] font-roboto font-bold text-2xl sm:text-3xl md:text-[34px] leading-7 sm:leading-8 md:leading-[32px] capitalize">
        Inclusion <span className="text-[#680099]">summary</span>
      </h2>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:flex gap-2 md:gap-3 items-stretch">
        {/* Category Column */}
        <div className="w-full max-w-[140px] lg:max-w-[185px] flex flex-col">
          <div className="bg-[#321E5D] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
            Category
          </div>
          <div className="mt-1 sm:mt-2 grid grid-rows-3 flex-1">
            {items.map((data, idx) => (
              <div
                key={data.id}
                className="flex items-center justify-center bg-[#F9EEFF] px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 text-center text-[#000000] text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize font-light last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px]"
              >
                {data.category}
              </div>
            ))}
          </div>
        </div>

        {/* Count Column */}
        <div className="w-full max-w-[100px] lg:max-w-[130px] flex flex-col">
          <div className="bg-[#321E5D] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
            Count
          </div>
          <div className="mt-1 sm:mt-2 grid grid-rows-3 flex-1">
            {items.map((data, idx) => (
              <div
                key={data.id}
                className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-center bg-[#F9EEFF] text-center text-[#000000] text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize font-light last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px]"
              >
                {data.count}
              </div>
            ))}
          </div>
        </div>

        {/* Details Column */}
        <div className="w-full max-w-[400px] lg:max-w-[584px] flex flex-col">
          <div className="bg-[#321E5D] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
            Details
          </div>
          <div className="mt-1 sm:mt-2 grid grid-rows-3 flex-1">
            {items.map((data, idx) => (
              <div
                key={data.id}
                className="px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 flex items-center justify-center bg-[#F9EEFF] text-center text-[#000000] text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize font-light last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px] break-words"
              >
                {data.details}
              </div>
            ))}
          </div>
        </div>

        {/* Status / Comments Column */}
        <div className="w-full max-w-[200px] lg:max-w-[269px] flex flex-col">
          <div className="bg-[#321E5D] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
            Status / Comments
          </div>
          <div className="mt-1 sm:mt-2 grid grid-rows-3 flex-1">
            {items.map((data, idx) => (
              <div
                key={data.id}
                className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-center bg-[#F9EEFF] text-center text-[#000000] text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize font-light last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px]"
              >
                {data.status}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="lg:hidden space-y-4 sm:space-y-6">
        {items.map((data) => (
          <div
            key={data.id}
            className="bg-[#F9EEFF] rounded-2xl p-4 sm:p-6 shadow-sm border border-[#541C9C]"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">Category</div>
                <div className="text-[#000000] font-light text-sm sm:text-base">{data.category}</div>
              </div>
              <div>
                <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">Count</div>
                <div className="text-[#000000] font-light text-sm sm:text-base">{data.count}</div>
              </div>
              <div className="col-span-2">
                <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">Details</div>
                <div className="text-[#000000] font-light text-sm sm:text-base break-words">{data.details}</div>
              </div>
              <div className="col-span-2">
                <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">Status / Comments</div>
                <div className="text-[#000000] font-light text-sm sm:text-base">{data.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Transfer Policy Section */}
      <div className="mt-4 sm:mt-5 md:mt-6 rounded-2xl sm:rounded-3xl text-[#000000] font-roboto p-4 sm:p-5 bg-gray-50">
        <h3 className="font-roboto font-medium text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 md:leading-[32px] tracking-normal align-middle capitalize mb-2">
          {summary.inclusionSummary.transferPolicy.title}
        </h3>
        <p className="font-roboto font-light text-sm sm:text-base md:text-[18px] leading-5 sm:leading-6 md:leading-[32px] tracking-normal align-middle capitalize">
          {summary.inclusionSummary.transferPolicy.description}
        </p>
      </div>
    </div>
  );
};

export default InclusionSummary;