const areas = [
  {
    title: "Tecnología & Transformación",
    description: "Decisiones digitales con impacto real.",
    slug: "/areas/tecnologia",
  },
  {
    title: "Liderazgo & Dirección",
    description: "Pensar antes de avanzar.",
    slug: "/areas/liderazgo",
  },
  {
    title: "Experiencia Profesional",
    description: "Lo aprendido ejecutando, no suponiendo.",
    slug: "/areas/experiencia",
  },
];

export default function Areas() {
  return (
    <section className="py-24 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {areas.map((area) => (
          <a
            key={area.title}
            href={area.slug}
            className="border border-neutral-800 p-8 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-medium">{area.title}</h3>
            <p className="mt-4 text-gray-400">{area.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
