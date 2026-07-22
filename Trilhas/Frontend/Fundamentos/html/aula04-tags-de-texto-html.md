# Tags de Texto em HTML

As tags de texto são usadas para estruturar e formatar conteúdo textual.
Cada tag tem um propósito semântico específico, não apenas visual.

## 1. Títulos e Subtítulos (`<h1>` a `<h6>`)

### O que são?

Headings (títulos) definem a hierarquia de títulos em uma página.
Vão de `<h1>` (mais importante) até `<h6>` (menos importante).

### Importância da Hierarquia

Manter uma hierarquia lógica é crucial para:

- **SEO:** Mecanismos de busca entendem melhor a estrutura
- **Acessibilidade:** Leitores de tela navegam pela hierarquia
- **Usuários:** Entendem melhor a organização do conteúdo

### Regras Importantes

- Deve haver apenas UM `<h1>` por página (o título principal)
- Não pule níveis. Use h2 após h1, não h3 diretamente
- Use para estrutura, não para estilo. Use CSS para tamanho/cor

### Exemplos Corretos

```html
<!-- ✓ CORRETO - Hierarquia lógica -->
<h1>Título Principal da Página</h1>
<h2>Seção 1</h2>
<h3>Sub-seção 1.1</h3>
<h3>Sub-seção 1.2</h3>
<h2>Seção 2</h2>
```

### Exemplos Incorretos

```html
<!-- ✗ INCORRETO - Múltiplos h1 -->
<h1>Título</h1>
<h1>Outro Título</h1>

<!-- ✗ INCORRETO - Pulando níveis -->
<h1>Título</h1>
<h3>Sub-seção (Pulou h2!)</h3>
```

## 2. Parágrafo (`<p>`)

### O que é?

A tag `<p>` define um parágrafo. Sempre use `<p>` para blocos de texto,
nunca coloque múltiplos parágrafos em um único `<p>`.

### Exemplos

```html
<p>Este é meu primeiro parágrafo.</p>
<p>Este é meu segundo parágrafo.</p>
<p>
  Um parágrafo pode ser bem longo e ocupar múltiplas linhas
  no código. O navegador o renderizará como um único bloco.
</p>
```

### Como o Navegador Renderiza

O navegador automaticamente adiciona espaçamento (margin) antes e depois de cada `<p>`.
Múltiplos espaços no código são reduzidos a um único espaço no resultado.

```
Código:
<p>Linha 1</p>
<p>Linha 2</p>

Resultado no navegador:
Linha 1

Linha 2
(Note o espaço entre elas)
```

## 3. Quebra de Linha (`<br>`)

### O que é?

A tag `<br>` cria uma quebra de linha. É uma tag de auto-fechamento (self-closing),
ou seja, não precisa de `</br>`.

### Quando Usar

- **Poesia e Letras:** Quebras de linha significativas
- **Endereços:** Múltiplas linhas
- **Muito raramente:** Para espaçamento (use CSS margin em vez disso)

### Exemplos

```html
<!-- Poesia -->
<p>
  Roses are red,<br>
  Violets are blue,<br>
  HTML is great,<br>
  And so are you.
</p>

<!-- Endereço -->
<p>
  Rua das Flores, 123<br>
  São Paulo, SP<br>
  Brasil
</p>
```

### Não Use Para Espaçamento

```html
<!-- ✗ ERRADO -->
<p>Parágrafo 1</p>
<br><br><br> <!-- Múltiplos br para espaço -->
<p>Parágrafo 2</p>

<!-- ✓ CORRETO - Use CSS -->
<p>Parágrafo 1</p>
<p style="margin-top: 50px;">Parágrafo 2</p>
```

## 4. Ênfase (`<em>`) e Importância (`<strong>`)

### `<em>` - Ênfase (Itálico Semântico)

`<em>` marca texto com ênfase. É renderizado em itálico, mas o significado é semântico.
Leitores de tela pronunciam com ênfase.

```html
<p>Eu <em>realmente</em> adorei este filme.</p>
<p>A reunião foi <em>muito</em> importante.</p>
```

### `<strong>` - Importância (Negrito Semântico)

`<strong>` marca texto como sendo de importância forte. É renderizado em negrito,
mas o significado é que o conteúdo é importante.

```html
<p><strong>Aviso:</strong> Não toque neste botão.</p>
<p>Este produto é <strong>À PROVA D'ÁGUA</strong>.</p>
```

### Diferença Entre `<em>`, `<strong>`, `<i>` e `<b>`

