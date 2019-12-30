import Request from '../Request';

export const fetchUserProfile = () =>
  Request('profile', {method: 'GET', params: {}});

export const updateUserProfile = params =>
  new Promise((resolve, reject) => {
    Request('profile', {method: 'PUT', params})
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
