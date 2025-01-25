import { useDispatch, useSelector } from "react-redux";
import SelectSize from "./SelectSize";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { bagActions } from "../store/bagSlice";

const ProductOverview = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const items = useSelector((store) => store.items);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const bag = useSelector((store) => store.bag);
  const elementFound = bag.indexOf(productData.id) >= 0;

  const fetchProductsData = () => {
    items.map((item) => {
      if (item.id === id) {
        setProductData(item);
        setImage(`/${item.image[0]}`);
        console.log(item);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [id]);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(productData.id));

    console.log("clicked");
  };
  const handleRemoveFromBag = () => {
    console.log("clicked");
    dispatch(bagActions.removeFromBag(productData.id));
  };

  return productData ? (
    <section className="product-detail">
      <div className="product-img-container">
        <div className="product-main-img">
          <img id="mainImg" width={"100%"} src={image} alt="item image" />
        </div>
        <div className="small-img-group">
          {productData.image.map((img, index) => (
            <div className="small-img-col" key={index}>
              <img
                onClick={() => setImage(`/${img}`)}
                src={`/${img}`}
                width={"100%"}
                className="small-img"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="single-pro-details">
        <h3>{productData.company}</h3>
        <p className="item-name">{productData.item_name}</p>
        <h2>₹{productData.current_price}</h2>
        <h2 className="discount">{productData.discount_percentage}%</h2>
        <p className="mrp">
          MRP{" "}
          <span className="original-price"> ₹{productData.original_price}</span>{" "}
          Inclusive of all taxes
        </p>
        <h5>SELECT SIZE</h5>
        <SelectSize></SelectSize>
        <input type="number" value={1} />

        {elementFound ? (
          <button
            type="button "
            class="btn btn-warning btn-removefromcart "
            onClick={handleRemoveFromBag}
          >
            <MdRemoveShoppingCart />
            Remove
          </button>
        ) : (
          <button class="btn btn-primary btn-add" onClick={handleAddToBag}>
            <MdAddShoppingCart />
            Add to Bag
          </button>
        )}

        <h4>Product Details</h4>
        <span>{productData.product_detail}</span>
        <h4>Know Your Product</h4>
        <span>{productData.know_your_product}</span>
        <h4>Vendor detail</h4>
        <span>Solid by</span>
        <h6>{productData.vender_details.sold_by}</h6>
        <span>Country of Origin</span>
        <h6>{productData.vender_details.Country_of_Origin}</h6>
        <span>Address of Manufacturer/ Packer/ Importer</span>
        <h6>{productData.vender_details.Manufacturer_addres}</h6>
      </div>
    </section>
  ) : (
    <div>no product</div>
  );
};

export default ProductOverview;
