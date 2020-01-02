/* eslint-disable prettier/prettier */
import {
    COUNTRY_SELECT
} from './CountryAction'



const initialState = {
    code:'',
    name:''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case COUNTRY_SELECT:
            return { ...state, code:action.payload.code, name:action.payload.name};
        default:
            return state;
    }
}
