export const locationPermissionTypeModel = (data) => {
  if (data) {
    return true;
  }
  return false;
};

export const locationPermissionValuesModel = (data) => {
  const response = {
    lat: null,
    lng: null,
    permission: true,
  };
  if (data) {
    if (data.latitude) {
      response.lat = data.latitude;
    }
    if (data.longitude) {
      response.lng = data.longitude;
    }
    if (response.lat && response.lng) {
      response.permission = true;
    }
  }
  return response;
};
