# Exercícios de HTML

## 1. Documento Mínimo
Fácil  
Tópicos: Estrutura Básica, DOCTYPE  

Crie um HTML com `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` e `<title>`.  

Exemplo:  
```html
<!-- Estrutura básica de um documento HTML -->
<!DOCTYPE html>
<html>
<head>
    <title><!-- Título da página --></title>
</head>
<body>
    <!-- Conteúdo aqui -->
</body>
</html>
```  

Restrições:  
- Inclua DOCTYPE.  
- Estrutura básica completa.

## 2. Idioma e Metas
Fácil  
Tópicos: Metatags, Idioma  

Complete o esqueleto abaixo adicionando `lang="pt-BR"`, `<meta charset="UTF-8">` e `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.  

Exemplo:  
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página</title>
</head>
<body>
    <!-- Adicione conteúdo -->
</body>
</html>
```  

Restrições:  
- Lang pt-BR.  
- Charset UTF-8.  
- Viewport.

## 3. Corrigir Estrutura
Fácil  
Tópicos: Ordem de Elementos  

Identifique e corrija o problema no código abaixo.  

Exemplo Original Incorreto:  
```html
<html>
<head>
<title>Título</title>
</head>
<h1>Conteúdo</h1>
<body>
<p>Texto</p>
</body>
</html>
```  

Dica: Mova o `<h1>` para dentro de `<body>`.  

Restrições:  
- Conteúdo dentro de body.  
- DOCTYPE no topo.

## 4. Hierarquia de Títulos
Fácil  
Tópicos: Headings  

Criar hierarquia de títulos do `<h1>` ao `<h4>`.  

Exemplo:  
```html
<h1><!-- Título principal --></h1>
<h2><!-- Subtítulo --></h2>
<h3><!-- Seção --></h3>
<h4><!-- Subseção --></h4>
```  

Restrições:  
- Ordem decrescente.  
- Quatro níveis.

## 5. Corrigir Hierarquia
Fácil  
Tópicos: Hierarquia  

Corrigir a hierarquia incorreta:  
```html
<h3>Subtítulo</h3>
<h1>Título Principal</h1>
<h4>Detalhe</h4>
```  

Dica: Use `<h1>` primeiro, depois `<h3>`, etc.  

Restrições:  
- H1 primeiro.  
- Ordem lógica.

## 6. Lista Não Ordenada
Fácil  
Tópicos: Listas  

Criar uma lista não ordenada com cinco itens.  

Exemplo:  
```html
<ul>
    <li><!-- Item 1 --></li>
    <li><!-- Item 2 --></li>
    <!-- Adicione mais três -->
</ul>
```  

Restrições:  
- Use <ul>.  
- Cinco <li>.

## 7. Corrigir Lista
Fácil  
Tópicos: Listas  

Corrigir a lista mal estruturada:  
```html
<ul>
<li>Item 1
<li>Item 2</li>
</ul>
```  

Dica: Feche cada `<li>`.  

Restrições:  
- Feche todos <li>.  
- Estrutura correta.

## 8. Link Externo Seguro
Fácil  
Tópicos: Links  

Criar um link externo que abra em nova aba com as proteções `rel="noopener noreferrer"`.  

Exemplo:  
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer"><!-- Texto do link --></a>
```  

Restrições:  
- Target _blank.  
- Rel attributes.

## 9. Corrigir Link
Fácil  
Tópicos: Links  

Corrigir o link abaixo adicionando o `href` correto:  
```html
<a>Google</a>
```  

Dica: Adicione `href="https://google.com"`.  

Restrições:  
- Adicione href.  
- URL válida.

## 10. Página Simples
Fácil  
Tópicos: Estrutura  

Criar uma página simples contendo: 1 `<h1>`, 2 `<h2>`, 3 parágrafos (`<p>`).  

Exemplo:  
```html
<h1><!-- Título --></h1>
<h2><!-- Sub1 --></h2>
<p><!-- Parágrafo 1 --></p>
<h2><!-- Sub2 --></h2>
<p><!-- Parágrafo 2 --></p>
<p><!-- Parágrafo 3 --></p>
```  

Restrições:  
- 1 h1, 2 h2, 3 p.  
- Estrutura básica.

## 11. Layout com Divs
Fácil  
Tópicos: Divs, Layout  

Criar layout com três `<div>`: topo, conteúdo e rodapé.  

Exemplo:  
```html
<div id="topo"><!-- Topo --></div>
<div id="conteudo"><!-- Conteúdo --></div>
<div id="rodape"><!-- Rodapé --></div>
```  

Restrições:  
- Três divs.  
- IDs descritivos.

## 12. Card Básico
Fácil  
Tópicos: Componentes  

Completar estrutura de um card:  
```html
<div class="card">
    <h2><!-- Título --></h2>
    <p><!-- Descrição --></p>
