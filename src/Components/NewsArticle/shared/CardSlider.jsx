import { motion } from "framer-motion";

const CardSlider = ({ data }) => {
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
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full h-max relative"
    >
      {/* Image news */}
      <div>
        <img
          src={`https://static01.nyt.com/${data?.multimedia?.[0]?.url}`}
          alt="Fashion Trends"
          className="w-full h-[400px] bg-center object-cover"
        />
      </div>

      {/* Overlay gradient and content */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-end text-white bg-gradient-to-b from-transparent to-black/80 px-5 py-5">
        <span className="bg-main-accent text-xs px-3 py-1 rounded-full mb-2 w-max">
          News
        </span>

        {/* Headline news */}
        <h1 className="text-[20px] md:text-[30px] font-bold">
          {data?.headline?.main}
        </h1>

        <p>{truncateText(data?.abstract, 90)}</p>

        {/* Detail metadata */}
        <div className="flex text-sm text-gray-300 mt-2 gap-4">
          <span>{data?.byline?.original}</span>
          <span>{new Date(data?.pub_date).toLocaleDateString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardSlider;
