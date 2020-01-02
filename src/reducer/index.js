/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import LoginReducer from '../container/Authentication/LoginScreen/LoginReducer'
import CountryReducer from '../container/Home/Country/CountyrReducer'

export default combineReducers({
    profile: LoginReducer,
    country:CountryReducer

});
