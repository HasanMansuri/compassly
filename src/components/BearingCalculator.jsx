import { useState } from "react";

export default function BearingCalculator() {

  const [lat1, setLat1] = useState("");
  const [lon1, setLon1] = useState("");

  const [lat2, setLat2] = useState("");
  const [lon2, setLon2] = useState("");

  const [bearing, setBearing] = useState(null);

  function calculateBearing() {

    if (!lat1 || !lon1 || !lat2 || !lon2) {
      alert("Please enter all coordinates");
      return;
    }

    const φ1 =
      parseFloat(lat1) * Math.PI / 180;

    const φ2 =
      parseFloat(lat2) * Math.PI / 180;

    const λ1 =
      parseFloat(lon1) * Math.PI / 180;

    const λ2 =
      parseFloat(lon2) * Math.PI / 180;

    const y =
      Math.sin(λ2 - λ1) *
      Math.cos(φ2);

    const x =
      Math.cos(φ1) *
      Math.sin(φ2) -

      Math.sin(φ1) *
      Math.cos(φ2) *
      Math.cos(λ2 - λ1);

    let brng =
      Math.atan2(y, x) *
      180 / Math.PI;

    brng =
      (brng + 360) % 360;

    setBearing(
      brng.toFixed(2)
    );
  }

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h3 className="text-xl font-semibold mb-4">
        🧭 Bearing Calculator
      </h3>

      <input
        type="number"
        step="any"
        placeholder="Latitude 1"
        value={lat1}
        onChange={(e)=>setLat1(e.target.value)}
        className="w-full p-3 mb-2 rounded text-black"
      />

      <input
        type="number"
        step="any"
        placeholder="Longitude 1"
        value={lon1}
        onChange={(e)=>setLon1(e.target.value)}
        className="w-full p-3 mb-2 rounded text-black"
      />

      <input
        type="number"
        step="any"
        placeholder="Latitude 2"
        value={lat2}
        onChange={(e)=>setLat2(e.target.value)}
        className="w-full p-3 mb-2 rounded text-black"
      />

      <input
        type="number"
        step="any"
        placeholder="Longitude 2"
        value={lon2}
        onChange={(e)=>setLon2(e.target.value)}
        className="w-full p-3 mb-4 rounded text-black"
      />

      <button
        onClick={calculateBearing}
        className="bg-purple-600 px-4 py-2 rounded"
      >
        Calculate Bearing
      </button>

      {bearing && (

        <div className="mt-4 p-4 bg-slate-800 rounded">

          <h4 className="font-semibold">
            Direction
          </h4>

          <p className="text-2xl mt-2">
            {bearing}°
          </p>

        </div>

      )}

    </div>

  );
}