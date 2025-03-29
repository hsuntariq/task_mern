import React, { useState } from "react";
import { items } from "./data/products";

const ItemForm = ({
  formData,
  setFormData,
  handleChange,
  handleSubmit,
  products,
  setProducts,
  disabled,
  add,
  setActive,
  active,
}) => {
  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-300">
        <ul className="unstyled flex flex-col gap-3">
          {items?.map((item, index) => {
            return (
              <li
                key={index}
                className="p-3 shadow rounded-md border border-gray-300 flex justify-between items-center"
              >
                {item.name}
                <button
                  onClick={() => add(item)}
                  className="p-2 rounded-md cursor-pointer text-white bg-green-500 px-4"
                >
                  Add
                </button>
              </li>
            );
          })}

          {/* Selected Products Section */}
          {products.length > 0 && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Selected Products:</h3>
              <ul className="flex flex-col gap-2">
                {products.map((product, index) => (
                  <li
                    key={index}
                    className="p-2 bg-white shadow-md rounded-md flex justify-between items-center border border-gray-300"
                  >
                    {product.name}:({product.quantity})
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            disabled={products.length === 0}
            onClick={() => setActive(active + 1)}
            className={`w-full ${
              products.length === 0
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white py-2 rounded-lg transition`}
          >
            Proceed
          </button>
        </ul>
      </div>
    </>
  );
};

export default ItemForm;
