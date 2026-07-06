import { 
  Baby, 
  Activity, 
  Microscope, 
  Target, 
  Brain, 
  Stethoscope, 
  Ear, 
  Volume2, 
  LineChart, 
  BarChart3, 
  Eye, 
  Gamepad2, 
  Puzzle, 
  ClipboardList, 
  UserRound, 
  MessagesSquare, 
  Sparkles,
  HeartPulse
} from "lucide-react";
import type { ReactNode } from "react";

export const getCategoryIcon = (iconStr: string, className = "h-6 w-6"): ReactNode => {
  switch (iconStr) {
    case "👶": return <Baby className={className} />;
    case "🔬": return <Microscope className={className} />;
    case "🎯": return <Target className={className} />;
    case "🧠": return <Brain className={className} />;
    case "🩺": return <Stethoscope className={className} />;
    default: return <Activity className={className} />;
  }
};

export const getExamIcon = (slug: string, className = "h-6 w-6"): ReactNode => {
  switch (slug) {
    case "triagem-auditiva-neonatal-universal":
      return <Ear className={className} />;
    case "triagem-auditiva-neonatal-ampliada":
      return <Sparkles className={className} />;
    case "peate-bera-diagnostico":
      return <LineChart className={className} />;
    case "peaee-assr":
      return <BarChart3 className={className} />;
    case "imitanciometria-pediatrica":
      return <Activity className={className} />;
    case "audiometria-observacao-comportamental":
      return <Eye className={className} />;
    case "audiometria-reforco-visual-vra":
      return <Volume2 className={className} />;
    case "audiometria-ludica-condicionada":
      return <Gamepad2 className={className} />;
    case "avaliacao-processamento-auditivo-central":
      return <Puzzle className={className} />;
    case "bateria-completa-testes-pac":
      return <ClipboardList className={className} />;
    case "consulta-medica-complementar":
      return <UserRound className={className} />;
    case "devolutiva-integrada":
      return <MessagesSquare className={className} />;
    default:
      return <HeartPulse className={className} />;
  }
};
