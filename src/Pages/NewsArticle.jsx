import { useDispatch, useSelector } from "react-redux";
import SectionNews from "../Components/NewsArticle/SectionNews";
import { RotatingLines } from "react-loader-spinner";
import { useEffect } from "react";
import displayPopularNews from "../Store/actions/NewsActions";
import TopWriters from "../Components/NewsArticle/TopWriters";

const NewsArticle = () => {
  const news = useSelector((state) => state.newsArticle.popularNews);
  const dispatch = useDispatch();

  const isNewsEmpty = !news || news.length === 0;

  useEffect(() => {
    dispatch(displayPopularNews("Peace", "ADD_TO_POPULARNEWS"));
    dispatch(displayPopularNews("Calm", "ADD_TO_LATESTNEWS"));
  }, []);

  return (
    <div className="pb-5">
      {isNewsEmpty ? (
        <div className="w-full h-[300px] flex justify-center items-center ">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="green"
            strokeWidth="5"
          />
        </div>
      ) : (
        <>
          <div className="px-[30px] py-5">
            <h1 className="text-white text-[30px]">Popular News</h1>
          </div>
          <SectionNews />

          <TopWriters />
        </>
      )}
    </div>
  );
};

export default NewsArticle;
