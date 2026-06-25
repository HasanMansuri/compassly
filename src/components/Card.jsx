export default function Card({ children }) {
  return (
    <div
      className="
      bg-slate-900/90
      border
      border-slate-800
      rounded-3xl
      p-6
      shadow-xl
      "
    >
      {children}
    </div>
  );
}