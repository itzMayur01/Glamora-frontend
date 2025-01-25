import React from "react";
import { useSelector } from "react-redux";
import HomeItems from "./HomeItems";

const FootWearCategory = () => {
  const items = useSelector((store) => store.items);
  const footWear = items.filter(
    (item) =>
      item.category === "mens-footwear" &&
      (item.gender === "men" || item.gender === "unisex")
  );

  console.log(footWear);
  return (
    <div className="items-container">
      {footWear.map((item) => (
        <HomeItems item={item}></HomeItems>
      ))}
    </div>
  );
};

export default FootWearCategory;
