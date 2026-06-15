import { Link } from "react-router-dom";

const tools = [

  {
    icon:"🧭",
    title:"Online Compass",
    desc:"Use your phone as a real compass and find accurate directions instantly.",
    link:"/online-compass"
  },

  {
    icon:"🕋",
    title:"Qibla Finder",
    desc:"Find the exact direction of Kaaba from anywhere in the world.",
    link:"/qibla-finder"
  },

  {
    icon:"📏",
    title:"Distance Calculator",
    desc:"Calculate distance between two locations using GPS coordinates.",
    link:"/distance-calculator"
  },

  {
    icon:"🎯",
    title:"Bearing Calculator",
    desc:"Calculate the bearing angle between any two coordinates.",
    link:"/bearing-calculator"
  },

  {
    icon:"📍",
    title:"Coordinate Converter",
    desc:"Convert GPS coordinates into Decimal and DMS formats instantly.",
    link:"/coordinate-converter"
  }

];

export default function Home(){

return(

<div className="max-w-7xl mx-auto px-5 py-12">

{/* HERO */}

<div className="text-center">

<div
className="
inline-flex
items-center
gap-2
bg-green-500/10
border
border-green-500/20
px-5
py-2
rounded-full
text-green-400
font-semibold
"
>

🌍 Free Worldwide Tools

</div>

<h1
className="
text-5xl
md:text-7xl
font-black
mt-8
leading-tight
"
>

🧭 Compassly

</h1>

<p
className="
text-slate-300
text-lg
md:text-2xl
max-w-3xl
mx-auto
mt-6
leading-relaxed
"
>

Free Online Compass,

Qibla Finder,

Distance Calculator,

Bearing Calculator

and GPS Coordinate Converter.

Fast, Accurate and Mobile Friendly.

</p>


<div className="mt-10 flex justify-center gap-4 flex-wrap">

<Link

to="/online-compass"

className="
bg-green-600
hover:bg-green-700
px-8
py-4
rounded-2xl
font-bold
text-lg
shadow-xl
transition
"

>

Open Compass →

</Link>


<Link

to="/qibla-finder"

className="
bg-slate-900
border
border-slate-700
hover:border-green-500
px-8
py-4
rounded-2xl
font-bold
text-lg
transition
"

>

Find Qibla

</Link>

</div>

</div>


{/* TOOL CARDS */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-24">

{

tools.map((tool,index)=>(

<Link

key={index}

to={tool.link}

className="
group
bg-slate-900/70
backdrop-blur-xl
border
border-slate-800
rounded-3xl
p-8
hover:border-green-500
hover:-translate-y-2
transition-all
duration-300
"

>

<div className="text-6xl">

{tool.icon}

</div>

<h2 className="text-3xl font-bold mt-6">

{tool.title}

</h2>

<p className="text-slate-400 mt-4 leading-relaxed">

{tool.desc}

</p>

<div
className="
mt-8
text-green-400
font-semibold
group-hover:translate-x-2
transition
"
>

Open →

</div>

</Link>

))

}

</div>



{/* STATS */}

<div className="grid grid-cols-3 gap-5 mt-24">

<div
className="
bg-slate-900
rounded-3xl
p-6
text-center
border
border-slate-800
"
>

<h2 className="text-5xl font-black">

100%

</h2>

<p className="text-slate-400 mt-2">

Free

</p>

</div>



<div
className="
bg-slate-900
rounded-3xl
p-6
text-center
border
border-slate-800
"
>

<h2 className="text-5xl font-black">

5+

</h2>

<p className="text-slate-400 mt-2">

Tools

</p>

</div>



<div
className="
bg-slate-900
rounded-3xl
p-6
text-center
border
border-slate-800
"
>

<h2 className="text-5xl font-black">

24/7

</h2>

<p className="text-slate-400 mt-2">

Available

</p>

</div>

</div>



{/* FOOT TEXT */}

<div className="text-center mt-20">

<p className="text-slate-500 max-w-2xl mx-auto">

Compassly is a free collection of navigation and GPS tools

including compass, qibla finder, distance calculator,

bearing calculator and coordinate converter.

Works on Android, iPhone and Desktop.

</p>

</div>

</div>

)

}