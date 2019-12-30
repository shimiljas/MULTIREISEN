/* eslint-disable prettier/prettier */
import {
    LOGIN_CHECKING,
    LOGIN_SUCCES,
    LOGIN_FAILURE,
    LOGIN_UPDATE,
    RESET
} from './LoginActionType';




const initialState = {
    loader: false,
    data: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case LOGIN_CHECKING: {
            return { ...state, loader: true };
        }
        case LOGIN_SUCCES: {
            return {
                ...state,
                loader: false,
                data: action.payload,
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                loader: false,
            };
        }
        case RESET:
            return initialState;
        default:
            return state;
    }
}
