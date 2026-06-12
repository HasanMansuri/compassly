import { useState, useEffect } from "react";

export default function QiblaFinder() {

const [loading, setLoading] = useState(false);
const [qiblaAngle, setQiblaAngle] = useState(null);
const [distance, setDistance] = useState(null);

const [latitude, setLatitude] = useState(null);
const [longitude, setLongitude] = useState(null);

const [error, setError] = useState("");
const [accuracy, setAccuracy] = useState(null);

const MAKKAH_LAT = 21.4225;
const MAKKAH_LON = 39.8262;

useEffect(() => {
getLocation();
}, []);

function getDirection(angle) {

const directions = [
  "North",
  "North-East",
  "East",
  "South-East",
  "South",
  "South-West",
  "West",
  "North-West",
];

return directions[
  Math.round(angle / 45) % 8
];


}

function calculateQibla(lat, lon) {

const φ1 = lat * Math.PI / 180;
const λ1 = lon * Math.PI / 180;

const φ2 = MAKKAH_LAT * Math.PI / 180;
const λ2 = MAKKAH_LON * Math.PI / 180;

const y =
  Math.sin(λ2 - λ1) *
  Math.cos(φ2);

const x =
  Math.cos(φ1) *
  Math.sin(φ2) -
  Math.sin(φ1) *
  Math.cos(φ2) *
  Math.cos(λ2 - λ1);

let bearing =
  Math.atan2(y, x) *
  180 / Math.PI;

bearing =
  (bearing + 360) % 360;

setQiblaAngle(
  bearing.toFixed(2)
);

calculateDistance(lat, lon);


}

function calculateDistance(lat, lon) {


const R = 6371;

const dLat =
  (MAKKAH_LAT - lat) *
  Math.PI / 180;

const dLon =
  (MAKKAH_LON - lon) *
  Math.PI / 180;

const a =
  Math.sin(dLat / 2) *
  Math.sin(dLat / 2) +

  Math.cos(lat * Math.PI / 180) *
  Math.cos(MAKKAH_LAT * Math.PI / 180) *

  Math.sin(dLon / 2) *
  Math.sin(dLon / 2);

const c =
  2 *
  Math.atan2(
    Math.sqrt(a),
    Math.sqrt(1 - a)
  );

setDistance(
  (R * c).toFixed(0)
);


}

function getLocation() {


setLoading(true);
setError("");

navigator.geolocation.getCurrentPosition(

  (position) => {

    const lat =
      position.coords.latitude;

    const lon =
      position.coords.longitude;

    setLatitude(
      lat.toFixed(6)
    );

    setLongitude(
      lon.toFixed(6)
    );

    setAccuracy(
      Math.round(
        position.coords.accuracy
      )
    );

    calculateQibla(lat, lon);

    setLoading(false);
  },

  (err) => {

    setLoading(false);

    if (err.code === 1) {

      setError(
        "Location permission denied."
      );

    } else {

      setError(
        "Unable to get your location."
      );

    }

  },

  {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0,
  }

);

}

return (


<div className="max-w-2xl mx-auto">

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
      🕋 Qibla Finder
    </h2>

    <button
      onClick={getLocation}
      disabled={loading}
      className="
        w-full
        bg-green-600
        hover:bg-green-700
        py-4
        rounded-2xl
        font-semibold
        text-lg
        transition
      "
    >
      {loading
        ? "Getting Location..."
        : "📍 Use My Location"}
    </button>

    {error && (

      <div
        className="
          mt-5
          bg-red-500/10
          border
          border-red-500/20
          text-red-400
          p-4
          rounded-2xl
        "
      >
        {error}
      </div>

    )}

    {qiblaAngle && (

      <>

        <div className="mt-10 flex justify-center">

          <div
            className="
              relative
              w-72
              h-72
              rounded-full
              border-4
              border-green-500
              bg-slate-950
              shadow-2xl
            "
          >

            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-red-500 font-bold text-xl">
              N
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 font-bold">
              E
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-bold">
              S
            </div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold">
              W
            </div>

            <div
              className="
                absolute
                left-1/2
                top-1/2
                text-7xl
              "
              style={{
                transform:
                  "translate(-50%, -50%)"
              }}
            >
              🕋
            </div>

            <div
              className="
                absolute
                left-1/2
                top-1/2
              "
              style={{
                transform:
                  `translate(-50%, -100%) rotate(${qiblaAngle}deg)`
              }}
            >
              <div className="text-6xl text-green-500">
                ↑
              </div>
            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

          <div className="bg-slate-800 rounded-2xl p-5">

            <p className="text-slate-400">
              Qibla Direction
            </p>

            <p className="text-4xl font-bold mt-2">
              {qiblaAngle}°
            </p>

            <p className="text-green-400 mt-2">
              {getDirection(
                parseFloat(qiblaAngle)
              )}
            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-5">

            <p className="text-slate-400">
              Distance to Makkah
            </p>

            <p className="text-4xl font-bold mt-2">
              {distance} km
            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-5">

            <p className="text-slate-400">
              GPS Accuracy
            </p>

            <p className="text-4xl font-bold mt-2">
              {accuracy} m
            </p>

          </div>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5 mt-4">

          <p className="text-slate-400 mb-3">
            Current Location
          </p>

          <p>
            Latitude: {latitude}
          </p>

          <p>
            Longitude: {longitude}
          </p>

        </div>

        <a
          href={`https://www.google.com/maps?q=${latitude},${longitude}`}
          target="_blank"
          rel="noreferrer"
          className="
            block
            mt-4
            text-center
            bg-blue-600
            hover:bg-blue-700
            py-3
            rounded-2xl
            font-semibold
          "
        >
          Open In Google Maps
        </a>

      </>

    )}

  </div>

</div>

);

}
