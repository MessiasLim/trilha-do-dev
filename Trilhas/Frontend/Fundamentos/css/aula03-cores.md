# Guia Completo de Cores no CSS 

## 1) Propriedade color (Cor do Texto)

```css
.texto-colorido-azul {
  color: blue; /* Nome de cor simples */
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
```

**Explicação:**
- A propriedade `color` define a cor do **texto** de um elemento (e, por herança, também afeta bordas de alguns elementos que usam `currentColor`).
- `color` é uma propriedade **herdada**: se um elemento filho não define sua própria cor, ele herda automaticamente a cor do elemento pai.
- No exemplo, `color: blue` usa um **nome de cor** direto (`blue`), a forma mais simples de definir cor em CSS, mas também a mais limitada (apenas 147 nomes disponíveis, ver seção 10).

```css
.cor-black { color: black; margin: 5px 0; }
.cor-white { background-color: #333; color: white; padding: 10px; margin: 5px 0; }
.cor-gray { color: gray; margin: 5px 0; }
.cor-orange { color: orange; margin: 5px 0; }
.cor-purple { color: purple; margin: 5px 0; }
.cor-teal { color: teal; margin: 5px 0; }
```

**Explicação:** essas classes demonstram várias cores nomeadas comuns (`black`, `gray`, `orange`, `purple`, `teal`). Note que `.cor-white` precisa de um fundo escuro (`#333`) para o texto branco ficar legível — cores nomeadas claras como `white` exigem cuidado extra com o contraste.

**Quando usar:** cores nomeadas são úteis para prototipagem rápida, mas em projetos reais o guia recomenda usar HEX, RGB ou HSL para maior precisão (ver seção 13).

---

## 2) Propriedade background-color (Cor de Fundo)

```css
.fundo-vermelho {
  background-color: red;
  color: white; /* Texto branco para contrastar */
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
}

.fundo-amarelo {
  background-color: yellow;
  color: black; /* Texto preto para contrastar */
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
}

.fundo-transparente {
  background-color: transparent; /* Sem cor de fundo */
  color: black;
  padding: 20px;
  margin: 10px 0;
  border: 2px solid black;
}
```

**Explicação:**
- `background-color` define a cor de **fundo** do elemento, preenchendo o espaço interno (dentro das bordas), diferente de `color`, que afeta apenas o texto.
- Diferente de `color`, `background-color` **não é herdada** por padrão — cada elemento precisa declarar seu próprio fundo.
- Cada exemplo ajusta a cor do texto (`color`) de acordo com o fundo, garantindo contraste adequado: fundo vermelho/azul usa texto branco, fundo amarelo usa texto preto.
- `.fundo-transparente` usa `background-color: transparent`, deixando o fundo do elemento pai visível através dele — útil quando você quer apenas a borda, sem preenchimento.

**Diferença-chave do guia:** `color` muda a cor do **texto**; `background-color` muda a cor de **fundo** do elemento.

---

## 3) Formato HEX

```css
.hex-exemplo-1 {
  background-color: #FF0000; /* Vermelho */
  color: white;
}

.hex-exemplo-curto {
  background-color: #F0F; /* Magenta curto (#FF00FF) */
  color: white;
}
```

**Explicação:**
- O formato HEX (hexadecimal) segue o padrão `#RRGGBB`, onde cada par de dígitos (`RR`, `GG`, `BB`) representa a intensidade de vermelho, verde e azul, respectivamente, em uma escala hexadecimal de `00` a `FF` (equivalente a 0–255 em decimal).
- `#FF0000` representa vermelho puro (vermelho no máximo, verde e azul em zero).
- Existe também um **formato curto de 3 dígitos** (`#RGB`), em que cada dígito é duplicado automaticamente: `#F0F` equivale a `#FF00FF` (magenta).

**Exemplos de referência do guia:**

| Cor | HEX |
|---|---|
| Vermelho puro | `#FF0000` |
| Verde puro | `#00FF00` |
| Azul puro | `#0000FF` |
| Branco | `#FFFFFF` |
| Preto | `#000000` |
| Cinza médio | `#808080` |

