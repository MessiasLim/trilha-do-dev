# Guia Didático Completo de Flexbox 

## 1) O que é Flexbox

Flexbox é um modelo de layout **unidimensional**, ideal para distribuir espaço e alinhar itens ao longo de **uma linha ou uma coluna** por vez.

**Quando usar:** para componentes, barras de navegação, galerias de itens, e qualquer layout que precise se ajustar dinamicamente ao espaço disponível — a força do Flexbox está justamente na flexibilidade de redistribuir espaço entre os itens.

---

## 2) Ativando o Flex (Container)

```css
.flex { display: flex; }
.flex-inline { display: inline-flex; } /* comporta-se como inline, mas com layout flex */
```

**Explicação:**
- `display: flex` transforma o elemento em um **contêiner flexível**, fazendo com que todos os seus filhos diretos se tornem "itens flex", organizados automaticamente segundo as regras do modelo.
- `display: inline-flex` faz o mesmo, mas o próprio contêiner se comporta como um elemento `inline` em relação aos elementos ao seu redor (não força quebra de linha), enquanto ainda organiza seus filhos internos como itens flex.

**Conceito de eixos:** o Flexbox opera em dois eixos:

| Eixo | Descrição |
|---|---|
| **Eixo principal** (main axis) | Direção definida por `flex-direction` — é o eixo ao longo do qual os itens são dispostos |
| **Eixo cruzado** (cross axis) | Perpendicular ao eixo principal — é o eixo usado para alinhamento vertical (quando o principal é horizontal, e vice-versa) |

---

## 3) flex-direction

```css
.flex-row { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-column { flex-direction: column; }
.flex-column-reverse { flex-direction: column-reverse; }

/* Exemplo: barra horizontal */
.nav { display: flex; flex-direction: row; gap: 12px; }
```

**Explicação:**

| Valor | Comportamento |
|---|---|
| `row` (padrão) | Eixo principal horizontal; itens dispostos da esquerda para a direita |
| `row-reverse` | Mesma linha, mas com a ordem visual invertida |
| `column` | Eixo principal vertical; itens empilhados de cima para baixo |
| `column-reverse` | Coluna com a ordem invertida (de baixo para cima) |

- `.nav` demonstra o uso mais comum: uma barra horizontal (`flex-direction: row`, que na verdade é o padrão e poderia ser omitido) com espaçamento uniforme entre os itens via `gap`.

**Quando usar cada direção:** `row` para barras de navegação e listas horizontais; `column` para empilhar cards, formulários ou seções verticalmente.

---

## 4) justify-content (Eixo Principal)

```css
.jc-start { justify-content: flex-start; }
.jc-end { justify-content: flex-end; }
.jc-center { justify-content: center; }
.jc-between { justify-content: space-between; }
.jc-around { justify-content: space-around; }
.jc-evenly { justify-content: space-evenly; }

/* Exemplo: usar justify-content para criar espaçamento entre botões */
.toolbar { display: flex; justify-content: space-between; align-items: center; }
```

**Explicação:** `justify-content` controla como os itens são distribuídos ao longo do **eixo principal** (a mesma direção definida por `flex-direction`).

| Valor | Comportamento |
|---|---|
| `flex-start` (padrão) | Itens alinhados ao início do eixo principal |
| `flex-end` | Itens alinhados ao final do eixo principal |
| `center` | Itens centralizados no eixo principal |
| `space-between` | Primeiro e último item colados às bordas; espaço distribuído igualmente entre os itens do meio |
| `space-around` | Espaço distribuído ao redor de cada item (o espaço nas bordas é metade do espaço entre itens) |
| `space-evenly` | Espaços completamente iguais entre todos os itens e também nas bordas |

- `.toolbar` combina `justify-content: space-between` (empurra o primeiro item para a esquerda e o último para a direita, distribuindo o resto) com `align-items: center` (centraliza verticalmente), um padrão extremamente comum em barras de ferramentas e cabeçalhos.

---

## 5) align-items (Eixo Cruzado)

