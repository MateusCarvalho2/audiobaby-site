/*
 * AudioBaby — Home Page
 * Modified to include the new EquipeSection and adjust wave transitions accordingly.
 */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ExamesSection from "@/components/ExamesSection";
import FluxogramaSection from "@/components/FluxogramaSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import EquipeSection from "@/components/EquipeSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import FaqSection from "@/components/FaqSection";
import ContatoSection from "@/components/ContatoSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WaveDivider, { AudioWaveBar } from "@/components/WaveDivider";

export default function Home() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero — full screen with mother and baby */}
      <HeroSection />

      {/* Wave transition */}
      <WaveDivider color="#F8FBFF" bgColor="white" />

      {/* Manifesto / About */}
      <ManifestoSection />

      {/* Wave transition */}
      <WaveDivider color="white" bgColor="#F8FBFF" flip />

      {/* Exames / Services */}
      <ExamesSection />

      {/* Audio wave decorative bar */}
      <div className="bg-white py-4">
        <div className="container">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#94B1DA]/20" />
            <AudioWaveBar />
            <div className="flex-1 h-px bg-[#94B1DA]/20" />
          </div>
        </div>
      </div>

      {/* Fluxograma — blue section */}
      <FluxogramaSection />

      {/* Wave transition */}
      <WaveDivider color="white" bgColor="#94B1DA" />

      {/* Diferenciais */}
      <DiferenciaisSection />

      {/* Equipe Section */}
      <EquipeSection />

      {/* Wave transition to FAQ */}
      <WaveDivider color="#EEF4FB" bgColor="white" />

      {/* FAQ */}
      <FaqSection />

      {/* Wave transition */}
      <WaveDivider color="white" bgColor="#EEF4FB" flip />

      {/* Depoimentos */}
      <DepoimentosSection />

      {/* Contato + Footer */}
      <ContatoSection />

      {/* Floating WhatsApp button */}
      <WhatsAppFloat />
    </div>
  );
}