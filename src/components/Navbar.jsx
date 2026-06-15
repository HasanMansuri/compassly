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

<div className="max-w-6xl mx-auto px-4 py-4">



<Link

to="/"

className="

flex

items-center

justify-center

gap-4

"

>

<div

className="

w-16

h-16

rounded-3xl

bg-gradient-to-br

from-green-500

to-emerald-700

flex

items-center

justify-center

text-4xl

shadow-lg

"

>

🧭

</div>


<div>

<h1

className="

text-3xl

md:text-5xl

font-black

text-white

leading-none

"

>

Compassly

</h1>


<p

className="

text-sm

md:text-lg

text-slate-400

mt-1

"

>

Compass • Qibla • GPS

</p>

</div>

</Link>



<nav

className="

flex

justify-center

flex-wrap

gap-3

mt-5

"

>

{

menus.map((item)=>(

<Link

key={item.name}

to={item.path}

className="

px-4

py-2

rounded-2xl

bg-slate-900

border

border-slate-800

text-slate-200

text-sm

md:text-lg

hover:border-green-500

hover:text-white

transition

"

>

<span className="mr-1">

{item.icon}

</span>

{item.name}

</Link>

))

}

</nav>



</div>

</header>

  );

}