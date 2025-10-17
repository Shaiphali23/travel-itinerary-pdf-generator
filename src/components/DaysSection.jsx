import React from 'react'
import dayImg from "../assets/dayImg.jpg";
import { formatDate } from '../utils/formatDate';

const DaysSection = ({days, overview}) => {
  return (
    <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 space-y-6 sm:space-y-8 md:space-y-10">
        {days.map((day) => (
          <div
            key={day.id}
            className="flex flex-col lg:flex-row items-center lg:items-start overflow-hidden border-b border-b-[#777777] gap-6 sm:gap-8 md:gap-10 pb-4 sm:pb-5 md:pb-6"
          >
            {/* ======= Left Purple Sidebar ======= */}
            <div className="w-12 sm:w-16 md:w-20 lg:w-[73px] h-16 sm:h-20 md:h-24 lg:h-[308px] flex items-center justify-center rounded-2xl sm:rounded-3xl lg:rounded-[30px] bg-[#321E5D]">
              <p className="text-white font-roboto leading-6 sm:leading-7 md:leading-8 lg:leading-[32px] tracking-normal capitalize font-bold text-base sm:text-lg md:text-xl lg:text-[26px] lg:rotate-[-90deg] lg:origin-center whitespace-nowrap">
                Day {day.id}
              </p>
            </div>

            {/* ======= Main Content ======= */}
            <div className="flex flex-col xl:flex-row items-center gap-6 sm:gap-8 md:gap-10 w-full">
              {/* ======= Day Image + Date ======= */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-[216px] xl:h-[216px] rounded-full overflow-hidden">
                  <img
                    src={dayImg || "https://via.placeholder.com/216"}
                    alt="Day"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-3 sm:mt-4 text-[#000000] font-roboto font-bold text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-6 sm:leading-7 md:leading-8 lg:leading-[32px] tracking-normal align-middle capitalize">
                  {day.arrivalDate
                    ? formatDate(day.arrivalDate)
                    : "27th November"}
                </h3>
                <p className="text-[#000000] mt-1 sm:mt-2 font-roboto font-normal text-sm sm:text-base md:text-lg lg:text-[20px] leading-5 sm:leading-6 md:leading-7 lg:leading-[23px] tracking-normal text-center align-middle capitalize">
                  Arrival in{" "}
                  {overview.arrivalCity || "Singapore & City Exploration"}
                </p>
              </div>

              {/* ======= Timeline Section ======= */}
              <div className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
                {/* ======= Vertical timeline ======= */}
                <div className="relative flex flex-col items-center h-40 sm:h-48 md:h-56 lg:h-[250px]">
                  {/* Vertical line */}
                  <div className="w-[2px] sm:w-[3px] bg-[#2F80ED] h-full absolute left-1/2 transform -translate-x-1/2"></div>

                  {/* Circles */}
                  <div className="relative z-10 bg-white border-2 sm:border-3 border-[#321E5D] rounded-full w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mb-12 sm:mb-14 md:mb-16 lg:mb-[68px]"></div>
                  <div className="relative z-10 bg-white border-2 sm:border-3 border-[#321E5D] rounded-full w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mb-12 sm:mb-14 md:mb-16 lg:mb-[68px]"></div>
                  <div className="relative z-10 bg-white border-2 sm:border-3 border-[#321E5D] rounded-full w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"></div>
                </div>

                {/* ======= Text content ======= */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[65px] flex-1">
                  {/* Morning */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <h4 className="text-[#000000] w-full sm:w-24 font-roboto font-bold text-base sm:text-lg md:text-[20px] leading-6 sm:leading-7 md:leading-[32px] tracking-normal align-middle capitalize min-w-[80px]">
                      Morning
                    </h4>
                    <ul className="marker:text-[#000000] marker:text-[8px] sm:marker:text-[10px] list-inside list-disc pl-4 sm:pl-5 text-[#000000] space-y-1 font-roboto font-light text-sm sm:text-base md:text-[20px] leading-5 sm:leading-6 md:leading-[32px] tracking-normal align-middle capitalize">
                      <li>
                        {day.morning ||
                          "Arrive In Singapore. Transfer From Airport To Hotel."}
                      </li>
                    </ul>
                  </div>

                  {/* Afternoon */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <h4 className="text-[#000000] w-full sm:w-24 font-roboto font-bold text-base sm:text-lg md:text-[20px] leading-6 sm:leading-7 md:leading-[32px] tracking-normal align-middle capitalize min-w-[80px]">
                      Afternoon
                    </h4>
                    <ul className="marker:text-[#000000] marker:text-[8px] sm:marker:text-[10px] list-inside list-disc pl-4 sm:pl-5 text-[#000000] space-y-1 font-roboto font-light text-sm sm:text-base md:text-[20px] leading-5 sm:leading-6 md:leading-[32px] tracking-normal align-middle capitalize">
                      <li>{day.afternoon || "Check Into Your Hotel."}</li>
                      <li>Visit Marina Bay Sands Sky Park (2–3 Hours).</li>
                      <li>
                        Stroll Along Marina Bay Waterfront Promenade Or Helix
                        Bridge.
                      </li>
                    </ul>
                  </div>

                  {/* Evening */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <h4 className="text-[#000000] w-full sm:w-24 font-roboto font-bold text-base sm:text-lg md:text-[20px] leading-6 sm:leading-7 md:leading-[32px] tracking-normal align-middle capitalize min-w-[80px]">
                      Evening
                    </h4>
                    <ul className="marker:text-[#000000] marker:text-[8px] sm:marker:text-[10px] list-inside list-disc pl-4 sm:pl-5 text-[#000000] space-y-1 font-roboto font-light text-sm sm:text-base md:text-[20px] leading-5 sm:leading-6 md:leading-[32px] tracking-normal align-middle capitalize">
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