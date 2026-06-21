import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {

Compass,

MapPinned,

Ruler,

Navigation,

Map,

Shield,

Smartphone,

Globe

}

from "lucide-react";

export default function Home(){

const tools=[

{

title:"Online Compass",

icon:<Compass size={50} strokeWidth={2.2}/>,

desc:

"Find north instantly with real-time heading and accurate compass degrees.",

features:

["Real-time","Accurate","Free"],

link:

"/online-compass"

},

{

title:"Qibla Finder",

icon:<MapPinned size={50} strokeWidth={2.2}/>,

desc:

"Find accurate Qibla direction from anywhere in the world.",

features:

["GPS","Fast","Worldwide"],

link:

"/qibla-finder"

},

{

title:"Distance Calculator",

icon:<Ruler size={50} strokeWidth={2.2}/>,

desc:

"Calculate distance between coordinates instantly and accurately.",

features:

["Fast","Precise","Mobile"],

link:

"/distance-calculator"

},

{

title:"Bearing Calculator",

icon:<Navigation size={50} strokeWidth={2.2}/>,

desc:

"Calculate bearings and headings quickly for navigation.",

features:

["Simple","Instant","Free"],

link:

"/bearing-calculator"

},

{

title:"Coordinate Converter",

icon:<Map size={50} strokeWidth={2.2}/>,

desc:

"Convert GPS coordinates between Decimal and DMS format.",

features:

["GPS","Decimal","DMS"],

link:

"/coordinate-converter"

}

]

const faqs=[

{

q:"Is Compassly free?",

a:

"Yes. Compassly is completely free and available worldwide."

},

{

q:"Does Compassly work on mobile?",

a:

"Yes. Compassly is optimized for Android and iPhone devices."

},

{

q:"Is my location stored?",

a:

"No. Compassly does not store your GPS location or compass information."

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

content="Compassly offers a free Online Compass, Qibla Finder, Distance Calculator, Bearing Calculator and GPS Coordinate Converter."

/>

<meta

name="keywords"

content="online compass,qibla finder,distance calculator,bearing calculator,gps coordinate converter"

/>

</Helmet>

<div className="max-w-7xl mx-auto px-4 py-8 overflow-x-hidden">

{/* HERO */}

<section className="text-center relative py-10 md:py-20">

<div

className="

absolute

left-1/2

top-5

-translate-x-1/2

w-72

h-72

bg-green-500/20

blur-3xl

rounded-full

"

> </div>

<img

src="/compass.svg"

alt="Compass"

className="

w-40

h-40

md:w-52

md:h-52

mx-auto

float

drop-shadow-[0_0_40px_rgba(34,197,94,.25)]

"

/>

<div

className="

inline-flex

mt-8

px-5

py-2

rounded-full

glass

text-green-400

font-semibold

text-sm

"

>

🌎 Trusted Navigation Tools

</div>

<h1

className="

hero-gradient

text-6xl

md:text-8xl

font-black

mt-7

"

>

Compassly

</h1>

<p

className="

text-3xl

md:text-5xl

font-black

mt-5

leading-tight

"

>

Navigate The World

<br/>

With Confidence

</p>

<p

className="

max-w-3xl

mx-auto

text-slate-400

text-lg

leading-9

mt-8

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

and optimized

for mobile devices worldwide.

</p>

<div

className="

flex

justify-center

gap-4

flex-wrap

mt-10

"

>

<Link

to="/online-compass"

className="

px-8

py-4

rounded-2xl

font-bold

bg-gradient-to-r

from-green-500

to-emerald-600

hover:scale-105

transition

shadow-2xl

"

>

Open Compass

</Link>

<Link

to="/qibla-finder"

className="

px-8

py-4

rounded-2xl

font-bold

glass

hover:scale-105

transition

"

>

Find Qibla

</Link>

</div>

</section>

{/* TOOLS */}

<section className="mt-14">

<h2

className="

text-4xl

font-black

mb-10

text-center

"

>

Explore Tools

</h2>

<div

className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-7

"

>

{

tools.map((tool)=>(

<Link

key={tool.title}

to={tool.link}

className="

glass

rounded-[30px]

p-8

cardHover

"

>

<div

className="

text-green-400

"

>

{tool.icon}

</div>

<h3

className="

text-2xl

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

mt-4

"

>

{tool.desc}

</p>

<div

className="

flex

gap-2

flex-wrap

mt-6

"

>

{

tool.features.map((f)=>(

<div

key={f}

className="

px-3

py-1

rounded-full

bg-slate-800

text-xs

text-slate-300

"

>

✓ {f}

</div>

))

}

</div>

<div

className="

mt-8

font-bold

text-green-400

"

>

Open →

</div>

</Link>

))

}

</div>

</section>

{/* TRUST */}

<section

className="

grid

grid-cols-3

gap-4

mt-16

"

>

<div className="glass rounded-3xl p-5 text-center">

<Shield

size={40}

className="mx-auto text-green-400"

/>

<h3 className="font-bold mt-4">

Privacy First

</h3>

<p className="text-sm text-slate-400 mt-2">

No data stored

</p>

</div>

<div className="glass rounded-3xl p-5 text-center">

<Smartphone

size={40}

className="mx-auto text-green-400"

/>

<h3 className="font-bold mt-4">

Mobile Friendly

</h3>

<p className="text-sm text-slate-400 mt-2">

Works everywhere

</p>

</div>

<div className="glass rounded-3xl p-5 text-center">

<Globe

size={40}

className="mx-auto text-green-400"

/>

<h3 className="font-bold mt-4">

Worldwide

</h3>

<p className="text-sm text-slate-400 mt-2">

Available 24/7

</p>

</div>

</section>

{/* FAQ */}

<section className="mt-20">

<h2

className="

text-4xl

font-black

text-center

mb-10

"

>

FAQ

</h2>

<div className="space-y-6">

{

faqs.map((item)=>(

<div

key={item.q}

className="

glass

rounded-3xl

p-7

"

>

<h3

className="

text-2xl

font-bold

"

>

{item.q}

</h3>

<p

className="

text-slate-400

leading-8

mt-4

"

>

{item.a}

</p>

</div>

))

}

</div>

</section>

{/* ABOUT */}

<section

className="

glass

rounded-[32px]

p-8

mt-20

"

>

<h2

className="

text-4xl

font-black

mb-6

"

>

About Compassly

</h2>

<p

className="

text-slate-400

leading-9

text-lg

"

>

Compassly is a collection of free navigation

and GPS tools designed for people around the world.

Our goal is to provide

fast,

accurate

and privacy-friendly utilities

that work beautifully

on desktop,

Android

and iPhone devices.

</p>

</section>

</div>

</>

)

}
