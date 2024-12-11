import imgHero from "../../assets/img/bg-hero.jpg";
import { MdLeaderboard } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          src={imgHero}
          alt="Image hero"
          className="w-full h-[300px] md:h-[400px] object-cover bg-center bg-no-repeat"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-main-primary bg-opacity-50 flex justify-center items-center gap-3"
      >
        <MdLeaderboard className="text-main-accent text-[30px] md:text-[40px]" />
        <h1 className="text-white font-alatsi text-[30px] md:text-[40px] font-semibold">
          COUNTRY <span className="text-main-accent">RANK</span>
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;
