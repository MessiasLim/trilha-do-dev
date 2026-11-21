# Guia Didático de Pseudo-classes e Pseudo-elementos em CSS 

## 1) Pseudo-classes vs. Pseudo-elementos: a Diferença

```css
/* Pseudo-classe: seleciona um elemento em um determinado ESTADO ou POSIÇÃO */
a:hover { color: #0051cc; }

/* Pseudo-elemento: cria/seleciona uma PARTE do elemento que não existe no HTML */
p::first-line { font-weight: 600; }
```

**Explicação:**
- **Pseudo-classes** (um único `:`) selecionam elementos que já existem no HTML, mas que se encontram em um **estado específico** — como estar sob o cursor do mouse (`:hover`), ser o primeiro filho (`:first-child`), ou estar marcado (`:checked`). Elas não criam nada novo; apenas filtram elementos existentes.
- **Pseudo-elementos** (dois `::`, sintaxe moderna) representam uma **parte específica** de um elemento, ou até geram conteúdo novo que não tem correspondência direta no HTML — como a primeira linha de um parágrafo (`::first-line`) ou um elemento decorativo inserido antes do conteúdo (`::before`).

**Nota sobre sintaxe:** pseudo-elementos foram originalmente escritos com apenas um `:` (como `:before`, `:after`), e os navegadores ainda aceitam essa forma antiga por compatibilidade. A especificação CSS3 introduziu `::` (dois-pontos duplos) para diferenciar visualmente pseudo-elementos de pseudo-classes — a forma recomendada em código novo é sempre `::`.

| Aspecto | Pseudo-classe | Pseudo-elemento |
|---|---|---|
| Sintaxe | `:nome` | `::nome` |
| O que faz | Seleciona um elemento existente em um estado/posição | Seleciona ou cria uma parte do elemento |
| Exemplos | `:hover`, `:first-child`, `:checked` | `::before`, `::after`, `::first-line` |
| Quantidade por seletor | Pode haver várias encadeadas (`a:hover:focus`) | Apenas um por seletor |

---

## 2) Pseudo-classes de Interação (Estado do Usuário)

```css
.btn {
  background: #0069ff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.btn:hover {
  background: #0051cc;
}

.btn:active {
  background: #003d99;
  transform: translateY(1px);
}

.btn:focus-visible {
  outline: 3px solid rgba(0, 105, 255, 0.4);
  outline-offset: 2px;
}

.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
```

**Explicação:**
- `:hover` aplica o estilo quando o cursor do mouse está sobre o elemento — dá feedback visual de que o elemento é interativo.
- `:active` aplica o estilo durante o **exato momento do clique** (enquanto o botão do mouse está pressionado sobre o elemento), útil para dar uma sensação tátil de "pressionar" o botão.
- `:focus-visible` é uma versão mais moderna e inteligente de `:focus`: aplica o contorno de foco apenas quando o navegador detecta que a navegação foi feita via **teclado** (Tab), evitando mostrar esse contorno quando o usuário simplesmente clicou com o mouse — resolve um antigo dilema entre acessibilidade e estética.
- `:disabled` seleciona elementos de formulário desabilitados (como `<button disabled>`), permitindo indicar visualmente que a interação está bloqueada.

**Quando usar:** sempre que precisar comunicar visualmente o estado de interatividade de um elemento — botões, links, campos de formulário.

**Erro comum:** usar apenas `:focus` (que aparece em qualquer tipo de foco, incluindo clique de mouse) em vez de `:focus-visible`, o que pode fazer o contorno de foco aparecer de forma "inesperada" e incomodar visualmente usuários de mouse, mesmo sem beneficiar a acessibilidade nesse caso.

---

## 3) Pseudo-classes Estruturais (Posição no DOM)

```css
/* Primeiro e último filho */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }

/* Único filho */
p:only-child { text-align: center; }

/* Baseado em posição numérica */
tr:nth-child(2n) { background: #f9f9f9; }       /* linhas pares */
tr:nth-child(odd) { background: #ffffff; }       /* linhas ímpares (equivalente a 2n+1) */
li:nth-child(3) { color: red; }                  /* exatamente o 3º item */

/* Baseado no tipo de elemento entre os irmãos */
p:first-of-type { margin-top: 0; }
img:nth-of-type(2) { border: 2px solid gold; }

/* Elemento vazio */
p:empty { display: none; }
```

