import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { Link } from "wouter";

const HERO_VIDEO = "/videos/audiobaby-hero.mp4";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const videoDurationRef = useRef(0);

  useEffect(() => {
    let targetRatio = 0;
    let currentRatio = 0;
    let animationFrameId: number;
    let isRunning = false;

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(updateLoop);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight || 800;
      targetRatio = Math.min(1, Math.max(0, scrollY / heroHeight));
      startLoop();
    };

    const handleMetadata = () => {
      const video = videoRef.current;
      if (!video) return;
      videoDurationRef.current = Math.max(0, video.duration || 0);
      
      // Force initial play & pause immediately to prime Safari's decoder and render the first frame
      video.pause();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            video.pause();
            video.currentTime = 0;
          })
          .catch(() => {
            video.pause();
          });
      }
      
      startLoop();
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", handleMetadata);
      video.addEventListener("canplay", handleMetadata);
      if (video.readyState >= 1) {
        handleMetadata();
      }
    }

    const updateLoop = () => {
      // Smooth interpolation (lerp)
      currentRatio += (targetRatio - currentRatio) * 0.08;

      if (Math.abs(targetRatio - currentRatio) < 0.0005) {
        currentRatio = targetRatio;
      }

      // Update background scale and opacity directly on the DOM node for max performance (no React re-renders)
      if (backgroundRef.current) {
        const scale = 1 + currentRatio * 0.75;
        const opacity = Math.max(0, 1 - currentRatio * 1.4);
        backgroundRef.current.style.transform = `scale(${scale})`;
        backgroundRef.current.style.opacity = `${opacity}`;
      }

      let videoPending = false;
      
      if (video) {
        // Read duration directly from video node to handle browsers that delay metadata event emission
        const duration = video.duration || videoDurationRef.current;
        if (!isNaN(duration) && duration > 0) {
          const targetTime = currentRatio * duration;
          const diff = Math.abs(video.currentTime - targetTime);
          
          // HTML5 seeking is asynchronous. We check !video.seeking to avoid bottlenecking the video decoder.
          // Also only seek when the time difference is larger than ~1 frame (0.03s) to prevent micro-stutters.
          if (diff > 0.03) {
            if (!video.seeking) {
              video.currentTime = targetTime;
            }
            videoPending = true;
          }
        } else {
          // If duration is not yet available, keep the loop active to capture it once it loads
          videoPending = true;
        }
      }

      const isStillAnimating = Math.abs(targetRatio - currentRatio) > 0.0005 || videoPending;

      if (isStillAnimating) {
        animationFrameId = requestAnimationFrame(updateLoop);
      } else {
        isRunning = false;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Also trigger on resize to update scroll heights dynamically
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", handleMetadata);
        video.removeEventListener("canplay", handleMetadata);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
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
        ref={backgroundRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: "scale(1)",
          opacity: 1,
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
      >
        <video
          ref={videoRef}
          className="hero-video h-full w-full object-cover"
          src={HERO_VIDEO}
          muted
          playsInline
          preload="auto"
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
