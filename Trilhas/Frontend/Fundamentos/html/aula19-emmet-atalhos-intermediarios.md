# ⚡ Emmet - Atalhos Intermediários

*Avance seu domínio do Emmet com técnicas mais complexas e poderosas*

## Bem-vindo aos Atalhos Intermediários

Agora que você domina os atalhos básicos, é hora de explorar técnicas mais avançadas do Emmet.
Neste nível, você aprenderá sobre agrupamento, descendência controlada, lorem ipsum automático,
e outros recursos poderosos que podem transformar páginas inteiras em segundos.

## Agrupamento com Parênteses "()"

### 1. Controlando Hierarquia com Parênteses

Parênteses `()` permitem criar estruturas complexas onde você controla precisamente
qual elemento é pai de qual. Sem parênteses, a hierarquia segue a ordem linear.

**Exemplo 1: Sem Parênteses (Hierarquia Linear)**

Digite: `header>nav>ul>li*3>a`

Resultado: a `<a>` fica dentro de `<li>`, que fica dentro de `<ul>`, que fica dentro de `<nav>`, que fica dentro de `<header>`.

**Exemplo 2: Com Parênteses (Estrutura Controlada)**

Digite: `header>(nav>ul>li*3>a)+(section>h1+p)`

```html
<header>
  <nav>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </nav>
  <section>
    <h1></h1>
    <p></p>
  </section>
</header>
```

**Exemplo 3: Página Completa com Agrupamento**

Digite: `body>(header>nav>ul>li*4>a)+(main>section*3>h2+p*2)+(footer>p)`

Resultado: uma estrutura HTML completa com header, main com 3 seções e footer.

## ⬆️ Voltando à Hierarquia com "^" (Climb)

### 2. Operador de Subida (Climb)

O circunflexo `^` permite "subir" na árvore de elementos,
tornando o próximo elemento irmão de um elemento anterior.

**Exemplo 1: Sem Climb (Todos Descendentes)**

Digite: `div>ul>li*3>a`

```html
<div>
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
</div>
```

**Exemplo 2: Com Climb (Criando Irmãos)**

Digite: `div>ul>li*3>a^+.sidebar`

Resultado: `.sidebar` fica no mesmo nível que `<ul>`.

```html
<div>
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
  <div class="sidebar"></div>
</div>
```

**Exemplo 3: Múltiplas Subidas**

Digite: `div>section>article>h2{Artigo}+p^^+.rodape`

```html
<div>
  <section>
    <article>
      <h2>Artigo</h2>
      <p></p>
    </article>
  </section>
  <div class="rodape"></div>
</div>
```

## 📝 Lorem Ipsum Automático

### 3. Gerando Texto Fictício com "lorem"

Use a palavra-chave `lorem` para gerar texto placeholder automaticamente.
Você pode especificar quantas palavras deseja.

**Exemplo 1: Lorem Padrão (30 palavras)**

Digite: `p>lorem`

```html
<p>Lorem ipsum dolor sit amet, consectetur 
adipisicing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.</p>
```

**Exemplo 2: Lorem com Número de Palavras**

Digite: `p>lorem10`

```html
<p>Lorem ipsum dolor sit amet, consectetur 
adipisicing elit, sed do.</p>
```

Digite: `p>lorem50`

Resultado: um parágrafo com aproximadamente 50 palavras.

**Exemplo 3: Lorem em Múltiplos Elementos**

Digite: `article>h2{Artigo}+p*3>lorem20`

```html
<article>
  <h2>Artigo</h2>
  <p>Lorem ipsum dolor sit amet, consectetur 
  adipisicing elit, sed do eiusmod.</p>
  <p>Lorem ipsum dolor sit amet, consectetur 
  adipisicing elit, sed do eiusmod.</p>
  <p>Lorem ipsum dolor sit amet, consectetur 
  adipisicing elit, sed do eiusmod.</p>
</article>
```

