
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const links = [
    {
      name: "Compass",
      icon: "🧭",
      path: "/online-compass"
    },
    {
      name: "Qibla",
      icon: "🕋",
      path: "/qibla-finder"
    },
    {
      name: "Distance",
      icon: "📏",
      path: "/distance-calculator"
    },
    {
      name: "Bearing",
      icon: "🎯",
      path: "/bearing-calculator"
    },
    {
      name: "GPS",
      icon: "📍",
      path: "/coordinate-converter"
    }
  ];

  return (
    <header className="sticky top-0 z-50">

      <div
        className="
        backdrop-blur-xl
        bg-slate-950/70
        border-b
        border-slate-800
        "
      >

        <div
          className="
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          py-4
          "
        >

          <div
            className="
            flex
            items-center
            justify-between
            "
          >

            <Link
              to="/"
              className="
              flex
              items-center
              gap-3
              "
            >

              <div
                className="
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-br
                from-green-400
                to-green-600
                flex
                items-center
                justify-center
                text-2xl
                shadow-lg
                "
              >
                🧭
              </div>

              <div>

                <h1
                  className="
                  text-2xl
                  font-black
                  hero-gradient
                  "
                >
                  Compassly
                </h1>

                <p
                  className="
                  text-xs
                  text-slate-400
                  "
                >
                  Compass • Qibla • GPS
                </p>

              </div>

            </Link>

          </div>

          <div
            className="
            flex
            justify-center
            gap-2
            md:gap-4
            mt-5
            flex-wrap
            "
          >

            {links.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`
                px-4
                py-3
                rounded-2xl
                transition
                text-center
                min-w-[85px]

                ${
                  location.pathname === item.path
                  ?
                  "bg-green-500 text-white shadow-lg"
                  :
                  "bg-slate-900 hover:bg-slate-800 border border-slate-800"
                }
                `}
              >

                <div className="text-xl">
                  {item.icon}
                </div>

                <div
                  className="
                  text-xs
                  font-semibold
                  mt-1
                  "
                >
                  {item.name}
                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>

    </header>
  );
  
}
