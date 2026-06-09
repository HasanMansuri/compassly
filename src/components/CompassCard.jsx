import { useEffect, useState } from "react";

export default function CompassCard() {

  const [heading, setHeading] = useState(0);

  useEffect(() => {

    function handleOrientation(event) {

      if (event.alpha !== null) {

        setHeading(
          Math.round(event.alpha)
        );

      }

    }

    window.addEventListener(
      "deviceorientation",
      handleOrientation
    );

    return () => {

      window.removeEventListener(
        "deviceorientation",
        handleOrientation
      );

    };

  }, []);

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h3 className="text-xl font-semibold text-center mb-4">
        🧭 Compass
      </h3>

      <div className="flex justify-center">

        <div
          style={{
            width: "250px",
            height: "250px",
            border: "4px solid white",
            borderRadius: "50%",
            position: "relative",
            overflow: "hidden"
          }}
        >

          <div
            style={{
              position: "absolute",
              width: "4px",
              height: "100px",
              background: "red",
              left: "50%",
              top: "25px",
              transformOrigin: "bottom center",
              transform:
                `translateX(-50%) rotate(${heading}deg)`
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "14px",
              height: "14px",
              background: "white",
              borderRadius: "50%",
              transform:
                "translate(-50%, -50%)"
            }}
          />

        </div>

      </div>

      <p className="text-center mt-4">
        Heading: {heading}°
      </p>

      <p className="text-center text-slate-400 mt-2">
        Works on mobile devices
      </p>

    </div>

  );
}