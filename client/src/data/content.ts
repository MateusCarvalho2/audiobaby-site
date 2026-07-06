export type ExamCategoryId =
  | "neonatal"
  | "diagnostico"
  | "comportamental"
  | "pac"
  | "medico";

export type Exam = {
  slug: string;
  title: string;
  desc: string;
  detail: string;
  icon: string;
  purpose: string[];
  preparation: string[];
  procedure: string[];
  indications: string[];
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
      slug: "triagem-auditiva-neonatal-universal",
      title: "Triagem Auditiva Neonatal Universal",
      desc: "Emissões Otoacústicas Evocadas (EOAT e EOAPD) + Imitanciometria Pediátrica",
      detail:
        "Para recém-nascidos sem fatores de risco. Exame rápido, indolor e realizado durante o sono natural do bebê.",
      icon: "👂",
      purpose: [
        "Rastrear sinais iniciais de alteração auditiva em recém-nascidos.",
        "Ajudar a definir se o bebê pode seguir em acompanhamento habitual ou se precisa repetir/investigar melhor.",
      ],
      preparation: [
        "Trazer o bebê alimentado, confortável e, se possível, em período de sono ou descanso.",
        "Evitar cremes ou óleos na região próxima às orelhas no dia do exame.",
        "Levar documentos, exames anteriores e a caderneta da criança.",
      ],
      procedure: [
        "A equipe posiciona uma pequena sonda na orelha do bebê para captar respostas da cóclea.",
        "Quando indicado, a imitanciometria pediátrica complementa a avaliação da orelha média.",
        "O exame é indolor e costuma ser feito com o bebê dormindo ou tranquilo.",
      ],
      indications: [
        "Recém-nascidos sem fatores de risco conhecidos.",
        "Bebês que precisam concluir ou repetir a triagem auditiva.",
      ],
    },
    {
      slug: "triagem-auditiva-neonatal-ampliada",
      title: "Triagem Auditiva Neonatal Ampliada",
      desc: "EOAs + PEATE Automático (BERA automático) + Imitanciometria Pediátrica",
      detail:
        "Para bebês com fatores de risco: UTI neonatal, prematuridade, infecções congênitas, hiperbilirrubinemia e histórico familiar.",
      icon: "🔊",
      purpose: [
        "Avaliar bebês com maior risco para alterações auditivas.",
        "Combinar rastreio coclear, resposta neural automática e avaliação da orelha média.",
      ],
      preparation: [
        "Planejar a consulta para um horário em que o bebê costume dormir.",
        "Trazer informações da maternidade, UTI neonatal, infecções, medicações e histórico familiar.",
        "Manter a rotina orientada pela equipe no agendamento, principalmente se houver muitos exames no mesmo dia.",
      ],
      procedure: [
        "São realizados testes complementares enquanto o bebê permanece calmo ou dormindo.",
        "Sensores adesivos podem ser usados para registrar respostas auditivas automáticas.",
        "O resultado orienta se há necessidade de diagnóstico completo ou seguimento seriado.",
      ],
      indications: [
        "Prematuridade, UTI neonatal, hiperbilirrubinemia, infecções congênitas ou histórico familiar.",
        "Bebês em que a equipe deseja uma triagem mais abrangente desde o início.",
      ],
    },
  ],
  diagnostico: [
    {
      slug: "peate-bera-diagnostico",
      title: "PEATE / BERA Diagnóstico",
      desc: "Potencial Evocado Auditivo de Tronco Encefálico",
      detail:
        "Realizado preferencialmente em sono espontâneo. Estima limiares auditivos por frequência e ajuda a diferenciar tipos de perda auditiva.",
      icon: "📈",
      purpose: [
        "Estimar limiares auditivos de forma objetiva.",
        "Investigar a integridade da via auditiva até o tronco encefálico.",
        "Apoiar a diferenciação entre alterações condutivas, sensoriais e neurais.",
      ],
      preparation: [
        "Para bebês, chegar com a criança cansada e com possibilidade de dormir durante o exame.",
        "A alimentação costuma ser organizada perto do início do exame, conforme orientação da equipe.",
        "Trazer exames anteriores e relatar medicamentos, intercorrências e dificuldades de sono.",
      ],
      procedure: [
        "Sensores adesivos são posicionados na pele e fones emitem estímulos sonoros controlados.",
        "O equipamento registra respostas elétricas da via auditiva enquanto a criança dorme ou permanece muito quieta.",
        "Quando sono natural não é suficiente, a equipe discute alternativas com orientação médica.",
      ],
      indications: [
        "Falha na triagem auditiva neonatal.",
        "Suspeita de perda auditiva, atraso de linguagem ou necessidade de diagnóstico objetivo.",
        "Monitoramento de bebês com fatores de risco.",
      ],
    },
    {
      slug: "peaee-assr",
      title: "PEAEE / ASSR",
      desc: "Potencial Evocado Auditivo de Estado Estável",
      detail:
        "Estimativa objetiva de limiares auditivos por frequência. Complementa o PEATE na avaliação de perdas severas e profundas.",
      icon: "📊",
      purpose: [
        "Estimar respostas auditivas por frequência de maneira objetiva.",
        "Complementar o PEATE quando é preciso detalhar melhor o grau da perda auditiva.",
      ],
      preparation: [
        "Seguir as mesmas orientações de sono e conforto usadas para exames eletrofisiológicos.",
        "Trazer resultados de PEATE/BERA, emissões otoacústicas e imitanciometria, se houver.",
        "Confirmar previamente se haverá necessidade de tempo ampliado no agendamento.",
      ],
      procedure: [
        "Sensores registram respostas auditivas enquanto estímulos são apresentados por fones.",
        "A análise ajuda a estimar limiares em frequências específicas.",
        "O exame é indolor e exige pouco movimento para registros estáveis.",
      ],
      indications: [
        "Investigação de perdas moderadas, severas ou profundas.",
        "Planejamento de intervenção auditiva quando o PEATE precisa de complementação.",
      ],
    },
    {
      slug: "imitanciometria-pediatrica",
      title: "Imitanciometria Pediátrica",
      desc: "Avaliação da orelha média com sonda de 1000 Hz",
      detail:
        "Timpanometria e pesquisa de reflexos acústicos em lactentes. Ajuda a diferenciar alterações condutivas e neurossensoriais.",
      icon: "👂🏼",
      purpose: [
        "Avaliar o funcionamento da orelha média.",
        "Identificar sinais de líquido, pressão alterada ou outras condições que podem interferir na audição.",
      ],
      preparation: [
        "Não exige jejum nem sedação.",
        "O bebê ou a criança precisa estar o mais tranquilo possível por alguns minutos.",
        "Informar se houve otite recente, secreção, febre ou uso de medicação.",
      ],
      procedure: [
        "Uma pequena sonda é posicionada na entrada do ouvido.",
        "O equipamento varia suavemente a pressão e registra a resposta da orelha média.",
        "Em lactentes, a sonda de 1000 Hz pode ser usada conforme a idade e a indicação clínica.",
      ],
      indications: [
        "Suspeita de alteração condutiva ou otite média.",
        "Complemento de triagem, PEATE/BERA e avaliação audiológica infantil.",
      ],
    },
  ],
  comportamental: [
    {
      slug: "audiometria-observacao-comportamental",
      title: "Audiometria de Observação Comportamental",
      desc: "Para bebês de 0 a 6 meses",
      detail:
        "Avalia respostas comportamentais aos sons e correlaciona achados objetivos com o desempenho auditivo funcional.",
      icon: "👁️",
      purpose: [
        "Observar respostas do bebê a estímulos sonoros.",
        "Relacionar achados objetivos com comportamento auditivo funcional.",
      ],
      preparation: [
        "Trazer o bebê descansado e alimentado, mantendo itens de conforto por perto.",
        "Evitar horários em que a criança esteja muito irritada ou com sono extremo, quando possível.",
        "Informar respostas auditivas percebidas em casa.",
      ],
      procedure: [
        "A equipe apresenta sons controlados e observa mudanças comportamentais.",
        "Podem ser analisadas reações como atenção, pausa, susto ou busca pelo som.",
        "O resultado é interpretado junto com idade, desenvolvimento e outros exames.",
      ],
      indications: [
        "Bebês pequenos que precisam de avaliação funcional da audição.",
        "Acompanhamento de desenvolvimento auditivo e correlação com exames objetivos.",
      ],
    },
    {
      slug: "audiometria-reforco-visual-vra",
      title: "Audiometria com Reforco Visual (VRA)",
      desc: "Para crianças de 6 meses a 2 anos",
      detail:
        "Técnica lúdica que usa reforço visual para avaliar a audição de acordo com a fase de desenvolvimento da criança.",
      icon: "🎠",
      purpose: [
        "Estimar respostas auditivas em crianças pequenas por meio de uma tarefa lúdica.",
        "Avaliar como a criança detecta sons em diferentes intensidades.",
      ],
      preparation: [
        "A criança deve vir descansada e alimentada.",
        "Trazer chupeta, mamadeira, brinquedo pequeno ou outro item de conforto, se fizer parte da rotina.",
        "Evitar explicar o exame como algo difícil; a proposta é brincar e responder aos sons.",
      ],
      procedure: [
        "A criança aprende a procurar uma imagem ou brinquedo luminoso quando percebe o som.",
        "A equipe apresenta estímulos em caixas acústicas ou fones, conforme a idade e tolerância.",
        "O exame pode precisar de pausas para manter a criança confortável.",
      ],
      indications: [
        "Crianças que já sustentam atenção e procuram a fonte sonora.",
        "Investigação de audição em lactentes maiores e crianças pequenas.",
      ],
    },
    {
      slug: "audiometria-ludica-condicionada",
      title: "Audiometria Lúdica Condicionada",
      desc: "Para crianças a partir de 2 anos",
      detail:
        "Avaliação com jogos e atividades para determinar limiares auditivos de forma precisa e acolhedora.",
      icon: "🎮",
      purpose: [
        "Determinar limiares auditivos com participação ativa da criança.",
        "Transformar a resposta ao som em uma tarefa simples, como encaixar ou jogar uma peça.",
      ],
      preparation: [
        "Explicar que será uma brincadeira com sons, sem criar pressão por acerto.",
        "Trazer óculos, medicamentos ou informações relevantes sobre atenção e desenvolvimento.",
        "Evitar prometer duração fixa, pois o ritmo depende da colaboração da criança.",
      ],
      procedure: [
        "A criança é condicionada a realizar uma ação quando escuta o som.",
        "Os estímulos são apresentados em intensidades e frequências diferentes.",
        "A avaliação pode ser adaptada com pausas e reforços positivos.",
      ],
      indications: [
        "Crianças a partir de aproximadamente 2 anos, conforme maturidade e colaboração.",
        "Queixas de fala, escola, atenção, otites recorrentes ou suspeita de perda auditiva.",
      ],
    },
  ],
  pac: [
    {
      slug: "avaliacao-processamento-auditivo-central",
      title: "Avaliação do Processamento Auditivo Central",
      desc: "Para crianças a partir de 7 anos",
      detail:
        "Avalia como o cérebro processa sons. Indicada em queixas escolares, dificuldade de compreensão e suspeita de TPAC.",
      icon: "🧩",
      purpose: [
        "Investigar como o sistema nervoso organiza e interpreta informações sonoras.",
        "Avaliar habilidades como escuta no ruído, integração binaural e aspectos temporais da audição.",
      ],
      preparation: [
        "A criança deve estar descansada e alimentada.",
        "Trazer avaliação audiológica básica recente, relatórios escolares e queixas da família.",
        "Informar diagnóstico, medicações, dificuldades de atenção, linguagem ou aprendizagem.",
      ],
      procedure: [
        "São aplicados testes auditivos comportamentais em ambiente controlado.",
        "A criança precisa compreender instruções e responder a diferentes tarefas sonoras.",
        "O resultado é integrado com história clínica, escola e outros profissionais quando necessário.",
      ],
      indications: [
        "Dificuldade de entender fala no ruído.",
        "Queixas escolares, desatenção auditiva, trocas de sons ou necessidade de repetição frequente.",
      ],
    },
    {
      slug: "bateria-completa-testes-pac",
      title: "Bateria Completa de Testes PAC",
      desc: "Testes dicóticos, monóticos e temporais",
      detail:
        "Avaliação individualizada com integração dos achados audiológicos, escolares e clínicos, seguida de orientações terapêuticas.",
      icon: "📋",
      purpose: [
        "Mapear diferentes habilidades do processamento auditivo central.",
        "Gerar orientações para família, escola e intervenção terapêutica quando indicada.",
      ],
      preparation: [
        "Trazer exames auditivos anteriores e relatórios de fonoaudiologia, psicopedagogia, neurologia ou escola.",
        "Garantir que a criança esteja descansada e com alimentação habitual.",
        "Confirmar com a equipe se a avaliação será feita em uma ou mais etapas.",
      ],
      procedure: [
        "A bateria é escolhida conforme idade, queixa e capacidade de resposta.",
        "Podem ser usados testes com fala no ruído, escuta dicótica, padrões sonoros e tarefas temporais.",
        "A devolutiva explica o perfil encontrado e os próximos passos.",
      ],
      indications: [
        "Suspeita de Transtorno do Processamento Auditivo Central.",
        "Necessidade de relatório detalhado para planejamento terapêutico e escolar.",
      ],
    },
  ],
  medico: [
    {
      slug: "consulta-medica-complementar",
      title: "Consulta Médica Complementar",
      desc: "Avaliação clínica integrada",
      detail:
        "Investigação etiológica das alterações auditivas e dos distúrbios de linguagem, com planejamento terapêutico e seguimento.",
      icon: "👨‍⚕️",
      purpose: [
        "Integrar sintomas, história clínica, exame físico e achados audiológicos.",
        "Investigar possíveis causas e definir conduta médica quando necessário.",
      ],
      preparation: [
        "Trazer exames auditivos, relatórios, receitas e informações da gestação, parto e desenvolvimento.",
        "Listar medicamentos em uso, alergias e cirurgias anteriores.",
        "Anotar dúvidas principais para aproveitar melhor a consulta.",
      ],
      procedure: [
        "O médico revisa a história clínica e os exames disponíveis.",
        "A avaliação pode incluir exame otorrinolaringológico e solicitação de exames complementares.",
        "A conduta é explicada à família com prioridade para segurança e clareza.",
      ],
      indications: [
        "Alterações auditivas confirmadas ou suspeitas.",
        "Atraso de linguagem, otites recorrentes, fatores de risco ou necessidade de avaliação integrada.",
      ],
    },
    {
      slug: "devolutiva-integrada",
      title: "Devolutiva Integrada",
      desc: "Médico + fonoaudiólogo juntos",
      detail:
        "Análise conjunta dos achados, relatórios integrados e orientações claras para a família.",
      icon: "💬",
      purpose: [
        "Traduzir resultados técnicos em um plano claro para a família.",
        "Integrar a visão médica e fonoaudiológica quando o caso exige decisões conjuntas.",
      ],
      preparation: [
        "Levar todos os exames realizados e dúvidas anotadas.",
        "Se possível, trazer informações de escola, terapeutas ou outros profissionais envolvidos.",
        "Separar tempo para discutir próximos passos e acompanhamento.",
      ],
      procedure: [
        "A equipe revisa os achados e explica o significado clínico dos resultados.",
        "São discutidas prioridades, encaminhamentos e necessidade de seguimento.",
        "A família sai com orientações organizadas e linguagem acessível.",
      ],
      indications: [
        "Casos com múltiplos exames ou resultados que precisam ser integrados.",
        "Famílias que precisam entender condutas, prioridades e plano de acompanhamento.",
      ],
    },
    {
      slug: "consulta-homeopatica",
      title: "Consulta Homeopática",
      desc: "Avaliação homeopática integrada",
      detail:
        "Tratamento de suporte para dificuldades de ajuste do ciclo sono-vigília ou apoio emocional no acompanhamento dos filhos.",
      icon: "🌿",
      purpose: [
        "Oferecer avaliação de suporte dentro de um cuidado médico integrado.",
        "Apoiar questões de rotina, sono e bem-estar emocional quando a indicação for adequada.",
      ],
      preparation: [
        "Trazer histórico clínico, medicamentos em uso e principais queixas da rotina.",
        "Anotar padrões de sono, alimentação, comportamento e fatores que pioram ou melhoram os sintomas.",
        "Informar acompanhamento com outros profissionais.",
      ],
      procedure: [
        "A consulta considera história clínica, rotina e contexto familiar.",
        "A conduta é individualizada e explicada à família.",
        "Quando necessário, o cuidado é articulado com outras avaliações médicas ou fonoaudiológicas.",
      ],
      indications: [
        "Famílias que buscam suporte médico complementar dentro do acompanhamento.",
        "Situações em que a equipe identifica possibilidade de abordagem integrada.",
      ],
    },
    {
      slug: "follow-up-auditivo-bebes-risco",
      title: "Follow-up Auditivo de Bebês de Risco",
      desc: "Monitoramento seriado",
      detail:
        "Acompanhamento mesmo após triagem normal quando há fatores de risco, conforme diretrizes nacionais e internacionais.",
      icon: "📅",
      purpose: [
        "Acompanhar bebês com risco de perda auditiva tardia, progressiva ou flutuante.",
        "Identificar mudanças auditivas no tempo certo para orientar intervenção.",
      ],
      preparation: [
        "Trazer resultados de triagem, internação, exames laboratoriais e relatórios médicos.",
        "Informar intercorrências desde a última avaliação.",
        "Manter o calendário de retorno definido pela equipe.",
      ],
      procedure: [
        "A equipe define exames e intervalos de acompanhamento conforme fatores de risco.",
        "Podem ser repetidos testes objetivos, comportamentais e avaliação médica.",
        "Os resultados são comparados ao longo do tempo para detectar mudanças.",
      ],
      indications: [
        "Prematuridade, UTI neonatal, infecções congênitas, histórico familiar ou outros fatores de risco.",
        "Bebês que passaram na triagem, mas precisam de vigilância auditiva longitudinal.",
      ],
    },
  ],
};

export const allExams = Object.values(exames).flat();

export function getExam(slug: string) {
  return allExams.find(exam => exam.slug === slug);
}

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
      "CRM 17.014 - BA | RQE 7.667 | Otorrinolaringologista | com experiência em transtornos de linguagem",
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
    details:
      "CRFa 7.915 | Processamento Auditivo Central | Audiologista Infantil",
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
  "/imagens/unidade/ambiente.jpg",
  "/imagens/unidade/unidade2.jpg",
  "/imagens/unidade/unidade3.jpg",
  "/imagens/unidade/unidade1.jpg",
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
  return blogPosts.find(post => post.slug === slug);
}
