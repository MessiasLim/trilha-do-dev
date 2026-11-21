# Emmet - Atalhos Avançados e Snippets

*Domine o Emmet com técnicas avançadas, CSS, snippets customizados e automação profissional*

## Nível Avançado do Emmet

Bem-vindo ao nível avançado do Emmet! Aqui você aprenderá a trabalhar com CSS,
criar snippets customizados, usar wrap-with-abbreviation, trabalhar com abreviações implícitas,
e implementar automações que farão seu fluxo de trabalho parecer mágico.

## Emmet para CSS

### 1. Abreviações CSS

Emmet também funciona com CSS! Use abreviações para propriedades CSS comuns que expandem automaticamente.

**Exemplo 1: Propriedades CSS Simples**

No seu CSS, digite `m10`, pressione Tab e vira:

```css
margin: 10px;
```

- Digite `p20` → `padding: 20px;`
- Digite `w100%` → `width: 100%;`
- Digite `h50` → `height: 50px;`

**Exemplo 2: Abreviações Complexas**

- Digite `bd1s#000` → `border: 1px solid #000;`
- Digite `bgc#f1f1f1` → `background-color: #f1f1f1;`
- Digite `bgi:url()` → `background-image: url();`
- Digite `c#333` → `color: #333;`
- Digite `ff:serif` → `font-family: serif;`

**Exemplo 3: Box Model Abreviado**

- Digite `m10-20` → `margin: 10px 20px;`
- Digite `p0-10-5` → `padding: 0 10px 5px;`
- Digite `m5-10-15-20` → `margin: 5px 10px 15px 20px;`
- Digite `m:auto` → `margin: auto;`

## Wrap with Abbreviation

### 2. Envolvendo Código Existente

Uma das funcionalidades mais poderosas: selecione código HTML e o envolva com uma abreviação Emmet!

**Passo a Passo:**

1. Escreva seu HTML normalmente
2. Selecione o código que quer envolver
3. Use Ctrl+Shift+P (ou Cmd+Shift+P no Mac) para abrir a Paleta de Comandos
4. Procure por "Wrap with Abbreviation"
5. Digite a abreviação desejada
6. Pronto! Seu código foi envolvido

**Exemplo 1: Envolver em Div**

Código selecionado:

```html
<h1>Título</h1>
<p>Parágrafo</p>
```

Abbreviation: `.container`

```html
<div class="container">
  <h1>Título</h1>
  <p>Parágrafo</p>
</div>
```

**Exemplo 2: Envolver em Listas**

Itens selecionados:

```
Home
About
Contact
```

Abbreviation: `ul>li*`

```html
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
```

**Exemplo 3: Envolver em Estrutura Complexa**

Conteúdo selecionado:

```html
<img src="1.jpg">
<img src="2.jpg">
<img src="3.jpg">
```

Abbreviation: `.gallery>figure*>figcaption`

```html
<div class="gallery">
  <figure>
    <img src="1.jpg">
    <figcaption></figcaption>
  </figure>
  ... (repetido para cada imagem)
</div>
```

## Tags Implícitas

### 3. Deixando o Emmet Adivinhar o Elemento

Emmet é inteligente o suficiente para adivinhar qual tag você quer com base no contexto.

**Exemplo 1: Dentro de UL**

Dentro de `<ul>`, digite `.item` → resulta em `<li class="item"></li>`

O Emmet adivinha que você quer `<li>`, não `<div>`.

**Exemplo 2: Dentro de TABLE**

Dentro de `<table>`, digite `row*2` → `<tr></tr><tr></tr>`

Dentro de `<tr>`, digite `col*3` → `<td></td><td></td><td></td>`

**Exemplo 3: Dentro de SELECT**

Dentro de `<select>`, digite `option[value=$]*5{Opção $}`

```html
<option value="1">Opção 1</option>
<option value="2">Opção 2</option>
... (etc)
```

## Criando Snippets Customizados

