const getUserLocation = () => new Promise((resolve, reject) => {
  let currentPosition = {};
  navigator.geolocation.getCurrentPosition((position) => {
    currentPosition = { long: position.coords.longitude, lat: position.coords.latitude };
    resolve(currentPosition);
  }, (err) => { reject(err); },
  { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 });
});

export default getUserLocation;
