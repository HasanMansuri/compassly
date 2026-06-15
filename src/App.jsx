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

     <div
className="
min-h-screen
text-white
bg-slate-950
"
style={{

background:

`
radial-gradient(
circle at top,
rgba(0,255,120,.08),
transparent 30%
),

radial-gradient(
circle at bottom,
rgba(0,100,255,.08),
transparent 40%
),

#020617

`

}}

>

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