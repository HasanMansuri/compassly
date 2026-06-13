import { useEffect, useState } from "react";

export default function QiblaFinder() {

  const [heading, setHeading] = useState(0);

  const [qiblaAngle, setQiblaAngle] = useState(0);

  const [location, setLocation] = useState(null);

  const [error, setError] = useState("");

  const [permissionNeeded, setPermissionNeeded] =
    useState(false);

  const makkahLat = 21.4225;

  const makkahLon = 39.8262;



  function getQiblaDirection(lat, lon) {

    const lat1 = lat * Math.PI / 180;

    const lon1 = lon * Math.PI / 180;

    const lat2 = makkahLat * Math.PI / 180;

    const lon2 = makkahLon * Math.PI / 180;

    const dLon = lon2 - lon1;

    const y = Math.sin(dLon);

    const x =

      Math.cos(lat1) *

      Math.tan(lat2)

      -

      Math.sin(lat1) *

      Math.cos(dLon);

    let bearing =

      Math.atan2(y, x)

      * 180

      / Math.PI;

    bearing = (bearing + 360) % 360;

    return bearing;

  }



  function getLocation() {

    setError("");

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const lat = position.coords.latitude;

        const lon = position.coords.longitude;

        setLocation({

          lat,

          lon

        });

        setQiblaAngle(

          getQiblaDirection(

            lat,

            lon

          )

        );

      },

      () => {

        setError(

          "Please allow location access."

        );

      },

      {

        enableHighAccuracy: true,

        timeout: 15000,

        maximumAge: 0

      }

    );

  }



  async function requestCompassPermission() {

    try {

      if (

        typeof DeviceOrientationEvent !==

        "undefined"

        &&

        typeof DeviceOrientationEvent

          .requestPermission ===

        "function"

      ) {

        const permission =

          await DeviceOrientationEvent

            .requestPermission();

        if (

          permission ===

          "granted"

        ) {

          startCompass();

        }

      }

      else {

        startCompass();

      }

    }

    catch {

      setError(

        "Compass permission denied."

      );

    }

  }



  function startCompass() {

    window.addEventListener(

      "deviceorientation",

      handleOrientation,

      true

    );

    setPermissionNeeded(false);

  }



  function handleOrientation(event) {

    let compass = null;



    if (

      event.webkitCompassHeading

    ) {

      compass =

        event.webkitCompassHeading;

    }

    else if (

      event.alpha !== null

    ) {

      compass =

        360 -

        event.alpha;

    }



    if (

      compass !== null

    ) {

      setHeading(

        prev =>

          prev +

          (

            compass -

            prev

          ) * 0.15

      );

    }

  }



  useEffect(() => {

    getLocation();



    if (

      typeof DeviceOrientationEvent

      !== "undefined"

      &&

      typeof DeviceOrientationEvent

        .requestPermission ===

      "function"

    ) {

      setPermissionNeeded(true);

    }

    else {

      startCompass();

    }



    return () => {

      window.removeEventListener(

        "deviceorientation",

        handleOrientation,

        true

      );

    };

  }, []);



  return (

<div className="max-w-md mx-auto px-4 py-6">

<div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl">

<h1 className="text-center text-3xl font-bold">

🕋 Qibla Finder

</h1>

<p className="text-center text-slate-400 mt-2">

Find the direction of Kaaba

</p>



{permissionNeeded && (

<button

onClick={requestCompassPermission}

className="

w-full

bg-blue-600

hover:bg-blue-700

rounded-2xl

py-3

font-bold

mt-5

"

>

Enable Compass

</button>

)}



<button

onClick={getLocation}

className="

w-full

bg-green-600

hover:bg-green-700

rounded-2xl

py-4

font-bold

mt-4

"

>

📍 Use My Location

</button>



{error && (

<div className="

bg-red-500/10

border

border-red-500/20

text-red-400

rounded-2xl

p-4

mt-5

text-center

">

{error}

</div>

)}



<div className="flex justify-center mt-10">

<div

className="

relative

w-[300px]

h-[300px]

rounded-full

bg-white

border-[12px]

border-green-600

shadow-[0_0_40px_rgba(34,197,94,0.35)]

overflow-hidden

"

>



{

Array.from({

length:36

}).map(

(_,i)=>(

<div

key={i}

className="

absolute

left-1/2

top-1/2

origin-bottom

"

style={{

height:

i%3===0

?

"18px"

:

"10px",

width:"2px",

background:

i%3===0

?

"#166534"

:

"#86efac",

transform:

`

translate(-50%,-100%)

rotate(${i*10}deg)

translateY(-132px)

`

}}

>

</div>

)

)

}



<div

className="absolute inset-0"

style={{

transform:

`rotate(-${heading}deg)`,

transition:

"transform 0.12s linear"

}}

>

<div className="absolute top-3 left-1/2 -translate-x-1/2 text-red-600 text-4xl font-bold">

N

</div>

<div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-800 text-3xl font-bold">

S

</div>

<div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-800 text-3xl font-bold">

W

</div>

<div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-800 text-3xl font-bold">

E

</div>

</div>



<div

className="absolute inset-0"

style={{

transform:

`rotate(${qiblaAngle-heading}deg)`,

transition:

"transform 0.2s ease"

}}

>

<div

className="

absolute

top-5

left-1/2

-translate-x-1/2

text-[55px]

"

>

🕋

</div>

</div>



<div

className="

absolute

left-1/2

top-1/2

w-0

h-0

border-l-[18px]

border-r-[18px]

border-b-[70px]

border-l-transparent

border-r-transparent

border-b-red-500

-translate-x-1/2

-translate-y-[90%]

rotate-180

"

>

</div>



<div

className="

absolute

left-1/2

top-1/2

w-5

h-5

rounded-full

bg-red-500

-translate-x-1/2

-translate-y-1/2

"

>

</div>



</div>

</div>



{location && (

<div className="grid grid-cols-2 gap-4 mt-8">

<div className="bg-slate-800 rounded-2xl p-4 text-center">

<p className="text-slate-400">

Qibla

</p>

<p className="text-3xl font-bold">

{qiblaAngle.toFixed(1)}°

</p>

</div>



<div className="bg-slate-800 rounded-2xl p-4 text-center">

<p className="text-slate-400">

Heading

</p>

<p className="text-3xl font-bold">

{Math.round(heading)}°

</p>

</div>

</div>

)}



<p className="

text-center

text-sm

text-slate-400

mt-6

">

Move your phone in a figure 8 motion

if the compass seems inaccurate.

</p>

</div>

</div>

  );

}