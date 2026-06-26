import { teamMembers } from "@/data/content";

export default function EquipeSection() {
  return (
    <section id="equipe" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 reveal">
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
            Profissionais dedicados que unem experiência, técnica e acolhimento para cuidar da audição do seu filho.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="reveal relative flex flex-col items-center text-center bg-[#F8FBFF] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {member.badge && (
                <span className="absolute -top-3 -right-3 bg-[#F4C62F] text-[#2C3E50] font-nunito font-700 text-xs px-3 py-1 rounded-2xl shadow-md">
                  {member.badge}
                </span>
              )}

              {member.imgSrc ? (
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-4 object-cover"
                />
              ) : (
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#EEF4FB] mb-4 flex items-center justify-center text-4xl">
                  👩‍⚕️
                </div>
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
