import { useState } from "react";

export default function QiblaPage() {
const [latitude, setLatitude] = useState("");
const [longitude, setLongitude] = useState("");
const [qibla, setQibla] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const calculateQibla = (lat, lng) => {
const makkahLat = 21.4225;
const makkahLng = 39.8262;


const latRad = (lat * Math.PI) / 180;
const lngRad = (lng * Math.PI) / 180;

const makkahLatRad = (makkahLat * Math.PI) / 180;
const makkahLngRad = (makkahLng * Math.PI) / 180;

const dLng = makkahLngRad - lngRad;

const y = Math.sin(dLng);

const x =
  Math.cos(latRad) * Math.tan(makkahLatRad) -
  Math.sin(latRad) * Math.cos(dLng);

let bearing = Math.atan2(y, x);

bearing = (bearing * 180) / Math.PI;
bearing = (bearing + 360) % 360;

return bearing.toFixed(1);


};

const getLocation = () => {
setLoading(true);
setError("");


if (!navigator.geolocation) {
  setError("Geolocation is not supported.");
  setLoading(false);
  return;
}

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    setLatitude(lat);
    setLongitude(lng);

    setQibla(calculateQibla(lat, lng));

    setLoading(false);
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
      setError(
        "Location request timed out. Move near a window and try again."
      );
    } else {
      setError("Unable to get location.");
    }

    setLoading(false);
  },
  {
    enableHighAccuracy: false,
    timeout: 30000,
    maximumAge: 60000,
  }
);


};

return ( <main className="max-w-5xl mx-auto px-4 py-10">

  <h1 className="text-4xl font-black text-center mb-8">
    🕋 Qibla Finder
  </h1>

  <div className="bg-slate-900 rounded-3xl p-6">

    <button
      onClick={getLocation}
      className="bg-blue-600 px-6 py-3 rounded-xl font-semibold w-full"
    >
      {loading ? "Getting Location..." : "📍 Use My Location"}
    </button>

    {error && (
      <div className="mt-4 bg-red-500/10 text-red-400 p-4 rounded-xl">
        {error}
      </div>
    )}

    {latitude && (
      <>
        <div className="mt-6 bg-slate-800 p-4 rounded-xl">
          <h3 className="font-bold mb-2">
            📍 Your Location
          </h3>

          <p>
            Latitude: {Number(latitude).toFixed(6)}
          </p>

          <p>
            Longitude: {Number(longitude).toFixed(6)}
          </p>
        </div>

        <div className="mt-6 bg-slate-800 p-4 rounded-xl text-center">
          <h3 className="font-bold mb-3">
            🕋 Qibla Direction
          </h3>

          <div className="text-5xl font-black text-green-400">
            {qibla}°
          </div>
        </div>
      </>
    )}

  </div>

</main>
);
}