### 4. Personalizar Emmet para Seus Projetos

VS Code permite criar snippets Emmet customizados. Vá para
`File > Preferences > Open User Settings (JSON)` e adicione em `emmet.preferences`.

**Exemplo 1: Adicionar no settings.json**

```json
{
  "emmet.preferences": {
    "output.baseIndent": 1,
    "output.indent": "  ",
    "output.newline": "\n",
    "output.selfClosingTag": "xhtml",
    "markup.href": "https://example.com",
    "html.attributes": {
      "class": "minha-classe",
      "id": "meu-id"
    }
  }
}
```

### 5. Criar Snippets Customizados de Abreviação

**Criar em settings.json:**

```json
{
  "emmet.extensionsPath": ["~/.emmet"],
  "emmet.syntaxProfiles": {
    "html": {
      "filters": "html"
    }
  }
}
```

**Exemplo de Snippets Customizados**

Você pode criar abreviações como:

- `myform` expande para: `<form><fieldset><legend></legend></fieldset></form>`
- `mypanel` expande para: `<div class="panel"><div class="panel-heading"></div><div class="panel-body"></div></div>`
- `mybtn` expande para: `<button type="button" class="btn"></button>`

## Abreviações Dinâmicas Avançadas

### 6. Técnicas Avançadas de Abreviação

**Exemplo 1: Números com Formatação**

Digite: `img[src="image-$@01$.jpg"]*3`

```html
<img src="image-001.jpg">
<img src="image-002.jpg">
<img src="image-003.jpg">
```

**Exemplo 2: Estrutura Multi-nível com Climb**

Digite: `(header>nav>ul>li*4>a)+main>(section*3>h2+p^+aside)+footer`

Resultado: uma página completa com header, main com seções e aside, footer.

**Exemplo 3: Combinando Tudo**

Digite: `.portfolio-page>(header.navbar#top>(nav>ul>li*5>a{Link $}))+(main.content>(section.project[data-id=$@100]*8>(img[src="project-$$.png"]+h3{Projeto $}+p>lorem15+a.demo[href="#"]{View}))+(footer.sticky>p{© 2026. Todos os direitos reservados.})`

Resultado: uma página de portfólio completamente estruturada com 8 projetos.

## Toggle Abbreviation e Expand Abbreviation

### 7. Comandos Úteis Adicionais

> **Expand Abbreviation:** Ctrl+Alt+E (ou Cmd+Alt+E) - expande a abreviação onde o cursor está.

> **Remove Tag:** Ctrl+Shift+K (ou Cmd+Shift+K) - remove a tag inteira mantendo o conteúdo.

> **Go to Matching Pair:** Ctrl+Alt+T (ou Cmd+Alt+T) - pula para a tag correspondente.

> **Balance (Inward):** Ctrl+D - seleciona conteúdo de uma tag.

> **Balance (Outward):** Ctrl+Shift+D - expande a seleção para a tag pai.

## Emmet CSS Avançado

**Exemplo 1: Múltiplas Propriedades**

Digite `.container` → `.container { }`

Dentro de `.container { }`, digite `m10-20 d:f aic jc:sb`:

```css
margin: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
```

**Exemplo 2: Pseudosseletores**

- Digite `a:h` → `a:hover { }`
- Digite `li:f` → `li:first-child { }`
- Digite `btn:a` → `button:active { }`

**Exemplo 3: Media Queries**

- Digite `@m` → `@media screen and (max-width: ) { }`
- Digite `@m (max-width: 600px)` → `@media screen and (max-width: 600px) { }`

## Boas Práticas Avançadas

### Faça Isto:

- Use snippets customizados para estruturas repetidas do seu projeto
- Combine múltiplos operadores para máxima eficiência
- Use wrap-with-abbreviation para refatorar código rapidamente
- Crie atalhos Emmet para componentes frequentes
- Aprenda os comandos de navegação para editar mais rápido
- Use lorem ipsum com números específicos para layout

