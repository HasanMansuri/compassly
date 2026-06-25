import { useState } from "react";

export default function DistanceCalculator() {
  const [lat1, setLat1] = useState("");
  const [lon1, setLon1] = useState("");

  const [lat2, setLat2] = useState("");
  const [lon2, setLon2] = useState("");

  const [distance, setDistance] = useState(null);
  const [miles, setMiles] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function getLocation() {
    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat1(position.coords.latitude.toFixed(6));
        setLon1(position.coords.longitude.toFixed(6));
        setLoading(false);
      },
      () => {
        setLoading(false);
        setError("Location permission denied.");
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
      }
    );
  }

  function calculateDistance() {
    if (!lat1 || !lon1 || !lat2 || !lon2) {
      setError("Please enter all coordinates.");
      return;
    }

    setError("");

    const R = 6371;

    const dLat =
      (parseFloat(lat2) - parseFloat(lat1)) *
      Math.PI /
      180;

    const dLon =
      (parseFloat(lon2) - parseFloat(lon1)) *
      Math.PI /
      180;

    const a =
      Math.sin(dLat / 2) *
        Math.sin(dLat / 2) +
      Math.cos(parseFloat(lat1) * Math.PI / 180) *
        Math.cos(parseFloat(lat2) * Math.PI / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );

    const km = R * c;

    setDistance(km.toFixed(2));
    setMiles((km * 0.621371).toFixed(2));
  }

  return (
    <div className="max-w-5xl mx-auto px-4">

      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8">

        <h1 className="text-2xl md:text-4xl font-black text-center">
          🌍 Distance Calculator
        </h1>

        <p className="text-center text-slate-400 mt-3">
          Calculate distance between two GPS coordinates
        </p>

        <button
          onClick={getLocation}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 py-4 rounded-2xl font-bold"
        >
          📍 Use My Location
        </button>

        {loading && (
          <p className="text-center text-slate-400 mt-4">
            Getting location...
          </p>
        )}

        {error && (
          <div className="mt-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl p-4 text-center">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div>
            <label className="text-slate-400">
              Current Latitude
            </label>

            <input
              value={lat1}
              readOnly
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl p-4"
            />
          </div>

          <div>
            <label className="text-slate-400">
              Current Longitude
            </label>

            <input
              value={lon1}
              readOnly
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl p-4"
            />
          </div>

          <div>
            <label className="text-slate-400">
              Destination Latitude
            </label>

            <input
              type="number"
              step="any"
              value={lat2}
              onChange={(e) => setLat2(e.target.value)}
              placeholder="21.4225"
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl p-4"
            />
          </div>

          <div>
            <label className="text-slate-400">
              Destination Longitude
            </label>

            <input
              type="number"
              step="any"
              value={lon2}
              onChange={(e) => setLon2(e.target.value)}
              placeholder="39.8262"
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl p-4"
            />
          </div>

        </div>

        <button
          onClick={calculateDistance}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-bold"
        >
          Calculate Distance
        </button>

        {distance && (
          <>
            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="bg-slate-800 rounded-2xl p-6 text-center">
                <p className="text-slate-400">
                  Kilometers
                </p>

                <h2 className="text-3xl md:text-5xl font-black mt-2">
                  {distance}
                </h2>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 text-center">
                <p className="text-slate-400">
                  Miles
                </p>

                <h2 className="text-3xl md:text-5xl font-black mt-2">
                  {miles}
                </h2>
              </div>

            </div>

            <a
              href={`https://www.google.com/maps?q=${lat2},${lon2}`}
              target="_blank"
              rel="noreferrer"
              className="block text-center mt-6 bg-slate-800 hover:bg-slate-700 py-4 rounded-2xl font-bold"
            >
              🗺 Open Destination In Google Maps
            </a>
          </>
        )}

      </div>

    </div>
  );
}