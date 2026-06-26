export type ExamCategoryId =
  | "neonatal"
  | "diagnostico"
  | "comportamental"
  | "pac"
  | "medico";

export type Exam = {
  title: string;
  desc: string;
  detail: string;
  icon: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
  takeaways: string[];
};

export const examCategories: Array<{
  id: ExamCategoryId;
  label: string;
  icon: string;
}> = [
  { id: "neonatal", label: "Recém-nascidos", icon: "👶" },
  { id: "diagnostico", label: "Diagnóstico Avançado", icon: "🔬" },
  { id: "comportamental", label: "Avaliação Comportamental", icon: "🎯" },
  { id: "pac", label: "Processamento Auditivo", icon: "🧠" },
  { id: "medico", label: "Atendimento Médico", icon: "🩺" },
];

export const exames: Record<ExamCategoryId, Exam[]> = {
  neonatal: [
    {
      title: "Triagem Auditiva Neonatal Universal",
      desc: "Emissões Otoacústicas Evocadas (EOAT e EOAPD) + Imitanciometria Pediátrica",
      detail:
        "Para recém-nascidos sem fatores de risco. Exame rápido, indolor e realizado durante o sono natural do bebê.",
      icon: "👂",
    },
    {
      title: "Triagem Auditiva Neonatal Ampliada",
      desc: "EOAs + PEATE Automático (BERA automático) + Imitanciometria Pediátrica",
      detail:
        "Para bebês com fatores de risco: UTI neonatal, prematuridade, infecções congênitas, hiperbilirrubinemia e histórico familiar.",
      icon: "🔊",
    },
  ],
  diagnostico: [
    {
      title: "PEATE / BERA Diagnóstico",
      desc: "Potencial Evocado Auditivo de Tronco Encefálico",
      detail:
        "Realizado preferencialmente em sono espontâneo. Estima limiares auditivos por frequência e ajuda a diferenciar tipos de perda auditiva.",
      icon: "📈",
    },
    {
      title: "PEAEE / ASSR",
      desc: "Potencial Evocado Auditivo de Estado Estável",
      detail:
        "Estimativa objetiva de limiares auditivos por frequência. Complementa o PEATE na avaliação de perdas severas e profundas.",
      icon: "📊",
    },
    {
      title: "Imitanciometria Pediátrica",
      desc: "Avaliação da orelha média com sonda de 1000 Hz",
      detail:
        "Timpanometria e pesquisa de reflexos acústicos em lactentes. Ajuda a diferenciar alterações condutivas e neurossensoriais.",
      icon: "👂🏼",
    },
  ],
  comportamental: [
    {
      title: "Audiometria de Observação Comportamental",
      desc: "Para bebês de 0 a 6 meses",
      detail:
        "Avalia respostas comportamentais aos sons e correlaciona achados objetivos com o desempenho auditivo funcional.",
      icon: "👁️",
    },
    {
      title: "Audiometria com Reforco Visual (VRA)",
      desc: "Para crianças de 6 meses a 2 anos",
      detail:
        "Técnica lúdica que usa reforço visual para avaliar a audição de acordo com a fase de desenvolvimento da criança.",
      icon: "🎠",
    },
    {
      title: "Audiometria Lúdica Condicionada",
      desc: "Para crianças a partir de 2 anos",
      detail:
        "Avaliação com jogos e atividades para determinar limiares auditivos de forma precisa e acolhedora.",
      icon: "🎮",
    },
  ],
  pac: [
    {
      title: "Avaliação do Processamento Auditivo Central",
      desc: "Para crianças a partir de 7 anos",
      detail:
        "Avalia como o cérebro processa sons. Indicada em queixas escolares, dificuldade de compreensão e suspeita de TPAC.",
      icon: "🧩",
    },
    {
      title: "Bateria Completa de Testes PAC",
      desc: "Testes dicóticos, monóticos e temporais",
      detail:
        "Avaliação individualizada com integração dos achados audiológicos, escolares e clínicos, seguida de orientações terapêuticas.",
      icon: "📋",
    },
  ],
  medico: [
    {
      title: "Consulta Médica Complementar",
      desc: "Avaliação clínica integrada",
      detail:
        "Investigação etiológica das alterações auditivas e dos distúrbios de linguagem, com planejamento terapêutico e seguimento.",
      icon: "👨‍⚕️",
    },
    {
      title: "Devolutiva Integrada",
      desc: "Médico + fonoaudiólogo juntos",
      detail:
        "Análise conjunta dos achados, relatórios integrados e orientações claras para a família.",
      icon: "💬",
    },
    {
      title: "Consulta Homeopática",
      desc: "Avaliação homeopática integrada",
      detail:
        "Tratamento de suporte para dificuldades de ajuste do ciclo sono-vigília ou apoio emocional no acompanhamento dos filhos.",
      icon: "🌿",
    },
    {
      title: "Follow-up Auditivo de Bebês de Risco",
      desc: "Monitoramento seriado",
      detail:
        "Acompanhamento mesmo após triagem normal quando há fatores de risco, conforme diretrizes nacionais e internacionais.",
      icon: "📅",
    },
  ],
};

