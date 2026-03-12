/*
 * AudioBaby ExamesSection
 * Design: Grid de cards de exames com ícones dos grafismos da marca
 * Layout: Tabs por categoria + cards informativos
 */

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const HEADPHONE_ICON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/4_ac7150bc.png";
const WHISTLE_ICON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/5_05c11fe1.png";
const WAVE_ICON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/3_e124f16a.png";
const GRAFISMO_ICON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/6_8125284e.png";
const GRAFISMO2_ICON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/7_adf21273.png";

const TRIAGEM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/bebe_triagem_neonatal_350ed09d.jpg";
const FONO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/fonoaudiologa_crianca_fb5ab1ac.jpg";

const categories = [
  { id: "neonatal", label: "Recém-nascidos", icon: "👶" },
  { id: "diagnostico", label: "Diagnóstico Avançado", icon: "🔬" },
  { id: "comportamental", label: "Avaliação Comportamental", icon: "🎯" },
  { id: "pac", label: "Processamento Auditivo", icon: "🧠" },
  { id: "medico", label: "Atendimento Médico", icon: "🩺" },
];

const exames: Record<string, Array<{ title: string; desc: string; detail: string; icon: string }>> = {
  neonatal: [
    {
      title: "Triagem Auditiva Neonatal Universal",
      desc: "Emissões Otoacústicas Evocadas (EOAT e EOAPD)",
      detail: "Para recém-nascidos sem fatores de risco. Exame rápido, indolor e realizado durante o sono natural do bebê.",
      icon: "👂",
    },
    {
      title: "Triagem Auditiva Neonatal Ampliada",
      desc: "EOAs + PEATE Automático (BERA automático)",
      detail: "Para bebês com fatores de risco: UTI neonatal, prematuridade, infecções congênitas, hiperbilirrubinemia, histórico familiar.",
      icon: "🔊",
    },
  ],
  diagnostico: [
    {
      title: "PEATE / BERA Diagnóstico",
      desc: "Potencial Evocado Auditivo de Tronco Encefálico",
      detail: "Exame central da AudioBaby. Realizado preferencialmente em sono espontâneo. Estima limiares auditivos e diferencia tipos de perda auditiva.",
      icon: "📊",
    },
    {
      title: "PEAEE / ASSR",
      desc: "Potencial Evocado Auditivo de Estado Estável",
      detail: "Estimativa objetiva de limiares auditivos por frequência. Avaliação de perdas auditivas severas e profundas. Complemento de alta precisão ao PEATE.",
      icon: "📈",
    },
    {
      title: "Imitanciometria Pediátrica",
      desc: "Avaliação da Orelha Média com sonda 1000 Hz",
      detail: "Padrão ouro para lactentes. Timpanometria e pesquisa de reflexos acústicos. Diferencia perda auditiva condutiva de neurossensorial.",
      icon: "🎚️",
    },
  ],
  comportamental: [
    {
      title: "Audiometria de Observação Comportamental",
      desc: "Para bebês de 0 a 6 meses",
      detail: "Avaliação da resposta comportamental aos sons. Correlação entre achados objetivos e desempenho auditivo funcional.",
      icon: "👁️",
    },
    {
      title: "Audiometria com Reforço Visual (VRA)",
      desc: "Para crianças de 6 meses a 2 anos",
      detail: "Técnica lúdica que usa reforço visual para avaliar a audição. Adaptada ao desenvolvimento da criança.",
      icon: "🎠",
    },
    {
      title: "Audiometria Lúdica Condicionada",
      desc: "Para crianças a partir de 2 anos",
      detail: "Avaliação através de jogos e atividades. Determina limiares auditivos de forma divertida e precisa.",
      icon: "🎮",
    },
  ],
  pac: [
    {
      title: "Avaliação do Processamento Auditivo Central",
      desc: "Para crianças a partir de 7 anos",
      detail: "Avalia como o cérebro processa e interpreta os sons. Indicado para dificuldades de compreensão, queixas escolares, trocas fonêmicas e suspeita de TPAC.",
      icon: "🧩",
    },
    {
      title: "Bateria Completa de Testes PAC",
      desc: "Testes dicóticos, monóticos e temporais",
      detail: "Avaliação criteriosa e individualizada com integração dos achados audiológicos, escolares e clínicos. Relatório técnico com orientações terapêuticas.",
      icon: "📋",
    },
  ],
  medico: [
    {
      title: "Consulta em Otorrinolaringologia",
      desc: "Avaliação clínica integrada",
      detail: "Investigação etiológica das alterações auditivas. Solicitação de exames complementares. Planejamento terapêutico e seguimento longitudinal.",
      icon: "👨‍⚕️",
    },
    {
      title: "Devolutiva Diagnóstica Integrada",
      desc: "Médico + Fonoaudiólogo juntos",
      detail: "Modelo assistencial diferenciado. Linguagem clara e acolhedora. Explicação do diagnóstico, prognóstico e plano de cuidado com suporte emocional à família.",
      icon: "💬",
    },
    {
      title: "Follow-up Auditivo de Bebês de Risco",
      desc: "Monitoramento seriado",
      detail: "Acompanhamento mesmo após triagem normal para bebês com fatores de risco. Conforme recomendações internacionais do Joint Committee on Infant Hearing.",
      icon: "📅",
    },
  ],
};

