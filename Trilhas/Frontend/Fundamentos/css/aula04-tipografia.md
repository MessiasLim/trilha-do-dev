# Guia Didático de Tipografia em CSS 

## 1) font-family (Família de Fontes)

```css
.ff-sans {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.ff-serif {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.ff-mono {
  font-family: 'SFMono-Regular', Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace;
}
```

**Explicação:**
- `font-family` define qual fonte será usada para renderizar o texto. O valor é uma **lista ordenada** de fontes: o navegador tenta usar a primeira disponível no sistema do usuário e só recorre à próxima da lista se a anterior não existir.
- `.ff-sans` é uma stack de fontes sem serifa (sans-serif) que prioriza a fonte nativa do sistema operacional (`system-ui`, `-apple-system`) antes de cair em fontes como `Segoe UI` (Windows) ou `Roboto` (Android/Chrome OS), terminando na família genérica `sans-serif` como último recurso garantido.
- `.ff-serif` prioriza fontes com serifa, como `Georgia` e `Times New Roman`.
- `.ff-mono` prioriza fontes monoespaçadas, comuns para exibir código.
- Todas terminam com uma **família genérica** (`sans-serif`, `serif`, `monospace`) — essa é a garantia final: mesmo que nenhuma fonte específica esteja disponível, o navegador sempre tem uma fonte genérica correspondente instalada.

**Por que usar fallbacks (segundo o guia):**
- Evita mudanças bruscas de layout caso a webfont falhe ao carregar.
- Melhora a performance percebida, já que o sistema usa uma fonte já disponível imediatamente, sem esperar o download de uma fonte externa.

**Quando usar:** sempre — toda declaração de `font-family` deveria terminar em uma família genérica, garantindo que o texto nunca fique sem estilo algum.

---

## 2) font-size (Tamanho da Fonte)

```css
:root {
  font-size: 16px; /* base: 1rem = 16px */
}

.fs-base { font-size: 1rem; }      /* 16px */
.fs-small { font-size: 0.875rem; } /* 14px */
.fs-large { font-size: 1.25rem; }  /* 20px */

/* Tipografia responsiva com clamp() */
.fs-responsive {
  font-size: clamp(1rem, 2.2vw, 1.5rem);
}

/* Unidade `em` (relativa ao elemento pai) */
.card { font-size: 1rem; }
.card .card-title { font-size: 1.25em; } /* 1.25 * 1rem = 1.25rem */
```

**Explicação das unidades:**

| Unidade | Relativa a | Uso recomendado |
|---|---|---|
| `px` | Nada (valor absoluto) | Tamanho preciso, mas menos flexível para acessibilidade |
| `rem` | `font-size` do elemento raiz (`:root`/`html`) | Consistência em todo o projeto |
| `em` | `font-size` do elemento **pai** | Componentes que devem escalar com o contexto |
| `%` | Equivalente a `em` | Porcentagem do tamanho do elemento pai |
| `vw`/`vh` | Dimensões da viewport | Tipografia responsiva |

- `:root { font-size: 16px; }` define a base de todo o sistema de `rem`: a partir daqui, `1rem` sempre equivale a 16px em qualquer lugar do projeto (a menos que o usuário altere as configurações de zoom/fonte do navegador).
- `.fs-responsive` usa `clamp(min, preferred, max)`: o tamanho da fonte cresce proporcionalmente com a largura da viewport (`2.2vw`), mas nunca fica menor que `1rem` nem maior que `1.5rem` — uma forma segura de tipografia responsiva sem precisar de várias media queries.
- `.card .card-title` demonstra o uso de `em`: como `1.25em` é relativo ao `font-size` do elemento pai (`.card`, que é `1rem`), o resultado final é `1.25rem`. Isso é útil em componentes modulares, onde o tamanho interno deve se ajustar automaticamente se o tamanho do componente pai mudar.

**Boas práticas do guia:**
- Definir a base no `html`/`:root` com `font-size` (ex.: `16px`) e usar `rem` para consistência no restante do projeto.
- Evitar usar apenas `px` para todos os tamanhos, pois isso pode prejudicar o zoom e a acessibilidade do navegador.

---

## 3) font-weight (Peso da Fonte)

```css
.fw-normal { font-weight: 400; }
.fw-medium { font-weight: 500; }
.fw-semibold { font-weight: 600; }
.fw-bold { font-weight: 700; }
.fw-extra { font-weight: 800; }

/* Exemplo de uso semântico */
.titulo { font-weight: 700; }
.subtitulo { font-weight: 600; }
```

