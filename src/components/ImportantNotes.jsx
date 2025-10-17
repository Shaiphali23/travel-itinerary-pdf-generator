import React from "react";

const ImportantNotes = () => {
  const notes = [
    {
      point: "Airlines Standard Policy",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Flight/Hotel Cancellation",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Trip Insurance",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Hotel Check-In & Check Out",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Visa Rejection",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
  ];

  return (
    <div className="w-full mt-28 mb-20">
      {/* Header */}
      <h2 className="mb-10 text-[#000000] font-roboto font-bold text-[34px] leading-[32px] capitalize">
        Important <span className="text-[#680099]">notes</span>
      </h2>

      {/* Grid Layout */}
      <div className="flex gap-3 items-stretch">
        {/* Point Column */}
        <div className="w-[329px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Point
          </div>
          <div className="mt-2 grid grid-rows-5 flex-1">
            {notes.map((note, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-[#F9EEFF] px-6 py-6 text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light last:rounded-b-[30px]"
              >
                {note.point}
              </div>
            ))}
          </div>
        </div>

        {/* Details Column */}
        <div className="w-[860px] flex flex-col">
          <div className="bg-[#321E5D] text-[#FFFFFF] px-6 py-4 rounded-t-[45px] text-center font-roboto font-medium text-[26px] capitalize">
            Details
          </div>
          <div className="mt-2 grid grid-rows-5 flex-1">
            {notes.map((note, idx) => (
              <div
                key={idx}
                className="px-24 py-3 flex items-center justify-center bg-[#F9EEFF] text-center text-[#000000] text-[20px] leading-[32px] capitalize font-light last:rounded-b-[30px]"
              >
                {note.details}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantNotes;
