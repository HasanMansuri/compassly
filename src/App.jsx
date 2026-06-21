import {

BrowserRouter,

Routes,

Route

} from "react-router-dom";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Home from "./pages/Home";

import CompassPage from "./pages/CompassPage";

import QiblaPage from "./pages/QiblaPage";

import DistancePage from "./pages/DistancePage";

import BearingPage from "./pages/BearingPage";

import CoordinatePage from "./pages/CoordinatePage";

import About from "./pages/About";

import PrivacyPolicy from "./pages/PrivacyPolicy";

import Contact from "./pages/Contact";

export default function App() {

return (

<BrowserRouter>

<div

className="

min-h-screen

text-white

overflow-x-hidden

"

style={{

background: `

radial-gradient(

circle at top,

rgba(0,255,120,.08),

transparent 25%

),

radial-gradient(

circle at bottom,

rgba(0,100,255,.08),

transparent 35%

),

radial-gradient(

circle at left,

rgba(0,255,180,.05),

transparent 30%

),

#020617

`

}}

>

<Navbar />

<main>

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

<Route

path="/about"

element={<About />}

/>

<Route

path="/privacy-policy"

element={<PrivacyPolicy />}

/>

<Route

path="/contact"

element={<Contact />}

/>

</Routes>

</main>

<Footer />

</div>

</BrowserRouter>

)

}
