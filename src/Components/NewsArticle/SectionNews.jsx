import BelowCard from "./shared/BelowCard";
import CardNews from "./shared/CardNews";
import CardSlider from "./shared/CardSlider";

const SectionNews = () => {
  return (
    <div className="flex gap-5 py-3 px-[30px]">
      <div className="w-[60%] flex flex-col gap-5">
        <CardSlider />
        <BelowCard />
      </div>

      <div className="flex flex-col gap-3">
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
