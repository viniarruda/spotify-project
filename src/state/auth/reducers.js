import {LOGIN, LOGOUT, SET_TOKEN} from "./actions";

export const INITIAL_STATE = {
  logged: false,
  token: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        logged: true
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
};