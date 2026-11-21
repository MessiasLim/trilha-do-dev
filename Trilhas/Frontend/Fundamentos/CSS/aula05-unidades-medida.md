# Guia Didático de Unidades de Medida Relativas e Absolutas em CSS

## 1) Unidades Absolutas vs. Relativas: a Diferença

```css
/* Absoluta: sempre o mesmo tamanho físico, não muda com o contexto */
.caixa-absoluta {
  width: 300px;
}

/* Relativa: o tamanho depende de uma referência (raiz, pai, viewport etc.) */
.caixa-relativa {
  width: 50%;
}
```

**Explicação:**
- **Unidades absolutas** representam um tamanho fixo, que não se altera dependendo do elemento pai, da tela ou de configurações do usuário (com exceção do zoom do navegador). `px` é a unidade absoluta mais usada no desenvolvimento web.
- **Unidades relativas** calculam seu valor final com base em **algo externo** — pode ser o tamanho da fonte de outro elemento, a largura da tela (viewport), ou a largura de um contêiner pai. O mesmo valor relativo (ex.: `1.5rem`) pode resultar em tamanhos finais diferentes dependendo do contexto em que é usado.

| Aspecto | Unidades absolutas | Unidades relativas |
|---|---|---|
| Exemplo | `px`, `cm`, `pt` | `rem`, `em`, `%`, `vw`, `vh` |
| Muda com o contexto? | Não (exceto zoom) | Sim |
| Ideal para | Bordas finas, sombras, detalhes pequenos | Layouts responsivos, tipografia escalável |
| Acessibilidade | Menos flexível para preferências do usuário | Mais flexível — respeita zoom e preferências de fonte |

---

## 2) Unidades Absolutas

```css
.linha-fina { border-width: 1px; }        /* pixel: a unidade absoluta mais usada na web */

.impressao {
  width: 10cm;    /* centímetro */
  height: 5in;    /* polegada (inch) */
  font-size: 12pt; /* ponto — comum em documentos impressos */
}
```

**Explicação:**

| Unidade | Nome | Uso típico |
|---|---|---|
| `px` | Pixel | A unidade absoluta padrão da web — na prática, os pixels em CSS são "pixels de referência", não pixels físicos exatos da tela, mas se comportam de forma previsível e consistente entre dispositivos |
| `cm` | Centímetro | Praticamente não usada em telas; relevante apenas para estilos de impressão (`@media print`) |
| `mm` | Milímetro | Mesma observação de `cm` — uso quase exclusivo em folhas de estilo de impressão |
| `in` | Polegada | Também voltada para impressão; `1in` equivale a `96px` por definição da especificação CSS |
| `pt` | Ponto | Unidade tradicional de tipografia impressa (`1pt` = `1/72` de polegada); ainda aparece em contextos de geração de PDF |
| `pc` | Pica | Unidade tipográfica antiga, raramente usada em CSS moderno |

**Quando usar `px`:** para detalhes que **não devem** escalar com o restante do layout — bordas finas (`1px solid #ccc`), sombras (`box-shadow`), e ícones de tamanho fixo pequeno, onde uma variação de meio pixel para mais ou para menos poderia prejudicar a nitidez visual.

**Quando usar `cm`/`mm`/`in`/`pt`/`pc`:** quase exclusivamente em folhas de estilo voltadas para **impressão** (`@media print`), onde o tamanho físico do papel é a referência relevante — em telas, essas unidades raramente fazem sentido.

---

## 3) rem — Relativo à Raiz

```css
:root {
  font-size: 16px; /* base do documento: 1rem = 16px */
}

.titulo {
  font-size: 2rem;   /* 2 × 16px = 32px */
}

.texto {
  font-size: 1rem;   /* 16px */
  margin-bottom: 1.5rem; /* 24px */
}
```

**Explicação:**
- `rem` significa **"root em"** — é sempre relativo ao `font-size` do elemento **raiz** do documento (`<html>`, geralmente configurado via `:root`), **independentemente** de onde o elemento estiver na árvore do HTML.
- Como a referência é sempre a mesma (a raiz), `rem` produz resultados **previsíveis e consistentes** em todo o projeto — um `1.5rem` sempre representa o mesmo tamanho final, não importa dentro de quantos elementos aninhados ele esteja.
- No exemplo, com a base de `16px` definida em `:root`, `2rem` resulta em `32px`, e `1.5rem` resulta em `24px`.

**Quando usar:** `rem` é a unidade recomendada como padrão para a maior parte do projeto — tamanhos de fonte, espaçamentos (`margin`, `padding`), e até larguras/alturas em muitos casos — justamente por sua previsibilidade.

