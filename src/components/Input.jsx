export default function Input(props) {
  return (
    <input
      {...props}
      className="
      w-full
      h-14
      px-4
      rounded-2xl
      bg-slate-800
      border
      border-slate-700
      text-white
      placeholder:text-slate-500
      focus:outline-none
      focus:border-green-500
      "
    />
  );
}