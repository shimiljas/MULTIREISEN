/* eslint-disable prefer-template */
/* eslint-disable */
/* eslint-disable arrow-parens */
import cache from 'memory-cache';
import store from 'store';
import { encode } from 'base-64';

// //const BASE_URL = process.env.REACT_APP_API_ENDPOINT;
// const BASE_URL = process.env.REACT_APP_FANJAM_API_ENDPOINT;
// 
// const ATH_USERNAME = process.env.REACT_APP_FANJAM_OATH_USERNAME;
// const OATH_PASSWORD = process.env.REACT_APP_FANJAM_OATH_PASSWORD;
const DEFAULT_CACHE_TIME = 1000 * 60 * 5; // 5 minutes
const OAUTH_URL = 'http://api2.multireisen.com'
const BASE_URL = 'http://api2.multireisen.com'
const OATH_USERNAME = 'admin@dynawix.com';
const OATH_PASSWORD = 'V#x9Rat?n'
const OATH_VERSION = 'v1'

const GENERIC_ERROR = 'Something went wrong. Please try again.';
import AsyncStorage from '@react-native-community/async-storage';
import convert from 'xml-js'

let AccessToken = null
export const setToken = async (t) => {
    console.log(t)
    AccessToken = t;
    store.set('token', t);
    await AsyncStorage.setItem('token', t)
};

export const clearToken = () => {
    AccessToken = null;
    store.remove('token');
};

export const getToken = async () => {
    let token = await AsyncStorage.getItem('token')
    AccessToken = token;
    return token

}

const BuildHeaders = async () => {
    // let token = await AsyncStorage.getItem('token')

    // console.log(token)
    return {
        AccessToken: `${AccessToken}`,
        'Authorization': 'Basic ' + encode(OATH_USERNAME + ':' + OATH_PASSWORD),
        'Version': OATH_VERSION
    };
};

const checkStatusForPublicEndPoints = response => response.json()
    .then((json) => {
        if (response.status >= 200 && response.status <= 300) {
            return Promise.resolve(json);
        }
        return Promise.reject(json.message || json[0].message || GENERIC_ERROR);
    })
    .catch((message) => {
        if (response.status >= 200 && response.status <= 300) {
            return Promise.resolve({});
        }
        return Promise.reject(message || GENERIC_ERROR);
    });


export const getAccessToken = () => {
    console.log(`${OAUTH_URL}/gettoken`, "OAUTH_URL")
    return fetch(`${OAUTH_URL}/gettoken`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + encode(OATH_USERNAME + ':' + OATH_PASSWORD),

        },
    })
        .catch(bail)
        .then((response) => Promise.resolve(response))
        .then(checkStatusAndParseJSON);

};


const loginCheckStatusAndParseJSON = response => response.json()
    .then((json) => {
        if (response.status === 401) {
            clearToken();
        }
        return Promise.reject(json.message || json[0].message || GENERIC_ERROR);
    })
    .catch((message) => {
        if (response.status >= 200 && response.status <= 300) {
            return Promise.resolve({});
        }

        return Promise.reject(message || GENERIC_ERROR);
    });


const checkStatusAndParseJSON = response => response.json()
    .then((json) => {
        console.log(json, "herere-------<>")

        if (response.status === 401) {
        }
        if (response.status >= 200 && response.status <= 300) {
            return Promise.resolve(json);
        }
        if (response.status === 403 && json.message === 'Token-Expired') {
            return Promise.resolve(authorize()).then(() => {
                window.location.reload();
            });
        }
        return Promise.reject(json.message || json[0].message || GENERIC_ERROR);
    })
    .catch((message) => {
        console.log(message)
        if (response.status >= 200 && response.status <= 300) {
            return Promise.resolve({});
        }
        return Promise.reject(message || GENERIC_ERROR);
    });

const bail = message => Promise.reject(GENERIC_ERROR || message);

const getAndCache = (endpoint) => {
    const cachedData = cache.get(endpoint);
    if (cachedData) {
        return Promise.resolve(cachedData);
    }
    return fetch(`${BASE_URL}/${endpoint}`, {
        headers: {
            ...BuildHeaders(),
            'Authorization': 'Basic ' + encode(OATH_USERNAME + ':' + OATH_PASSWORD),
        },
    })
        .catch(bail)
        .then(checkStatusAndParseJSON)
        .then(res => cache.put(endpoint, res, DEFAULT_CACHE_TIME));
};

const post = (endpoint, data) => {
    console.log(data)
    return (fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            AccessToken: `${AccessToken}`,
            'Authorization': 'Basic ' + encode(OATH_USERNAME + ':' + OATH_PASSWORD),
            'Version': OATH_VERSION
        },
        body: JSON.stringify(data),
    })
        .catch(bail)
        .then((response) => {
            console.log(response, "response")
        })
        // .then(checkStatusAndParseJSON)


    );
};

const put = (endpoint, data) => fetch(`${BASE_URL}/${endpoint}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        ...BuildHeaders(),
    },
    body: JSON.stringify(data),
})
    .catch(bail)
    .then(checkStatusAndParseJSON)
    .then((res) => {
        cache.clear();
        return res;
    });

const del = (endpoint, data) => fetch(`${BASE_URL}/${endpoint}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        ...BuildHeaders(),
    },
    body: JSON.stringify(data),
})
    .then(checkStatusAndParseJSON)
    .then(() => {
        cache.clear();
    })
    .catch(bail);


export const searchHotel = (data) => post('hotels/search?mapmarkers=0', data)