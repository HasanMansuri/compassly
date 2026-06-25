
import { Link } from "react-router-dom";

export default function Footer() {

  return (

    <footer
      className="
      mt-24
      border-t
      border-slate-800
      bg-slate-950
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        md:px-6
        py-14
        "
      >

        <div
          className="
          grid
          md:grid-cols-3
          gap-10
          "
        >

          {/* Brand */}

          <div>

            <div
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
                "
              >
                🧭
              </div>

              <div>

                <h3
                  className="
                  text-3xl
                  font-black
                  hero-gradient
                  "
                >
                  Compassly
                </h3>

                <p className="text-slate-400">
                  Compass • Qibla • GPS
                </p>

              </div>

            </div>

            <p
              className="
              text-slate-400
              mt-6
              leading-8
              "
            >
              Compassly offers free navigation and GPS tools
              including Online Compass, Qibla Finder,
              Distance Calculator, Bearing Calculator and
              Coordinate Converter.
              Fast, accurate and optimized for desktop and
              mobile users worldwide.
            </p>

            <div
              className="
              flex
              gap-4
              mt-6
              "
            >

              <span className="text-green-400 text-xl">
                🛡️
              </span>

              <span className="text-green-400 text-xl">
                🌐
              </span>

              <span className="text-green-400 text-xl">
                ✉️
              </span>

            </div>

          </div>

          {/* Tools */}

          <div>

            <h4
              className="
              text-xl
              font-bold
              mb-5
              "
            >
              Tools
            </h4>

            <div
              className="
              flex
              flex-col
              gap-3
              "
            >

              <Link
                to="/online-compass"
                className="text-slate-400 hover:text-green-400"
              >
                🧭 Online Compass
              </Link>

              <Link
                to="/qibla-finder"
                className="text-slate-400 hover:text-green-400"
              >
                🕋 Qibla Finder
              </Link>

              <Link
                to="/distance-calculator"
                className="text-slate-400 hover:text-green-400"
              >
                📏 Distance Calculator
              </Link>

              <Link
                to="/bearing-calculator"
                className="text-slate-400 hover:text-green-400"
              >
                🎯 Bearing Calculator
              </Link>

              <Link
                to="/coordinate-converter"
                className="text-slate-400 hover:text-green-400"
              >
                📍 Coordinate Converter
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h4
              className="
              text-xl
              font-bold
              mb-5
              "
            >
              Company
            </h4>

            <div
              className="
              flex
              flex-col
              gap-3
              "
            >

              <Link
                to="/about"
                className="text-slate-400 hover:text-green-400"
              >
                About
              </Link>

              <Link
                to="/privacy-policy"
                className="text-slate-400 hover:text-green-400"
              >
                Privacy Policy
              </Link>

              <Link
                to="/contact"
                className="text-slate-400 hover:text-green-400"
              >
                Contact
              </Link>

              <span className="text-slate-400">
                contact@getcompassly.com
              </span>

            </div>

            <div
              className="
              mt-6
              p-4
              rounded-2xl
              bg-slate-900
              border
              border-slate-800
              "
            >

              <div className="text-green-400 font-bold">
                🌍 Worldwide Access
              </div>

              <p
                className="
                text-sm
                text-slate-400
                mt-2
                "
              >
                Available 24/7 for users in USA, UK,
                Europe, Middle East and worldwide.
              </p>

            </div>

          </div>

        </div>

        <div
          className="
          border-t
          border-slate-800
          mt-12
          pt-6
          text-center
          text-slate-500
          "
        >

          © 2026 Compassly. All Rights Reserved.
          Built for users worldwide.

          <div className="mt-2 text-sm">
            Privacy Friendly • Mobile Optimized • Always Free
          </div>

        </div>

      </div>

    </footer>

  );
}

