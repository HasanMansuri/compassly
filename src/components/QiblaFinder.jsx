import { useEffect, useState } from "react";

export default function QiblaFinder() {

const [heading,setHeading]=useState(0);

const [qibla,setQibla]=useState(0);

const [distance,setDistance]=useState(null);

const [location,setLocation]=useState(null);

const [error,setError]=useState("");

const [loading,setLoading]=useState(false);

const makkahLat=21.4225;

const makkahLon=39.8262;



function calculateQibla(lat,lon){

const φ1=lat*Math.PI/180;

const λ1=lon*Math.PI/180;

const φ2=makkahLat*Math.PI/180;

const λ2=makkahLon*Math.PI/180;

const y=

Math.sin(λ2-λ1)

*

Math.cos(φ2);

const x=

Math.cos(φ1)

*

Math.sin(φ2)

-

Math.sin(φ1)

*

Math.cos(φ2)

*

Math.cos(λ2-λ1);

let bearing=

Math.atan2(y,x)

*

180

/

Math.PI;

bearing=(bearing+360)%360;

setQibla(bearing);

}



function calculateDistance(lat,lon){

const R=6371;

const dLat=

(makkahLat-lat)

*

Math.PI

/

180;

const dLon=

(makkahLon-lon)

*

Math.PI

/

180;

const a=

Math.sin(dLat/2)

*

Math.sin(dLat/2)

+

Math.cos(

lat*Math.PI/180

)

*

Math.cos(

makkahLat*Math.PI/180

)

*

Math.sin(dLon/2)

*

Math.sin(dLon/2);

const c=

2*

Math.atan2(

Math.sqrt(a),

Math.sqrt(1-a)

);

setDistance(

(R*c).toFixed(0)

);

}



function getLocation(){

setLoading(true);

setError("");

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat=

position.coords.latitude;

const lon=

position.coords.longitude;

setLocation({

lat,

lon

});

calculateQibla(

lat,

lon

);

calculateDistance(

lat,

lon

);

setLoading(false);

},

()=>{

setLoading(false);

setError(

"Location permission denied"

);

},

{

enableHighAccuracy:true,

timeout:15000,

maximumAge:0

}

);

}




useEffect(()=>{

const handleOrientation=(event)=>{

let compass=null;

if(

event.webkitCompassHeading

){

compass=

event.webkitCompassHeading;

}

else if(

event.alpha!==null

){

compass=

360-

event.alpha;

}

if(

compass!==null

){

setHeading(

Math.round(compass)

);

}

};



const startCompass=async()=>{

try{

if(

typeof DeviceOrientationEvent!=="undefined"

&&

typeof DeviceOrientationEvent.requestPermission==="function"

){

const permission=

await DeviceOrientationEvent.requestPermission();

if(

permission!=="granted"

){

return;

}

}

window.addEventListener(

"deviceorientation",

handleOrientation,

true

);

}

catch(err){

console.log(err);

}

};



startCompass();



return()=>{

window.removeEventListener(

"deviceorientation",

handleOrientation,

true

);

};

},[]);



return(

<div className="max-w-md mx-auto px-4 py-6">

<div className="bg-slate-900 border border-yellow-700/30 rounded-[35px] p-6 shadow-2xl">

<h1 className="text-center text-3xl md:text-4xl font-bold mb-6">

🕋 Qibla Finder

</h1>



<button

onClick={getLocation}

className="

w-full

bg-yellow-500

hover:bg-yellow-400

text-black

font-bold

py-4

rounded-2xl

transition

"

>

{

loading

?

"Getting Location..."

:

"📍 Use My Location"

}

</button>



{error &&

<div className="

mt-4

bg-red-500/10

border

border-red-500/20

text-red-400

rounded-2xl

p-4

text-center

">

{error}

</div>

}



<div className="flex justify-center mt-8">

<div

className="

relative

w-[300px]

h-[300px]

rounded-full

bg-gradient-to-br

from-yellow-200

to-yellow-500

shadow-2xl

"

>



<div

className="

absolute

inset-[15px]

rounded-full

bg-slate-950

overflow-hidden

"

>



<div

className="absolute inset-0"

style={{

transform:

`rotate(-${heading}deg)`,

transition:"0.2s"

}}

>



<div className="absolute top-4 left-1/2 -translate-x-1/2 text-red-500 text-3xl font-bold">

N

</div>



<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-3xl font-bold">

S

</div>



<div className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold">

W

</div>



<div className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold">

E

</div>



<div

className="absolute inset-0"

style={{

transform:

`rotate(${qibla}deg)`

}}

>



<div

className="

absolute

top-4

left-1/2

-translate-x-1/2

text-5xl

"

>

🕋

</div>



</div>

</div>



<div

className="

absolute

left-1/2

top-1/2

w-0

h-0

border-l-[20px]

border-r-[20px]

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

</div>



<div className="grid grid-cols-2 gap-4 mt-8">

<div className="bg-slate-800 rounded-2xl p-4 text-center">

<p className="text-slate-400">

Qibla

</p>

<p className="text-3xl font-bold">

{qibla.toFixed(1)}°

</p>

</div>



<div className="bg-slate-800 rounded-2xl p-4 text-center">

<p className="text-slate-400">

Heading

</p>

<p className="text-3xl font-bold">

{heading}°

</p>

</div>

</div>



{

distance &&

<div className="mt-4 bg-slate-800 rounded-2xl p-5 text-center">

<p className="text-slate-400">

Distance To Makkah

</p>

<p className="text-4xl font-bold mt-2">

{distance} km

</p>

</div>

}



{

location &&

<div className="mt-4 bg-slate-800 rounded-2xl p-5 text-center">

<p>

📍

{location.lat.toFixed(4)}

,

{" "}

{location.lon.toFixed(4)}

</p>

</div>

}



</div>

</div>

);

}