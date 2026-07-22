# Tags Semânticas HTML5

## O que é Semântica?

Semântica refere-se ao significado. Tags semânticas comunicam não apenas ao navegador,
mas também ao desenvolvedor e a tecnologias assistivas (como leitores de tela),
qual é o **propósito** do conteúdo.

### Por Que Semântica é Importante?

- **SEO:** Mecanismos de busca entendem melhor a estrutura
- **Acessibilidade:** Leitores de tela navegam melhor
- **Manutenibilidade:** Código mais fácil de entender
- **Compatibilidade:** Funciona melhor em dispositivos variados

## 1. `<header>` - Cabeçalho

### O que é?

`<header>` representa o cabeçalho de uma página ou seção.
Geralmente contém logo, título, navegação e outros elementos de introdução.

### Quando Usar

Pode haver múltiplos `<header>` em uma página (um para cada seção principal).

### Exemplos

```html
<!-- Header da página -->
<header>
  <h1>Logo do Site</h1>
  <p>Slogan ou descrição</p>
</header>

<!-- Header de um artigo (dentro de article) -->
<article>
  <header>
    <h2>Título do Artigo</h2>
    <p>Publicado em 01/02/2026 por João Silva</p>
  </header>
  <p>Conteúdo do artigo...</p>
</article>
```

## 2. `<nav>` - Navegação

### O que é?

`<nav>` define uma seção com links de navegação principais.
Não use para cada grupo de links - apenas para navegação principal.

### Quando Usar

- Menu principal de navegação
- Menu de breadcrumb (trilha de navegação)
- Índice de página
- Múltiplos `<nav>` podem existir (header nav, footer nav, etc)

### Quando NÃO Usar

Não use `<nav>` para links aleatórios ou lista de amigos em uma rede social.

### Exemplos

```html
<!-- Menu principal -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/servicos">Serviços</a></li>
    <li><a href="/sobre">Sobre Nós</a></li>
    <li><a href="/contato">Contato</a></li>
  </ul>
</nav>

<!-- Breadcrumb (trilha) -->
<nav>
  <a href="/">Home</a> &gt;
  <a href="/blog">Blog</a> &gt;
  <a href="/blog/html">HTML</a> &gt;
  Página Atual
</nav>

<!-- Índice -->
<nav>
  <h2>Conteúdo desta Página</h2>
  <ul>
    <li><a href="#secao1">Seção 1</a></li>
    <li><a href="#secao2">Seção 2</a></li>
  </ul>
</nav>
```

## 3. `<main>` - Conteúdo Principal

### O que é?

`<main>` envolve o conteúdo principal único da página.
Deve haver **apenas um `<main>` por página** e não deve estar aninhado.

### Importante

- Apenas 1 `<main>` por página (como `<h1>`)
- Não deve conter elementos globais (header, nav, footer)
- Deve ser irmão de header, nav, footer (não dentro deles)

### Exemplos

```html
<!-- Estrutura correta -->
<body>
  <header>...</header>
  <nav>...</nav>
  <main>
    <article>...</article>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>
```

## 4. `<article>` - Artigo

### O que é?

`<article>` representa conteúdo independente e autossustentável.
Se removido da página, ainda deveria fazer sentido isoladamente.

### Uso Comum

- Posts de blog
- Notícias
- Comentários
- Cartões de produto
- Conteúdo sindicalizado

### Exemplos

```html
<!-- Post de blog -->
<article>
  <header>
    <h2>Meu Primeiro Post</h2>
    <p>Escrito em 01/02/2026</p>
  </header>
  <p>Conteúdo do post...</p>
  <footer>
    <p>Categorias: <a href="#">Web</a>, <a href="#">HTML</a></p>
  </footer>
</article>

<!-- Comentário -->
<article>
  <header>
    <h3>João Silva</h3>
    <time datetime="2026-02-01">01 de fevereiro</time>
  </header>
  <p>Excelente artigo! Muito informativo.</p>
</article>
```

## 5. `<section>` - Seção

### O que é?

`<section>` agrupa conteúdo tematicamente relacionado.
É mais genérica que `<article>`, para agrupamentos de temas.

### Regras de Uso

Deve estar dentro de um contexto (página, artigo, etc).
Cada `<section>` deve idealmente ter um `<h2>` ou `<h3>`.

### Exemplos

```html
<main>
  <section>
    <h2>Sobre HTML</h2>
    <p>HTML é a base da web...</p>
  </section>

  <section>
    <h2>Por Que Aprender HTML?</h2>
    <p>HTML é essencial porque...</p>
  </section>

  <section>
    <h2>Como Começar</h2>
    <ol>
      <li>Aprenda as tags básicas</li>
      <li>Pratique criando páginas</li>
      <li>Avance para CSS</li>
    </ol>
  </section>
</main>
```

