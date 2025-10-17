import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      {/* Header */}
      <h2 className="mb-6 sm:mb-8 md:mb-10 text-[#000000] font-roboto font-bold text-2xl sm:text-3xl md:text-[34px] leading-7 sm:leading-8 md:leading-[32px] capitalize">
        Terms and <span className="text-[#680099]">Conditions</span>
      </h2>

      <p className="text-[#2F80ED] font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-6 sm:leading-7 md:leading-8 lg:leading-[32px] tracking-normal align-middle underline hover:text-[#1a5fb4] transition-colors cursor-pointer">
        View all terms and conditions
      </p>
    </div>
  );
};

export default TermsAndConditions;