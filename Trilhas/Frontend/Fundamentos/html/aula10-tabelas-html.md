# Tabelas em HTML: estrutura, cabeçalhos e acessibilidade

As tabelas representam dados tabulares. Use-as quando os dados naturalmente formam linhas e colunas. Evite tabelas para layout.

## 1. Estrutura básica

```html
<table>
<thead>
<tr><th>Nome</th><th>Email</th></tr>
</thead>
<tbody>
<tr><td>Ana</td><td>ana@ex.com</td></tr>
</tbody>
</table>
```

## 2. Cabeçalhos, `scope` e acessibilidade

Use `<th>` para cabeçalhos e `scope="col"` ou `scope="row"` para relacionar cabeçalhos às células, melhorando a experiência de leitores de tela.

### Exemplo com scope

```html
<tr>
<th scope="row">Produto A</th>
<td>R$ 10,00</td>
</tr>
```

## 3. Colspan e Rowspan

```html
<tr>
<th colspan="2">Cabeçalho que ocupa duas colunas</th>
</tr>

<tr>
<td rowspan="2">Linha combinada verticalmente</td>
<td>Valor 1</td>
</tr>
<tr>
<td>Valor 2</td>
</tr>
```

## 4. Tabelas responsivas

Tabelas grandes podem ser roláveis horizontalmente (`overflow:auto`) ou convertidas em layouts em blocos para telas pequenas via CSS/JS.

### Exemplo de tabela com rolagem

```html
<div style="overflow:auto;">
<table>...tabela larga...</table>
</div>
```

## 5. Acessibilidade adicional

- Use `caption` para descrever a tabela.
- Forneça explicações com `summary` (deprecated) via texto alternativo próximo.
- Associe células complexas com `headers` e `id` quando necessário.

## 6. Exemplos práticos

### Relatório de vendas

```html
<table>
<caption>Relatório mensal de vendas</caption>
<thead>
<tr><th scope="col">Mês</th><th scope="col">Vendas</th></tr>
</thead>
<tbody>
<tr><td>Janeiro</td><td>R$ 10.000</td></tr>
</tbody>
</table>
```

## 7. Boas práticas e armadilhas

- Não use tabelas para layout.
- Use cabeçalhos claros e descritivos.
- Evite colspan/rowspan excessivos que confundem leitores de tela.

## 8. Conclusão

Tabelas são poderosas para dados tabulares; combinadas com `caption`, `scope` e boas práticas de responsividade e acessibilidade, oferecem ótima legibilidade e usabilidade.
