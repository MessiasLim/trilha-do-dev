# Guia de Media Queries e Design Responsivo em CSS 

## 1) O que São Media Queries?

Media queries são regras CSS que aplicam estilos **condicionalmente**, baseadas em características do dispositivo — como largura, altura, orientação e preferências do usuário.

```css
@media (condition) {
  /* estilos aplicados quando a condição é verdadeira */
}
```

**Características comuns citadas no guia:**

| Condição | O que verifica |
|---|---|
| `(min-width: 768px)` | Aplica quando a largura da viewport é maior ou igual a 768px |
| `(max-width: 767px)` | Aplica quando a largura da viewport é menor ou igual a 767px |
| `(orientation: landscape)` | Aplica quando o dispositivo está em modo paisagem |
| `(prefers-reduced-motion: reduce)` | Aplica conforme a preferência de acessibilidade do usuário por menos animações |

---

## 2) min-width vs. max-width

| Abordagem | Direção | Estratégia | Recomendação |
|---|---|---|---|
| **min-width** | Do pequeno para o grande | **Mobile First**: começa simples no mobile, adiciona complexidade conforme a tela cresce | ✅ Recomendada |
| **max-width** | Do grande para o pequeno | **Desktop First**: começa complexo no desktop, simplifica conforme a tela diminui | ⚠️ Menos recomendada |

**Diferença fundamental:** `min-width` define estilos que se aplicam **a partir de** um determinado tamanho de tela; `max-width` define estilos que se aplicam **até** um determinado tamanho.

---

## 3) Exemplo: min-width (Mobile First) — Recomendado

```css
/* Estilo BASE (mobile, 320px+): simples, linear, sem complexidade */
.exemplo-min-width {
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 14px;
  background: #f0f0f0;
}

/* Tablet: 768px+, começamos a adicionar mais espaço */
@media (min-width: 768px) {
  .exemplo-min-width {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1.5rem;
    font-size: 16px;
  }
}

/* Desktop: 1024px+, layout mais elaborado */
@media (min-width: 1024px) {
  .exemplo-min-width {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
    font-size: 18px;
  }
}
```

**Explicação:**
- O estilo **base** (fora de qualquer media query) é aplicado a **todas** as telas, incluindo as menores — nesse caso, um layout simples em bloco, com fonte pequena.
- Conforme a tela cresce e atinge `768px`, o elemento se transforma em uma grade de 2 colunas, com mais espaçamento e fonte maior.
- A partir de `1024px`, a grade passa a ter 3 colunas, com ainda mais espaçamento.
- Cada media query **adiciona ou sobrescreve apenas o que muda**, sem precisar redefinir tudo do zero — essa é a essência da abordagem Mobile First.

---

## 4) Exemplo: max-width (Desktop First) — Não Recomendado

```css
/* Estilo BASE (desktop, >1024px): todos os estilos já aqui */
.exemplo-max-width {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  font-size: 18px;
  width: 100%;
  background: #f0f0f0;
}

/* Tablet: 768px até 1023px, reseta e simplifica */
@media (max-width: 1023px) {
  .exemplo-max-width {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1.5rem;
    font-size: 16px;
  }
}

/* Mobile: até 767px, volta para o simples */
@media (max-width: 767px) {
  .exemplo-max-width {
    display: block;
    padding: 1rem;
    font-size: 14px;
  }
}
```

**Explicação:** aqui a ordem é invertida — o estilo base já assume a versão mais **complexa** (desktop, 3 colunas), e cada media query subsequente precisa **desfazer** parte desse trabalho conforme a tela diminui.

**Problema apontado pelo guia:** essa abordagem exige declarar todos os estilos complexos primeiro, para depois removê-los/simplificá-los em telas menores — resultando em mais código e mais esforço de manutenção do que a abordagem Mobile First (seção 4), que apenas **adiciona** complexidade conforme necessário.

---

## 5) Breakpoints Recomendados

Não existem valores "corretos" para breakpoints, mas o guia sugere os seguintes como padrões comuns da indústria:

