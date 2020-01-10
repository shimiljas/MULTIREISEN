/* eslint-disable prettier/prettier */
export const SERACH_REQUEST = 'SERACH_REQUEST';
export const SERACH_SUCCESS = 'SERACH_SUCCESS';
export const SERACH_FAILURE = 'SERACH_FAILURE';
import { toast, } from '../../../components/Toast'
import * as api from '../../../utils/ApiManager/api'
import convert from 'xml-js'
export const searchHotel = (data) => dispatch => {

    dispatch({ type: SERACH_REQUEST });
    return api.searchHotel(data)
        .then(response => {
            console.log(response)
            //convert.xml2json(response, { compact: true, spaces: 4 })
            dispatch({ type: SERACH_SUCCESS, payload: response })
        })
        .catch(err => {
            console.log(err)
            toast({ type: 'danger', text: 'Something went Wrong' })
            dispatch({ type: SERACH_FAILURE });
        })
}
