/* eslint-disable prettier/prettier */
import {
    CITY_SELECT
} from './CityAction'



const initialState = {
    countrycode: '',
    cityname: '',
    cityid: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CITY_SELECT:
            return {
                ...state,
                code: action.payload.code,
                cityname: action.payload.cityname,
                cityid: action.payload.cityid,
                countrycode: action.payload.countrycode
            };
        default:
            return state;
    }
}
