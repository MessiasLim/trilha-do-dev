# Exercícios de CSS

## 1. Estilizar Parágrafos com Cor Azul
Fácil  
Tópicos: Seletores, Propriedades de Cor  

Escrever uma regra que deixe todos os `<p>` com `color: blue`.  

Exemplo:  
HTML: `<p>Este é um parágrafo de exemplo.</p>`  
CSS: `/* Use um seletor de elemento para definir a cor */`  

Restrições:  
- Use apenas seletores de elemento.  
- A cor deve ser azul.

## 2. Criar Classe Vermelha com Borda
Fácil  
Tópicos: Classes, Bordas  

Criar uma classe `.vermelho` que aplica `color: red` e borda sólida.  

Exemplo:  
HTML: `<div class="vermelho">Conteúdo aqui</div>`  
CSS: `/* Defina a classe com cor vermelha e borda */`  

Restrições:  
- Use classe.  
- Inclua borda sólida.

## 3. Aplicar Fundo Cinza a ID Principal
Fácil  
Tópicos: IDs, Background  

Usar um ID `#principal` para dar `background-color: #eee` a um elemento único.  

Exemplo:  
HTML: `<div id="principal">Elemento principal</div>`  
CSS: `/* Use o ID para aplicar fundo cinza */`  

Restrições:  
- Use ID.  
- Fundo cinza claro.

## 4. Seletor Combinado para LI em NAV
Fácil  
Tópicos: Seletores Combinados  

Escrever um seletor combinado para estilizar apenas `<li>` dentro de `<nav>`.  

Exemplo:  
HTML: `<nav><ul><li>Item 1</li><li>Item 2</li></ul></nav>`  
CSS: `/* Use seletor descendente para nav li */`  

Restrições:  
- Use descendente.  
- Apenas LI dentro de NAV.

## 5. Pseudo-Classe Hover em Links
Fácil  
Tópicos: Pseudo-Classes  

Adicionar um pseudo-classe `:hover` em links para mudarem de cor quando o mouse passar.  

Exemplo:  
HTML: `<a href="#">Link de exemplo</a>`  
CSS: `/* Adicione :hover para mudar cor */`  

Restrições:  
- Use :hover.  
- Mude a cor.

## 6. Pseudo-Elemento Before em Cabeçalho
Fácil  
Tópicos: Pseudo-Elementos  

Aplicar um pseudo-elemento `::before` num cabeçalho para inserir um marcador decorativo.  

Exemplo:  
HTML: `<h1>Título</h1>`  
CSS: `/* Use ::before para adicionar conteúdo */`  

Restrições:  
- Use ::before.  
- Insira conteúdo.

## 7. Display Block, Inline e Inline-Block
Fácil  
Tópicos: Display  

Definir `display: block`, `inline` e `inline-block` em três `<div>` e observar as diferenças de fluxo.  

Exemplo:  
HTML: `<div class="block">A</div><div class="inline">B</div><div class="inline-block">C</div>`  
CSS: `/* Defina display para cada classe */`  

Restrições:  
- Três divs diferentes.  
- Observe diferenças.

## 8. Box Model com Box-Sizing
Fácil  
Tópicos: Box Model, Box-Sizing  

Criar uma caixa `.box` com `width: 200px`, `padding: 10px`, `border: 2px solid` e `margin: 20px`; calcular o tamanho total com `box-sizing: content-box` e depois com `border-box`.  

Exemplo:  
HTML: `<div class="box">Caixa</div>`  
CSS: `/* Defina width, padding, border, margin e box-sizing */`  

Restrições:  
- Inclua todas as propriedades.  
- Compare box-sizing.

## 9. Posicionamento Relative e Absolute
Fácil  
Tópicos: Posicionamento  

Posicionar um elemento com `position: relative` e outro filho com `position: absolute; top: 10px; right: 10px`.  

Exemplo:  
HTML: `<div class="parent"><div class="child">Filho</div></div>`  
CSS: `/* Defina position relative no pai e absolute no filho */`  

Restrições:  
- Pai relative, filho absolute.  
- Use top e right.

