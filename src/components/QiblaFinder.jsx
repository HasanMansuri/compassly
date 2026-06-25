import { useEffect,useState } from "react";

export default function QiblaFinder(){

const [heading,setHeading]=useState(0);

const [qiblaAngle,setQiblaAngle]=useState(0);

const [error,setError]=useState("");

const makkahLat=21.4225;
const makkahLon=39.8262;

function getQiblaDirection(lat,lon){

const lat1=lat*Math.PI/180;
const lon1=lon*Math.PI/180;

const lat2=makkahLat*Math.PI/180;
const lon2=makkahLon*Math.PI/180;

const dLon=lon2-lon1;

const y=Math.sin(dLon);

const x=
Math.cos(lat1)*
Math.tan(lat2)

Math.sin(lat1)*
Math.cos(dLon);

let bearing=
Math.atan2(y,x)
*180
/Math.PI;

bearing=(bearing+360)%360;

return bearing;

}

function getLocation(){

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat=
position.coords.latitude;

const lon=
position.coords.longitude;

setQiblaAngle(
getQiblaDirection(
lat,
lon
)
);

},

()=>{

setError(
"Location permission denied."
);

}

);

}

useEffect(()=>{

getLocation();

function handleOrientation(event){

let compass=null;

if(event.webkitCompassHeading){
compass=event.webkitCompassHeading;
}
else if(event.alpha!==null){
compass=360-event.alpha;
}

if(compass!==null){

setHeading(
Math.round(compass)
);

}

}

window.addEventListener(
"deviceorientation",
handleOrientation,
true
);

return()=>{

window.removeEventListener(
"deviceorientation",
handleOrientation,
true
);

};

},[]);

return(

<div className="max-w-5xl mx-auto px-4">

<div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-10">

<h1 className="text-3xl md:text-5xl font-black text-center">
🕋 Qibla Finder
</h1>

<p className="text-center text-slate-400 mt-3">
Find the direction of Makkah instantly
</p>

{error&&(

<div className="mt-5 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl text-center">
{error}
</div>

)}

<div className="flex justify-center mt-10">

<div
className="
relative
w-[260px]
h-[260px]
md:w-[380px]
md:h-[380px]
rounded-full
bg-white
border-[10px]
border-green-600
overflow-hidden
shadow-[0_0_40px_rgba(34,197,94,0.35)]
"
>

<div
className="absolute inset-0"
style={{
transform:`rotate(-${heading}deg)`
}}
>

<div className="absolute top-3 left-1/2 -translate-x-1/2 text-red-600 text-4xl font-black">
N
</div>

<div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-black text-3xl font-bold">
S
</div>

<div className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-3xl font-bold">
W
</div>

<div className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-3xl font-bold">
E
</div>

</div>

<div
className="absolute inset-0"
style={{
transform:`rotate(${qiblaAngle-heading}deg)`
}}
>

<div className="absolute top-5 left-1/2 -translate-x-1/2 text-6xl">
🕋
</div>

</div>

<div
className="
absolute
left-1/2
top-1/2
w-6
h-6
rounded-full
bg-red-500
-translate-x-1/2
-translate-y-1/2
"
>
</div>

</div>

</div>

<div className="grid grid-cols-2 gap-4 mt-8">

<div className="bg-slate-800 rounded-2xl p-5 text-center">

<p className="text-slate-400">
Qibla
</p>

<h2 className="text-4xl font-black mt-2">
{qiblaAngle.toFixed(1)}°
</h2>

</div>

<div className="bg-slate-800 rounded-2xl p-5 text-center">

<p className="text-slate-400">
Heading
</p>

<h2 className="text-4xl font-black mt-2">
{heading}°
</h2>

</div>

</div>

</div>

</div>

);

}
