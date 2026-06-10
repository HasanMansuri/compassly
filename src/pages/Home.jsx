import { Link } from "react-router-dom";

export default function Home() {
const tools = [
{
icon: "🧭",
title: "Online Compass",
description: "Real-time compass for navigation and orientation.",
path: "/online-compass",
},
{
icon: "🕋",
title: "Qibla Finder",
description: "Find the direction of Makkah from anywhere.",
path: "/qibla-finder",
},
{
icon: "🌍",
title: "Distance Calculator",
description: "Measure distance between two coordinates.",
path: "/distance-calculator",
},
{
icon: "📐",
title: "Bearing Calculator",
description: "Calculate direction between two locations.",
path: "/bearing-calculator",
},
{
icon: "📍",
title: "Coordinate Converter",
description: "Convert decimal coordinates into DMS format.",
path: "/coordinate-converter",
},
];

return ( <main className="relative overflow-hidden">

  {/* Background Glow */}
  <div
    className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-[500px]
      md:w-[700px]
      h-[500px]
      md:h-[700px]
      rounded-full
      bg-blue-500/10
      blur-[120px]
      pointer-events-none
    "
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* HERO */}
    <section className="text-center py-16 md:py-24">

      <div
        className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-blue-500/10
          border
          border-blue-500/20
          text-blue-400
          text-xs
          sm:text-sm
          mb-6
        "
      >
        🚀 Free Navigation Toolkit
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black">
        Compassly
      </h1>

      <h2
        className="
          text-xl
          sm:text-2xl
          md:text-4xl
          lg:text-5xl
          font-bold
          mt-4
          md:mt-6
          bg-gradient-to-r
          from-blue-400
          to-cyan-300
          bg-clip-text
          text-transparent
        "
      >
        Navigate Smarter. Anywhere.
      </h2>

      <p
        className="
          max-w-3xl
          mx-auto
          mt-6
          text-base
          sm:text-lg
          md:text-xl
          text-slate-400
          leading-7
          md:leading-9
          px-2
        "
      >
        Professional online navigation tools including
        Compass, Qibla Finder, Distance Calculator,
        Bearing Calculator, and Coordinate Converter.
      </p>

      <div
        className="
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          mt-8
        "
      >
        <Link
          to="/online-compass"
          className="
            bg-blue-600
            px-6
            py-3
            rounded-2xl
            font-semibold
            hover:bg-blue-500
            transition
          "
        >
          Start Exploring
        </Link>

        <Link
          to="/qibla-finder"
          className="
            border
            border-slate-700
            px-6
            py-3
            rounded-2xl
            hover:bg-slate-900
            transition
          "
        >
          Open Qibla Finder
        </Link>
      </div>

    </section>

    {/* STATS */}
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-center">
        <h3 className="text-3xl md:text-5xl font-bold">5</h3>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Navigation Tools
        </p>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-center">
        <h3 className="text-3xl md:text-5xl font-bold">GPS</h3>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Location Services
        </p>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-center">
        <h3 className="text-3xl md:text-5xl font-bold">24/7</h3>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Available Online
        </p>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-center">
        <h3 className="text-3xl md:text-5xl font-bold">100%</h3>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Free To Use
        </p>
      </div>

    </section>

    {/* TOOLS */}
    <section className="mb-24">

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Navigation Tools
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {tools.map((tool) => (
          <Link
            key={tool.title}
            to={tool.path}
            className="
              bg-gradient-to-br
              from-slate-900
              to-slate-800
              border
              border-slate-800
              rounded-3xl
              p-6
              hover:scale-105
              hover:border-blue-500
              transition
              duration-300
            "
          >
            <div className="text-4xl mb-4">
              {tool.icon}
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              {tool.title}
            </h3>

            <p className="text-slate-400 text-sm md:text-base">
              {tool.description}
            </p>
          </Link>
        ))}

      </div>

    </section>

    {/* ABOUT */}
    <section className="mb-24">

      <div className="bg-slate-900 rounded-3xl p-6 md:p-10">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Use Compassly?
        </h2>

        <p className="text-slate-400 leading-7 md:leading-8 mb-6">
          Compassly is a modern navigation platform that
          combines powerful location-based tools into a
          single website.
        </p>

        <p className="text-slate-400 leading-7 md:leading-8">
          Whether you're traveling, hiking, surveying land,
          finding the Qibla, or working with GPS coordinates,
          Compassly gives you fast and accurate results
          directly in your browser.
        </p>

      </div>

    </section>

  </div>

</main>
);
}
