const initialState = {
  data: [],
};

const countryRankReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATAS":
      return { ...state, data: action.payload };
    case "SORT_BY_POPULATION":
      return {
        ...state,
        data: [...state.data].sort((a, b) => a.population - b.population),
      };
    default:
      return state;
  }
};

export default countryRankReducer;
