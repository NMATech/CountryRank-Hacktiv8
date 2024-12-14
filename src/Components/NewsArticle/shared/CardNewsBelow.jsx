import { motion } from "framer-motion";

const CardNewsBelow = ({ news, styling, durationDelay }) => {
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
      className={`flex-shrink-0 ${styling} flex flex-col gap-3 text-white`}
    >
      {/* Gambar dengan label */}
      <div className="relative">
        <img
          src={`https://static01.nyt.com/${news?.multimedia?.[0]?.url}`}
          alt="Fashion Trends"
          className="w-full h-[150px] md:h-[200px] bg-center object-cover rounded-lg"
        />
        <span className="absolute top-2 left-2 bg-main-accent text-xs px-3 py-1 rounded-full">
          News
        </span>
      </div>

      {/* Informasi berita */}
      <div className="flex flex-col">
        {/* Judul berita */}
        <h1 className="text-sm md:text-lg font-bold line-clamp-2">
          {news?.headline?.main}
        </h1>

        <p>{truncateText(news?.abstract, 90)}</p>

        {/* Metadata berita */}
        <div className="flex text-xs md:text-sm text-gray-300 mt-2 gap-4">
          <span>{news?.byline?.original}</span>
          <span>{new Date(news?.pub_date).toLocaleDateString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardNewsBelow;