export const teamMembers = [
  {
    name: "Dra. Adriana Silveira Santos",
    details:
      "CRM-BA 13.600 | RQE 4886 / 14329 | Médica Otorrinolaringologista | Responsável Técnico | Homeopatia",
    imgSrc: "/imagens/corpoclinico/Adriana.png",
    badge: "+20 anos de atuação em Eletrofisiologia da Audição",
  },
  {
    name: "Dra. Rosa Lima Beltrão Bacellar",
    details:
      "CRM 17.014 - BA | RQE 7.667 | Otorrinolaringologista com experiência em transtornos de linguagem",
    imgSrc: "/imagens/corpoclinico/Rosa.png",
  },
  {
    name: "Dr. Fabio de Alencar Rodrigues Junior",
    details:
      "CRM 39.762 - BA | RQE 2.955 | Otologista | Diagnóstico avançado das perdas auditivas e cirurgia do Implante Coclear.",
    imgSrc: "/imagens/corpoclinico/Fabio.png",
  },
  {
    name: "Dr. Helissandro Andrade Coelho",
    details:
      "CRM 15.264 | RQE 6.277 | Otologista | Diagnóstico avançado das perdas auditivas e cirurgia do Implante Coclear.",
    imgSrc: "/imagens/corpoclinico/Helissandro.jpg",
  },
  {
    name: "Aêdo Santos Cidreira",
    details: "CRFa 7.915 | Processamento Auditivo Central | Audiologista Infantil",
    imgSrc: "/imagens/corpoclinico/Aedo.png",
    badge: "+20 anos de experiência",
  },
  {
    name: "Lucienne Rezende Montalverne",
    details: "CRFa 6.609 | Audiologista infantil",
    imgSrc: "/imagens/corpoclinico/Luciene.png",
    badge: "+20 anos de experiência",
  },
  {
    name: "Pedro Henrique de Macedo",
    details: "CRFa 21.729 | Audiologista Infantil",
    imgSrc: "/imagens/corpoclinico/Pedro.png",
  },
];

