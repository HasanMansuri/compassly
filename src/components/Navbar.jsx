import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <nav className="border-b border-slate-800 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="font-bold text-xl"
        >
          🧭 Compass Hub Pro
        </Link>

        <div className="flex gap-6">

          <Link to="/online-compass">
            Compass
          </Link>

          <Link to="/qibla-finder">
            Qibla
          </Link>

          <Link to="/distance-calculator">
            Distance
          </Link>

          <Link to="/bearing-calculator">
            Bearing
          </Link>
          <Link to="/coordinate-converter">
            Coordinates
          </Link>

        </div>

      </div>

    </nav>
  );
}