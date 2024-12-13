import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import displayPopularNews from "../../Store/actions/NewsActions";
import CardNewsBelow from "../NewsArticle/shared/CardNewsBelow";

const TopNews = () => {
  const topNews = useSelector((state) => state.newsArticle.popularNews);
  const dispatch = useDispatch();
  const wrappedNews = topNews.slice(1, 4);

  useEffect(() => {
    dispatch(displayPopularNews("Peace", "ADD_TO_POPULARNEWS"));
  });

  return (
    <div className="w-[95%] mx-auto text-white">
      <h1 className="text-3xl text-center mb-5">Top News</h1>

      <div className="w-full overflow-x-auto flex flex-col md:flex-row gap-3 justify-evenly items-center">
        {wrappedNews.map((news, index) => {
          return (
            <CardNewsBelow
              key={index}
              news={news}
              styling={"w-[80%] md:w-[30%]"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopNews;