---

## 4) em — Relativo ao Elemento Pai

```css
.card {
  font-size: 1rem; /* 16px, referência local do componente */
}

.card .titulo {
  font-size: 1.5em; /* 1.5 × 16px = 24px */
}

.card .titulo .destaque {
  font-size: 1.2em; /* 1.2 × 24px (do .titulo) = 28.8px — acumula! */
}
```

**Explicação:**
- `em` é relativo ao `font-size` do **próprio elemento** (que, por herança, normalmente vem do elemento pai, a menos que o próprio elemento já defina um `font-size` diferente).
- A diferença crucial em relação a `rem`: valores em `em` **se acumulam** (compõem) quando aninhados. No exemplo, `.destaque` está dentro de `.titulo`, que já é `1.5em` do card — então o `1.2em` de `.destaque` é calculado em cima do resultado de `.titulo` (24px), e não em cima da base original do card (16px), resultando em `28.8px`.
- Esse comportamento cumulativo pode ser uma **vantagem** (permite que um componente inteiro escale proporcionalmente ajustando um único `font-size` no elemento raiz do componente) ou uma **armadilha** (tamanhos podem crescer ou encolher de forma inesperada em estruturas profundamente aninhadas).

**Quando usar:** `em` é ideal para propriedades que devem escalar **junto com o texto do próprio elemento** — como `padding` ou `border-radius` de um botão, que fazem mais sentido crescendo proporcionalmente ao tamanho da fonte daquele botão específico, não ao tamanho da fonte de toda a página.

```css
/* Exemplo prático: botão que escala proporcionalmente ao seu próprio font-size */
.btn {
  font-size: 1rem;
  padding: 0.75em 1.5em;   /* escala com o font-size do próprio botão */
  border-radius: 0.3em;
}

.btn--grande {
  font-size: 1.5rem; /* aumentar a fonte já aumenta o padding e o border-radius automaticamente */
}
```

---

## 5) rem vs. em — Comparação Prática

| Aspecto | `rem` | `em` |
|---|---|---|
| Referência | `font-size` da raiz (`:root`/`html`) | `font-size` do próprio elemento (geralmente herdado do pai) |
| Acumula em aninhamentos? | Não — sempre a mesma base | Sim — pode compor com cada nível de aninhamento |
| Previsibilidade | Alta — mesmo valor sempre resulta no mesmo tamanho | Menor — depende do contexto de aninhamento |
| Melhor para | Layout geral do projeto (tipografia, espaçamento global) | Componentes que devem escalar internamente de forma proporcional |

**Recomendação prática:** usar `rem` como padrão para a maior parte do projeto, e reservar `em` para casos específicos em que o efeito de "escalar com o próprio elemento" é intencional e desejado (como no exemplo do botão da seção 5).

---

## 6) Porcentagem (%)

```css
.container {
  width: 800px;
}

.coluna {
  width: 50%; /* 50% de 800px = 400px */
}

.avatar {
  width: 100%;   /* 100% da largura do elemento pai */
  max-width: 80px;
}

.linha-alta {
  height: 100%; /* cuidado: depende da altura do PAI ser definida explicitamente */
}
```

**Explicação:**
- `%` é sempre relativo ao valor correspondente do **elemento pai** — `width: 50%` significa 50% da largura do pai; `height: 50%` significa 50% da **altura** do pai.
- Para `width`, o cálculo geralmente funciona sem complicações, já que a maioria dos elementos de bloco naturalmente ocupa 100% da largura disponível do pai.
- Para `height`, há uma armadilha comum: `height: 100%` só funciona corretamente se o elemento **pai** também tiver uma altura **explicitamente definida** (seja em `px`, `%`, ou `vh`) — se o pai tiver `height: auto` (o padrão, baseado no conteúdo), a porcentagem não tem uma referência válida para calcular, e o resultado pode não ser o esperado.
- `font-size` em porcentagem também é possível (`font-size: 150%`), e se comporta de forma equivalente ao `em` — ambos são relativos ao tamanho de fonte do elemento pai.

**Quando usar:** para larguras fluidas de colunas, imagens responsivas (`width: 100%`) e qualquer situação onde o tamanho deve ser **proporcional** ao contêiner imediato.

---

## 7) Unidades de Viewport (vw, vh, vmin, vmax)

