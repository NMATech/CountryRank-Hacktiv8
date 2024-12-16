import china from "../../assets/img/china.jpg";
import india from "../../assets/img/india.jpg";
import usa from "../../assets/img/us.jpg";
import indonesia from "../../assets/img/indonesia.jpg";
import pakistan from "../../assets/img/pakistan.jpg";

import CountryInfo from "./shared/CountryInfo";
import { useState } from "react";
import { motion } from "framer-motion";

const FeaturedCountries = () => {
  const [selectedCountry, setSelectedCountry] = useState("China");
  const topCountries = [
    {
      name: "China",
      paragraph:
        "China is the world's most populous country and one of the oldest surviving civilizations. Famous for the Great Wall, tea culture, and modern innovation, China is a global economic powerhouse leading the way in various technology and manufacturing sectors, while still maintaining rich cultural traditions.",
      image: china,
    },
    {
      name: "India",
      paragraph:
        "India is a culturally diverse country known for its rich history, such as the Taj Mahal and the Holi festival of colors. With a large population and booming economy, India plays an important role in global technology, art and cuisine, offering experiences that blend ancient traditions and modernity.",
      image: india,
    },
    {
      name: "United States",
      paragraph:
        "The United States is a global center of innovation, known for its strong economy, cities like New York and Los Angeles, and pop culture influence. The country has a diverse landscape, from the Grand Canyon to Silicon Valley, making it a world-leading destination for tourism and technological innovation.",
      image: usa,
    },
    {
      name: "Indonesia",
      paragraph:
        "Indonesia is the largest archipelago in the world, famous for its natural beauty such as Bali and Raja Ampat. With a diverse culture and rich traditions, Indonesia also has a rapidly growing economy, making it one of the important players in the Southeast Asian region.",
      image: indonesia,
    },
    {
      name: "Pakistan",
      paragraph:
        "Pakistan is a country with a deep cultural heritage, from the ancient sites of Mohenjo-Daro to the mountains of Karakoram. Known for the hospitality of its people and the delicacy of its cuisine, Pakistan also continues to develop in the fields of technology and infrastructure, strengthening its position on the regional and global scene.",
      image: pakistan,
    },
  ];

  const handleSelectedCountry = (name) => {
    setSelectedCountry(name);
  };

  return (
    <div className="w-[95%] mx-auto text-white mt-[20px] p-3">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl text-center mb-5"
      >
        Featured Countries
      </motion.h1>
      <CountryInfo
        china={china}
        countries={topCountries}
        selectedCountry={selectedCountry}
        handleSelectedCountry={handleSelectedCountry}
      />
    </div>
  );
};

export default FeaturedCountries;
