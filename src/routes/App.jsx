import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {/* <Spinner></Spinner> */}
      <ScrollToTop></ScrollToTop>
      {fetchStatus.currentlyFetching ? <Spinner /> : <Outlet />}

      <Footer></Footer>
    </>
  );
}

export default App;