```css
.hero {
  width: 100vw;   /* 100% da largura da viewport (janela do navegador) */
  height: 100vh;  /* 100% da altura da viewport */
}

.titulo-impacto {
  font-size: 8vw; /* cresce proporcionalmente à largura da tela */
}

.quadrado-responsivo {
  width: 20vmin;  /* 20% do MENOR entre largura e altura da viewport */
  height: 20vmin; /* garante que o quadrado nunca "vaze" em telas muito estreitas ou baixas */
}

.banner-grande {
  font-size: 10vmax; /* 10% do MAIOR entre largura e altura da viewport */
}
```

**Explicação:**

| Unidade | Relativa a |
|---|---|
| `vw` | 1% da **largura** da viewport (a área visível da janela do navegador) |
| `vh` | 1% da **altura** da viewport |
| `vmin` | 1% do **menor** valor entre largura e altura da viewport |
| `vmax` | 1% do **maior** valor entre largura e altura da viewport |

- `100vw`/`100vh` fazem um elemento ocupar exatamente a largura/altura total da tela visível — muito usado em seções de destaque (`hero`) que devem preencher a tela inteira.
- `vmin` é especialmente útil para elementos que precisam manter proporções seguras independentemente da orientação do dispositivo: em uma tela larga e baixa (paisagem), `vmin` usa a altura como referência; em uma tela estreita e alta (retrato), usa a largura — sempre a dimensão "limitante".
- `vmax` faz o oposto de `vmin`, sendo menos comum, mas útil para elementos decorativos que devem se destacar sempre em relação à maior dimensão da tela.

**Cuidado com `100vw`:** em muitos navegadores, `100vw` inclui a largura da **barra de rolagem vertical** no cálculo, o que pode fazer o elemento ficar ligeiramente mais largo que a área visível real, causando um scroll horizontal indesejado. Uma alternativa mais segura em muitos casos é usar `width: 100%` no lugar de `100vw` quando o objetivo é apenas preencher o contêiner pai.

---

## 8) Unidades de Viewport Modernas (svh, lvh, dvh)

```css
.tela-cheia-mobile {
  height: 100dvh; /* altura dinâmica da viewport — ajusta com a barra de endereço do navegador mobile */
}
```

**Explicação:**
- Em navegadores móveis, a altura real da tela visível **muda** conforme a barra de endereço aparece ou desaparece (por exemplo, ao rolar a página para baixo). A unidade tradicional `vh` costuma ser calculada com base na altura **máxima** possível, o que pode fazer elementos com `height: 100vh` ficarem parcialmente cobertos pela barra de endereço em alguns momentos.
- Para resolver esse problema, o CSS moderno introduziu três variantes:

| Unidade | Significado |
|---|---|
| `svh` (small viewport height) | Baseada na **menor** altura possível da viewport (quando a barra de endereço está totalmente visível) |
| `lvh` (large viewport height) | Baseada na **maior** altura possível da viewport (quando a barra de endereço está escondida) |
| `dvh` (dynamic viewport height) | Se **ajusta dinamicamente** conforme a barra de endereço aparece/desaparece, sempre refletindo a altura real visível no momento |

**Quando usar:** `dvh` é a opção mais robusta para seções que precisam ocupar exatamente a tela visível em dispositivos móveis, evitando o problema clássico do conteúdo "cortado" pela barra de endereço do navegador.

**Observação de compatibilidade:** essas unidades são relativamente recentes; vale confirmar o suporte necessário para o público-alvo do projeto e, se necessário, usar `vh` como valor de fallback antes da declaração com `dvh`.

---

## 9) ch e ex — Relativas ao Caractere

```css
.paragrafo-legivel {
  max-width: 65ch; /* aproximadamente 65 caracteres por linha — ideal para leitura */
}

.linha-sublinhado {
  border-bottom-width: 0.1ex; /* raramente usado na prática, mas existe */
}
```

**Explicação:**
- `ch` é relativo à largura do caractere **"0" (zero)** na fonte atual do elemento — é uma forma de definir larguras baseadas em **quantidade aproximada de caracteres**, e não em pixels ou porcentagens abstratas.
- `max-width: 65ch` é uma técnica tipográfica clássica: estudos de legibilidade sugerem que linhas de texto muito longas (mais de ~75-80 caracteres) ou muito curtas prejudicam a leitura confortável; usar `ch` permite limitar a largura do texto de forma que continua fazendo sentido mesmo se a fonte mudar de tamanho.
- `ex` é relativo à altura da letra "x" minúscula na fonte atual — é uma unidade bem menos usada na prática do dia a dia, mas ainda faz parte da especificação CSS.

