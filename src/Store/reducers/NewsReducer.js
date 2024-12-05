const initialState = {
  popularNews: [],
};

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_POPULARNEWS":
      return {
        ...state,
        popularNews: action.payload,
      };
    default:
      return state;
  }
};

export default NewsReducer;
