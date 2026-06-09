import { useEffect, useState } from "react";

export default function GPSCard() {

  const [location, setLocation] =
    useState("Loading...");

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(

      (position) => {

        setLocation(
          `${position.coords.latitude},
          ${position.coords.longitude}`
        );

      },

      () => {

        setLocation(
          "Location permission denied"
        );

      }

    );

  }, []);

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h3 className="text-xl font-semibold">
        📍 GPS Location
      </h3>

      <p className="mt-4 text-slate-400">
        {location}
      </p>

    </div>

  );
}