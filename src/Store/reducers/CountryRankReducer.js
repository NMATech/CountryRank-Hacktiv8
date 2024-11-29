const initialState = {
  data: [],
};

const countryRankReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATAS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default countryRankReducer;