</div>
```  

Restrições:  
- Classe card.  
- H2 e p.

## 13. Corrigir Fechamento
Fácil  
Tópicos: Sintaxe  

Corrigir o fechamento incorreto:  
```html
<div>
<p>Texto</div>
</p>
```  

Dica: Feche `<p>` antes de `<div>`.  

Restrições:  
- Feche corretamente.  
- Ordem de tags.

## 14. Múltiplos Cards
Fácil  
Tópicos: Repetição  

Fazer manualmente quatro cards iguais.  

Exemplo:  
Repita a estrutura do exercício 12 quatro vezes.  

Restrições:  
- Quatro cards.  
- Iguais.

## 15. Refatorar Estrutura
Fácil  
Tópicos: Organização  

Refatorar a estrutura abaixo para melhorar a organização:  
```html
<div>
<div>
<h2>Título</h2>
</div>
<p>Texto</p>
</div>
```  

Dica: Adicione classes como `container` e `header`.  

Restrições:  
- Adicione classes.  
- Melhore semântica.

## 16. Menu de Navegação
Fácil  
Tópicos: Navegação  

Criar um menu de navegação usando uma lista (`<nav><ul>...`).  

Exemplo:  
```html
<nav>
    <ul>
        <li><a href="#"><!-- Home --></a></li>
        <li><a href="#"><!-- Contato --></a></li>
    </ul>
</nav>
```  

Restrições:  
- Use <nav>.  
- Lista com links.

## 17. Corrigir Nav
Fácil  
Tópicos: Navegação  

Corrigir o `<nav>` mal estruturado:  
```html
<nav>
<li>Home</li>
<li>Contato</li>
</nav>
```  

Dica: Adicione `<ul>` dentro de `<nav>`.  

Restrições:  
- Adicione <ul>.  
- Estrutura correta.

## 18. Galeria de Imagens
Fácil  
Tópicos: Imagens  

Criar uma galeria com seis imagens, todas com `alt` apropriado.  

Exemplo:  
```html
<div class="galeria">
    <img src="img1.jpg" alt="Descrição 1">
    <!-- Adicione mais cinco imagens -->
</div>
```  

Restrições:  
- Seis <img>.  
- Alt descritivo.

## 19. Corrigir Imagem
Fácil  
Tópicos: Imagens  

Corrigir a imagem abaixo adicionando `alt`:  
```html
<img src="foto.png">
```  

Dica: Adicione `alt="Descrição da imagem"`.  

Restrições:  
- Adicione alt.  
- Descrição apropriada.

## 20. Layout com Semanticas
Fácil  
Tópicos: Semântica  

Montar um layout que contenha `<header>`, `<main>`, `<aside>` e `<footer>` (pode usar `<div>` para simular).  

Exemplo:  
```html
<header><!-- Header --></header>
<main><!-- Main --></main>
<aside><!-- Aside --></aside>
<footer><!-- Footer --></footer>
```  

Restrições:  
- Use tags semânticas.  
- Estrutura básica.

## 21. Formulário Simples
Médio  
Tópicos: Formulários  

Criar um formulário simples com campo de nome e botão de envio.  

Exemplo:  
```html
<form>
    <label for="nome"><!-- Nome --></label>
    <input type="text" id="nome" name="nome">
    <button type="submit"><!-- Enviar --></button>
