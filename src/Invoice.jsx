import React from "react";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";

const Invoice = ({
  formData,
  setFormData,
  handleChange,
  handleSubmit,
  products,
}) => {
  const templates = [
    { id: "default", name: "Default Template" },
    { id: "modern", name: "Modern Template" },
    { id: "classic", name: "Classic Template" },
  ];

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-300 focus:border-green-600 outline-0 border border-gray-300 focus:border-green-600 outline-0-gray-200">
        <label className="block text-sm font-medium text-gray-700">
          Select Template
        </label>
        <select
          name="template"
          value={formData.template}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 focus:border-green-600 outline-0 rounded-lg focus:ring focus:ring-blue-200"
        >
          {templates.map((template) => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>
      </div>
      <div className="my-5">
        {formData.template == "classic" && (
          <ClassicTemplate formData={formData} products={products} />
        )}
        {formData.template == "modern" && (
          <ModernTemplate formData={formData} products={products} />
        )}
      </div>
    </>
  );
};

export default Invoice;
