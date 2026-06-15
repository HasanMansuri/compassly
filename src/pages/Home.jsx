import { Link } from "react-router-dom";

export default function Home() {

const tools = [

{
title: "Compass",
icon: "🧭",
desc: "Find north instantly.",
link: "/online-compass"
},

{
title: "Qibla",
icon: "🕋",
desc: "Direction to Makkah.",
link: "/qibla-finder"
},

{
title: "Distance",
icon: "📏",
desc: "Measure distance.",
link: "/distance-calculator"
},

{
title: "Bearing",
icon: "🎯",
desc: "Calculate bearings.",
link: "/bearing-calculator"
},

{
title: "Coordinates",
icon: "📍",
desc: "GPS to DMS.",
link: "/coordinate-converter"
}

];


return (

<div className="w-full overflow-x-hidden">

<div className="max-w-6xl mx-auto px-4 py-8">


{/* CARDS */}

<div className="grid grid-cols-2 gap-4">

{

tools.map((tool)=>(

<Link

to={tool.link}

key={tool.title}

className="

bg-slate-900/80

backdrop-blur-xl

border

border-slate-800

rounded-3xl

p-5

hover:border-green-500

hover:scale-[1.02]

transition

"

>

<div className="text-5xl mb-3">

{tool.icon}

</div>


<h2

className="

text-2xl

font-bold

text-white

"

>

{tool.title}

</h2>


<p

className="

text-sm

text-slate-400

mt-2

"

>

{tool.desc}

</p>


<div

className="

text-green-400

font-semibold

mt-5

"

>

Open →

</div>


</Link>

))

}


{/* LAST CARD FULL WIDTH */}

<Link

to="/coordinate-converter"

className="

col-span-2

bg-slate-900/80

backdrop-blur-xl

border

border-slate-800

rounded-3xl

p-5

hover:border-green-500

transition

"

>

<div className="flex items-center gap-4">

<div className="text-5xl">

📍

</div>


<div>

<h2 className="text-2xl font-bold">

Coordinates

</h2>


<p className="text-slate-400 text-sm">

Convert GPS coordinates instantly

</p>

</div>

</div>

</Link>

</div>



{/* STATS */}

<div className="grid grid-cols-3 gap-3 mt-8">


<div

className="

bg-slate-900

rounded-2xl

p-4

text-center

"

>

<h3 className="text-3xl font-bold">

100%

</h3>

<p className="text-slate-400 text-sm">

Free

</p>

</div>


<div

className="

bg-slate-900

rounded-2xl

p-4

text-center

"

>

<h3 className="text-3xl font-bold">

5+

</h3>

<p className="text-slate-400 text-sm">

Tools

</p>

</div>


<div

className="

bg-slate-900

rounded-2xl

p-4

text-center

"

>

<h3 className="text-3xl font-bold">

24/7

</h3>

<p className="text-slate-400 text-sm">

Available

</p>

</div>


</div>



{/* ABOUT */}

<div

className="

mt-8

bg-slate-900

rounded-3xl

p-6

"

>

<h2

className="

text-2xl

font-bold

mb-4

"

>

About Compassly

</h2>


<p

className="

text-slate-400

leading-8

text-base

"

>

Compassly is a free collection of navigation tools including online compass, qibla finder, distance calculator, bearing calculator and coordinate converter.

Fast, accurate and works on most mobile devices.

</p>


</div>


</div>

</div>

);

}