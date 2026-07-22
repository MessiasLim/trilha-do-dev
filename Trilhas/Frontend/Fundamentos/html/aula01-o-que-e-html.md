# O que é HTML?

## Definição

**HTML** é a sigla para **HyperText Markup Language** (Linguagem de Marcação para Hipertexto).
É a linguagem padrão usada para criar páginas web e é interpretada por todos os navegadores modernos
(Chrome, Firefox, Safari, Edge, etc.).

### O que "Markup Language" significa?

"Markup" significa "marcação". HTML utiliza tags (etiquetas) para marcar elementos no documento,
indicando ao navegador como exibir o conteúdo. Não é uma linguagem de programação tradicional,
mas sim uma linguagem de estruturação e apresentação de conteúdo.

## Funções Principais do HTML

### 1. Estruturação de Conteúdo

HTML fornece a estrutura básica da página, organizando o conteúdo de forma semântica e lógica.
Define onde está o cabeçalho, o corpo principal, a navegação, artigos, rodapé, etc.

### 2. Apresentação de Dados

Permite exibir diferentes tipos de conteúdo: texto, imagens, vídeos, áudio, links, tabelas,
formulários e muito mais.

### 3. Criação de Interatividade Base

HTML oferece formulários e elementos que permitem coleta de dados do usuário,
embora a interatividade avançada dependa de JavaScript.

### 4. SEO (Search Engine Optimization)

Uma estrutura HTML bem feita facilita que mecanismos de busca entendam e indexem seu conteúdo,
melhorando o posicionamento em resultados de pesquisa.

## A Tríade do Web Development: HTML, CSS e JavaScript

### HTML - Estrutura (Esqueleto)

Define WHAT (o quê): a estrutura e o conteúdo. É como o esqueleto de um corpo humano.

```html
Exemplo: Define que há um parágrafo, uma imagem, um botão, etc.
<p>Bem-vindo!</p>
<button>Clique aqui</button>
```

### CSS - Estilo (Pele e Roupa)

Define HOW IT LOOKS (como parece): cores, tamanhos, fontes, posicionamento, animações.
É como a pele, cabelo e roupa de um corpo humano.

```css
Exemplo: Define que o parágrafo é azul, tamanho 16px, etc.
p { color: blue; font-size: 16px; }
```

### JavaScript - Comportamento (Músculos e Nervos)

Define HOW IT WORKS (como funciona): interatividade, validação, animações avançadas,
processamento de dados. É como os músculos e nervos que fazem o corpo se mover e funcionar.

```javascript
Exemplo: Define que ao clicar no botão, uma ação acontece.
button.addEventListener('click', function() { 
  alert('Botão clicado!'); 
});
```

## Breve Histórico das Versões

| Versão | Ano | Destaques |
|---|---|---|
| HTML 1.0 | 1993 | Primeira versão. Muito básica, apenas textos e links simples. |
| HTML 2.0 | 1995 | Primeira especificação HTML oficial do W3C. Adicionou formulários. |
| HTML 3.2 | 1997 | Introduziu tabelas, applets e suporte para folhas de estilo (CSS). |
| HTML 4.01 | 1999 | Versão muito usada. Melhorou separação entre conteúdo e apresentação. |
| XHTML 1.0 | 2000 | Versão mais rigorosa de HTML baseada em XML. |
| HTML5 | 2014 (até hoje) | Versão atual e mais moderna. Adicionou elementos semânticos (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`), suporte nativo para áudio e vídeo, canvas, melhor acessibilidade, APIs modernas, e muito mais. É o padrão que todos devem usar hoje em dia. |

## Por Que HTML é Importante?

- **Universal** — Funciona em todos os navegadores, em todos os dispositivos (desktop, tablet, mobile).
- **Essencial** — Sem HTML, não há web. Mesmo aplicações web modernas precisam de HTML como base.
- **Acessibilidade** — HTML bem estruturado garante que pessoas com deficiências visuais (usando leitores de tela) possam acessar o conteúdo.
- **SEO** — Mecanismos de busca dependem de HTML bem estruturado para entender e indexar conteúdo.
- **Performance** — HTML puro é rápido e leve, permitindo carregamento rápido de páginas.
- **Manutenibilidade** — Código HTML bem organizado é fácil de manter e atualizar.

## Conceitos Fundamentais do HTML

### 1. Tags

Tags são rótulos que marcam o tipo de conteúdo. Têm formato `<tag>conteúdo</tag>`.
Algumas tags não precisam fechar (self-closing): `<br>`, `<img>`, `<input>`

### 2. Atributos

Fornecem informações adicionais às tags. Vão dentro da tag de abertura.
Exemplo: `<img src="foto.jpg" alt="Descrição">` (`src` e `alt` são atributos)

### 3. Elementos

Um elemento é composto pela tag de abertura, conteúdo e tag de fechamento.
Exemplo: `<p>Este é um elemento parágrafo</p>`

### 4. Semântica

Usar tags apropriadas para cada tipo de conteúdo. Use `<header>` para cabeçalho,
`<article>` para artigo, `<button>` para botão, em vez de `<div>` genérico para tudo.

## Estrutura Típica de uma Página HTML

```html
<!DOCTYPE html>                      <!-- Declara que é HTML5 -->
<html lang="pt-br">                  <!-- Elemento raiz (pt-br = português Brasil) -->
  <head>                             <!-- Metadados (não visível) -->
    <meta charset="UTF-8">           <!-- Codificação de caracteres -->
    <meta name="viewport" ...>       <!-- Responsividade -->
    <title>Título da página</title>  <!-- Aparece na aba do navegador -->
  </head>
  <body>                             <!-- Todo conteúdo visível -->
    <header>Cabeçalho</header>       <!-- Cabeçalho da página -->
    <nav>Menu</nav>                  <!-- Navegação -->
    <main>                           <!-- Conteúdo principal -->
      <article>Artigo</article>      <!-- Artigo ou post -->
    </main>
    <footer>Rodapé</footer>          <!-- Rodapé -->
  </body>
</html>
```
