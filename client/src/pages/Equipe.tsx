import ContatoSection from "@/components/ContatoSection";
import EquipeSection from "@/components/EquipeSection";
import InternalHero from "@/components/InternalHero";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Equipe() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <div className="page-shell min-h-screen bg-white">
        <InternalHero
          label="Equipe"
          title="Especialistas que"
          highlight="cuidam junto com você."
          description="Conheça os profissionais que unem otorrinolaringologia, audiologia infantil e devolutiva integrada para orientar cada família."
          image="/imagens/corpoclinico/Adriana.png"
          imageClassName="md:object-contain md:object-right md:opacity-85"
        />
        <EquipeSection />
        <ContatoSection />
        <WhatsAppFloat />
      </div>
    </>
  );
}