</form>
```  

Restrições:  
- Campo texto.  
- Botão submit.

## 22. Associar Label
Médio  
Tópicos: Labels  

Associar corretamente o `label` a um `input`:  
```html
<form>
<label>Nome</label>
<input>
</form>
```  

Dica: Adicione `for` no label e `id` no input.  

Restrições:  
- Use for e id.  
- Associação correta.

## 23. Corrigir Label
Médio  
Tópicos: Labels  

Corrigir o `label` mal associado:  
```html
<label>Email</label>
<input type="email" id="email">
```  

Dica: Adicione `for="email"` no label.  

Restrições:  
- Adicione for.  
- Id no input.

## 24. Formulário Completo Básico
Médio  
Tópicos: Formulários  

Criar um formulário com campos: nome, email, senha e botão submit.  

Exemplo:  
```html
<form>
    <label for="nome"><!-- Nome --></label>
    <input type="text" id="nome">
    <label for="email"><!-- Email --></label>
    <input type="email" id="email">
    <label for="senha"><!-- Senha --></label>
    <input type="password" id="senha">
    <button><!-- Submit --></button>
</form>
```  

Restrições:  
- Três inputs.  
- Tipos corretos.

## 25. Rádios Agrupados
Médio  
Tópicos: Inputs  

Fazer um grupo de rádios com mesmo `name` para agrupamento.  

Exemplo:  
```html
<input type="radio" name="opcao" value="a"><!-- A -->
<input type="radio" name="opcao" value="b"><!-- B -->
```  

Restrições:  
- Mesmo name.  
- Valores diferentes.

## 26. Corrigir Rádios
Médio  
Tópicos: Inputs  

Corrigir rádios não agrupados:  
```html
<input type="radio" name="opcao1">
<input type="radio" name="opcao2">
```  

Dica: Mude para `name="opcao"` e adicione `value`.  

Restrições:  
- Mesmo name.  
- Adicione value.

## 27. Select
Médio  
Tópicos: Select  

Criar um `<select>` com quatro opções.  

Exemplo:  
```html
<select>
    <option><!-- Op1 --></option>
    <option><!-- Op2 --></option>
    <!-- Adicione mais duas -->
</select>
```  

Restrições:  
- Quatro <option>.  
- Dentro de select.

## 28. Textarea
Médio  
Tópicos: Textarea  

Criar um `<textarea>` acompanhado de `<label>`.  

Exemplo:  
```html
<label for="msg"><!-- Mensagem --></label>
<textarea id="msg"></textarea>
```  

Restrições:  
- Label associada.  
- Textarea.

## 29. Formulário Completo
Médio  
Tópicos: Formulários  

Montar um formulário completo com: texto, email, senha, rádio, checkbox, select e textarea.  

Exemplo:  
Combine os exercícios anteriores.  

Restrições:  
- Todos os tipos.  
- Estrutura organizada.

## 30. Formulário com Fieldset
Médio  
Tópicos: Fieldset  

Refatorar o formulário anterior usando `<fieldset>` e `<legend>`.  

Exemplo:  
```html
<form>
    <fieldset>
        <legend><!-- Dados --></legend>
        <!-- campos -->
    </fieldset>
</form>
```  

Restrições:  
- Use fieldset.  
- Legend descritiva.

## 31. Tabela 3x3
Médio  
Tópicos: Tabelas  

Criar tabela simples 3×3.  

Exemplo:  
```html
<table>
    <tr><td><!-- 1 --></td><td><!-- 2 --></td><td><!-- 3 --></td></tr>
    <!-- Adicione mais duas linhas -->
</table>
```  

Restrições:  
- 3 linhas, 3 colunas.  
- Use tr e td.

## 32. Tabela com Thead e Tbody
Médio  
Tópicos: Tabelas  

Estruturar tabela com `<thead>` e `<tbody>`.  

Exemplo:  
```html
<table>
    <thead>
        <tr><th><!-- Col1 --></th></tr>
    </thead>
    <tbody>
        <tr><td><!-- Data --></td></tr>
    </tbody>
</table>
```  

Restrições:  
- Thead para cabeçalho.  
- Tbody para corpo.

## 33. Corrigir Tabela
Médio  
Tópicos: Tabelas  

Corrigir tabela incompleta:  
```html
<table>
<tr>
<td>1</td>
<td>2</td>
</table>
```  

Dica: Feche `<tr>` e adicione mais células se necessário.  

Restrições:  
- Feche tr.  
- Estrutura válida.

## 34. Tabela com Span
Médio  
Tópicos: Tabelas  

Construir tabela com `colspan` e `rowspan`.  

Exemplo:  
```html
<table>
    <tr><td colspan="2"><!-- Span --></td></tr>
    <!-- Adicione mais linhas -->