| Breakpoint | Dispositivo típico | Observação |
|---|---|---|
| `320px` | iPhone SE / dispositivos antigos | Mínimo suportado |
| `480px` | Celulares pequenos | Altura importante |
| `640px` | Celulares pequenos | Largura importante |
| `768px` | Tablets em modo retrato | Breakpoint comum |
| `1024px` | Tablets em modo paisagem | Breakpoint comum |
| `1280px` | Desktops pequenos | Breakpoint comum |
| `1536px` | Desktops grandes | Opcional |
| `1920px+` | Monitores 4K | Opcional |

**Recomendação do guia:** usar entre **3 e 5 breakpoints** para não sobrecomplicar o projeto — quanto mais breakpoints, mais difícil fica manter a consistência visual entre eles.

---

## 6) Mobile First — A Estratégia Recomendada

**Princípios centrais:**
1. Escrever o CSS pensando primeiro no **mobile** (estilo base).
2. Usar `@media (min-width: ...)` para adicionar estilos conforme a tela cresce.
3. Começar simples, adicionar complexidade progressivamente.

**Vantagens apontadas pelo guia:**
- Melhor performance no mobile, já que menos CSS precisa ser processado inicialmente.
- Força o desenvolvedor a priorizar o que é realmente essencial no conteúdo.
- Manutenção mais fácil — "crescer" o layout é mais lógico do que "encolher" um layout já complexo.
- Melhor para acessibilidade.

```css
.layout-mobile-first {
  /* BASE: Mobile (320px+) */
  display: flex;
  flex-direction: column; /* empilhado */
  gap: 1rem;
  padding: 1rem;
}

.layout-mobile-first .sidebar { order: 2; width: 100%; }
.layout-mobile-first .main { order: 1; width: 100%; }

/* TABLET (768px+) */
@media (min-width: 768px) {
  .layout-mobile-first {
    flex-direction: row;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  .layout-mobile-first .sidebar { order: 2; flex: 0 0 30%; }
  .layout-mobile-first .main { order: 1; flex: 1; }
}

/* DESKTOP (1024px+) */
@media (min-width: 1024px) {
  .layout-mobile-first { gap: 2rem; padding: 2rem; }
  .layout-mobile-first .sidebar { flex: 0 0 25%; }
}
```

**Explicação do exemplo:**
- No mobile, o layout usa `flex-direction: column` (empilhado verticalmente), com o conteúdo principal (`order: 1`) aparecendo **antes** da sidebar (`order: 2`) — priorizando o conteúdo mais importante primeiro em telas pequenas.
- No tablet (`768px+`), o `flex-direction` muda para `row` (lado a lado), e a sidebar passa a ocupar 30% da largura, enquanto o conteúdo principal (`flex: 1`) ocupa o restante.
- No desktop (`1024px+`), o espaçamento aumenta ainda mais, e a sidebar é reduzida proporcionalmente para 25%, dando mais espaço ao conteúdo principal em telas grandes.

*(Nota: como mencionado na seção 1, o uso de `var(--bp-md)` dentro do `@media` neste trecho pode não funcionar em todos os navegadores — considere substituir por valores diretos como `768px` ao aplicar este código.)*

---

## 7) Adaptação de Layout — Padrões Comuns

### A. Grid auto-fit/auto-fill (responsivo sem media queries!)

```css
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

@media (max-width: 480px) {
  .grid-auto {
    grid-template-columns: 1fr; /* força 1 coluna em muito pequeno */
    gap: 1rem;
    padding: 0.5rem;
  }
}
```

**Explicação:** a técnica `repeat(auto-fit, minmax(250px, 1fr))` já resolve boa parte da responsividade automaticamente, sem precisar de media queries — mas o guia mostra que ainda é possível combinar com uma media query pontual (nesse caso, forçando 1 coluna em telas muito pequenas, onde nem 250px cabem confortavelmente).

### B. Tipografia responsiva

