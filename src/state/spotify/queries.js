import axios from '../../utils/axios'
import api from '../../utils/services'

export const loadAlbums = (id) => {
  return axios()
    .get(api.spotify + '/albums/' + id)
    .then(res => res.data)
    .catch(err => err.response.data)
};

export const loadTracks = (id) => {
  return axios()
    .get(api.spotify + '/albums/' + id + '/tracks?offset=0&limit=50')
    .then(res => res.data)
    .catch(err => err.response.data)
};

export const loadTrack = (id) => {
  return axios()
    .get(api.spotify + '/tracks/' + id)
    .then(res => res.data)
    .catch(err => err.response.data)
};

export const loadProfile = () => {
  return axios()
    .get(api.spotify + '/me')
    .then(res => res.data)
    .catch(err => err.response.data)
};

export const search = (payload) => {
  return axios()
    .get(api.spotify + '/search?q=' + payload + '&type=album,artist,track&limit=10')
    .then(res => res.data)
    .catch(err => err.response.data)
};
