import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { Link } from "wouter";

const HERO_VIDEO = "/videos/audiobaby-hero.mp4";

export default function HeroSection() {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight || 800;
      const ratio = Math.min(1, Math.max(0, scrollY / heroHeight));
      setScrollRatio(ratio);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-[#F8FBFF]"
    >
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `scale(${1 + scrollRatio * 0.75})`,
          opacity: Math.max(0, 1 - scrollRatio * 1.4),
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
      >
        <video
          className="hero-video h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Vídeo institucional da AudioBaby"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/78 to-white/16" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container relative z-10 flex min-h-[100svh] items-center pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="hero-reveal inline-flex items-center gap-2 px-0 py-1">
            <span className="h-2 w-2 rounded-full bg-[#94B1DA]" />
            <span className="font-nunito text-sm font-800 uppercase tracking-[0.18em] text-[#6B90C4] text-shadow-hero">
              Núcleo de Audiologia Infantil
            </span>
          </div>

          <h1 className="hero-reveal mt-7 text-4xl md:text-5xl lg:text-6xl text-[#2C3E50] leading-tight mb-6 text-shadow-hero">
            Quando a audição
            <br />
            do seu bebê <span className="text-[#94B1DA]">importa,</span>
            <br />
            <span className="text-[#F4C62F]">você não está</span>
            <br />
            sozinha.
          </h1>

          <p className="hero-reveal mt-7 max-w-md font-lato text-lg leading-relaxed text-[#4A5568] mb-8 text-shadow-hero">
            Diagnóstico auditivo infantil com ciência, acolhimento e
            responsabilidade. Transformamos um momento de dúvida em um caminho
            de cuidado.
          </p>

          <div className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/5571981581346?text=Olá! Gostaria de agendar um exame na AudioBaby."
              target="_blank"
              rel="noopener noreferrer"
              className="motion-button"
            >
              <Phone size={18} />
              Agendar pelo WhatsApp
            </a>
            <Link href="/exames" className="motion-button secondary">
              Conhecer exames
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="hero-reveal flex flex-col sm:flex-row gap-6 sm:gap-8 mt-10 pt-8 border-t border-[#94B1DA]/20">
            <div>
              <p className="font-nunito font-900 text-3xl text-[#94B1DA]">100%</p>
              <p className="font-lato text-sm text-[#718096]">
                Especializado
                <br />
                em bebês
              </p>
            </div>
            <div className="w-px bg-[#94B1DA]/20 hidden sm:block"></div>
            <div>
              <p className="font-nunito font-900 text-3xl text-[#94B1DA] sm:w-[172px] whitespace-nowrap">+ Conforto</p>
              <p className="font-lato text-sm text-[#718096]">
                Sedação
                <br />
                quando necessária
              </p>
            </div>
            <div className="w-px bg-[#94B1DA]/20 hidden sm:block"></div>
            <div>
              <p className="font-nunito font-900 text-3xl text-[#94B1DA]">O melhor lugar para o seu bebê</p>
              <p className="font-lato text-sm text-[#718096]">
                Todos os exames
                <br />
                auditivos
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-[#94B1DA]/35 bg-white/70 text-[#6B90C4] backdrop-blur-md transition-all duration-500 ease-motion hover:-translate-y-1 hover:bg-white hover:text-[#2C3E50]"
        aria-label="Rolar para baixo"
        type="button"
      >
        <ChevronDown size={22} />
      </button>
    </section>
  );
}
