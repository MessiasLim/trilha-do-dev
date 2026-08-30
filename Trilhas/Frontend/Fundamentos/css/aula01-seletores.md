# Guia de Seletores CSS para Iniciantes 

## 1) Seletor de Elemento

**O que é:** seleciona elementos HTML pelo nome da tag (`p`, `h1`, `ul`, `li` etc.), aplicando o estilo a **todas** as ocorrências daquele elemento na página.

```css
p {
  color: #222;
  line-height: 1.5;
}
```

**Explicação:**
- `color: #222` define uma cor de texto quase preta para todos os parágrafos.
- `line-height: 1.5` aumenta o espaçamento entre linhas, melhorando a legibilidade.

**Quando usar:** para regras globais e resets básicos, como definir a tipografia padrão de toda a página.

**Erro comum:** usar seletor de elemento para estilos muito específicos de um componente — isso reduz a reutilização e pode gerar conflitos. Nesses casos, uma classe é mais indicada.

---

## 2) Seletor de Classe

**O que é:** seleciona qualquer elemento que tenha o atributo `class` correspondente. É identificado pelo prefixo `.` (ponto).

```css
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #0069ff;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
}

.btn--secondary {
  background: #eee;
  color: #111;
}
```

**Explicação:**
- `.btn` define o estilo base de um botão: espaçamento interno (`padding`), cor de fundo azul, texto branco, cantos arredondados (`border-radius`) e remoção do sublinhado (`text-decoration: none`), útil quando o botão é um link (`<a>`).
- `.btn--secondary` é uma **variante** do botão (seguindo a convenção BEM), sobrescrevendo a cor de fundo e do texto para criar um botão "secundário" com visual mais discreto.

**Quando usar:** em componentes reutilizáveis, como botões, cards e badges — qualquer elemento que se repete visualmente na interface.

**Erro comum:** usar nomes pouco descritivos como `.red` ou `.big`. O ideal é usar nomes semânticos, como `.alert--error`, que descrevem a função e não apenas a aparência.

---

## 3) Seletor de ID

**O que é:** seleciona um único elemento, identificado pelo prefixo `#` (hashtag), correspondente ao atributo `id` no HTML.

```css
#main-header {
  background: #fafafa;
  padding: 1rem 0;
}
```

**Explicação:**
- Aplica um fundo cinza claro (`#fafafa`) e um espaçamento vertical (`padding: 1rem 0`) exclusivamente ao elemento com `id="main-header"`, geralmente o cabeçalho principal da página.

**Quando usar:** para identificar elementos únicos, como âncoras de navegação (`#secao-2`) ou pontos de referência para JavaScript. Não é recomendado como principal meio de estilização.

**Erro comum:** usar IDs para estilização geral. Como o ID tem alta especificidade, isso dificulta a sobrescrita de estilos depois, muitas vezes forçando o uso de `!important`.

---

## 4) Seletores Combinados

**O que são:** seletores que combinam dois ou mais seletores simples para definir relações entre elementos no HTML.

```css
/* Descendente: qualquer <li> dentro de <nav>, em qualquer nível */
nav li {
  list-style: none;
}

/* Filho direto: apenas .card__title que é filho imediato de .card */
.card > .card__title {
  font-weight: 700;
}

/* Adjacente imediato: o <p> que vem logo depois de um <h2> */
h2 + p {
  margin-top: 0.25rem;
  color: #555;
}

/* Agrupamento: mesmo estilo para vários seletores */
h1, h2, h3 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
```

**Explicação de cada combinador:**

| Combinador | Sintaxe | Significado |
|---|---|---|
| Descendente | `A B` | Seleciona `B` em qualquer nível dentro de `A` |
| Filho direto | `A > B` | Seleciona `B` apenas quando é filho imediato de `A` |
| Adjacente imediato | `A + B` | Seleciona `B` apenas quando vem logo após `A`, no mesmo nível |
| Irmão geral | `A ~ B` | Seleciona todo `B` que vem depois de `A`, no mesmo nível (não precisa ser imediato) |
| Agrupamento | `A, B, C` | Aplica o mesmo bloco de estilo a vários seletores diferentes |

No exemplo:
- `nav li` remove os marcadores de lista (`list-style: none`) de todos os itens dentro de uma navegação.
- `.card > .card__title` deixa o título do card em negrito, mas **somente** se ele for filho direto de `.card` (evita afetar títulos aninhados mais profundamente).
- `h2 + p` estiliza apenas o parágrafo que aparece imediatamente após um `<h2>`, útil para criar uma "linha de introdução" com espaçamento e cor diferenciados.
- `h1, h2, h3` aplica a mesma fonte a todos os títulos, evitando repetição de código.

**Quando usar:** quando a relação estrutural entre elementos é importante para a regra funcionar corretamente.

**Erro comum:** criar seletores muito longos e específicos (ex.: `.header nav ul li a`), que se tornam frágeis e quebram facilmente se a estrutura HTML mudar.

---

## 5) Pseudo-classes

**O que são:** representam estados especiais de um elemento (como `:hover`, `:focus`) ou posições dentro de um grupo de elementos (como `:first-child`, `:nth-child()`).

```css
.btn:hover {
  background: #0051cc;
}

.btn:focus {
  outline: 3px solid rgba(0, 105, 255, 0.3);
  outline-offset: 2px;
}

ul.menu li:first-child {
  font-weight: bold;
}

table tr:nth-child(2n) {
  background: #f9f9f9;
}

.content > *:not(.no-margin) {
  margin-bottom: 1rem;
}
```