## 10. Ocultar Elementos com Display e Visibility
Fácil  
Tópicos: Visibilidade  

Ocultar um elemento usando `display: none` e outro com `visibility: hidden`; explicar o comportamento em cada caso.  

Exemplo:  
HTML: `<div class="hidden-display">Oculto display</div><div class="hidden-visibility">Oculto visibility</div>`  
CSS: `/* Use display: none e visibility: hidden */`  

Restrições:  
- Dois métodos.  
- Explique diferenças.

## 11. Classes de Tamanho de Fonte
Fácil  
Tópicos: Fontes, Classes  

Criar duas classes de tamanho de fonte: `.texto-pequeno` (12px) e `.texto-grande` (24px) e aplicá-las.  

Exemplo:  
HTML: `<p class="texto-pequeno">Pequeno</p><p class="texto-grande">Grande</p>`  
CSS: `/* Defina font-size para cada classe */`  

Restrições:  
- Duas classes.  
- Tamanhos específicos.

## 12. Definir Cores com Diferentes Formatos
Fácil  
Tópicos: Cores  

Definir cores de fundo e texto com valores hexadecimais, RGB e nomes (`#ff0`, `rgb(0,255,0)`, `orange`).  

Exemplo:  
HTML: `<div class="colorido">Texto colorido</div>`  
CSS: `/* Use diferentes formatos de cor */`  

Restrições:  
- Use três formatos.  
- Fundo, texto, borda.

## 13. Declarar Variáveis CSS em Root
Fácil  
Tópicos: Variáveis CSS  

Declarar variáveis CSS em `:root` para `--cor-primaria` e `--espacamento`; usar `var()` em um botão.  

Exemplo:  
HTML: `<button>Botão</button>`  
CSS: `/* Declare variáveis em :root e use var() */`  

Restrições:  
- Use :root.  
- Duas variáveis.

## 14. Sobrescrever Variável Localmente
Fácil  
Tópicos: Variáveis CSS  

Sobrescrever uma variável localmente dentro de `.card` para alterar apenas o fundo deste componente.  

Exemplo:  
HTML: `<div class="card">Card</div>`  
CSS: `/* Sobrescreva variável dentro de .card */`  

Restrições:  
- Sobrescreva em classe.  
- Apenas fundo.

## 15. Utilizar Calc com Variáveis
Fácil  
Tópicos: Calc, Variáveis  

Utilizar `calc()` com variáveis para criar `padding: calc(var(--espacamento) * 2)`.  

Exemplo:  
HTML: `<div class="box">Box</div>`  
CSS: `/* Use calc com variável */`  

Restrições:  
- Use calc.  
- Multiplique por 2.

## 16. Tema Escuro com Classe
Fácil  
Tópicos: Temas, Variáveis  

Definir um tema escuro alternando uma classe `.tema-escuro` e mudando variáveis dentro dela.  

Exemplo:  
HTML: `<body class="tema-escuro">Conteúdo</body>`  
CSS: `/* Mude variáveis dentro de .tema-escuro */`  

Restrições:  
- Use classe para alternar.  
- Mude bg e text.

## 17. Seletor de Atributo para Inputs
Fácil  
Tópicos: Seletores de Atributo  

Criar um seletor de atributo `[type="text"]` que dê borda azul a inputs de texto.  

Exemplo:  
HTML: `<input type="text">`  
CSS: `/* Use [type="text"] para borda azul */`  

Restrições:  
- Use [type="text"].  
- Borda azul.

## 18. Box-Sizing Global
Fácil  
Tópicos: Box-Sizing  

Aplicar `box-sizing: border-box` globalmente com `*, *::before, *::after`.  

Exemplo:  
HTML: `<div>Elemento</div>`  
CSS: `/* Aplique box-sizing global */`  

Restrições:  
- Universal selector.  
- Border-box.

## 19. Pseudo-Classe Nth-Child para Listras
Fácil  
Tópicos: Pseudo-Classes  

Usar a pseudo-classe `:nth-child(odd)` para colorir listras em uma tabela.  

