# Guia Prático de Variáveis CSS (Custom Properties) 

## 1) Definindo Variáveis e :root

```css
:root {
	/* Cores */
	--cor-primaria: #007bff;
	--cor-secundaria: #6c757d;
	--cor-fundo: #ffffff;
	--cor-texto: #212529;

	/* Tipografia e espaçamento */
	--font-base: 16px;
	--space-sm: 0.5rem;
	--space-md: 1rem;
	--space-lg: 1.5rem;

	/* Bordas e sombras */
	--radius: 8px;
	--card-shadow: 0 6px 18px rgba(0,0,0,0.06);
}
```

**Explicação:**
- `:root` é uma pseudo-classe que representa o elemento raiz do documento (equivalente a `<html>`, mas com maior especificidade). Declarar variáveis ali as torna **globais** — acessíveis em qualquer parte do CSS.
- As variáveis são organizadas por categoria (cores, tipografia/espaçamento, bordas/sombras), uma boa prática para manter um arquivo de "tokens de design" organizado e fácil de consultar.
- Como variáveis CSS seguem as regras normais de herança do CSS, todo elemento da página herda automaticamente esses valores de `:root`, a menos que sejam sobrescritos em um seletor mais específico.

**Quando usar:** sempre que você quiser centralizar valores reutilizáveis — cores, espaçamentos, tipografia — em um único lugar, evitando repetição e facilitando manutenção futura.

---

## 2) Reutilização: Como Usar Variáveis

```css
.btn-primary {
	background-color: var(--cor-primaria);
	color: var(--cor-fundo);
	padding: calc(var(--space-md) - 0.25rem) var(--space-lg);
	border-radius: var(--radius);
	border: none;
	cursor: pointer;
}

.card {
	background: var(--cor-fundo);
	color: var(--cor-texto);
	padding: var(--space-lg);
	border-radius: var(--radius);
	box-shadow: var(--card-shadow);
}

/* Uso com fallback (se --cor-acento não existir, usa #ff5722) */
.accent {
	color: var(--cor-acento, #ff5722);
}
```

**Explicação:**
- A sintaxe para **consumir** uma variável é `var(--nome-da-variavel)`.
- `.btn-primary` usa `var(--cor-primaria)` para o fundo e `var(--cor-fundo)` para o texto, além de combinar `var(--space-md)` dentro de um `calc()` para calcular um padding vertical ligeiramente menor que o espaçamento médio padrão.
- `.card` reaproveita as mesmas variáveis de cor, espaçamento, borda e sombra definidas em `:root`, garantindo consistência visual entre diferentes componentes sem repetir valores.
- `.accent` demonstra o uso de **fallback**: a sintaxe `var(--cor-acento, #ff5722)` diz ao navegador para usar `#ff5722` (laranja) caso a variável `--cor-acento` não tenha sido definida em nenhum lugar acessível — evitando que o estilo quebre silenciosamente.

**Quando usar fallback:** em bibliotecas de componentes ou código reutilizável, onde você não tem garantia de que todas as variáveis "esperadas" foram definidas pelo projeto que consome o CSS.

---

## 3) Escopo e Herança

```css
.painel {
	--painel-bg: #f8f9fa; /* variável local somente dentro .painel */
	background: var(--painel-bg);
	padding: var(--space-md);
}

.painel .titulo {
	color: var(--cor-primaria); /* herda de :root */
}
```

**Explicação:**
- Variáveis CSS não precisam ser declaradas apenas em `:root` — elas podem ser declaradas em **qualquer seletor**, funcionando como uma propriedade normal do CSS que segue as regras de herança e cascata.
- `.painel` declara sua própria variável local, `--painel-bg`, que só existe (e só pode ser usada) dentro do escopo de `.painel` e de seus descendentes.
- `.painel .titulo` não declara nenhuma variável nova, então `var(--cor-primaria)` continua puxando o valor definido lá em `:root`, já que variáveis são herdadas normalmente pelos elementos filhos.

**Quando usar:** para criar variáveis específicas de um componente, evitando "poluir" o escopo global (`:root`) com nomes que só fazem sentido dentro daquele contexto.

---

## 4) Theming (Troca de Temas)

```css
.theme-dark {
	--cor-fundo: #0f1720;
	--cor-texto: #e6eef6;
	--cor-primaria: #3b82f6;
}

.theme-dark .card {
	background: var(--cor-fundo);
	color: var(--cor-texto);
}
```

**Explicação:**
- A classe `.theme-dark` **sobrescreve** os valores de `--cor-fundo`, `--cor-texto` e `--cor-primaria` que foram originalmente definidos em `:root`, dentro do escopo de qualquer elemento que tenha essa classe (ou seja descendente dela).
- `.theme-dark .card` não precisa redefinir nenhuma cor manualmente — como `.card` já usa `var(--cor-fundo)` e `var(--cor-texto))`, esses valores são automaticamente atualizados para o tema escuro quando o elemento está dentro de `.theme-dark`.

**Como aplicar na prática:** basta trocar a classe do elemento raiz (geralmente o `<body>`) para ativar o tema:

```html
<body class="theme-dark"> ... </body>
```

**Por que isso é poderoso:** essa é uma das maiores vantagens das variáveis CSS — trocar um tema inteiro do site exigindo apenas a alteração de **uma classe**, sem precisar reescrever nenhuma outra regra de estilo.

---

## 5) Variáveis com calc(), HSL e Manipulação de Cor

```css
/* Usando var() dentro de calc() */
.layout {
	padding: calc(var(--space-lg) * 2);
}

/* Usando HSL com variável para matiz/tonalidade */
:root {
	--accent-h: 210; /* hue */
	--accent-s: 90%;
	--accent-l: 50%;
}

.badge {
	background-color: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
	color: white;
	padding: 0.25rem 0.5rem;
	border-radius: 999px;
}

/* Ajustando luminosidade dinamicamente */
.badge-dark {
	background-color: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) - 15%));
}
```

