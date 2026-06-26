import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const tools = [
    {
      title: "Online Compass",
      icon: "🧭",
      desc: "Real-time digital compass with accurate heading.",
      link: "/online-compass",
    },
    {
      title: "Qibla Finder",
      icon: "🕋",
      desc: "Find the direction of Makkah instantly.",
      link: "/qibla-finder",
    },
    {
      title: "Distance Calculator",
      icon: "📏",
      desc: "Calculate distance between two locations.",
      link: "/distance-calculator",
    },
    {
      title: "Bearing Calculator",
      icon: "🎯",
      desc: "Get accurate bearings between coordinates.",
      link: "/bearing-calculator",
    },
    {
      title: "Coordinate Converter",
      icon: "📍",
      desc: "Convert GPS coordinates into multiple formats.",
      link: "/coordinate-converter",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Compassly - Compass, Qibla, GPS & Navigation Tools
        </title>

        <meta
          name="description"
          content="Free Online Compass, Qibla Finder, Distance Calculator, Bearing Calculator and Coordinate Converter."
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="py-16 md:py-24">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
              🌍 Trusted Worldwide
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-black hero-gradient">
              Compassly
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-2xl text-slate-300 leading-relaxed">
              Free Navigation Tools For Compass,
              Qibla Direction,
              GPS Coordinates,
              Bearings
              and Distance Calculations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

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

          </div>

        </section>

        {/* TOOLS */}

        <section className="py-12">

          <h2 className="section-title text-center">
            Navigation Tools
          </h2>

          <p className="section-subtitle text-center max-w-2xl mx-auto mt-4">
            Fast, accurate and mobile friendly tools built for users worldwide.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">

            {tools.map((tool) => (
              <Link
                key={tool.title}
                to={tool.link}
                className="card p-6"
              >
               <div
  className="
  w-20
  h-20
  mx-auto
  rounded-3xl
  bg-slate-800
  flex
  items-center
  justify-center
  text-5xl
  "
>
  {tool.icon}
</div>

                <h3 className="mt-4 text-2xl font-bold">
                  {tool.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-7">
                  {tool.desc}
                </p>

                <div className="mt-5 text-green-400 font-semibold">
                  Open Tool →
                </div>
              </Link>
            ))}

          </div>

        </section>

        {/* STATS */}

        <section className="py-16">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="card p-8 text-center">
              <h3 className="text-3xl font-black text-green-200">
                100%
              </h3>
              <p className="mt-3 text-slate-200">
                Free Forever
              </p>
            </div>

            <div className="card p-4 text-center">
              <h3 className="text-3xl font-black text-green-200">
                5+
              </h3>
              <p className="mt-3 text-slate-200">
                Powerful Tools
              </p>
            </div>

            <div className="card p-4 text-center">
              <h3 className="text-3xl font-black text-green-200">
                24/7
              </h3>
              <p className="mt-3 text-slate-200">
                Available Worldwide
              </p>
            </div>

          </div>

        </section>

        {/* ABOUT */}

        <section className="py-16">

          <div className="card p-4 md:p-8">

            <h2 className="section-title">
                  Why Compassly?
            </h2>

            <p className="section-subtitle mt-6">
              Compassly provides professional navigation tools that work on
              mobile phones, tablets and desktops. We focus on speed,
              accuracy and simplicity without unnecessary clutter.
            </p>

          </div>

        </section>

      </main>
    </>
  );
}