export default function ExamesSection() {
  const [activeCategory, setActiveCategory] = useState("neonatal");

  return (
    <section id="exames" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
            <span className="font-nunito font-700 text-sm text-[#6B90C4] uppercase tracking-widest">
              Nossos Serviços
            </span>
            <div className="w-8 h-0.5 bg-[#F4C62F]" />
          </div>
          <h2 className="font-nunito font-900 text-3xl md:text-4xl lg:text-5xl text-[#2C3E50] mb-4">
            Todos os exames auditivos
            <br />
            <span className="text-[#94B1DA]">em um único lugar</span>
          </h2>
          <p className="font-lato text-lg text-[#718096] max-w-2xl mx-auto">
            Da triagem neonatal ao diagnóstico avançado, oferecemos cuidado completo e contínuo para a saúde auditiva do seu filho.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`interactive-hover flex items-center gap-2 px-4 py-2.5 rounded-full font-nunito font-700 text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#94B1DA] text-white shadow-lg scale-105"
                  : "bg-[#EEF4FB] text-[#6B90C4] hover:bg-[#94B1DA]/20"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Exames Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {(exames[activeCategory] || []).map((exame, i) => (
            <div
              key={exame.title}
              className="reveal card-hover group bg-white border border-[#94B1DA]/20 rounded-3xl p-6 hover:border-[#94B1DA]/60"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4FB] flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#94B1DA]/20 transition-colors">
                  {exame.icon}
                </div>
                <div>
                  <h3 className="font-nunito font-800 text-[#2C3E50] text-base leading-tight">
                    {exame.title}
                  </h3>
                  <p className="font-lato text-xs text-[#94B1DA] font-bold mt-1">{exame.desc}</p>
                </div>
              </div>
              <p className="font-lato text-sm text-[#718096] leading-relaxed">{exame.detail}</p>
            </div>
          ))}
        </div>

        {/* Bottom feature strip */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#EEF4FB] rounded-3xl overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <img src={HEADPHONE_ICON} alt="" className="w-10 h-10 object-contain" />
              <span className="font-nunito font-800 text-[#94B1DA] text-sm uppercase tracking-wide">Diferencial AudioBaby</span>
            </div>
            <h3 className="font-nunito font-900 text-2xl md:text-3xl text-[#2C3E50] mb-4">
              Exames em sono espontâneo,
              <span className="text-[#94B1DA]"> sem sedação</span>
            </h3>
            <p className="font-lato text-[#4A5568] leading-relaxed mb-6">
              Nosso ambiente é preparado especialmente para o sono natural do bebê. Sem pressa, sem pressão. Respeitamos o ritmo do seu filho para garantir resultados precisos e uma experiência tranquila para toda a família.
            </p>
            <ul className="space-y-2">
              {[
                "Ambiente silencioso, climatizado e humanizado",
                "Agendamentos flexíveis com tempo ampliado",
                "Relatórios integrados médico-fonoaudiológicos",
                "Comunicação ética, clara e empática",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 font-lato text-sm text-[#4A5568]">
                  <ChevronRight size={14} className="text-[#F4C62F] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px]">
            <img
              src={TRIAGEM_IMG}
              alt="Triagem auditiva neonatal na AudioBaby"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
