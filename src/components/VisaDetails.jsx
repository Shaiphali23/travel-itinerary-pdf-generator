import React from "react";

const VisaDetails = () => {
  return (
    <div className="border-b border-b-[#777777] py-10">
      {/* Header */}
      <h2 className="mb-10 text-[#000000] font-roboto font-bold text-[34px] leading-[32px] capitalize">
        Visa <span className="text-[#680099]">details</span>
      </h2>

      {/* Outer Box */}
      <div className="border border-[#541C9C] h-[104px] rounded-[30px] flex items-center px-10 justify-around">
        {/* Left */}
        <div className="text-[#000000] text-start">
          <div className="font-roboto font-bold text-[26px] leading-[32px] tracking-normal align-middle capitalize">Visa Type</div>
          <p className="font-roboto font-normal text-[26px] leading-[32px] tracking-normal align-middle capitalize">123456</p>
        </div>

        {/* Middle */}
        <div className="text-[#000000] text-start">
          <div className="font-roboto font-bold text-[26px] leading-[32px] tracking-normal align-middle capitalize">Validity</div>
          <p className="font-roboto font-normal text-[26px] leading-[32px] tracking-normal align-middle capitalize">123456</p>
        </div>

        {/* Right */}
        <div className="text-[#000000] text-start">
          <div className="font-roboto font-bold text-[26px] leading-[32px] tracking-normal align-middle capitalize">Processing Date</div>
          <p className="font-roboto font-normal text-[26px] leading-[32px] tracking-normal align-middle capitalize">123456</p>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
