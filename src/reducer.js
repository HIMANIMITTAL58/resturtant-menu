import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import resturant from './reducers/resturant';

export default combineReducers({
  resturant,
  router: routerReducer
});
