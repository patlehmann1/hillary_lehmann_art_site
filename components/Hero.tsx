import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="max-w-4xl text-center relative z-10 px-4 py-12 rounded-3xl bg-black/30 backdrop-blur-sm">
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          style={{
            textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Hillary Anne Lehmann
        </h1>
        <p
          className="text-2xl md:text-3xl text-white mb-8"
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)',
          }}
        >
          Where bold colors meet intricate detail
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/gallery"
            className="px-8 py-4 bg-white text-navy font-semibold rounded-lg hover:bg-peach-light transition-colors shadow-lg"
          >
            View Gallery
          </Link>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-colors shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-arrow cursor-pointer hover:opacity-70 transition-opacity"
        aria-label="Scroll to about section"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </section>
  );
}
