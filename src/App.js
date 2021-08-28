import NavBar from "./components/navbar/NavBar";
import "./App default css/App.css";
import { useSelector } from "react-redux";
import { Routes } from "./components/Route component/Routes";

import HotCard from "./components/HotDet/HotCard";
import { LocationCard } from "./components/material-ui-components/LocationCard";
import { MoreFilterCard } from "./components/material-ui-components/MoreFilterCard";

import Loading from "./components/material-ui-components/LoadingAnimation";

// import { CheckoutPage } from "./components/Checkout-Page/CheckoutPage";

// import { MapComponent } from "./components/Map/MapComponent";

// import { ImageSlideShow } from "./components/Image SlideShow/ImageSlideShow";
// import { ImageSliderData } from "./components/Image SlideShow/ImageSliderData";
import { FilterSearchBar } from "./components/FilterSearchBar/FilterSearchBar";
function App() {
  const login = useSelector((state) => state.login);
  return (
    <div>

      {login.isLoading && <Loading />}
      {/* <Routes /> */}
      {/* <ImageSlideShow slides={ImageSliderData} /> */}
      {/* <MapComponent /> */}

      {/* <CheckoutPage /> */}
      {/* <LocationCard />
      <MoreFilterCard />
      <RatingCard /> */}
      {/* <SearchBar />

      <FilterSearchBar /> */}
      <FilterSearchBar />

    </div>
  );
}

export default App;
