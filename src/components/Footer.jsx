import { Link } from "react-router-dom";

import {

Compass,

MapPinned,

Ruler,

Navigation,

Map,

Mail,

Shield,

Globe

}

from "lucide-react";

export default function Footer(){

const tools=[

{

name:"Online Compass",

link:"/online-compass",

icon:<Compass size={18}/>

},

{

name:"Qibla Finder",

link:"/qibla-finder",

icon:<MapPinned size={18}/>

},

{

name:"Distance Calculator",

link:"/distance-calculator",

icon:<Ruler size={18}/>

},

{

name:"Bearing Calculator",

link:"/bearing-calculator",

icon:<Navigation size={18}/>

},

{

name:"Coordinate Converter",

link:"/coordinate-converter",

icon:<Map size={18}/>

}

]

return(

<footer

className="

mt-24

border-t

border-white/5

backdrop-blur-2xl

bg-slate-950/70

"

>

<div

className="

max-w-7xl

mx-auto

px-5

py-14

"

>

<div

className="

grid

grid-cols-1

md:grid-cols-3

gap-12

"

>

{/* BRAND */}

<div>

<div

className="

flex

items-center

gap-4

"

>

<div

className="

glass

glow

w-14

h-14

rounded-3xl

flex

items-center

justify-center

"

>

<Compass

size={30}

strokeWidth={2.3}

className="text-green-400"

/>

</div>

<div>

<h2

className="

hero-gradient

text-3xl

font-black

"

>

Compassly

</h2>

<p

className="

text-slate-400

text-sm

"

>

Compass • Qibla • GPS

</p>

</div>

</div>

<p

className="

text-slate-400

leading-8

mt-7

"

>

Compassly offers

free navigation

and GPS tools

including

Online Compass,

Qibla Finder,

Distance Calculator,

Bearing Calculator

and Coordinate Converter.

Fast,

accurate

and optimized

for desktop

and mobile users

worldwide.

</p>

<div

className="

flex

gap-3

mt-7

"

>

<div

className="

glass

w-11

h-11

rounded-2xl

flex

items-center

justify-center

"

>

<Shield

size={20}

className="text-green-400"

/>

</div>

<div

className="

glass

w-11

h-11

rounded-2xl

flex

items-center

justify-center

"

>

<Globe

size={20}

className="text-green-400"

/>

</div>

<div

className="

glass

w-11

h-11

rounded-2xl

flex

items-center

justify-center

"

>

<Mail

size={20}

className="text-green-400"

/>

</div>

</div>

</div>

{/* TOOLS */}

<div>

<h3

className="

text-xl

font-black

mb-7

"

>

Tools

</h3>

<div className="space-y-5">

{

tools.map((tool)=>(

<Link

key={tool.link}

to={tool.link}

className="

flex

items-center

gap-3

text-slate-400

hover:text-green-400

transition

"

>

{tool.icon}

<span>

{tool.name}

</span>

</Link>

))

}

</div>

</div>

{/* COMPANY */}

<div>

<h3

className="

text-xl

font-black

mb-7

"

>

Company

</h3>

<div className="space-y-5">

<Link

to="/about"

className="

block

text-slate-400

hover:text-green-400

transition

"

>

About

</Link>

<Link

to="/privacy-policy"

className="

block

text-slate-400

hover:text-green-400

transition

"

>

Privacy Policy

</Link>

<Link

to="/contact"

className="

block

text-slate-400

hover:text-green-400

transition

"

>

Contact

</Link>

<a

href="mailto:contact@getcompassly.com"

className="

block

text-slate-400

hover:text-green-400

transition

"

>

[contact@getcompassly.com](mailto:contact@getcompassly.com)

</a>

<div

className="

mt-8

glass

rounded-3xl

p-5

"

>

<p

className="

text-green-400

font-bold

"

>

🌎 Worldwide Access

</p>

<p

className="

text-slate-400

text-sm

leading-7

mt-3

"

>

Available

24/7

for users in

USA,

UK,

Europe,

Middle East

and worldwide.

</p>

</div>

</div>

</div>

</div>

{/* BOTTOM */}

<div

className="

border-t

border-white/5

mt-14

pt-8

text-center

"

>

<p

className="

text-slate-500

text-sm

leading-7

"

>

© 2026 Compassly.

All Rights Reserved.

Built for users worldwide.

</p>

<p

className="

text-slate-600

text-xs

mt-4

"

>

Privacy Friendly

•

Mobile Optimized

•

Always Free

</p>

</div>

</div>

</footer>

)

}
