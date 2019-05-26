import {
  SEARCH_MUSIC,
  LIST_PROFILE,
  LIST_ALBUM,
  LIST_TRACKS,
  LIST_MUSIC
} from "./actions";

export const INITIAL_STATE = {
  list: null,
  user: null,
  album: null,
  tracks: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    case SEARCH_MUSIC:
      return {
        ...state,
        list: action.payload
      };
    case LIST_ALBUM:
      return {
        ...state,
        album: action.payload
      };
    case LIST_TRACKS: {
      return {
        ...state,
        tracks: action.payload
      }
    }
    case LIST_MUSIC: {
      return {
        ...state,
        music: action.payload
      }
    }
    default:
      return state;
  }
};