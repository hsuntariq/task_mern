import React, { useEffect, useState } from "react";
import "./gloabals.css";
import InvoiceForm from "./InvoiceForm";
import ItemForm from "./ItemForm";
import Invoice from "./Invoice";
const App = () => {
  const [active, setActive] = useState(0);
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    date: "",
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    amount: "",
    description: "",
    template: "default",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [disabled, setDisabled] = useState(true);

  const add = (item) => {
    setProducts((prevValues) => {
      // find the product
      let existingProduct = prevValues.find((item2) => {
        return item2.id == item.id;
      });

      if (existingProduct) {
        return prevValues.map((prod, index) =>
          prod.id == item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
        );
      } else {
        return [...prevValues, { ...item, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    if (
      !formData.invoiceNumber ||
      !formData.date ||
      !formData.clientName ||
      !formData.clientEmail ||
      !formData.clientPhone ||
      !formData.amount ||
      !formData.description
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [
    formData.invoiceNumber,
    formData.date,
    formData.clientName,
    formData.amount,
    formData.description,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex items-center gap-4 justify-center my-5">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <>
              <div
                key={index}
                className={`${
                  index == active && "bg-green-500 text-white"
                } h-[50px]  w-[50px] flex shadow-xl border-2 justify-center items-center border cursor-pointer border-green-500 rounded-full`}
              >
                <h2 className="text-2xl font-bold">{index + 1}</h2>
              </div>
              {index < 2 && (
                <div className="h-[2px] w-[50px] bg-gray-300 my-2"></div>
              )}
            </>
          );
        })}
      </div>

      {active == 0 && (
        <InvoiceForm
          active={active}
          setActive={setActive}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          disabled={disabled}
        />
      )}
      {active == 1 && (
        <ItemForm
          active={active}
          setActive={setActive}
          products={products}
          setProducts={setProducts}
          add={add}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          disabled={disabled}
        />
      )}
      {active == 2 && (
        <Invoice
          products={products}
          active={active}
          setActive={setActive}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default App;