### 4. Variações de Texto Fictício

**Exemplo 1: Lorem em Bloco (com quebras)**

Digite: `div.article>(h2{Título}+p*2>lorem)`

Resultado: cria parágrafos completos com texto.

**Exemplo 2: Galeria com Descrições**

Digite: `.gallery>figure*4>(img[src="$.jpg"]+figcaption>lorem5)`

Resultado: cria 4 figuras com imagens e descrições.

## 🎯 Atributos Avançados

### 5. Múltiplos Atributos Complexos

Você pode adicionar atributos complexos com valores dinâmicos e até mesmo usando numeração automática.

**Exemplo 1: Data Attributes Customizados**

Digite: `div.card[data-id=$][data-category="product"]>h3+p`

```html
<div class="card" data-id="1" data-category="product">
  <h3></h3>
  <p></p>
</div>
```

**Exemplo 2: Formulário com Atributos Complexos**

Digite: `form>label{Nome:}+input[type="text"][name="nome"][placeholder="Digite seu nome"][required]`

```html
<form>
  <label>Nome:</label>
  <input type="text" name="nome" placeholder="Digite seu nome" required>
</form>
```

## 🔢 Numeração Avançada

### 6. Controlando Numeração com "$@"

Use `$@` para começar a numeração a partir de um número específico,
e `$-` para ordem reversa.

**Exemplo 1: Começando do 10**

Digite: `li*5{Item $@10}`

```html
<li>Item 10</li>
<li>Item 11</li>
<li>Item 12</li>
<li>Item 13</li>
<li>Item 14</li>
```

**Exemplo 2: Numeração Reversa**

Digite: `li*5{Nível $-}`

```html
<li>Nível 5</li>
<li>Nível 4</li>
<li>Nível 3</li>
<li>Nível 2</li>
<li>Nível 1</li>
```

## 🚀 Técnicas Avançadas de Combinação

### 7. Estruturas Complexas Reais

**Exemplo 1: Blog com Múltiplos Posts**

Digite: `main.blog>article.post[data-id=$]*5>(header>h2>a{Post $}+time{21 de fev})+(p>lorem30)+footer>span.author{Autor}+span.date{2026}`

Resultado: um blog com 5 artigos estruturados.

**Exemplo 2: Dashboard com Cards**

Digite: `.dashboard>header>h1{Painel}+(main>.container>(section.card*3>(h3{Card $}+p>lorem15))+aside.sidebar>(h3{Filtros}+ul>li*4>label>input[type="checkbox"]+span{Filtro $}))`

Resultado: um dashboard completo com cards e barra lateral.

**Exemplo 3: E-commerce Product Card**

Digite: `.product-card>(img[src="produto-$.jpg"][alt="Produto $"])+h3{Produto $}+p.preco{R$ $00}+.rating>span*5.star+button.add-cart{Adicionar}`

Resultado: um card de produto profissional com imagem, preço e botão.

## ✨ Combinações Especiais e Práticas

**Exemplo 1: Navegação com Dropdown**

Digite: `nav>ul>li*4{Menu $}>ul>li*3>a{Submenu}`

Resultado: cria uma navegação com submenus.

**Exemplo 2: Formulário Responsivo**

Digite: `form.formulario>(fieldset>legend{Dados Pessoais}+(.form-group>label{Nome}+input[type="text"]))+(.form-group>label{Email}+input[type="email"])*2+(button[type="submit"]{Enviar})`

Resultado: um formulário bem estruturado com fieldsets.

**Exemplo 3: Tabela Estruturada**

Digite: `table>(thead>tr>th*4{Coluna $})+(tbody>tr*5>td*4{Dados $})`

Resultado: uma tabela completa com cabeçalho e dados.

## 📤 Operador Pipe "|" (Filtros)

### 8. Aplicando Transformações

O pipe `|` pode ser usado com filtros especiais para transformar o output.
Alguns editores suportam diferentes filtros.