</table>
```  

Restrições:  
- Use colspan e rowspan.  
- Estrutura válida.

## 35. Tabela com Caption
Médio  
Tópicos: Tabelas  

Adicionar `<caption>` corretamente.  

Exemplo:  
```html
<table>
    <caption><!-- Título da Tabela --></caption>
    <tr><td><!-- Data --></td></tr>
</table>
```  

Restrições:  
- Caption no topo.  
- Descrição.

## 36. Refatorar para Semântica
Difícil  
Tópicos: Semântica  

Converter um layout baseado em `<div>` para usar `<header>`, `<main>` e `<footer>`.  

Exemplo:  
De: `<div class="header">` para `<header>`.  

Restrições:  
- Use tags semânticas.  
- Melhore acessibilidade.

## 37. Nav em Header
Difícil  
Tópicos: Semântica  

Incluir um `<nav>` dentro do `<header>`.  

Exemplo:  
```html
<header>
    <nav><!-- Nav --></nav>
</header>
```  

Restrições:  
- Nav dentro header.  
- Estrutura correta.

## 38. Sections em Main
Difícil  
Tópicos: Semântica  

Criar três `<section>` dentro de `<main>`.  

Exemplo:  
```html
<main>
    <section><!-- Sec1 --></section>
    <section><!-- Sec2 --></section>
    <section><!-- Sec3 --></section>
</main>
```  

Restrições:  
- Três sections.  
- Dentro main.

## 39. Article em Section
Difícil  
Tópicos: Semântica  

Inserir `<article>` dentro de uma `<section>`.  

Exemplo:  
```html
<section>
    <article><!-- Article --></article>
</section>
```  

Restrições:  
- Article dentro section.  
- Conteúdo independente.

## 40. Aside Posicionado
Difícil  
Tópicos: Semântica  

Criar layout com `<aside>` posicionado corretamente (lado do conteúdo principal).  

Exemplo:  
```html
<main>
    <aside><!-- Sidebar --></aside>
    <section><!-- Content --></section>
</main>
```  

Restrições:  
- Aside ao lado.  
- Conteúdo relacionado.

## 41. Corrigir Semântica
Difícil  
Tópicos: Semântica  

Corrigir a estrutura semântica abaixo:  
```html
<header>
<section>
<nav></nav>
</section>
</header>
```  

Dica: Remova `<section>` desnecessária.  

Restrições:  
- Remova section desnecessária.  
- Estrutura limpa.

## 42. Article com Header Time Footer
Difícil  
Tópicos: Semântica  

Criar um artigo com `<header>`, `<time>` e `<footer>` internos.  

Exemplo:  
```html
<article>
    <header><h2><!-- Title --></h2><time><!-- 2023 --></time></header>
    <p><!-- Content --></p>
    <footer><!-- Author --></footer>
</article>
```  

Restrições:  
- Header com time.  
- Footer.

## 43. Completar Article
Difícil  
Tópicos: Semântica  

Completar a estrutura de um `<article>`:  
```html
<article>
<header>
<h2></h2>
<time></time>
</header>
<p></p>
<footer></footer>
</article>
```  

Dica: Adicione conteúdo aos elementos.  

Restrições:  
- Adicione conteúdo.  
- Estrutura completa.

## 44. Figure com Figcaption
Difícil  
Tópicos: Semântica  

Criar um `<figure>` com `<figcaption>`.  

Exemplo:  
```html
<figure>
    <img src="img.png" alt="">
    <figcaption><!-- Descrição --></figcaption>
</figure>
```  

Restrições:  
- Figcaption após img.  
- Descrição.

## 45. Corrigir Figure
Difícil  
Tópicos: Semântica  

Corrigir a ordem incorreta:  
```html
<figure>
<figcaption>Descrição</figcaption>
<img src="img.png">
</figure>
```  

Dica: Mova `<figcaption>` para após `<img>`.  

Restrições:  
- Figcaption após.  
- Ordem correta.

## 46. Formulário com Fieldset
Difícil  
Tópicos: Formulários  

Criar outro formulário usando `fieldset` e `legend`.  

Exemplo:  
```html
<form>
    <fieldset>
        <legend><!-- Contato --></legend>
        <input>
    </fieldset>
