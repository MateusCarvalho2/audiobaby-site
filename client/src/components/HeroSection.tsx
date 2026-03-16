/*
 * AudioBaby HeroSection
 * Design: Full-screen hero com imagem de mãe e bebê, texto do manifesto, CTA
 * Fundo: Imagem hero com overlay azul suave
 * Texto: Escuro sobre fundo claro (imagem é high-key/clara)
 */

import { Phone, ChevronDown } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/hero_mae_bebe_cc14e0f0.jpg";
const WAVE_ICON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/3_e124f16a.png";

export default function HeroSection() {
  const scrollToNext = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Mãe segurando bebê durante exame auditivo na AudioBaby"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay - left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 md:from-white/90 md:via-white/70 md:to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Decorative wave icon */}
      <div className="absolute top-1/3 right-8 md:right-16 opacity-20 animate-float hidden md:block">
        <img src={WAVE_ICON} alt="" className="w-32 h-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-28 pb-20">
        <div className="max-w-xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#94B1DA]/15 border border-[#94B1DA]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#94B1DA] animate-pulse" />
            <span className="font-nunito font-600 text-sm text-[#6B90C4]">
              Núcleo de Audiologia Infantil
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-nunito font-900 text-4xl md:text-5xl lg:text-6xl text-[#2C3E50] leading-tight mb-6">
            Quando a audição
            <br />
            do seu bebê{" "}
            <span className="text-[#94B1DA]">importa,</span>
            <br />
            <span className="text-[#F4C62F]">você não está</span>
            <br />
            sozinha.
          </h1>

          {/* Subheadline */}
          <p className="font-lato text-lg text-[#4A5568] leading-relaxed mb-8 max-w-md">
            Diagnóstico auditivo infantil com ciência, acolhimento e responsabilidade.
            Transformamos um momento de dúvida em um caminho de cuidado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um exame na AudioBaby."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F4C62F] hover:bg-[#D4A820] text-[#2C3E50] font-nunito font-800 text-base px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105 shadow-lg"
            >
              <Phone size={18} />
              Agendar pelo WhatsApp
            </a>
            <button
              onClick={() => {
                const el = document.querySelector("#exames");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white border-2 border-[#94B1DA] text-[#6B90C4] font-nunito font-700 text-base px-7 py-4 rounded-full transition-all duration-200 hover:shadow-lg backdrop-blur-sm"
            >
              Conhecer os Exames
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-[#94B1DA]/20">
            <div>
              <p className="font-nunito font-900 text-3xl text-[#94B1DA]">100%</p>
              <p className="font-lato text-sm text-[#718096]">Especializado<br />em bebês</p>
            </div>
            <div className="w-px bg-[#94B1DA]/20" />
            <div>
              <p className="font-nunito font-900 text-3xl text-[#94B1DA]" style={{width: '172px', borderWidth: '4px'}}>+ Conforto</p>
              <p className="font-lato text-sm text-[#718096]">Sedação<br />sempre que possível</p>
            </div>
            <div className="w-px bg-[#94B1DA]/20" />
            <div>
              <p className="font-nunito font-900 text-3xl text-[#94B1DA]">O melhor lugar para o seu bebê</p>
              <p className="font-lato text-sm text-[#718096]">Todos os exames<br />auditivos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#94B1DA] hover:text-[#6B90C4] transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <span className="font-lato text-xs">Saiba mais</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
