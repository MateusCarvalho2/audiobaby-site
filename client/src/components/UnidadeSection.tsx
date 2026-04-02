/*
 * AudioBaby UnidadeSection
 * This section showcases photos of the clinic (unidade) and a header.  The
 * original component included a grid of contact details (WhatsApp, phone,
 * address and hours), but those details are already present in the
 * "Agende sua consulta" section.  At the client's request we removed the
 * contact information here, leaving only the heading and image grid.
 */

import { Phone, MapPin, Clock } from "lucide-react";

// Array of image paths for the unidade. Replace the file names with your own
// photos saved under `public/imagens/unidade`. The images will display in order.
const unidadeImages = [
  "/imagens/unidade/unidade1.jpg",
  "/imagens/unidade/unidade2.jpg",
  "/imagens/unidade/unidade3.jpg",
];

export default function UnidadeSection() {
  return (
    <section id="unidade" className="py-20 md:py-28 bg-[#F8FBFF] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
            <span className="font-nunito font-700 text-sm text-[#6B90C4] uppercase tracking-widest">
              Nossa Unidade
            </span>
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
          </div>
          {/* Large heading uses the global h2 style (MontserratAlternates) */}
          <h2 className="font-900 text-3xl md:text-4xl lg:text-5xl text-[#2C3E50] mb-4">
            Conheça nossa estrutura
          </h2>
          <p className="font-lato text-lg text-[#718096] max-w-2xl mx-auto">
            Um espaço acolhedor preparado para atender seu bebê com carinho e
            segurança.
          </p>
        </div>

        {/* Photos grid
           Use a single column on very small screens, then two columns on small
           devices, and three columns on medium and up. This improves the
           presentation on narrow viewports. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {unidadeImages.map((src, idx) => (
            <div
              key={idx}
              className="reveal overflow-hidden rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={src}
                alt={`Foto da unidade ${idx + 1}`}
                className="w-full h-56 md:h-64 object-cover"
              />
            </div>
          ))}
        </div>
        {/* Contact details removed intentionally */}
      </div>
    </section>
  );
}