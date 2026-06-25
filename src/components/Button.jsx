export default function Button({
  children,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
      w-full
      h-14
      rounded-2xl
      bg-green-600
      hover:bg-green-700
      font-bold
      transition
      "
    >
      {children}
    </button>
  );
}