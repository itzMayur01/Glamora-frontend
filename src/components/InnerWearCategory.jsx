import React from "react";
import { useSelector } from "react-redux";
import HomeItems from "./HomeItems";

const InnerWearCategory = () => {
  const items = useSelector((store) => store.items);
  const innerWear = items.filter(
    (item) => item.category === "innerwear" && item.gender === "men"
  );

  console.log(innerWear);
  return (
    <div className="items-container">
      {innerWear.map((item) => (
        <HomeItems item={item}></HomeItems>
      ))}
    </div>
  );
};

export default InnerWearCategory;