**Explicação:**
- `:first-child` e `:last-child` selecionam um elemento apenas se ele for, respectivamente, o **primeiro** ou o **último filho** do seu elemento pai — não importa o tipo de tag, apenas a posição entre os irmãos.
- `:only-child` seleciona um elemento que é o **único filho** do seu pai (nem primeiro nem último entre vários — o único que existe).
- `:nth-child(formula)` é a pseudo-classe mais flexível para seleção por posição, aceitando fórmulas como `2n` (múltiplos de 2, ou seja, pares), `odd`/`even` (atalhos para ímpar/par), ou um número fixo como `3` (exatamente o terceiro item).
- A diferença entre `:nth-child` e `:nth-of-type`: `:nth-child` conta **todos os irmãos**, independentemente da tag; `:nth-of-type` conta apenas os irmãos **do mesmo tipo de elemento**. Isso importa quando há uma mistura de tags diferentes no mesmo nível (por exemplo, `<h2>` seguido de vários `<p>`).
- `:empty` seleciona elementos que não têm **nenhum conteúdo** (nem texto, nem elementos filhos) — útil para esconder containers vazios que, por algum motivo, foram renderizados sem conteúdo.

**Quando usar:** para estilizar padrões repetitivos (como linhas de tabela alternadas) ou posições específicas, sem precisar adicionar classes extras no HTML.

**Erro comum:** confundir `:nth-child` com `:nth-of-type` em listas com tags mistas, resultando em uma seleção diferente da esperada.

---

## 4) Pseudo-classes de Formulário

```css
input:required {
  border-left: 3px solid #dc3545;
}

input:optional {
  border-left: 3px solid #ccc;
}

input:valid {
  border-color: #28a745;
}

input:invalid {
  border-color: #dc3545;
}

input:checked + label {
  font-weight: bold;
  color: #0069ff;
}

input:placeholder-shown {
  font-style: italic;
}

input:read-only {
  background: #f5f5f5;
  cursor: default;
}
```

**Explicação:**
- `:required`/`:optional` selecionam campos de formulário conforme o atributo HTML `required` estar presente ou não, permitindo indicar visualmente quais campos são obrigatórios.
- `:valid`/`:invalid` refletem o resultado da **validação nativa do HTML5** (baseada em atributos como `type="email"`, `pattern`, `min`/`max`), mudando de estilo automaticamente conforme o usuário digita um valor válido ou inválido — sem precisar de JavaScript.
- `input:checked + label` demonstra uma técnica clássica: como não existe pseudo-classe para "label de um checkbox marcado", combina-se `:checked` no input com o **combinador de irmão adjacente** (`+`) para estilizar o `<label>` que vem logo em seguida no HTML.
- `:placeholder-shown` seleciona o campo apenas enquanto o texto de placeholder ainda está visível (ou seja, o campo está vazio) — deixa de se aplicar assim que o usuário digita algo.
- `:read-only` seleciona campos com o atributo `readonly`, útil para diferenciar visualmente campos que exibem informação mas não podem ser editados.

**Quando usar:** para dar feedback visual imediato em formulários, sem depender de JavaScript para casos simples de validação e estado.

---

## 5) Pseudo-classes Funcionais (:not, :is, :where, :has)

```css
/* :not() - negação */
.menu li:not(.disabled) {
  cursor: pointer;
}

/* :is() - agrupa vários seletores em um só (mantém a especificidade do mais forte) */
:is(h1, h2, h3):hover {
  text-decoration: underline;
}

/* :where() - igual a :is(), mas com especificidade ZERO */
:where(h1, h2, h3) {
  font-family: 'Georgia', serif;
}

/* :has() - seleciona um elemento que CONTÉM outro elemento específico (seletor pai) */
.card:has(img) {
  padding-top: 0;
}

form:has(input:invalid) {
  border: 2px solid #dc3545;
}
```

**Explicação:**
- `:not(seletor)` seleciona todos os elementos que **não** correspondem ao seletor passado como argumento — no exemplo, todos os itens de menu exceto os que têm a classe `.disabled`.
- `:is(seletor1, seletor2, ...)` funciona como um atalho para agrupar vários seletores que compartilham o mesmo restante da regra, evitando repetição. No exemplo, em vez de escrever `h1:hover, h2:hover, h3:hover`, o mesmo resultado é alcançado com uma única linha.
- `:where(...)` tem exatamente a mesma função de `:is()`, mas com uma diferença importante: sua **especificidade é sempre zero**, o que facilita sobrescrever esse estilo depois com qualquer outro seletor simples, sem precisar de `!important`.
- `:has(seletor)` é uma adição mais recente ao CSS, funcionando como um "seletor de pai" — ele seleciona um elemento **apenas se** ele contiver, em algum lugar dentro de si, o elemento descrito no argumento. No exemplo, `.card:has(img)` seleciona cards que contêm uma imagem, e `form:has(input:invalid)` seleciona formulários que têm pelo menos um campo inválido, permitindo destacar visualmente todo o formulário com base no estado de um campo específico dentro dele.

