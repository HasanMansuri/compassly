import { useState, useEffect } from "react";

export default function DistanceCalculator() {

  const [lat1, setLat1] = useState("");
  const [lon1, setLon1] = useState("");

  const [lat2, setLat2] = useState("");
  const [lon2, setLon2] = useState("");

  const [distance, setDistance] = useState(null);
  const [miles, setMiles] = useState(null);

  const [loading, setLoading] = useState(false);
  const [accuracy, setAccuracy] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getLocation();
  }, []);

  function getLocation() {

    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(

      (position) => {

        setLat1(
          position.coords.latitude.toFixed(6)
        );

        setLon1(
          position.coords.longitude.toFixed(6)
        );

        setAccuracy(
          Math.round(position.coords.accuracy)
        );

        setLoading(false);
      },

      (err) => {

        setLoading(false);

        if (err.code === 1) {
          setError(
            "Location permission denied."
          );
        } else if (err.code === 2) {
          setError(
            "Location unavailable."
          );
        } else {
          setError(
            "Unable to get your location."
          );
        }
      },

      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      }

    );
  }

  function calculateDistance() {

    if (
      !lat1 ||
      !lon1 ||
      !lat2 ||
      !lon2
    ) {
      setError(
        "Please enter destination coordinates."
      );
      return;
    }

    setError("");

    const R = 6371;

    const latitude1 = parseFloat(lat1);
    const longitude1 = parseFloat(lon1);

    const latitude2 = parseFloat(lat2);
    const longitude2 = parseFloat(lon2);

    const dLat =
      (latitude2 - latitude1) *
      Math.PI / 180;

    const dLon =
      (longitude2 - longitude1) *
      Math.PI / 180;

    const a =
      Math.sin(dLat / 2) *
      Math.sin(dLat / 2) +

      Math.cos(latitude1 * Math.PI / 180) *
      Math.cos(latitude2 * Math.PI / 180) *

      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );

    const km = R * c;

    setDistance(
      km.toFixed(2)
    );

    setMiles(
      (km * 0.621371).toFixed(2)
    );
  }

  return (

    <div className="max-w-4xl mx-auto px-4">

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

        <h2 className="text-3xl font-bold text-center mb-6">
          🌍 Distance Calculator
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
          {loading
            ? "Getting Location..."
            : "📍 Use My Location"}
        </button>

        {error && (

          <div
            className="
              bg-red-500/10
              border
              border-red-500/20
              text-red-400
              p-4
              rounded-xl
              mb-6
            "
          >
            {error}
          </div>

        )}

        <div className="bg-slate-800 rounded-2xl p-5 mb-6">

          <h3 className="text-slate-400 mb-3">
            Current Location
          </h3>

          <p>
            Latitude: {lat1 || "--"}
          </p>

          <p>
            Longitude: {lon1 || "--"}
          </p>

          {accuracy && (

            <p className="text-green-400 mt-2">
              Accuracy: ±{accuracy}m
            </p>

          )}

        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="number"
            step="any"
            placeholder="Destination Latitude"
            value={lat2}
            onChange={(e) =>
              setLat2(e.target.value)
            }
            className="
              bg-slate-800
              text-white
              p-4
              rounded-xl
              border
              border-slate-700
              w-full
            "
          />

          <input
            type="number"
            step="any"
            placeholder="Destination Longitude"
            value={lon2}
            onChange={(e) =>
              setLon2(e.target.value)
            }
            className="
              bg-slate-800
              text-white
              p-4
              rounded-xl
              border
              border-slate-700
              w-full
            "
          />

        </div>

        <button
          onClick={calculateDistance}
          className="
            mt-6
            w-full
            bg-blue-600
            hover:bg-blue-700
            py-4
            rounded-2xl
            font-semibold
          "
        >
          Calculate Distance
        </button>

        {distance && (

          <>
            <div className="grid md:grid-cols-2 gap-4 mt-6">

              <div className="bg-slate-800 rounded-2xl p-5 text-center">

                <p className="text-slate-400">
                  Distance (KM)
                </p>

                <p className="text-4xl font-bold mt-2">
                  {distance}
                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5 text-center">

                <p className="text-slate-400">
                  Distance (Miles)
                </p>

                <p className="text-4xl font-bold mt-2">
                  {miles}
                </p>

              </div>

            </div>

            <a
              href={`https://www.google.com/maps?q=${lat2},${lon2}`}
              target="_blank"
              rel="noreferrer"
              className="
                mt-4
                block
                text-center
                bg-slate-800
                hover:bg-slate-700
                p-4
                rounded-2xl
              "
            >
              🗺 Open Destination In Google Maps
            </a>

          </>
        )}

      </div>

    </div>
  );
}