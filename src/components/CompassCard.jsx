import { useEffect, useState } from "react";

export default function CompassCard() {

const [heading,setHeading]=useState(0);

const [direction,setDirection]=useState("North");

const [supported,setSupported]=useState(true);

const [permissionNeeded,setPermissionNeeded]=useState(false);

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

function getDirection(degree){

return directions[

Math.round(degree/45)%8

];

}

function handleOrientation(event){

let compass=null;

if(event.webkitCompassHeading){

compass=event.webkitCompassHeading;

}

else if(event.alpha!==null){

compass=360-event.alpha;

}

if(compass!==null){

setSupported(true);

setHeading(prev=>

prev+(compass-prev)*0.15

);

setDirection(

getDirection(compass)

);

}

else{

setSupported(false);

}

}

function startCompass(){

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

}

async function requestPermission(){

try{

if(

typeof DeviceOrientationEvent!==

"undefined"

&&

typeof DeviceOrientationEvent

.requestPermission===

"function"

){

const permission=

await DeviceOrientationEvent

.requestPermission();

if(

permission==="granted"

){

startCompass();

setPermissionNeeded(false);

}

}

else{

startCompass();

}

}

catch{

setSupported(false);

}

}

useEffect(()=>{

if(

typeof DeviceOrientationEvent!==

"undefined"

&&

typeof DeviceOrientationEvent

.requestPermission===

"function"

){

setPermissionNeeded(true);

}

else{

startCompass();

}

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

<div className="max-w-xl mx-auto">

<div

className="

bg-slate-900/80

backdrop-blur-xl

border

border-slate-800

rounded-[32px]

p-6

md:p-8

shadow-2xl

"

>

<h1

className="

text-center

text-3xl

md:text-4xl

font-black

"

>

🧭 Online Compass

</h1>

<p

className="

text-center

text-slate-400

mt-3

"

>

Real-time compass that works

on Android,

iPhone

and desktop.

</p>

{

permissionNeeded && (

<button

onClick={requestPermission}

className="

w-full

mt-6

bg-blue-600

hover:bg-blue-700

rounded-2xl

py-4

font-bold

transition

"

>

Enable Compass

</button>

)

}

{

!supported && (

<div

className="

bg-red-500/10

border

border-red-500/20

text-red-400

rounded-2xl

p-4

text-center

mt-6

"

>

Compass is not supported

or permission denied.

</div>

)

}

<div className="text-center mt-8">

<h2

className="

text-5xl

md:text-6xl

font-black

"

>

{Math.round(heading)}°

</h2>

<p

className="

text-green-400

text-xl

font-semibold

mt-2

"

>

{direction}

</p>

</div>

<div className="flex justify-center mt-10">

<div

className="

relative

w-[280px]

h-[280px]

md:w-[340px]

md:h-[340px]

rounded-full

border-[10px]

border-slate-700

bg-slate-950

shadow-[0_0_40px_rgba(34,197,94,0.2)]

overflow-hidden

"

>

{

Array.from({

length:36

}).map((_,i)=>(

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

"#22c55e"

:

"#475569",

transform:

`

translate(-50%,-100%)

rotate(${i*10}deg)

translateY(-128px)

`

}}

>

</div>

))

}

<div

className="absolute inset-0"

style={{

transform:

`rotate(-${heading}deg)`,

transition:

"transform .1s linear"

}}

>

<div

className="

absolute

top-3

left-1/2

-translate-x-1/2

text-red-500

font-black

text-4xl

"

>

N

</div>

<div

className="

absolute

bottom-3

left-1/2

-translate-x-1/2

text-3xl

"

>

S

</div>

<div

className="

absolute

left-3

top-1/2

-translate-y-1/2

text-3xl

"

>

W

</div>

<div

className="

absolute

right-3

top-1/2

-translate-y-1/2

text-3xl

"

>

E

</div>

</div>

<div

className="

absolute

left-1/2

top-7

-translate-x-1/2

text-red-500

text-6xl

drop-shadow-lg

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

bg-white

rounded-full

-translate-x-1/2

-translate-y-1/2

shadow-lg

"

>

</div>

</div>

</div>

<div

className="

grid

grid-cols-2

gap-4

mt-10

"

>

<div

className="

bg-slate-800

rounded-2xl

p-5

text-center

"

>

<p className="text-slate-400">

Heading

</p>

<h3

className="

text-3xl

font-black

mt-2

"

>

{Math.round(heading)}°

</h3>

</div>

<div

className="

bg-slate-800

rounded-2xl

p-5

text-center

"

>

<p className="text-slate-400">

Direction

</p>

<h3

className="

text-2xl

font-black

mt-3

text-green-400

"

>

{direction}

</h3>

</div>

</div>

<p

className="

text-center

text-sm

text-slate-500

leading-7

mt-8

"

>

If the compass feels inaccurate,

move your phone in a figure 8 motion

to recalibrate the sensors.

</p>

</div>

</div>

);

}
