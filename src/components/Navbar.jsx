import { Link, useLocation } from "react-router-dom";

export default function Navbar(){

const location=useLocation();

const links=[

{

path:"/online-compass",

icon:"🧭",

label:"Compass"

},

{

path:"/qibla-finder",

icon:"🕋",

label:"Qibla"

},

{

path:"/distance-calculator",

icon:"📏",

label:"Distance"

},

{

path:"/bearing-calculator",

icon:"🎯",

label:"Bearing"

},

{

path:"/coordinate-converter",

icon:"📍",

label:"GPS"

}

]

return(

<header

className="

sticky

top-0

z-50

backdrop-blur-2xl

bg-slate-950/70

border-b

border-slate-800

"

>

<div

className="

max-w-7xl

mx-auto

px-5

py-5

"

>

<Link

to="/"

className="

flex

flex-col

items-center

"

>

<div

className="

w-20

h-20

rounded-full

bg-gradient-to-br

from-green-500

to-emerald-700

flex

items-center

justify-center

text-5xl

shadow-2xl

glow

"

>

🧭

</div>

<h1

className="

mt-5

text-4xl

md:text-5xl

font-black

hero-gradient

"

>

Compassly

</h1>

<p

className="

text-slate-400

mt-2

text-sm

md:text-base

"

>

Compass • Qibla • GPS

</p>

</Link>

<nav

className="

flex

justify-center

gap-3

md:gap-5

mt-8

flex-wrap

"

>

{

links.map((item)=>(

<Link

key={item.path}

to={item.path}

className={`

w-20

h-20

md:w-24

md:h-24

rounded-3xl

flex

flex-col

items-center

justify-center

transition

duration-300

shadow-lg

${

location.pathname===item.path

?

"bg-green-500 text-white scale-105 glow"

:

"glass hover:border-green-500 hover:-translate-y-1"

}

`}

>

<div

className="

text-3xl

"

>

{item.icon}

</div>

<div

className="

text-xs

md:text-sm

font-semibold

mt-2

"

>

{item.label}

</div>

</Link>

))

}

</nav>

</div>

</header>

)

}