```
<em>        → Ênfase (semântica), renderizado em itálico
<strong>    → Importância (semântica), renderizado em negrito
<i>         → Itálico (apenas visual, não semântico)
<b>         → Negrito (apenas visual, não semântico)

✓ Prefira: <em> e <strong>
✗ Evite: <i> e <b> (use CSS em vez disso)
```

## 5. Marcação (`<mark>`)

### O que é?

`<mark>` destaca texto com fundo amarelo (por padrão). Útil para realçar
resultados de busca ou texto importante.

### Exemplos

```html
<p>
  Encontramos 5 resultados para "HTML":
  <br>
  <mark>HTML</mark> é uma linguagem de marcação...
</p>

<p>
  Este é um ponto <mark>muito importante</mark> que você deve lembrar.
</p>
```

## 6. Código (`<code>`)

### O que é?

`<code>` marca código de programação. Renderizado em fonte monoespacial (como terminal).
Use para trechos curtos de código inline.

### Exemplos

```html
<p>Use a função <code>console.log()</code> para debug.</p>
<p>A variável <code>x</code> deve ser maior que 10.</p>
```

### `<pre>` - Pré-formatado (Bloco de Código)

`<pre>` preserva espaços e quebras de linha. Perfeito para blocos de código.
Combina bem com `<code>` para melhor semântica.

```html
<pre><code>
function olaMundo() {
  console.log("Olá, Mundo!");
}

olaMundo();
</code></pre>
```

### Renderização

```
function olaMundo() {
  console.log("Olá, Mundo!");
}

olaMundo();
```

## 7. Subscrito (`<sub>`) e Sobrescrito (`<sup>`)

### `<sub>` - Subscrito

Renderiza texto levemente abaixo da linha base. Útil para fórmulas químicas e matemáticas.

```html
<p>A fórmula da água é H<sub>2</sub>O.</p>
<p>Ácido sulfúrico: H<sub>2</sub>SO<sub>4</sub></p>
```

### `<sup>` - Sobrescrito

Renderiza texto levemente acima da linha base. Útil para expoentes e notas de rodapé.

```html
<p>2<sup>10</sup> = 1024</p>
<p>E = mc<sup>2</sup></p>
<p>Nota de rodapé<sup>1</sup></p>
```

## 8. Outros Elementos de Texto

### `<del>` - Texto Deletado (com risco)

```html
<p>Preço original: R$ 100,00 <del>R$ 150,00</del></p>
```

### `<ins>` - Texto Inserido (sublinhado)

```html
<p>A população é <ins>8 bilhões</ins> de pessoas.</p>
```

### `<s>` - Texto Não Mais Preciso (com risco)

```html
<p>Você pode comprar online. <s>Entrega em 5 dias.</s> Entrega em 2 dias!</p>
```

### `<u>` - Sublinhado

```html
<p>Esta é uma <u>palavra importante</u>.</p>
```

### `<small>` - Texto Menor

```html
<p>Preço: R$ 99,90 <small>(Mais taxas podem aplicar)</small></p>
```

## 9. Boas Práticas com Tags de Texto

### ✓ Faça Assim

- Use `<strong>` e `<em>` em vez de `<b>` e `<i>`
- Mantenha hierarquia de headings lógica
- Use um único `<h1>` por página
- Separe parágrafos em múltiplos `<p>`, nunca múltiplos `<br>`
- Use `<code>` e `<pre>` para código
- Use `<mark>` com moderação

### ✗ Evite Assim

- Usar `<br>` para espaçamento
- Múltiplos `<h1>` na mesma página
- Pular níveis de heading (h1 → h3)
- Usar headings para estilo apenas (use CSS)
- Misturar `<code>` com `<pre>` de forma confusa

## 10. Exemplo Prático Completo

```html
<article>
  <h1>Como Aprender HTML</h1>
  
  <p>
    HTML é <em>fundamental</em> para desenvolvimento web.
    É <strong>essencial</strong> que você domine os conceitos básicos.
  </p>

  <h2>Passo 1: Entender Tags</h2>
  <p>Tags são marcadores que estruturam o conteúdo.</p>
  <p>Toda tag aberta <mark>deve ser fechada</mark>.</p>

  <h2>Passo 2: Praticar</h2>
  <p>
    Você aprende HTML <em>fazendo</em>, não apenas lendo.
    <strong>Crie seus próprios projetos!</strong>
  </p>

  <h2>Passo 3: Avançar</h2>
  <p>
    Após dominar HTML, aprenda 
    <code>CSS</code> e <code>JavaScript</code>.
  </p>
</article>
```