### Não Faça Isto:

- Não tente memorizar TUDO - foque nos principais
- Não use Emmet se você não entende o HTML que gera
- Não deixe lorem ipsum em produção
- Não ignore erros de sintaxe Emmet
- Não use snippets muito complexos que você não consegue manter

## Exemplo Ultra-Avançado: Aplicação Web Completa

**Estrutura de App SPA (Single Page Application):**

```
html[lang="pt-br"]>(head>(meta[charset="UTF-8"]+meta[name="viewport" content="width=device-width, initial-scale=1.0"]+title{Minha App})+(body>(div#app>(header.navbar[data-sticky="true"]>(nav.container>ul.nav-menu>li.nav-item*5>a.nav-link[href="#page-$"]{Page $})+div.user-menu)+(main.main-content>(nav.sidebar#sidebar>(div.sidebar-header>h3{Menu}+button.close[data-close="sidebar"])+(ul.menu>li*8>a[data-section=$]{Section $}))+section.content-area>(div.breadcrumb>a{Home}+span{>}+a.active)+(article.article-container>h1{Artigo Principal}+div.meta>(span.author{Por Autor}+time{21 fev 2026})+div.content>(p*5>lorem30)+ul.social>li*5>a[href="#"][title="Social $"]{$}))+(footer.footer[data-sticky="bottom"]>(div.footer-content>p{© 2026}+ul.links>li*4>a{Link $})+script[src="app.js"])))
```

Este atalho gera uma aplicação web completa com header, sidebar navegável,
main content, artigo, footer, e mais!

## Tabela de Referência Avançada

| Técnica | Atalho | Resultado |
|---|---|---|
| Wrap with Abbreviation | Ctrl+Shift+P → "Wrap" | Envolve seleção com tag |
| Expand Abbreviation | Ctrl+Alt+E | Expande onde cursor está |
| Remove Tag | Ctrl+Shift+K | Remove tag, mantém conteúdo |
| Matching Pair | Ctrl+Alt+T | Pula para tag correspondente |
| Balance Inward | Ctrl+D | Seleciona conteúdo da tag |
| Balance Outward | Ctrl+Shift+D | Expande seleção para pai |
| CSS Margin | `m10` | `margin: 10px;` |
| CSS Padding | `p20` | `padding: 20px;` |
| CSS Flex | `d:f aic jc:c` | `display: flex; align-items: center; justify-content: center;` |

## Solução de Problemas

> **Problema:** Emmet não está funcionando
> **Solução:** verifique se a extensão Emmet está instalada e habilitada. Reinicie o VS Code. Certifique-se de estar em um arquivo HTML ou CSS.

> **Problema:** Abreviação não expande como esperado
> **Solução:** verifique a sintaxe da abreviação. Use parênteses se tiver dúvida. Teste em um arquivo novo para descartar conflitos com outras extensões.

> **Problema:** Wrap with Abbreviation não aparece
> **Solução:** abra a Paleta de Comandos (Ctrl+Shift+P), procure por "Wrap", e use o atalho sugerido. Pode variar conforme a versão do VS Code.

## Conclusão e Próximos Passos

**Parabéns!** Você agora domina o Emmet em nível avançado! Você pode:

- Criar estruturas HTML complexas em segundos
- Trabalhar com CSS usando abreviações
- Envolver código existente com wrap-with-abbreviation
- Criar snippets customizados para seus projetos
- Usar comandos avançados de edição
- Aumentar sua produtividade em até 10x

**Próximas Habilidades a Aprender:**

- Extensões VS Code que complementam Emmet
- Snippets personalizados com variáveis dinâmicas
- Automação com tasks do VS Code
- Integração com frameworks (React, Vue, Angular)
- Performance otimizada com Emmet em projetos grandes

---

*Desenvolvido para aprendizado de Emmet - Atalhos Avançados*
*Última atualização: Fevereiro de 2026*
