import React from 'react'
import dayImg from "../assets/dayImg.jpg";

const DaysSection = ({days, overview}) => {
  return (
    <div className="mt-14 space-y-10">
        {days.map((day) => (
          <div
            key={day.id}
            className="flex flex-col md:flex-row items-center md:items-start overflow-hidden border-b border-b-[#777777] gap-10 pb-6"
          >
            {/* ======= Left Purple Sidebar ======= */}
            <div className="w-[73px] h-[308px] flex items-center justify-center rounded-[30px] bg-[#321E5D]">
              <p className="text-[#FFFFFF] font-roboto leading-[32px] tracking-normal capitalize font-bold text-[26px] rotate-[-90deg] origin-center whitespace-nowrap">
                Day {day.id}
              </p>
            </div>

            {/* ======= Main Content ======= */}
            <div className="flex flex-col md:flex-row items-center gap-10 w-full">
              {/* ======= Day Image + Date ======= */}
              <div className="flex flex-col items-center text-center">
                <div className="w-[216px] h-[216px] rounded-full overflow-hidden">
                  <img
                    src={dayImg || "https://via.placeholder.com/216"}
                    alt="Day"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-[#000000] font-roboto font-bold text-[26px] leading-[32px] tracking-normal align-middle capitalize">
                  {day.arrivalDate
                    ? formatDate(day.arrivalDate)
                    : "27th November"}
                </h3>
                <p className="text-[#000000] mt-2 font-roboto font-normal text-[20px] leading-[23px] tracking-normal text-center align-middle capitalize">
                  Arrival in{" "}
                  {overview.arrivalCity || "Singapore & City Exploration"}
                </p>
              </div>

              {/* ======= Timeline Section ======= */}
              <div className="flex items-start gap-10 w-full">
                {/* ======= Vertical timeline ======= */}
                <div className="relative flex flex-col items-center h-[250px]">
                  {/* Vertical line */}
                  <div className="w-[3px] bg-[#2F80ED] h-full absolute left-1/2 transform -translate-x-1/2"></div>

                  {/* Circles */}
                  <div className="relative z-10 bg-[#FFFFFF] border-3 border-[#321E5D] rounded-full w-5 h-5 mb-[68px]"></div>
                  <div className="relative z-10 bg-[#FFFFFF] border-3 border-[#321E5D] rounded-full w-5 h-5 mb-[68px]"></div>
                  <div className="relative z-10 bg-[#FFFFFF] border-3 border-[#321E5D] rounded-full w-5 h-5"></div>
                </div>

                {/* ======= Text content ======= */}
                <div className="flex flex-col gap-[65px]">
                  {/* Morning */}
                  <div className="flex gap-4 w-[725px] h-[32px] top-[717px] left-[562px] rotate-0 opacity-100">
                    <h4 className="text-[#000000] w-[90px] font-roboto font-bold text-[20px] leading-[32px] tracking-normal align-middle capitalize">
                      Morning
                    </h4>
                    <ul className="marker:text-[#000000] marker:text-[10px] list-inside list-disc pl-5 text-[#000000] space-y-1 font-roboto font-light text-[20px] leading-[32px] tracking-normal align-middle capitalize">
                      <li>
                        {day.morning ||
                          "Arrive In Singapore. Transfer From Airport To Hotel."}
                      </li>
                    </ul>
                  </div>

                  {/* Afternoon */}
                  <div className="flex gap-4 w-[745px] h-[128px] top-[779px] left-[562px] rotate-0 opacity-100">
                    <h4 className="text-[#000000] w-[90px] font-roboto font-bold text-[20px] leading-[32px] tracking-normal align-middle capitalize">
                      Afternoon
                    </h4>
                    <ul className="marker:text-[#000000] marker:text-[10px] list-inside list-disc pl-5 text-[#000000] space-y-1 font-roboto font-light text-[20px] leading-[32px] tracking-normal align-middle capitalize">
                      <li>{day.afternoon || "Check Into Your Hotel."}</li>
                      <li>Visit Marina Bay Sands Sky Park (2–3 Hours).</li>
                      <li>
                        Stroll Along Marina Bay Waterfront Promenade Or Helix
                        Bridge.
                      </li>
                    </ul>
                  </div>

                  {/* Evening */}
                  <div className="flex gap-4 w-[745px] h-[67px] top-[938px] left-[562px] rotate-0 opacity-100">
                    <h4 className="text-[#000000] w-[90px] font-roboto font-bold text-[20px] leading-[32px] tracking-normal align-middle capitalize">
                      Evening
                    </h4>
                    <ul className="marker:text-[#000000] marker:text-[10px] list-inside list-disc pl-5 text-[#000000] space-y-1 font-roboto font-light text-[20px] leading-[32px] tracking-normal align-middle capitalize">
                      <li>
                        {day.evening ||
                          "Explore Gardens By The Bay, Including Super Tree Grove (3–4 Hours)."}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default DaysSection
