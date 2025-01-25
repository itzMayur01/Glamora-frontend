import React from "react";
import { useSelector } from "react-redux";
import HomeItems from "./HomeItems";

const EthinicWear = () => {
  const items = useSelector((store) => store.items);
  const ethnicWears = items.filter(
    (item) => item.category === "ethnicwear" && item.gender === "women"
  );

  console.log(ethnicWears);
  return (
    <div className="items-container">
      {ethnicWears.map((item) => (
        <HomeItems item={item}></HomeItems>
      ))}
    </div>
  );
};

export default EthinicWear;
