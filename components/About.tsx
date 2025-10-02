export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">
          About the Artist
        </h2>

        <div className="space-y-8 text-lg text-gray-700">
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-4">Bio</h3>
            <p>
              Hillary Anne Lehmann is a contemporary artist whose work bridges the vibrant energy
              of acrylic painting with the delicate precision of ink illustration. Based in Palm Bay, Florida,
              her artistic journey reflects a deep passion for exploring color, form, and emotion.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-navy mb-4">Artist Statement</h3>
            <p>
              My work is a celebration of contrast—the boldness of acrylics against the subtlety
              of ink, the freedom of abstract expression alongside the discipline of detailed line work.
              Each piece is an exploration of the interplay between chaos and control, where vivid colors
              dance with intricate patterns to create moments of visual harmony.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-navy mb-4">Process & Style</h3>
            <p>
              Working primarily in two distinct mediums—acrylic on canvas and black ink on paper—I approach
              each piece as a unique conversation between material and message. My acrylic works embrace
              spontaneity and bold color palettes, while my ink pieces demand patience and precision,
              revealing intricate worlds within carefully rendered lines. Together, these bodies of work
              represent the full spectrum of my artistic voice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
