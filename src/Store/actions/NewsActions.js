const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const displayPopularNews = (query, tipe) => {
  return (dispatch) => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`
    )
      .then((res) => res.json())
      .then((datas) => {
        if (datas.response && datas.response.docs) {
          const filteredData = datas.response.docs.filter(
            (data) => data.multimedia && data.multimedia.length > 0
          );

          dispatch({
            type: tipe,
            payload: filteredData,
          });
        }
      });
  };
};

export default displayPopularNews;
