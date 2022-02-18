const getUserLocation = () => {
  let currentPosition = {};
  navigator.geolocation.getCurrentPosition((position) => {
    currentPosition = { long: position.coords.longitude, lat: position.coords.latitude };
  });

  return currentPosition;
};

export default getUserLocation;
