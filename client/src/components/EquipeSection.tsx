/*
 * AudioBaby EquipeSection
 * This component displays the clinic's team.  We added a subtle yellow badge
 * reading "+20 anos de experiência" for the professionals Aêdo Santos Cidreira
 * and Lucienne Rezende Montalverne.  The badge matches the styling used
 * elsewhere on the site (rounded yellow box) and is positioned in the top‑right
 * corner of those cards.  The card container was made relative to allow
 * absolute positioning.
 */

// Array of team members with names, credentials and an optional photo path.
// If you add new professionals, provide their `imgSrc` matching the filename
// you placed under `public/imagens/corpoclinico` so the image loads correctly.
const team = [
  {
    name: "Dra. Adriana Silveira Santos",
    details:
      "CRM-BA 13.600 | RQE 4.886 – 14.329 | Médica Otorrinolaringologista | Responsável Técnico | Homeopatia",
    imgSrc: "/imagens/corpoclinico/Adriana.png",
  },
  {
    name: "Dra. Rosa Lima Beltrão Bacellar",
    details: "CRM 17.014 - BA | RQE 7.667 – Foniatria | distúrbios de linguagem",
    imgSrc: "/imagens/corpoclinico/Rosa.png",
  },
  {
    name: "Dr. Fabio de Alencar Rodrigues Junior",
    details:
      "CRM 39.762 - BA | RQE 2.955 – Otologista | diagnóstico avançado e intervenção terapêutica das perdas auditivas",
    imgSrc: "/imagens/corpoclinico/Fabio.png",
  },
  {
    name: "Dr. Helissandro Andrade Coelho",
    details:
      "CRM 15.264 | RQE 6.277 – Otologista | diagnóstico avançado e intervenção terapêutica das perdas auditivas",
    imgSrc: "/imagens/corpoclinico/Helissandro.jpg",
  },
  {
    name: "Aêdo Santos Cidreira",
    details: "CRFa 7.915 | Processamento Auditivo | Audiologia Infantil",
    imgSrc: "/imagens/corpoclinico/Aedo.png",
  },
  {
    name: "Lucienne Rezende Montalverne",
    details: "CRFa 6.609 | Audiologia Infantil",
    imgSrc: "/imagens/corpoclinico/Luciene.png",
  },
  {
    name: "Pedro Henrique de Macedo",
    details: "CRFa 21.729 | Audiologia Infantil",
    imgSrc: "/imagens/corpoclinico/Pedro.png",
  },
];

export default function EquipeSection() {
  return (
    <section id="equipe" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
            <span className="font-nunito font-700 text-sm text-[#6B90C4] uppercase tracking-widest">
              Nossa Equipe
            </span>
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
          </div>
          {/* Large section heading uses global h2 style */}
          <h2 className="font-900 text-3xl md:text-4xl lg:text-5xl text-[#2C3E50] mb-4">
            Conheça nosso corpo clínico
          </h2>
          <p className="font-lato text-lg text-[#718096] max-w-2xl mx-auto">
            Profissionais dedicados que unem experiência, técnica e acolhimento para cuidar da audição do seu filho.
          </p>
        </div>
        {/* Team Grid
           Start with a single column layout on extra‑small devices, two
           columns on small screens, and three columns on large screens. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="reveal relative flex flex-col items-center text-center bg-[#F8FBFF] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Experience badge for selected professionals */}
              {(member.name === "Aêdo Santos Cidreira" ||
                member.name === "Lucienne Rezende Montalverne") && (
                /* Move the badge slightly outside the card so it doesn't overlap the profile photo.
                   Negative top/right offsets push it toward the corner without touching the image. */
                <span className="absolute -top-3 -right-3 bg-[#F4C62F] text-[#2C3E50] font-nunito font-700 text-xs px-3 py-1 rounded-2xl shadow-md">
                  +20 anos de experiência
                </span>
              )}
              {/* Profile photo or fallback placeholder */}
              {member.imgSrc ? (
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-4 object-cover"
                />
              ) : (
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#EEF4FB] mb-4 overflow-hidden" />
              )}
              <h3 className="font-nunito font-800 text-[#2C3E50] text-base mb-1">
                {member.name}
              </h3>
              <p className="font-lato text-sm text-[#718096] leading-relaxed">
                {member.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}