import { useState } from "react";
import { useEffect } from "react";

const SelectQuantity = ({ selectedQty, setSelectedQty, item }) => {
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    console.log("SelectQuantity re-rendered with selectedQty:", selectedQty);
  }, [selectedQty]);

  const handleOnClick = (quantity) => {
    console.log("Selected Quantity:", quantity);
    setSelectedQty(quantity);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Quantity : {selectedQty}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="0" // corrected for accessibility
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content select-qty-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 qty-title" id="exampleModalLabel">
                Select Quantity
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body select-qty">
              {quantities.map((quantity) => (
                <button
                  key={quantity}
                  onClick={() => handleOnClick(quantity)}
                  style={{
                    color: selectedQty === quantity ? "#fff" : "#000", // Better contrast
                    backgroundColor:
                      selectedQty === quantity ? "#ff3f6c" : "#f8f9fa", // Background change for selected qty
                    borderColor: selectedQty === quantity ? "#ff3f6c" : "#ccc",
                  }}
                  className="btn-select-qty"
                  data-bs-dismiss="modal" // Automatically close modal when quantity is selected
                >
                  {quantity}
                </button>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectQuantity;
