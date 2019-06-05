import { createAction } from "redux-actions";
import { LOGIN, LOGOUT, SET_TOKEN } from "./action-types";

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const setToken = createAction(SET_TOKEN);
