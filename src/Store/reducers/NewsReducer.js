const initialState = {
  popularNews: [],
  latestNews: [],
  techNews: [],
};

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_POPULARNEWS":
      return {
        ...state,
        popularNews: action.payload,
      };
    case "ADD_TO_LATESTNEWS":
      return {
        ...state,
        latestNews: action.payload,
      };
    case "ADD_TO_TECHNEWS":
      return {
        ...state,
        latestNews: action.payload,
      };
    default:
      return state;
  }
};

export default NewsReducer;
