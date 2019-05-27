import { useState } from 'react'
import { useStateValue } from '../../index'
import { search } from '../queries'
import {
  searchMusic,
} from '../actions'

const useSearch = () => {
  const [{spotify}, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const request = async (payload) => {
    setIsLoading(true);

    const toLowerCase = payload.toLowerCase();
    const encode = encodeURI(toLowerCase);
    const response = await search(encode);

    if (response) {
      dispatch(searchMusic(response))
    } else {
      const err = [];
      dispatch(searchMusic(err))
    }
    setIsLoading(false)
  };

  return [isLoading, request]
};

export default useSearch
