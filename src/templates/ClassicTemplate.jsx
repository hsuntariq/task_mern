import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ClassicTemplate({ formData, products }) {
  const invoiceRef = useRef();

  const calculateTotal = () => {
    return products.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const subtotal = calculateTotal();
  const tax = subtotal * 0.2;
  const total = subtotal + tax;

  const downloadPDF = () => {
    const input = invoiceRef.current;

    html2canvas(input, { scale: 2, useCORS: true, backgroundColor: "#ffffff" })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("Hassan_task.pdf");
      })
      .catch((error) => {
        console.error("PDF Generation Error:", error);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-4 flex justify-end">
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>

      <div
        ref={invoiceRef}
        className="bg-[#fff] shadow-lg rounded-lg border border-[#d1d5dc] p-6"
      >
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div>
            <p className="text-sm">{formData.date || "DD/MM/YYYY"}</p>
            <p className="font-bold">
              Invoice No.{" "}
              <span className="font-semibold">
                {formData.invoiceNumber || "####"}
              </span>
            </p>
          </div>
          <h1 className="text-4xl font-bold">Invoice</h1>
        </div>

        <div className="mb-4">
          <p className="font-bold">BILL TO:</p>
          <p>{formData.clientName || "Client Name"}</p>
          <p>{formData.email || "Client Email"}</p>
          <p>{formData.phone || "Client Phone"}</p>
        </div>

        <div className="border-t border-b py-4">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="text-[#000] font-bold border-b">
                <th className="p-2">DESCRIPTION</th>
                <th className="p-2">PRICE</th>
                <th className="p-2">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">${item.price.toFixed(2)}</td>
                  <td className="p-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-right border-t pt-4">
          <div className="flex justify-between">
            <p className="font-bold">SUBTOTAL</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">TAX (20%)</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-2">
            <p>TOTAL</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
