/*
 * AudioBaby DiferenciaisSection
 * Design: Cards com ícones dos grafismos, fundo branco, destaque amarelo
 * Layout: Grid assimétrico com imagem central
 */

const CLINICA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/clinica_ambiente_dfb06cf9.jpg";
const CONSULTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/mae_consulta_devolutiva_c2ca083e.jpg";
const HEADPHONE_ICON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/4_ac7150bc.png";
const WHISTLE_ICON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/5_05c11fe1.png";

const diferenciais = [
  {
    icon: "🏥",
    title: "Ambiente 100% pediátrico",
    desc: "Espaço projetado para o conforto de bebês e crianças, com temperatura controlada, iluminação suave e silêncio absoluto.",
  },
  {
    icon: "👩‍⚕️",
    title: "Equipe especializada",
    desc: "Fonoaudiólogos e otorrinolaringologistas com formação específica em audiologia infantil e neonatal.",
  },
  {
    icon: "🔬",
    title: "Tecnologia de ponta",
    desc: "Equipamentos de última geração calibrados e certificados, garantindo precisão diagnóstica máxima.",
  },
  {
    icon: "💛",
    title: "Acolhimento emocional",
    desc: "Sabemos que um diagnóstico auditivo pode ser assustador. Oferecemos suporte humano e orientação clara em cada etapa.",
  },
  {
    icon: "📝",
    title: "Laudos integrados",
    desc: "Relatórios técnicos completos com linguagem acessível, integrando achados médicos e fonoaudiológicos.",
  },
  {
    icon: "🔄",
    title: "Seguimento longitudinal",
    desc: "Acompanhamento contínuo desde o nascimento, com protocolos de follow-up personalizados para cada criança.",
  },
];

export default function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
            <span className="font-nunito font-700 text-sm text-[#6B90C4] uppercase tracking-widest">
              Por que a AudioBaby?
            </span>
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
          </div>
          <h2 className="font-rheago text-3xl md:text-4xl lg:text-5xl text-[#2C3E50] mb-4">
            Ciência e cuidado
            <br />
            <span className="text-[#94B1DA]">caminham juntos aqui</span>
          </h2>
          <p className="font-lato text-lg text-[#718096] max-w-2xl mx-auto">
            Cada detalhe do nosso espaço e da nossa equipe foi pensado para que você e seu filho se sintam seguros, acolhidos e bem cuidados.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left column - 3 diferenciais */}
          <div className="space-y-5">
            {diferenciais.slice(0, 3).map((d, i) => (
              <div
                key={d.title}
                className="reveal card-hover bg-[#F8FBFF] rounded-3xl p-6 shadow-sm border border-[#94B1DA]/15"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF4FB] flex items-center justify-center text-2xl flex-shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="font-nunito font-800 text-[#2C3E50] text-base mb-1">{d.title}</h3>
                    <p className="font-lato text-sm text-[#718096] leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center - Images */}
          <div className="reveal flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-56">
              <img
                src={CLINICA_IMG}
                alt="Ambiente da clínica AudioBaby"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-nunito font-800 text-white text-sm">Ambiente acolhedor</p>
                <p className="font-lato text-xs text-white/80">Projetado para bebês e famílias</p>
              </div>
            </div>

            {/* Central highlight */}
            <div className="bg-[#94B1DA] rounded-3xl p-6 text-center">
              <img src={HEADPHONE_ICON} alt="" className="w-16 h-16 object-contain mx-auto mb-3 opacity-90" />
              <p className="font-nunito font-900 text-white text-2xl mb-1">Especialistas</p>
              <p className="font-nunito font-700 text-white/80 text-sm">em audição infantil</p>
              <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-3">
                <div>
                  <p className="font-nunito font-900 text-[#F4C62F] text-xl">100%</p>
                  <p className="font-lato text-xs text-white/80">Foco em crianças</p>
                </div>
                <div>
                  <p className="font-nunito font-900 text-[#F4C62F] text-xl">Sem</p>
                  <p className="font-lato text-xs text-white/80">Sedação desnecessária</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-48">
              <img
                src={CONSULTA_IMG}
                alt="Devolutiva diagnóstica integrada na AudioBaby"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-nunito font-800 text-white text-sm">Devolutiva integrada</p>
                <p className="font-lato text-xs text-white/80">Médico + Fonoaudiólogo</p>
              </div>
            </div>
          </div>

          {/* Right column - 3 diferenciais */}
          <div className="space-y-5">
            {diferenciais.slice(3, 6).map((d, i) => (
              <div
                key={d.title}
                className="reveal card-hover bg-[#F8FBFF] rounded-3xl p-6 shadow-sm border border-[#94B1DA]/15"
                style={{ animationDelay: `${(i + 3) * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF4FB] flex items-center justify-center text-2xl flex-shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="font-nunito font-800 text-[#2C3E50] text-base mb-1">{d.title}</h3>
                    <p className="font-lato text-sm text-[#718096] leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
