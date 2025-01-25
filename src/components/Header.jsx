import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../store/searchSlice";
import { useMemo } from "react";
import HomeItems from "./HomeItems";
import SearchBar from "./SearchBar";
const Header = () => {
  const bag = useSelector((store) => store.bag);
  const searchTerm = useSelector((state) => state.search.term);
  const dispatch = useDispatch();
  // Function to handle changes in the search bar input
  const handleSearch = (event) => {
    dispatch(searchActions.setSearchTerm(event.target.value));
  };

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="../images/glamora-logo.png"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <SearchBar></SearchBar>
      <div className="action_bar">
        <div className="action_container">
          <IoPersonSharp />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaHeart className="wishlistIcon" />
          <span className="action_name">Wishlist</span>
        </div>

        <Link to="/bag" className="action_container">
          <IoBagHandle />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
