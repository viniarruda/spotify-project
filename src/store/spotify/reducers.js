import {
  LIST_ALBUM_REQUESTED,
  LIST_ALBUM_FULFILLED,
  LIST_ALBUM_REJECTED,
  LIST_PROFILE_REQUESTED,
  LIST_PROFILE_FULFILLED,
  LIST_PROFILE_REJECTED,
  LIST_MUSIC_REQUESTED,
  LIST_MUSIC_FULFILLED,
  LIST_MUSIC_REJECTED,
  LIST_TRACKS_REQUESTED,
  LIST_TRACKS_FULFILLED,
  LIST_TRACKS_REJECTED,
  SEARCH_MUSIC_REQUESTED,
  SEARCH_MUSIC_FULFILLED,
  SEARCH_MUSIC_REJECTED
} from "./action-types";

const INITIAL_STATE = {
  list: null,
  user: null,
  album: null,
  tracks: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_ALBUM_REQUESTED:
    case LIST_PROFILE_REQUESTED:
    case LIST_MUSIC_REQUESTED:
    case LIST_TRACKS_REQUESTED:
    case SEARCH_MUSIC_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }
    case LIST_ALBUM_FULFILLED: {
      return {
        ...state,
        loading: false,
        album: action.payload
      };
    }
    case LIST_PROFILE_FULFILLED: {
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    }
    case SEARCH_MUSIC_FULFILLED: {
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    }
    case LIST_TRACKS_FULFILLED: {
      return {
        ...state,
        loading: false,
        tracks: action.payload
      };
    }
    case LIST_MUSIC_FULFILLED: {
      return {
        ...state,
        loading: false,
        music: action.payload
      };
    }
    case LIST_ALBUM_REJECTED:
    case LIST_PROFILE_REJECTED:
    case LIST_MUSIC_REJECTED:
    case LIST_TRACKS_REJECTED:
    case SEARCH_MUSIC_REJECTED: {
      return {
        ...INITIAL_STATE,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
