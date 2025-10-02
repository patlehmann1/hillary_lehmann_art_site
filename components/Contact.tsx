export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-peach-light to-peach">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">
          Get in Touch
        </h2>

        <p className="text-xl text-gray-800 mb-8">
          Interested in original artwork, prints, or commissions?
        </p>

        <a
          href="mailto:contact@hillaryanne.art"
          className="inline-block px-10 py-5 bg-navy text-white text-lg font-semibold rounded-lg hover:bg-orange transition-colors"
        >
          Contact Hillary
        </a>

        <p className="mt-8 text-gray-700">
          contact@hillaryanne.art
        </p>
      </div>
    </section>
  );
}
