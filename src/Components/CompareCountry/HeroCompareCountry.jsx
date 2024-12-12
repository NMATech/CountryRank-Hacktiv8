import image from "../../assets/img/bg-hero.jpg";
import FormCompare from "./shared/FormCompare";
import { motion } from "framer-motion";

const HeroCompareCountry = ({
  countryA,
  countryB,
  setCountryA,
  setCountryB,
  setIsCompareClicked,
}) => {
  return (
    <div className="relative">
      <div>
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          src={image}
          alt="Image hero"
          className="w-full h-[700px] md:h-[600px] object-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="absolute inset-0 w-full bg-[#333] flex flex-col justify-center items-center bg-opacity-50">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.3 }}
          viewport={{ once: true }}
          className="text-white text-[25px] md:text-[40px] font-alatsi"
        >
          Country Comparison
        </motion.h1>

        <FormCompare
          countryA={countryA}
          countryB={countryB}
          setCountryA={setCountryA}
          setCountryB={setCountryB}
          setIsCompareClicked={setIsCompareClicked}
        />
      </div>
    </div>
  );
};

export default HeroCompareCountry;