```css
.ai-stretch { align-items: stretch; }
.ai-start { align-items: flex-start; }
.ai-end { align-items: flex-end; }
.ai-center { align-items: center; }
.ai-baseline { align-items: baseline; }

/* Exemplo: itens com alturas iguais (cards) */
.cards { display: flex; gap: 12px; align-items: stretch; }
.card { background: #fff; padding: 12px; border: 1px solid #eee; flex: 1 1 200px; }
```

**Explicação:** `align-items` controla como os itens são alinhados no **eixo cruzado** (perpendicular ao eixo principal).

| Valor | Comportamento |
|---|---|
| `stretch` (padrão) | Estica os itens para preencherem toda a extensão do contêiner no eixo cruzado |
| `flex-start` | Alinha os itens ao início do eixo cruzado |
| `flex-end` | Alinha os itens ao final do eixo cruzado |
| `center` | Centraliza os itens no eixo cruzado |
| `baseline` | Alinha os itens de acordo com a linha de base do texto de cada um |

- `.cards` usa `align-items: stretch` (o valor padrão, mas declarado explicitamente aqui para clareza) para garantir que todos os cards da linha tenham a **mesma altura**, mesmo que o conteúdo interno de cada um seja diferente — um problema comum resolvido de forma simples pelo Flexbox.

---

## 6) gap (Espaçamento Entre Itens)

```css
.gap-sm { gap: 8px; }
.gap-md { gap: 16px; }
.gap-lg { gap: 24px; }
```

**Explicação:**
- `gap` define o espaçamento entre os itens de um contêiner flex (ou grid) de forma limpa, **sem** precisar aplicar `margin` manualmente em cada item individual (o que costuma exigir remover a margem do último item para evitar espaço extra indesejado nas bordas).
- O guia sugere uma escala de três tamanhos (`8px`, `16px`, `24px`), útil como base para um sistema de espaçamento consistente.

**Quando usar:** sempre que precisar de espaçamento uniforme entre itens dentro de um contêiner `flex` ou `grid` — é a abordagem moderna recomendada em substituição a margens manuais.

---

## 7) flex-wrap

```css
.nowrap { flex-wrap: nowrap; }
.wrap { flex-wrap: wrap; }
.wrap-reverse { flex-wrap: wrap-reverse; }

/* Exemplo: grid de cards responsivo com wrap */
.card-grid { display: flex; flex-wrap: wrap; gap: 12px; }
.card-grid .card { flex: 1 1 220px; /* grow shrink basis */ }
```

**Explicação:**

| Valor | Comportamento |
|---|---|
| `nowrap` (padrão) | Todos os itens tentam caber em uma única linha, encolhendo se necessário |
| `wrap` | Itens que não cabem na linha quebram automaticamente para uma nova linha |
| `wrap-reverse` | Mesmo comportamento de `wrap`, mas com a ordem das linhas invertida |

- `.card-grid` combina `flex-wrap: wrap` com `flex: 1 1 220px` em cada card: cada item tenta ter pelo menos 220px de largura (`flex-basis`), mas pode crescer (`flex-grow: 1`) para preencher espaço extra, e quando não há mais espaço na linha, os cards seguintes quebram automaticamente para a linha de baixo — criando um efeito de grid responsivo sem precisar de media queries.

---

## 8) flex: grow / shrink / basis

```css
.flex-1 { flex: 1 1 0%; } /* cresce igualmente */
.flex-2 { flex: 2 1 0%; } /* cresce duas vezes mais */
.flex-auto { flex: 1 1 auto; }
.flex-none { flex: 0 0 auto; }

/* Exemplo: layout 3 colunas com centro flexível */
.layout-3 { display: flex; gap: 12px; }
.layout-3 .col-left { flex: 0 0 200px; } /* largura fixa */
.layout-3 .col-main { flex: 1; } /* ocupa resto */
.layout-3 .col-right { flex: 0 0 200px; }
```

**Explicação da propriedade `flex` (shorthand):**

| Componente | O que controla |
|---|---|
| `flex-grow` | Capacidade do item de **crescer** para ocupar espaço extra disponível (valor numérico, proporcional entre os itens) |
| `flex-shrink` | Capacidade do item de **encolher** quando o espaço disponível é insuficiente |
| `flex-basis` | Tamanho **base** do item antes de crescer/encolher (pode ser `px`, `%`, ou `auto`) |

