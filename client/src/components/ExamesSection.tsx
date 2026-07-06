import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { examCategories, exames } from "@/data/content";
import { getCategoryIcon, getExamIcon } from "@/lib/icons";

const HEADPHONE_ICON =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/4_ac7150bc.png";
const TRIAGEM_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/bebe_triagem_neonatal_350ed09d.jpg";

export default function ExamesSection() {
  return (
    <section id="exames" className="section-band bg-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end mb-12">
          <div className="reveal-left">
            <div className="section-kicker">Nossos Serviços</div>
            <h2 className="section-title text-[#2C3E50]">
              Todos os exames auditivos
              <span className="text-[#94B1DA]"> em uma jornada clara</span>
            </h2>
          </div>
          <p className="reveal-right font-lato text-lg text-[#5E6D7A] leading-relaxed max-w-2xl lg:ml-auto">
            Da triagem neonatal ao diagnóstico avançado, a família entende o
            próximo passo, o motivo de cada exame e como o resultado orienta a
            conduta.
          </p>
        </div>

        <div className="grid gap-7">
          {examCategories.map((category, categoryIndex) => (
            <section
              key={category.id}
              className="reveal border border-[#94B1DA]/18 bg-[#F8FBFF] p-5 md:p-7"
              style={{ transitionDelay: `${categoryIndex * 80}ms` }}
            >
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center bg-[#EEF4FB] text-[#6B90C4] rounded-2xl shadow-sm border border-white">
                    {getCategoryIcon(category.icon, "h-6 w-6")}
                  </div>
                  <h3 className="font-nunito text-2xl font-900 leading-tight text-[#2C3E50]">
                    {category.label}
                  </h3>
                </div>
                <span className="font-lato text-sm font-bold text-[#6B90C4]">
                  {exames[category.id].length} procedimento
                  {exames[category.id].length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {exames[category.id].map((exame, i) => {
                  const isYellow = exame.slug.includes("neonatal") || exame.slug.includes("ludica") || exame.slug.includes("integrada");
                  const bgClass = isYellow ? "bg-[#F4C62F]/10 border-[#F4C62F]/10" : "bg-[#94B1DA]/12 border-[#94B1DA]/12";
                  const textClass = isYellow ? "text-[#F4C62F]" : "text-[#6B90C4]";
                  return (
                    <Link
                      key={exame.slug}
                      href={`/exames/${exame.slug}`}
                      className="motion-card group flex min-h-[280px] flex-col border border-[#94B1DA]/16 bg-white p-5"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`flex items-center justify-center h-12 w-12 rounded-2xl border ${bgClass} ${textClass} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                            {getExamIcon(exame.slug, "h-6 w-6")}
                          </div>
                          <div>
                            <h4 className="font-nunito text-lg font-900 leading-tight text-[#2C3E50]">
                              {exame.title}
                            </h4>
                            <p className="mt-2 font-lato text-sm font-bold leading-snug text-[#6B90C4]">
                              {exame.desc}
                            </p>
                          </div>
                        </div>
                        <ArrowRight
                          size={18}
                          className="mt-1 shrink-0 text-[#94B1DA] transition-transform duration-500 ease-motion group-hover:translate-x-1"
                        />
                      </div>
                      <p className="font-lato text-sm leading-relaxed text-[#5E6D7A]">
                        {exame.detail}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 font-nunito text-sm font-900 uppercase tracking-[0.12em] text-[#6B90C4]">
                        Ver preparo
                        <ArrowRight size={15} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="reveal mt-14 grid overflow-hidden border border-[#94B1DA]/20 bg-[#EEF4FB] md:grid-cols-[0.9fr_1.1fr]">
          <div className="p-7 md:p-10">
            <div className="mb-5 flex items-center gap-3">
              <img
                src={HEADPHONE_ICON}
                alt=""
                className="h-10 w-10 object-contain"
              />
              <span className="font-nunito text-sm font-800 uppercase tracking-wide text-[#6B90C4]">
                Diferencial AudioBaby
              </span>
            </div>
            <h3 className="mb-5 font-nunito text-2xl font-900 leading-tight text-[#2C3E50] md:text-3xl">
              Sono espontâneo sempre que possível.
              <span className="text-[#94B1DA]">
                {" "}
                Sedação apenas quando indicada.
              </span>
            </h3>
            <p className="mb-6 font-lato leading-relaxed text-[#4A5568]">
              O ambiente é preparado para acolher o bebê sem pressa. Quando há
              indicação de sedação, a avaliação é planejada com suporte médico e
              segurança.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Ambiente silencioso e climatizado",
                "Agendamento com tempo ampliado",
                "Relatórios integrados",
                "Orientação clara para a família",
              ].map(item => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-lato text-sm text-[#4A5568]"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-[#F4C62F]" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5571981581346?text=Olá! Gostaria de agendar um exame na AudioBaby."
              target="_blank"
              rel="noopener noreferrer"
              className="motion-button mt-8 inline-flex"
            >
              Agendar exame
              <ChevronRight size={16} />
            </a>
          </div>
          <div className="relative min-h-[320px] overflow-hidden">
            <img
              src={TRIAGEM_IMG}
              alt="Triagem auditiva neonatal na AudioBaby"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-motion hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