**Explicação:**
- `font-weight` controla a espessura visual do texto. Pode ser definido por **nome** (`normal` = 400, `bold` = 700) ou por **valor numérico**, de `100` a `900` — quanto maior o número, mais "pesada" (grossa) a fonte.
- O guia demonstra uma escala progressiva de pesos (400, 500, 600, 700, 800), útil para criar hierarquia visual entre diferentes níveis de texto.
- `.titulo` e `.subtitulo` mostram um uso semântico: pesos diferentes reforçam a hierarquia de importância entre título e subtítulo.

**Observação de performance:** webfonts costumam disponibilizar apenas alguns pesos específicos — o guia recomenda solicitar (baixar) apenas os pesos que o projeto realmente usa, para economizar bytes e melhorar o tempo de carregamento.

---

## 4) line-height (Altura da Linha)

```css
.lh-tight { line-height: 1.1; }
.lh-normal { line-height: 1.4; }
.lh-loose { line-height: 1.7; }

.texto-legivel {
  font-size: 1rem;
  line-height: 1.6; /* recomendado para leitura */
}
```

**Explicação:**
- `line-height` controla o espaço vertical entre linhas de texto. Valores comuns incluem números **sem unidade** (recomendado), ou valores fixos em `px`/`rem`.
- Um valor **sem unidade** como `line-height: 1.6` é interpretado como um **multiplicador** do `font-size` atual do próprio elemento — ou seja, se o `font-size` mudar, a altura da linha se ajusta automaticamente na mesma proporção.
- `.texto-legivel` combina `font-size: 1rem` com `line-height: 1.6`, uma combinação recomendada pelo guia especificamente para textos longos e legíveis.

**Diferença entre unitless e valores com unidade:**

| Forma | Comportamento |
|---|---|
| `line-height: 1.6;` (sem unidade) | Multiplica pelo `font-size` do próprio elemento — escala automaticamente |
| `line-height: 24px;` (com unidade) | Valor fixo — pode causar problemas de legibilidade se o `font-size` mudar (ex.: em telas menores) |

**Boas práticas do guia:**
- Preferir valores sem unidade (ex.: `1.4`) para preservar a escalabilidade quando combinado com `em`/`rem`.
- Para textos longos, usar valores entre `1.45` e `1.8` melhora significativamente a legibilidade.

---

## 5) Fontes Externas (Google Fonts) e Carregamento

```html
<!-- Import via <link> no HTML (recomendado) -->
<link rel="preload" href="https://fonts.googleapis.com/..." as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="..."></noscript>

<!-- Exemplo prático usando Inter (Google Fonts) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
```

```css
/* Após incluir o link no HTML, use a família normalmente */
.google-inter {
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}
```

**Explicação:**
- Webfonts (fontes carregadas de um servidor externo, como Google Fonts) adicionam personalidade visual ao projeto, mas têm um custo de performance, já que precisam ser baixadas antes de serem exibidas.
- O guia recomenda a estratégia de **preload + `onload`**: o navegador carrega a fonte com prioridade alta (`preload`), e só a aplica como folha de estilo (`stylesheet`) depois que o download termina, evitando bloquear a renderização inicial da página.
- A tag `<noscript>` garante que a fonte ainda seja carregada normalmente caso o JavaScript esteja desabilitado no navegador do usuário.
- Uma alternativa mais simples (mas com pior performance) é usar `@import` diretamente no CSS: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');` — o guia adverte que essa abordagem é menos performática que o `<link>` no HTML.

**A propriedade `font-display`** controla como a webfont se comporta enquanto está sendo carregada:

| Valor | Comportamento |
|---|---|
| `swap` | Mostra imediatamente uma fonte de fallback, e troca para a webfont assim que ela estiver disponível |
| `block` | Oculta o texto por um curto período enquanto espera a webfont (efeito conhecido como **FOIT** — Flash of Invisible Text) |
| `fallback` | Um meio-termo: uma pequena janela de "block", seguida de "swap" |

**Preload de fonte específica (arquivo próprio, não Google Fonts):**

```html
<link rel="preload" href="/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossorigin>
```

Isso instrui o navegador a começar a baixar o arquivo de fonte o quanto antes, útil para fontes consideradas críticas para a primeira renderização da página.

---

## 6) Unidades e Escalabilidade

```css
/* Exemplo: escalar um componente com base no root */
.component {
  padding: 1rem;
  font-size: 1rem; /* 16px */
}

.component .label {
  font-size: 0.875rem; /* 14px */
}

/* Typography responsive: combinar clamp() com rem */
.hero-title {
  font-size: clamp(1.5rem, 4vw, 3rem); /* min 24px, escala com viewport até 48px */
  line-height: 1.1;
}
```