- `.flex-1` (`flex: 1 1 0%`) faz o item crescer igualmente em relação aos outros que também têm `flex-grow: 1`, partindo de uma base de `0%` (ou seja, o tamanho é inteiramente determinado pela distribuição de espaço).
- `.flex-2` (`flex: 2 1 0%`) faz o item crescer **duas vezes mais** que um item com `flex: 1`, já que o `flex-grow` é proporcional entre os itens do mesmo contêiner.
- `.flex-none` (`flex: 0 0 auto`) impede o item de crescer ou encolher, mantendo seu tamanho natural (baseado no conteúdo) — útil para elementos que não devem se ajustar, como ícones ou logotipos.

**Exemplo prático de layout com 3 colunas:** `.layout-3` demonstra o padrão clássico de "sidebar fixa + conteúdo flexível + sidebar fixa": as colunas laterais (`col-left`, `col-right`) usam `flex: 0 0 200px` (largura fixa de 200px, sem crescer nem encolher), enquanto a coluna central (`col-main`) usa `flex: 1` para ocupar automaticamente todo o espaço restante.

---

## 9) align-self e order

```css
.self-center { align-self: center; }
.self-start { align-self: flex-start; }
.self-end { align-self: flex-end; }
.order-1 { order: 1; }
.order-2 { order: 2; }

/* Exemplo: item destacado no centro */
.steps { display: flex; align-items: center; }
.steps .step-feature { align-self: center; order: 0; }
```

**Explicação:**
- `align-self` funciona como o `align-items`, mas se aplica a um **item individual**, sobrescrevendo o valor definido pelo `align-items` do contêiner pai apenas para aquele item específico.
- `order` permite **reordenar visualmente** os itens de um contêiner flex, sem precisar alterar a ordem real no HTML. Itens com valores de `order` menores aparecem antes; o valor padrão de todos os itens é `0`.
- `.steps .step-feature` demonstra os dois conceitos juntos: o item recebe um alinhamento próprio (`align-self: center`) e uma posição explícita na ordem visual (`order: 0`, que aqui coincide com o padrão, mas deixa a intenção clara no código).

**Cuidado do guia (implícito):** usar `order` para reordenar itens visualmente pode criar uma desconexão entre a ordem lógica do HTML (importante para leitores de tela e navegação por teclado) e a ordem visual na tela — vale usar com moderação e testar acessibilidade.

---

## 10) Overflow e Sizing em Itens Flex

```css
.scrollable-item { overflow: auto; max-height: 200px; }
```

**Explicação:**
- `flex-basis` definido em porcentagem é sempre relativo ao tamanho do **contêiner flex**, não ao viewport ou a outro elemento.
- `min-width`/`min-height` são importantes para **prevenir o colapso** de um item flex quando o espaço disponível é menor que o conteúdo — sem esses valores mínimos, o item pode encolher além do razoável, cortando texto ou quebrando o layout.
- `.scrollable-item` demonstra a técnica de usar `overflow: auto` combinado com `max-height` em um item flex que precisa de rolagem interna própria, sem afetar o tamanho do contêiner pai — útil, por exemplo, em painéis de chat ou listas longas dentro de um layout de altura fixa.

---

## 11) Exemplos Práticos de Layout

### Navbar com espaçamento entre logo e ações

```css
.nav-bar { display: flex; align-items: center; justify-content: space-between; padding: 12px; background: #f8f9fb; }
.nav-logo { flex: 0 0 auto; }
.nav-actions { display: flex; gap: 8px; }
```

```html
<header class="nav-bar">
  <div class="nav-logo">LOGO</div>
  <nav class="nav-actions">
    <a href="#">Home</a>
    <a href="#">Sobre</a>
    <button>Entrar</button>
  </nav>
</header>
```

**Explicação:** o padrão clássico de barra de navegação — logo à esquerda, ações à direita — é resolvido com `justify-content: space-between` no contêiner principal, enquanto o grupo de ações internas (`.nav-actions`) é, ele mesmo, outro contêiner flex com `gap` para espaçar os próprios links/botões.

### Centro vertical e horizontal (uma linha)

```css
.centered { display: flex; align-items: center; justify-content: center; }
```

