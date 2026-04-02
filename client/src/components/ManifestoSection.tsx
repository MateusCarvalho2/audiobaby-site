/*
 * AudioBaby ManifestoSection
 *
 * This section tells the AudioBaby story and reinforces the clinic’s values.
 * It retains the original design with decorative waves, narrative text and
 * highlight elements.  Sedation messaging has been updated to indicate
 * sedation is used when necessary.
 */

const BEBE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/bebe_dormindo_exame_214b7618.jpg";
const WAVE_ICON =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/3_e124f16a.png";

export default function ManifestoSection() {
  return (
    <section id="sobre" className="relative bg-[#F8FBFF] overflow-hidden py-20 md:py-28">
      {/* Decorative wave background */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#94B1DA] via-[#F4C62F] to-[#94B1DA]" />

      {/* Floating decorative elements */}
      <div className="absolute top-12 right-8 opacity-10 animate-float">
        <img src={WAVE_ICON} alt="" className="w-48 h-auto" />
      </div>
      <div className="absolute bottom-12 left-4 opacity-8 animate-float" style={{ animationDelay: "1.5s" }}>
        <img src={WAVE_ICON} alt="" className="w-32 h-auto rotate-180" />
      </div>

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="reveal-left">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-[#F4C62F]" />
              <span className="font-nunito font-700 text-sm text-[#6B90C4] uppercase tracking-widest">
                Nossa História
              </span>
            </div>

            {/* Main heading uses global MontserratAlternates font */}
            <h2 className="font-900 text-3xl md:text-4xl lg:text-5xl text-[#2C3E50] leading-tight mb-6">
              Nascemos para estar
              <br />
              <span className="text-[#94B1DA]">ao seu lado</span>
              <br />
              nesse momento.
            </h2>

            <div className="space-y-4 font-lato text-[#4A5568] leading-relaxed">
              <p>
                Existe um momento que nenhuma mãe espera viver: quando alguém diz
                <strong className="text-[#2C3E50]"> "seu bebê falhou na Triagem Auditiva Neonatal."</strong>
              </p>
              <p>
                De repente, aquilo que deveria ser apenas um exame de rotina se transforma em um turbilhão de perguntas. A ansiedade chega primeiro. Depois vem a culpa. E, muitas vezes, a negação.
              </p>
              <p>Muitas mães percorrem essa jornada sentindo-se sozinhas. Mas elas não deveriam.</p>
            </div>

            {/* Quote highlight */}
            <div className="mt-8 pl-5 border-l-4 border-[#F4C62F]">
              <p className="font-nunito font-700 text-xl text-[#2C3E50] italic leading-relaxed">
                "Aqui, um exame não é apenas técnica. É colo. É silêncio. É tempo respeitado. É escuta verdadeira."
              </p>
            </div>

            <p className="mt-6 font-lato text-[#4A5568] leading-relaxed">
              Foi a partir dessa compreensão que nasceu a AudioBaby — um espaço onde técnica e acolhimento caminham juntos, transformando um momento de medo em um caminho de cuidado.
            </p>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: "🩺", label: "Precisão Científica" },
                { icon: "💛", label: "Acolhimento Humano" },
                { icon: "👶", label: "Foco no Bebê" },
                { icon: "👨‍👩‍👧", label: "Suporte à Família" },
              ].map((v) => (
                <div key={v.label} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm">
                  <span className="text-2xl">{v.icon}</span>
                  <span className="font-nunito font-700 text-sm text-[#2C3E50]">{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="reveal-right relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={BEBE_IMG}
                alt="Bebê dormindo durante exame auditivo PEATE/BERA na AudioBaby"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Image overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-2xl px-5 py-4">
                  <p className="font-nunito font-800 text-[#2C3E50] text-sm">
                    Exames em sono espontâneo
                  </p>
                  <p className="font-lato text-xs text-[#718096] mt-1">
                    {/* Updated sedation text: when necessary */}
                    Sedação quando necessária, sem pressa, respeitando o ritmo do seu bebê
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -top-6 -right-4 md:-right-8 bg-[#F4C62F] rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-nunito font-900 text-3xl text-[#2C3E50]">+10</p>
              <p className="font-lato text-xs text-[#2C3E50] font-bold">
                tipos de exames
                <br />
                auditivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}