## 6. `<aside>` - Barra Lateral

### O que é?

`<aside>` representa conteúdo periférico ou secundário.
Não é essencial à compreensão do conteúdo principal.

### Uso Comum

- Barra lateral com links relacionados
- Anúncios
- Caixa "Saiba Mais"
- Nota de rodapé ou observação
- Definição de termo (quando dentro de um artigo)

### Exemplos

```html
<main>
  <article>
    <h2>Artigo Principal</h2>
    <p>Conteúdo...</p>
  </article>

  <aside>
    <h3>Artigos Relacionados</h3>
    <ul>
      <li><a href="#">CSS Básico</a></li>
      <li><a href="#">JavaScript Iniciante</a></li>
    </ul>
  </aside>
</main>

<!-- Nota importante -->
<aside>
  <h4>Nota Importante</h4>
  <p>Este conteúdo foi atualizado em 2026.</p>
</aside>
```

## 7. `<footer>` - Rodapé

### O que é?

`<footer>` representa o rodapé de uma página ou seção.
Geralmente contém informações legais, links, créditos e contato.

### Pode haver múltiplos footers

Um para cada seção, artigo, etc. Como `<header>`.

### Exemplos

```html
<!-- Footer da página -->
<footer>
  <p>&copy; 2024-2026 Meu Site. Todos os direitos reservados.</p>
  <ul>
    <li><a href="#">Privacidade</a></li>
    <li><a href="#">Termos de Uso</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</footer>

<!-- Footer de artigo -->
<article>
  <h2>Artigo Interessante</h2>
  <p>Conteúdo...</p>
  <footer>
    <p>Publicado em 01/02/2026 | Autor: João Silva</p>
    <p>Categorias: <a href="#">Web</a>, <a href="#">Design</a></p>
  </footer>
</article>
```

## 8. `<figure>` e `<figcaption>` - Imagem com Legenda

### O que são?

`<figure>` envolve conteúdo ilustrativo (imagem, código, gráfico).
`<figcaption>` fornece a legenda deste conteúdo.

### Quando Usar

- Imagens importantes com legenda
- Diagramas e gráficos
- Blocos de código comentados
- Vídeos com descrição

### Exemplos

```html
<!-- Imagem com legenda -->
<figure>
  <img src="arvore.jpg" alt="Uma árvore grande em uma floresta">
  <figcaption>Fig. 1 - Árvore centenária no Parque Nacional da Serra.</figcaption>
</figure>

<!-- Código com descrição -->
<figure>
  <figcaption>Exemplo de função JavaScript</figcaption>
  <pre><code>
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
  </code></pre>
</figure>

<!-- Vídeo com legenda -->
<figure>
  <video controls width="320" height="240">
    <source src="video.mp4" type="video/mp4">
  </video>
  <figcaption>Vídeo: Como aprender HTML em 10 minutos</figcaption>
</figure>
```

## 9. Outros Elementos Semânticos

### `<time>` - Data e Hora

```html
<p>Publicado em <time datetime="2026-02-01T10:30:00Z">1 de fevereiro de 2026</time></p>
<p>A reunião é <time datetime="14:30">às 14h30</time>.</p>
```

### `<mark>` - Texto Marcado/Realçado

```html
<p>Use <mark>HTML5</mark> para estruturação semântica.</p>
```

### `<meter>` - Medição Escalar

```html
<p>Quente: <meter value="8" min="0" max="10"></meter></p>
```

### `<progress>` - Barra de Progresso

```html
<p>Download: <progress value="70" max="100"></progress></p>
```

## 10. Exemplo de Layout Semântico Completo

```html
<!DOCTYPE html>
<html lang="pt-br">
<body>
  <header>
    <h1>Meu Blog</h1>
    <p>Artigos sobre desenvolvimento web</p>
  </header>

  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/sobre">Sobre</a></li>
    </ul>
  </nav>

  <main>
    <article>
      <header>
        <h2>Introdução a HTML5</h2>
        <time datetime="2026-02-01">1 de fevereiro de 2026</time>
      </header>

      <section>
        <h3>O que é HTML5?</h3>
        <p>HTML5 é a versão mais moderna do HTML...</p>
      </section>

      <section>
        <h3>Benefícios Semânticos</h3>
        <p>Usar tags semânticas oferece muitas vantagens...</p>
      </section>

      <footer>
        <p>Compartilhe: <a href="#">Facebook</a>, <a href="#">Twitter</a></p>
      </footer>
    </article>

    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        <li><a href="#">Introdução a CSS</a></li>
        <li><a href="#">JavaScript Básico</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Meu Blog. Todos os direitos reservados.</p>
  </footer>
</body>
</html>
```
