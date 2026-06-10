import { useEffect, useState } from "react";

export default function CompassCard() {
const [heading, setHeading] = useState(0);

const getDirection = (degree) => {
const directions = [
"North",
"North-East",
"East",
"South-East",
"South",
"South-West",
"West",
"North-West",
];


return directions[
  Math.round(degree / 45) % 8
];


};

useEffect(() => {
const handleOrientation = (event) => {
if (event.alpha !== null) {
setHeading(Math.round(event.alpha));
}
};


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

return ( <div className="max-w-md mx-auto">


  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

    <h3 className="text-center text-slate-400 mb-4">
      Compass Heading
    </h3>

    <h1 className="text-center text-6xl font-black">
      {heading}°
    </h1>

    <p className="text-center text-blue-400 text-xl mt-2">
      {getDirection(heading)}
    </p>

    <div className="flex justify-center mt-8">

      <div
        className="
          relative
          w-72
          h-72
          rounded-full
          border-4
          border-slate-700
          bg-slate-950
        "
      >

        {/* Compass Dial */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotate(-${heading}deg)`
          }}
        >

          <div className="absolute top-3 left-1/2 -translate-x-1/2 text-red-500 font-bold text-xl">
            N
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xl">
            S
          </div>

          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xl">
            W
          </div>

          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xl">
            E
          </div>

        </div>

        {/* Fixed Needle */}
        <div
          className="
            absolute
            left-1/2
            top-8
            w-1
            h-28
            bg-red-500
            -translate-x-1/2
            rounded-full
          "
        />

        {/* Center Dot */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-5
            h-5
            rounded-full
            bg-white
            -translate-x-1/2
            -translate-y-1/2
          "
        />

      </div>

    </div>

    <div className="grid grid-cols-2 gap-4 mt-8">

      <div className="bg-slate-800 rounded-2xl p-4 text-center">
        <p className="text-slate-400 text-sm">
          Heading
        </p>

        <p className="font-bold text-xl">
          {heading}°
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-4 text-center">
        <p className="text-slate-400 text-sm">
          Direction
        </p>

        <p className="font-bold">
          {getDirection(heading)}
        </p>
      </div>

    </div>

  </div>

</div>

);
}