Exemplo:  
HTML: `<table><tr><td>1</td></tr><tr><td>2</td></tr></table>`  
CSS: `/* Use :nth-child(odd) para fundo */`  

Restrições:  
- Use :nth-child(odd).  
- Fundo alternado.

## 20. Focus-Visible para Acessibilidade
Fácil  
Tópicos: Acessibilidade, Pseudo-Classes  

Adicionar um `:focus-visible` visível a botões para acessibilidade ao teclado.  

Exemplo:  
HTML: `<button>Botão</button>`  
CSS: `/* Adicione :focus-visible com outline */`  

Restrições:  
- Use :focus-visible.  
- Outline visível.

## 21. Flexbox Básico com Justify-Content
Médio  
Tópicos: Flexbox  

Montar um container `.flex` com `display: flex` e três itens; usar `justify-content: space-between`.  

Exemplo:  
HTML: `<div class="flex"><div>A</div><div>B</div><div>C</div></div>`  
CSS: `/* Defina display: flex e justify-content */`  

Restrições:  
- Três itens.  
- Space-between.

## 22. Grid Básico
Médio  
Tópicos: Grid  

Criar uma grade básica com `display: grid` e `grid-template-columns: repeat(2,1fr)`.  

Exemplo:  
HTML: `<div class="grid"><div>1</div><div>2</div></div>`  
CSS: `/* Use display: grid e template-columns */`  

Restrições:  
- Duas colunas.  
- Repeat e fr.

## 23. Flex-Wrap
Médio  
Tópicos: Flexbox  

Usar `flex-wrap: wrap` para transformar os itens flex em linhas quando a largura for pequena.  

Exemplo:  
HTML: `<div class="flex"><div>Item</div><div>Item</div></div>`  
CSS: `/* Adicione flex-wrap: wrap */`  

Restrições:  
- Use flex-wrap: wrap.  
- Itens quebram linha.

## 24. Centralizar com Flex
Médio  
Tópicos: Flexbox, Centralização  

Posicionar um card no centro da página com `.center { display:flex; justify-content:center; align-items:center; height:100vh; }`.  

Exemplo:  
HTML: `<div class="center"><div>Card</div></div>`  
CSS: `/* Defina flex para centralizar */`  

Restrições:  
- Centro horizontal e vertical.  
- Altura 100vh.

## 25. Layout de Três Colunas com Flex
Médio  
Tópicos: Flexbox  

Construir um layout de três colunas com Flexbox onde a coluna central cresce (`flex:1`) e as laterais têm largura fixa.  

Exemplo:  
HTML: `<div class="container"><div class="left">L</div><div class="center">C</div><div class="right">R</div></div>`  
CSS: `/* Use flex:1 na central */`  

Restrições:  
- Central flex:1.  
- Laterais fixas.

## 26. Grid com Span
Médio  
Tópicos: Grid  

Criar um grid de 3×3 e usar `grid-column: span 2` em um item para que ele ocupe duas colunas.  

Exemplo:  
HTML: `<div class="grid"><div>1</div><div>2</div><div>3</div></div>`  
CSS: `/* Use grid-column: span 2 */`  

Restrições:  
- 3x3 grid.  
- Span 2 colunas.

## 27. Centralizar Horizontalmente com Margin Auto
Médio  
Tópicos: Margins, Centralização  

Centralizar horizontalmente uma `<div>` com `margin: 0 auto; width: 60%;` e explicar por que precisa definir a largura.  

Exemplo:  
HTML: `<div>Centralizado</div>`  
CSS: `/* Use margin: 0 auto e width */`  

Restrições:  
- Margin 0 auto.  
- Largura definida.

## 28. Text-Align
Médio  
Tópicos: Texto  

Alinhar texto à direita, esquerda, centro e justificar usando `text-align`.  

Exemplo:  
HTML: `<p class="left">Esquerda</p><p class="center">Centro</p>`  
CSS: `/* Use text-align para cada classe */`  

Restrições:  
- Quatro valores.  
- Use text-align.

## 29. Vertical-Align para Imagens
Médio  
Tópicos: Alinhamento Vertical  

