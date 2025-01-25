import React from "react";
import { useSelector } from "react-redux";
import HomeItems from "./HomeItems"; // Adjust path if needed

const SearchResults = () => {
  const filteredItems = useSelector((state) => state.search.filteredItems);

  return (
    <div className="items-container">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => <HomeItems key={item.id} item={item} />)
      ) : (
        <p>No items found matching your search.</p>
      )}
    </div>
  );
};

export default SearchResults;
