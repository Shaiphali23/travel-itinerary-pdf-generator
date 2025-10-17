import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/**
 * generatePDF
 * - targetId: id of the DOM node to capture (like 'pdf-preview')
 *
 * Notes:
 * - scale: increase for higher fidelity (more pixels) but heavier memory.
 * - We render the node to a canvas, then add that as an image to jsPDF.
 * - If the content height is more than single A4, we split into pages.
 */
export async function generatePDF(targetId = "pdf-preview") {
  const input = document.getElementById(targetId);
  if (!input) {
    alert("PDF preview not found");
    return;
  }

  // adjust scale for better fidelity (increase if you want sharper text)
  const scale = 2; // tweak this if text is blurry or too small

  // html2canvas options
  const opt = {
    scale,
    useCORS: true,
    allowTaint: true,
    logging: false,
    windowWidth: input.scrollWidth,
    windowHeight: input.scrollHeight,
  };

  try {
    const canvas = await html2canvas(input, opt);
    const imgData = canvas.toDataURL("image/png");

    // A4 size in mm
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // image width in mm to fit page width with small margin
    const imgProps = {
      width: canvas.width,
      height: canvas.height
    };

    // convert px to mm (approx): 1px = 0.264583 mm when scale 1; fit by ratio
    const pxToMm = (px) => px * 0.264583 * (1 / scale);

    const imgWidth = pageWidth; // fit full width
    const imgHeight = pxToMm(canvas.height) * (pageWidth / pxToMm(canvas.width));

    if (imgHeight <= pageHeight) {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    } else {
      // split into pages
      let position = 0;
      const pageCanvas = document.createElement('canvas');
      const pageCtx = pageCanvas.getContext('2d');

      // compute pixel height per PDF page
      const pxPerPage = Math.floor((pageHeight / imgHeight) * canvas.height);

      while (position < canvas.height) {
        pageCanvas.width = canvas.width;
        pageCanvas.height = Math.min(pxPerPage, canvas.height - position);

        // draw the portion of the original canvas to pageCanvas
        pageCtx.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
        pageCtx.drawImage(canvas, 0, position, canvas.width, pageCanvas.height, 0, 0, canvas.width, pageCanvas.height);

        const pageData = pageCanvas.toDataURL('image/png');
        if (position > 0) pdf.addPage();
        pdf.addImage(pageData, 'PNG', 0, 0, imgWidth, pageHeight);
        position += pageCanvas.height;
      }
    }

    pdf.save('itinerary.pdf');
  } catch (err) {
    console.error("PDF generation error:", err);
    alert("Could not generate PDF (see console for details).");
  }
}

export default generatePDF;