**Vantagens do HEX:** é o formato mais comum em web design, suportado por todas as ferramentas de design, e é sucinto — ideal para representar cores exatas de uma paleta fixa.

O guia também apresenta uma **paleta de cinzas em HEX** (de `#111111` a `#FFFFFF`), demonstrando como pequenas variações no valor hexadecimal criam uma escala gradual de tonalidades, técnica comum para criar hierarquia visual em interfaces.

---

## 4) Formato RGB/RGBA

```css
.rgb-exemplo-1 {
  background-color: rgb(255, 0, 0); /* Vermelho */
  color: white;
}

.rgba-semi-transparente {
  background-color: rgba(255, 0, 0, 0.5); /* 50% de transparência */
  color: white;
}
```

**Explicação:**
- O formato **RGB** define cores usando três canais — vermelho, verde e azul —, cada um variando de `0` a `255`, na sintaxe `rgb(red, green, blue)`.
- O formato **RGBA** adiciona um quarto valor, o canal **alpha** (transparência), que varia de `0` (totalmente transparente) a `1` (totalmente opaco): `rgba(red, green, blue, alpha)`.
- `rgba(255, 0, 0, 0.5)` representa um vermelho com 50% de opacidade, deixando o que está atrás do elemento parcialmente visível.

**Exemplo de sobreposição com RGBA:**

```css
.rgba-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Overlay escuro semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}
```

Essa técnica é muito usada para criar um overlay escuro semi-transparente sobre imagens ou gradientes de fundo, melhorando a legibilidade de texto sobreposto, sem esconder completamente o conteúdo de fundo.

**Vantagens do RGB/RGBA:** valores fáceis de entender por canal, suporte nativo a transparência (RGBA), e é um bom formato para cores geradas dinamicamente via JavaScript (já que os valores são simples números).

---

## 5) Formato HSL/HSLA

```css
.hsl-exemplo-1 {
  background-color: hsl(0, 100%, 50%); /* Vermelho puro */
  color: white;
}

.hsla-transparencia {
  background-color: hsla(0, 100%, 50%, 0.3); /* Vermelho semi-transparente */
  color: black;
  border: 2px solid hsl(0, 100%, 50%);
}
```

**Explicação:**
- O formato **HSL** (Hue, Saturation, Lightness — Matiz, Saturação, Luminosidade) descreve a cor da forma como percebemos visualmente, e não por mistura de canais RGB.
- **Hue (matiz):** um ângulo de 0° a 360° no círculo cromático — `0°` é vermelho, `60°` amarelo, `120°` verde, `180°` ciano, `240°` azul, `300°` magenta.
- **Saturation (saturação):** de `0%` (sem cor, cinza) a `100%` (cor pura/vibrante).
- **Lightness (luminosidade):** de `0%` (preto) a `50%` (cor "normal") a `100%` (branco).
- **HSLA** adiciona o mesmo canal alpha do RGBA, permitindo transparência.

**Demonstração de variações com HSL** (mesma matiz, luminosidade diferente):

```css
.hsl-var-1 { background-color: hsl(200, 100%, 20%); } /* Muito escuro */
.hsl-var-4 { background-color: hsl(200, 100%, 50%); } /* Puro */
.hsl-var-7 { background-color: hsl(200, 100%, 80%); } /* Muito claro */
```

Ao manter o `hue` (200°) e a `saturation` (100%) fixos e variar apenas a `lightness`, é possível gerar uma escala inteira de tons de azul de forma previsível — essa é a principal vantagem do HSL sobre HEX/RGB.

**Vantagens do HSL/HSLA:** facilidade para criar variações (mais escuro, mais claro, mais pastel) ajustando apenas um valor; formato intuitivo para designers; excelente para sistemas de design com paletas derivadas de uma cor-base.

---

## 6) Comparação dos Formatos

| Formato | Exemplo | Vantagens | Quando Usar |
|---|---|---|---|
| **HEX** | `#FF0000` | Comum, simples, sucinto | Padrão da indústria, ferramentas de design, cores exatas |
| **RGB** | `rgb(255,0,0)` | Legível, intuitivo, sem prefixo especial | Cores simples, sem necessidade de formato específico |
| **RGBA** | `rgba(255,0,0,0.5)` | Com transparência, flexível | Overlays, efeitos visuais, camadas sobrepostas |
| **HSL** | `hsl(0,100%,50%)` | Intuitivo, fácil criar variações | Sistemas de design, criação de paletas, manutenção facilitada |
| **HSLA** | `hsla(0,100%,50%,0.5)` | HSL + transparência | HSL com necessidade de transparência, efeitos avançados |

