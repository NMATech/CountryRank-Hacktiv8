import { motion } from "framer-motion";

const Copyrights = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center border-t border-white/80 p-3 mt-[40px]"
    >
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-white/80"
      >
        &copy; 2024 Country Rank. Designed and Developed by Nadindra Maulana.
      </motion.p>
    </motion.div>
  );
};

export default Copyrights;
