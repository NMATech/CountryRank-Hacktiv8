import { motion } from "framer-motion";

const HeroCard = ({ image, headline, paragraph, cta, linkCta }) => {
  return (
    <div className="relative">
      <div className="w-full">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          src={image}
          alt=""
          className="w-full h-[250px] md:h-[400px] object-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center text-center gap-4 md:gap-5">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          viewport={{ once: true }}
          className="text-[18px] md:text-[40px] font-serif"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          viewport={{ once: true }}
          className="w-[95%] md:w-[70%] text-sm md:text-[20px] font-serif"
        >
          {paragraph}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          viewport={{ once: true }}
          className="bg-main-accent px-8 py-1 rounded-lg"
        >
          <a href={linkCta} className="text-md md:text-lg">
            {cta}
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default HeroCard;
