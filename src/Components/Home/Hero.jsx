import { Swiper, SwiperSlide } from "swiper/react";
import HeroCard from "./shared/HeroCard";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// image
import newsImg from "../../assets/img/news.jpg";
import globeImg from "../../assets/img/globe.jpg";

const Hero = () => {
  const dataSlides = [
    {
      image: globeImg,
      headline: "Explore the World, Stay Updated.",
      paragraph:
        "Navigate through a world of data and uncover the stories behind the numbers. See how countries rank across different metrics.",
      cta: "View Countries",
      linkCta: "/countryrank",
    },
    {
      image: newsImg,
      headline: "Discover Everything, Read the Latest News.",
      paragraph:
        "Explore trending news articles and in-depth analysis from trusted sources. Stay ahead of the curve with real-time updates on global events.",
      cta: "Read News",
      linkCta: "/newsarticle",
    },
  ];

  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="w-full h-max flex justify-center items-center"
      >
        {dataSlides.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <HeroCard
                image={data.image}
                headline={data.headline}
                paragraph={data.paragraph}
                cta={data.cta}
                linkCta={data.linkCta}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
