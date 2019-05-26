import { useState } from 'react'
import { useStateValue } from '../../index'
import { loadAlbums, loadTracks } from '../queries'
import {
  listAlbum,
  listTracks
} from '../actions'

const useAlbum = () => {
  const [{spotify}, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const request = async (id) => {
    setIsLoading(true);

    const response = await loadAlbums(id);
    const responseTrack = await loadTracks(id);

    if (response && responseTrack) {
      dispatch(listAlbum(response));
      dispatch(listTracks(responseTrack));
    } else {
      const err = [];
      dispatch(listAlbum(err));
      dispatch(listTracks(err));
    }
    setIsLoading(false)
  };

  return [spotify, isLoading, request]
};

export default useAlbum
