export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          H MANUEL LOMELÍN
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Pensamiento estratégico, tecnología y evolución personal.
        </p>

        <p className="mt-4 text-lg text-gray-500 max-w-2xl">
          No escribo para informar.  
          Escribo para provocar claridad.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="/blog"
            className="border border-blue-500 text-blue-400 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-black transition"
          >
            Leer el blog
          </a>

          <a
            href="/sobre-mi"
            className="text-gray-400 hover:text-white transition"
          >
            Sobre mí →
          </a>
        </div>
      </div>
    </section>
  );
}
