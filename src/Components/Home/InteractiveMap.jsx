import Globe from "./shared/Globe";
import { motion } from "framer-motion";

const InteractiveMap = ({ setIsMapClicked }) => {
  return (
    <div className="w-[95%] mx-auto mt-[30px] text-white">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl text-center mb-5"
      >
        Interactive Globe
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-transparent"
      >
        <Globe setIsMapClicked={setIsMapClicked} />
      </motion.div>
    </div>
  );
};

export default InteractiveMap;