**Recomendação do guia:**
- Use **HEX** para cores específicas de uma paleta fixa.
- Use **HSL** para criar variações de uma mesma cor (escuro/claro/pastel).
- Use **RGBA/HSLA** sempre que precisar de transparência.

---

## 7) Gradientes

Gradientes criam transições suaves entre duas ou mais cores. O guia cobre quatro tipos: `linear-gradient`, `radial-gradient`, `conic-gradient` e a variante `repeating-linear-gradient`.

### 8.1 Linear Gradient

```css
.linear-gradient-3 {
  background: linear-gradient(135deg, #667eea, #764ba2);
  height: 100px;
  border-radius: 8px;
}

/* Gradiente com múltiplas cores e posições */
.linear-gradient-multi {
  background: linear-gradient(
    to right,
    #FF0000 0%,      /* Vermelho no início */
    #FFFF00 25%,     /* Amarelo a 25% */
    #00FF00 50%,     /* Verde no meio */
    #0000FF 75%,     /* Azul a 75% */
    #FF00FF 100%     /* Magenta no final */
  );
}
```

**Explicação:** `linear-gradient` cria uma transição de cor em **linha reta**, seguindo uma direção (como `to right`, `to bottom`, ou um ângulo específico em graus, como `135deg`). É possível especificar apenas as cores (distribuídas uniformemente) ou definir **pontos de parada** explícitos (`0%`, `25%`, `50%`...) para controlar exatamente onde cada cor começa e termina, como no exemplo com 5 cores.

### 8.2 Radial Gradient

```css
.radial-gradient-1 {
  background: radial-gradient(circle, red, blue);
}

/* Radial com posição customizada */
.radial-gradient-3 {
  background: radial-gradient(
    circle at 30% 70%,
    rgba(255, 0, 0, 1),
    rgba(0, 0, 255, 1)
  );
}
```

**Explicação:** `radial-gradient` cria uma transição de cor que se espalha a partir de um **ponto central**, em formato circular (`circle`) ou elíptico (`ellipse`, o padrão). É possível customizar a posição desse ponto central usando `at X% Y%` — no exemplo, o centro do gradiente é posicionado a 30% da largura e 70% da altura do elemento, em vez do centro padrão.

### 8.3 Conic Gradient

```css
.conic-gradient-1 {
  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
```

**Explicação:** `conic-gradient` cria uma transição de cor **angular**, girando ao redor de um ponto central (como as cores de um relógio ou de uma roda de cores). Combinado com `border-radius: 50%`, esse exemplo forma um círculo colorido no estilo "roda cromática" completa.

### 8.4 Gradiente com Repetição

```css
.repeating-linear-gradient {
  background: repeating-linear-gradient(
    45deg,
    #FF0000,
    #FF0000 10px,
    #FFFF00 10px,
    #FFFF00 20px
  );
}
```

**Explicação:** `repeating-linear-gradient` repete um padrão de gradiente indefinidamente ao longo do elemento. Nesse exemplo, o padrão alterna faixas de vermelho e amarelo a cada 10px, em um ângulo de 45°, criando um efeito visual de listras diagonais (comum em avisos de "zona de atenção").

---

## 8) Contraste e Acessibilidade

O contraste entre cores é **fundamental** para acessibilidade. As diretrizes WCAG (Web Content Accessibility Guidelines) definem razões mínimas de contraste:

| Tipo de conteúdo | Razão de contraste mínima |
|---|---|
| Texto normal | 4.5:1 |
| Texto grande (18pt+) | 3:1 |
| Componentes gráficos | 3:1 |

**Ferramentas recomendadas pelo guia:** WebAIM Contrast Checker, Color Oracle (simulador de daltonismo), e o painel de acessibilidade do Chrome DevTools.

### Exemplos de bom contraste