Aplicar `vertical-align: middle` em imagens inline-block para alinhá-las com texto.  

Exemplo:  
HTML: `<img src="img.jpg" alt="Img"> Texto`  
CSS: `/* Use vertical-align: middle na img */`  

Restrições:  
- Inline-block.  
- Middle.

## 30. Position Fixed para Cabeçalho
Médio  
Tópicos: Posicionamento  

Usar `position: fixed` para criar um cabeçalho que permanece no topo ao rolar.  

Exemplo:  
HTML: `<header>Cabeçalho</header>`  
CSS: `/* Defina position: fixed e top: 0 */`  

Restrições:  
- Fixed.  
- Top 0.

## 31. Estilizar Botão Básico
Médio  
Tópicos: Componentes, Botões  

Estilizar um botão `.btn` com padding, border-radius e transição de `background-color`.  

Exemplo:  
HTML: `<button class="btn">Botão</button>`  
CSS: `/* Adicione padding, border-radius, transition */`  

Restrições:  
- Padding, border-radius.  
- Transição.

## 32. Modificadores de Botão
Médio  
Tópicos: BEM, Modificadores  

Criar modificador `.btn--primary` e `.btn--secondary` usando classes adicionais.  

Exemplo:  
HTML: `<button class="btn btn--primary">Primário</button>`  
CSS: `/* Defina cores para modificadores */`  

Restrições:  
- Duas classes modificadoras.  
- Cores diferentes.

## 33. Estados Hover e Active
Médio  
Tópicos: Estados, Interação  

Adicionar estado `:hover` e `:active` ao botão para alterar a sombra e a cor.  

Exemplo:  
HTML: `<button class="btn">Botão</button>`  
CSS: `/* Adicione :hover e :active */`  

Restrições:  
- Hover e active.  
- Sombra e cor.

## 34. Card Básico
Médio  
Tópicos: Componentes, Cards  

Construir um card `.card` com sombra (`box-shadow`), padding e largura fixa.  

Exemplo:  
HTML: `<div class="card">Card</div>`  
CSS: `/* Adicione box-shadow, padding, width */`  

Restrições:  
- Largura fixa.  
- Sombra.

## 35. Modificadores de Card
Médio  
Tópicos: Modificadores  

Adaptar o card para `.card--large` com mais padding e `.card--small` com menos.  

Exemplo:  
HTML: `<div class="card card--large">Grande</div>`  
CSS: `/* Defina padding para modificadores */`  

Restrições:  
- Large mais padding.  
- Small menos.

## 36. Botão com Ícone
Médio  
Tópicos: Flexbox, Ícones  

Criar botão com ícone dentro usando `display:inline-flex` e `gap`.  

Exemplo:  
HTML: `<button class="btn"><span>Icon</span> Text</button>`  
CSS: `/* Use inline-flex e gap */`  

Restrições:  
- Inline-flex.  
- Gap.

## 37. Estado Disabled
Médio  
Tópicos: Estados  

Fazer botão com estado `disabled` que reduza `opacity` e `cursor: not-allowed`.  

Exemplo:  
HTML: `<button disabled>Disabled</button>`  
CSS: `/* Estilize :disabled */`  

Restrições:  
- Disabled.  
- Opacity e cursor.

## 38. Suporte a ARIA Disabled
Médio  
Tópicos: Acessibilidade, ARIA  

Escrever regra `.btn:disabled, .btn[aria-disabled="true"]` para suportar ARIA.  

Exemplo:  
HTML: `<button class="btn" aria-disabled="true">Botão</button>`  
CSS: `/* Use seletor para ambos */`  

Restrições:  
- Ambos seletores.  
- Mesmo estilo.

## 39. Loader com After
Médio  
Tópicos: Pseudo-Elementos, Animações  

Implementar um loader simples com `::after` em `.btn--loading` e animação.  

Exemplo:  
HTML: `<button class="btn btn--loading">Loading</button>`  
CSS: `/* Use ::after com animation */`  

Restrições:  
- ::after.  
- Animação.

## 40. Variável para Radius
Médio  
Tópicos: Variáveis  

