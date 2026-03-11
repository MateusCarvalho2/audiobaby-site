# Ideas de Design — Site AudioBaby

## Contexto
Site institucional da AudioBaby, clínica de audiologia infantil. Público-alvo: mães de bebês e crianças. Tom: acolhedor, confiante, especializado mas humano. Paleta oficial: Amarelo #F4C62F e Azul bebê #94B1DA.

---

<response>
<text>
**Abordagem 1 — "Cuidado em Movimento" (Organic Warmth + Scientific Precision)**

**Design Movement:** Biomorphic Modernism — formas orgânicas encontram precisão clínica.

**Core Principles:**
- Curvas suaves e formas arredondadas que evocam segurança e acolhimento
- Contraste entre a leveza do azul bebê e a energia do amarelo dourado
- Tipografia com personalidade: display arredondada para títulos, serif humanista para corpo
- Micro-animações que imitam ondas sonoras e batimentos cardíacos

**Color Philosophy:**
Azul bebê (#94B1DA) como cor dominante de fundo em seções alternadas, criando uma sensação de calma e confiança. Amarelo dourado (#F4C62F) como cor de ação e destaque, trazendo energia e esperança. Branco puro para espaços de respiro. Tons de creme (#FFF8F0) para seções de depoimentos.

**Layout Paradigm:**
Seções com formas recortadas em diagonal suave (clip-path), criando fluxo visual contínuo. Hero assimétrico com imagem à direita e texto à esquerda. Cards com bordas arredondadas extremas. Elementos gráficos (ondas sonoras) como divisores de seção.

**Signature Elements:**
- Onda sonora animada como elemento decorativo recorrente
- Padrão de bolinhas/pontos em azul claro como textura de fundo
- Ícones amarelos dos grafismos da marca flutuando com animação suave

**Interaction Philosophy:**
Scroll suave com fade-in de elementos. Hover nos cards com elevação sutil. CTA de WhatsApp flutuante com pulso animado.

**Animation:**
- Entrada de elementos: fade-up com 0.3s delay escalonado
- Onda sonora: animação SVG contínua e suave
- Cards de serviços: scale(1.02) no hover com shadow aumentando
- Hero: parallax suave na imagem de fundo

**Typography System:**
- Títulos: Nunito (arredondada, amigável, moderna) — peso 700/800
- Corpo: Lato (humanista, legível) — peso 400/500
- Destaque: Nunito 900 para frases do manifesto
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Abordagem 2 — "Clareza que Acolhe" (Editorial Warmth)**

**Design Movement:** Warm Editorial — jornalismo de saúde encontra design editorial contemporâneo.

**Core Principles:**
- Layout editorial com colunas assimétricas e hierarquia tipográfica forte
- Fotografias grandes e impactantes como protagonistas
- Espaço em branco generoso como elemento de luxo e confiança
- Textura sutil de papel/grain para humanizar o digital

**Color Philosophy:**
Fundo creme/off-white (#FAFAF8) como base quente. Azul bebê como cor de seções de destaque. Amarelo dourado apenas para CTAs e elementos de ação. Texto em cinza escuro quente (#2D2D2D) para máxima legibilidade.

**Layout Paradigm:**
Grid editorial com colunas de larguras variadas. Imagens que "sangram" para fora dos containers. Títulos grandes que ocupam toda a largura. Seções alternando fundo branco e azul claro.

**Signature Elements:**
- Números grandes em amarelo como decoração de seções
- Linha horizontal em amarelo como separador de seções
- Citações do manifesto em destaque tipográfico

**Interaction Philosophy:**
Transições de página suaves. Imagens com zoom suave no hover. Scroll reveal com fade lateral.

**Animation:**
- Scroll reveal: slide-in da esquerda/direita alternado
- Imagens: zoom out suave (scale 1.05 → 1.0) ao entrar na viewport
- Números: counter animation ao aparecer
- Botões: fill animation no hover

**Typography System:**
- Títulos: Playfair Display (elegante, editorial) — peso 700
- Corpo: Source Sans Pro (legível, neutro) — peso 400
- Citações: Playfair Display Italic — peso 400
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Abordagem 3 — "Primeiro Som" (Playful Science)**

**Design Movement:** Scientific Playfulness — rigor científico com alma infantil.

**Core Principles:**
- Elementos gráficos da marca (ondas, apito, headphones) como protagonistas decorativos
- Seções com fundo em xadrez azul/branco (referência direta aos grafismos da marca)
- Tipografia bold e arredondada que remete ao logo
- Animações que imitam ondas sonoras e pulsos de áudio

**Color Philosophy:**
Azul bebê (#94B1DA) e amarelo (#F4C62F) em uso mais ousado — blocos de cor sólida alternados. Fundo branco puro para contraste máximo. Gradiente suave de azul para branco em seções de transição.

**Layout Paradigm:**
Blocos de conteúdo com formas geométricas (quadrados, retângulos) em xadrez, inspirados diretamente nos grafismos da marca. Hero com divisão 50/50 vertical. Cards com fundo colorido sólido.

**Signature Elements:**
- Padrão xadrez azul/branco como elemento de fundo recorrente
- Ícones amarelos grandes como ilustrações de seções
- Onda sonora como elemento de transição entre seções

**Interaction Philosophy:**
Animações mais expressivas e lúdicas. Elementos que "pulam" ao aparecer. Cursor customizado com onda sonora.

**Animation:**
- Entrada: bounce suave (spring animation)
- Ícones: rotate e scale no hover
- Onda sonora: animação de pulso contínuo
- Seções: slide-up com overshoot

**Typography System:**
- Títulos: Nunito Extra Bold (800/900) — arredondada como o logo
- Corpo: Nunito Regular (400/500)
- Destaque: Nunito Black (900) para números e stats
</text>
<probability>0.09</probability>
</response>

---

## Design Escolhido: Abordagem 1 — "Cuidado em Movimento"

Esta abordagem equilibra melhor o tom emocional do manifesto (acolhimento, cuidado, segurança) com a credibilidade científica necessária para uma clínica médica. As formas orgânicas e curvas suaves comunicam segurança para as mães, enquanto a precisão das animações de onda sonora reforça a especialização técnica.

**Fontes:** Nunito (títulos) + Lato (corpo) via Google Fonts
**Cores principais:** #94B1DA (azul), #F4C62F (amarelo), #FFFFFF (branco), #FFF8F0 (creme)
