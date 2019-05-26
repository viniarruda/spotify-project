export const LIST_PROFILE = 'spotify/LIST_PROFILE';
export const SEARCH_MUSIC = 'spotify/SEARCH_MUSIC';
export const LIST_ALBUM = 'spotify/LIST_ALBUM';
export const LIST_TRACKS = 'spotify/LIST_TRACKS';
export const LIST_MUSIC = 'spotify/LIST_MUSIC';

export const listProfile = payload => ({
  type: LIST_PROFILE,
  payload: payload
});

export const searchMusic = payload => ({
  type: SEARCH_MUSIC,
  payload: payload
});

export const listAlbum = payload => ({
  type: LIST_ALBUM,
  payload: payload
});

export const listTracks = payload => ({
  type: LIST_TRACKS,
  payload: payload
});

export const listMusic = payload => ({
  type: LIST_MUSIC,
  payload: payload
});