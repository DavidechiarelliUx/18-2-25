import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import favouriteReducers from "../reducers/favouriteReducer";
import searchReducers from "../reducers/searchReducers";

const rootReducers = combineReducers({
  main: mainReducer,
  favourites: favouriteReducers,
  search: searchReducers,
});
const store = configureStore({
  reducer: rootReducers,
});

export default store;
