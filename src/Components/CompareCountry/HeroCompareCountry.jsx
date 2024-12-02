import image from "../../assets/img/bg-hero.jpg";
import FormCompare from "./shared/FormCompare";

const HeroCompareCountry = () => {
  return (
    <div className="relative">
      <div>
        <img
          src={image}
          alt="Image hero"
          className="w-full h-[700px] md:h-[600px] object-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="absolute inset-0 w-full bg-[#333] flex flex-col justify-center items-center bg-opacity-50">
        <h1 className="text-white text-[25px] md:text-[40px] font-alatsi">
          Country Comparison
        </h1>

        <FormCompare />
      </div>
    </div>
  );
};

export default HeroCompareCountry;
