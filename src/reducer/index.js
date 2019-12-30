/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import LoginReducer from '../container/Authentication/LoginScreen/LoginReducer'


export default combineReducers({
    profile: LoginReducer,

});
