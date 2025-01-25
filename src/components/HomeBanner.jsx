import React from "react";

const HomeBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner1-2">
        <img className="banner-1" src="../images/banner-01.png" />
        <img className="banner-2" src="../images/banner-02.png" />

        <img className="coupan" src="../images/coupan.jpg" />

        <img className="coupan-1" src="../images/coupan-1.png" />
        {/* <img className="coupan-2" src="../images/coupan-2.jpg" /> */}
      </div>
      <img className="brand-rush" src="../images/brand-rush.jpg" />
      <img className="category-to-cart" src="../images/category.webp" />
    </div>
  );
};

export default HomeBanner;
