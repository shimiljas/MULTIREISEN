/* eslint-disable prettier/prettier */
import { createSelector } from 'reselect';
//import console = require('console');

// Selector function
const getProfile = state => state.profile;
const getMeta = state => state.profile.meta;

// const getProfileMeta = state => state.profile.meta

// Reselection function
export const getAccessToken = createSelector(
  [getProfile],
  profile => (profile && profile.data.token ? profile.data.token : null)
);

export const isUserLoggedIn = createSelector(
  [getProfile],
  profile => profile && profile.token,
);

export const getUserProfile = createSelector(
  [getProfile],
  profile => profile,
);

export const getUserMailSelector = createSelector(
  [getProfile],
  profile => profile && profile.email,
);
export const getUserPhoneSelector = createSelector(
  [getProfile],
  profile => profile && profile.phone,
);

export const getVerificationStatusSelector = createSelector(
  [getProfile],
  profile => profile && profile.verificationStatus,
);

export const getFireBaseTokenSelector = createSelector(
  [getMeta],
  meta => meta && meta.firebase_token,
);