```css
.heading-responsive {
  font-size: 1.25rem; /* Mobile: 20px */
  line-height: 1.2;
}

@media (min-width: 768px) {
  .heading-responsive { font-size: 1.75rem; } /* 28px */
}

@media (min-width: 1024px) {
  .heading-responsive { font-size: 2.5rem; } /* 40px */
}

/* ALTERNATIVA MODERNA: font-size com clamp() (sem media queries!) */
.heading-clamp {
  font-size: clamp(1.25rem, 4vw, 2.5rem);
  /* min: 20px, preferred: 4% da viewport, max: 40px */
}
```

**Explicação:** o guia apresenta duas abordagens equivalentes: a tradicional, com três tamanhos fixos definidos por media queries, e a moderna, com `clamp()`, que cresce suavemente entre um mínimo e um máximo sem "saltos" abruptos entre breakpoints.

### C. Visibilidade e ocultar elementos

```css
.hidden-mobile { display: block; }

@media (max-width: 768px) {
  .hidden-mobile { display: none; } /* oculta em dispositivos <= 768px */
}

.visible-mobile { display: none; }

@media (max-width: 768px) {
  .visible-mobile { display: block; } /* mostra apenas em mobile */
}
```

**Explicação:** essas duas classes utilitárias seguem a lógica oposta uma da outra: `.hidden-mobile` esconde conteúdo em telas pequenas (útil, por exemplo, para elementos decorativos que só fazem sentido em telas grandes); `.visible-mobile` faz o oposto, mostrando conteúdo apenas em telas pequenas (como um botão de menu hambúrguer).

### D. Padding/margin responsivos

```css
.section-spacing { padding: 1rem; } /* mobile */

@media (min-width: 768px) {
  .section-spacing { padding: 2rem; } /* tablet */
}

@media (min-width: 1024px) {
  .section-spacing { padding: 3rem; } /* desktop */
}

/* ALTERNATIVA: padding responsivo com clamp() */
.section-spacing-clamp {
  padding: clamp(1rem, 5vw, 3rem);
}
```

**Explicação:** o mesmo padrão da tipografia (item B) se aplica ao espaçamento — `clamp()` permite substituir várias media queries por uma única linha que escala suavemente.

### E. Navegação adaptativa

```css
.navbar-menu {
  display: none; /* oculto por padrão */
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #ddd;
  padding: 1rem;
}

.navbar-menu.open {
  display: flex; /* mostra quando tem classe .open (JS) */
}

@media (min-width: 768px) {
  .navbar-menu {
    display: flex;
    flex-direction: row;
    position: static;
    border: none;
    padding: 0;
  }

  .navbar-toggle { /* botão de menu */
    display: none;
  }
}
```

**Explicação:** esse é o padrão clássico de **menu hambúrguer responsivo**: no mobile, o menu (`.navbar-menu`) fica escondido por padrão (`display: none`) e só aparece como um painel sobreposto (`position: absolute`) quando recebe a classe `.open` via JavaScript (geralmente ao clicar em um botão de menu). A partir de `768px`, o menu volta a ser exibido normalmente em linha (`flex-direction: row`, `position: static`), e o botão de abrir/fechar (`.navbar-toggle`) é escondido, já que não é mais necessário em telas maiores.

---

## 8) Orientação: Landscape vs. Portrait

```css
@media (orientation: landscape) {
  .video-container {
    max-height: 60vh; /* limite altura em paisagem */
  }
}

@media (orientation: portrait) {
  .video-container {
    max-height: 50vh;
  }
}
```

**Explicação:** a media feature `orientation` detecta se a largura da tela é maior que a altura (`landscape`, paisagem) ou o contrário (`portrait`, retrato). O exemplo ajusta a altura máxima de um player de vídeo de acordo com a orientação, garantindo que ele nunca ocupe espaço demais na tela, independentemente de como o dispositivo está posicionado.

---

## 9) Preferências do Usuário (Acessibilidade)

```css
/* Respeitar preferência de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* Respeitar preferência de contraste alto */
@media (prefers-contrast: more) {
  body {
    color: #000;
    background: #fff;
    border-color: #000;
  }
}

/* Respeitar preferência de tema escuro */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: #e0e0e0;
  }
}
```

