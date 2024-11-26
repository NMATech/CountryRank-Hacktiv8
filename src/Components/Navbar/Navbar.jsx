import { useState } from "react";
import logo from "../../assets/logo/Logo CountryRank light.png";
import Btn_Mobile from "./shared/Btn_Mobile";
import Menu_Mobile from "./shared/Menu_Mobile";
import Navlink from "./shared/Navlink";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clicked = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="bg-main-primary w-full flex justify-between items-center py-3 px-5 text-white">
      <div className="flex justify-center items-center gap-3">
        <div>
          <img src={logo} alt="" className="w-[50px]" />
        </div>
        <h1 className="text-2xl">Country Rank</h1>
      </div>

      <Navlink />
      <Btn_Mobile isClicked={isClicked} clicked={clicked} />
      {isClicked && <Menu_Mobile />}
    </div>
  );
};

export default Navbar;
