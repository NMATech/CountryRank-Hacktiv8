import { applyMiddleware, combineReducers, createStore } from "redux";
import countryRankReducer from "./reducers/CountryRankReducer";
import NewsReducer from "./reducers/NewsReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  countryRank: countryRankReducer,
  newsArticle: NewsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
