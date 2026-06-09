import { useState } from "react";

export default function CoordinateConverter() {

  const [decimal, setDecimal] = useState("");
  const [result, setResult] = useState("");

  function convertToDMS() {

    if (!decimal) {
      alert("Enter a coordinate");
      return;
    }

    const value = Math.abs(parseFloat(decimal));

    const degrees = Math.floor(value);

    const minutesFloat =
      (value - degrees) * 60;

    const minutes =
      Math.floor(minutesFloat);

    const seconds =
      ((minutesFloat - minutes) * 60)
      .toFixed(2);

    setResult(
      `${degrees}° ${minutes}' ${seconds}"`
    );

  }

  return (

    <div className="bg-slate-900 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-4">
        🌍 Coordinate Converter
      </h2>

      <input
        type="number"
        step="any"
        placeholder="Decimal Coordinate"
        value={decimal}
        onChange={(e) =>
          setDecimal(e.target.value)
        }
        className="
          w-full
          p-3
          rounded
          text-black
          mb-4
        "
      />

      <button
        onClick={convertToDMS}
        className="
          bg-blue-600
          px-4
          py-2
          rounded
        "
      >
        Convert
      </button>

      {result && (

        <div className="mt-6">

          <h3 className="font-bold">
            DMS Format
          </h3>

          <p className="text-2xl mt-2">
            {result}
          </p>

        </div>

      )}

    </div>

  );

}