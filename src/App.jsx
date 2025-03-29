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
    amount: "",
    description: "",
    template: "default",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      !formData.invoiceNumber ||
      !formData.date ||
      !formData.clientName ||
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
                onClick={() => setActive(index)}
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
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          disabled={disabled}
        />
      )}
      {active == 1 && (
        <ItemForm
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          disabled={disabled}
        />
      )}
      {active == 2 && (
        <Invoice
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
