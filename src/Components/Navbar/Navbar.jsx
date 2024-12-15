import { useState } from "react";
import logo from "../../assets/logo/Logo CountryRank light.png";
import Btn_Mobile from "./shared/Btn_Mobile";
import Menu_Mobile from "./shared/Menu_Mobile";
import Navlink from "./shared/Navlink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clicked = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <head className="bg-main-primary w-full flex justify-between items-center py-3 px-5 text-white">
      <div className="flex justify-center items-center gap-3">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={logo} alt="" className="w-[50px]" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-alatsi"
        >
          COUNTRY RANK
        </motion.h1>
      </div>

      <Navlink />
      {isClicked && <Menu_Mobile />}
      <Btn_Mobile isClicked={isClicked} clicked={clicked} />
    </head>
  );
};

export default Navbar;