**Explicação:**
- `.component` usa `rem` tanto para `padding` quanto para `font-size`, garantindo consistência com o tamanho base definido no `:root` (seção 3).
- `.hero-title` usa `clamp()` combinado com `rem`: o tamanho mínimo é `1.5rem` (24px), o preferido escala com `4vw` (4% da largura da viewport), e o máximo é `3rem` (48px) — resultando em um título grande que se adapta suavemente a diferentes tamanhos de tela, sem nunca ficar pequeno demais ou grande demais.

**Recomendação geral do guia:** defina `font-size` no `:root` como base, use `rem` para o layout geral e `em` para componentes que devem escalar de acordo com seu contexto local.

---

## 7) Outras Propriedades Tipográficas

```css
.italic { font-style: italic; }
.small-caps { font-variant: small-caps; }
.letter-spacing-tight { letter-spacing: -0.02em; }
.letter-spacing-wide { letter-spacing: 0.08em; }
.text-transform-upper { text-transform: uppercase; }
.text-transform-cap { text-transform: capitalize; }

/* font-stretch (quando a família suporta) */
.wide { font-stretch: expanded; }
.condensed { font-stretch: condensed; }

/* font-variant-numeric para números legíveis */
.nums-proportional { font-variant-numeric: proportional-nums; }
.nums-tabular { font-variant-numeric: tabular-nums; } /* útil em tabelas/pricing */
```

**Explicação:**
- `font-style: italic` inclina o texto para itálico.
- `font-variant: small-caps` renderiza letras minúsculas como versões menores de maiúsculas, um efeito tipográfico decorativo.
- `letter-spacing` ajusta o espaçamento entre caracteres: valores negativos (`-0.02em`) aproximam as letras; valores positivos (`0.08em`) as afastam — útil, por exemplo, para textos em `uppercase`, que costumam se beneficiar de um espaçamento levemente maior.
- `text-transform` altera a capitalização visual do texto sem alterar o HTML original: `uppercase` deixa tudo maiúsculo, `capitalize` deixa a primeira letra de cada palavra maiúscula.
- `font-stretch` ajusta a largura da fonte (`expanded` para mais larga, `condensed` para mais estreita) — só funciona se a família de fontes escolhida oferecer essas variações.
- `font-variant-numeric: tabular-nums` faz com que todos os números ocupem a **mesma largura**, o que é especialmente útil em tabelas ou listas de preços, evitando que os números "dancem" horizontalmente ao mudar de valor.

---

## 8) Fontes Variáveis (Variable Fonts)

```css
.varfont-regular {
  font-family: 'Inter var', 'Inter', sans-serif;
  font-variation-settings: 'wght' 400; /* peso variável */
}
.varfont-bold {
  font-family: 'Inter var', 'Inter', sans-serif;
  font-variation-settings: 'wght' 700;
}
```

**Explicação:**
- Fontes variáveis (variable fonts) são um formato moderno de fonte que armazena **múltiplas variações** (peso, largura, inclinação etc.) dentro de um único arquivo, em vez de exigir um arquivo separado para cada peso.
- A propriedade `font-variation-settings` permite ajustar esses "eixos" (axes) dinamicamente. No exemplo, o eixo `'wght'` (weight/peso) é ajustado para `400` (regular) ou `700` (bold), usando a mesma família de fonte (`'Inter var'`) em ambos os casos.

**Vantagem prática:** um único arquivo de fonte variável pode substituir vários arquivos estáticos (um para cada peso), reduzindo o número de requisições e, em muitos casos, o tamanho total de download.

---

## 9) Acessibilidade e Legibilidade

```css
.accessible-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #111; /* bom contraste com fundo claro */
}

/* Pequeno exemplo de contraste ruim (evitar) */
.bad-contrast {
  color: #aaaaaa; /* contraste baixo quando em fundo claro */
}
```

**Explicação:**
- `.accessible-text` combina um tamanho de fonte confortável (`1rem` = 16px), uma altura de linha generosa (`1.6`) e uma cor de texto escura (`#111`) — uma combinação que favorece a legibilidade e a acessibilidade.
- `.bad-contrast` é apresentado como um **exemplo do que evitar**: a cor `#aaaaaa` (cinza claro) tem contraste insuficiente quando usada sobre um fundo claro, dificultando a leitura para pessoas com baixa visão.

