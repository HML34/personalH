export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-neutral-900">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-wide">
          HML
        </a>

        <div className="flex gap-8 text-sm text-gray-400">
          <a href="/blog" className="hover:text-white">Blog</a>
          <a href="/sobre-mi" className="hover:text-white">Sobre mí</a>
          <a href="/contacto" className="hover:text-white">Contacto</a>
        </div>
      </nav>
    </header>
  );
}
