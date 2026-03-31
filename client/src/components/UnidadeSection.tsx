/*
 * AudioBaby UnidadeSection
 * New section showcasing photos of the clinic (unidade) and key contact information.
 * This section displays a header, a grid of images representing the clinic space,
 * and a set of contact details similar to the contact section. To add your own photos,
 * place image files in the `public/imagens/unidade` directory and update the array below.
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
  // Define the contact items to display under the photos. Each item includes
  // an icon component, a title and a description. Adjust the text as needed.
  const contactItems = [
    {
      icon: Phone,
      title: "WhatsApp",
      description: "(71) 98158-1346",
    },
    {
      icon: Phone,
      title: "Ligar diretamente",
      description: "(71) 3037-8420",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      description: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
    },
    {
      icon: MapPin,
      title: "Endereço",
      description:
        "Av. Luis Viana Filho, 6462, Edf. Wall Street West, torre B, salas 305 e 306",
    },
  ];

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
          {/* Large heading uses Rheago via global h2 style */}
          <h2 className="font-900 text-3xl md:text-4xl lg:text-5xl text-[#2C3E50] mb-4">
            Conheça nossa estrutura
          </h2>
          <p className="font-lato text-lg text-[#718096] max-w-2xl mx-auto">
            Um espaço acolhedor preparado para atender seu bebê com carinho e
            segurança.
          </p>
        </div>

        {/* Photos grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
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

        {/* Contact details */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contactItems.map((item, idx) => (
            <div key={idx} className="reveal flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#94B1DA]/20 flex items-center justify-center">
                <item.icon size={18} className="text-[#94B1DA]" />
              </div>
              <div>
                <p className="font-nunito font-700 text-sm text-[#2C3E50]">
                  {item.title}
                </p>
                <p className="font-lato text-sm text-[#6B90C4] leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}