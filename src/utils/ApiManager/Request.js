/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import axios from 'axios';

import getUrl from './EndPoints';
import store from '../../store/store';
import { getAccessToken } from '../Selectors/ProfileSelectors';
import errors from '../../constants/errors';
import ErrorHandler from '../ErrorHandler';
import UserManager from '../UserManager';

const parseErrors = (error, reject) => {
  console.log(error, reject);
  let response = {};
  try {
    // eslint-disable-next-line prefer-destructuring
    response = error.response;
  } catch {
    response = error;
  }
  ErrorHandler.logErrors(errors.network.request, 'HTTP_REQUEST', response, 'Request');
  if (response && response.request
    && response.request.status && response.request.status === 401) {
    // UserManager.makeUserLogOut();
  }
  // console.log('ERROR', response);
  reject(response);
};

const parseResponses = (result, resolve, reject) => {
  let response = {};
  try {
    response = result.data;
    console.log('RESPONSE', response);
    resolve(response);
  } catch (error) {
    parseErrors(error, reject);
  }
};

const Request = (url, requestOptions, auth = true) => new Promise((resolve, reject) => {
  const requestID = requestOptions && requestOptions.url
    ? requestOptions.url
    : null;
  const endPoint = `${getUrl(url)}${requestID ? `/${requestID}` : ''}`;
  const requestMethod = requestOptions && requestOptions.method
    ? requestOptions.method.toUpperCase()
    : null;
  let defaultOptions = {};
  if (requestMethod) {
    const requestParams = requestOptions.params ? requestOptions.params : null;
    if (auth) {
      // console.log(store.store.getState(), 'store.store.getState()')
      // Verify Token and add it in defaultOptions
      const accessToken = requestOptions.token ? requestOptions.token : getAccessToken(store.store.getState());
      // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkYmQ4NGQxOGMxM2Y3MmVkYmI1OTE0ZCJ9LCJpYXQiOjE1NzI3MDEzOTMsImV4cCI6MTYwNDIzNzM5M30.kTvcxzBMeH-RJQ0Jbko21Pn8F9EjPecYa0eEIK5BiUM'
      if (!accessToken) {
        // TODO: If no x-access-token flush to logout clear store etc..
        // TODO: Send error Log
        UserManager.makeUserLogOut();
        return null;
      }
      defaultOptions = {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': accessToken,
          'Access-Control-Allow-Headers': 'x-access-token',
        },
      };
      if (requestOptions.ContentType) {
        defaultOptions = {
          headers: {
            'Content-Type': requestOptions.ContentType,
            'x-access-token': accessToken,
            'Access-Control-Allow-Headers': 'x-access-token',
          },
        };
      }
    } else {
      defaultOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }


    console.log('URL', endPoint);
    console.log('Request Params', requestParams);
    console.log('Default Params', defaultOptions);
    switch (requestMethod) {
      case 'GET': {
        axios.get(endPoint, { params: requestParams, ...defaultOptions })
          .then(response => parseResponses(response, resolve, reject))
          .catch(err => parseErrors(err, reject));
        break;
      }
      case 'DELETE': {
        axios.delete(endPoint, { ...requestParams, ...defaultOptions })
          .then(response => parseResponses(response, resolve))
          .catch(err => parseErrors(err, reject));
        break;
      }
      case 'POST': {
        axios.post(endPoint, requestParams, defaultOptions)
          .then(response => parseResponses(response, resolve))
          .catch(err => parseErrors(err, reject));
        break;
      }
      case 'PUT': {
        axios.put(endPoint, requestParams, defaultOptions)
          .then(response => parseResponses(response, resolve))
          .catch(err => parseErrors(err, reject));
        break;
      }
      case 'PATCH': {
        axios.patch(endPoint, requestParams, defaultOptions)
          .then(response => parseResponses(response, resolve))
          .catch(err => parseErrors(err, reject));
        break;
      }
      default: {
        reject(new Error(errors.network.invalid));
      }
    }
    setTimeout(() => {
      reject(new Error(errors.network.timeOut));
    }, 80000);
  } else {
    reject(new Error(errors.network.invalid));
  }
  return null;
});

export default Request;
