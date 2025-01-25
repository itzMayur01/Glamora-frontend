import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../store/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const items = useSelector((state) => state.items);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSearchClick = () => {
    const searchTermLower = searchTerm.toLowerCase().trim();

    if (!searchTermLower) {
      // Clear filtered items if search term is empty
      dispatch(searchActions.setFilteredItems([]));
      return;
    }

    const filtered = items.filter(
      (item) =>
        item.item_name.toLowerCase().includes(searchTermLower) ||
        item.company.toLowerCase().includes(searchTermLower)
    );

    dispatch(searchActions.setFilteredItems(filtered));
    navigate("/search-result");
  };

  const handleInputChange = (event) => {
    dispatch(searchActions.setSearchTerm(event.target.value));
  };

  return (
    <div className="search_bar">
      <span className="material-symbols-outlined search_icon">
        <CiSearch className="s-icon" onClick={handleSearchClick} />
      </span>
      <input
        onChange={handleInputChange}
        className="search_input"
        value={searchTerm}
        placeholder="Search for products, brands and more"
      />
    </div>
  );
};

export default SearchBar;
