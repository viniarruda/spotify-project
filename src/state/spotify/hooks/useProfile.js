import { useState } from 'react'
import { useStateValue } from '../../index'
import { loadProfile } from '../queries'
import {
  listProfile,
} from '../actions'

const useProfile = () => {
  const [{spotify}, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const request = async () => {
    setIsLoading(true);

    const response = await loadProfile();
    if (response) {
      dispatch(listProfile(response))
    } else {
      const err = [];
      dispatch(listProfile(err))
    }
    setIsLoading(false)
  };

  return [spotify, isLoading, request]
};

export default useProfile
