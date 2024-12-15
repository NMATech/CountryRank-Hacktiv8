import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SliderCountries = ({ countries, handleSelectedCountry }) => {
  const [widthBrowser, setWidthBrowser] = useState(window.innerWidth);

  // handle animation
  const handleDelay = (index) => {
    return index * 0.3;
  };

  // listener resize
  useEffect(() => {
    const handleResize = () => setWidthBrowser(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      <Swiper
        slidesPerView={widthBrowser < 1025 ? 2 : 3}
        spaceBetween={widthBrowser < 1025 ? 10 : 20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-max flex justify-start items-center"
      >
        {countries.map((country, index) => {
          return (
            <SwiperSlide key={index}>
              <button onClick={() => handleSelectedCountry(country.name)}>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: handleDelay(index), duration: 0.3 }}
                  viewport={{ once: true }}
                  className="relative w-[150px] lg:w-[180px]"
                >
                  <img
                    src={country.image}
                    alt={`image ${country.name}`}
                    className="w-full h-[200px] object-cover bg-center bg-no-repeat rounded-xl"
                  />
                  <div className="absolute inset-0 w-max h-max bg-main-accent px-4 py-1 rounded-full m-2">
                    <p>{country.name}</p>
                  </div>
                </motion.div>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderCountries;