Usar variável `--radius` para aplicar o mesmo border-radius em botão e card.  

Exemplo:  
HTML: `<button>Btn</button><div class="card">Card</div>`  
CSS: `/* Declare --radius e use em ambos */`  

Restrições:  
- Variável --radius.  
- Aplicar em ambos.

## 41. Media Query para Flex-Direction
Difícil  
Tópicos: Responsividade, Media Queries  

Criar media query `@media (max-width: 600px)` que muda `flex-direction` para `column`.  

Exemplo:  
HTML: `<div class="flex"><div>A</div><div>B</div></div>`  
CSS: `/* Adicione @media para flex-direction: column */`  

Restrições:  
- Max-width 600px.  
- Flex-direction column.

## 42. Clamp para Font-Size
Difícil  
Tópicos: Responsividade, Clamp  

Ajustar `font-size` usando `clamp()` para escalar entre 16px e 24px.  

Exemplo:  
HTML: `<p>Texto</p>`  
CSS: `/* Use clamp(16px, ..., 24px) */`  

Restrições:  
- Use clamp.  
- Entre 16 e 24px.

## 43. Variáveis em Media Query
Difícil  
Tópicos: Variáveis, Media Queries  

Alterar variáveis (`--space-md`) dentro de uma media query para espaçamento diferenciado.  

Exemplo:  
HTML: `<div>Elemento</div>`  
CSS: `/* Mude --space-md em @media */`  

Restrições:  
- Mude variável em MQ.  
- Espaçamento.

## 44. Imagem Responsiva
Difícil  
Tópicos: Imagens, Responsividade  

Tornar uma imagem responsiva com `max-width:100%; height:auto;`.  

Exemplo:  
HTML: `<img src="img.jpg" alt="Img">`  
CSS: `/* Aplique max-width:100% e height:auto */`  

Restrições:  
- Max-width 100%.  
- Height auto.

## 45. Grid Responsivo
Difícil  
Tópicos: Grid, Responsividade  

Fazer um grid que tenha uma, duas ou três colunas dependendo da largura (media queries em cols).  

Exemplo:  
HTML: `<div class="grid"><div>1</div><div>2</div><div>3</div></div>`  
CSS: `/* Use @media para alterar grid-template-columns */`  

Restrições:  
- 1, 2, 3 colunas.  
- Breakpoints.

## 46. Menu Hamburger
Difícil  
Tópicos: Responsividade, Display  

Esconder um menu (`display:none`) em telas pequenas e exibir um botão de hamburger.  

Exemplo:  
HTML: `<nav>Menu</nav><button class="hamburger">☰</button>`  
CSS: `/* Esconda nav e mostre hamburger em mobile */`  

Restrições:  
- Esconda nav.  
- Mostre hamburger.

## 47. Prefers-Reduced-Motion
Difícil  
Tópicos: Acessibilidade, Media Queries  

Utilizar `@media (prefers-reduced-motion: reduce)` para desativar transições.  

Exemplo:  
HTML: `<div class="animated">Animado</div>`  
CSS: `/* Desative transition em prefers-reduced-motion */`  

Restrições:  
- Reduce motion.  
- Desative transições.

## 48. Container Fluido
Difícil  
Tópicos: Responsividade, Min  

Aplicar `container { width: min(90%, 1200px); margin:0 auto; }` para fluidez.  

Exemplo:  
HTML: `<div class="container">Conteúdo</div>`  
CSS: `/* Use min(90%, 1200px) para width */`  

Restrições:  
- Min(90%, 1200px).  
- Centro.

## 49. Clamp para Width
Difícil  
Tópicos: Clamp, Responsividade  

Usar `width: clamp(200px, 50%, 400px)` em uma caixa para restrição responsiva.  

Exemplo:  
HTML: `<div class="box">Box</div>`  
CSS: `/* Use clamp(200px, 50%, 400px) */`  

Restrições:  
- Clamp 200px 50% 400px.  
- Width.

## 50. Breakpoint para Nav
Difícil  
Tópicos: Responsividade  