**Explicação:** essas media queries **não dependem do tamanho da tela**, mas sim de **preferências do sistema operacional/navegador** configuradas pelo próprio usuário:

| Media feature | O que respeita |
|---|---|
| `prefers-reduced-motion: reduce` | Usuários que configuraram o sistema para reduzir animações (por sensibilidade a movimento ou enjoo) — o exemplo desativa **todas** as animações e transições da página |
| `prefers-contrast: more` | Usuários que preferem maior contraste visual — o exemplo força preto sobre branco puro |
| `prefers-color-scheme: dark` | Usuários com o tema escuro ativado no sistema — o exemplo aplica automaticamente um esquema de cores escuro |

**Importância:** essas queries permitem que o site respeite as preferências de acessibilidade e conforto visual do usuário automaticamente, sem exigir nenhuma configuração manual dentro do próprio site.

---

## 10) Combinando Múltiplas Condições (AND, OR, NOT)

```css
/* AND: múltiplas condições ao mesmo tempo */
@media (min-width: 768px) and (orientation: landscape) {
  /* Aplica quando: largura >= 768px E orientação é paisagem */
  .map { height: 100vh; }
}

/* OR (vírgula): qualquer uma das condições */
@media (min-width: 1024px), (orientation: landscape) {
  /* Aplica quando: largura >= 1024px OU orientação é paisagem */
  .sidebar { position: sticky; top: 0; }
}

/* NOT: negação */
@media not (max-width: 767px) {
  /* Aplica em tudo EXCETO <= 767px (ou seja, >= 768px) */
  .desktop-only { display: block; }
}
```

**Explicação:**

| Operador | Sintaxe | Comportamento |
|---|---|---|
| **AND** | `(condição A) and (condição B)` | A regra só se aplica se **ambas** as condições forem verdadeiras |
| **OR** | `(condição A), (condição B)` (vírgula) | A regra se aplica se **qualquer uma** das condições for verdadeira |
| **NOT** | `not (condição)` | A regra se aplica quando a condição é **falsa** (inverte a lógica) |

- O exemplo de `AND` só ajusta a altura do mapa quando a tela é larga **e** está em modo paisagem simultaneamente.
- O exemplo de `OR` torna a sidebar fixa (`sticky`) tanto em telas grandes quanto em telas menores que estejam em modo paisagem — cobrindo dois cenários diferentes com uma única regra.
- O exemplo de `NOT` mostra elementos "somente desktop" em qualquer tela que não seja `<= 767px`, ou seja, equivalente a `min-width: 768px`.

---

## 11) Unidades Responsivas

| Unidade | Relativa a | Responsiva? |
|---|---|---|
| `px` | Nada (valor fixo) | Não |
| `%` | Container pai | Parcialmente (depende do pai) |
| `em` | `font-size` do próprio elemento | Parcialmente |
| `rem` | `font-size` da raiz (`:root`) | Parcialmente |
| `vw` | 1% da largura da viewport | Sim |
| `vh` | 1% da altura da viewport | Sim |

```css
.responsive-width {
  width: 90%; /* 90% do pai */
  max-width: 1200px;
}

.responsive-font {
  font-size: 2vw; /* cresce com a tela */
}

.responsive-padding {
  padding: 5vw; /* padding responsivo */
}
```

**Explicação:** `.responsive-width` combina uma largura fluida (`90%`) com um teto máximo (`max-width: 1200px`), evitando que o elemento fique excessivamente largo em monitores muito grandes. `.responsive-font` e `.responsive-padding` usam `vw` para escalar diretamente com a largura da viewport — uma abordagem simples, mas que deve ser usada com cuidado (idealmente combinada com `clamp()`, como visto na seção 8), já que `vw` puro pode gerar textos ilegíveis em telas extremamente pequenas ou grandes.

---

## 12) Exemplo Prático Completo: Website Responsivo

