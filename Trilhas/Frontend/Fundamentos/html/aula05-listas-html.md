# Listas em HTML: `ul`, `ol` e `dl`

Este documento explica os tipos de listas no HTML, mostra múltiplos exemplos práticos, indica quando usar cada uma, e lista boas práticas e armadilhas comuns.

## 1. Listas não-ordenadas (`ul`)

As listas não-ordenadas representam conjuntos sem ordem lógica (marcadores).

Use `ul` quando a ordem dos itens não importa — por exemplo, uma lista de características, ingredientes ou links de navegação secundária.

### Exemplo básico

```html
<!-- Lista simples de itens -->
<ul>
  <li>Maçã</li>
  <li>Banana</li>
  <li>Laranja</li>
</ul>
```

Cada item da lista deve ser um elemento `<li>`. Evite colocar texto solto entre `<ul>` e `<li>`.

### Exemplo com links e ícones

```html
<ul class="menu">
  <li><a href="/home">Início</a></li>
  <li><a href="/sobre">Sobre</a></li>
  <li><a href="/contato">Contato</a></li>
</ul>
```

Dica: para menus, combine `ul` com ARIA roles quando necessário (`role="navigation"`).

### Quando não usar `ul`

- Quando a ordem dos passos importa — use `ol`.
- Quando os pares chave/valor são mais adequados — use `dl`.

## 2. Listas ordenadas (`ol`)

Use `ol` para sequências, instruções passo a passo, rankings ou qualquer conteúdo onde a ordem importa.

### Exemplo: receita passo a passo

```html
<ol>
  <li>Preaqueça o forno a 180°C.</li>
  <li>Misture os ingredientes secos.</li>
  <li>Adicione os ovos e mexa.</li>
  <li>Asse por 25 minutos.</li>
</ol>
```

### Marcação avançada: start e type

```html
<ol start="4" type="A">
  <li>Item A</li>
  <li>Item B</li>
</ol>
```

Os atributos `start` e `type` fornecem controle sobre a numeração. Use com moderação e prefira CSS para estilizar.

## 3. Listas de definição (`dl`, `dt`, `dd`)

As listas de definição representam pares termo/descrição — ótimo para glossários, FAQs, e pares chave/valor.

### Exemplo de glossário

```html
<dl>
  <dt>HTML</dt>
  <dd>Linguagem de marcação usada para estruturar páginas web.</dd>

  <dt>CSS</dt>
  <dd>Folhas de estilo em cascata, usadas para estilizar documentos HTML.</dd>
</dl>
```

### Casos de uso mistos

Você pode usar `dl` para pares complexos onde cada termo tem múltiplas descrições ou atributos específicos.

## 4. Listas aninhadas e acessibilidade

Listas podem ser aninhadas arbitrariamente, mas mantenha a clareza semântica. Use `aria-label` ou `aria-labelledby` quando o propósito da lista não for óbvio.

### Exemplo aninhado

```html
<ul>
  <li>Frutas
    <ul>
      <li>Maçã</li>
      <li>Pera</li>
    </ul>
  </li>
  <li>Legumes
    <ul>
      <li>Cenoura</li>
      <li>Beterraba</li>
    </ul>
  </li>
</ul>
```

### Dicas de acessibilidade

- Evite listas para controlar layout visual; use CSS para isso.
- Forneça texto descritivo em links dentro de listas (não use "clique aqui").
- Use `role="list"` e `role="listitem"` apenas quando o HTML semântico não puder ser usado (evite substituições desnecessárias).

## 5. Estilização com CSS

Use CSS para controlar o tipo de marcador, espaçamento e alinhamento. Evite usar imagens dentro de `<li>` para marcadores — prefira `list-style-image` ou pseudo-elementos.

### Exemplo: remover marcadores e adicionar ícones

```html
<style>
ul.sem-marcador{list-style:none;padding:0;margin:0}
ul.sem-marcador > li{position:relative;padding-left:1.5rem}
ul.sem-marcador > li:before{content:"•";position:absolute;left:0;color:#2b7cff}
</style>

<ul class="sem-marcador">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

## 6. SEO e semântica

Search engines entendem listas como agrupamentos de informação. Use listas para estruturar conteúdo que naturalmente pertence a um conjunto — isso ajuda a clareza do documento e a indexação.

## 7. Armadilhas comuns

- Usar `<div>` com estilos para simular listas sem semântica.
- Colocar blocos inteiros (como `<p>`) diretamente como filhos de `<ul>` sem `<li>`.
- Aninhar listas demais — afeta usabilidade e acessibilidade.
- Confiar exclusivamente em CSS para apresentar ordem visível (parâmetros semânticos devem refletir a ordem real).

## 8. Checklist Rápido

- Se a ordem importa → use `ol`.
- Se desejar pares termo/definição → use `dl`.
- Para menus de navegação → combine `ul` com `nav` e ARIA quando necessário.
- Evite usar listas para layout.

## 9. Conclusão

Listas são fundamentais para representar conjuntos de informações. Use a semântica correta, mantenha a acessibilidade em mente e prefira CSS para estilização. Esse guia forneceu exemplos e práticas para cobrir as situações mais comuns.
