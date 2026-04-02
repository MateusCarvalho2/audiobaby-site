/*
 * AudioBaby FluxogramaSection — Updated Responsive Timeline
 *
 * This version preserves the original flow of care timeline while
 * improving mobile responsiveness.  The timeline now uses a single
 * column on very small screens, two columns on small screens, three
 * columns on medium, and five columns on large devices.  The sedation
 * messaging has been updated to reflect that sedation is used when
 * necessary.
 */

const GRAFISMO_COMP =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/2_16bdae17.png";

const steps = [
  {
    step: "01",
    title: "Nascimento",
    subtitle: "Triagem Auditiva Neonatal",
    desc: "Emissões Otoacústicas (EOAs) realizadas ainda na maternidade ou nos primeiros dias de vida.",
    color: "bg-white",
    textColor: "text-[#2C3E50]",
    icon: "👶",
  },
  {
    step: "02",
    title: "Resultado da Triagem",
    subtitle: "Passou ou Falhou?",
    desc: "Se passou: avaliamos fatores de risco. Se falhou: encaminhamos para diagnóstico avançado.",
    color: "bg-[#F4C62F]",
    textColor: "text-[#2C3E50]",
    icon: "📋",
  },
  {
    step: "03",
    title: "Diagnóstico Avançado",
    subtitle: "PEATE/BERA + ASSR + Imitanciometria",
    // Updated description: sedation when necessary
    desc: "Exames objetivos de alta precisão, realizados em sono espontâneo na AudioBaby, sedação quando necessária.",
    color: "bg-white",
    textColor: "text-[#2C3E50]",
    icon: "🔬",
  },
  {
    step: "04",
    title: "Devolutiva Integrada",
    subtitle: "Médico + Fonoaudiólogo",
    desc: "Avaliação Integrada.",
    color: "bg-[#F4C62F]",
    textColor: "text-[#2C3E50]",
    icon: "💬",
  },
  {
    step: "05",
    title: "Conduta e Acompanhamento",
    subtitle: "Plano personalizado",
    desc: "Alta orientada, follow-up periódico, reabilitação auditiva, indicação de prótese ou implante coclear conforme necessário.",
    color: "bg-white",
    textColor: "text-[#2C3E50]",
    icon: "🎯",
  },
];

export default function FluxogramaSection() {
  return (
    <section className="py-20 md:py-28 bg-[#94B1DA] overflow-hidden relative">
      {/* Decorative grafismo */}
      <div className="absolute top-0 right-0 opacity-10 w-80 h-80">
        <img src={GRAFISMO_COMP} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-10 w-64 h-64 rotate-180">
        <img src={GRAFISMO_COMP} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
            <span className="font-nunito font-700 text-sm text-white/80 uppercase tracking-widest">
              Nosso Fluxo de Cuidado
            </span>
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
          </div>
          {/* Main heading uses global MontserratAlternates via h2 */}
          <h2 className="font-900 text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Do nascimento ao diagnóstico,
            <br />
            <span className="text-[#F4C62F]">cada passo com você</span>
          </h2>
          <p className="font-lato text-lg text-white/80 max-w-2xl mx-auto">
            Seguimos as diretrizes do Joint Committee on Infant Hearing e do Ministério da Saúde para garantir o melhor cuidado auditivo desde o primeiro dia de vida.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line on medium and up */}
          <div
            className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white/30 z-0"
            style={{ top: "3rem" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Step number circle */}
                <div className="relative z-10 mb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg border-4 border-white/30`}
                  >
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F4C62F] flex items-center justify-center shadow-md">
                    <span className="font-nunito font-900 text-xs text-[#2C3E50]">{step.step}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className={`${step.color} rounded-2xl p-5 w-full shadow-lg`}>
                  <h3 className={`font-nunito font-900 text-base ${step.textColor} mb-1`}>
                    {step.title}
                  </h3>
                  <p className="font-nunito font-700 text-xs text-[#94B1DA] mb-2">
                    {step.subtitle}
                  </p>
                  <p className="font-lato text-xs text-[#718096] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center reveal">
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
            <span className="text-2xl">🏆</span>
            <p className="font-lato text-sm text-white">
              <strong className="font-nunito font-800">
                Alinhado às melhores práticas internacionais:
              </strong>{" "}
              Joint Committee on Infant Hearing e Ministério da Saúde do Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}