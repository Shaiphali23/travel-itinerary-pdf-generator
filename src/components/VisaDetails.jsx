import React from "react";

const VisaDetails = () => {
  return (
    <div className="border-b border-b-[#777777] py-6 sm:py-8 md:py-10">
      {/* Header */}
      <h2 className="mb-6 sm:mb-8 md:mb-10 text-[#000000] font-roboto font-bold text-2xl sm:text-3xl md:text-[34px] leading-7 sm:leading-8 md:leading-[32px] capitalize">
        Visa <span className="text-[#680099]">details</span>
      </h2>

      {/* Outer Box */}
      <div className="border border-[#541C9C] min-h-[80px] sm:min-h-[90px] md:h-[104px] rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-0 gap-4 sm:gap-0">
        {/* Left - Visa Type */}
        <div className="text-[#000000] text-center sm:text-start w-full sm:w-auto">
          <div className="font-roboto font-bold text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-6 sm:leading-7 md:leading-8 lg:leading-[32px] tracking-normal align-middle capitalize">
            Visa Type
          </div>
          <p className="font-roboto font-normal text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-6 sm:leading-7 md:leading-8 lg:leading-[32px] tracking-normal align-middle capitalize">
            123456
          </p>
        </div>

        {/* Middle - Validity */}
        <div className="text-[#000000] text-center sm:text-start w-full sm:w-auto">
          <div className="font-roboto font-bold text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-6 sm:leading-7 md:leading-8 lg:leading-[32px] tracking-normal align-middle capitalize">
            Validity
          </div>
          <p className="font-roboto font-normal text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-6 sm:leading-7 md:leading-8 lg:leading-[32px] tracking-normal align-middle capitalize">
            123456
          </p>
        </div>

        {/* Right - Processing Date */}
        <div className="text-[#000000] text-center sm:text-start w-full sm:w-auto">
          <div className="font-roboto font-bold text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-6 sm:leading-7 md:leading-8 lg:leading-[32px] tracking-normal align-middle capitalize">
            Processing Date
          </div>
          <p className="font-roboto font-normal text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-6 sm:leading-7 md:leading-8 lg:leading-[32px] tracking-normal align-middle capitalize">
            123456
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
