const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const displayPopularNews = () => {
  return (dispatch) => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Peace&api-key=${apiKey}`
    )
      .then((res) => res.json())
      .then((datas) => {
        if (datas.response && datas.response.docs) {
          const filteredData = datas.response.docs.filter(
            (data) => data.multimedia && data.multimedia.length > 0
          );

          dispatch({
            type: "ADD_TO_POPULARNEWS",
            payload: filteredData,
          });
        }
      });
  };
};

export default displayPopularNews;
