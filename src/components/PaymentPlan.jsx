import React from "react";

const PaymentPlan = ({ payments }) => {
  const flights = [
    {
      title: "Total Amount",
      amount: "₹ 9,00,000",
      text: "for 3 pax (inclusive of GST)",
    },
    {
      title: "TCS",
      amount: "Not Collected",
      text: "",
    },
  ];
  return (
    <div>
      {/* Header */}
      <h2 className="mb-6 sm:mb-8 md:mb-10 text-[#000000] font-roboto font-bold text-2xl sm:text-3xl md:text-[34px] leading-7 sm:leading-8 md:leading-[32px] capitalize">
        Payment <span className="text-[#680099]">Plan</span>
      </h2>

      <div className="">
        {/* Total Amount & TCS Section */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
          {flights.map((f, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center border border-[#541C9C] overflow-hidden min-h-[60px] sm:h-[70px] rounded-lg sm:rounded-[8.72px]"
            >
              {/* Title Box */}
              <div className="bg-[#F9EEFF] text-[#000000] flex items-center justify-center w-full sm:w-48 md:w-64 lg:w-[319px] h-12 sm:h-[70px] border-b sm:border-b-0 sm:border-r border-[#541C9C] rounded-t-lg sm:rounded-tr-none sm:rounded-l-[8.26px] font-roboto font-medium text-base sm:text-lg md:text-xl lg:text-[26px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] capitalize flex-shrink-0">
                {f.title}
              </div>

              {/* Amount Info */}
              <div className="p-3 sm:p-4 flex-1">
                <div className="font-roboto font-light text-sm sm:text-base md:text-lg lg:text-[26px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] break-words">
                  <span className="font-bold">{`${f.amount}`}</span> {`${f.text}`}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Installments Table */}
        <div className="hidden lg:flex gap-2 md:gap-3 items-stretch">
          {/* Installment Column */}
          <div className="w-full max-w-[250px] lg:max-w-[335px] flex flex-col">
            <div className="bg-[#321E5D] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
              Installment
            </div>
            <div className="mt-1 flex-1 flex flex-col justify-between py-2 sm:py-3">
              {payments.length > 0 ? (
                payments.map((p, i) => (
                  <div
                    key={p.id}
                    className="font-roboto font-light text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] tracking-normal align-middle capitalize last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px] bg-[#F9EEFF] text-center text-[#000000] py-2 sm:py-3"
                  >
                    Installment {i + 1}
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-4">No installments</p>
              )}
            </div>
          </div>

          {/* Amount Column */}
          <div className="w-full max-w-[350px] lg:max-w-[511px] flex flex-col">
            <div className="bg-[#321E5D] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
              Amount
            </div>
            <div className="mt-1 flex-1 flex flex-col justify-between py-2 sm:py-3">
              {payments.map((p) => (
                <div
                  key={p.id}
                  className="font-roboto font-light text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] tracking-normal align-middle capitalize last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px] bg-[#F9EEFF] text-center text-[#000000] py-2 sm:py-3"
                >
                  {p.amount || "-"}
                </div>
              ))}
            </div>
          </div>

          {/* Due Date Column */}
          <div className="w-full max-w-[250px] lg:max-w-[343px] flex flex-col">
            <div className="bg-[#321E5D] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[45px] text-center font-roboto font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] capitalize">
              Due Date
            </div>
            <div className="mt-1 flex-1 flex flex-col justify-between py-2 sm:py-3">
              {payments.map((p) => (
                <div
                  key={p.id}
                  className="font-roboto font-light text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[32px] tracking-normal align-middle capitalize last:rounded-b-xl sm:last:rounded-b-2xl lg:last:rounded-b-[30px] bg-[#F9EEFF] text-center text-[#000000] py-2 sm:py-3"
                >
                  {p.dueDate ? p.dueDate : "-"}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Installments Cards */}
        <div className="lg:hidden space-y-4 sm:space-y-6">
          {payments.length > 0 ? (
            payments.map((p, i) => (
              <div
                key={p.id}
                className="bg-[#F9EEFF] rounded-2xl p-4 sm:p-6 shadow-sm border border-[#541C9C]"
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">Installment</div>
                    <div className="text-[#000000] font-light text-sm sm:text-base">Installment {i + 1}</div>
                  </div>
                  <div>
                    <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">Amount</div>
                    <div className="text-[#000000] font-light text-sm sm:text-base">{p.amount || "-"}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-[#321E5D] font-roboto font-medium text-sm sm:text-base mb-1">Due Date</div>
                    <div className="text-[#000000] font-light text-sm sm:text-base">{p.dueDate ? p.dueDate : "-"}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-6 border border-dashed border-gray-300 rounded-2xl">
              No installments added
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;