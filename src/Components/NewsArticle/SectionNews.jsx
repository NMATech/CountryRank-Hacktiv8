import { useState } from "react";
import BelowCard from "./shared/BelowCard";
import CardNews from "./shared/CardNews";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SliderNews from "./shared/SliderNews";

const SectionNews = () => {
  const newsData = useSelector((state) => state.newsArticle.popularNews);
  const latestNews = useSelector((state) => state.newsArticle.latestNews);
  const newsSliceSlider = newsData.slice(0, 3);
  const newsSliceBottom = newsData.slice(4, 11);
  const [widthBrowser, setWidthBrowser] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthBrowser(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-5 py-1 md:py-3 px-[10px] md:px-[30px]">
      <div className="w-full lg:w-[60%] flex flex-col gap-5">
        {/* Slider news */}
        <SliderNews newsData={newsSliceSlider} />

        {/* BelowCard only shows for laptop and ipad width */}
        {widthBrowser > 1025 && widthBrowser <= 1440 && (
          <BelowCard data={latestNews || []} />
        )}
      </div>

      {/* This shows for mobile view */}
      <div className="flex lg:hidden">
        <BelowCard data={newsSliceBottom || []} />
      </div>

      {/* Card news side only shows for laptop view */}
      <div className="hidden lg:flex flex-col gap-3">
        {newsSliceBottom.map((data, index) => {
          return <CardNews data={data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SectionNews;
