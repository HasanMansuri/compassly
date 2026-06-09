import { Link } from "react-router-dom";

export default function Home() {
  const tools = [
    {
      title: "Online Compass",
      icon: "🧭",
      path: "/online-compass",
      description: "Real-time compass for navigation."
    },
    {
      title: "Qibla Finder",
      icon: "🕋",
      path: "/qibla-finder",
      description: "Find Qibla direction from anywhere."
    },
    {
      title: "Distance Calculator",
      icon: "🌍",
      path: "/distance-calculator",
      description: "Calculate distance between coordinates."
    },
    {
      title: "Bearing Calculator",
      icon: "📍",
      path: "/bearing-calculator",
      description: "Calculate direction between locations."
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <section className="text-center">
        <h1 className="text-6xl font-bold">
          Compass Hub Pro
        </h1>

        <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto">
          Professional navigation toolkit with compass,
          Qibla finder, bearing calculator and GPS tools.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

        {tools.map((tool) => (
          <Link
            key={tool.title}
            to={tool.path}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:scale-105 transition"
          >
            <div className="text-4xl mb-4">
              {tool.icon}
            </div>

            <h3 className="font-bold text-xl">
              {tool.title}
            </h3>

            <p className="text-slate-400 mt-3">
              {tool.description}
            </p>
          </Link>
        ))}

      </section>

    </main>
  );
}