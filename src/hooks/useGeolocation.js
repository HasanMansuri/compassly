import { useState } from "react";

export default function useGeolocation() {

const [location, setLocation] = useState({

latitude: null,

longitude: null,

accuracy: null,

altitude: null

});

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

const getLocation = () => {

setLoading(true);

setError("");

if (!navigator.geolocation) {

setError("Geolocation is not supported on this device.");

setLoading(false);

return;

}

navigator.geolocation.getCurrentPosition(

(position) => {

setLocation({

latitude: position.coords.latitude,

longitude: position.coords.longitude,

accuracy: position.coords.accuracy,

altitude: position.coords.altitude

});

setLoading(false);

},

(err) => {

switch (err.code) {

case err.PERMISSION_DENIED:

setError(

"Location permission denied. Please allow location access."

);

break;

case err.POSITION_UNAVAILABLE:

setError(

"Location information unavailable."

);

break;

case err.TIMEOUT:

setError(

"Location request timed out."

);

break;

default:

setError(

"Unable to get your location."

);

}

setLoading(false);

},

{

enableHighAccuracy: true,

timeout: 15000,

maximumAge: 0

}

);

};

return {

location,

loading,

error,

getLocation

};

}