```css
.bom-contraste {
  background-color: #000000; /* Preto */
  color: #FFFFFF; /* Branco */
  padding: 20px;
}

.bom-contraste-2 {
  background-color: #003366; /* Azul escuro */
  color: #FFFFFF; /* Branco */
  padding: 20px;
}
```

**Explicação:** essas combinações (preto/branco, azul escuro/branco) atingem facilmente a razão de contraste mínima recomendada, garantindo boa legibilidade para a maioria dos usuários, incluindo pessoas com baixa visão.

### Exemplos de má acessibilidade (a evitar)

```css
.ma-contraste-1 {
  background-color: #FFFF00; /* Amarelo */
  color: #FFFFFF; /* Branco - MUITO RUIM! */
}

.ma-contraste-2 {
  background-color: #CCCCCC; /* Cinza claro */
  color: #DDDDDD; /* Cinza mais claro - IMPOSSÍVEL LER! */
}
```

**Explicação:** essas combinações têm contraste extremamente baixo — texto branco sobre amarelo, ou dois tons de cinza muito próximos — tornando o conteúdo praticamente ilegível para muitos usuários. O guia as apresenta explicitamente como **exemplos do que não fazer**.

### Usando cor para comunicar mensagens (com reforço textual)

```css
.status-erro {
  background-color: #F8D7DA; /* Rosa claro */
  color: #721C24; /* Vermelho escuro */
  border: 1px solid #F5C6CB;
}

.status-sucesso {
  background-color: #D4EDDA; /* Verde claro */
  color: #155724; /* Verde escuro */
  border: 1px solid #C3E6CB;
}

.status-aviso {
  background-color: #FFF3CD; /* Amarelo claro */
  color: #856404; /* Marrom */
  border: 1px solid #FFEEBA;
}

.status-info {
  background-color: #D1ECF1; /* Ciano claro */
  color: #0C5460; /* Ciano escuro */
  border: 1px solid #BEE5EB;
}
```

**Explicação:** cada classe representa um estado de mensagem (erro, sucesso, aviso, info), usando pares de cores clara/escura da mesma família cromática, garantindo bom contraste interno. O guia reforça a boa prática de **nunca depender apenas da cor** para comunicar uma mensagem — o texto (e, idealmente, um ícone) deve reforçar o significado, já que pessoas com daltonismo podem não distinguir as cores.

### Paleta acessível para daltonismo

```css
.acessivel-azul { background-color: #0173B2; color: white; }
.acessivel-laranja { background-color: #DE8F05; color: white; }
.acessivel-roxo { background-color: #CC78BC; color: white; }
.acessivel-marrom { background-color: #CA9161; color: white; }
.acessivel-ciano { background-color: #56B4E9; color: black; }
```

**Explicação:** essa paleta específica (azul, laranja, roxo, marrom, ciano) foi escolhida por permanecer distinguível mesmo para pessoas com os tipos mais comuns de daltonismo (deficiência de percepção de vermelho/verde).

**O guia recomenda evitar:**
- Usar apenas vermelho e verde juntos como diferenciadores.
- Usar apenas azul e amarelo puros.
- Combinações de cores que diferem apenas em saturação (sem variar também em luminosidade).

---

## 9) Palavras-chave de Cores CSS

O CSS suporta **147 cores nomeadas**. Algumas categorias citadas no guia:

| Categoria | Exemplos |
|---|---|
| Básicas | `black`, `white`, `red`, `green`, `blue`, `yellow`, `cyan`, `magenta` |
| Cinzas | `gray`, `silver`, `darkgray`, `lightgray` |
| Cores naturais | `orange`, `brown`, `olive`, `maroon`, `navy`, `teal`, `aqua`, `lime`, `fuchsia`, `salmon`, `coral`, `khaki`, `tan`, `beige`, `chocolate`, `crimson`, `gold` |

**Pontos importantes:**
- Os nomes de cores são **case-insensitive** (não diferenciam maiúsculas de minúsculas).
- São convenientes para uso rápido, mas **limitadas** — não permitem ajustes finos de tonalidade.
- Para cores específicas de uma paleta de projeto, o guia recomenda usar HEX, RGB ou HSL em vez de nomes.

---

## 10) Resumo das Propriedades de Cor

