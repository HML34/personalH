export default function Author() {
  return (
    <section className="py-32 px-6 bg-neutral-950">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold">Soy Manuel</h2>
          <p className="mt-6 text-gray-400">
            Analizo, cuestiono y escribo sobre lo que vivo y decido.
            Este espacio es un registro de evolución, no una vitrina.
          </p>
        </div>

        <div className="h-80 bg-neutral-800 rounded-lg">
          {/* Aquí va tu foto */}
        </div>
      </div>
    </section>
  );
}
