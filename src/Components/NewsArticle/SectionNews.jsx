import { useState } from "react";
import BelowCard from "./shared/BelowCard";
import CardNews from "./shared/CardNews";
import CardSlider from "./shared/CardSlider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import displayPopularNews from "../../Store/actions/NewsActions";

const SectionNews = () => {
  const newsData = useSelector((state) => state.newsArticle.popularNews);
  const newsSlice = newsData.slice(1, 6);
  const [widthBrowser, setWidthBrowser] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => setWidthBrowser(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(displayPopularNews());
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-5 py-1 md:py-3 px-[10px] md:px-[30px]">
      <div className="w-full lg:w-[60%] flex flex-col gap-5">
        <CardSlider data={newsData[0] || []} />

        {widthBrowser > 1024 && widthBrowser <= 1440 && <BelowCard />}
      </div>

      <div className="flex lg:hidden">
        <BelowCard />
      </div>

      <div className="hidden lg:flex flex-col gap-3">
        {newsSlice.map((data, index) => {
          return <CardNews data={data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SectionNews;