**Explicação:**
- `.btn:hover` escurece o azul do botão quando o mouse passa sobre ele, dando um retorno visual (feedback) de interatividade.
- `.btn:focus` adiciona um contorno (`outline`) visível ao redor do botão quando ele recebe foco pelo teclado (tecla Tab). Isso é essencial para **acessibilidade**.
- `ul.menu li:first-child` deixa o primeiro item de uma lista de menu em negrito, sem precisar adicionar uma classe extra no HTML.
- `table tr:nth-child(2n)` aplica um fundo cinza claro às linhas pares da tabela, criando o efeito "zebra" que facilita a leitura de dados.
- `.content > *:not(.no-margin)` aplica uma margem inferior a todos os filhos diretos de `.content`, **exceto** aqueles que possuem a classe `.no-margin` — um uso prático da pseudo-classe de negação `:not()`.

**Quando usar:** para estados interativos (hover, focus) e seleção condicional por posição ou exclusão.

**Erro comum:** depender apenas de `:hover` para ações essenciais, já que dispositivos touch (celulares, tablets) não possuem estado de "passar o mouse". Nesses casos, é importante oferecer também uma alternativa por toque/clique.

---

## 6) Pseudo-elementos

**O que são:** permitem estilizar ou gerar partes específicas de um elemento que não existem diretamente no HTML, como `::before`, `::after` e `::first-line`.

```css
.subtitle::before {
  content: "•";
  display: inline-block;
  margin-right: 0.5rem;
  color: #ff6b6b;
}

.card {
  position: relative;
  overflow: hidden;
}
.card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%);
  pointer-events: none;
}

p::first-line {
  font-weight: 600;
}
```

**Explicação:**
- `.subtitle::before` insere um marcador decorativo (um "•" vermelho-claro) antes do texto de cada subtítulo, usando a propriedade obrigatória `content`.
- `.card` recebe `position: relative` para servir de referência de posicionamento ao pseudo-elemento `::after`, e `overflow: hidden` para conter esse elemento dentro dos limites do card.
- `.card::after` cria uma camada extra (um gradiente escurecendo de cima para baixo) sobreposta ao card, útil para dar contraste a textos exibidos por cima de imagens. `pointer-events: none` garante que essa camada não bloqueie cliques no conteúdo abaixo dela.
- `p::first-line` deixa a primeira linha de qualquer parágrafo com peso de fonte maior (`font-weight: 600`), um efeito editorial comum em textos jornalísticos.

**Quando usar:** para decorações visuais, sobreposições (overlays) e efeitos tipográficos, sem precisar adicionar elementos extras no HTML.

**Erro comum:** esquecer de declarar `content` (mesmo vazio, `content: ""`) em `::before`/`::after` — sem essa propriedade, o pseudo-elemento simplesmente não é exibido.

---

## 7) Especificidade

A especificidade determina **qual regra CSS "vence"** quando dois ou mais seletores tentam estilizar o mesmo elemento.

**Ordem de prioridade (do mais forte para o mais fraco):**

1. Estilo inline (`style="..."` no HTML)
2. IDs (`#id`)
3. Classes, atributos e pseudo-classes (`.classe`, `[type="text"]`, `:hover`)
4. Elementos e pseudo-elementos (`div`, `::before`)

**Pontuação de referência:**

| Tipo de seletor | Peso |
|---|---|
| ID | 100 |
| Classe / atributo / pseudo-classe | 10 |
| Elemento / pseudo-elemento | 1 |

**Exemplo prático:**

```css
.btn { background: blue; }        /* especificidade: 10 */
#nav .btn { background: red; }    /* especificidade: 110 → esta regra vence */
```

**Boas práticas:**
- Priorize classes para controlar a maior parte do estilo.
- Evite `!important`, reservando-o apenas para casos excepcionais.

---

## 8) Erros Comuns e Como Corrigir

| Erro | Consequência | Correção |
|---|---|---|
| Usar ID para estilização geral | Dificulta sobrescrever estilos, forçando `!important` | Trocar por classe e ajustar a estrutura do CSS |
| Seletores muito longos (`.header nav ul li a`) | Regras frágeis, quebram com mudanças no HTML | Adicionar classes específicas em componentes-chave, como `.nav-link` |
| Depender só de `:hover` | Ações essenciais ficam inacessíveis em telas touch | Oferecer alternativa por clique/toque, ou controlar estado via JavaScript |
| Esquecer `content` em `::before`/`::after` | O pseudo-elemento não aparece | Sempre declarar `content: ""` ou o texto desejado |
| Uso indiscriminado de `!important` | Resolve o sintoma, não a causa da alta especificidade | Entender a origem do conflito e reduzir especificidade do seletor original |

---

## 9) Mini Cheatsheet

```css
/* Classe */
.nome { }

/* ID */
#nome { }

/* Filho direto */
A > B { }

/* Irmão adjacente */
A + B { }

/* Pseudo-classe */
a:hover { }

/* Pseudo-elemento */
p::first-line { }

/* Seletor de atributo */
input[type="text"] { }
```

Use esta tabela para consulta rápida durante o desenvolvimento:

| Seletor | Exemplo | Uso típico |
|---|---|---|
| Elemento | `p { }` | Estilos globais |
| Classe | `.card { }` | Componentes reutilizáveis |
| ID | `#header { }` | Âncoras e alvos de JS |
| Filho direto | `.card > .title { }` | Restringir a filhos imediatos |
| Adjacente | `h2 + p { }` | Elemento logo após outro |
| Pseudo-classe | `:hover`, `:nth-child()` | Estados e posições |
| Pseudo-elemento | `::before`, `::after` | Conteúdo/decoração gerada via CSS |