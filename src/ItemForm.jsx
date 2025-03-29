import React, { useState } from "react";
import { items } from "./data/products";

const ItemForm = ({ formData, setFormData, handleChange, handleSubmit }) => {
  const [products, setProducts] = useState([]);

  const add = (item) => {
    setProducts((prevValues) => {
      // find the product
      let existingProduct = prevValues.find((item2) => {
        return item2.id == item.id;
      });

      // update the quantity, if the product exists
      if (existingProduct) {
        return prevValues.map((prod, index) =>
          prod.id == item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
        );
      }
      //   if it doesnt exists
      else {
        return [...prevValues, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-300 focus:border-green-600 outline-0 border border-gray-300 focus:border-green-600 outline-0-gray-200">
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
                  className="p-2 rounded-md text-white bg-green-500 px-4"
                >
                  Add
                </button>
              </li>
            );
          })}

          <button className="p-2 rounded-md w-full text-white bg-black px-4">
            Proceed
          </button>
        </ul>
      </div>
    </>
  );
};

export default ItemForm;
