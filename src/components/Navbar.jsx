import {

Link,

useLocation

}

from "react-router-dom";

import {

Compass,

MapPinned,

Ruler,

Navigation,

Map

}

from "lucide-react";

export default function Navbar(){

const location=useLocation();

const links=[

{

path:"/online-compass",

icon:

<Compass

size={22}

strokeWidth={2.3}

/>,

label:"Compass"

},

{

path:"/qibla-finder",

icon:

<MapPinned

size={22}

strokeWidth={2.3}

/>,

label:"Qibla"

},

{

path:"/distance-calculator",

icon:

<Ruler

size={22}

strokeWidth={2.3}

/>,

label:"Distance"

},

{

path:"/bearing-calculator",

icon:

<Navigation

size={22}

strokeWidth={2.3}

/>,

label:"Bearing"

},

{

path:"/coordinate-converter",

icon:

<Map

size={22}

strokeWidth={2.3}

/>,

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

border-white/5

"

>

<div

className="

max-w-7xl

mx-auto

px-4

py-4

"

>

{/* LOGO */}

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

glass

glow

w-16

h-16

rounded-3xl

flex

items-center

justify-center

spinSlow

"

>

<Compass

size={34}

strokeWidth={2.3}

className="text-green-400"

/>

</div>

<h1

className="

hero-gradient

text-4xl

font-black

mt-3

"

>

Compassly

</h1>

<p

className="

text-slate-400

text-xs

mt-1

"

>

Compass • Qibla • GPS

</p>

</Link>

{/* MENU */}

<nav

className="

flex

justify-center

gap-3

mt-6

flex-wrap

"

>

{

links.map((item)=>(

<Link

key={item.path}

to={item.path}

className={`

w-[70px]

h-[70px]

rounded-[22px]

flex

flex-col

items-center

justify-center

transition

duration-300

${

location.pathname===item.path

?

"bg-gradient-to-br from-green-500 to-emerald-700 shadow-[0_0_35px_rgba(34,197,94,.35)] scale-105"

:

"glass hover:scale-105 hover:border-green-500"

}

`}

>

<div>

{item.icon}

</div>

<span

className="

text-[11px]

font-semibold

mt-1

"

>

{item.label}

</span>

</Link>

))

}

</nav>

</div>

</header>

)

}
