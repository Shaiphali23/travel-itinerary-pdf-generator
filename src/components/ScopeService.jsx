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
    <div className="w-full mb-16">
      {/* Header */}
      <h2 className="mb-10 text-[#000000] font-roboto font-bold text-[34px] leading-[32px] capitalize">
        Scope of <span className="text-[#680099]">Service</span>
      </h2>

      {/* Grid Layout */}
      <div className="flex gap-3 items-stretch">
        {/* Point Column */}
        <div className="w-[374px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Service
          </div>
          <div className="mt-2 grid grid-rows-5 flex-1">
            {services.map((data, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-[#F9EEFF] px-6 py-6 text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light last:rounded-b-[30px]"
              >
                {data.service}
              </div>
            ))}
          </div>
        </div>

        {/* Details Column */}
        <div className="w-[816px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Details
          </div>
          <div className="mt-2 grid grid-rows-5 flex-1">
            {services.map((data, idx) => (
              <div
                key={idx}
                className="px-24 py-3 flex items-center justify-center bg-[#F9EEFF] text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light last:rounded-b-[30px]"
              >
                {data.details}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeService;
