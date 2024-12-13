import { useDispatch, useSelector } from "react-redux";
import SectionNews from "../Components/NewsArticle/SectionNews";
import { RotatingLines } from "react-loader-spinner";
import { useEffect } from "react";
import displayPopularNews from "../Store/actions/NewsActions";
import TopWriters from "../Components/NewsArticle/TopWriters";

// Image
import bobWood from "../assets/img/bob_woodward.jpg";
import walter from "../assets/img/walter.jpg";
import christiane from "../assets/img/christiane_amanpour.jpg";
import malcolm from "../assets/img/malcolm.jpg";
import david from "../assets/img/david.jpg";
import anne from "../assets/img/anne.jpg";

const NewsArticle = () => {
  const news = useSelector((state) => state.newsArticle.popularNews);
  const dispatch = useDispatch();

  // Data top writer news
  const writerNews = [
    {
      name: "Bob Woodward",
      paragraph:
        "Renowned investigative journalist from The Washington Post, known for covering the Watergate scandal.",
      image: bobWood,
      profile: "https://en.wikipedia.org/wiki/Bob_Woodward",
    },
    {
      name: "Walter Cronkite",
      paragraph:
        "Walter Cronkite being Called “the most trusted man in America”, best known as a news anchor at CBS News.",
      image: walter,
      profile: "https://en.wikipedia.org/wiki/Walter_Cronkite",
    },
    {
      name: "Christiane Amanpour",
      paragraph:
        "Christiane is Renowned for bold reporting, she highlights global conflicts with insight and compassion.",
      image: christiane,
      profile: "https://en.wikipedia.org/wiki/Christiane_Amanpour",
    },
  ];

  // Data top writer article
  const writerArticles = [
    {
      name: "Malcolm Gladwell",
      paragraph:
        "He is a writer and journalist at The New Yorker, known for his unique analysis articles.",
      image: malcolm,
      profile: "https://en.wikipedia.org/wiki/Malcolm_Gladwell",
    },
    {
      name: "David Sedaris",
      paragraph:
        "David Sedaris is a humorist and essayist widely published in The New Yorker.",
      image: david,
      profile: "https://en.wikipedia.org/wiki/David_Sedaris",
    },
    {
      name: "Anne Lamott",
      paragraph:
        "The author of inspirational articles and essays, often related to the topic of spirituality.",
      image: anne,
      profile: "https://en.wikipedia.org/wiki/Anne_Lamott",
    },
  ];

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

          <TopWriters
            writers={writerNews}
            headline={"The Faces Behind the Stories"}
            paragraph={
              "From global affairs to local insights, these renowned writers are dedicated to keeping you informed with reliable and compelling content."
            }
          />
          <TopWriters
            writers={writerArticles}
            headline={"Meet the Masters of Article Writing"}
            paragraph={
              "Discover the brilliant minds behind thought-provoking articles that captivate readers worldwide. These writers blend expertise and storytelling to deliver content that informs, engages, and inspires."
            }
          />
        </>
      )}
    </div>
  );
};

export default NewsArticle;
