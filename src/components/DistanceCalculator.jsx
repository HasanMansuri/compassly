import { useState } from "react";

export default function DistanceCalculator() {

  const [lat1, setLat1] = useState("");
  const [lon1, setLon1] = useState("");

  const [lat2, setLat2] = useState("");
  const [lon2, setLon2] = useState("");

  const [distance, setDistance] = useState(null);
  const [miles, setMiles] = useState(null);

  const [error, setError] = useState("");

  function getLocation() {

    setError("");

    if (!navigator.geolocation) {

      setError("Geolocation not supported");

      return;

    }

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

        setError(
          "Unable to get your location"
        );

      },

      {

        enableHighAccuracy: true,

        timeout: 10000,

        maximumAge: 0

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

        "Please enter destination coordinates"

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

      Math.PI /

      180;

    const dLon =

      (longitude2 - longitude1) *

      Math.PI /

      180;

    const a =

      Math.sin(dLat / 2) *

      Math.sin(dLat / 2) +

      Math.cos(

        latitude1 *

        Math.PI /

        180

      ) *

      Math.cos(

        latitude2 *

        Math.PI /

        180

      ) *

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

    <div className="max-w-md mx-auto px-4 py-6">

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-5">

        <h1 className="text-center text-3xl md:text-4xl font-bold text-white">

          🌍 Distance Calculator

        </h1>

        <p className="text-center text-slate-400 mt-2">

          Calculate distance between your location and destination

        </p>

        <button

          onClick={getLocation}

          className="

          mt-6

          w-full

          bg-green-600

          hover:bg-green-700

          rounded-2xl

          py-4

          text-lg

          font-bold

          transition

          "

        >

          📍 Use My Location

        </button>

        {error && (

          <div

            className="

            mt-4

            bg-red-500/10

            border

            border-red-500/20

            text-red-400

            rounded-2xl

            p-4

            text-center

            "

          >

            {error}

          </div>

        )}

        <div className="mt-6">

          <label className="text-slate-400 text-sm">

            Current Latitude

          </label>

          <input

            type="text"

            value={lat1}

            readOnly

            className="

            w-full

            mt-2

            bg-slate-800

            p-4

            rounded-2xl

            text-white

            border

            border-slate-700

            "

          />

        </div>

        <div className="mt-4">

          <label className="text-slate-400 text-sm">

            Current Longitude

          </label>

          <input

            type="text"

            value={lon1}

            readOnly

            className="

            w-full

            mt-2

            bg-slate-800

            p-4

            rounded-2xl

            text-white

            border

            border-slate-700

            "

          />

        </div>

        <div className="mt-6">

          <label className="text-slate-400 text-sm">

            Destination Latitude

          </label>

          <input

            type="number"

            step="any"

            value={lat2}

            onChange={(e) =>

              setLat2(e.target.value)

            }

            placeholder="e.g. 21.4225"

            className="

            w-full

            mt-2

            bg-slate-800

            p-4

            rounded-2xl

            text-white

            border

            border-slate-700

            "

          />

        </div>

        <div className="mt-4">

          <label className="text-slate-400 text-sm">

            Destination Longitude

          </label>

          <input

            type="number"

            step="any"

            value={lon2}

            onChange={(e) =>

              setLon2(e.target.value)

            }

            placeholder="e.g. 39.8262"

            className="

            w-full

            mt-2

            bg-slate-800

            p-4

            rounded-2xl

            text-white

            border

            border-slate-700

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

          rounded-2xl

          py-4

          text-lg

          font-bold

          "

        >

          Calculate Distance

        </button>

        {distance && (

          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="bg-slate-800 rounded-2xl p-5 text-center">

              <p className="text-slate-400">

                Distance

              </p>

              <h2 className="text-3xl font-bold mt-2">

                {distance}

              </h2>

              <p className="text-green-400">

                KM

              </p>

            </div>

            <div className="bg-slate-800 rounded-2xl p-5 text-center">

              <p className="text-slate-400">

                Distance

              </p>

              <h2 className="text-3xl font-bold mt-2">

                {miles}

              </h2>

              <p className="text-blue-400">

                Miles

              </p>

            </div>

          </div>

        )}

      </div>

    </div>

  );

}