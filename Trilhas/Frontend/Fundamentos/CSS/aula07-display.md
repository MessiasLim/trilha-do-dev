# Guia da Propriedade `display` no CSS 

## 1) display: block

```css
.example-block {
  display: block;
  width: 300px;        /* controla largura porque é block */
  padding: 8px;
  border: 2px solid #2b8a3e;
  background: #eaf7ea;
  margin: 8px 0;        /* empurra verticalmente */
}
```

**Explicação:**
- `display: block` faz o elemento ocupar toda a largura disponível da linha, sempre começando em uma nova linha (empurrando os elementos seguintes para baixo).
- `width: 300px` funciona normalmente, pois elementos `block` **respeitam** `width`/`height`.
- `padding: 8px` adiciona espaçamento interno em todos os lados.
- `border: 2px solid #2b8a3e` cria uma borda verde sólida.
- `background: #eaf7ea` aplica um fundo verde bem claro.
- `margin: 8px 0` adiciona 8px de espaço acima e abaixo (margens verticais funcionam normalmente em elementos block).

**Quando usar:** para elementos estruturais de layout, como `div`, `p`, `h1` e `section` — a base da maioria dos blocos de conteúdo de uma página.

**Comportamento-chave:** sempre inicia em nova linha; aceita `width`/`height`; margens verticais têm efeito completo.

---

## 2) display: inline

```css
.example-inline {
  display: inline;
  padding: 4px 8px;    /* afeta espaçamento, mas não força nova linha */
  background: #fff3cd;
  border: 1px solid #f0ad4e;
}
```

**Explicação:**
- `display: inline` faz o elemento ocupar apenas o espaço necessário para seu conteúdo, permanecendo no meio do texto, sem forçar quebra de linha.
- `padding: 4px 8px` adiciona espaçamento horizontal e vertical visualmente, mas **não afeta o fluxo do layout** ao redor — ou seja, elementos vizinhos não são empurrados verticalmente por causa desse padding.
- `background` e `border` funcionam normalmente, criando um destaque visual dentro do texto (como um "chip" ou "tag" embutido).

**Quando usar:** para elementos que aparecem dentro de um fluxo de texto, como `span`, `a` e `strong`.

**Comportamento-chave:** `width`/`height` são **ignorados**; padding e margin horizontais funcionam, mas margens verticais podem não deslocar outros elementos como se espera.

---

## 3) display: inline-block

```css
.example-inline-block {
  display: inline-block;
  width: 140px;
  height: 60px;
  padding: 6px;
  border: 2px dashed #5a5aea;
  background: #eef2ff;
  vertical-align: top; /* alinhar com base na linha */
  margin: 4px;
}
```

**Explicação:**
- `display: inline-block` combina características dos dois modelos anteriores: o elemento permanece na mesma linha que elementos vizinhos (como `inline`), mas **aceita** `width` e `height` fixos (como `block`).
- `width: 140px` e `height: 60px` definem um tamanho fixo para a caixa, algo impossível com `display: inline` puro.
- `border: 2px dashed #5a5aea` usa uma borda tracejada roxa, útil para destacar visualmente os limites do elemento durante o aprendizado.
- `vertical-align: top` alinha o elemento pelo topo em relação aos elementos vizinhos na mesma linha, evitando desalinhamentos causados pelo alinhamento padrão (`baseline`).
- `margin: 4px` cria um pequeno espaçamento externo em todos os lados, útil para separar múltiplos elementos `inline-block` colocados lado a lado.

**Quando usar:** quando você precisa de um elemento que se comporte como texto (fique lado a lado com outros) mas que também tenha dimensões controladas — por exemplo, botões, badges ou pequenos cards em uma barra.

---

## 4) display: none vs. visibility: hidden

```css
.example-hidden-none { display: none; }
.example-hidden-visibility { visibility: hidden; }
```

**Explicação:**

| Propriedade | Efeito visual | Ocupa espaço no layout? |
|---|---|---|
| `display: none` | Elemento totalmente removido da renderização | **Não** — os elementos vizinhos se movem para preencher o espaço |
| `visibility: hidden` | Elemento fica invisível | **Sim** — o espaço reservado ao elemento continua lá, como se ele existisse, só que sem aparecer |

**Quando usar cada um:**
- `display: none`: para ocultar algo completamente, como um menu suspenso fechado ou uma seção que não deve existir naquele momento (nem para leitores de tela).
- `visibility: hidden`: quando você quer esconder visualmente um elemento, mas **manter o espaço reservado** no layout — por exemplo, um ícone que aparece somente no hover, sem que o restante do layout "pule" quando ele surge/some.

> ⚠️ **Nota de acessibilidade:** ambos removem o elemento da experiência visual, mas seus efeitos em leitores de tela variam — `display: none` geralmente remove completamente da árvore de acessibilidade, enquanto `visibility: hidden` também costuma ser ignorado por leitores de tela (diferente apenas de técnicas como `opacity: 0`, que mantém o elemento acessível). É importante testar com ferramentas de acessibilidade antes de decidir qual usar.

---

## 5) Introdução ao Flexbox (display: flex)

```css
.flex-container {
  display: flex; /* ativa o flexbox */
  gap: 12px;      /* espaço entre itens */
  justify-content: space-between; /* distribuição horizontal */
  align-items: center; /* alinhamento vertical */
  padding: 8px;
  background: #f0f8ff;
}
.flex-item {
  background: #cfe8ff;
  padding: 8px 12px;
  border: 1px solid #7aa7ff;
}
```

