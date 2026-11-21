# Emmet - Atalhos Básicos para Iniciantes

*Aprenda os atalhos FUNDAMENTAIS do Emmet para aumentar sua produtividade no desenvolvimento HTML*

## Introdução ao Emmet

**O que é Emmet?**

Emmet é um kit de ferramentas de editor que melhora significativamente o fluxo de trabalho HTML e CSS.
Ele permite que você escreva código HTML rapidamente usando atalhos e abreviações que expandem automaticamente
em código completo. Se você está cansado de digitar tags HTML repetidamente, Emmet é a solução perfeita!

> **Dica Importante:** o Emmet já vem pré-instalado na maioria dos editores modernos
> (VS Code, Sublime Text, WebStorm, etc). Se não aparecer, procure pela extensão "Emmet" na loja de extensões.

## Conceitos Básicos

### 1. Seletor de Elemento Simples

O atalho mais básico do Emmet: digite um nome de tag HTML e pressione `Tab` para expandir automaticamente.

| Atalho | Resultado | Descrição |
|---|---|---|
| `p` | `<p></p>` | Parágrafo simples |
| `div` | `<div></div>` | Divisão (container) |
| `header` | `<header></header>` | Cabeçalho semântico |
| `section` | `<section></section>` | Seção de conteúdo |

**Exemplos Práticos:**

Digite: `article`

```html
<article></article>
```

Digite: `nav`

```html
<nav></nav>
```

Digite: `footer`

```html
<footer></footer>
```

## Criador de Estruturas com ">"

### 2. Operador de Filho (Child) - ">"

O operador `>` cria elementos filhos dentro de um elemento pai.
Muito útil para criar estruturas aninhadas rapidamente.

**Exemplo 1: Estrutura de Navegação**

Digite: `nav>ul>li*3>a`

```html
<nav>
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
</nav>
```

**Exemplo 2: Estrutura de Artigo**

Digite: `article>h2+p+p`

```html
<article>
  <h2></h2>
  <p></p>
  <p></p>
</article>
```

## Multiplicador com "*"

### 3. Operador de Multiplicação - "*"

Use o operador `*` seguido de um número para criar múltiplos elementos idênticos.
Isso economiza MUITO tempo ao criar listas ou grades.

**Exemplo 1: Criar 5 Parágrafos**

Digite: `p*5`

```html
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
```

**Exemplo 2: Criar Uma Tabela com 3 Linhas e 4 Colunas**

Digite: `table>tr*3>td*4`

```html
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
```

## Criando Elementos Irmãos com "+"

### 4. Operador de Irmão (Sibling) - "+"

O operador `+` cria elementos no mesmo nível (irmãos) em vez de filhos.
Perfeito para criar estruturas horizontais.

**Exemplo 1: Header Simples**

Digite: `header+main+footer`

```html
<header></header>
<main></main>
<footer></footer>
```

**Exemplo 2: Estrutura de Card**

Digite: `.card>h3+p+a`

```html
<div class="card">
  <h3></h3>
  <p></p>
  <a href=""></a>
</div>
```

## Adicionando Classes e IDs

### 5. Notação de Classe - "."

Use um ponto (`.`) para adicionar classes HTML rapidamente.
Você pode adicionar múltiplas classes combinando-as.

**Exemplo 1: Elemento com Classe Única**

Digite: `div.container`

```html
<div class="container"></div>
```

Digite: `p.texto-destaque`

```html
<p class="texto-destaque"></p>
```

**Exemplo 2: Múltiplas Classes**

Digite: `div.container.flex.center`

```html
<div class="container flex center"></div>
```

Digite: `button.btn.btn-primary.btn-lg`

```html
<button class="btn btn-primary btn-lg"></button>
```

### 6. Notação de ID - "#"

Use cerquilha (`#`) para adicionar IDs HTML. IDs devem ser únicos na página.

**Exemplos de ID:**

Digite: `div#main-content`

```html
<div id="main-content"></div>
```

Digite: `section#sobre-nos`

```html
<section id="sobre-nos"></section>
```

Digite: `header#navbar.sticky-header`

```html
<header id="navbar" class="sticky-header"></header>
```

## Adicionando Atributos com "[]"

### 7. Notação de Atributos - "[]"

Use colchetes `[]` para adicionar atributos customizados a elementos.

**Exemplo 1: Links com Atributos**

Digite: `a[href="https://google.com"][target="_blank"]`

```html
<a href="https://google.com" target="_blank"></a>
```

Digite: `img[src="foto.jpg"][alt="Descrição"]`

```html
<img src="foto.jpg" alt="Descrição">
```

**Exemplo 2: Inputs com Atributos**

Digite: `input[type="text"][placeholder="Digite seu nome"]`

```html
<input type="text" placeholder="Digite seu nome">
```

Digite: `input[type="email"][required]`

```html
<input type="email" required>
```

## Numeração Automática com "$"

### 8. Operador de Numeração - "$"

Use cifrão `$` para criar numeração automática em elementos repetidos.
Muito útil para IDs, classes e conteúdo.

**Exemplo 1: Lista Numerada com IDs**

Digite: `li*5#item-$`