**Explicação:**
- `.layout` demonstra que variáveis podem ser usadas dentro de expressões matemáticas com `calc()` — nesse caso, multiplicando `--space-lg` por 2 para obter um padding maior, mantendo a relação com o valor base.
- As variáveis `--accent-h`, `--accent-s` e `--accent-l` armazenam separadamente os três componentes de uma cor no formato **HSL** (matiz, saturação e luminosidade). Isso permite manipular apenas **um aspecto da cor** (por exemplo, deixá-la mais escura) sem precisar recalcular o valor hexadecimal inteiro.
- `.badge` monta a cor final combinando essas três variáveis dentro da função `hsl()`.
- `.badge-dark` gera uma variação mais escura da mesma cor de destaque, subtraindo 15% da luminosidade (`calc(var(--accent-l) - 15%)`) — uma técnica muito usada para criar variações de hover, estados ativos, ou tons complementares a partir de uma única cor-base.

**Quando usar:** essa técnica de separar HSL em variáveis individuais é excelente para criar paletas de cores dinâmicas e variações de tonalidade sem duplicar valores de cor inteiros.

---

## 6) Variáveis e Media Queries (Responsividade)

```css
@media (max-width: 600px) {
	:root {
		--space-md: 0.75rem;
		--space-lg: 1rem;
		--font-base: 14px;
	}
}
```

**Explicação:**
- Dentro de uma media query, é possível **redefinir** variáveis já existentes em `:root`, ajustando os valores para um contexto específico — nesse caso, telas com largura máxima de 600px (dispositivos móveis).
- Como `--space-md`, `--space-lg` e `--font-base` já são usados em vários componentes do projeto (`.btn-primary`, `.card`, `.painel` etc.), basta ajustá-los uma única vez dentro da media query para que **todos** os componentes que os utilizam se adaptem automaticamente ao novo tamanho de tela.

**Por que isso é útil:** evita a necessidade de escrever media queries repetidas dentro de cada componente individual — a responsividade é centralizada nas variáveis, e os componentes simplesmente "herdam" o comportamento adaptado.

---

## 7) Uso via JavaScript

```js
document.documentElement.style.setProperty('--cor-primaria', '#ff5722');
document.body.classList.toggle('theme-dark');
```

**Explicação:**
- Diferente de valores fixos no CSS, variáveis CSS podem ser **lidas e alteradas dinamicamente via JavaScript**, em tempo de execução.
- `document.documentElement.style.setProperty('--cor-primaria', '#ff5722')` altera o valor da variável `--cor-primaria` diretamente no elemento raiz (`<html>`), o que atualiza instantaneamente todos os elementos que dependem dessa variável, sem precisar recarregar a página.
- `document.body.classList.toggle('theme-dark')` alterna a classe `.theme-dark` no `<body>`, ativando ou desativando o tema escuro (aproveitando as sobrescritas de variáveis vistas na seção 5).

**Quando usar:** para funcionalidades como seletor de tema (claro/escuro), personalização de cores pelo usuário, ou ajustes dinâmicos de acessibilidade (como aumentar o tamanho de fonte base sob demanda).

---

## 8) Vantagens em Projetos Reais

| Vantagem | Explicação |
|---|---|
| **Consistência** | Centraliza os "tokens" de design (cores, espaçamentos, tipografia) em um único lugar, evitando valores divergentes espalhados pelo código |
| **Manutenção** | Alterar uma variável atualiza automaticamente todos os lugares onde ela é usada, sem precisar buscar e substituir valores manualmente |
| **Theming** | Permite trocar temas inteiros (claro/escuro, marcas diferentes) com poucas linhas de código |
| **Dinamismo** | Pode ser ajustada via JavaScript, permitindo personalização em tempo real conforme preferências do usuário |
| **Performance** | Reduz a necessidade de duplicar regras de CSS inteiras só para mudar pequenos valores |

---

## 9) Boas Práticas e Dicas

- Nomeie variáveis pelo **propósito**, não pelo valor — por exemplo, `--color-primary` em vez de `--blue` ou `--ff0000`. Isso mantém o nome útil mesmo que o valor mude no futuro.
- Use fallbacks em `var()` quando a variável pode não estar sempre definida no contexto onde o CSS será usado.
- Prefira definir os tokens principais em `:root`, e sobrescreva localmente apenas quando um componente ou contexto específico realmente precisar de um valor diferente.
- Evite calcular valores pesados usando `var()` dentro de loops de animação — isso pode impactar a performance de renderização em animações contínuas.

---

## 10) Exemplo Final: Componente Completo

```css
.dialog {
	background: var(--cor-fundo);
	color: var(--cor-texto);
	padding: var(--space-lg);
	border-radius: var(--radius);
	box-shadow: var(--card-shadow);
	width: min(90%, 600px);
}
```

**Explicação:**
- `.dialog` resume, em um único componente, o uso combinado de várias variáveis já apresentadas: cor de fundo, cor de texto, espaçamento, raio de borda e sombra — todas vindas de `:root` (ou de um tema ativo, como `.theme-dark`).
- `width: min(90%, 600px)` não é uma variável, mas complementa o exemplo: a função `min()` faz a largura do diálogo ser **90% da tela** em telas pequenas, mas nunca ultrapassar **600px** em telas maiores — uma técnica responsiva comum para modais e caixas de diálogo.

Esse exemplo demonstra, na prática, como um sistema de variáveis bem estruturado permite montar componentes complexos com poucas linhas, mantendo consistência automática com o restante do projeto (incluindo troca de temas, sem nenhuma alteração no próprio componente).