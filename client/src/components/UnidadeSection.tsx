import { CheckCircle2, MapPin } from "lucide-react";
import { unidadeImages } from "@/data/content";

export default function UnidadeSection() {
  return (
    <section id="unidade" className="section-band bg-[#F8FBFF]">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="reveal-left lg:sticky lg:top-28">
            <div className="section-kicker">Nossa Unidade</div>
            <h2 className="section-title text-[#2C3E50]">
              Estrutura pensada para
              <span className="text-[#94B1DA]"> bebês e famílias</span>
            </h2>
            <p className="mt-5 font-lato text-lg leading-relaxed text-[#5E6D7A]">
              Um espaço silencioso, acolhedor e organizado para reduzir a
              ansiedade da família e favorecer exames mais tranquilos.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Salas preparadas para sono natural",
                "Ambiente pediátrico com iluminação confortável",
                "Fluxo pensado para acolher mães, bebês e crianças",
                "Localização em Salvador com acesso facilitado",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border border-[#94B1DA]/18 bg-white px-4 py-3"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#F4C62F]"
                  />
                  <span className="font-lato text-sm text-[#4A5568]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/maps?q=Av.%20Luis%20Viana%20Filho%206462%2C%20Salvador%20BA%20Brasil"
              target="_blank"
              rel="noopener noreferrer"
              className="motion-button mt-8 inline-flex"
            >
              <MapPin size={16} />
              Ver localização
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {unidadeImages.map((src, idx) => (
              <figure
                key={src}
                className={`motion-card reveal group overflow-hidden bg-white ${
                  idx === 0 ? "sm:col-span-2" : ""
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className={idx === 0 ? "h-[420px]" : "h-64"}>
                  <img
                    src={src}
                    alt={`Estrutura da unidade AudioBaby ${idx + 1}`}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-motion group-hover:scale-[1.05]"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
