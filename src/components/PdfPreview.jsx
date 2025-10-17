import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import Header from "./Header";
import TripDetails from "./TripDetails";
import DaysSection from "./DaysSection";
import FlightSummary from "./FlightSummary"
import HotelBooking from "./HotelBooking"
import ImportantNotes from "./ImportantNotes"
import ScopeService from "./ScopeService"
import InclusionSummary from "./InclusionSummary"
import ActivityTable from "./ActivityTable"
import TermsAndConditions from "./TermsAndConditions"
import PaymentPlan from "./PaymentPlan";
import VisaDetails from "./VisaDetails"
import BookNowButton from "./BookNowButton"

const PdfPreview = ({ data }) => {
  const { overview, days, hotels, payments } = data;
  const pdfRef = useRef();

  const handleDownloadPDF = async () => {
    const element = pdfRef.current;
    if (!element) return;

    // Store original styles
    const originalStyles = {
      width: element.style.width,
      overflow: element.style.overflow
    };

    // Set styles for PDF generation
    element.style.width = '1207px';
    element.style.overflow = 'visible';

    try {
      const canvas = await html2canvas(element, {
        scale: 1, // Scale 1 use karo taki content cut na ho
        useCORS: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
        onclone: (clonedDoc, clonedElement) => {
          // Apply PDF-specific styles to cloned element
          clonedElement.style.width = '1207px';
          clonedElement.style.overflow = 'visible';
          clonedElement.style.background = '#ffffff';
          
          // Remove any oklch colors from all elements
          const allElements = clonedElement.querySelectorAll('*');
          allElements.forEach(el => {
            const computedStyle = window.getComputedStyle(el);
            
            // Replace oklch colors with safe alternatives
            if (computedStyle.background.includes('oklch')) {
              el.style.background = '#ffffff';
            }
            if (computedStyle.backgroundColor.includes('oklch')) {
              el.style.backgroundColor = '#ffffff';
            }
            if (computedStyle.color.includes('oklch')) {
              el.style.color = '#000000';
            }
          });
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // Calculate PDF dimensions for single page
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // Create custom sized PDF for single page
      const pdf = new jsPDF({
        orientation: pdfHeight > pdfWidth ? 'portrait' : 'landscape',
        unit: 'mm',
        format: [pdfWidth, pdfHeight] // Custom height to fit all content
      });

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('itinerary.pdf');
      
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('PDF download failed: ' + error.message);
    } finally {
      // Restore original styles
      element.style.width = originalStyles.width;
      element.style.overflow = originalStyles.overflow;
    }
  };

  return (
    <div className="w-full">
      {/* PDF Content - Responsive Container */}
      <div className="w-full overflow-x-auto bg-gray-100 p-2 sm:p-4">
        <div
          ref={pdfRef}
          className="text-gray-800 font-sans bg-white mx-auto"
          style={{
            background: '#ffffff',
            color: '#000000',
            width: '100%',
            maxWidth: '1207px',
            minWidth: '280px'
          }}
        >
          {/* Responsive padding */}
          <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <Header overview={overview} />
            <TripDetails overview={overview} />
            <DaysSection days={days} overview={overview} />
            <FlightSummary />
            <HotelBooking hotels={hotels} />
            <ImportantNotes />
            <ScopeService />
            <InclusionSummary />
            <ActivityTable />
            <TermsAndConditions />
            <PaymentPlan payments={payments} />
            <VisaDetails />
            <BookNowButton />
          </div>
        </div>
      </div>

      {/* Download Button - Responsive */}
      <div className="w-[240px] mx-auto text-center mt-6 sm:mt-8 md:mt-10">
        <button
          onClick={handleDownloadPDF}
          className="cursor-pointer bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-lg text-sm font-medium shadow-md hover:bg-purple-700 transition-colors duration-200 w-full max-w-xs sm:max-w-none"
        >
          Download Itinerary PDF
        </button>
      </div>
    </div>
  );
};

export default PdfPreview;