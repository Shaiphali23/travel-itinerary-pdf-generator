🏝️ Travel Itinerary Builder
A comprehensive React-based web application for creating beautiful and professional travel itineraries with PDF export functionality.

✨ Features
📝 Dynamic Itinerary Creation - Build complete travel plans with multiple sections

🏨 Hotel Management - Add and manage hotel bookings with check-in/out dates

✈️ Flight Details - Track flight information and summaries

💰 Payment Plans - Create installment-based payment schedules

📄 PDF Export - Generate professional PDF itineraries with one click

🎨 Responsive Design - Works perfectly on all devices (mobile, tablet, desktop)

🔄 Real-time Preview - Live preview of the itinerary as you build

🛠️ Tech Stack
Frontend: React.js + Vite

Styling: Tailwind CSS

PDF Generation: jsPDF + html2canvas

Icons: Custom SVG assets

Date Utilities: Custom date formatting functions

📦 Project Structure
text
src/
├── components/
│   ├── ActivityTable.jsx          # Activity schedule table
│   ├── BookNowButton.jsx          # Call-to-action button
│   ├── DaysSection.jsx            # Day-wise itinerary display
│   ├── FlightSummary.jsx          # Flight information
│   ├── GeneratePDFButton.jsx      # PDF export functionality
│   ├── Header.jsx                 # Main header with trip overview
│   ├── HotelBookings.jsx          # Hotel booking details
│   ├── HotelDetailsForm.jsx       # Hotel input form
│   ├── ImportantNotes.jsx         # Terms and conditions
│   ├── InclusionSummary.jsx       # Package inclusions
│   ├── InclusionsExclusionsForm.jsx # Inclusions/exclusions form
│   ├── PaymentPlan.jsx            # Payment schedule display
│   ├── PaymentPlanForm.jsx        # Payment plan form
│   ├── PdfPreview.jsx             # PDF preview component
│   ├── ScopeService.jsx           # Service scope details
│   ├── TermsAndConditions.jsx     # T&C section
│   ├── TourOverviewForm.jsx       # Main tour details form
│   ├── TripDetails.jsx            # Trip summary card
│   └── VisaDetails.jsx            # Visa information
├── utils/
│   ├── dateUtils.js               # Date manipulation functions
│   ├── formatDate.js              # Date formatting utilities
│   └── generatePDF.js             # PDF generation logic
├── assets/                        # Images and icons
└── App.jsx                        # Main application component
🚀 Getting Started
Prerequisites
Node.js (version 14 or higher)

npm or yarn

Installation
Clone the repository

bash
git clone <your-repo-url>
cd travel-itinerary-builder
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open your browser
Navigate to http://localhost:5173

Building for Production
bash
npm run build
💡 Usage
Building an Itinerary
Fill Tour Overview - Enter basic trip details (name, duration, travelers)

Plan Daily Activities - Add morning, afternoon, and evening activities for each day

Add Hotel Bookings - Input hotel details with check-in/out dates

Set Payment Plan - Create installment schedule with amounts and due dates

Define Inclusions/Exclusions - Specify what's included and excluded

Preview & Download - View real-time preview and download as PDF

PDF Features
Single-page professional layout

Preserves all styling and formatting

High-quality export with proper scaling

Automatic content adjustment

🎨 Design Features
Purple & Blue Color Scheme - Professional travel-themed design

Consistent Typography - Roboto font family throughout

Card-based Layout - Clean, organized sections

Responsive Grids - Adapts to all screen sizes

Interactive Forms - Real-time data binding

📱 Responsive Breakpoints
Mobile: < 640px - Stacked layouts, optimized touch targets

Tablet: 640px - 1024px - Hybrid layouts

Desktop: ≥ 1024px - Full table layouts with horizontal organization

🔧 Customization
Adding New Sections
Create new component in components/ folder

Import and integrate in ItineraryBuilder.jsx

Update state management for new data fields

Styling Modifications
Modify Tailwind classes in component files

Update color scheme in individual components

Adjust responsive breakpoints as needed

🐛 Known Issues
PDF generation may have styling differences due to html2canvas limitations

Very long hotel names might get truncated in table views

Date formatting assumes specific input formats

🚀 Future Enhancements
Multiple itinerary templates

Image upload for destinations

Currency conversion for payments

Multi-language support

Cloud storage for itineraries

Email sharing functionality

📄 License
This project is created as part of an educational assignment.

👨‍💻 Developer
Shaiphali
Frontend Developer & UI/UX Enthusiast

Built with ❤️ using React + Vite + Tailwind CSS
