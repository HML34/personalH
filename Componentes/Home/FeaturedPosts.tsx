export default function FeaturedPosts() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">
          Artículos destacados
        </h2>

        <div className="space-y-10">
          <article>
            <h3 className="text-xl">
              Al volante de mi destino
            </h3>
            <p className="text-gray-400 mt-2">
              Reflexión sobre control, cansancio y claridad.
            </p>
          </article>

          <article>
            <h3 className="text-xl">
              Decidir también es renunciar
            </h3>
            <p className="text-gray-400 mt-2">
              El costo invisible de avanzar.
            </p>
          </article>
        </div>

        <a
          href="/blog"
          className="inline-block mt-12 text-blue-400 hover:text-blue-300"
        >
          Ver todos los artículos →
        </a>
      </div>
    </section>
  );
}
