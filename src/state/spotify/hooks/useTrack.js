import { useState } from 'react'
import { useStateValue } from '../../index'
import { loadTrack } from '../queries'
import {
  listMusic
} from '../actions'

const useTrack = () => {
  const [{spotify}, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const setMusic = async (id) => {
    console.log(id)
    setIsLoading(true);

    const response = await loadTrack(id);

    if (response) {
      dispatch(listMusic(response));
    } else {
      const err = [];
      dispatch(listMusic(err));
    }
    setIsLoading(false)
  };

  return [spotify, isLoading, setMusic]
};

export default useTrack
