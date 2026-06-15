import { Link } from "react-router-dom";

export default function Navbar() {

  const menus = [

    {
      name: "Compass",
      icon: "🧭",
      path: "/online-compass"
    },

    {
      name: "Qibla",
      icon: "🕋",
      path: "/qibla-finder"
    },

    {
      name: "Distance",
      icon: "📏",
      path: "/distance-calculator"
    },

    {
      name: "Bearing",
      icon: "🎯",
      path: "/bearing-calculator"
    },

    {
      name: "Coordinates",
      icon: "📍",
      path: "/coordinate-converter"
    }

  ];


 return (

<header
className="

sticky
top-0
z-50

backdrop-blur-xl

bg-slate-950/90

border-b

border-slate-800

"
>

<div className="max-w-6xl mx-auto px-4 py-3">


{/* TOP */}

<div className="flex items-center justify-center gap-3">

<div

className="

w-14

h-14

rounded-2xl

bg-gradient-to-br

from-green-500

to-emerald-700

flex

items-center

justify-center

text-3xl

shadow-lg

"

>

🧭

</div>


<div>

<h1

className="

text-3xl

font-black

leading-none

text-white

"

>

Compassly

</h1>


<p

className="

text-xs

text-slate-400

mt-1

"

>

Compass • Qibla • GPS

</p>

</div>

</div>



{/* MENU */}

<nav

className="

flex

justify-center

gap-2

overflow-x-auto

mt-4

pb-1

scrollbar-hide

"

>

<Link

to="/online-compass"

className="

whitespace-nowrap

px-3

py-2

rounded-full

bg-slate-900

border

border-slate-800

text-sm

"

>

🧭 Compass

</Link>



<Link

to="/qibla-finder"

className="

whitespace-nowrap

px-3

py-2

rounded-full

bg-slate-900

border

border-slate-800

text-sm

"

>

🕋 Qibla

</Link>



<Link

to="/distance-calculator"

className="

whitespace-nowrap

px-3

py-2

rounded-full

bg-slate-900

border

border-slate-800

text-sm

"

>

📏 Distance

</Link>



<Link

to="/bearing-calculator"

className="

whitespace-nowrap

px-3

py-2

rounded-full

bg-slate-900

border

border-slate-800

text-sm

"

>

🎯 Bearing

</Link>



<Link

to="/coordinate-converter"

className="

whitespace-nowrap

px-3

py-2

rounded-full

bg-slate-900

border

border-slate-800

text-sm

"

>

📍 Coordinates

</Link>


</nav>

</div>

</header>

)}