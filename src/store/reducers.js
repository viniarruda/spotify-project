import { combineReducers } from "redux";
import auth from "./auth/reducers";
import spotify from "./spotify/reducers";

const appReducer = combineReducers({
  auth,
  spotify
});

export default (state, action) => appReducer(state, action);