```html
<li id="item-1"></li>
<li id="item-2"></li>
<li id="item-3"></li>
<li id="item-4"></li>
<li id="item-5"></li>
```

**Exemplo 2: Cards Numerados**

Digite: `.card*4>h3{Card $}+p`

```html
<div class="card">
  <h3>Card 1</h3>
  <p></p>
</div>
<div class="card">
  <h3>Card 2</h3>
  <p></p>
</div>
... (e assim por diante)
```

## Adicionando Texto com "{}"

### 9. Notação de Texto - "{}"

Use chaves `{}` para adicionar texto diretamente dentro de elementos.

**Exemplo 1: Botões com Texto**

Digite: `button{Clique aqui}`

```html
<button>Clique aqui</button>
```

Digite: `a{Ir para Google}`

```html
<a href="">Ir para Google</a>
```

**Exemplo 2: Lista de Navegação**

Digite: `ul>li*3>a{Link $}`

```html
<ul>
  <li><a href="">Link 1</a></li>
  <li><a href="">Link 2</a></li>
  <li><a href="">Link 3</a></li>
</ul>
```

## Combinações Práticas de Atalhos

**Exemplo 1: Página Completa Básica**

Digite: `html>head>title{Minha Página}+meta[charset=UTF-8]+body>header>nav>ul>li*5>a`

Resultado: uma estrutura HTML completa com navegação.

**Exemplo 2: Galeria de Imagens**

Digite: `.gallery>figure*6>img[src="img-$.jpg"]+figcaption{Imagem $}`

```html
<div class="gallery">
  <figure>
    <img src="img-1.jpg">
    <figcaption>Imagem 1</figcaption>
  </figure>
  ... (repetido 6 vezes)
</div>
```

**Exemplo 3: Formulário de Contato**

Digite: `form.contato>label*3>input[type="text"]+button[type="submit"]{Enviar}`

Resultado: um formulário com 3 campos de entrada.

## Estrutura HTML5 Completa em um Atalho

**O Atalho Mais Poderoso: "!"**

O ponto de exclamação (`!`) expande para uma estrutura HTML5 completa e válida!

Digite apenas: `!`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

## Guia Rápido de Referência

| Símbolo | Nome | Função | Exemplo |
|---|---|---|---|
| `>` | Child (Filho) | Cria elemento dentro de outro | `div>p` |
| `+` | Sibling (Irmão) | Cria elemento ao lado de outro | `h1+p` |
| `*` | Multiply (Multiplicar) | Cria múltiplos elementos | `li*3` |
| `.` | Class (Classe) | Adiciona classe CSS | `div.container` |
| `#` | ID | Adiciona ID único | `div#main` |
| `[]` | Attributes (Atributos) | Adiciona atributos HTML | `a[href="#"]` |
| `{}` | Text (Texto) | Adiciona conteúdo de texto | `p{Olá mundo}` |
| `$` | Numbering (Numeração) | Enumera automaticamente | `li*3{Item $}` |
| `!` | DOCTYPE | Estrutura HTML5 completa | `!` (expande tudo) |

## Dicas e Truques Essenciais

> **Sempre use Tab para expandir:** pressione a tecla Tab (não Enter) depois de digitar o atalho Emmet.
> Enter pode fazer outras coisas dependendo do editor.

> **Combine múltiplos atalhos:** você pode combinar quase todos os operadores!
> Exemplo: `header.sticky>nav#navbar>ul>li*5>a[href="#"]{Menu $}`

> **Use parênteses para agrupar:** coloque parênteses `()` para controlar a hierarquia.
> Exemplo: `div>(header>nav)+(main>section)+footer`

> ⚠️ **Cuidado com o div implícito:** se você usar um ponto ou cerquilha sem nome de elemento,
> Emmet cria automaticamente uma `<div>`. Exemplo: `.container` vira `<div class="container"></div>`

> ⚠️ **Não confunda $ com numeração maior:** use `$$` para começar em 01, 02...
> ou `$$$` para 001, 002...

## Quando Usar Emmet?

### Use Emmet Para:

- Criar estruturas HTML repetitivas rapidamente
- Gerar múltiplos elementos similares
- Prototipar páginas HTML rápido
- Reduzir o tempo de digitação em até 80%
- Criar listas, tabelas e grids
- Adicionar classes e IDs em massa

### Não Use Emmet Para:

- Código HTML muito complexo que precisa de lógica
- Estruturas únicas e não repetitivas
- Quando você quer aprender escrevendo HTML manualmente
- Em projetos que requerem compreensão profunda de cada linha

## Conclusão

Os atalhos básicos do Emmet que você aprendeu aqui são FUNDACIONAIS e irão transformar
sua produtividade no desenvolvimento HTML. Comece praticando cada um individualmente,
depois combine-os em estruturas mais complexas. Com prática, você digitará uma única linha
de Emmet e terá páginas inteiras geradas automaticamente!

**Próximo passo:** veja os atalhos intermediários para aprender agrupamento, descendência,
e outros operadores avançados.

---

*Desenvolvido para aprendizado de Emmet - Atalhos Básicos para Iniciantes*
*Última atualização: Fevereiro de 2026*
