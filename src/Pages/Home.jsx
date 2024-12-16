import { useEffect, useState } from "react";
import FeaturedCountries from "../Components/Home/FeaturedCountries";
import Hero from "../Components/Home/Hero";
import InteractiveMap from "../Components/Home/InteractiveMap";
import TopNews from "../Components/Home/TopNews";
import ModalCountry from "../Components/Home/shared/ModalCountry";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Components/Home/Banner";
import displayPopularNews from "../Store/actions/NewsActions";

const Home = () => {
  const [isMapClicked, setIsMapClicked] = useState(false);
  const country = useSelector((state) => state.countryRank.data);
  const dispatch = useDispatch();

  // Fetching data news for top news section
  useEffect(() => {
    dispatch(displayPopularNews("Peace", "ADD_TO_POPULARNEWS"));
  });

  return (
    <div className="relative pb-[20px]">
      <Hero />
      <FeaturedCountries />
      <TopNews />
      <InteractiveMap setIsMapClicked={setIsMapClicked} />

      {isMapClicked && country && (
        <ModalCountry setIsMapClicked={setIsMapClicked} country={country[0]} />
      )}

      <Banner />
    </div>
  );
};

export default Home;
