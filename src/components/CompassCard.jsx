import { useEffect, useState } from "react";

export default function CompassCard() {

const [heading,setHeading]=useState(0);

const [direction,setDirection]=useState("North");

const [error,setError]=useState("");

const directions=[
"North",
"North-East",
"East",
"South-East",
"South",
"South-West",
"West",
"North-West"
];

useEffect(()=>{

function handleOrientation(event){

let compass=null;

if(event.webkitCompassHeading){
compass=event.webkitCompassHeading;
}
else if(event.alpha!==null){
compass=360-event.alpha;
}

if(compass!==null){

const smooth=Math.round(compass);

setHeading(smooth);

setDirection(
directions[
Math.round(smooth/45)%8
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

return()=>{

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

},[]);

return(

<div className="max-w-5xl mx-auto px-4">

<div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-10">

<h1 className="text-3xl md:text-5xl font-black text-center">
🧭 Online Compass
</h1>

<p className="text-center text-slate-400 mt-3">
Real-time digital compass with accurate heading
</p>

<div className="text-center mt-8">

<h2 className="text-5xl md:text-7xl font-black">
{heading}°
</h2>

<p className="text-green-400 text-xl md:text-2xl mt-3">
{direction}
</p>

</div>

<div className="flex justify-center mt-10">

<div
className="
relative
w-[260px]
h-[260px]
md:w-[380px]
md:h-[380px]
rounded-full
border-[10px]
border-green-600
bg-white
shadow-[0_0_40px_rgba(34,197,94,0.35)]
overflow-hidden
"
>

<div
className="absolute inset-0"
style={{
transform:`rotate(-${heading}deg)`,
transition:"transform .15s linear"
}}
>

<div className="absolute top-4 left-1/2 -translate-x-1/2 text-red-600 text-4xl font-black">
N
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black text-3xl font-bold">
S
</div>

<div className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-3xl font-bold">
W
</div>

<div className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-3xl font-bold">
E
</div>

</div>

<div
className="
absolute
left-1/2
top-5
-translate-x-1/2
text-red-500
text-6xl
"
>
▲
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

</div>

</div>

);

}
