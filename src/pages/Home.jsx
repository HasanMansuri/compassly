import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

export default function Home(){

const tools=[

{

title:"Online Compass",

icon:"🧭",

desc:"Find true north instantly with a beautiful and accurate compass.",

link:"/online-compass"

},

{

title:"Qibla Finder",

icon:"🕋",

desc:"Find the direction of Makkah accurately from anywhere.",

link:"/qibla-finder"

},

{

title:"Distance Calculator",

icon:"📏",

desc:"Measure distance between two locations instantly.",

link:"/distance-calculator"

},

{

title:"Bearing Calculator",

icon:"🎯",

desc:"Calculate bearings and directions precisely.",

link:"/bearing-calculator"

},

{

title:"Coordinate Converter",

icon:"📍",

desc:"Convert GPS coordinates between formats.",

link:"/coordinate-converter"

}

]

return(

<>

<Helmet>

<title>

Compassly - Free Online Compass & GPS Tools

</title>

<meta

name="description"

content="Free Online Compass, Qibla Finder, Distance Calculator, Bearing Calculator and Coordinate Converter."

/>

</Helmet>

<div

className="

max-w-7xl

mx-auto

px-5

"

>

{/* HERO */}

<section

className="

min-h-[85vh]

flex

flex-col

items-center

justify-center

text-center

fadeUp

"

>

<div

className="

relative

"

>

<div

className="

absolute

inset-0

bg-green-500/20

blur-[80px]

rounded-full

"

>

</div>

<div

className="

relative

w-40

h-40

md:w-56

md:h-56

rounded-full

glass

flex

items-center

justify-center

spinSlow

"

>

<div

className="

text-[90px]

md:text-[130px]

"

>

🧭

</div>

</div>

</div>

<div

className="

mt-10

px-5

py-3

rounded-full

glass

text-green-400

font-bold

"

>

🌍 Trusted Navigation Tools

</div>

<h1

className="

mt-8

font-black

leading-none

hero-gradient

text-6xl

md:text-8xl

"

>

Compassly

</h1>

<h2

className="

text-white

font-black

mt-5

leading-tight

text-4xl

md:text-6xl

max-w-4xl

"

>

Navigate The World

<br/>

With Confidence

</h2>

<p

className="

max-w-3xl

mx-auto

mt-8

text-slate-400

leading-9

text-lg

md:text-2xl

"

>

Compassly provides

Free Online Compass,

Qibla Finder,

Distance Calculator,

Bearing Calculator

and GPS Coordinate Converter.

Fast,

accurate

and beautifully optimized

for all devices worldwide.

</p>

<div

className="

flex

gap-5

flex-wrap

justify-center

mt-10

"

>

<Link

to="/online-compass"

className="btn-primary"

>

🧭 Open Compass

</Link>

<Link

to="/qibla-finder"

className="btn-secondary"

>

🕋 Find Qibla

</Link>

</div>

</section>

{/* TOOLS */}

<section

className="

py-20

"

>

<h2

className="

section-title

text-center

mb-5

"

>

Explore Tools

</h2>

<p

className="

section-subtitle

text-center

max-w-2xl

mx-auto

mb-16

"

>

Everything you need for navigation,

Qibla direction,

distance calculations

and GPS coordinate conversions.

</p>

<div

className="

grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3

gap-8

"

>

{

tools.map((tool)=>(

<Link

key={tool.title}

to={tool.link}

className="

card

p-8

"

>

<div

className="

text-7xl

"

>

{tool.icon}

</div>

<h3

className="

text-3xl

font-black

mt-6

"

>

{tool.title}

</h3>

<p

className="

text-slate-400

leading-8

mt-5

"

>

{tool.desc}

</p>

<div

className="

text-green-400

font-bold

mt-8

"

>

Open →

</div>

</Link>

))

}

</div>

</section>

{/* STATS */}

<section

className="

grid

grid-cols-1

md:grid-cols-3

gap-7

py-20

"

>

<div className="card p-10 text-center">

<h3 className="text-6xl font-black hero-gradient">

100%

</h3>

<p className="text-slate-400 mt-5">

Free Forever

</p>

</div>

<div className="card p-10 text-center">

<h3 className="text-6xl font-black hero-gradient">

5+

</h3>

<p className="text-slate-400 mt-5">

Powerful Tools

</p>

</div>

<div className="card p-10 text-center">

<h3 className="text-6xl font-black hero-gradient">

24/7

</h3>

<p className="text-slate-400 mt-5">

Worldwide Access

</p>

</div>

</section>

{/* ABOUT */}

<section

className="

py-20

"

>

<div

className="

glass

rounded-[40px]

p-10

md:p-16

"

>

<h2

className="

section-title

"

>

About Compassly

</h2>

<p

className="

section-subtitle

mt-8

"

>

Compassly is a free collection

of navigation and GPS tools

designed to help users worldwide.

Our mission is simple:

build fast,

accurate

and privacy-friendly tools

that work beautifully

on phones,

tablets

and desktops.

</p>

</div>

</section>

</div>

</>

)

}
