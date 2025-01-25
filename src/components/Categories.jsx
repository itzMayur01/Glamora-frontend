import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      to: "/ethnic-wear",
      image: "../images/ethnic-wear.jpg",
      title: "Ethnic Wear",
      discount: "50-80% OFF",
    },
    {
      to: "/western-wear",
      image: "../images/western-wear.jpg",
      title: "Western Wear",
      discount: "40-80% OFF",
    },
    {
      to: "/sports-wear",
      image: "../images/sports-wear.jpg",
      title: "Sportswear",
      discount: "30-80% OFF",
    },
    {
      to: "/lounge-wear",
      image: "../images/lounge-wear.jpg",
      title: "Loungewear",
      discount: "30-60% OFF",
    },
    {
      to: "/grooming",
      image: "../images/groming.jpg",
      title: "Grooming",
      discount: "40-60% OFF",
    },
    {
      to: "/innerwear",
      image: "../images/inner-wear.jpg",
      title: "Innerwear",
      discount: "60-70% OFF",
    },
    {
      to: "/home-decor",
      image: "../images/home-decor.jpg",
      title: "Home Decor",
      discount: "40-70% OFF",
    },
    {
      to: "/footwear-men",
      image: "../images/footwear-men.jpg",
      title: "Footwear",
      discount: "40-80% OFF",
    },
    {
      to: "/footwear-women",
      image: "../images/footwear-women.jpg",
      title: "Footwear",
      discount: "50-70% OFF",
    },
    {
      to: "/lingerie",
      image: "../images/Lingerie.jpg",
      title: "Lingerie",
      discount: "70-80% OFF",
    },
    {
      to: "/jewellery",
      image: "../images/jewelleres.jpg",
      title: "Jewellery",
      discount: "70-80% OFF",
    },
    {
      to: "/kids-wear",
      image: "../images/kids-wear.jpg",
      title: "Kids Wear",
      discount: "50-70% OFF",
    },
    {
      to: "/sleep-wear",
      image: "../images/sleep-wear.jpg",
      title: "Sleep Wear",
      discount: "30-70% OFF",
    },
    {
      to: "/watches",
      image: "../images/watches.jpg",
      title: "Watches",
      discount: "70-80% OFF",
    },
    {
      to: "/trolleys",
      image: "../images/trolleys.jpg",
      title: "Trolleys, Luggage Bags",
      discount: "50-70% OFF",
    },
    {
      to: "/bags",
      image: "../images/bags.jpg",
      title: "Bags",
      discount: "30-80% OFF",
    },
    {
      to: "/beauty-makeup",
      image: "../images/beauty-makeup.jpg",
      title: "Beauty, Makeup",
      discount: "60-80% OFF",
    },
    {
      to: "/flip-flops",
      image: "../images/flipFlop.jpg",
      title: "Flip-Flops",
      discount: "60-80% OFF",
    },
  ];

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <Link to={category.to} key={index} className="  Link">
          <div className="box">
            <div className="box-content">
              <div className="box-img">
                <img src={category.image} alt={category.title} />
              </div>
              <h4>{category.title}</h4>
              <h2>{category.discount}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
