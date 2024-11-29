const displayAll = () => {
  return (dispatch) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((datas) => {
        dispatch({
          type: "SET_DATAS",
          payload: datas,
        });
      });
  };
};

const searchByRegion = (region) => {
  return (dispatch) => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((datas) => {
        dispatch({
          type: "SET_DATAS",
          payload: datas,
        });
      });
  };
};

export default { displayAll, searchByRegion };
