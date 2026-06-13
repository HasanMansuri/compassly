import DistanceCalculator from "../components/DistanceCalculator";

export default function DistancePage() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl md:text-6xl font-bold">
        Distance Calculator
      </h1>

      <DistanceCalculator />

    </div>
  );
}