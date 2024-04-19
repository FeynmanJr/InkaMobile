import { combineReducers } from "redux";
import xReducer from "./message";

const reducer = combineReducers({
  x: xReducer,
});

export default reducer;