```css
/* COLOR — cor do texto */
color: blue;
color: #FF0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);

/* BACKGROUND-COLOR — cor de fundo */
background-color: blue;
background-color: #FF0000;
background-color: rgb(255, 0, 0);
background-color: transparent;

/* GRADIENTES — transições de cor */
background: linear-gradient(to right, red, blue);
background: radial-gradient(circle, red, blue);
background: conic-gradient(red, yellow, blue);
background: repeating-linear-gradient(...);
```

**Explicação:** este bloco resume, em um só lugar, as principais formas de aplicar cor no CSS: como texto (`color`), como fundo (`background-color`), e como transição (gradientes) — cada um aceitando qualquer um dos formatos de cor já vistos (nome, HEX, RGB(A), HSL(A)).

**Lembrete de acessibilidade do guia:** manter contraste mínimo de 4.5:1 para texto, nunca usar cor como único meio de comunicação, testar com simuladores de daltonismo, e sempre reforçar mensagens com texto e ícones além da cor.

---

## 11) Exemplo Prático: Sistema de Design com Cores

```css
:root {
  --cor-primaria: #007BFF;
  --cor-secundaria: #6C757D;
  --cor-sucesso: #28A745;
  --cor-aviso: #FFC107;
  --cor-erro: #DC3545;
  --cor-info: #17A2B8;

  --cor-fundo: #FFFFFF;
  --cor-texto: #212529;
  --cor-borda: #DEE2E6;
}

.card-exemplo {
  background-color: var(--cor-fundo);
  border: 2px solid var(--cor-borda);
  border-radius: 8px;
  padding: 20px;
}

.card-botao {
  background-color: var(--cor-primaria);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.card-botao:hover {
  background-color: hsl(210, 100%, 35%); /* Versão mais escura do primário */
}
```

**Explicação:**
- Essa seção junta todos os conceitos anteriores em um mini "design system": uma paleta de cores centralizada em `:root` (ver tabela completa na seção 1), reutilizada em componentes como `.card-exemplo` e `.card-botao`.
- `.card-botao:hover` demonstra uma técnica prática combinando dois formatos de cor: a cor base é definida via variável (`--cor-primaria`, em HEX), mas o estado de hover usa **HSL diretamente** (`hsl(210, 100%, 35%)`) para gerar uma versão mais escura da mesma cor — uma alternativa a declarar um HEX completamente novo, aproveitando a facilidade do HSL para criar variações de luminosidade.
- `.card-botao-sucesso` e `.card-botao-erro` reaproveitam as variáveis semânticas (`--cor-sucesso`, `--cor-erro`) para criar variantes do mesmo botão sem duplicar nenhuma regra de layout.

**Por que isso importa:** esse exemplo mostra, na prática, a filosofia central do guia — combinar variáveis CSS com os formatos de cor certos (HEX para a paleta base, HSL para variações) resulta em um sistema de cores consistente, fácil de manter e de estender.

---

## 12) Dicas Finais

### 1. Escolha de formato

| Formato | Quando usar |
|---|---|
| HEX | Padrão geral; use quando tiver uma cor exata definida |
| RGB/RGBA | Quando precisar de transparência ou clareza por canal |
| HSL/HSLA | Para criar variações e facilitar manutenção |
| Nomeado | Apenas para prototipagem rápida |

### 2. Paleta de cores
- Escolha de 3 a 5 cores principais para o projeto.
- Use HSL para gerar variações consistentes dessas cores-base.
- Centralize tudo em variáveis CSS (`--nome-da-variavel`).

### 3. Acessibilidade
- Sempre teste o contraste com ferramentas apropriadas.
- Combine cor, ícones e texto para comunicar mensagens.
- Leve em conta usuários com daltonismo ao escolher combinações.

### 4. Gradientes
- Use para criar fundos visuais mais ricos.
- Combine com RGBA para criar sobreposições (overlays).
- Evite excesso — o guia recomenda no máximo 2–3 gradientes por página.

### 5. Manutenção
- Use variáveis CSS para centralizar paletas de cor.
- Documente o nome e o propósito de cada cor.
- Planeje desde já a possibilidade de um tema claro e um tema escuro.