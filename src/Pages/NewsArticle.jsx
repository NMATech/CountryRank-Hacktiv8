import SectionNews from "../Components/NewsArticle/SectionNews";

const NewsArticle = () => {
  return (
    <div className="pb-5">
      <div className="px-[30px] py-5">
        <h1 className="text-white text-[30px]">Popular News</h1>
      </div>
      <SectionNews />

      <div className="px-[30px] py-5">
        <h1 className="text-white text-[30px]">Technology</h1>
      </div>
    </div>
  );
};

export default NewsArticle;
