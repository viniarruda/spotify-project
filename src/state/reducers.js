import authReducer from './auth/reducers';
import productReducer from './spotify/reducers';

export default ({ auth, spotify }, action) => ({
  auth: authReducer(auth, action),
  spotify: productReducer(spotify, action)
});