export default function ToolLayout({
  icon,
  title,
  description,
  children,
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <div className="text-center mb-8">

        <div className="text-5xl mb-4">
          {icon}
        </div>

        <h1 className="text-3xl md:text-5xl font-black">
          {title}
        </h1>

        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
          {description}
        </p>

      </div>

      {children}

    </div>
  );
}