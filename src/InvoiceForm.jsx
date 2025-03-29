import { useState } from "react";

export default function InvoiceForm({
  formData,
  setFormData,
  handleChange,
  handleSubmit,
  disabled,
  setActive,
  active,
}) {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-300 focus:border-green-600 outline-0 border border-gray-300 focus:border-green-600 outline-0-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Invoice</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Invoice Number
          </label>
          <input
            type="text"
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 focus:border-green-600 outline-0 rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 focus:border-green-600 outline-0 rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Client Name
          </label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 focus:border-green-600 outline-0 rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Client Email
          </label>
          <input
            type="text"
            name="clientEmail"
            value={formData.clientEmail}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 focus:border-green-600 outline-0 rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Client Phone
          </label>
          <input
            type="text"
            name="clientPhone"
            value={formData.clientPhone}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 focus:border-green-600 outline-0 rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 focus:border-green-600 outline-0 rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 focus:border-green-600 outline-0 rounded-lg focus:ring focus:ring-blue-200"
            required
          ></textarea>
        </div>
        <div></div>
        <button
          onClick={() => setActive(active + 1)}
          disabled={disabled}
          type="submit"
          className={`w-full ${
            disabled ? "bg-gray-600 " : "bg-blue-600 hover:bg-blue-700"
          }  text-white py-2 rounded-lg  transition  `}
        >
          Proceed
        </button>
      </form>
    </div>
  );
}
