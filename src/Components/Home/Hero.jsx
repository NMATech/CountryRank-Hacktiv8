import imgHero from "../../assets/img/bg-hero.jpg";
import { MdLeaderboard } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full">
        <img
          src={imgHero}
          alt="Image hero"
          className="w-full h-[300px] md:h-[400px] object-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="absolute inset-0 bg-main-primary bg-opacity-50 flex justify-center items-center gap-3">
        <MdLeaderboard className="text-main-accent text-[30px] md:text-[40px]" />
        <h1 className="text-white font-alatsi text-[30px] md:text-[40px] font-semibold">
          COUNTRY <span className="text-main-accent">RANK</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
