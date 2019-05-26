import { useStateValue } from '../../index'
import {
  login
} from '../actions'

const useLogin = () => {
  const [{auth}, dispatch] = useStateValue();

  const formData = async () => {
    dispatch(login())
  };

  return [auth, formData]
};

export default useLogin
