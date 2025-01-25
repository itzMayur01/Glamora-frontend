import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { Link } from "react-router-dom";
import SelectQuantity from "./SelectQuantity";
import { useEffect, useState } from "react";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const quantityFromRedux = useSelector(
    (state) => state.bag.find((bagItem) => bagItem.id === item.id)?.quantity
  );
  const [quantity, setQuantity] = useState(quantityFromRedux || item.quantity);

  useEffect(() => {
    // Keep quantity in sync with Redux after update
    if (quantityFromRedux !== undefined) {
      setQuantity(quantityFromRedux);
    }
    console.log("BagItem re-rendered with quantity:", quantityFromRedux);
  }, [quantityFromRedux]);

  // Function to handle quantity change and dispatch it to Redux
  const handleQuantityChange = (newQuantity) => {
    dispatch(
      bagActions.updateQuantity({ id: item.id, quantity: Number(newQuantity) })
    );
  };

  const removeFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="bag-item-container">
      <Link className="Link" to={`/product-overview/${item.id}`}>
        <div className="item-left-part">
          <img
            className="bag-item-img"
            src={item.image[0]}
            alt={item.item_name}
          />
        </div>
      </Link>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>

        {/* Pass quantity and handler to SelectQuantity */}
        {/* <SelectQuantity
          selectedQty={quantityFromRedux || item.quantity}
          setSelectedQty={handleQuantityChange}
          item={item}
        /> */}

        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>

          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by{" "}
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={removeFromBag}>
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default BagItem;
