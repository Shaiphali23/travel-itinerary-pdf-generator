import React from "react";
import { generatePDF } from "../utils/generatePDF";

const GeneratePDFButton = ({ targetId = "pdf-preview" }) => {
  return (
    <div className="mt-4">
      <button
        onClick={() => generatePDF(targetId)}
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        Get Itinerary (Download PDF)
      </button>
    </div>
  );
};

export default GeneratePDFButton;
