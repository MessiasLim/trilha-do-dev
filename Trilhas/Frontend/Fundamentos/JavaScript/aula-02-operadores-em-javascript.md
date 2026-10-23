# Aula 2: Operadores em JavaScript

---

## Índice

1. [O que são Operadores?](#1-o-que-são-operadores)
2. [Operadores Aritméticos](#2-operadores-aritméticos)
3. [Operadores Aritméticos com Strings](#3-operadores-aritméticos-com-strings)
4. [Operadores de Atribuição](#4-operadores-de-atribuição)
5. [Operadores de Comparação](#5-operadores-de-comparação)
6. [Operadores Lógicos](#6-operadores-lógicos)
7. [Operadores de Incremento e Decremento](#7-operadores-de-incremento-e-decremento)
8. [Boas Práticas](#8-boas-práticas)

---

## 1. O que são Operadores?

**Operadores** são símbolos especiais que dizem ao computador para realizar uma operação matemática, de comparação ou lógica. Eles são a base da construção de decisões e cálculos nos programas.

A seguir, veja os principais tipos de operadores em JavaScript.

---

## 2. Operadores Aritméticos

Operadores aritméticos lidam com números e servem para fazer contas.

| Operador | Significado |
|---|---|
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Módulo (resto da divisão) |
| `**` | Exponenciação (potência) |

>  **Precedência:** assim como na matemática, a multiplicação e a divisão são calculadas antes da soma e da subtração. Operações entre parênteses `()` sempre têm prioridade máxima.

### Exemplo prático

```javascript
let a = 10;
let b = 3;

console.log("Soma:", a + b);             // 13
console.log("Subtração:", a - b);        // 7
console.log("Multiplicação:", a * b);    // 30
console.log("Divisão:", a / b);          // 3.333...
console.log("Resto da divisão:", a % b); // 1
console.log("Potência:", a ** b);        // 1000
```

### Tabela-resumo com os valores do exemplo (`a = 10`, `b = 3`)

| Operação | Expressão | Resultado |
|---|---|---|
| Soma | `a + b` | `13` |
| Subtração | `a - b` | `7` |
| Multiplicação | `a * b` | `30` |
| Divisão | `a / b` | `3.333...` |
| Módulo | `a % b` | `1` |
| Potência | `a ** b` | `1000` |

---

## 3. Operadores Aritméticos com Strings

Quando operadores aritméticos são usados com strings, o comportamento do JavaScript muda dependendo do operador — resultado da **coerção de tipos** (vista na Aula 1).

```javascript
let soma = '100' + 50;  // "10050" → o "+" com string concatena
let subt = '100' - 50;  // 50      → o "-" converte a string em número
let mult = '100' * '2'; // 200     → o "*" converte ambas as strings em número
```

### `NaN` — "Not a Number"

`NaN` aparece quando uma operação matemática **falha**, ou seja, quando o JavaScript tenta converter algo para número e não consegue.

```javascript
'comprei 10' / 2; // NaN → a string não pode ser convertida em número válido

typeof NaN; // "number" → comportamento histórico do JavaScript
```

>  **Curiosidade:** apesar do nome "Not a Number" (não é um número), o tipo de `NaN` é `"number"`. Isso é uma peculiaridade histórica da linguagem.

### Tabela-resumo

| Expressão | Resultado | Motivo |
|---|---|---|
| `'100' + 50` | `"10050"` | `+` com string vira concatenação |
| `'100' - 50` | `50` | `-` converte string em número |
| `'100' * '2'` | `200` | `*` converte ambas em número |
| `'comprei 10' / 2` | `NaN` | conversão para número falhou |

---

## 4. Operadores de Atribuição

Usados para armazenar valores em variáveis ou alterar seus valores existentes.

| Operador | Significado | Equivalente |
|---|---|---|
| `=` | Atribuição simples | — |
| `+=` | Soma e atribuição | `k = k + valor` |
| `-=` | Subtração e atribuição | `k = k - valor` |
| `*=` | Multiplicação e atribuição | `k = k * valor` |
| `/=` | Divisão e atribuição | `k = k / valor` |
| `%=` | Módulo e atribuição | `k = k % valor` |

### Exemplo prático

```javascript
let k = 5;

k += 3; // mesmo que k = k + 3
console.log("k após += 3:", k); // 8

k *= 2; // mesmo que k = k * 2
console.log("k após *= 2:", k); // 16
```

---

## 5. Operadores de Comparação

Usados para comparar dois valores. O resultado é sempre um **booleano** (`true` ou `false`).

| Operador | Significado |
|---|---|
| `==` | Igual (com conversão de tipo) |
| `===` | Estritamente igual (sem conversão de tipo) |
| `!=` | Diferente |
| `!==` | Estritamente diferente |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual |
| `<=` | Menor ou igual |

### Exemplos práticos

```javascript
console.log("5 == '5' :", 5 == '5');      // true  → conversão implícita de tipo
console.log("5 === '5' :", 5 === '5');    // false → tipos diferentes (number vs string)
console.log("10 != '10':", 10 != '10');   // false
console.log("10 !== '10':", 10 !== '10'); // true
console.log("7 > 3:", 7 > 3);             // true
console.log("3 <= 3:", 3 <= 3);           // true
```

### Diferença entre `==` e `===`

| Comparação | Resultado | Motivo |
|---|---|---|
| `5 == '5'` | `true` | `==` converte os tipos antes de comparar |
| `5 === '5'` | `false` | `===` compara valor **e** tipo, sem conversão |

>  **Recomendação:** prefira sempre `===` e `!==`, que evitam bugs causados por conversões inesperadas de tipo.

---

## 6. Operadores Lógicos

Usados para tomar decisões baseadas em múltiplas condições.

### 6.1 `&&` (E lógico)

Retorna `true` apenas se **todas** as expressões forem verdadeiras. Caso encontre um valor *falsy*, retorna imediatamente esse valor (comportamento de **curto-circuito**).

```javascript
true && true;   // true
true && false;  // false
false && true;  // false
false && false; // false
```

#### Valores *truthy* e *falsy*

Em JavaScript, nem tudo é estritamente `true` ou `false`. Alguns valores são tratados como **falsy** (comportam-se como `false` em contextos lógicos), e todo o restante é **truthy**.

**Valores falsy:**

```javascript
false, 0, "", null, undefined, NaN
```

Todo o resto (strings não vazias, números diferentes de zero, objetos, etc.) é **truthy**.

#### Exemplos com curto-circuito

```javascript
'gato' && 'cão';   // "cão" → ambos são truthy, retorna o último valor avaliado
0 && 10;           // 0     → 0 é falsy, retorna imediatamente sem avaliar o resto

'gato' && false;   // false
(5 >= 5) && (3 < 6); // true
```

### 6.2 `||` (OU lógico)

Retorna o primeiro valor *truthy* encontrado. Se todas as expressões forem *falsy*, retorna a última (efetivamente `false`).

```javascript
true || true;    // true
true || false;   // true
false || true;   // true

'gato' || 'cão';    // "gato" → o primeiro já é truthy, retorna imediatamente
(5 - 5) || (5 + 5); // 10     → 0 é falsy, então avalia e retorna o segundo
'gato' || false;    // "gato"
(5 >= 5) || (3 < 6); // true
```

### 6.3 `!` (NÃO lógico)

Inverte o valor booleano de uma expressão.

### Tabela-resumo dos operadores lógicos

| Operador | Nome | Comportamento |
|---|---|---|
| `&&` | E lógico | Retorna o primeiro valor falsy, ou o último se todos forem truthy |
| `\|\|` | OU lógico | Retorna o primeiro valor truthy, ou o último se todos forem falsy |
| `!` | NÃO lógico | Inverte o valor booleano |

### Exemplo combinado

```javascript
let idade1 = 20;
let temCarteira = true;

console.log("Pode dirigir?", idade1 >= 18 && temCarteira);          // true
console.log("É menor ou sem carteira?", idade1 < 18 || !temCarteira); // false
```

---

## 7. Operadores de Incremento e Decremento

| Operador | Significado |
|---|---|
| `++` | Incrementa 1 unidade |
| `--` | Decrementa 1 unidade |

### Exemplo básico

```javascript
let contador = 0;

contador++; // equivalente a contador = contador + 1
console.log("Contador após incremento:", contador); // 1

contador--; // equivalente a contador = contador - 1
console.log("Contador após decremento:", contador); // 0
```

### Pré-incremento vs. Pós-incremento

A posição do operador (`++`/`--`) antes ou depois da variável muda o momento em que o valor é atualizado:

- **Pós-incremento (`x++`)**: mostra o valor atual e **depois** incrementa.
- **Pré-incremento (`++x`)**: incrementa **primeiro** e depois mostra o novo valor.

```javascript
let y = 5;

console.log("x++:", y++);   // 5 (mostra o valor atual, depois vira 6)
console.log("Agora x:", y); // 6
console.log("++x:", ++y);   // 7 (incrementa antes de mostrar)
```

### Tabela-resumo

| Expressão | Quando incrementa | Valor retornado |
|---|---|---|
| `x++` | Depois de retornar o valor | Valor **antigo** |
| `++x` | Antes de retornar o valor | Valor **novo** |

---

## 8. Boas Práticas

-  **Use `===` e `!==`** sempre que possível — evita bugs causados por conversão implícita de tipo.
-  **Mantenha o código claro** — evite condições lógicas complicadas demais.
-  **Use parênteses `()`** para organizar e deixar explícita a ordem de avaliação em condições lógicas complexas.

---

### Referência rápida de operadores

```
ARITMÉTICOS:  +  -  *  /  %  **
ATRIBUIÇÃO:   =  +=  -=  *=  /=  %=
COMPARAÇÃO:   ==  ===  !=  !==  >  <  >=  <=
LÓGICOS:      &&  ||  !
INCREMENTO/DECREMENTO: ++  --
```