</form>
```  

Restrições:  
- Fieldset.  
- Legend.

## 47. Refatorar Divs
Difícil  
Tópicos: Semântica  

Refatorar uma página removendo `<div>` desnecessárias.  

Exemplo:  
Substitua divs por tags semânticas.  

Restrições:  
- Use semântica.  
- Melhore estrutura.

## 48. FAQ com Section Article
Difícil  
Tópicos: Semântica  

Montar uma página FAQ usando `section` e `article`.  

Exemplo:  
```html
<section>
    <article><h3><!-- Pergunta --></h3><p><!-- Resposta --></p></article>
</section>
```  

Restrições:  
- Section para grupo.  
- Article para cada.

## 49. Blog com Articles
Difícil  
Tópicos: Semântica  

Estruturar um blog com três artigos (`<article>`).  

Exemplo:  
```html
<main>
    <article><!-- Art1 --></article>
    <article><!-- Art2 --></article>
    <article><!-- Art3 --></article>
</main>
```  

Restrições:  
- Três articles.  
- Em main.

## 50. Refatorar Site Completo
Difícil  
Tópicos: Semântica  

Refatorar um site completo aplicando semântica (header, nav, main, section, article, aside, footer, figure, time, fieldset).  

Exemplo:  
Aplique todas as tags aprendidas.  

Restrições:  
- Use todas relevantes.  
- Estrutura acessível.

## 51. Audio com Fontes
Difícil  
Tópicos: Multimídia  

Player de áudio com duas fontes (`mp3` e `ogg`) e texto de fallback.  

Exemplo:  
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    <!-- Fallback texto -->
</audio>
```  

Restrições:  
- Duas sources.  
- Fallback texto.

## 52. Video Responsivo
Difícil  
Tópicos: Multimídia  

Vídeo responsivo com `<video>` usando `controls`, `poster` e `width="100%"`.  

Exemplo:  
```html
<video controls poster="thumb.jpg" width="100%">
    <source src="video.mp4" type="video/mp4">
</video>
```  

Restrições:  
- Controls.  
- Poster.  
- Width 100%.

## 53. Legendas em Video
Difícil  
Tópicos: Multimídia  

Legendas em vídeo criando arquivo `.vtt` e usando `<track srclang="pt">`.  

Exemplo:  
```html
<video>
    <track src="subs.vtt" srclang="pt" label="Português">
</video>
```  

Restrições:  
- Arquivo .vtt.  
- Track com srclang.

## 54. Embed YouTube
Difícil  
Tópicos: Multimídia  

Incorporar vídeo do YouTube com `<iframe>` (sandbox + lazy loading).  

Exemplo:  
```html
<iframe src="https://youtube.com/embed/id" sandbox loading="lazy"></iframe>
```  

Restrições:  
- Sandbox.  
- Loading lazy.

## 55. Embed PDF
Difícil  
Tópicos: Embed  

Inserir um PDF usando `<embed>` com parágrafo de fallback.  

Exemplo:  
```html
<embed src="doc.pdf" type="application/pdf">
<p><!-- Fallback --></p>
```  

Restrições:  
- Type application/pdf.  
- Fallback.

## 56. Object PDF
Difícil  
Tópicos: Object  

Mostrar PDF com `<object>` e mensagem alternativa.  

Exemplo:  
```html
<object data="doc.pdf" type="application/pdf">
    <p><!-- Mensagem --></p>
</object>
```  

Restrições:  
- Data e type.  
- Fallback.

## 57. Atributos Globais
Difícil  
Tópicos: Atributos  

Aplicar atributos globais: `id`, `class` múltiplas, `style` inline e dois `data-*`.  

Exemplo:  
```html
<div id="main" class="primary secondary" style="color:red" data-type="example" data-value="123"></div>
```  

Restrições:  
- Id, class, style.  
- Dois data-.

## 58. Links de Âncora
Difícil  
Tópicos: Links  

Menu com links de âncora interna (`href="#id"`).  

Exemplo:  
```html
<a href="#section1"><!-- Ir para Sec1 --></a>
<section id="section1"></section>
```  

