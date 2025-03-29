export default function ClassicTemplate() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
          <p className="text-sm">16 June 2025</p>
          <p className="font-bold">
            Invoice No. <span className="font-semibold">12345</span>
          </p>
        </div>
        <h1 className="text-4xl font-bold">Invoice</h1>
      </div>

      {/* Bill To */}
      <div className="mb-4">
        <p className="font-bold">BILL TO:</p>
        <p>Marceline Anderson</p>
        <p>+123-456-7890</p>
      </div>

      {/* Items Table */}
      <div className="border-t border-b py-4">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="text-black font-bold border-b">
              <th className="p-2">DESCRIPTION</th>
              <th className="p-2">PRICE</th>
              <th className="p-2">SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">30x Social Media Pack Design</td>
              <td className="p-2">$20.00</td>
              <td className="p-2">$600.00</td>
            </tr>
            <tr>
              <td className="p-2">5x Furniture</td>
              <td className="p-2">$100.00</td>
              <td className="p-2">$500.00</td>
            </tr>
            <tr>
              <td className="p-2">1x Interior Design</td>
              <td className="p-2">$700.00</td>
              <td className="p-2">$700.00</td>
            </tr>
            <tr>
              <td className="p-2">1x Architecture</td>
              <td className="p-2">$1000.00</td>
              <td className="p-2">$1000.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-4 text-right border-t pt-4">
        <div className="flex justify-between">
          <p className="font-bold">SUBTOTAL</p>
          <p>$2800.00</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">TAX (20%)</p>
          <p>$560.00</p>
        </div>
        <div className="flex justify-between text-xl font-bold border-t pt-2">
          <p>TOTALS</p>
          <p>$3360.00</p>
        </div>
      </div>

      {/* Payment Information */}
      <div className="mt-6 flex justify-between border-t pt-4 text-sm">
        <div>
          <p className="font-bold">Payment Information</p>
          <p>Studio Shodwe</p>
          <p>Bank: Really Great Bank</p>
          <p>Account No: 0123 4567 8901</p>
        </div>
        <div>
          <p className="font-bold">Samira Hadid</p>
          <p>123 Anywhere St, Any City, ST 12345</p>
          <p>+123-456-7890</p>
          <p>hello@reallygreatsite.com</p>
        </div>
      </div>
    </div>
  );
}