**Explicação:**
- `display: flex` transforma o elemento em um **contêiner flexível**, e todos os seus filhos diretos passam a se organizar automaticamente em linha (por padrão).
- `gap: 12px` cria um espaçamento uniforme de 12px entre os itens filhos, sem precisar usar margens manuais.
- `justify-content: space-between` distribui os itens ao longo do eixo principal (horizontal, por padrão), colocando o primeiro item na borda esquerda, o último na borda direita, e distribuindo o espaço restante igualmente entre eles.
- `align-items: center` centraliza os itens verticalmente dentro do contêiner, em relação ao eixo transversal.
- `.flex-item` define o visual de cada item filho: fundo azul-claro, espaçamento interno e borda azul.

**Quando usar:** para organizar elementos em **uma dimensão** (uma linha ou uma coluna), como barras de navegação, listas de botões, ou qualquer alinhamento simples de itens.

**Propriedades básicas do modelo Flexbox:**

| No contêiner | No item |
|---|---|
| `display: flex` | `flex` (define crescimento/encolhimento) |
| `flex-direction` (linha ou coluna) | `order` (reordena visualmente) |
| `justify-content` (eixo principal) | — |
| `align-items` (eixo transversal) | — |

> 💡 Experimente `flex-direction: column` para empilhar os itens verticalmente em vez de horizontalmente.

---

## 6) Introdução ao Grid (display: grid)

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  gap: 12px;
  padding: 8px;
  background: #fff7e6;
}
.grid-item {
  background: #fff1d6;
  padding: 10px;
  border: 1px solid #ffd57a;
}
```

**Explicação:**
- `display: grid` transforma o elemento em um **contêiner de grade bidimensional**, capaz de organizar filhos em linhas e colunas ao mesmo tempo.
- `grid-template-columns: repeat(3, 1fr)` cria 3 colunas de larguras iguais (`1fr` = "uma fração" do espaço disponível), repetidas 3 vezes.
- `gap: 12px` define o espaçamento entre as células da grade, tanto na horizontal quanto na vertical.
- `.grid-item` estiliza cada célula individual com fundo amarelo-claro, espaçamento interno e borda dourada.

**Quando usar:** para layouts que envolvem **duas dimensões simultaneamente** (linhas E colunas), como a estrutura geral de uma página, galerias de imagens ou painéis com áreas complexas.

**Propriedades básicas do modelo Grid:**

| No contêiner | No item |
|---|---|
| `display: grid` | `grid-column` (em quais colunas o item ocupa) |
| `grid-template-columns` / `grid-template-rows` | `grid-row` (em quais linhas o item ocupa) |
| `gap` | — |

> 💡 Experimente `grid-template-columns: 200px 1fr` para criar uma coluna fixa de 200px ao lado de uma coluna flexível que ocupa o restante do espaço — um padrão comum em layouts com barra lateral.

---

## 7) Comparações Visuais e Boas Práticas

| Valor | Comportamento resumido |
|---|---|
| `block` | Ocupa 100% da largura disponível; sempre força nova linha |
| `inline` | Fica embutido no fluxo de texto; **não** respeita `width`/`height` |
| `inline-block` | Fica embutido no fluxo, mas **aceita** `width`/`height` |
| `none` | Remove o elemento do fluxo — não ocupa espaço nenhum |
| `visibility: hidden` | Torna o elemento invisível, mas **mantém** o espaço reservado |
| `flex` | Ideal para alinhamento em **uma dimensão** (linha ou coluna) |
| `grid` | Ideal para layouts em **duas dimensões** (linhas e colunas simultaneamente) |

**Boas práticas recomendadas pelo guia:**
- Use `inline-block` para pequenos blocos alinhados em linha, como badges ou mini-cards.
- Use `flex` para barras de navegação e controles que precisam distribuir espaço entre si.
- Use `grid` para layouts de página inteira ou áreas com uma estrutura clara de linhas e colunas.
- Evite `display: none` em elementos que precisam continuar acessíveis via teclado — nesses casos, prefira técnicas de ocultação visual que preservem a acessibilidade (como classes utilitárias específicas para "esconder visualmente, mas manter para leitores de tela").

---

## 8) Exemplos HTML para Testar

```html
<h2>Block vs Inline vs Inline-block</h2>
<div class="example-block">Block (div)</div>
<p>Antes <span class="example-inline">Inline (span)</span> Depois</p>
<div class="example-inline-block">Inline-block A</div>
<div class="example-inline-block">Inline-block B</div>

<h2>display:none vs visibility:hidden</h2>
<div class="example-block">Visível</div>
<div class="example-block example-hidden-none">display:none (não visível)</div>
<div class="example-block example-hidden-visibility">visibility:hidden (oculto, ocupa espaço)</div>

<h2>Flex</h2>
<div class="flex-container">
  <div class="flex-item">A</div>
  <div class="flex-item">B</div>
  <div class="flex-item">C</div>
</div>

<h2>Grid</h2>
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>
```

**Como usar:** copie esse HTML para um arquivo `.html`, junto com o CSS das seções anteriores, e abra no navegador. Use o DevTools (aba **Elements**, painel **Layout**) para inspecionar visualmente como cada `display` afeta o posicionamento e o dimensionamento dos elementos.