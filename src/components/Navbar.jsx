import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Logo */}

          <Link
            to="/"
            className="text-2xl font-bold"
          >
            🧭 Compassly
          </Link>

          {/* Navigation */}

          <nav className="flex flex-wrap gap-6 text-slate-300">

            <Link
              to="/online-compass"
              className="hover:text-white transition"
            >
              Compass
            </Link>

            <Link
              to="/qibla-finder"
              className="hover:text-white transition"
            >
              Qibla
            </Link>

            <Link
              to="/distance-calculator"
              className="hover:text-white transition"
            >
              Distance
            </Link>

            <Link
              to="/bearing-calculator"
              className="hover:text-white transition"
            >
              Bearing
            </Link>

            <Link
              to="/coordinate-converter"
              className="hover:text-white transition"
            >
              Coordinates
            </Link>

          </nav>

        </div>

      </div>

    </header>
  );
}