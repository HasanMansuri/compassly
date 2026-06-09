export default function QiblaCompass({ qiblaAngle = 0 }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-center mb-6">
        🕋 Qibla Compass
      </h2>

      <div className="flex justify-center">

        <div
          className="relative rounded-full border-4 border-white"
          style={{
            width: "320px",
            height: "320px"
          }}
        >

          {/* N */}
          <div
            className="absolute text-red-500 font-bold text-2xl"
            style={{
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            N
          </div>

          {/* S */}
          <div
            className="absolute font-bold text-2xl"
            style={{
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            S
          </div>

          {/* W */}
          <div
            className="absolute font-bold text-2xl"
            style={{
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          >
            W
          </div>

          {/* E */}
          <div
            className="absolute font-bold text-2xl"
            style={{
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          >
            E
          </div>

          {/* Qibla Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "4px",
              height: "130px",
              background: "#22c55e",
              transformOrigin: "bottom center",
              transform:
                `translate(-50%, -100%) rotate(${qiblaAngle}deg)`
            }}
          />

          {/* Kaaba */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              fontSize: "40px",
              transform:
                `translate(-50%, -160px) rotate(${qiblaAngle}deg)`
            }}
          >
            🕋
          </div>

          {/* Center */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "white",
              transform:
                "translate(-50%, -50%)"
            }}
          />

        </div>

      </div>

      <p className="text-center mt-6 text-xl">
        Qibla Direction: {qiblaAngle.toFixed(1)}°
      </p>

    </div>
  );
}