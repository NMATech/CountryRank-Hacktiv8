const displayAll = () => {
  return (dispatch) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((datas) => {
        dispatch({
          type: "DISPLAY_ALL",
          payload: datas,
        });
      });
  };
};

export default displayAll;
