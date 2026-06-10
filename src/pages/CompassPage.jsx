import CompassCard from "../components/CompassCard";

export default function CompassPage() {
return ( <main className="max-w-7xl mx-auto px-4 py-10">

  <div className="text-center mb-10">

    <h1 className="text-5xl md:text-6xl font-black">
      🧭 Online Compass
    </h1>

    <p className="text-slate-400 mt-4">
      Accurate digital compass for mobile devices.
    </p>

  </div>

  <CompassCard />

</main>


);
}