Restrições:  
- Href="#id".  
- Id na seção.

## 59. Hidden com Script
Difícil  
Tópicos: Interatividade  

Elemento com `hidden` e script para remover o atributo ao clicar em botão.  

Exemplo:  
```html
<div hidden id="hidden"><!-- Conteúdo --></div>
<button onclick="document.getElementById('hidden').removeAttribute('hidden')"><!-- Mostrar --></button>
```  

Restrições:  
- Hidden inicial.  
- Script remove.

## 60. Imagem Responsiva Srcset
Difícil  
Tópicos: Imagens  

Imagem responsiva usando `srcset` e `sizes` para várias larguras.  

Exemplo:  
```html
<img src="small.jpg" srcset="small.jpg 480w, medium.jpg 768w" sizes="(max-width: 600px) 480px, 768px">
```  

Restrições:  
- Srcset com w.  
- Sizes.

## 61. Picture com Webp
Difícil  
Tópicos: Imagens  

`<picture>` oferecendo `webp` e `jpeg` com media queries.  

Exemplo:  
```html
<picture>
    <source media="(min-width: 800px)" srcset="large.webp">
    <img src="fallback.jpg">
</picture>
```  

Restrições:  
- Source com media.  
- Fallback img.

## 62. Lazy Loading
Difícil  
Tópicos: Performance  

Ativar lazy loading em imagem e iframe e explicar benefício.  

Exemplo:  
```html
<img loading="lazy" src="img.jpg">
<iframe loading="lazy" src="url"></iframe>
```  

Restrições:  
- Loading="lazy".  
- Em img e iframe.

## 63. Metas Básicas
Difícil  
Tópicos: SEO  

`<head>` com meta tags básicas: charset, viewport, description.  

Exemplo:  
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<meta name="description" content="Descrição">
```  

Restrições:  
- Charset, viewport, description.  
- No head.

## 64. Metas SEO
Difícil  
Tópicos: SEO  

Adicionar meta tags SEO: `robots noindex`, `canonical`, `keywords`.  

Exemplo:  
```html
<meta name="robots" content="noindex">
<link rel="canonical" href="url">
<meta name="keywords" content="palavras">
```  

Restrições:  
- Robots, canonical, keywords.  
- SEO.

## 65. Open Graph
Difícil  
Tópicos: SEO  

Conjunto mínimo de meta tags Open Graph (`og:title`, `og:description`, `og:image`).  

Exemplo:  
```html
<meta property="og:title" content="Título">
<meta property="og:description" content="Desc">
<meta property="og:image" content="img.jpg">
```  

Restrições:  
- Og:title, desc, image.  
- Property.

## 66. Twitter Card
Difícil  
Tópicos: SEO  

Meta tags Twitter Card (`twitter:card`, `twitter:title`).  

Exemplo:  
```html
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Título">
```  

Restrições:  
- Twitter:card, title.  
- Name.

## 67. Substituir B I
Difícil  
Tópicos: Semântica  

Refatorar parágrafo substituindo `<b>`/`<i>` por `<strong>`/`<em>`.  

Exemplo:  
De: `<b>negrito</b>` para `<strong>negrito</strong>`.  

Restrições:  
- Use strong/em.  
- Semântica.

## 68. Mark Small Abbr
Difícil  
Tópicos: Texto  

Texto curto com `<mark>`, `<small>` e `<abbr title="...">`.  

Exemplo:  
```html
<mark><!-- Destaque --></mark> <small><!-- Pequeno --></small> <abbr title="Exemplo"><!-- Abr --></abbr>
```  

Restrições:  
- Mark, small, abbr.  
- Title em abbr.

## 69. Card com ARIA
Difícil  
Tópicos: Acessibilidade  

Componente de cartão com ARIA: `role="button"`, `aria-label`, `aria-hidden="true"`, `aria-live="polite"`.  

Exemplo:  
```html
<div role="button" aria-label="Card" aria-live="polite">
    <span aria-hidden="true"><!-- Icon --></span>
