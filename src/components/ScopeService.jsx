import React from "react";

const ScopeService = () => {
  const services = [
    {
      service: "Flight tickets and hotel vouchers",
      details:
        "Delivered 3 days post full payment",
    },
    {
      service: "Web Check-In",
      details:
        "Boarding pass delivery via Email/WhatsApp",
    },
    {
      service: "Support",
      details:
        "Chat support – Response time: 4 hours",
    },
    {
      service: "Cancellation Support",
      details:
        "Provided",
    },
    {
      service: "Trip Support",
      details:
        "Response time: 5 minutes",
    },
  ];

  return (
    <div className="w-full mb-12 sm:mb-14 md:mb-16">
      {/* Header */}
      <h2 className="mb-6 sm:mb-8 md:mb-10 text-[#000000] font-roboto font-bold text-2xl sm:text-3xl md:text-[34px] leading-7 sm:leading-8 md:leading-[32px] capitalize">
        Scope of <span className="text-[#680099]">Service</span>
      </h2>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:flex gap-2 md:gap-3 items-stretch">
        {/* Service Column */}
        <div className="w-full max-w-[280px] lg:max-w-[374px] flex flex-col">
          <div className="bg-[#321E5D] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
            Service
          </div>
          <div className="mt-1 sm:mt-2 grid grid-rows-5 flex-1">
            {services.map((data, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-[#F9EEFF] px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 text-center text-[#000000] text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize font-light last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px]"
              >
                {data.service}
              </div>
            ))}
          </div>
        </div>

        {/* Details Column */}
        <div className="w-full max-w-[600px] lg:max-w-[816px] flex flex-col">
          <div className="bg-[#321E5D] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
            Details
          </div>
          <div className="mt-1 sm:mt-2 grid grid-rows-5 flex-1">
            {services.map((data, idx) => (
              <div
                key={idx}
                className="px-4 sm:px-8 md:px-16 lg:px-24 py-3 sm:py-4 flex items-center justify-center bg-[#F9EEFF] text-center text-[#000000] text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize font-light last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px] break-words"
              >
                {data.details}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="lg:hidden space-y-4 sm:space-y-6">
        {services.map((data, idx) => (
          <div
            key={idx}
            className="bg-[#F9EEFF] rounded-2xl p-4 sm:p-6 shadow-sm border border-[#541C9C]"
          >
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="text-[#321E5D] font-roboto font-medium text-base sm:text-lg mb-1">Service</div>
                <div className="text-[#000000] font-light text-sm sm:text-base">{data.service}</div>
              </div>
              <div>
                <div className="text-[#321E5D] font-roboto font-medium text-base sm:text-lg mb-1">Details</div>
                <div className="text-[#000000] font-light text-sm sm:text-base break-words">{data.details}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScopeService;