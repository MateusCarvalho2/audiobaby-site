import { ArrowRight, Building2, HeartPulse, UsersRound } from "lucide-react";
import { Link } from "wouter";

const pathways = [
  {
    title: "Exames",
    desc: "Triagem neonatal, PEATE/BERA, ASSR, imitanciometria, audiometrias e processamento auditivo.",
    href: "/exames",
    icon: HeartPulse,
  },
  {
    title: "Estrutura",
    desc: "Ambientes preparados para sono espontâneo, conforto da família e exames mais tranquilos.",
    href: "/estrutura",
    icon: Building2,
  },
  {
    title: "Equipe",
    desc: "Corpo clínico integrado com otorrinolaringologistas e audiologistas infantis.",
    href: "/equipe",
    icon: UsersRound,
  },
];

export default function PathwaysSection() {
  return (
    <section className="section-band bg-white !pt-2 md:!pt-4">
      <div className="container">
        <div className="reveal-clip mx-auto mb-12 max-w-3xl text-center">
          <div className="section-kicker justify-center">Caminhos de cuidado</div>
          <h2 className="section-title text-[#2C3E50]">
            Encontre rápido o que
            <span className="text-[#94B1DA]"> sua família precisa</span>
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {pathways.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="motion-card reveal-scale group flex min-h-[260px] flex-col border border-[#94B1DA]/16 bg-[#F8FBFF] p-6"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="motion-icon bg-white text-[#6B90C4] shadow-sm">
                    <Icon size={24} />
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-[#94B1DA] transition-transform duration-500 ease-motion group-hover:translate-x-1"
                  />
                </div>
                <h3 className="font-nunito text-3xl font-900 text-[#2C3E50]">
                  {item.title}
                </h3>
                <p className="mt-4 font-lato text-sm leading-relaxed text-[#5E6D7A]">
                  {item.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
