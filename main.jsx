import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./src/routes/Bag.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./src/routes/App.jsx";
import Home from "./src/routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./src/store/index.js";
import ProductOverview from "./src/components/ProductOverview.jsx";
import EthinicWear from "./src/components/EthinicWear.jsx";
import ScrollToTop from "./src/components/ScrollToTop.jsx";
import GroomingCategory from "./src/components/GroomingCategory.jsx";
import InnerWearCategory from "./src/components/InnerWearCategory.jsx";
import FootWearCategory from "./src/components/FootWearCategory.jsx";
import SearchResults from "./src/components/searchResults.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      { path: "/product-overview/:id", element: <ProductOverview /> },
      { path: "/search-result", element: <SearchResults /> },
      { path: "/ethnic-wear", element: <EthinicWear></EthinicWear> },
      { path: "/grooming", element: <GroomingCategory /> },
      { path: "/innerwear", element: <InnerWearCategory /> },
      { path: "/footwear-men", element: <FootWearCategory /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
