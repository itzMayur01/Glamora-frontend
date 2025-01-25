import React from "react";
import { useSelector } from "react-redux";
import HomeItems from "./HomeItems";

const GroomingCategory = () => {
  const items = useSelector((store) => store.items);
  const groming = items.filter(
    (item) => item.category === "grooming" && item.gender === "unisex"
  );

  console.log(groming);
  return (
    <div className="items-container">
      {groming.map((item) => (
        <HomeItems item={item}></HomeItems>
      ))}
    </div>
  );
};

export default GroomingCategory;