**Diretrizes de acessibilidade do guia:**
- **Contraste:** manter a relação de contraste recomendada pela WCAG (mínimo de 4.5:1 para texto normal); usar ferramentas como o WebAIM Contrast Checker para validar.
- **Tamanho mínimo:** evitar fontes muito pequenas em texto de leitura corrida — `16px` (`1rem`) é sugerido como uma boa base.
- **Line-height:** aumentar a altura de linha (entre `1.45` e `1.8`) para textos longos, facilitando o acompanhamento visual das linhas.
- **Não depender só de cor:** informações importantes não devem ser comunicadas apenas por cor — é recomendável reforçar com ícones ou texto adicional.

---

## 10) Performance e Melhores Práticas

O guia resume as seguintes recomendações de performance para tipografia:

- Solicitar (baixar) **apenas os pesos e estilos** de fonte que realmente serão usados no projeto.
- Usar `font-display: swap` para reduzir o efeito FOIT (texto invisível durante o carregamento da fonte).
- Pré-carregar fontes críticas usando `<link rel="preload" as="font">`.
- Combinar webfonts com uma stack de **fontes do sistema** como fallback, melhorando a performance percebida enquanto a webfont carrega.
- Preferir formatos modernos de fonte, como **woff2**, que oferecem tamanhos de arquivo menores que formatos mais antigos.

---

## 11) Impacto da Tipografia na Experiência do Usuário (UX)

```css
.ui-heading { font-family: var(--ui-font, system-ui, sans-serif); font-size: 1.75rem; font-weight: 700; line-height: 1.15; }
.ui-subheading { font-size: 1.125rem; font-weight: 600; line-height: 1.3; }
.ui-body { font-size: 1rem; font-weight: 400; line-height: 1.6; }
.ui-meta { font-size: 0.875rem; font-weight: 400; line-height: 1.4; color: #6b6b6b; }
```

**Explicação:** esse conjunto de classes demonstra uma **hierarquia tipográfica** completa, do título (`.ui-heading`, maior e mais pesado) até informações auxiliares (`.ui-meta`, menor, mais leve e com cor mais suave). Cada nível combina tamanho, peso e altura de linha de forma proporcional, criando uma progressão visual clara entre os diferentes tipos de conteúdo.

**Como a tipografia afeta a experiência do usuário, segundo o guia:**

| Aspecto | Impacto |
|---|---|
| **Legibilidade** | Tamanhos, espaçamento e contraste adequados afetam diretamente a facilidade de leitura |
| **Hierarquia** | Variações de tamanho e peso guiam visualmente o usuário entre títulos, subtítulos, corpo e legendas |
| **Tom e personalidade** | A escolha da família tipográfica comunica seriedade, modernidade, diversão, entre outros tons |
| **Performance** | Fontes pesadas atrasam a renderização, prejudicando especialmente usuários com conexões lentas |
| **Acessibilidade** | Escolhas tipográficas responsáveis tornam o conteúdo mais acessível a pessoas com baixa visão, dislexia ou outras necessidades |

---

## 12) Exemplos Práticos Rápidos

```css
.example-1 {
  /* Título de página */
  font-family: 'Inter', system-ui, sans-serif;
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  font-weight: 700;
  line-height: 1.1;
}

.example-2 {
  /* Texto de parágrafo legível */
  font-family: Georgia, serif;
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 400;
}

.example-3 {
  /* Botão */
  font-family: inherit;
  font-size: 0.9375rem; /* 15px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
```

**Explicação:**
- `.example-1` (título de página) combina uma fonte moderna (`Inter`), tamanho responsivo via `clamp()`, peso alto (`700`) e altura de linha compacta (`1.1`), típico de títulos grandes de impacto.
- `.example-2` (parágrafo legível) usa uma fonte com serifa (`Georgia`), tamanho confortável (`1rem`) e altura de linha generosa (`1.7`), priorizando a leitura de textos longos.
- `.example-3` (botão) usa `font-family: inherit` (herda a fonte do contexto ao redor, evitando inconsistências), um tamanho ligeiramente reduzido, peso semi-negrito, tudo em maiúsculas (`uppercase`) com espaçamento de letras levemente aumentado (`0.06em`) — um estilo comum em botões de interface que buscam destaque sem serem grandes demais.

---

## 13) Checklist Rápido para Aplicar Tipografia

- [ ] Defina `:root { font-size }` e use `rem` como unidade base do projeto.
- [ ] Use `line-height` sem unidade (ex.: `1.5`) para textos.
- [ ] Priorize fontes do sistema (`system-ui` e similares) sempre que possível, para maior velocidade.
- [ ] Se usar webfonts: escolha poucos pesos e utilize `font-display: swap`.
- [ ] Teste contraste e legibilidade em dispositivos reais, não apenas no navegador do computador.