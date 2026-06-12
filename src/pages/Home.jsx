import { Link } from "react-router-dom";
import HomeCompass from "../components/HomeCompass";

export default function Home() {

const tools = [
{
icon: "🧭",
title: "Online Compass",
description: "Live compass powered by your device sensors.",
path: "/online-compass",
},
{
icon: "🕋",
title: "Qibla Finder",
description: "Instant Qibla direction from your current location.",
path: "/qibla-finder",
},
{
icon: "📏",
title: "Distance Calculator",
description: "Measure distance between locations accurately.",
path: "/distance-calculator",
},
{
icon: "🎯",
title: "Bearing Calculator",
description: "Find precise direction and heading.",
path: "/bearing-calculator",
},
{
icon: "📍",
title: "Coordinates",
description: "View live GPS coordinates and DMS format.",
path: "/coordinate-converter",
},
];

return ( <main className="relative overflow-hidden">


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

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
        Compassly
      </h1>

      <h2
        className="
          text-2xl
          md:text-5xl
          font-bold
          mt-6
          bg-gradient-to-r
          from-blue-400
          to-cyan-300
          bg-clip-text
          text-transparent
        "
      >
        Your Complete Navigation Toolkit
      </h2>

      <p
        className="
          max-w-3xl
          mx-auto
          mt-6
          text-base
          md:text-xl
          text-slate-400
          leading-8
        "
      >
        Compassly combines Compass, Qibla Finder,
        GPS Coordinates, Distance Calculator,
        and Bearing Tools into one powerful platform.
      </p>

      <div
        className="
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          mt-10
        "
      >
        <Link
          to="/online-compass"
          className="
            bg-blue-600
            px-6
            py-4
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
            py-4
            rounded-2xl
            hover:bg-slate-900
          "
        >
          Open Qibla Finder
        </Link>
      </div>

    </section>

    {/* STATS */}

    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">

      <div className="bg-slate-900 rounded-3xl p-6 text-center">
        <h3 className="text-4xl font-bold">5+</h3>
        <p className="text-slate-400 mt-2">
          Navigation Tools
        </p>
      </div>

      <div className="bg-slate-900 rounded-3xl p-6 text-center">
        <h3 className="text-4xl font-bold">GPS</h3>
        <p className="text-slate-400 mt-2">
          Live Location
        </p>
      </div>

      <div className="bg-slate-900 rounded-3xl p-6 text-center">
        <h3 className="text-4xl font-bold">24/7</h3>
        <p className="text-slate-400 mt-2">
          Always Available
        </p>
      </div>

      <div className="bg-slate-900 rounded-3xl p-6 text-center">
        <h3 className="text-4xl font-bold">100%</h3>
        <p className="text-slate-400 mt-2">
          Free Forever
        </p>
      </div>

    </section>

    {/* TOOLS */}

    <section className="mb-24">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
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
              hover:border-blue-500
              hover:-translate-y-2
              transition
            "
          >
            <div className="text-5xl mb-4">
              {tool.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {tool.title}
            </h3>

            <p className="text-slate-400">
              {tool.description}
            </p>

          </Link>
        ))}

      </div>

    </section>

    {/* WHY PEOPLE USE */}

    <section className="mb-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Why People Use Compassly
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-3">
            🥾 Travelers & Hikers
          </h3>

          <p className="text-slate-400">
            Navigate confidently using compass,
            coordinates and distance tools.
          </p>
        </div>

        <div className="bg-slate-900 rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-3">
            🕌 Muslims Worldwide
          </h3>

          <p className="text-slate-400">
            Quickly find accurate Qibla direction
            from anywhere in the world.
          </p>
        </div>

        <div className="bg-slate-900 rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-3">
            🌍 GPS Enthusiasts
          </h3>

          <p className="text-slate-400">
            View live coordinates, bearings,
            and distances instantly.
          </p>
        </div>

      </div>

    </section>

    {/* COMING SOON */}

    <section className="mb-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Coming Soon
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 rounded-3xl p-6">
          🌤 Weather
        </div>

        <div className="bg-slate-900 rounded-3xl p-6">
          🌅 Sunrise & Sunset
        </div>

        <div className="bg-slate-900 rounded-3xl p-6">
          ⛰ Altitude Finder
        </div>

      </div>

    </section>

    {/* ABOUT */}

    <section className="mb-24">

      <div className="bg-slate-900 rounded-3xl p-8">

        <h2 className="text-4xl font-bold mb-6">
          Why Use Compassly?
        </h2>

        <p className="text-slate-400 leading-8 mb-6">
          Compassly is a free online navigation
          platform offering a compass, Qibla finder,
          distance calculator, bearing calculator,
          and coordinate converter.
        </p>

        <p className="text-slate-400 leading-8">
          Whether you're traveling, hiking,
          surveying land, studying geography,
          or finding the Qibla direction,
          Compassly provides accurate tools
          directly in your browser.
        </p>

      </div>

    </section>

  </div>

</main>

);
}