**Quando usar:**
- `:not()` para exceções simples.
- `:is()`/`:where()` para reduzir repetição em seletores agrupados.
- `:has()` para lógica condicional baseada no conteúdo interno de um elemento — algo que antes só era possível com JavaScript.

**Observação de compatibilidade:** `:has()` é uma adição relativamente recente ao CSS; vale confirmar o suporte necessário para o público-alvo do projeto antes de depender dele para funcionalidades essenciais.

---

## 6) Pseudo-elementos de Conteúdo Gerado

```css
.tooltip {
  position: relative;
}

.tooltip::after {
  content: attr(data-tooltip); /* pega o valor de um atributo HTML */
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.tooltip:hover::after {
  opacity: 1;
}

.required::after {
  content: " *";
  color: #dc3545;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

**Explicação:**
- `::before` e `::after` inserem conteúdo **gerado via CSS**, respectivamente antes e depois do conteúdo real do elemento. Em ambos os casos, a propriedade `content` é **obrigatória** — sem ela, o pseudo-elemento simplesmente não é renderizado, mesmo que todo o resto do estilo esteja correto.
- `.tooltip::after` demonstra uma técnica avançada: `content: attr(data-tooltip)` **lê o valor de um atributo HTML** (`data-tooltip="texto aqui"`) e o usa como o texto do pseudo-elemento, permitindo criar tooltips totalmente controlados pelo HTML, sem precisar duplicar o texto em CSS.
- `.tooltip:hover::after` combina uma pseudo-classe (`:hover`) com um pseudo-elemento (`::after`) na mesma regra: o tooltip só fica visível (`opacity: 1`) quando o mouse está sobre o elemento pai.
- `.required::after` usa `content: " *"` para adicionar um asterisco vermelho automaticamente após qualquer elemento com a classe `.required` — comum em labels de campos obrigatórios de formulário.
- `.clearfix::after` é uma técnica histórica (ainda usada em projetos que não utilizam Flexbox/Grid) para forçar um elemento pai a "conter" seus filhos flutuantes (`float`), inserindo um conteúdo vazio com `clear: both`.

**Quando usar:** para decorações, ícones simples, tooltips, indicadores visuais (como o asterisco de campo obrigatório) — sempre para conteúdo **decorativo**, nunca para informação essencial que precise ser acessível a leitores de tela (ver seção 12).

---

## 7) Pseudo-elementos de Texto

```css
p::first-line {
  font-weight: 600;
  color: #222;
}

p::first-letter {
  font-size: 2.5em;
  font-weight: bold;
  float: left;
  line-height: 1;
  margin-right: 4px;
  color: #0069ff;
}

::selection {
  background: #ffe066;
  color: #111;
}
```

**Explicação:**
- `::first-line` estiliza apenas a **primeira linha visível** de um bloco de texto — um efeito puramente visual que se recalcula automaticamente conforme o texto quebra em diferentes larguras de tela (o navegador decide onde a "primeira linha" termina).
- `::first-letter` estiliza apenas o **primeiro caractere** de um bloco de texto, permitindo criar o efeito clássico de "letra capitular" (drop cap), comum em textos editoriais e revistas — no exemplo, combinado com `float: left` para o efeito de letra grande "encaixada" no texto ao redor.
- `::selection` estiliza a aparência do texto quando o usuário o **seleciona** com o mouse (ou teclado), sobrescrevendo a cor de seleção padrão do navegador/sistema operacional.

**Quando usar:** `::first-line`/`::first-letter` para efeitos tipográficos editoriais; `::selection` para manter a identidade visual da marca mesmo no momento em que o usuário seleciona texto.

**Limitação técnica:** `::first-line` e `::first-letter` só aceitam um conjunto limitado de propriedades CSS (principalmente relacionadas a texto e fonte) — propriedades de layout como `width` ou `display: flex` não têm efeito nesses pseudo-elementos.

---

## 8) Pseudo-elementos de Formulário e UI

```css
input::placeholder {
  color: #999;
  font-style: italic;
}

