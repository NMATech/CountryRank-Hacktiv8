import image from "../../assets/img/bg_banner.jpg";

const Banner = () => {
  return (
    <div className="relative w-[80%] mx-auto mt-[30px]">
      <div>
        <img
          src={image}
          alt="Image banner"
          className="w-full h-[200px] object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center gap-2">
        <h1 className="text-[30px] font-semibold">
          Discover, Compare, and Explore Countries Worldwide
        </h1>
        <p className="text-white/80 w-[60%] text-center">
          Stay informed with accurate rankings and insights about countries.
          Explore the latest data to make better global decisions.
        </p>
        <button className="bg-main-accent px-4 py-1 rounded-lg">
          <a href="/countryrank">Explore More</a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
