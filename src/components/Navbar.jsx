import { Link } from "react-router-dom";

export default function Navbar() {

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


{/* LOGO */}

<Link

to="/"

className="

flex

items-center

justify-center

gap-3

"

>

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

"

>

🧭

</div>



<div>

<h1

className="

text-4xl

font-black

leading-none

"

>

Compassly

</h1>


<p

className="

text-sm

text-slate-400

"

>

Compass • Qibla • GPS

</p>

</div>

</Link>



{/* MENU */}

<nav

className="

flex

justify-center

gap-5

mt-4

text-3xl

"

>

<Link

to="/online-compass"

title="Compass"

className="hover:scale-110 transition"

>

🧭

</Link>



<Link

to="/qibla-finder"

title="Qibla"

className="hover:scale-110 transition"

>

🕋

</Link>



<Link

to="/distance-calculator"

title="Distance"

className="hover:scale-110 transition"

>

📏

</Link>



<Link

to="/bearing-calculator"

title="Bearing"

className="hover:scale-110 transition"

>

🎯

</Link>



<Link

to="/coordinate-converter"

title="Coordinates"

className="hover:scale-110 transition"

>

📍

</Link>


</nav>


</div>

</header>

)

}