import { useState } from "react";

export default function DistanceCalculator() {

  const [lat1, setLat1] = useState("");
  const [lon1, setLon1] = useState("");

  const [lat2, setLat2] = useState("");
  const [lon2, setLon2] = useState("");

  const [distance, setDistance] = useState(null);

  function calculateDistance() {

    if (!lat1 || !lon1 || !lat2 || !lon2) {
      alert("Please enter all coordinates");
      return;
    }

    const latitude1 = parseFloat(lat1);
    const longitude1 = parseFloat(lon1);

    const latitude2 = parseFloat(lat2);
    const longitude2 = parseFloat(lon2);

    const R = 6371; // Earth radius in km

    const dLat =
      (latitude2 - latitude1) *
      (Math.PI / 180);

    const dLon =
      (longitude2 - longitude1) *
      (Math.PI / 180);

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

    const result = R * c;

    setDistance(result.toFixed(2));
  }

  function useCurrentLocation() {

    navigator.geolocation.getCurrentPosition(

      (position) => {

        setLat1(
          position.coords.latitude.toFixed(6)
        );

        setLon1(
          position.coords.longitude.toFixed(6)
        );

      },

      () => {

        alert(
          "Unable to get your location"
        );

      }

    );
  }

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h3 className="text-xl font-semibold mb-4">
        🌍 Distance Calculator
      </h3>

      <button
        onClick={useCurrentLocation}
        className="bg-green-600 px-4 py-2 rounded mb-4"
      >
        Use My Location
      </button>

      <input
        type="number"
        step="any"
        placeholder="Latitude 1"
        value={lat1}
        onChange={(e) => setLat1(e.target.value)}
        className="w-full p-3 mb-2 rounded text-black"
      />

      <input
        type="number"
        step="any"
        placeholder="Longitude 1"
        value={lon1}
        onChange={(e) => setLon1(e.target.value)}
        className="w-full p-3 mb-2 rounded text-black"
      />

      <input
        type="number"
        step="any"
        placeholder="Latitude 2"
        value={lat2}
        onChange={(e) => setLat2(e.target.value)}
        className="w-full p-3 mb-2 rounded text-black"
      />

      <input
        type="number"
        step="any"
        placeholder="Longitude 2"
        value={lon2}
        onChange={(e) => setLon2(e.target.value)}
        className="w-full p-3 mb-4 rounded text-black"
      />

      <button
        onClick={calculateDistance}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Calculate Distance
      </button>

      {distance && (
        <div className="mt-4 p-4 bg-slate-800 rounded">

          <h4 className="font-semibold">
            Result
          </h4>

          <p className="text-2xl mt-2">
            {distance} km
          </p>

        </div>
      )}

    </div>

  );
}