</div>
```  

Restrições:  
- Role, aria-label, etc.  
- Acessível.

## 70. Preload Font
Difícil  
Tópicos: Performance  

No `<head>`, `<link rel="preload" as="font" href="/font.woff2" crossorigin>`.  

Exemplo:  
```html
<link rel="preload" as="font" href="font.woff2" crossorigin>
```  

Restrições:  
- Rel preload.  
- As font, crossorigin.

## 71. Pattern CEP
Difícil  
Tópicos: Validação  

Campo com `pattern` para CEP brasileiro `00000-000`.  

Exemplo:  
```html
<input pattern="\d{5}-\d{3}" placeholder="00000-000">
```  

Restrições:  
- Pattern regex.  
- Formato CEP.

## 72. Number Min Max
Difícil  
Tópicos: Validação  

Campo `number` com `min="1"` e `max="10"`.  

Exemplo:  
```html
<input type="number" min="1" max="10">
```  

Restrições:  
- Type number.  
- Min e max.

## 73. Required Email
Difícil  
Tópicos: Validação  

Formulário com `required` e `type="email"`.  

Exemplo:  
```html
<form>
    <input type="email" required>
</form>
```  

Restrições:  
- Required.  
- Type email.

## 74. Checkboxes em Fieldset
Difícil  
Tópicos: Formulários  

Refatorar checkboxes em um `fieldset` com `legend` e labels.  

Exemplo:  
```html
<fieldset>
    <legend><!-- Opções --></legend>
    <label><input type="checkbox"><!-- Op1 --></label>
</fieldset>
```  

Restrições:  
- Fieldset legend.  
- Labels.

## 75. Corrigir Iframe
Difícil  
Tópicos: Segurança  

Identificar/corrigir erro em `<iframe>` sem protocolo.  

Exemplo:  
De: `<iframe src="//site.com">` para `<iframe src="https://site.com">`.  

Restrições:  
- Protocolo https.  
- Seguro.

## 76. Link Externo Seguro
Difícil  
Tópicos: Segurança  

Link externo abrindo em nova aba seguro (`target="_blank" rel="noopener noreferrer"`).  

Exemplo:  
```html
<a href="https://site.com" target="_blank" rel="noopener noreferrer"><!-- Link --></a>
```  

Restrições:  
- Target _blank.  
- Rel attributes.

## 77. Tabela Calendário
Difícil  
Tópicos: Tabelas  

Tabela de calendário usando `thead`, `tbody`, `colspan` e `rowspan`.  

Exemplo:  
```html
<table>
    <thead><tr><th colspan="7"><!-- Mês --></th></tr></thead>
    <tbody><tr><td rowspan="2"><!-- Dia --></td></tr></tbody>
</table>
```  

Restrições:  
- Thead tbody.  
- Span.

## 78. Lista Ordenada Aninhada
Difícil  
Tópicos: Listas  

Lista ordenada aninhada sem pular níveis.  

Exemplo:  
```html
<ol>
    <li><!-- 1 -->
        <ol>
            <li><!-- 1.1 --></li>
        </ol>
    </li>
</ol>
```  

Restrições:  
- Ol aninhado.  
- Níveis corretos.

## 79. Title em Elementos
Difícil  
Tópicos: Acessibilidade  

Aplicar `title` para tooltips em elementos diversos.  

Exemplo:  
```html
<button title="Clique aqui"><!-- Botão --></button>
```  

Restrições:  
- Atributo title.  
- Tooltip.

## 80. Dataset com Script
Difícil  
Tópicos: JavaScript  

Script usando `dataset` para ler `data-` e exibir no console.  

Exemplo:  
```html
<div data-value="123"></div>
<script>console.log(div.dataset.value);</script>
```  

Restrições:  
- Dataset.  
- Console.log.

## 81. Emmet Nav Ul Li
Difícil  
Tópicos: Emmet  

Expandir Emmet `nav>ul>li*5>a{Link $}` e descrever cada parte.  

Exemplo:  
Expande para nav com ul, 5 li com a "Link 1", etc.  

Restrições:  
- Entenda sintaxe.  
- Descreva.

## 82. Emmet Form
Difícil  
Tópicos: Emmet  

Gerar com Emmet `form>label+input:text[name=nome]+button{Enviar}` explicando a abreviação.  

Exemplo:  
Expande para form com label, input text name=nome, button "Enviar".  

Restrições:  
- Sintaxe correta.  
- Explique.