input[type="range"]::-webkit-slider-thumb {
  /* estiliza o "botão" arrastável de um input range (sintaxe específica do WebKit) */
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #0069ff;
  cursor: pointer;
}

::marker {
  color: #0069ff;
  font-weight: bold;
}

textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
```

**Explicação:**
- `::placeholder` estiliza o texto de dica exibido em campos de formulário vazios (o atributo `placeholder` do HTML), permitindo diferenciá-lo visualmente do texto real digitado pelo usuário (por exemplo, com uma cor mais clara, como no exemplo).
- `::-webkit-slider-thumb` é um exemplo de pseudo-elemento **específico de navegador** (prefixado com `-webkit-`), usado para estilizar partes internas de controles de formulário nativos, como o "botão" arrastável de um `<input type="range">`. Diferentes navegadores usam prefixos e nomes próprios para esses elementos internos (ex.: `-moz-range-thumb` no Firefox), então geralmente é necessário duplicar a regra para cada navegador-alvo.
- `::marker` estiliza o marcador de uma lista (o número em listas ordenadas, ou o símbolo em listas não ordenadas), permitindo personalizar sua cor e peso sem precisar recorrer a técnicas mais complexas com `::before`.
- `::-webkit-scrollbar` (e suas variantes, como `::-webkit-scrollbar-thumb`) permitem estilizar a aparência da barra de rolagem em navegadores baseados em WebKit/Blink (Chrome, Edge, Safari) — não é um padrão universal, e Firefox usa uma abordagem diferente (`scrollbar-width`/`scrollbar-color`).

**Quando usar:** para refinar detalhes visuais de controles nativos do navegador, mantendo a identidade visual do projeto mesmo em elementos que normalmente têm aparência padronizada pelo sistema operacional.

**Observação:** vários desses pseudo-elementos (como `::-webkit-slider-thumb` e `::-webkit-scrollbar`) são **não padronizados** e específicos de motor de navegador — é importante testar em múltiplos navegadores e considerar que o comportamento pode variar ou não existir em alguns deles.

---

## 9) Combinando Pseudo-classes e Pseudo-elementos

```css
/* Múltiplas pseudo-classes encadeadas */
.btn:hover:not(:disabled) {
  background: #0051cc;
}

/* Pseudo-classe + pseudo-elemento na mesma regra */
li:first-child::before {
  content: "★ ";
  color: gold;
}

/* Pseudo-classe estrutural + de interação */
tr:nth-child(even):hover {
  background: #e9f2ff;
}
```

**Explicação:**
- É possível **encadear várias pseudo-classes** na mesma regra, todas precisam ser verdadeiras simultaneamente para o estilo se aplicar. `.btn:hover:not(:disabled)` só aplica o estilo de hover se o botão estiver sob o cursor **e** não estiver desabilitado — evitando dar feedback visual de "clicável" em um botão que na verdade está bloqueado.
- Uma pseudo-classe pode ser combinada com um pseudo-elemento na mesma cadeia de seletor: `li:first-child::before` seleciona a parte `::before` especificamente do primeiro item de uma lista, e não de todos os itens.
- `tr:nth-child(even):hover` combina uma seleção estrutural (linhas pares) com um estado de interação (hover), útil para dar destaque extra ao passar o mouse sobre linhas que já têm um estilo de base diferenciado (efeito zebra).

**Regra de ordem:** pseudo-elementos sempre vêm **por último** na cadeia do seletor — não é possível, por exemplo, escrever `::before:hover`; a ordem correta seria `:hover::before` (embora esse caso específico não seja necessário, já que pseudo-elementos herdam o estado do elemento pai).

---

## 10) Especificidade e Ordem de Declaração

```css
a { color: blue; }              /* especificidade: elemento = 1 */
a:hover { color: purple; }      /* especificidade: elemento + pseudo-classe = 1 + 10 = 11 */
a::before { content: "→ "; }    /* especificidade: elemento + pseudo-elemento = 1 + 1 = 2 */
```

**Explicação:**
- Pseudo-classes têm o **mesmo peso de especificidade que uma classe** (valor 10) — por isso, `a:hover` tem mais especificidade que um simples `a`.
- Pseudo-elementos têm o **mesmo peso de especificidade que um elemento** (valor 1) — por isso, `a::before` soma pouco à especificidade total do seletor.

**Ordem de declaração importa em casos específicos:** para estados como `:link`, `:visited`, `:hover`, `:active` e `:focus` no mesmo elemento (como em links `<a>`), a ordem de declaração no CSS afeta qual regra "vence" quando várias se aplicam simultaneamente. A ordem tradicionalmente recomendada é conhecida pela sigla mnemônica **LVHA**:

```css
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: darkblue; }
a:active { color: red; }
```

**Por que essa ordem (LVHA):** como `:hover` e `:active` têm a mesma especificidade que `:link`/`:visited`, a regra que aparece **depois** no arquivo CSS vence em caso de empate. Declarar `:hover` depois de `:link`/`:visited` garante que o efeito de hover funcione mesmo em links já visitados; declarar `:active` por último garante que o feedback de clique sempre apareça, independente do estado anterior do link.

---

## 11) Acessibilidade

```css
/* Bom: contorno de foco visível apenas para navegação por teclado */
.btn:focus-visible {
  outline: 3px solid #0069ff;
  outline-offset: 2px;
}

