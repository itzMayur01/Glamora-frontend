import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import HomeBanner from "./HomeBanner";

const HomeItems = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const elementFound = bag.indexOf(item.id) >= 0; //>=0 -- kyu ki agr koi element found nhi hota hai to ye -1 return krta hai es liye hum >=0 use kr rhe hai
  // indexOf is used for find elemet in aaray
  console.log(item.id, elementFound);

  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  // const handleLinkToProductDetail = () => {
  //   console.log("Product clicked:", item.id);
  //   console.log("Dispatching displayProductDetail...");
  //   dispatch(productOverviewActions.displayProductDetail(item.id));
  // };

  return (
    <>
      <div class="item-container">
        <Link className="Link" to={`/product-overview/${item.id}`}>
          <img class="item-image" src={item.image[0]} alt="item image" />
          <div class="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
          </div>
          <div class="company-name">{item.company}</div>
          <div class="item-name">{item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs {item.current_price}</span>
            <span class="original-price">Rs {item.original_price}</span>
            <span class="discount">({item.discount_percentage}% OFF)</span>
          </div>
        </Link>

        {elementFound ? (
          <button
            type="button "
            class="btn btn-warning btn-add-bag"
            onClick={handleRemoveFromBag}
          >
            <MdRemoveShoppingCart />
            Remove
          </button>
        ) : (
          <button class="btn-add-bag" onClick={handleAddToBag}>
            <MdAddShoppingCart />
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItems;