Criar breakpoint com `@media (min-width: 1024px)` para ajustar layout de nav.  

Exemplo:  
HTML: `<nav>Nav</nav>`  
CSS: `/* Ajuste nav em min-width: 1024px */`  

Restrições:  
- Min-width 1024px.  
- Ajuste nav.

## 51. Grid Template Areas
Difícil  
Tópicos: Grid Avançado  

Usar CSS Grid para criar área nomeada (`grid-template-areas`) e posicionar elementos.  

Exemplo:  
HTML: `<div class="grid"><header>H</header><main>M</main></div>`  
CSS: `/* Use grid-template-areas */`  

Restrições:  
- Template-areas.  
- Posicione elementos.

## 52. Animação Keyframes
Difícil  
Tópicos: Animações  

Fazer uma animação simples com `@keyframes fade-in` e aplicar a um componente.  

Exemplo:  
HTML: `<div class="component">Componente</div>`  
CSS: `/* Defina @keyframes e animation */`  

Restrições:  
- @keyframes.  
- Fade-in.

## 53. Transição
Difícil  
Tópicos: Transições  

Escrever `transition: background-color 0.3s ease` em `.btn` e demonstrar o efeito.  

Exemplo:  
HTML: `<button class="btn">Btn</button>`  
CSS: `/* Adicione transition */`  

Restrições:  
- Background-color.  
- 0.3s ease.

## 54. HSL com Variável
Difícil  
Tópicos: HSL, Variáveis  

Implementar `:root { --hue: 200; }` e usar `hsl(var(--hue), 80%, 50%)` para cor dinâmica.  

Exemplo:  
HTML: `<div class="element">Elemento</div>`  
CSS: `/* Use hsl(var(--hue), ...) */`  

Restrições:  
- --hue.  
- HSL com var.

## 55. Alterar Variável com JS
Difícil  
Tópicos: JS + CSS  

Alterar a variável `--hue` com JavaScript e observar a mudança em tempo real.  

Exemplo:  
HTML: `<div class="element">Elemento</div>`  
CSS: `/* Declare --hue */`  
JS: `/* Use setProperty para mudar --hue */`  

Restrições:  
- Use setProperty.  
- Mude --hue.

## 56. Tema Escuro com Prefers-Color-Scheme
Difícil  
Tópicos: Temas, Media Queries  

Criar tema escuro claro que responde a `prefers-color-scheme: dark`.  

Exemplo:  
HTML: `<body>Conteúdo</body>`  
CSS: `/* Use @media (prefers-color-scheme: dark) */`  

Restrições:  
- Prefers-color-scheme.  
- Dark.

## 57. Feature Query com Supports
Difícil  
Tópicos: Feature Queries  

Escrever `@supports (display: grid)` para fornecer fallback para navegadores antigos.  

Exemplo:  
HTML: `<div class="grid">Grid</div>`  
CSS: `/* Use @supports para grid */`  

Restrições:  
- @supports.  
- Fallback.

## 58. Not e Empty
Difícil  
Tópicos: Seletores Avançados  

Usar `:not()` e `:empty` para estilizar elementos que não contêm conteúdo.  

Exemplo:  
HTML: `<p>Texto</p><p></p>`  
CSS: `/* Use :not(:empty) e :empty */`  

Restrições:  
- :not().  
- :empty.

## 59. Visibility vs Opacity
Difícil  
Tópicos: Visibilidade  

Explicar e demonstrar diferença entre `visibility:hidden` e `opacity:0` com `pointer-events`.  

Exemplo:  
HTML: `<div class="hidden-vis">Vis</div><div class="hidden-op">Op</div>`  
CSS: `/* Use visibility:hidden e opacity:0 */`  

Restrições:  
- Dois métodos.  
- Explique.

## 60. Mini-Projeto
Difícil  
Tópicos: Integração  

Montar um mini-projeto: um botão que muda de cor com variável, um card flexível e um layout responsivo usando todas as técnicas aprendidas.  

Exemplo:  
Combine variáveis, flex, media queries, etc.  

Restrições:  
- Use múltiplas técnicas.  
- Funcional.