/* Evitar: remover o foco sem alternativa */
.btn:focus {
  outline: none; /* ⚠️ problemático sem um substituto visível */
}
```

**Explicação e diretrizes:**
- Conteúdo inserido via `::before`/`::after` com `content` **não é lido de forma confiável** por todos os leitores de tela — o suporte varia entre ferramentas e configurações. Por isso, esse tipo de conteúdo deve ser sempre **decorativo**, nunca a única forma de transmitir uma informação essencial (como o asterisco de campo obrigatório da seção 7 — o ideal é que o HTML também tenha um `aria-required="true"` ou texto explícito, e não dependa apenas do `::after` visual).
- Remover o contorno de foco (`outline: none`) em `:focus` sem fornecer um substituto visível prejudica gravemente usuários que navegam por teclado, já que eles perdem a referência visual de qual elemento está ativo na página.
- `:focus-visible` (seção 3) é a solução recomendada atualmente: mantém o contorno de foco visível para quem navega por teclado, sem "poluir" visualmente a interface para quem usa o mouse.

**Resumo de boas práticas de acessibilidade:**
- Nunca remova indicadores de foco sem um substituto claro.
- Trate conteúdo gerado por `::before`/`::after` como decorativo.
- Prefira `:focus-visible` a `:focus` puro para estilos de contorno.

---

## 12) Erros Comuns e Como Corrigir

| Erro | Consequência | Correção |
|---|---|---|
| Esquecer `content` em `::before`/`::after` | O pseudo-elemento simplesmente não aparece | Sempre declarar `content: ""` (ou o texto/valor desejado) |
| Confundir `:nth-child` com `:nth-of-type` | Seleção incorreta em listas com tags mistas | Usar `:nth-of-type` quando a posição deve ser contada apenas entre elementos do mesmo tipo |
| Usar `:focus` puro para remover o contorno | Prejudica usuários de teclado | Usar `:focus-visible` e nunca remover o contorno sem alternativa |
| Depender de `::before`/`::after` para informação essencial | Conteúdo pode não ser lido por leitores de tela | Reforçar a informação também no HTML/atributos de acessibilidade |
| Declarar `a:hover` antes de `a:visited` | O hover pode não funcionar em links visitados, dependendo da ordem | Seguir a ordem LVHA: `:link`, `:visited`, `:hover`, `:active` |
| Usar `::-webkit-*` sem considerar outros navegadores | Estilo funciona só em navegadores baseados em WebKit/Blink | Testar em múltiplos navegadores e aceitar degradação graciosa quando necessário |

---

## 13) Cheatsheet Rápido

```css
/* Pseudo-classes de interação */
:hover
:active
:focus
:focus-visible
:disabled

/* Pseudo-classes estruturais */
:first-child
:last-child
:only-child
:nth-child(n)
:nth-of-type(n)
:empty

/* Pseudo-classes de formulário */
:required / :optional
:valid / :invalid
:checked
:placeholder-shown
:read-only

/* Pseudo-classes funcionais */
:not(seletor)
:is(seletor1, seletor2)
:where(seletor1, seletor2)
:has(seletor)

/* Pseudo-elementos */
::before
::after
::first-line
::first-letter
::selection
::placeholder
::marker
```

Use esta tabela como referência rápida das pseudo-classes e pseudo-elementos mais usados durante o desenvolvimento.