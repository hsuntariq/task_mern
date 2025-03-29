export default function ModernTemplate({ formData, products }) {
  // Calculate total amount
  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">INVOICE</h1>
        <div className="w-20 h-20 bg-orange-200 flex items-center justify-center rounded-full text-orange-600 font-semibold">
          <h1 className="text-4xl">H</h1>
        </div>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Hassan's Task</p>
        <p>{formData.clientPhone}</p>
        <p>{formData.clientEmail}</p>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Bill to:</p>
        <p>{formData.clientName}</p>
      </div>

      {/* Invoice Details */}
      <div className="mb-4">
        <p>
          <span className="font-semibold">Invoice number:</span>{" "}
          {formData.invoiceNumber}
        </p>
        <p>
          <span className="font-semibold">Invoice date:</span> {formData.date}
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

      {/* Summary */}
      <div className="mt-4 text-right">
        <p className="mt-2 font-bold text-xl bg-orange-500 text-white p-2 rounded-lg">
          TOTAL: ${totalAmount.toFixed(2)}
        </p>
      </div>

      <div className="mt-4">
        <p className="font-semibold">About Product</p>
        <p className="italic">{formData.description}</p>
      </div>
    </div>
  );
}
