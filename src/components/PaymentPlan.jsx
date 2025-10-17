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
      <h2 className="mb-10 text-[#000000] font-roboto font-bold text-[34px] leading-[32px] capitalize">
        Payment <span className="text-[#680099]">Plan</span>
      </h2>

      <div className="">
        <div className="space-y-6 mb-10">
          {flights.map((f, i) => (
            <div
              key={i}
              className="flex justify-start items-center border border-[#541C9C] overflow-hidden h-[70px] rounded-[8.72px]"
            >
              {/* Date Box */}
              <div className="bg-[#F9EEFF] text-[#000000] flex items-center justify-center w-[319px] h-[70px] border border-[#541C9C] rounded-[8.26px] font-roboto font-medium text-[26px] leading-[32px] capitalize mr-6 flex-shrink-0">
                {f.title}
              </div>

              {/* Flight Info */}
              <div className="whitespace-nowrap overflow-hidden text-ellipsis font-roboto font-light text-[26px]">
                <span className="font-bold">{`${f.amount}`}</span> {`${f.text}`}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 items-stretch">
          {/* Installment Column */}
          <div className="w-[335px] flex flex-col">
            <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
              Installment
            </div>
            <div className="mt-1 flex-1 flex flex-col justify-between py-3">
              {payments.length > 0 ? (
                payments.map((p, i) => (
                  <div
                    key={p.id}
                    className="font-roboto font-light text-[20px] leading-[32px] tracking-normal align-middle capitalize last:rounded-b-[30px] bg-[#F9EEFF] text-center text-[#000000] py-2"
                  >
                    Installment {i + 1}
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No installments</p>
              )}
            </div>
          </div>

          {/* Amount Column */}
          <div className="w-[511px] flex flex-col">
            <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
              Amount
            </div>
            <div className="mt-1 flex-1 flex flex-col justify-between py-3">
              {payments.map((p) => (
                <div
                  key={p.id}
                  className="font-roboto font-light text-[20px] leading-[32px] tracking-normal align-middle capitalize last:rounded-b-[30px] bg-[#F9EEFF] text-center text-[#000000] py-2"
                >
                  {p.amount || "-"}
                </div>
              ))}
            </div>
          </div>

          {/* Due Date Column */}
          <div className="w-[343px] flex flex-col">
            <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
              Due Date
            </div>
            <div className="mt-1 flex-1 flex flex-col justify-between py-3">
              {payments.map((p) => (
                <div
                  key={p.id}
                  className="font-roboto font-light text-[20px] leading-[32px] tracking-normal align-middle capitalize last:rounded-b-[30px] bg-[#F9EEFF] text-center text-[#000000] py-2"
                >
                  {p.dueDate ? p.dueDate : "-"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