```css
.website {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header */
.website-header {
  padding: 1rem;
  background: #007bff;
  color: white;
}

@media (min-width: 768px) {
  .website-header { padding: 1.5rem; }
}

/* Conteúdo principal */
.website-content {
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
}

/* Mobile: stack layout */
@media (max-width: 767px) {
  .website-content { flex-direction: column; }
  .website-sidebar { order: 2; }
  .website-main { order: 1; }
}

/* Tablet+: layout lado a lado */
@media (min-width: 768px) {
  .website-content { flex-direction: row; }
  .website-main { flex: 1; }
  .website-sidebar { flex: 0 0 250px; }
}

/* Footer */
.website-footer {
  padding: 1rem;
  background: #333;
  color: white;
  text-align: center;
}
```

**Explicação:**
- `.website` usa `flex-direction: column` com `min-height: 100vh`, criando a estrutura básica de página completa (header, conteúdo, footer empilhados verticalmente, ocupando no mínimo toda a altura da tela).
- `.website-header` recebe um pouco mais de espaçamento interno a partir de `768px`.
- `.website-content` alterna entre `column` (mobile, conteúdo empilhado, com o `main` aparecendo primeiro via `order`) e `row` (tablet/desktop, sidebar e conteúdo lado a lado) — o mesmo padrão de reorganização já visto na seção 7.
- `.website-footer` mantém o mesmo estilo em todos os tamanhos de tela, já que não precisa de nenhuma adaptação especial.

*(Nota: o guia original usa `calc(var(--bp-md) - 1px)` na media query mobile deste exemplo — o que soma a limitação de `var()` em media queries (seção 1) a uma tentativa de calcular "um pixel antes" do breakpoint médio, para evitar sobreposição entre as duas regras. O valor equivalente direto seria `767px`, usado nesta versão para maior clareza e compatibilidade.)*

---

## 13) Dicas e Boas Práticas

### Faça

- Sempre use **Mobile First** (comece pequeno).
- Teste em **dispositivos reais**, não apenas no DevTools do navegador.
- Use variáveis para nomear breakpoints conceitualmente (tendo em mente a ressalva técnica da seção 1 sobre `var()` dentro de `@media`).
- Prefira `min-width` — é mais intuitivo e resulta em menos código.
- Combine com unidades responsivas (`%`, `vw`, `rem`).
- Use `clamp()` e `auto-fit`/`auto-fill` sempre que possível, para reduzir a necessidade de media queries.

### Evite

- Usar `max-width` como primeira estratégia (Desktop First).
- Repetir os mesmos valores de breakpoint "hardcoded" (fixos) em vários lugares do código.
- Criar breakpoints demais — de 3 a 5 costuma ser suficiente.
- Esquecer de testar em dispositivos reais.
- Usar media queries quando `clamp()` ou grids automáticos (`auto-fit`) já resolveriam o problema.
- Remover elementos com `display: none` sem uma razão clara — isso pode prejudicar a experiência do usuário (UX) sem necessidade.

### Faixas de largura de dispositivos comuns

| Dispositivo | Faixa de largura aproximada |
|---|---|
| iPhone | 390–430px |
| Android | 360–480px |
| iPad | 768–820px |
| Desktop | 1280px+ |

---

## 14) Estrutura Recomendada de Organização

O guia sugere organizar o arquivo CSS na seguinte ordem:

1. **Estilos base** (mobile, nenhuma media query).
2. **Media queries em ordem crescente** (`@media min-width`, do menor para o maior).
3. **Queries de acessibilidade** (`prefers-reduced-motion` e similares).
4. **Queries de orientação**.

```css
.componente { } /* base mobile */

@media (min-width: 768px) {
  .componente { }
}

@media (min-width: 1024px) {
  .componente { }
}

@media (prefers-reduced-motion: reduce) {
  .componente { }
}
```

**Por que essa ordem importa:** manter os estilos base primeiro e as media queries em ordem crescente de largura torna o arquivo mais previsível e fácil de acompanhar — cada bloco subsequente representa uma "camada adicional" de adaptação, na mesma lógica progressiva do Mobile First (seção 7).