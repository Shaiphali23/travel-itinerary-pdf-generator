import React, { useState } from "react";
import TourOverviewForm from "../components/TourOverviewForm";
import DayPlanner from "../components/DayPlanner";
import HotelDetailsForm from "../components/HotelDetailsForm";
import PaymentPlanForm from "../components/PaymentPlanForm";
import InclusionsExclusionsForm from "../components/InclusionsExclusionsForm";
// import GeneratePDFButton from "../components/GeneratePDFButton";
import PdfPreview from "../components/PdfPreview";
import { addDays } from "../utils/dateUtils";

const ItineraryBuilder = () => {
  const defaultHotels = Array.from({ length: 5 }, () => ({
    name: "Super Townhouse Oak Vashi formerly Blue Diamond",
    city: "Singapore",
    checkIn: "2024-02-24",
    checkOut: "2024-02-26",
    nights: 2,
  }));

  // central data model
  const [formData, setFormData] = useState({
    overview: {
      name: "",
      title: "",
      duration: "3 Days 2 Nights",
      travelers: 2,
      departureCity: "",
      departureDate: "",
      arrivalCity: "",
      arrivalDate: "",
    },
    days: [
      {
        id: 1,
        morning: "",
        afternoon: "",
        evening: "",
        transport: "",
        arrivalDate: "",
      },
    ],
    hotels: defaultHotels,
    payments: [
      // { id:1, amount: "", dueDate: "" }
    ],
    inclusions: "",
    exclusions: "",
  });

  const setPart = (path, value) => {
    setFormData((prev) => {
      const next = { ...prev };

      if (path === "overview") {
        next.overview = value;
        if (next.days.length) {
          next.days = next.days.map((day, index) => ({
            ...day,
            arrivalDate: addDays(value.arrivalDate, index),
          }));
        }
      } else if (path === "days") {
        next.days = value;
      } else if (path === "hotels") {
        next.hotels = value;
      } else if (path === "payments") {
        next.payments = value;
      } else if (path === "inclusions") {
        next.inclusions = value;
      } else if (path === "exclusions") {
        next.exclusions = value;
      }

      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-4 sm:p-6 mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-4 sm:mb-6">
        Itinerary Builder
      </h1>

      <div className="flex flex-col items-center w-full">
        {/* Forms Section - Responsive */}
        <div className="w-full max-w-full lg:max-w-[600px] bg-[#FFFFFF] p-4 sm:p-6 rounded-xl shadow-md space-y-4 sm:space-y-6 mb-6 sm:mb-10">
          <TourOverviewForm
            overview={formData.overview}
            setOverview={(v) => setPart("overview", v)}
          />
          <DayPlanner
            days={formData.days}
            setDays={(v) => setPart("days", v)}
          />
          <HotelDetailsForm
            hotels={formData.hotels}
            setHotels={(v) => setPart("hotels", v)}
          />

          <PaymentPlanForm
            payments={formData.payments}
            setPayments={(v) => setPart("payments", v)}
          />
          <InclusionsExclusionsForm
            inclusions={formData.inclusions}
            exclusions={formData.exclusions}
            setInclusions={(v) => setPart("inclusions", v)}
            setExclusions={(v) => setPart("exclusions", v)}
          />
          {/* <GeneratePDFButton targetId="pdf-preview" /> */}
        </div>

        {/* PDF Preview Section - Responsive */}
        <div className="w-full max-w-full overflow-x-auto">
          <div
            id="pdf-preview"
            className="bg-[#FFFFFF] w-full max-w-[1200px] lg:w-[1300px] rounded-xl shadow-lg opacity-100 mx-auto"
          >
            <PdfPreview data={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;