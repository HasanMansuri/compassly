import { Helmet } from "react-helmet-async";

export default function About() {

return (

<>

<Helmet>

<title>

About Compassly

</title>

<meta

name="description"

content="Learn more about Compassly and our mission."

/>

</Helmet>

<div className="max-w-4xl mx-auto px-5 py-10">

<div

className="

bg-slate-900

rounded-3xl

p-7

"

>

<h1

className="

text-4xl

font-black

mb-6

"

>

About Compassly

</h1>

<p

className="

text-slate-400

leading-8

"

>

Compassly is a free collection of navigation and GPS tools.

Our goal is to provide simple,

fast and accurate tools that work beautifully on both desktop and mobile devices.

</p>

<p

className="

text-slate-400

leading-8

mt-6

"

>

Compassly currently provides:

</p>

<ul

className="

mt-5

space-y-3

text-slate-300

"

>

<li>🧭 Online Compass</li>

<li>🕋 Qibla Finder</li>

<li>📏 Distance Calculator</li>

<li>🎯 Bearing Calculator</li>

<li>📍 Coordinate Converter</li>

</ul>

<p

className="

text-slate-400

leading-8

mt-8

"

>

Our mission is to build privacy-friendly tools

that are fast,

beautiful

and accessible worldwide.

</p>

</div>

</div>

</>

)

}
