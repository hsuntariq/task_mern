import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ModernTemplate({ formData, products }) {
  const invoiceRef = useRef();

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const downloadPDF = () => {
    const input = invoiceRef.current;
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      let imgWidth = 210; // A4 width in mm
      let imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      // If content overflows, add new pages
      let yPosition = 0;
      while (yPosition < imgHeight) {
        pdf.addImage(imgData, "PNG", 0, yPosition, imgWidth, imgHeight);
        yPosition += 297; // Move to next A4 page height (297mm)
        if (yPosition < imgHeight) {
          pdf.addPage(); // Add new page
        }
      }

      pdf.save("Hassan_task.pdf");
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-4 flex justify-end">
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>

      <div ref={invoiceRef} className="p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">INVOICE</h1>
          <div className="w-20 h-20 bg-[#ff6600] flex items-center justify-center rounded-full text-white font-semibold">
            <h1 className="text-4xl">H</h1>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Hassan's Task</p>
          <p>{formData.clientPhone || "Client Phone"}</p>
          <p>{formData.clientEmail || "Client Email"}</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Bill to:</p>
          <p>{formData.clientName || "Client Name"}</p>
        </div>

        <div className="mb-4">
          <p>
            <span className="font-semibold">Invoice number:</span>{" "}
            {formData.invoiceNumber || "####"}
          </p>
          <p>
            <span className="font-semibold">Invoice date:</span>{" "}
            {formData.date || "DD/MM/YYYY"}
          </p>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#ff6600] text-white">
                <th className="p-2">Item</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Price per unit</th>
                <th className="p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{product.name}</td>
                  <td className="p-2">{product.quantity}</td>
                  <td className="p-2">${product.price.toFixed(2)}</td>
                  <td className="p-2">
                    ${(product.price * product.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-right">
          <p className="mt-2 font-bold text-xl bg-[#ff6600] text-white p-2 rounded-lg">
            TOTAL: ${totalAmount.toFixed(2)}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">About Product</p>
          <p className="italic">
            {formData.description || "No description provided."}
          </p>
        </div>
      </div>
    </div>
  );
}
