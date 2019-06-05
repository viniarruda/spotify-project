import { login, logout, setToken } from "./actions";
import queryString from "query-string";

export const requestLogin = () => async (dispatch, getState) => {
  dispatch(login());
  console.log("login");

  return true;
};

export const requestLogout = () => async (dispatch, getState) => {
  dispatch(logout());

  return true;
};

export const requestToken = payload => async (dispatch, getState) => {
  let parsed = queryString.parse(payload);

  if (localStorage.length === 0)
    localStorage.setItem("access_token", parsed.access_token);

  dispatch(setToken(parsed));
  return true;
};
