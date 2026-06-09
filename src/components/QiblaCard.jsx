import { useEffect, useState } from "react";

export default function QiblaCard() {

  const [qibla, setQibla] = useState("Calculating...");

  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const makkahLat = 21.4225;
      const makkahLon = 39.8262;

      const toRadians = (deg) => deg * Math.PI / 180;
      const toDegrees = (rad) => rad * 180 / Math.PI;

      const φ1 = toRadians(lat);
      const φ2 = toRadians(makkahLat);

      const Δλ = toRadians(makkahLon - lon);

      const y = Math.sin(Δλ);

      const x =
        Math.cos(φ1) * Math.tan(φ2) -
        Math.sin(φ1) * Math.cos(Δλ);

      let bearing = toDegrees(
        Math.atan2(y, x)
      );

      bearing = (bearing + 360) % 360;

      setQibla(
        `${bearing.toFixed(1)}°`
      );

    });

  }, []);

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h3 className="text-xl font-semibold">
        🕋 Qibla Direction
      </h3>

      <p className="mt-4 text-slate-400">
        {qibla}
      </p>

    </div>

  );
}