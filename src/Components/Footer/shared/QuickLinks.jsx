import { motion } from "framer-motion";

const QuickLinks = () => {
  const menus = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Country Rank",
      link: "/countryrank",
    },
    {
      title: "Compare Country",
      link: "/compare",
    },
    {
      title: "News",
      link: "/newsarticle",
    },
  ];

  const handleDelay = (index) => {
    return index * 0.3;
  };

  return (
    <div className="w-max mx-auto md:mx-0 mt-0 md:mt-[30px]">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-semibold text-xl"
      >
        Quick Links
      </motion.h1>
      <ul className="text-white/80 mt-5">
        {menus.map((menu, index) => {
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: handleDelay(index) }}
              viewport={{ once: true }}
            >
              <a href={menu.link}>{menu.title}</a>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuickLinks;
