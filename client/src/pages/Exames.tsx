import ContatoSection from "@/components/ContatoSection";
import ExamesSection from "@/components/ExamesSection";
import InternalHero from "@/components/InternalHero";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Exames() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <div className="page-shell min-h-screen bg-white">
        <InternalHero
          label="Exames"
          title="Diagnóstico auditivo"
          highlight="sem perder o acolhimento."
          description="Uma página dedicada aos exames da AudioBaby, organizada por etapa de cuidado para facilitar a decisão da família."
          image="https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/bebe_triagem_neonatal_350ed09d.jpg"
        />
        <ExamesSection />
        <ContatoSection />
        <WhatsAppFloat />
      </div>
    </>
  );
}
