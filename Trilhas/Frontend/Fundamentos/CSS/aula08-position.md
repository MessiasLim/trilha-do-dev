# Guia de Posicionamento no CSS (`position`) 

## 1) Nota Rápida sobre `position`

- A propriedade `position` controla **como** um elemento é posicionado dentro do layout da página.
- As propriedades de deslocamento `top`, `right`, `bottom` e `left` **só têm efeito** quando o valor de `position` é diferente de `static` (o padrão).

---

## 2) position: static

```css
.pos-static {
  position: static; /* valor padrão */
  padding: 8px;
  background: #f7f7f7;
}
```

**Explicação:**
- `position: static` é o valor padrão de todo elemento HTML — ele simplesmente participa do fluxo normal da página, na ordem em que aparece no documento.
- `padding` e `background` funcionam normalmente, mas propriedades de deslocamento (`top`, `left` etc.) e `z-index` **não têm nenhum efeito** nesse elemento.

**Quando usar:** é o comportamento padrão para a maioria dos elementos — normalmente você só precisa alterar o `position` quando quer um comportamento diferente do fluxo normal.

---

## 3) position: relative

```css
.pos-relative {
  position: relative;
  top: 0; /* sem deslocamento inicial */
  background: #eaf4ff;
  padding: 8px;
}

/* Exemplo: deslocar levemente sem alterar o fluxo */
.pos-relative--shift {
  position: relative;
  left: 12px; /* visualmente deslocado 12px para a direita */
}

/* Uso prático: tornar o pai referência para filhos absolute */
.example-card { position: relative; }
```

**Explicação:**
- `position: relative` mantém o elemento no fluxo normal do documento (ele continua ocupando seu espaço original), mas permite deslocá-lo visualmente usando `top`, `right`, `bottom` ou `left`, **sem afetar os elementos vizinhos**.
- `.pos-relative--shift` demonstra esse deslocamento: `left: 12px` move o elemento 12px para a direita visualmente, mas o espaço que ele ocupava originalmente continua reservado no layout.
- `.example-card { position: relative; }` mostra o uso mais comum na prática: tornar um elemento pai "posicionado", para que filhos com `position: absolute` usem esse pai como referência de posicionamento (ver seção 5).

**Quando usar:** para pequenos ajustes visuais de posição, ou para criar um "contêiner de referência" para elementos `absolute` dentro dele.

**Comportamento importante:** o espaço original do elemento no fluxo **permanece reservado**, mesmo após o deslocamento visual.

---

## 4) position: absolute

```css
.pos-absolute-parent { position: relative; padding: 16px; background: #fff7e6; }
.pos-absolute-child {
  position: absolute;
  top: 8px;   /* 8px a partir do topo do ancestor posicionado */
  right: 8px; /* 8px da borda direita do ancestor */
  background: #ffd27a;
  padding: 6px;
}
```

**Explicação:**
- `.pos-absolute-parent` recebe `position: relative`, tornando-se o **ponto de referência** para qualquer filho posicionado como `absolute`.
- `.pos-absolute-child` usa `position: absolute`, que **remove o elemento do fluxo normal** da página e o posiciona em relação ao ancestro posicionado mais próximo (nesse caso, `.pos-absolute-parent`).
- `top: 8px` e `right: 8px` posicionam o filho a 8px do topo e a 8px da borda direita do pai, respectivamente.

**Quando usar:** para tooltips, popovers, menus flutuantes, badges de notificação e qualquer elemento que precise de posicionamento preciso relativo a outro elemento.

**Dica do guia:** sempre combine `position: absolute` no filho com `position: relative` no pai, para controlar exatamente em relação a que elemento o posicionamento vai acontecer.

**Observação importante:** elementos `absolute` **não ocupam espaço** no fluxo normal — outros elementos se comportam como se o elemento `absolute` nem existisse, podendo até sobrepor conteúdo se não for bem planejado.

---

## 5) position: fixed

```css
.pos-fixed {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: #2b8a3e;
  color: #fff;
  padding: 10px 12px;
  border-radius: 6px;
}
```

**Explicação:**
- `position: fixed` funciona de forma parecida com `absolute` (remove o elemento do fluxo), mas sua referência de posicionamento é **sempre o viewport** (a janela visível do navegador), e não um ancestral específico.
- `bottom: 16px` e `right: 16px` fixam o elemento a 16px da borda inferior e direita da tela, mantendo-o sempre visível mesmo quando a página é rolada.
- `background: #2b8a3e`, `color: #fff`, `padding` e `border-radius` estilizam o elemento como um botão verde com cantos arredondados — um padrão típico de botão de ação flutuante ("FAB").

**Quando usar:** para cabeçalhos fixos no topo, ou botões de ação que devem permanecer visíveis independentemente da rolagem da página (como um botão de "voltar ao topo" ou de suporte via chat).

