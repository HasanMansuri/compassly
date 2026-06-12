import { useEffect, useState } from "react";

export default function CompassCard() {

const [heading, setHeading] = useState(0);
const [direction, setDirection] = useState("North");
const [supported, setSupported] = useState(true);

const directions = [
"North",
"North-East",
"East",
"South-East",
"South",
"South-West",
"West",
"North-West"
];

useEffect(() => {


function handleOrientation(event) {

  let compass = null;

  if (event.webkitCompassHeading) {
    compass = event.webkitCompassHeading;
  }

  else if (event.alpha !== null) {
    compass = 360 - event.alpha;
  }

  if (compass !== null) {

    compass = Math.round(compass);

    setHeading(compass);

    setDirection(
      directions[
        Math.round(compass / 45) % 8
      ]
    );
  }
}

window.addEventListener(
  "deviceorientationabsolute",
  handleOrientation,
  true
);

window.addEventListener(
  "deviceorientation",
  handleOrientation,
  true
);

return () => {

  window.removeEventListener(
    "deviceorientationabsolute",
    handleOrientation,
    true
  );

  window.removeEventListener(
    "deviceorientation",
    handleOrientation,
    true
  );

};


}, []);

return (


<div className="max-w-md mx-auto">

  <div className="bg-slate-900 rounded-3xl p-6">

    <h2 className="text-center text-3xl font-bold mb-4">
      🧭 Compass
    </h2>

    <div className="text-center">

      <div className="text-6xl font-black">
        {heading}°
      </div>

      <div className="text-blue-400 text-xl mt-2">
        {direction}
      </div>

    </div>

    <div className="flex justify-center mt-8">

      <div
        className="relative w-72 h-72 rounded-full border-4 border-slate-700"
      >

        <div
          className="absolute inset-0"
          style={{
            transform:
              `rotate(-${heading}deg)`
          }}
        >

          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-red-500 text-2xl font-bold">
            N
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            S
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            W
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            E
          </div>

        </div>

        <div
          className="absolute left-1/2 top-6 -translate-x-1/2 text-red-500 text-5xl"
        >
          ▲
        </div>

        <div
          className="absolute left-1/2 top-1/2 w-5 h-5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
        />

      </div>

    </div>

  </div>

</div>


);

}
