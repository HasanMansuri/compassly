import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <header
      className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      bg-slate-950/70
      border-b
      border-slate-800
      "
    >

      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
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
              shadow-lg
              "
            >

              🧭

            </div>

            <div>

              <h1 className="text-3xl font-black">

                Compassly

              </h1>

              <p className="text-xs text-slate-400">

                Compass • Qibla • GPS

              </p>

            </div>

          </Link>


          {/* Navigation */}

          <nav
            className="
            flex
            flex-wrap
            justify-center
            gap-3
            "
          >

            <Link

              to="/online-compass"

              className="
              px-4
              py-2
              rounded-xl
              bg-slate-900
              border
              border-slate-800
              hover:border-green-500
              hover:text-green-400
              transition
              "

            >

              🧭 Compass

            </Link>



            <Link

              to="/qibla-finder"

              className="
              px-4
              py-2
              rounded-xl
              bg-slate-900
              border
              border-slate-800
              hover:border-green-500
              hover:text-green-400
              transition
              "

            >

              🕋 Qibla

            </Link>



            <Link

              to="/distance-calculator"

              className="
              px-4
              py-2
              rounded-xl
              bg-slate-900
              border
              border-slate-800
              hover:border-green-500
              hover:text-green-400
              transition
              "

            >

              📏 Distance

            </Link>



            <Link

              to="/bearing-calculator"

              className="
              px-4
              py-2
              rounded-xl
              bg-slate-900
              border
              border-slate-800
              hover:border-green-500
              hover:text-green-400
              transition
              "

            >

              🎯 Bearing

            </Link>



            <Link

              to="/coordinate-converter"

              className="
              px-4
              py-2
              rounded-xl
              bg-slate-900
              border
              border-slate-800
              hover:border-green-500
              hover:text-green-400
              transition
              "

            >

              📍 Coordinates

            </Link>

          </nav>

        </div>

      </div>

    </header>

  );

}