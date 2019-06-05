import { createAction } from "redux-actions";
import {
  LIST_ALBUM_REQUESTED,
  LIST_ALBUM_FULFILLED,
  LIST_ALBUM_REJECTED,
  LIST_MUSIC_REQUESTED,
  LIST_MUSIC_FULFILLED,
  LIST_MUSIC_REJECTED,
  LIST_PROFILE_REQUESTED,
  LIST_PROFILE_FULFILLED,
  LIST_PROFILE_REJECTED,
  LIST_TRACKS_REQUESTED,
  LIST_TRACKS_FULFILLED,
  LIST_TRACKS_REJECTED,
  SEARCH_MUSIC_REQUESTED,
  SEARCH_MUSIC_FULFILLED,
  SEARCH_MUSIC_REJECTED
} from "./action-types";

export const listAlbumRequested = createAction(LIST_ALBUM_REQUESTED);
export const listAlbumFulfilled = createAction(LIST_ALBUM_FULFILLED);
export const listAlbumRejected = createAction(LIST_ALBUM_REJECTED);

export const listMusicRequested = createAction(LIST_MUSIC_REQUESTED);
export const listMusicFulfilled = createAction(LIST_MUSIC_FULFILLED);
export const listMusicRejected = createAction(LIST_MUSIC_REJECTED);

export const listProfileRequested = createAction(LIST_PROFILE_REQUESTED);
export const listProfileFulfilled = createAction(LIST_PROFILE_FULFILLED);
export const listProfileRejected = createAction(LIST_PROFILE_REJECTED);

export const listTracksRequested = createAction(LIST_TRACKS_REQUESTED);
export const listTracksFulfilled = createAction(LIST_TRACKS_FULFILLED);
export const listTracksRejected = createAction(LIST_TRACKS_REJECTED);

export const searchMusicRequested = createAction(SEARCH_MUSIC_REQUESTED);
export const searchMusicFulfilled = createAction(SEARCH_MUSIC_FULFILLED);
export const searchMusicRejected = createAction(SEARCH_MUSIC_REJECTED);