**Observação importante:** `fixed` ignora os limites de qualquer contêiner — ele é sempre posicionado em relação ao viewport (com exceção de casos avançados envolvendo `transform` em ancestrais, que criam um novo contexto de referência).

---

## 6) position: sticky

```css
.pos-sticky {
  position: sticky;
  top: 0; /* posição onde passa a ficar fixa */
  background: #fff3e0;
  padding: 8px;
  border-bottom: 1px solid #ffd8a8;
}
```

**Explicação:**
- `position: sticky` cria um comportamento híbrido: o elemento se comporta como `relative` (participando do fluxo normal) até que a rolagem da página atinja o valor definido em `top` — a partir daí, ele passa a se comportar como `fixed`, "grudando" naquela posição, mas **apenas dentro dos limites do seu elemento ancestral**.
- `top: 0` define que o elemento vai "grudar" assim que tocar o topo da área visível (ou do contêiner com rolagem).
- `background`, `padding` e `border-bottom` estilizam visualmente o cabeçalho sticky, dando destaque com uma borda inferior laranja-clara.

**Quando usar:** para cabeçalhos de seção que devem permanecer visíveis enquanto o usuário rola aquela seção específica — muito comum em listas de categorias, tabelas com cabeçalho fixo, ou índices de navegação lateral.

**Requisitos importantes:**
- É necessário definir pelo menos um valor de offset (`top`, `right`, `bottom` ou `left`) — sem isso, o `sticky` não tem efeito algum.
- É necessário que o elemento esteja dentro de um ancestral que permita rolagem (com altura definida e `overflow` apropriado). Em alguns contextos (como ancestrais com `overflow: hidden` mal configurado), o `sticky` pode simplesmente não funcionar.

---

## 7) top / right / bottom / left — Explicação Detalhada

### O que são

`top`, `right`, `bottom` e `left` são propriedades de **offset** (deslocamento), que movem um elemento a partir do seu ponto de referência.

### Quando têm efeito

Essas propriedades **só afetam** elementos cujo `position` seja diferente de `static` — ou seja, funcionam em `relative`, `absolute`, `fixed` e `sticky`.

### Referência de medida (containing block)

| Valor de `position` | Referência (containing block) |
|---|---|
| `absolute` | O primeiro ancestral posicionado (`position` ≠ `static`) |
| `fixed` | Normalmente o viewport, mas pode mudar se um ancestral criar um novo contexto (ex.: com `transform`) |
| `sticky` | O ancestral que define a área de rolagem (o contêiner de scroll) |

### Como as porcentagens funcionam

- Porcentagens em `left`/`right` são relativas à **largura** do containing block.
- Porcentagens em `top`/`bottom` são relativas à **altura** do containing block.
- Exemplo: `left: 50%` move o elemento 50% da largura do bloco de referência (não do próprio elemento).

### Valores comuns e comportamento

- `auto` (padrão em muitos casos): o navegador calcula automaticamente; por exemplo, `top: auto` não aplica nenhum deslocamento.
- Valores em `px`, `%`, `em`, `rem` etc. são aceitos; valores negativos deslocam o elemento na direção oposta.

### Comportamento por tipo de `position`

**Em `position: relative`:** o elemento mantém seu espaço original no fluxo; `top`/`left` movem apenas a **posição visual**. Útil para pequenos ajustes ou para criar um ponto de referência para pseudo-elementos filhos.

**Em `position: absolute` / `fixed`:** o elemento sai do fluxo normal; `top`/`right`/`bottom`/`left` fixam sua posição em relação ao ancestral posicionado (ou ao viewport, no caso de `fixed`). Use `position: relative` no elemento pai para controlar esse ponto de referência.

**Em `position: sticky`:** `top` define a distância do topo em que o elemento passa de "relativo" para "fixo" durante a rolagem. Requer um ancestral que permita rolagem e um valor de offset definido (ex.: `top: 0`).

### Shorthand `inset`

```css
inset: 10px 20px;
/* equivale a: top: 10px; right: 20px; bottom: 10px; left: 20px; */
```

`inset` é uma propriedade abreviada que define os quatro offsets de uma vez, seguindo a mesma lógica de atalho do `margin`/`padding`.

### Centralização prática (receita)

