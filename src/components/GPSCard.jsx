import { useState } from "react";

export default function GPSCard() {
const [location, setLocation] = useState(null);
const [error, setError] = useState("");

const getLocation = () => {
setError("");


navigator.geolocation.getCurrentPosition(
  (position) => {
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy,
    });
  },
  (error) => {
    console.log(error);

    if (error.code === 1) {
      setError("Permission denied.");
    } else if (error.code === 2) {
      setError(
        "Location unavailable. Turn ON GPS and Google Location Accuracy."
      );
    } else if (error.code === 3) {
      setError("Location timeout.");
    } else {
      setError("Unable to get location.");
    }
  },
  {
    enableHighAccuracy: false,
    timeout: 30000,
    maximumAge: 60000,
  }
);

};

return ( <div className="bg-slate-900 rounded-3xl p-6">

  <h3 className="text-xl font-bold mb-4">
    📍 GPS Location
  </h3>

  <button
    onClick={getLocation}
    className="bg-blue-600 px-4 py-2 rounded-xl mb-4"
  >
    Get Location
  </button>

  {error && (
    <p className="text-red-400">
      {error}
    </p>
  )}

  {location && (
    <>
      <p>
        Latitude: {location.lat.toFixed(6)}
      </p>

      <p>
        Longitude: {location.lng.toFixed(6)}
      </p>

      <p>
        Accuracy: {Math.round(location.accuracy)} m
      </p>
    </>
  )}

</div>

);
}
