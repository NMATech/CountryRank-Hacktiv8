export const displayAll = (sortBy) => {
  return (dispatch) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((datas) => {
        let sortedData;
        switch (sortBy) {
          case "population":
            sortedData = datas.sort((a, b) => b.population - a.population);
            break;
          case "area":
            sortedData = datas.sort((a, b) => b.area - a.area);
            break;
          default:
            break;
        }
        dispatch({
          type: "SET_DATAS",
          payload: sortedData,
        });
      });
  };
};

export const searchByRegion = (region) => {
  return (dispatch) => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((datas) => {
        const sortedData = datas.sort((a, b) => b.population - a.population);
        dispatch({
          type: "SET_DATAS",
          payload: sortedData,
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

export default { displayAll, searchByRegion, searchByName };
