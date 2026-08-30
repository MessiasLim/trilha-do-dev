# Guia Didático e Completo de CSS Grid 

## 1) Conceito Rápido

CSS Grid é um sistema de layout **bidimensional** — ao contrário do Flexbox (unidimensional), o Grid organiza itens simultaneamente em **linhas e colunas**. O contêiner define a estrutura de linhas/colunas, e os itens filhos ocupam células específicas ou áreas nomeadas dentro dessa estrutura.

---

## 2) Grid Container vs. Grid Items

```css
.grid { display: grid; }
.inline-grid { display: inline-grid; }
```

**Explicação:**
- **Grid container:** qualquer elemento com `display: grid` (bloco) ou `display: inline-grid` (comporta-se como elemento inline em relação aos vizinhos, mas organiza seus filhos como grade internamente).
- **Grid items:** são os filhos **diretos** do grid container — eles se tornam automaticamente posicionáveis dentro das linhas e colunas definidas pelo pai.

**Quando usar `inline-grid`:** quando você precisa que o próprio contêiner de grade se comporte como um elemento inline no fluxo do texto ao redor, mas ainda organize seu conteúdo interno em grade.

---

## 3) grid-template-columns / grid-template-rows

```css
.grid-cols-3 { grid-template-columns: 1fr 1fr 1fr; }
.grid-cols-fixed { grid-template-columns: 200px 1fr 100px; }
.grid-rows { grid-template-rows: auto 200px auto; }

/* Exemplo simples (galeria): 3 colunas iguais */
.gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.gallery .item { background: #fff; padding: 12px; border: 1px solid #eee; }
```

**Explicação:**
- `grid-template-columns` e `grid-template-rows` definem, respectivamente, as colunas e linhas **explícitas** da grade, listando o tamanho de cada "track" (faixa) na ordem em que aparecem.
- `.grid-cols-3` cria 3 colunas de larguras **iguais**, usando a unidade `fr` (fração) — cada `1fr` representa uma fração igual do espaço disponível.
- `.grid-cols-fixed` mistura tamanhos: uma coluna fixa de `200px`, uma coluna flexível (`1fr`, que ocupa o espaço restante) e outra coluna fixa de `100px`.
- `.grid-rows` define três linhas: a primeira e a terceira com altura automática (`auto`, baseada no conteúdo), e a segunda com altura fixa de `200px`.
- `.gallery` demonstra o uso da função `repeat(3, 1fr)`, um atalho equivalente a escrever `1fr 1fr 1fr`, criando uma galeria de 3 colunas iguais com espaçamento (`gap: 12px`) entre os itens.

**Valores comuns aceitos:** `px` (fixo), `%` (porcentagem), `fr` (fração do espaço disponível), `auto` (baseado no conteúdo) e `minmax()` (ver seção 9).

---

## 4) gap (Espaçamento Entre Linhas/Colunas)

```css
.grid-gap { gap: 16px; }
```

**Explicação:**
- `gap` define o espaçamento entre as linhas e colunas da grade em uma única propriedade. A forma completa é `gap: <row-gap> <column-gap>`, mas ao usar um único valor (como `16px`), ele é aplicado igualmente a ambos.
- Assim como no Flexbox, `gap` substitui a necessidade de usar `margin` manual entre os itens, evitando o problema clássico de precisar remover margens extras nas bordas.

**Quando usar:** sempre que precisar de espaçamento consistente entre células da grade, tanto horizontal quanto verticalmente.

---

## 5) grid-area e Named Areas

```css
.layout-named {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 12px;
}
.a-header { grid-area: header; }
.a-sidebar { grid-area: sidebar; }
.a-main { grid-area: main; }
.a-footer { grid-area: footer; }
```

```html
<div class="layout-named">
  <header class="a-header">Header</header>
  <aside class="a-sidebar">Sidebar</aside>
  <main class="a-main">Main</main>
  <footer class="a-footer">Footer</footer>
</div>
```

**Explicação:**
- `grid-template-areas` permite desenhar visualmente a estrutura do layout usando **nomes de áreas** dentro de strings — cada string representa uma linha da grade, e cada palavra dentro dela representa a área ocupada por aquela célula. Repetir um nome (como `"header header"`) faz aquela área **ocupar múltiplas colunas** na mesma linha.
- No exemplo, a estrutura resultante é: um cabeçalho ocupando toda a largura no topo, uma barra lateral (`sidebar`) e o conteúdo principal (`main`) lado a lado no meio, e um rodapé ocupando toda a largura na base.
- Cada item filho recebe a propriedade `grid-area` com o **nome correspondente** definido em `grid-template-areas`, dizendo ao navegador exatamente em qual área aquele elemento deve ser posicionado.

**Quando usar:** para layouts complexos e estruturais (header, sidebar, main, footer), já que essa abordagem é extremamente legível — basta olhar para o `grid-template-areas` para visualizar a estrutura inteira do layout.

