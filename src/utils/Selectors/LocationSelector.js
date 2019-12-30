import { createSelector } from 'reselect';

const getUserLocation = state => state.location;

export const isUserLocationPresentSelector = createSelector(
  [getUserLocation],
  location => (location && location.lat && location.lng && location.permission)
);

export const getLocationSelector = createSelector(
  [getUserLocation],
  location => location
);
