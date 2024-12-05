import { useState } from "react";
import BelowCard from "./shared/BelowCard";
import CardNews from "./shared/CardNews";
import CardSlider from "./shared/CardSlider";
import { useEffect } from "react";

const SectionNews = () => {
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
        <CardSlider />

        {widthBrowser > 1024 && widthBrowser <= 1440 && <BelowCard />}
      </div>

      <div className="flex lg:hidden">
        <BelowCard />
      </div>

      <div className="hidden lg:flex flex-col gap-3">
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
    </div>
  );
};

export default SectionNews;