---

## 6) Colocando Itens Manualmente: grid-column / grid-row

```css
.span-2-cols { grid-column: span 2; } /* ocupa 2 colunas a partir da posição atual */
.col-full { grid-column: 1 / -1; } /* ocupa todas as colunas */

/* Exemplo: item grande na galeria */
.gallery .big { grid-column: span 2; grid-row: span 2; }
```

**Explicação:**
- `grid-column` e `grid-row` permitem posicionar um item manualmente, especificando em quais **linhas da grade** (não confundir com linhas de texto — aqui "linha" se refere às linhas numeradas que delimitam as células) ele deve começar e terminar. A sintaxe é `grid-column: <início> / <fim>`.
- `span 2` é um atalho que diz "ocupe 2 colunas a partir da posição atual", sem precisar calcular os números exatos das linhas de início e fim.
- `grid-column: 1 / -1` faz o item ocupar **todas** as colunas da grade: começa na primeira linha (`1`) e vai até a última linha (`-1`, que sempre representa a última linha da grade, independentemente de quantas colunas existirem).
- `.gallery .big` combina `grid-column: span 2` com `grid-row: span 2`, fazendo um item específico da galeria ocupar uma área **2×2 células**, criando destaque visual dentro de uma grade de itens do mesmo tamanho — uma técnica comum em galerias tipo "mosaico".

---

## 7) Grid Explícito vs. Implícito, grid-auto-flow

```css
.auto-flow-rows { grid-auto-flow: row; }
.auto-flow-dense { grid-auto-flow: dense; }
.auto-rows { grid-auto-rows: 100px; }

/* Exemplo: criar linhas automáticas quando houver overflow */
.masonry { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 8px; gap: 8px; }
.masonry .brick { grid-row: span 40; /* usa múltiplos de 8px */ }
```

**Explicação:**

| Conceito | Descrição |
|---|---|
| **Grid explícito** | As linhas e colunas definidas diretamente via `grid-template-columns`/`grid-template-rows` |
| **Grid implícito** | Linhas/colunas criadas **automaticamente** pelo navegador quando os itens excedem a grade explícita definida |

- `grid-auto-flow` controla como os itens são posicionados automaticamente quando não recebem uma posição manual explícita:

| Valor | Comportamento |
|---|---|
| `row` (padrão) | Preenche a grade item por item, avançando **linha por linha** |
| `column` | Preenche a grade avançando **coluna por coluna** |
| `dense` | Tenta preencher lacunas vazias na grade, o que pode alterar a ordem visual dos itens em relação à ordem do HTML |

- `grid-auto-rows: 100px` define a altura das linhas criadas **implicitamente** (fora da grade explícita definida por `grid-template-rows`).
- `.masonry` demonstra uma técnica avançada para simular um layout "masonry" (tipo Pinterest): a grade usa linhas implícitas muito pequenas (`8px` cada), e cada item (`.brick`) ocupa um número variável dessas linhas via `grid-row: span 40` (nesse caso, múltiplos de 8px), permitindo que cada "tijolo" tenha uma altura diferente enquanto ainda se encaixa perfeitamente na grade.

---

## 8) repeat(), minmax(), auto-fit / auto-fill

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}
```

```html
<div class="responsive-grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <!-- ... -->
</div>
```

**Explicação das funções:**

| Função | O que faz |
|---|---|
| `repeat(3, 1fr)` | Atalho para repetir um padrão de tracks (nesse caso, 3 colunas de `1fr`) |
| `minmax(min, max)` | Define um tamanho **mínimo** e **máximo** para uma track — a coluna nunca fica menor que `min` nem maior que `max` |
| `auto-fill` | Preenche o contêiner com o **máximo número possível** de colunas, mesmo que fiquem vazias (sem itens) |
| `auto-fit` | Comportamento similar a `auto-fill`, mas as colunas vazias **colapsam** (não ocupam espaço), permitindo que as colunas existentes se expandam para preencher o espaço restante |

- `.responsive-grid` é o padrão mais usado para **grades verdadeiramente responsivas sem media queries**: cada coluna tem no mínimo `220px` e no máximo `1fr` (parte igual do espaço disponível). Conforme a largura da tela muda, o navegador recalcula automaticamente quantas colunas cabem, criando um layout fluido.

**Diferença prática entre `auto-fit` e `auto-fill`:** se houver poucos itens para preencher todas as colunas possíveis, `auto-fit` faz os itens existentes **esticarem** para ocupar o espaço vazio, enquanto `auto-fill` mantém colunas vazias reservadas, sem redistribuir esse espaço.

---

## 9) Alinhamento: justify-items, align-items, justify-content, align-content

```css
.ji-center { justify-items: center; }
.ai-center-grid { align-items: center; }
.jc-center-grid { justify-content: center; }
.ac-center-grid { align-content: center; }

