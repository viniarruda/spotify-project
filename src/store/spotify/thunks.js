import {
  listAlbumRequested,
  listAlbumFulfilled,
  listAlbumRejected,
  listTracksRequested,
  listTracksFulfilled,
  listTracksRejected,
  listProfileRequested,
  listProfileFulfilled,
  listProfileRejected,
  listMusicRequested,
  listMusicFulfilled,
  listMusicRejected,
  searchMusicRequested,
  searchMusicFulfilled,
  searchMusicRejected
} from "./actions";
import {
  loadAlbums,
  loadProfile,
  loadTrack,
  loadTracks,
  search
} from "./queries";

export const requestAlbum = id => async (dispatch, getState) => {
  dispatch(listAlbumRequested());
  dispatch(listTracksRequested());

  const response = await loadAlbums(id);
  const responseTrack = await loadTracks(id);

  if (!response && !responseTrack) {
    const error = [];
    dispatch(listAlbumRejected(error));
    dispatch(listTracksRejected(error));

    throw "Error Album";
  }

  dispatch(listAlbumFulfilled(response));
  dispatch(listTracksFulfilled(responseTrack));

  return true;
};

export const requestProfile = () => async (dispatch, getState) => {
  dispatch(listProfileRequested());

  const response = await loadProfile();

  if (!response) {
    const error = "No profile found";
    dispatch(listProfileRejected(error));

    throw "Error Profile";
  }

  dispatch(listProfileFulfilled(response));

  return true;
};

export const searchItems = term => async (dispatch, getState) => {
  dispatch(searchMusicRequested());

  const toLowerCase = term.toLowerCase();
  const encode = encodeURI(toLowerCase);
  const response = await search(encode);

  if (!response) {
    const error = [];
    dispatch(searchMusicRejected(error));

    throw "Not result found by search";
  }

  dispatch(searchMusicFulfilled(response));

  return true;
};

export const requestTrack = id => async (dispatch, getState) => {
  dispatch(listMusicRequested());

  const response = await loadTrack(id);

  if (!response) {
    const error = [];
    dispatch(listMusicRejected(error));

    throw "Error Music";
  }

  dispatch(listMusicFulfilled(response));

  return true;
};
