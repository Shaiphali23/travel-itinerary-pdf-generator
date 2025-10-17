import React from "react";
import { generatePDF } from "../utils/generatePDF";

const GeneratePDFButton = ({ targetId = "pdf-preview" }) => {
  return (
    <div className="mt-4 sm:mt-5 md:mt-6">
      <button
        onClick={() => generatePDF(targetId)}
        className="bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base md:text-lg font-medium"
      >
        Get Itinerary (Download PDF)
      </button>
    </div>
  );
};

export default GeneratePDFButton;