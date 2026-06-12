import { useEffect, useState } from "react";

export default function HomeCompass() {

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

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

  <h2 className="text-3xl font-bold text-center mb-6">
    Live Compass Preview
  </h2>

  <div className="text-center">

    <div className="text-7xl mb-4">
      🧭
    </div>

    <div className="text-5xl font-black">
      {heading}°
    </div>

    <p className="text-slate-400 mt-3">
      Current Heading
    </p>

  </div>

</div>

);

}
