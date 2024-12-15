import { motion } from "framer-motion";

const Menu_Mobile = () => {
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

  return (
    <nav>
      <motion.ul
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute bg-main-primary w-[200px] h-max flex flex-col items-center top-[3.5em] right-0 gap-3 text-xl font-thin p-3 easy-in-out z-50"
      >
        {menus.map((menu, index) => {
          return (
            <li
              key={index}
              className="hover:border-b-2 hover:border-main-higlight easy-in-out"
            >
              <a href="">{menu.title}</a>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default Menu_Mobile;