export const unidadeImages = [
  "/imagens/unidade/unidade1.jpg",
  "/imagens/unidade/unidade2.jpg",
  "/imagens/unidade/unidade3.jpg",
  "/imagens/unidade/ambiente.jpg",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "triagem-auditiva-neonatal",
    title: "Triagem auditiva neonatal: o que fazer depois do resultado",
    excerpt:
      "Entenda quando repetir a triagem, quando investigar melhor e por que o acompanhamento precoce faz diferença.",
    category: "Triagem",
    readTime: "4 min",
    image: "/imagens/blog/triagem-neonatal.jpg",
    featured: true,
    takeaways: [
      "Falhar na triagem não fecha diagnóstico.",
      "A investigação deve acontecer sem demora.",
      "Bebês com fatores de risco precisam de seguimento mesmo após triagem normal.",
    ],
    content: [
      "A triagem auditiva neonatal é um exame de rastreio. Quando o bebê falha, isso não significa automaticamente perda auditiva. Pode haver interferência de líquido na orelha média, vernix, choro, movimentação ou outros fatores do momento.",
      "O ponto mais importante é não deixar a dúvida se prolongar. As diretrizes nacionais e internacionais trabalham com metas de triagem no primeiro mês de vida, diagnóstico até 3 meses e início da intervenção até 6 meses quando houver confirmação de perda auditiva.",
      "Na AudioBaby, a família recebe orientação clara sobre o próximo passo: repetir a triagem quando indicado, realizar PEATE/BERA diagnóstico, investigar fatores de risco e organizar acompanhamento longitudinal.",
    ],
  },
  {
    slug: "peate-bera-sono-espontaneo",
    title: "PEATE/BERA em sono espontâneo: como preparar o bebê",
    excerpt:
      "Pequenos cuidados antes do exame ajudam a tornar a experiência mais tranquila para o bebê e para a família.",
    category: "Diagnóstico",
    readTime: "3 min",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/bebe_dormindo_exame_214b7618.jpg",
    takeaways: [
      "O exame é indolor e não invasivo.",
      "O sono natural facilita registros mais estáveis.",
      "Sedação só entra quando indicada pela equipe médica.",
    ],
    content: [
      "O PEATE/BERA registra respostas do sistema auditivo por meio de sensores posicionados na pele. Para bebês, a prioridade é realizar o exame durante o sono espontâneo, em ambiente silencioso e com tempo suficiente para respeitar o ritmo da criança.",
      "A preparação costuma envolver ajustes simples na rotina antes do horário marcado, como chegar com tempo, alimentar o bebê perto do início do exame e trazer itens que ajudem no conforto.",
      "Quando a criança não consegue dormir ou quando a equipe avalia que há necessidade clínica, a sedação pode ser discutida. Nesses casos, ela deve acontecer apenas com indicação e acompanhamento médico.",
    ],
  },
  {
    slug: "fatores-de-risco-audicao-bebe",
    title: "Fatores de risco para perda auditiva: quando acompanhar de perto",
    excerpt:
      "Histórico familiar, UTI neonatal e algumas infecções congênitas pedem atenção mesmo quando a triagem inicial passa.",
    category: "Acompanhamento",
    readTime: "5 min",
    image: "/imagens/unidade/ambiente.jpg",
    takeaways: [
      "Triagem normal não encerra todos os casos.",
      "Fatores de risco exigem monitoramento seriado.",
      "A devolutiva integrada ajuda a família a entender prioridades.",
    ],
    content: [
      "Alguns bebês precisam de acompanhamento auditivo mesmo quando passam na primeira triagem. Entre os fatores de risco estão permanência em UTI neonatal, prematuridade, uso de medicamentos ototóxicos, infecções congênitas e histórico familiar de perda auditiva na infância.",
      "O objetivo do follow-up é identificar precocemente perdas auditivas tardias, progressivas ou flutuantes. Essa vigilância permite intervir no tempo certo e proteger o desenvolvimento de linguagem.",
      "O plano ideal depende da história clínica, dos exames já realizados e das necessidades de cada família. Por isso, a AudioBaby integra avaliação fonoaudiológica e médica na devolutiva.",
    ],
  },
  {
    slug: "processamento-auditivo-central",
    title: "Processamento auditivo central: sinais que merecem avaliação",
    excerpt:
      "Dificuldade para entender fala no ruído, queixas escolares e troca de sons podem indicar necessidade de investigação.",
    category: "Crianças",
    readTime: "4 min",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663425486120/CsgP7fCye3TgP32oG6rBBU/fonoaudiologa_crianca_fb5ab1ac.jpg",
    takeaways: [
      "A avaliação é indicada para crianças maiores.",
      "O resultado precisa dialogar com escola, família e clínica.",
      "Nem toda dificuldade escolar é alteração auditiva.",
    ],
    content: [
      "O processamento auditivo central envolve a forma como o cérebro organiza, interpreta e usa as informações sonoras. A criança pode ouvir sons em intensidade normal e, ainda assim, ter dificuldade para compreender fala em ambientes ruidosos.",
      "A avaliação costuma ser indicada a partir de uma idade em que a criança consiga compreender as tarefas. Ela considera testes específicos, queixas da família, desempenho escolar e achados audiológicos básicos.",
      "O resultado não deve ser lido isoladamente. Ele orienta condutas terapêuticas, adaptações e encaminhamentos quando necessário.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
