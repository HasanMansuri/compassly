
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const navItems = [

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

bg-slate-950/80

border-b

border-slate-800

"

>

<div className="

max-w-6xl

mx-auto

px-5

py-6

"

>


<div className="

flex

items-center

justify-center

gap-5

"

>


<div

className="

w-24

h-24

rounded-[30px]

bg-gradient-to-br

from-green-500

to-emerald-700

flex

items-center

justify-center

text-6xl

shadow-[0_0_50px_rgba(0,255,120,.4)]

"

>

🧭

</div>


<div>

<h1 className="

text-5xl

font-black

text-white

"

>

Compassly

</h1>


<p className="

text-slate-400

text-xl

mt-1

"

>

Compass • Qibla • GPS

</p>

</div>

</div>



<div

className="

grid

grid-cols-2

gap-5

mt-8

"

>

{

navItems.map((item) => (

<Link

key={item.path}

to={item.path}

className={`

rounded-3xl

border

px-6

py-6

text-center

font-semibold

text-2xl

transition-all

duration-300

shadow-lg

${

location.pathname === item.path

?

"bg-blue-600 border-blue-500 text-white scale-105"

:

"bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-800 hover:scale-105"

}

${

item.name === "Coordinates"

?

"col-span-2"

:

""

}

`}

>

<div className="text-4xl">

{item.icon}

</div>


<div className="mt-2">

{item.name}

</div>

</Link>

))

}

</div>


</div>

</header>

  );

}