**Quando usar `ch`:** especificamente para controlar a largura de blocos de texto longo (artigos, parágrafos), garantindo uma medida de linha confortável para leitura, independentemente do tamanho de fonte escolhido.

---

## 10) Unidades Sem Valor (Unitless) e Números Puros

```css
.texto-legivel {
  font-size: 1rem;
  line-height: 1.6; /* sem unidade: multiplica pelo font-size do próprio elemento */
}

.icone {
  opacity: 0.8;      /* de 0 a 1, sem unidade */
  z-index: 10;       /* inteiro, sem unidade */
  flex-grow: 2;      /* proporção, sem unidade */
}
```

**Explicação:**
- Nem toda propriedade numérica em CSS exige uma unidade. `line-height`, `opacity`, `z-index` e `flex-grow`/`flex-shrink` são exemplos de propriedades que aceitam (e, em alguns casos, **recomendam**) valores numéricos puros, sem `px`, `%` ou qualquer outra unidade.
- `line-height: 1.6` (sem unidade) é interpretado como um **multiplicador** do `font-size` do próprio elemento — o valor recalcula automaticamente se o `font-size` mudar, diferente de `line-height: 24px`, que fica fixo independentemente do tamanho da fonte.
- `opacity` sempre varia entre `0` (totalmente transparente) e `1` (totalmente opaco), sem necessidade de `%` (embora `opacity: 80%` também seja uma sintaxe válida em CSS moderno).

**Quando usar valores sem unidade:** sempre que a propriedade permitir — no caso de `line-height`, é a prática recomendada pela maioria dos guias de estilo CSS, justamente por preservar a proporcionalidade quando combinado com `em`/`rem`.

---

## 11) calc(), min(), max() e clamp() Combinando Unidades

```css
.sidebar {
  width: calc(100% - 250px); /* mistura porcentagem com valor absoluto */
}

.titulo-flexivel {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* nunca menor que 1.5rem, nunca maior que 3rem, preferencialmente 4vw */
}

.largura-segura {
  width: min(90%, 600px); /* usa o menor valor entre os dois */
}

.padding-generoso {
  padding: max(1rem, 3vw); /* usa o maior valor entre os dois */
}
```

**Explicação:**
- `calc()` permite **misturar unidades diferentes** em uma única expressão matemática — no exemplo, uma sidebar que ocupa toda a largura disponível **menos** 250px fixos (útil quando uma coluna vizinha tem largura fixa e a sidebar deve preencher o restante).
- `clamp(mínimo, preferido, máximo)` define um valor que tenta seguir o "preferido" (frequentemente uma unidade responsiva como `vw`), mas nunca ultrapassa os limites de mínimo e máximo definidos — a técnica mais moderna e recomendada para tipografia e espaçamento verdadeiramente responsivos, muitas vezes eliminando a necessidade de media queries inteiras.
- `min()` retorna o **menor** valor entre as opções fornecidas — no exemplo, a largura do elemento nunca ultrapassa `600px`, mesmo que `90%` da tela seja maior que isso.
- `max()` retorna o **maior** valor entre as opções — no exemplo, o padding nunca fica menor que `1rem`, mesmo em telas muito estreitas onde `3vw` resultaria em um valor menor.

**Quando usar:** essas funções são extremamente poderosas para reduzir a dependência de media queries, permitindo que um único valor se adapte suavemente a diferentes tamanhos de tela, combinando o melhor de unidades absolutas (previsibilidade, limites) e relativas (fluidez).

---

## 12) Quando Usar Cada Unidade

| Situação | Unidade recomendada | Por quê |
|---|---|---|
| Tamanho de fonte de texto geral | `rem` | Consistente com a configuração global de tipografia |
| Espaçamento interno de um componente (padding/border-radius) que deve escalar com o próprio texto | `em` | Escala proporcionalmente ao `font-size` local do componente |
| Largura de coluna dentro de um layout flexível | `%` ou `fr` (em Grid) | Proporcional ao espaço disponível no contêiner |
| Seção que deve ocupar a tela inteira | `vw`/`vh` (ou `dvh` em mobile) | Relativo diretamente ao tamanho da janela |
| Borda fina, sombra, detalhe visual pequeno | `px` | Precisão exata, sem necessidade de escalar |
| Largura máxima de um bloco de texto para leitura confortável | `ch` | Baseado na quantidade de caracteres por linha |
| `line-height`, `opacity`, `z-index`, `flex-grow` | Sem unidade (número puro) | A própria especificação dessas propriedades dispensa unidade |
| Valor que precisa se adaptar suavemente entre um mínimo e um máximo | `clamp()` combinando `rem` + `vw` | Elimina media queries repetitivas para o mesmo efeito |

