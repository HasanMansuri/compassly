import { useState } from "react";

export default function CoordinateConverter() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [accuracy, setAccuracy] = useState(null);
  const [altitude, setAltitude] = useState(null);

  const [latDMS, setLatDMS] = useState("");
  const [lonDMS, setLonDMS] = useState("");

  const [loading, setLoading] = useState(false);

  function convertToDMS(value) {
    const absolute = Math.abs(value);

    const degrees = Math.floor(absolute);

    const minutesFloat =
      (absolute - degrees) * 60;

    const minutes =
      Math.floor(minutesFloat);

    const seconds =
      ((minutesFloat - minutes) * 60)
        .toFixed(2);

    return `${degrees}° ${minutes}' ${seconds}"`;
  }

  function getLocation() {
    setLoading(true);

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

        setLatDMS(
          convertToDMS(lat)
        );

        setLonDMS(
          convertToDMS(lon)
        );

        setAccuracy(
          Math.round(
            position.coords.accuracy
          )
        );

        if (
          position.coords.altitude !==
          null
        ) {
          setAltitude(
            Math.round(
              position.coords.altitude
            )
          );
        }

        setLoading(false);
      },

      () => {
        alert(
          "Please allow location access."
        );

        setLoading(false);
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  }

  function copyText(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="max-w-5xl mx-auto px-4">

      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8">

        <h1 className="text-2xl md:text-4xl font-black text-center">
          📍 Coordinate Converter
        </h1>

        <p className="text-center text-slate-400 mt-3">
          Get precise GPS coordinates instantly
        </p>

        <button
          onClick={getLocation}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 py-4 rounded-2xl font-bold"
        >
          📍 Get My Location
        </button>

        {loading && (
          <p className="text-center text-slate-400 mt-4">
            Fetching location...
          </p>
        )}

        {latitude && (
          <>
            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400">
                  Latitude
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  {latitude}
                </h2>

                <button
                  onClick={() =>
                    copyText(latitude)
                  }
                  className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
                >
                  Copy
                </button>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400">
                  Longitude
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  {longitude}
                </h2>

                <button
                  onClick={() =>
                    copyText(longitude)
                  }
                  className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
                >
                  Copy
                </button>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-5">

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400">
                  Latitude (DMS)
                </p>

                <h2 className="mt-2 text-lg">
                  {latDMS}
                </h2>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400">
                  Longitude (DMS)
                </p>

                <h2 className="mt-2 text-lg">
                  {lonDMS}
                </h2>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-5">

              <div className="bg-slate-800 rounded-2xl p-5 text-center">

                <p className="text-slate-400">
                  Accuracy
                </p>

                <h2 className="text-4xl font-black mt-2">
                  ±{accuracy}m
                </h2>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5 text-center">

                <p className="text-slate-400">
                  Altitude
                </p>

                <h2 className="text-4xl font-black mt-2">
                  {altitude || "--"}m
                </h2>

              </div>

            </div>

            <a
              href={`https://www.google.com/maps?q=${latitude},${longitude}`}
              target="_blank"
              rel="noreferrer"
              className="block text-center mt-6 bg-slate-800 hover:bg-slate-700 py-4 rounded-2xl font-bold"
            >
              🗺 Open In Google Maps
            </a>

          </>
        )}

      </div>

    </div>
  );
}