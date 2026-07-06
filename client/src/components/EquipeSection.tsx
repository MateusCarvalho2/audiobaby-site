import { teamMembers } from "@/data/content";

const parseDetails = (details: string) => {
  const parts = details.split(" | ");
  const registrations = parts.filter(p => /CRM|CRFa|RQE/i.test(p));
  const descriptions = parts.filter(p => !/CRM|CRFa|RQE/i.test(p));
  
  let specialty = descriptions[0] || "";
  let extra = descriptions.slice(1).join(" • ");
  
  if (descriptions.length > 1) {
    const specialtyIndex = descriptions.findIndex(d => /audiologista|otorrino|otologista/i.test(d));
    if (specialtyIndex !== -1) {
      specialty = descriptions[specialtyIndex];
      extra = descriptions.filter((_, idx) => idx !== specialtyIndex).join(" • ");
    }
  }
  
  return {
    specialty,
    registration: registrations.join(" | "),
    extra
  };
};

export default function EquipeSection() {
  return (
    <section id="equipe" className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
            <span className="font-nunito font-700 text-sm text-[#6B90C4] uppercase tracking-widest">
              Nossa Equipe
            </span>
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
          </div>
          <h2 className="font-900 text-3xl md:text-4xl lg:text-5xl text-[#2C3E50] mb-4">
            Conheça nosso corpo clínico
          </h2>
          <p className="font-lato text-lg text-[#718096] max-w-2xl mx-auto">
            Profissionais altamente especializados que unem excelência acadêmica, dedicação clínica e profundo acolhimento humano.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, i) => {
            const { specialty, registration, extra } = parseDetails(member.details);
            return (
              <div
                key={member.name}
                className="team-card-flat reveal relative flex flex-col items-center bg-gradient-to-b from-[#F8FBFF] to-white border border-[#94B1DA]/16 rounded-3xl p-6 pt-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Yellow badge at the top-right of the card */}
                {member.badge && (
                  <span className="absolute -top-3 right-4 bg-[#F4C62F] text-[#2C3E50] font-nunito font-800 text-[11px] px-3 py-1.5 rounded-full shadow-md z-10">
                    {member.badge}
                  </span>
                )}

                {/* 3D Photo Container */}
                <div className="team-photo-container w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mb-6">
                  {member.imgSrc ? (
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="team-photo-3d w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                    />
                  ) : (
                    <div className="team-photo-3d w-full h-full rounded-full bg-[#EEF4FB] border-4 border-white shadow-md flex items-center justify-center text-4xl">
                      👩‍⚕️
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1 items-center mt-2 w-full">
                  {/* Specialty Badge */}
                  {specialty && (
                    <span className="inline-block bg-[#94B1DA]/12 text-[#6B90C4] font-nunito font-800 text-[11px] uppercase tracking-wider px-3 py-1 rounded-full mb-3 text-center max-w-full whitespace-normal break-words">
                      {specialty}
                    </span>
                  )}

                  {/* Name */}
                  <h3 className="font-nunito font-900 text-[#2C3E50] text-lg mb-2 leading-snug text-center">
                    {member.name}
                  </h3>

                  {/* Description / Extra info */}
                  {extra && (
                    <p className="font-lato text-sm text-[#4A5568] leading-relaxed mb-4 flex-1 text-center">
                      {extra}
                    </p>
                  )}

                  {/* Divider line before registration */}
                  <div className="w-12 h-px bg-[#94B1DA]/20 my-2" />

                  {/* Registrations (CRM/CRFa/RQE) */}
                  {registration && (
                    <span className="font-nunito font-600 text-[11px] text-[#94B1DA] tracking-wide mt-1 text-center">
                      {registration}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
