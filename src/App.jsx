import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CompassPage from "./pages/CompassPage";
import QiblaPage from "./pages/QiblaPage";
import DistancePage from "./pages/DistancePage";
import BearingPage from "./pages/BearingPage";
import Footer from "./components/Footer";
import CoordinatePage from "./pages/CoordinatePage";

export default function App() {
  return (
    <BrowserRouter>

     <div className="
min-h-screen
bg-gradient-to-b
from-slate-950
via-slate-900
to-black
text-white
">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/online-compass"
            element={<CompassPage />}
          />

          <Route
            path="/qibla-finder"
            element={<QiblaPage />}
          />

          <Route
            path="/distance-calculator"
            element={<DistancePage />}
          />

          <Route
            path="/bearing-calculator"
            element={<BearingPage />}
          />
          <Route
            path="/coordinate-converter"
            element={<CoordinatePage />}
          />

        </Routes>

        <Footer />


      </div>


    </BrowserRouter>
  );
}