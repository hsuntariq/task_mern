export default function ModernTemplate() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">INVOICE</h1>
        <div className="w-20 h-20 bg-orange-200 flex items-center justify-center rounded-full text-orange-600 font-semibold">
          Your Logo
        </div>
      </div>

      {/* Business Details */}
      <div className="mb-4">
        <p className="font-semibold">Your name/business name</p>
        <p>Your address</p>
        <p>Your phone number</p>
        <p>Your email</p>
      </div>

      {/* Bill To */}
      <div className="mb-4">
        <p className="font-semibold">Bill to:</p>
        <p>Buyer name/business name</p>
        <p>Buyer address</p>
        <p>Buyer phone number</p>
        <p>Buyer email</p>
      </div>

      {/* Invoice Details */}
      <div className="mb-4">
        <p>
          <span className="font-semibold">Invoice number:</span> ########
        </p>
        <p>
          <span className="font-semibold">Invoice date:</span> MM/DD/YYYY
        </p>
        <p>
          <span className="font-semibold">Payment due:</span> MM/DD/YYYY
        </p>
      </div>

      {/* Items Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2">Item</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Price per unit</th>
              <th className="p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Item 1</td>
              <td className="p-2">#</td>
              <td className="p-2">$0.00</td>
              <td className="p-2">$0.00</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Item 2</td>
              <td className="p-2">#</td>
              <td className="p-2">$0.00</td>
              <td className="p-2">$0.00</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Item 3</td>
              <td className="p-2">#</td>
              <td className="p-2">$0.00</td>
              <td className="p-2">$0.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-4 text-right">
        <p>Subtotal: $0.00</p>
        <p>Tax 0.00%: $0.00</p>
        <p>Fees: $0.00</p>
        <p>Discounts: $0.00</p>
        <p className="mt-2 font-bold text-xl bg-orange-500 text-white p-2 rounded-lg">
          TOTAL: $0.00
        </p>
      </div>

      {/* Terms and Conditions */}
      <div className="mt-4">
        <p className="font-semibold">Terms and conditions</p>
        <p className="italic">Terms and conditions go here</p>
      </div>
    </div>
  );
}
