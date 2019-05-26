export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/CLEAR_USER';
export const SET_TOKEN = 'auth/SET_TOKEN';

export const login = () => ({
  type: LOGIN
});

export const logout = () => ({
  type: LOGOUT
});

export const setToken = payload => ({
  type: SET_TOKEN,
  payload: payload
});