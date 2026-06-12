import { useState } from "react";

export default function CoordinateConverter() {

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [altitude, setAltitude] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  const [latDMS, setLatDMS] = useState("");
  const [lonDMS, setLonDMS] = useState("");

  function convertToDMS(value) {

    const absolute = Math.abs(value);

    const degrees =
      Math.floor(absolute);

    const minutesFloat =
      (absolute - degrees) * 60;

    const minutes =
      Math.floor(minutesFloat);

    const seconds =
      (
        (minutesFloat - minutes) * 60
      ).toFixed(2);

    return `${degrees}° ${minutes}' ${seconds}"`;

  }

  function getLocation() {

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
          position.coords.altitude
        ) {

          setAltitude(
            Math.round(
              position.coords.altitude
            )
          );

        }

      },

      () => {

        alert(
          "Unable to get location"
        );

      },

      {
        enableHighAccuracy: true,
      }

    );

  }

  function copyText(text) {

    navigator.clipboard.writeText(
      text
    );

    alert("Copied!");

  }

  return (

    <div className="max-w-3xl mx-auto">

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

        <h2 className="text-3xl font-bold text-center mb-6">
          📍 GPS Coordinates
        </h2>

        <button
          onClick={getLocation}
          className="
            w-full
            bg-green-600
            hover:bg-green-700
            py-4
            rounded-2xl
            font-semibold
            mb-6
          "
        >
          📍 Get My Location
        </button>

        {latitude && (

          <>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400">
                  Latitude
                </p>

                <p className="text-2xl font-bold mt-2">
                  {latitude}
                </p>

                <button
                  onClick={() =>
                    copyText(latitude)
                  }
                  className="
                    mt-3
                    bg-blue-600
                    px-4
                    py-2
                    rounded-lg
                  "
                >
                  Copy
                </button>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400">
                  Longitude
                </p>

                <p className="text-2xl font-bold mt-2">
                  {longitude}
                </p>

                <button
                  onClick={() =>
                    copyText(longitude)
                  }
                  className="
                    mt-3
                    bg-blue-600
                    px-4
                    py-2
                    rounded-lg
                  "
                >
                  Copy
                </button>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400">
                  Latitude (DMS)
                </p>

                <p className="mt-2">
                  {latDMS}
                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400">
                  Longitude (DMS)
                </p>

                <p className="mt-2">
                  {lonDMS}
                </p>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400">
                  Accuracy
                </p>

                <p className="text-3xl font-bold mt-2">
                  ±{accuracy}m
                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <p className="text-slate-400">
                  Altitude
                </p>

                <p className="text-3xl font-bold mt-2">
                  {altitude || "--"} m
                </p>

              </div>

            </div>

            <a
              href={`https://www.google.com/maps?q=${latitude},${longitude}`}
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                block
                text-center
                bg-slate-800
                hover:bg-slate-700
                p-4
                rounded-2xl
              "
            >
              🗺 Open In Google Maps
            </a>

          </>

        )}

      </div>

    </div>

  );

}