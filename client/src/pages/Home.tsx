import { useEffect } from "react";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ContatoSection from "@/components/ContatoSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import FaqSection from "@/components/FaqSection";
import FluxogramaSection from "@/components/FluxogramaSection";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import Navbar from "@/components/Navbar";
import PathwaysSection from "@/components/PathwaysSection";
import WaveDivider, { AudioWaveBar } from "@/components/WaveDivider";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-clip"
    );
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-shell min-h-screen bg-white">
        <HeroSection />
        <WaveDivider color="#F8FBFF" bgColor="white" />
        <ManifestoSection />
        <WaveDivider color="white" bgColor="#F8FBFF" flip />
        <PathwaysSection />

        <div className="bg-white py-4">
          <div className="container">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#94B1DA]/20" />
              <AudioWaveBar />
              <div className="h-px flex-1 bg-[#94B1DA]/20" />
            </div>
          </div>
        </div>
        <WaveDivider color="#94B1DA" bgColor="white" />

        <FluxogramaSection />
        <WaveDivider color="white" bgColor="#94B1DA" />
        <DiferenciaisSection />
        <WaveDivider color="#F8FBFF" bgColor="white" />
        <BlogPreviewSection />
        <WaveDivider color="#EEF4FB" bgColor="#F8FBFF" />
        <FaqSection />
        <WaveDivider color="#2C3E50" bgColor="#EEF4FB" />
        <ContatoSection />
        <WhatsAppFloat />
      </div>
    </>
  );
}