/* Exemplo: centralizar conteúdo dentro das células */
.center-cells { justify-items: center; align-items: center; }
```

**Explicação:**

| Propriedade | Eixo | O que alinha |
|---|---|---|
| `justify-items` | Inline (horizontal, em contextos LTR) | Alinha cada item **dentro de sua própria célula** |
| `align-items` | Block (vertical) | Alinha cada item **dentro de sua própria célula**, no eixo vertical |
| `justify-content` | Inline (horizontal) | Alinha a **grade inteira** dentro do contêiner, quando há espaço sobrando horizontalmente |
| `align-content` | Block (vertical) | Alinha as **linhas da grade** dentro do contêiner, quando há espaço sobrando verticalmente |

- A distinção principal é: `justify-items`/`align-items` atuam **dentro de cada célula individual**, enquanto `justify-content`/`align-content` atuam na **grade como um todo**, relativa ao contêiner (só têm efeito perceptível quando a grade é menor que o contêiner).
- `.center-cells` combina `justify-items: center` e `align-items: center` para centralizar o conteúdo de cada item **dentro de sua própria célula**, tanto horizontal quanto verticalmente.

---

## 10) Colocação com Linhas Nomeadas (Avançado)

```css
.named-lines {
  display: grid;
  grid-template-columns: [left-start] 200px [left-end main-start] 1fr [main-end right-start] 200px [right-end];
}
.item-left { grid-column: left-start / left-end; }
.item-main { grid-column: main-start / main-end; }
```

**Explicação:**
- Além de nomear áreas inteiras (seção 6), é possível nomear as **linhas** individuais que compõem a grade, usando colchetes (`[nome-da-linha]`) dentro da definição de `grid-template-columns`.
- No exemplo, a linha entre a primeira e a segunda coluna recebe **dois nomes simultâneos** (`left-end` e `main-start`), já que ela marca o fim de uma coluna e o início da próxima ao mesmo tempo.
- Os itens então podem ser posicionados usando esses nomes em vez de números de linha (`grid-column: left-start / left-end`), o que torna o código mais legível e menos propenso a erros ao reorganizar a grade.

**Quando usar:** em layouts complexos que mudam estruturalmente através de media queries, nomear as linhas ajuda a manter a intenção do código clara mesmo quando o número de colunas ou sua ordem muda.

---

## 11) Exemplos Simples e Avançados

### Exemplo simples: galeria de imagens

```css
.gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
```

**Explicação:** uma grade básica de 3 colunas iguais, ideal para uma galeria de imagens ou cards simples.

### Exemplo avançado: layout responsivo com áreas nomeadas

```css
/* desktop */
.layout {
  display: grid;
  grid-template-columns: 240px 1fr 240px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main ads"
    "footer footer footer";
}

/* mobile (mudar com media query) */
@media (max-width: 800px) {
  .layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "ads"
      "footer";
  }
}
```

**Explicação:** esse exemplo demonstra o verdadeiro poder das áreas nomeadas combinadas com media queries: em telas grandes (desktop), o layout tem 3 colunas (sidebar, conteúdo principal e anúncios lado a lado); em telas pequenas (`max-width: 800px`), o `grid-template-areas` é **completamente redefinido** para empilhar tudo em uma única coluna, na ordem: header, main, sidebar, ads, footer. Como os elementos HTML continuam usando os mesmos nomes de `grid-area`, nenhuma mudança no HTML é necessária — apenas o CSS reorganiza tudo.

---

## 12) Boas Práticas e Erros Comuns

| Prática recomendada | Motivo |
|---|---|
| Usar `gap` em vez de `margin` entre itens da grade | Evita espaçamentos extras indesejados nas bordas, código mais limpo |
| Preferir `repeat(auto-fit, minmax(...))` para grades responsivas | Elimina a necessidade de várias media queries para simples ajustes de coluna |
| Entender a diferença entre grid explícito e implícito | Evita surpresas quando itens excedem a grade planejada e criam linhas/colunas automáticas inesperadas |
| Evitar `display: contents` quando itens têm roles/labels de acessibilidade importantes | `display: contents` remove o elemento da árvore de renderização, mas pode causar perda de semântica de acessibilidade em alguns navegadores |
| Usar áreas nomeadas para layouts que mudam via media queries | Torna o código mais legível e fácil de reorganizar visualmente |

---

## 13) Cheatsheet Rápido

```css
display: grid;                 /* ou inline-grid */
grid-template-columns: ...;
grid-template-rows: ...;
grid-column: <início> / <fim>;
grid-row: <início> / <fim>;
gap: <linha> <coluna>;
repeat(n, tamanho);
minmax(min, max);
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* responsivo */
justify-items / align-items / justify-content / align-content
```

Use esta tabela como referência rápida das propriedades mais usadas do CSS Grid durante o desenvolvimento.