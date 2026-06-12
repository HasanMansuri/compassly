import { Link } from "react-router-dom";

export default function Navbar() {
return ( <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">

  <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">

    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

      <Link
        to="/"
        className="text-2xl font-black flex items-center gap-2"
      >
        🧭 Compassly

        <span className="bg-blue-600 text-xs px-2 py-1 rounded-full">
          FREE
        </span>
      </Link>

      <nav className="flex flex-wrap justify-center gap-5 text-sm md:text-base text-slate-300">

        <Link to="/online-compass" className="hover:text-white">
          🧭 Compass
        </Link>

        <Link to="/qibla-finder" className="hover:text-white">
          🕋 Qibla
        </Link>

        <Link to="/distance-calculator" className="hover:text-white">
          📏 Distance
        </Link>

        <Link to="/bearing-calculator" className="hover:text-white">
          🎯 Bearing
        </Link>

        <Link to="/coordinate-converter" className="hover:text-white">
          📍 Coordinates
        </Link>

      </nav>

    </div>

  </div>

</header>

);
}
