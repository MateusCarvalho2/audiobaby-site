/*
 * AudioBaby DepoimentosSection
 * Design: Cards de depoimentos de mães com fundo creme
 * Layout: Grid 3 colunas com destaque central
 */

const depoimentos = [
  {
    nome: "Ana Paula M.",
    filho: "Mãe do Pedro, 4 meses",
    texto: "Quando meu filho falhou na triagem da maternidade, entrei em desespero. A equipe da AudioBaby foi incrível — me explicaram tudo com calma, fizeram o PEATE no sono dele e no mesmo dia já tínhamos o diagnóstico. Me senti acolhida do início ao fim.",
    estrelas: 5,
    avatar: "AP",
    cor: "bg-[#94B1DA]",
  },
  {
    nome: "Fernanda L.",
    filho: "Mãe da Sofia, 2 anos",
    texto: "Minha filha tem perda auditiva neurossensorial bilateral. Encontrei na AudioBaby não só o diagnóstico preciso, mas uma equipe que me orientou em cada passo — desde a indicação do aparelho até o acompanhamento fonoaudiológico. São parceiros de verdade.",
    estrelas: 5,
    avatar: "FL",
    cor: "bg-[#F4C62F]",
    destaque: true,
  },
  {
    nome: "Camila R.",
    filho: "Mãe do Guilherme, 8 meses",
    texto: "Vim para o follow-up porque meu filho ficou na UTI neonatal. Fui muito bem recebida, o exame foi feito enquanto ele dormia no meu colo. Resultado: audição normal! Saí aliviada e com todas as dúvidas respondidas.",
    estrelas: 5,
    avatar: "CR",
    cor: "bg-[#94B1DA]",
  },
];

export default function DepoimentosSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
            <span className="font-nunito font-700 text-sm text-[#6B90C4] uppercase tracking-widest">
              O que dizem as mães
            </span>
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
          </div>
          <h2 className="font-rheago text-3xl md:text-4xl text-[#2C3E50] mb-4">
            Histórias reais de
            <br />
            <span className="text-[#94B1DA]">cuidado e confiança</span>
          </h2>
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((dep, i) => (
            <div
              key={dep.nome}
              className={`reveal rounded-3xl p-7 ${dep.destaque ? "bg-[#94B1DA] md:-mt-4 md:mb-4 shadow-2xl" : "bg-white shadow-md"} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: dep.estrelas }).map((_, j) => (
                  <span key={j} className={`text-lg ${dep.destaque ? "text-[#F4C62F]" : "text-[#F4C62F]"}`}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className={`font-lato text-sm leading-relaxed mb-6 ${dep.destaque ? "text-white" : "text-[#4A5568]"}`}>
                "{dep.texto}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${dep.destaque ? "bg-white/20" : dep.cor} flex items-center justify-center`}>
                  <span className={`font-nunito font-800 text-sm ${dep.destaque ? "text-white" : "text-white"}`}>
                    {dep.avatar}
                  </span>
                </div>
                <div>
                  <p className={`font-nunito font-800 text-sm ${dep.destaque ? "text-white" : "text-[#2C3E50]"}`}>
                    {dep.nome}
                  </p>
                  <p className={`font-lato text-xs ${dep.destaque ? "text-white/70" : "text-[#94B1DA]"}`}>
                    {dep.filho}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏅", title: "Especialistas certificados", sub: "em audiologia pediátrica" },
              { icon: "🔬", title: "Equipamentos calibrados", sub: "e certificados INMETRO" },
              { icon: "📋", title: "Protocolos internacionais", sub: "JCIH e Ministério da Saúde" },
              { icon: "❤️", title: "Atendimento humanizado", sub: "para toda a família" },
            ].map((badge) => (
              <div key={badge.title} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-[#94B1DA]/10">
                <span className="text-3xl block mb-2">{badge.icon}</span>
                <p className="font-nunito font-800 text-sm text-[#2C3E50]">{badge.title}</p>
                <p className="font-lato text-xs text-[#94B1DA] mt-1">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
