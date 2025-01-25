import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

function Bag() {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => bag.includes(item.id)); ///bagItems.includes(item.id): This will return true if item.id exists within the bagItems array, meaning that the item will be included in the finalItems array.
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
}

export default Bag;