```css
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

**Por que funciona:** `left: 50%` e `top: 50%` posicionam o **canto superior esquerdo** do elemento exatamente no centro do pai — mas isso não é o mesmo que centralizar o elemento inteiro. O `transform: translate(-50%, -50%)` corrige isso, deslocando o elemento para trás em 50% de sua **própria** largura e altura, resultando em uma centralização perfeita.

### Exemplo com porcentagem (centro horizontal relativo ao pai)

```css
.thumb {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```

Centraliza o elemento apenas horizontalmente, usando a mesma lógica de correção via `transform`.

### Exemplo de uso negativo (elevação visual)

```css
.raise {
  position: relative;
  top: -8px;
}
```

Desloca o elemento 8px para cima, visualmente, **sem alterar** o espaço que ele ocupa no fluxo do documento — cria um efeito de "elevação" sutil.

### Performance e repaint

Alterar `top`/`left` diretamente causa **repaint e reflow** no navegador (recálculo de layout), o que pode ser custoso em animações. Para animações suaves, o guia recomenda preferir `transform` e `opacity`, propriedades que o navegador consegue animar de forma mais eficiente (geralmente aceleradas por GPU).

### Erros comuns relacionados a offsets

- Aplicar `top` em um elemento com `position: static` — não tem nenhum efeito.
- Esperar que `top: 50%` centralize verticalmente sozinho — na verdade, ele apenas alinha o **canto superior** do elemento ao centro do pai, sendo necessário combinar com `transform`.
- Usar porcentagens sem entender qual é a dimensão de referência (largura vs. altura).

### Exemplos práticos adicionais

```css
.offset-example-1 { position: absolute; left: 20px; top: 10px; }
.offset-example-2 { position: absolute; left: 50%; transform: translateX(-50%); }
```

### Observação sobre unidades lógicas

Em layouts com escrita vertical ou que usam `writing-mode` (como textos verticais, comuns em alguns idiomas asiáticos), o guia recomenda considerar o uso de propriedades lógicas, como `inset-inline-start` e `inset-block-start`, para manter a compatibilidade com diferentes direções de escrita.

### Resumo da seção

Sempre verifique o `position` do elemento e do seu ancestral, pense se a porcentagem usada é relativa à largura ou à altura do contêiner, e prefira `transform` para animações de posição.

---

## 8) z-index (Ordem de Empilhamento)

```css
.pos-z-high { position: relative; z-index: 50; }
.pos-z-low { position: relative; z-index: 1; }
```

**Explicação:**
- `z-index` controla a **ordem de empilhamento** (eixo Z) entre elementos que se sobrepõem visualmente.
- `.pos-z-high` tem `z-index: 50`, ficando visualmente **acima** de `.pos-z-low`, que tem `z-index: 1`.
- Valores maiores de `z-index` ficam por cima de valores menores.

**Regra fundamental:** `z-index` **só funciona** em elementos cujo `position` seja diferente de `static` — em elementos `static`, essa propriedade é ignorada.

**Recomendação do guia:** use `z-index` com moderação. Prefira manter contextos de empilhamento claros e previsíveis (evitando valores arbitrariamente altos como `9999`), já que isso pode gerar conflitos difíceis de depurar em projetos maiores.

---

## 9) Erros Comuns e Como Corrigir

| Erro | Consequência | Correção |
|---|---|---|
| Esperar que `absolute` se posicione em relação ao pai, sem o pai ser posicionado | O elemento se posiciona em relação a outro ancestral (ou ao viewport) | Adicionar `position: relative` ao elemento pai |
| Usar `top: 50%` esperando centralizar verticalmente | Apenas o canto superior do elemento é alinhado ao centro | Combinar com `transform: translateY(-50%)` |
| Esquecer que `absolute` remove o elemento do fluxo | Espaçamentos do layout quebram, elementos se sobrepõem | Prever o espaço manualmente ou usar outra abordagem, como flex/grid |
| Achar que `fixed` funciona dentro de um contêiner específico | O elemento se posiciona em relação ao viewport, não ao contêiner esperado | Usar `sticky` ou `absolute`, dependendo do comportamento desejado |

---

## 10) Exemplos HTML para Testar

```html
<!-- Relative vs Absolute -->
<div class="pos-absolute-parent" style="width:320px; height:120px; border:1px solid #ddd;">
  Pai posicionado (position: relative)
  <div class="pos-absolute-child">Filho absolute (top:8px; right:8px)</div>
</div>

<!-- Fixed -->
<div style="height:1000px;">Role para ver o botão fixo</div>
<div class="pos-fixed">Botão fixo</div>

<!-- Sticky -->
<div style="height:200px; overflow:auto; border:1px solid #ddd;">
  <div class="pos-sticky">Cabeçalho sticky (top:0)</div>
  <div style="height:600px">Conteúdo para rolar</div>
</div>
```

**Como usar:** copie esse HTML para um arquivo `.html` junto com o CSS das seções anteriores, abra no navegador e teste rolando a página (para ver o `fixed`) e rolando a caixa interna (para ver o `sticky` em ação).

---

## 11) Prática Recomendada

- Use `position` apenas quando realmente necessário; para a maioria dos layouts, **prefira Flexbox ou Grid**.
- Use `relative` para criar um contexto de posicionamento (elemento pai de referência).
- Use `absolute`, `fixed` ou `sticky` apenas para elementos que realmente precisam sair do fluxo normal do documento.