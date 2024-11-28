import { applyMiddleware, combineReducers, createStore } from "redux";
import countryRankReducer from "./reducers/CountryRankReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  countryRank: countryRankReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