> **Nota:** o suporte a filtros varia conforme o editor.
> VS Code tem suporte limitado, mas você pode usar com extensões Emmet customizadas.

## 📋 Referência Rápida de Atalhos Intermediários

| Operador | Nome | Função | Exemplo |
|---|---|---|---|
| `()` | Agrupamento | Agrupa elementos | `(header+main)+footer` |
| `^` | Climb | Sobe um nível na árvore | `div>ul>li^+p` |
| `^^` | Double Climb | Sobe dois níveis | `div>section>h2^^+footer` |
| `lorem` | Lorem Ipsum | Gera texto placeholder | `p>lorem20` |
| `$@10` | Start Number | Começa numeração do 10 | `li*3{Item $@10}` |
| `$-` | Reverse | Numeração reversa | `li*5{$-}` |

## 💡 Casos de Uso Práticos Reais

**Caso 1: Criar um Blog Inteiro**

```
body>header>(nav>ul>li*5>a)+main>(article.post[data-id=$]*10>(h2+p*2>lorem))+sidebar>h3{Recentes}+ul>li*5>a{Post $})+(footer>p)
```

**Caso 2: Landing Page Completa**

```
html>(head>title{Minha Landing Page})+(body>(header.navbar>nav>ul>li*4>a)+(section.hero>h1+p+button)+(section.features>article.feature*4>(img+h3+p))+(footer))
```

**Caso 3: Admin Dashboard**

```
.admin-dashboard>(aside.sidebar>nav>ul>li*6>a{Menu $})+main>(header>h1{Painel}+.user)+(section.grid>div.card[data-widget=$]*8>(h3{Widget $}+p>lorem10+.stats))
```

## 🎓 Dicas Avançadas

> **✅ Combinação Poderosa:** use parênteses + numeração + lorem juntos:
> `(article.post*5>(h2{Post $}+p*2>lorem))+(aside>h3{Sidebar}+ul>li*4>a)`

> **✅ Estrutura Semântica Completa:** combine elementos semânticos com classes:
> `article.card[data-category=$]>(header>h2{Título}+span.date{Data})+(p>lorem)+(footer>a.read-more)`

> **⚠️ Parênteses são Seus Amigos:** se uma estrutura não sai como esperado,
> use parênteses para ser mais explícito sobre o que quer.

> **⚠️ Lorem é Apenas para Desenvolvimento:** sempre substitua o lorem ipsum
> por conteúdo real antes de publicar o site.

## 📊 Comparação: Sem Emmet vs Com Emmet

**❌ Sem Emmet (30 min digitando)**

```html
<div class="container">
  <header>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>...
    </article>
  </main>
</div>
```

**✅ Com Emmet (3 segundos!)**

Digite:

```
.container>(header>nav>ul>li*3>a)+(main>article)
```

Pronto! Expandir com Tab e está feito!

## 🎯 Desafios de Prática Intermediários

**Desafio 1: Portfólio**

Crie uma página de portfólio com header com navegação,
seção principal com projetos em grid (com imagem, título, descrição, link),
e footer com redes sociais.

**Desafio 2: Galeria de Produtos**

Crie uma galeria com 12 produtos, cada um em um card com imagem,
nome, preço, descrição curta e botão de compra. Use numeração automática nos IDs.

**Desafio 3: Timeline/Cronograma**

Crie uma timeline com 8 eventos, cada um com data, título, descrição e um ícone.
Use numeração reversa para os anos.

## 🏆 Conclusão

Com os atalhos intermediários, você agora pode criar estruturas HTML muito mais complexas
em segundos. O domínio de parênteses, climb (^), lorem ipsum e numeração avançada
transforma você em um desenvolvedor extremamente produtivo.
O próximo passo são os atalhos avançados e snippets customizados!

---

*Desenvolvido para aprendizado de Emmet - Atalhos Intermediários*
*Última atualização: Fevereiro de 2026*
