import Link from 'next/link';
import ProtectedImage from '@/components/ProtectedImage';

const acrylicWorks = [
  { id: 1, src: '/gallery/acrylic-1.svg', alt: 'Acrylic painting 1' },
  { id: 2, src: '/gallery/acrylic-2.svg', alt: 'Acrylic painting 2' },
  { id: 3, src: '/gallery/acrylic-3.svg', alt: 'Acrylic painting 3' },
];

const inkWorks = [
  { id: 1, src: '/gallery/ink-1.svg', alt: 'Ink illustration 1' },
  { id: 2, src: '/gallery/ink-2.svg', alt: 'Ink illustration 2' },
  { id: 3, src: '/gallery/ink-3.svg', alt: 'Ink illustration 3' },
];

export const metadata = {
  title: 'Gallery - Hillary Anne Lehmann',
  description: 'Explore Hillary Anne Lehmann\'s artwork, including acrylic paintings and ink illustrations.',
};

export default function Gallery() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-navy to-peach py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-block mb-6 text-white hover:text-peach-light transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-white/90">
            A collection of acrylic paintings and ink illustrations
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            Acrylic on Canvas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acrylicWorks.map((work) => (
              <ProtectedImage
                key={work.id}
                src={work.src}
                alt={work.alt}
                category="acrylic"
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            Black Ink on Paper
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inkWorks.map((work) => (
              <ProtectedImage
                key={work.id}
                src={work.src}
                alt={work.alt}
                category="ink"
              />
            ))}
          </div>
        </section>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Interested in purchasing artwork or commissioning a piece?
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-orange transition-colors"
          >
            Contact Hillary
          </Link>
        </div>
      </div>
    </main>
  );
}
