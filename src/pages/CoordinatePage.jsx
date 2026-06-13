import CoordinateConverter
from "../components/CoordinateConverter";

export default function CoordinatePage() {

  return (

    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl md:text-6xl font-bold">
        Coordinate Converter
      </h1>

      <CoordinateConverter />

    </div>

  );

}