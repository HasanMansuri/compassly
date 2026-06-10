export default function TestLocation() {
  const testLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        alert(
          `Lat: ${pos.coords.latitude}
Lng: ${pos.coords.longitude}`
        );
      },
      (err) => {
        alert(
          `Code: ${err.code}
Message: ${err.message}`
        );
      }
    );
  };

  return (
    <div className="p-10">
      <button
        onClick={testLocation}
        className="bg-blue-600 px-6 py-3 rounded-xl"
      >
        Test Location
      </button>
    </div>
  );
}