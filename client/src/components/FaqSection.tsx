/*
 * AudioBaby FaqSection
 * Modified to remove convênio information and adjust sedation wording.
 * Titles now rely on global heading styles (Rheago font) by omitting font-nunito on headings.
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Questions and answers for the FAQ accordion. Removed the convênio question
// and updated the sedation answer to reflect that sedation is used when necessary.
const faqs = [
  {
    q: "Meu bebê falhou na triagem auditiva da maternidade. O que isso significa?",
    a: "Falhar na triagem não significa necessariamente que seu bebê tem perda auditiva. Cerca de 3 a 4% dos bebês falham na primeira triagem por diversas razões — verniz caseoso no canal auditivo, líquido na orelha média, choro ou agitação durante o exame. O próximo passo é realizar uma nova triagem ou um diagnóstico completo. Não entre em pânico: estamos aqui para orientar você em cada etapa.",
  },
  {
    q: "Com quantos dias de vida posso trazer meu bebê para o exame?",
    a: "O ideal é realizar a triagem auditiva ainda na maternidade, nos primeiros dias de vida. Caso não tenha sido feita, pode ser realizada a qualquer momento. O PEATE diagnóstico pode ser feito a partir de 1 mês de vida. Quanto mais cedo o diagnóstico, maiores as possibilidades de intervenção e desenvolvimento.",
  },
  {
    q: "O exame vai doer ou assustar meu bebê?",
    a: "Não. Todos os nossos exames são completamente indolores e não invasivos. Realizamos os exames preferencialmente durante o sono natural do bebê, sem sedação. Nosso ambiente é silencioso, climatizado e preparado especialmente para que bebês e crianças se sintam confortáveis e seguros.",
  },
  {
    q: "Meu filho vai precisar de sedação para fazer o PEATE/BERA?",
    // Updated answer: sedação quando necessário, sempre com acompanhamento médico.
    a: "Na grande maioria dos casos, não. Realizamos o PEATE em sono espontâneo — aproveitamos o momento em que o bebê está dormindo naturalmente. Para crianças maiores que não conseguem dormir espontaneamente, avaliamos cada caso individualmente. Sedação quando necessária, sempre com acompanhamento médico.",
  },
  {
    q: "Quais são os fatores de risco para perda auditiva em bebês?",
    a: "Os principais fatores de risco incluem: permanência em UTI neonatal por mais de 5 dias, uso de medicamentos ototóxicos, histórico familiar de perda auditiva na infância, infecções congênitas (CMV, toxoplasmose, rubéola, sífilis, herpes), hiperbilirrubinemia grave, malformações craniofaciais, prematuridade e baixo peso ao nascer. Bebês com esses fatores precisam de acompanhamento auditivo mesmo que passem na triagem inicial.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#EEF4FB]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: header */}
          <div className="reveal-left lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-[#F4C62F]" />
              <span className="font-nunito font-700 text-sm text-[#6B90C4] uppercase tracking-widest">
                Dúvidas Frequentes
              </span>
            </div>
            {/* Removed font-nunito from the heading so global Rheago applies */}
            <h2 className="font-900 text-3xl md:text-4xl text-[#2C3E50] mb-6 leading-tight">
              Sabemos que você
              <br />
              tem <span className="text-[#94B1DA]">muitas perguntas.</span>
            </h2>
            <p className="font-lato text-[#4A5568] leading-relaxed mb-8">
              É completamente normal sentir dúvidas e ansiedade quando se trata da saúde auditiva do seu filho. Reunimos as perguntas mais comuns das mães que atendemos.
            </p>
            <a
              href="https://wa.me/5500000000000?text=Olá! Tenho dúvidas sobre os exames auditivos da AudioBaby."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#94B1DA] hover:bg-[#6B90C4] text-white font-nunito font-700 text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              Falar com nossa equipe
            </a>
          </div>

          {/* Right: accordion */}
          <div className="reveal-right space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#94B1DA]/10 transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#F8FBFF] transition-colors"
                >
                  <span className="font-nunito font-700 text-sm text-[#2C3E50] leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#94B1DA] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <p className="font-lato text-sm text-[#718096] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}