---

## 13) Acessibilidade e Zoom do Navegador

```css
/* Recomendado: permite que o zoom do navegador funcione corretamente */
.texto-acessivel {
  font-size: 1rem;
  line-height: 1.6;
}

/* Problemático em alguns navegadores/configurações antigas */
.texto-fixo {
  font-size: 16px; /* funciona, mas em alguns navegadores antigos o zoom de "aumentar fonte" (não o zoom geral da página) pode não afetar px */
}
```

**Explicação:**
- Usuários com baixa visão frequentemente configuram o navegador para usar uma **fonte-base maior** do que o padrão de `16px`, ou usam o recurso de zoom do navegador. Quando o layout é construído inteiramente com `rem`/`em` (relativos à raiz), esse ajuste do usuário se propaga corretamente por toda a interface.
- Historicamente, alguns navegadores mais antigos tratavam `px` de forma menos flexível em relação a certas configurações de acessibilidade de fonte (diferente do zoom geral da página, que afeta `px` normalmente) — por isso, `rem` é frequentemente recomendado como prática mais segura para textos, mesmo que a maioria dos navegadores modernos já trate `px` de forma adequada também para o zoom padrão.
- Evitar tamanhos de fonte muito pequenos, independentemente da unidade escolhida, também é uma prática de acessibilidade — `16px` (`1rem`) é frequentemente citado como um bom tamanho mínimo de leitura confortável.

**Recomendação geral:** priorizar `rem` para tipografia sempre que a flexibilidade com preferências do usuário for importante — o que, na prática, é a maioria dos projetos voltados ao público em geral.

---

## 14) Erros Comuns e Como Corrigir

| Erro | Consequência | Correção |
|---|---|---|
| Usar `height: 100%` em um elemento cujo pai não tem altura definida | A porcentagem não tem uma referência válida, resultado pode ser inesperado | Definir a altura do elemento pai explicitamente, ou usar `vh` quando o objetivo for relativo à tela |
| Usar `em` em componentes profundamente aninhados sem perceber o acúmulo | Tamanhos crescem ou encolhem de forma inesperada a cada nível | Usar `rem` quando o acúmulo não é desejado, reservando `em` para escalas intencionais |
| Usar `100vw` para largura total, ignorando a barra de rolagem | Aparece um scroll horizontal indesejado em algumas páginas | Usar `width: 100%` no lugar de `100vw` quando o objetivo é preencher o contêiner pai |
| Fixar `font-size` inteiramente em `px` em todo o projeto | Reduz a flexibilidade para preferências de acessibilidade do usuário | Priorizar `rem` como unidade padrão de tipografia |
| Usar `vh` puro para altura de tela cheia em mobile | Conteúdo pode ficar parcialmente coberto pela barra de endereço do navegador | Usar `dvh` (com fallback em `vh`) quando o suporte do navegador permitir |
| Misturar `px` e `%`/`rem` sem necessidade dentro do mesmo componente | Comportamento de escala inconsistente entre partes do mesmo componente | Manter consistência de unidade dentro de um mesmo componente, usando `calc()` quando realmente for necessário combinar tipos diferentes |

---

## 15) Cheatsheet Rápido

```css
/* Absolutas */
px      /* pixel — padrão da web, não escala */
cm/mm/in/pt/pc  /* voltadas para impressão */

/* Relativas ao texto */
rem     /* relativo ao font-size da raiz (:root) */
em      /* relativo ao font-size do próprio elemento (acumula) */
ch      /* relativo à largura do caractere "0" */
ex      /* relativo à altura da letra "x" minúscula */

/* Relativas ao contêiner */
%       /* relativo ao valor correspondente do elemento pai */

/* Relativas à viewport */
vw      /* 1% da largura da viewport */
vh      /* 1% da altura da viewport */
vmin    /* 1% do menor entre largura e altura */
vmax    /* 1% do maior entre largura e altura */
svh/lvh/dvh /* variantes modernas para viewport mobile dinâmica */

/* Funções que combinam unidades */
calc(100% - 250px)
min(90%, 600px)
max(1rem, 3vw)
clamp(1.5rem, 4vw, 3rem)

/* Sem unidade (números puros) */
line-height: 1.6;
opacity: 0.8;
z-index: 10;
flex-grow: 2;
```

Use esta tabela como referência rápida das unidades de medida mais usadas durante o desenvolvimento em CSS.