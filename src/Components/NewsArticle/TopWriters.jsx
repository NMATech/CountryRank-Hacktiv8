import CardWriter from "./shared/CardWriter";
import { motion } from "framer-motion";

const TopWriters = ({ writers, headline, paragraph }) => {
  const handleDelay = (index) => {
    return index * 0.3;
  };

  return (
    <div className="px-[30px] py-5">
      <div className="flex flex-col gap-3 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[25px] md:text-[30px]"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-[70%] text-[18px] font-normal"
        >
          {paragraph}
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-around">
        {writers.map((writer, index) => {
          return (
            <CardWriter
              key={index}
              name={writer.name}
              paragraph={writer.paragraph}
              image={writer.image}
              profile={writer.profile}
              durationDelay={handleDelay(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopWriters;
