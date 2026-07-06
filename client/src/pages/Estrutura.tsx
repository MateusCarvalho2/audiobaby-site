import ContatoSection from "@/components/ContatoSection";
import InternalHero from "@/components/InternalHero";
import Navbar from "@/components/Navbar";
import UnidadeSection from "@/components/UnidadeSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Estrutura() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <div className="page-shell min-h-screen bg-white">
        <InternalHero
          label="Estrutura"
          title="Um espaço feito"
          highlight="para o ritmo do seu bebê."
          description="Conheça a unidade AudioBaby, preparada para exames silenciosos, acolhimento da família e conforto durante toda a jornada."
          image="/imagens/unidade/unidade1.jpg"
          waveColor="#F8FBFF"
          bgColor="#F8FBFF"
        />
        <UnidadeSection />
        <ContatoSection topWaveBgColor="#F8FBFF" />
        <WhatsAppFloat />
      </div>
    </>
  );
}
