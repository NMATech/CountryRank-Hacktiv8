import image from "../../assets/img/bg_banner.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-[90%] md:w-[80%] mx-auto mt-[30px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img
          src={image}
          alt="Image banner"
          className="w-full h-[200px] object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center gap-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          viewport={{ once: true }}
          className="text-[16px] md:text-[30px] text-center font-semibold"
        >
          Discover, Compare, and Explore Countries Worldwide
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          viewport={{ once: true }}
          className="text-white/80 w-[90%] md:w-[60%] text-[12px] md:text-[18px] text-center"
        >
          Stay informed with accurate rankings and insights about countries.
          Explore the latest data to make better global decisions.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          viewport={{ once: true }}
          className="bg-main-accent hover:bg-main-accent/80 px-4 py-1 rounded-lg"
        >
          <a href="/countryrank">Explore More</a>
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
