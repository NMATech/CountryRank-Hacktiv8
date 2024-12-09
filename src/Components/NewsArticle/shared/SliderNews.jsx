import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import CardSlider from "./CardSlider";

const SliderNews = ({ newsData }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="w-full h-max flex justify-center items-center"
    >
      {newsData.map((news, index) => {
        return (
          <SwiperSlide key={index}>
            <CardSlider data={news} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderNews;