```html
<div class="centered" style="height:200px;">Conteúdo perfeitamente centrado</div>
```

**Explicação:** combinar `align-items: center` (eixo cruzado) com `justify-content: center` (eixo principal) é a forma mais simples e confiável de centralizar um elemento tanto vertical quanto horizontalmente com Flexbox.

### Cards responsivos com wrap

```css
.card-grid-demo { display: flex; flex-wrap: wrap; gap: 12px; }
.card-grid-demo .card { flex: 1 1 220px; }
```

```html
<div class="card-grid-demo">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</div>
```

**Explicação:** mesma técnica vista na seção 8 — cards com largura-base de 220px que crescem para preencher espaço e quebram linha automaticamente quando não cabem mais, criando um efeito de grade adaptável sem media queries.

### Sidebar + conteúdo flexível

```css
.sidebar-layout { display: flex; gap: 12px; }
.sidebar-layout .sidebar { flex: 0 0 240px; }
.sidebar-layout .content { flex: 1 1 auto; }
```

**Explicação:** a barra lateral (`.sidebar`) mantém uma largura fixa de 240px (`flex: 0 0 240px`), enquanto o conteúdo principal (`.content`) ocupa automaticamente todo o espaço restante (`flex: 1 1 auto`) — um padrão típico de painéis administrativos e dashboards.

### Sticky footer (layout em coluna)

```css
.page { display: flex; flex-direction: column; min-height: 100vh; }
.page .main { flex: 1; }
.page footer { background: #f1f1f1; padding: 12px; }
```

```html
<div class="page">
  <header>Header</header>
  <main class="main">Conteúdo</main>
  <footer>Footer</footer>
</div>
```

**Explicação:** `.page` usa `flex-direction: column` combinado com `min-height: 100vh` (altura mínima igual à altura da tela), enquanto `.main` recebe `flex: 1` para ocupar todo o espaço vertical disponível entre o header e o footer. Resultado: o rodapé (`footer`) é sempre empurrado para o final da tela, mesmo quando o conteúdo principal é curto — o clássico problema do "sticky footer" resolvido com poucas linhas de Flexbox.

---

## 12) Flexbox vs. Grid — Quando Usar Cada Um

| Modelo | Melhor para |
|---|---|
| **Flexbox** | Layouts **unidimensionais** (uma linha ou uma coluna por vez); navbars, listas de itens, barras de ferramentas |
| **Grid** | Layouts **bidimensionais** (linhas e colunas simultaneamente); grids complexos, estruturas de página inteira |

**Recomendação do guia:** é comum (e recomendado) usar os dois modelos **juntos** em um mesmo projeto — Grid para estruturar a página como um todo, e Flexbox para organizar componentes internos dentro de cada área da grade.

**Dica de performance:** o Flexbox é, em geral, eficiente. O guia recomenda evitar cálculos de layout complexos em itens muito aninhados dentro de listas grandes, e sugere o uso de técnicas de **virtualização** (renderizar apenas os itens visíveis na tela) para listas muito longas.

---

## 13) Boas Práticas e Erros Comuns

| Prática recomendada | Motivo |
|---|---|
| Usar `gap` em vez de margens manuais para espaçar itens | Evita a necessidade de "remover" a margem do último item, gerando código mais limpo |
| Definir `min-width` em itens flex | Evita o colapso do conteúdo em telas pequenas quando os itens encolhem demais |
| Preferir `transform`/`opacity` em animações | Alterar `flex-basis` repetidamente em animações é mais custoso para o navegador recalcular |
| Controlar `min`/`max` ao usar `flex: 1` | `flex: 1` divide o espaço igualmente entre os itens, mas sem limites pode gerar itens excessivamente grandes ou pequenos |

---

## 14) Cheatsheet Rápido

```css
display: flex;                /* ou inline-flex */
flex-direction: row | column;
justify-content: flex-start | center | space-between | space-around | space-evenly;
align-items: stretch | center | flex-start | flex-end | baseline;
flex-wrap: nowrap | wrap | wrap-reverse;
gap: 8px;                      /* ou o valor desejado */
flex: <grow> <shrink> <basis>;
```

Use esta tabela como referência rápida das propriedades mais usadas do Flexbox durante o desenvolvimento.