import { useEffect, useState } from "react";
import QiblaCompass from "../components/QiblaCompass";

export default function QiblaPage() {

  const [qibla, setQibla] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setLocation({
          lat,
          lon
        });

        const makkahLat =
          21.4225 * Math.PI / 180;

        const makkahLon =
          39.8262 * Math.PI / 180;

        const userLat =
          lat * Math.PI / 180;

        const userLon =
          lon * Math.PI / 180;

        const y =
          Math.sin(makkahLon - userLon);

        const x =
          Math.cos(userLat) *
            Math.tan(makkahLat)
          -
          Math.sin(userLat) *
            Math.cos(makkahLon - userLon);

        let bearing =
          Math.atan2(y, x) *
          180 /
          Math.PI;

        bearing =
          (bearing + 360) % 360;

        setQibla(bearing);

      },

      () => {

        alert(
          "Location permission denied"
        );

      }

    );

  }, []);

  return (

    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-5xl font-bold mb-8">
        Qibla Finder
      </h1>

      {!qibla && (

        <div className="bg-slate-900 rounded-3xl p-6">
          Calculating Qibla...
        </div>

      )}

      {qibla && (

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              📍 Your Location
            </h2>

            <p>
              Latitude:
              {" "}
              {location.lat.toFixed(6)}
            </p>

            <p>
              Longitude:
              {" "}
              {location.lon.toFixed(6)}
            </p>

            <div className="mt-6">

              <h2 className="text-2xl font-bold mb-2">
                🕋 Qibla Direction
              </h2>

              <p className="text-4xl">
                {qibla.toFixed(1)}°
              </p>

            </div>

          </div>

          <QiblaCompass
            qiblaAngle={qibla}
          />

        </div>

      )}

    </div>

  );
}