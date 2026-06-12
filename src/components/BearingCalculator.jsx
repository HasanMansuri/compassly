import { useState } from "react";

export default function BearingCalculator() {
const [lat1, setLat1] = useState("");
const [lon1, setLon1] = useState("");

const [lat2, setLat2] = useState("");
const [lon2, setLon2] = useState("");

const [bearing, setBearing] = useState(null);

function getDirection(degree) {
const directions = [
"North ↑",
"North-East ↗",
"East →",
"South-East ↘",
"South ↓",
"South-West ↙",
"West ←",
"North-West ↖",
];


return directions[
  Math.floor((degree + 22.5) / 45) % 8
];


}

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

return ( <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

  <h2 className="text-3xl font-bold mb-6">
    🧭 Bearing Calculator
  </h2>

  <input
    type="number"
    step="any"
    placeholder="Latitude 1"
    value={lat1}
    onChange={(e) =>
      setLat1(e.target.value)
    }
    className="
      w-full
      p-4
      mb-3
      rounded-xl
      bg-slate-800
      border
      border-slate-700
      text-white
      placeholder-slate-400
      focus:outline-none
      focus:border-purple-500
    "
  />

  <input
    type="number"
    step="any"
    placeholder="Longitude 1"
    value={lon1}
    onChange={(e) =>
      setLon1(e.target.value)
    }
    className="
      w-full
      p-4
      mb-3
      rounded-xl
      bg-slate-800
      border
      border-slate-700
      text-white
      placeholder-slate-400
      focus:outline-none
      focus:border-purple-500
    "
  />

  <input
    type="number"
    step="any"
    placeholder="Latitude 2"
    value={lat2}
    onChange={(e) =>
      setLat2(e.target.value)
    }
    className="
      w-full
      p-4
      mb-3
      rounded-xl
      bg-slate-800
      border
      border-slate-700
      text-white
      placeholder-slate-400
      focus:outline-none
      focus:border-purple-500
    "
  />

  <input
    type="number"
    step="any"
    placeholder="Longitude 2"
    value={lon2}
    onChange={(e) =>
      setLon2(e.target.value)
    }
    className="
      w-full
      p-4
      mb-5
      rounded-xl
      bg-slate-800
      border
      border-slate-700
      text-white
      placeholder-slate-400
      focus:outline-none
      focus:border-purple-500
    "
  />

  <button
    onClick={calculateBearing}
    className="
      w-full
      bg-purple-600
      hover:bg-purple-700
      py-4
      rounded-xl
      font-semibold
    "
  >
    Calculate Bearing
  </button>

  {bearing && (
    <div className="mt-6 bg-slate-800 rounded-2xl p-6">

      <p className="text-slate-400 uppercase text-sm">
        Bearing Result
      </p>

      <p className="text-5xl font-black mt-2">
        {bearing}°
      </p>

      <div className="mt-4 bg-slate-700 rounded-xl p-4">

        <p className="text-slate-300 text-sm">
          Compass Direction
        </p>

        <p className="text-2xl font-bold text-green-400 mt-2">
          📍 {getDirection(parseFloat(bearing))}
        </p>

      </div>

    </div>
  )}

</div>

);
}
