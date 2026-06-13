import QiblaFinder from "../components/QiblaFinder";

export default function QiblaPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl md:text-6xl font-bold">
        Qibla Finder
      </h1>

      <QiblaFinder />

    </div>
  );
}