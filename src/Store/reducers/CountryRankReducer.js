const initialState = {
  data: [],
};

const countryRankReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_ALL":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default countryRankReducer;
