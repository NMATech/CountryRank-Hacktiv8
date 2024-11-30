export const displayAll = () => {
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

export const searchByRegion = (region) => {
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

export const searchByName = (name) => {
  return (dispatch) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((datas) => {
        dispatch({
          type: "SET_DATAS",
          payload: datas,
        });
      });
  };
};

export const sortByPopulation = () => {
  return (dispatch) => {
    dispatch({
      type: "SORT_BY_POPULATION",
    });
  };
};

export default { displayAll, searchByRegion, searchByName };
