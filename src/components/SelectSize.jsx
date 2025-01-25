import { useState } from "react";

const SelectSize = () => {
  const selectSizeBtns = ["S", "M", "L", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = useState(null);

  const handleOnClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <div className="select-size">
        {selectSizeBtns.map((size) => (
          <button
            onClick={() => handleOnClick(size)}
            style={{
              color: selectedSize === size ? "#ff3f6c" : "", // Change background color based on the selected size
              // Ensure text is visible on the colored background
              borderColor: selectedSize === size ? "#ff3f6c" : "",
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectSize;
