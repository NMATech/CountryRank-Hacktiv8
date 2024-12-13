import FeaturedCountries from "../Components/Home/FeaturedCountries";
import Hero from "../Components/Home/Hero";
import TopNews from "../Components/Home/TopNews";

const Home = () => {
  return (
    <div className="pb-[20px]">
      <Hero />
      <FeaturedCountries />
      <TopNews />
    </div>
  );
};

export default Home;
