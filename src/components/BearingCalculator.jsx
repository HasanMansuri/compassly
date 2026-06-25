import { useState } from "react";

export default function BearingCalculator() {
  const [lat1, setLat1] = useState("");
  const [lon1, setLon1] = useState("");

  const [lat2, setLat2] = useState("");
  const [lon2, setLon2] = useState("");

  const [bearing, setBearing] = useState(null);
  const [direction, setDirection] = useState("");

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
      180 /
      Math.PI;

    brng = (brng + 360) % 360;

    setBearing(brng.toFixed(2));
    setDirection(
      getDirection(brng)
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4">

      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8">

        <h1 className="text-2xl md:text-4xl font-black text-center">
          🎯 Bearing Calculator
        </h1>

        <p className="text-center text-slate-400 mt-3">
          Calculate the exact bearing between two coordinates
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div>
            <label className="text-slate-400">
              Latitude 1
            </label>

            <input
              type="number"
              step="any"
              value={lat1}
              onChange={(e) =>
                setLat1(e.target.value)
              }
              placeholder="19.0760"
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl p-4"
            />
          </div>

          <div>
            <label className="text-slate-400">
              Longitude 1
            </label>

            <input
              type="number"
              step="any"
              value={lon1}
              onChange={(e) =>
                setLon1(e.target.value)
              }
              placeholder="72.8777"
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl p-4"
            />
          </div>

          <div>
            <label className="text-slate-400">
              Latitude 2
            </label>

            <input
              type="number"
              step="any"
              value={lat2}
              onChange={(e) =>
                setLat2(e.target.value)
              }
              placeholder="21.4225"
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl p-4"
            />
          </div>

          <div>
            <label className="text-slate-400">
              Longitude 2
            </label>

            <input
              type="number"
              step="any"
              value={lon2}
              onChange={(e) =>
                setLon2(e.target.value)
              }
              placeholder="39.8262"
              className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl p-4"
            />
          </div>

        </div>

        <button
          onClick={calculateBearing}
          className="w-full mt-8 bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl font-bold transition"
        >
          Calculate Bearing
        </button>

        {bearing && (
          <div className="mt-8">

            <div className="bg-slate-800 rounded-3xl p-8 text-center">

              <p className="text-slate-400">
                Bearing
              </p>

              <h2 className="text-5xl md:text-7xl font-black mt-3">
                {bearing}°
              </h2>

              <div className="mt-6 inline-block bg-purple-600/20 border border-purple-500/30 px-6 py-3 rounded-2xl">

                <span className="text-xl font-bold text-purple-300">
                  📍 {direction}
                </span>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}