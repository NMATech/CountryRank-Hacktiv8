import { motion } from "framer-motion";

const CardNews = ({ data, durationDelay }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: durationDelay, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex gap-3 text-white"
    >
      <div className=" w-[200px] h-[130px]">
        <img
          src={`https://static01.nyt.com/${data?.multimedia?.[0]?.url}`}
          alt="image"
          className="w-full h-full bg-center object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        {/* Judul berita */}
        <h1 className="text-[12px] md:text-[16px] font-bold">
          {data?.headline?.main}
        </h1>

        {/* Description News */}
        <p className="text-[10px] md:text-[14px]">
          {truncateText(data?.abstract, 90)}
        </p>

        {/* Detail metadata */}
        <div className="flex text-sm text-gray-300 mt-2 gap-4">
          <span>{data?.byline?.original}</span>
          <span>{new Date(data?.pub_date).toLocaleDateString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardNews;
