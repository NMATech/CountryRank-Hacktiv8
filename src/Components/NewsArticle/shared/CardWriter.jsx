import { motion } from "framer-motion";

const CardWriter = ({ name, paragraph, image, profile, durationDelay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: durationDelay, duration: 0.5 }}
      viewport={{ once: true }}
      className={`w-full md:w-[30%] border border-white flex flex-col items-center mt-[20px] p-3 rounded-xl shadow-2xl`}
    >
      <div>
        <img
          src={image}
          alt={`photo ${name}`}
          className="w-[350px] h-[200px] object-cover object-center rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 text-white p-3">
        <h1 className="text-[30px]">{name}</h1>
        <p className="w-full">{paragraph}</p>
        <button className="w-max bg-main-accent text-white px-4 py-2 rounded-xl">
          <a href={profile}>See Profile</a>
        </button>
      </div>
    </motion.div>
  );
};

export default CardWriter;
