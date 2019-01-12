/** combineReducers
 *  将多个reducer合成一个大的 Reducer
 */
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer  from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile:profileReducer
})