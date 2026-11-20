# Aula 5: Arrays em JavaScript

---

## Índice

1. [O que é um Array?](#1-o-que-é-um-array)
2. [Criação de um Array](#2-criação-de-um-array)
3. [Acessando Elementos](#3-acessando-elementos)
4. [Modificando Elementos](#4-modificando-elementos)
5. [Tamanho de um Array](#5-tamanho-de-um-array)
6. [Percorrendo Arrays com Loops](#6-percorrendo-arrays-com-loops)
7. [Métodos Comuns de Arrays](#7-métodos-comuns-de-arrays)
8. [Métodos de Manipulação Funcional](#8-métodos-de-manipulação-funcional)
9. [Dicas Importantes](#9-dicas-importantes)

---

## 1. O que é um Array?

Um **array** (ou vetor) é uma **estrutura de dados** que serve para armazenar **vários valores** em uma única variável.

Em vez de declarar várias variáveis separadas, os valores são agrupados em uma lista (array).

Um array pode armazenar números, textos, booleanos, objetos e até **outros arrays**.

---

## 2. Criação de um Array

Existem duas formas principais de criar um array:

```javascript
let numeros = [10, 20, 30, 40, 50];          // forma mais comum (literal de array)
let frutas = new Array("maçã", "banana", "uva"); // forma alternativa (construtor)

console.log("Numeros:", numeros);
console.log("Frutas:", frutas);
```

| Forma | Sintaxe | Uso |
|---|---|---|
| Literal (colchetes) | `[10, 20, 30]` | Forma mais comum e recomendada |
| Construtor `new Array()` | `new Array("a", "b")` | Forma alternativa, menos usada no dia a dia |

---

## 3. Acessando Elementos

Cada item do array tem um **índice (index)** que começa em `0`.

### Sintaxe

```javascript
nome_do_array[índice]
```

### Exemplo

```javascript
console.log("Primeiro número:", numeros[0]); // 10
console.log("Última fruta:", frutas[2]);     // "uva"
```

>  **Lembrete:** o primeiro elemento de qualquer array está sempre no índice `0`, não no `1`.

---

## 4. Modificando Elementos

Basta acessar a posição desejada pelo índice e atribuir um novo valor.

```javascript
numeros[1] = 25; // troca o 20 por 25
console.log("Array modificado:", numeros);
// Resultado: [10, 25, 30, 40, 50]
```

---

## 5. Tamanho de um Array

A propriedade `.length` informa quantos elementos existem no array.

```javascript
console.log("Quantidade de frutas:", frutas.length); // 3
```

---

## 6. Percorrendo Arrays com Loops

### 6.1 Usando `for`

```javascript
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta no índice", i, ":", frutas[i]);
}
```

Aqui o laço `for` (visto na Aula 4) percorre todos os índices do array, de `0` até `frutas.length - 1`.

### 6.2 Usando `for...of` (forma mais limpa)

```javascript
for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}
```

O `for...of` percorre diretamente os **valores** do array, sem precisar controlar índices manualmente — é mais legível quando não é necessário saber a posição de cada item.

### Comparação entre as duas formas

| Forma | Acesso ao índice? | Legibilidade |
|---|---|---|
| `for` tradicional | Sim (`i`) | Mais verboso |
| `for...of` | Não (acesso direto ao valor) | Mais limpo e direto |

---

## 7. Métodos Comuns de Arrays

Os arrays em JavaScript possuem vários métodos prontos para adicionar, remover, buscar e manipular elementos.

| Método | O que faz | Altera o array original? |
|---|---|---|
| `push()` | Adiciona um ou mais elementos **no final** |  Sim |
| `pop()` | Remove o **último** elemento |  Sim |
| `unshift()` | Adiciona um ou mais elementos **no início** |  Sim |
| `shift()` | Remove o **primeiro** elemento |  Sim |
| `indexOf()` | Retorna o índice de um elemento (ou `-1` se não encontrar) |  Não |
| `includes()` | Verifica se um elemento existe (`true`/`false`) |  Não |
| `slice()` | Recorta uma parte do array (o segundo índice **não** é incluído) |  Não |
| `splice()` | Remove, adiciona ou substitui elementos |  Sim |

### Exemplo prático completo

```javascript
let lista = ["a", "b", "c", "d"];

// Adiciona um elemento no final do array
lista.push("e");
// Resultado: ["a", "b", "c", "d", "e"]

// Adiciona um elemento no início do array
lista.unshift("z");
// Resultado: ["z", "a", "b", "c", "d", "e"]

// Remove o último elemento do array
lista.pop();
// Remove "e"

// Remove o primeiro elemento do array
lista.shift();
// Remove "z"

console.log("Lista atual:", lista);
// Resultado final: ["a", "b", "c", "d"]
```

### `indexOf()` e `includes()`

```javascript
// Retorna o índice da letra "c"
console.log("Índice da letra c:", lista.indexOf("c"));
// Resultado: 2

// Verifica se a letra "b" existe no array
console.log("Contém letra b?", lista.includes("b"));
// Resultado: true
```

### `slice()` — recorte sem alterar o original

```javascript
// Cria um novo array com parte do array original
// Pega do índice 1 até antes do índice 3
let subLista = lista.slice(1, 3);
console.log("Sublista:", subLista);
// Resultado: ["b", "c"]
```

>  O `slice(1, 3)` inclui o índice `1`, mas **exclui** o índice `3` — por isso o resultado vai até o índice `2` (`"c"`).

### `splice()` — remoção que altera o original

```javascript
// Remove 1 elemento a partir do índice 1
lista.splice(1, 1);
console.log("Depois do splice:", lista);
// Resultado: ["a", "c", "d"]
```

### `slice()` vs. `splice()`

| Método | Altera o array original? | Uso principal |
|---|---|---|
| `slice(início, fim)` |  Não | Extrair uma cópia de parte do array |
| `splice(início, quantidade)` |  Sim | Remover, adicionar ou substituir elementos diretamente |

---

## 8. Métodos de Manipulação Funcional

Estes métodos são muito usados no dia a dia do JavaScript para percorrer, transformar, filtrar e analisar arrays de forma mais clara, legível e funcional.

| Método | O que faz | Retorna novo array? | Altera o original? |
|---|---|---|---|
| `forEach()` | Percorre todos os elementos e executa uma função para cada um |  Não (retorno `undefined`) |  Não |
| `map()` | Transforma cada elemento |  Sim |  Não |
| `filter()` | Filtra elementos com base em uma condição |  Sim (apenas os aprovados) |  Não |
| `reduce()` | Reduz o array a um único valor (soma, média, etc.) | Retorna um valor único, não um array |  Não |
| `some()` | Verifica se **pelo menos um** elemento atende à condição | Retorna `boolean` |  Não |
| `every()` | Verifica se **todos** os elementos atendem à condição | Retorna `boolean` |  Não |
| `find()` | Retorna o **primeiro** elemento que satisfaz a condição (ou `undefined`) | Retorna um elemento, não um array |  Não |
| `reverse()` | Inverte a ordem dos elementos | Retorna o mesmo array invertido |  Sim |
| `split()` *(método de string)* | Divide uma string em um array |  Sim (array) | Não se aplica (string é imutável) |
| `join()` *(método de array)* | Junta os elementos de um array em uma string | Retorna uma string |  Não |

Array de exemplo usado nos métodos abaixo:

```javascript
const numeros = [15, 20, 25, 30, 35, 40];
```

### 8.1 `forEach()`

Percorre o array e executa uma ação para cada elemento — não gera um novo array.

```javascript
numeros.forEach(function(num, index) {
    console.log("Número", num, "está na posição", index);
});
```

### 8.2 `map()`

Cria um **novo array** transformando cada valor. No exemplo, cada número é multiplicado por `2`.

```javascript
let dobrados = numeros.map(function(num) {
    return num * 2;
});
console.log("Números dobrados:", dobrados);
// Saída: [30, 40, 50, 60, 70, 80]
```

### 8.3 `filter()`

Cria um **novo array** contendo apenas os elementos que atendem à condição — neste caso, números maiores que `25`.

```javascript
let maiores = numeros.filter(function(num) {
    return num > 25;
});
console.log("Maiores que 25:", maiores);
// Saída: [30, 35, 40]
```

### 8.4 `reduce()`

Reduz o array a um **único valor**, usando um acumulador que guarda o resultado parcial a cada iteração.

```javascript
let somaTotal = numeros.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0); // 0 é o valor inicial do acumulador

console.log("Soma total:", somaTotal);
// Saída: 165
```

### 8.5 `some()`

Verifica se **existe pelo menos um** elemento que atenda à condição. Interrompe a execução assim que encontra o primeiro caso verdadeiro.

```javascript
let existeMaior35 = numeros.some(function(num) {
    return num > 35;
});
console.log("Existe número maior que 35?", existeMaior35);
// Saída: true
```

### 8.6 `every()`

Verifica se **todos** os elementos atendem à condição. Interrompe a execução assim que encontra o primeiro caso falso.

```javascript
let todosMaiores10 = numeros.every(function(num) {
    return num > 10;
});
console.log("Todos são maiores que 10?", todosMaiores10);
// Saída: true
```

### 8.7 `find()`

Retorna o **primeiro** elemento que satisfaz a condição. No exemplo, o primeiro múltiplo de `4` encontrado é `20`.

```javascript
let primeiroMultiplo4 = numeros.find(function(num) {
    return num % 4 === 0;
});
console.log("Primeiro múltiplo de 4:", primeiroMultiplo4);
// Saída: 20
```

### 8.8 `split()`, `reverse()` e `join()`

```javascript
const frase = "Use split, reverse e join";
```

#### `split()` — de string para array

```javascript
let palavras = frase.split(" ");
console.log("Array de palavras (split):", palavras);
// Saída: ["Use", "split,", "reverse", "e", "join"]
```

#### `reverse()` — inverte o array (altera o original)

```javascript
palavras.reverse();
console.log("Array invertido (reverse):", palavras);
// Saída: ["join", "e", "reverse", "split,", "Use"]
```

>  **Atenção:** diferente de `map()`, `filter()` e `slice()`, o `reverse()` **altera o array original**.

#### `join()` — de array para string

```javascript
let fraseInvertida = palavras.join(" ");
console.log("Frase invertida (join):", fraseInvertida);
// Saída: "join e reverse split, Use"
```

### `split()` vs. `join()`

| Método | Pertence a | Direção da conversão |
|---|---|---|
| `split(separador)` | `String` | `string` → `array` |
| `join(separador)` | `Array` | `array` → `string` |

---

## 9. Dicas Importantes

-  Arrays são estruturas **dinâmicas** — podem crescer ou diminuir de tamanho.
- 0⃣ Os índices sempre **começam em 0**.
-  `map`, `filter` e `reduce` são essenciais para **programação funcional**.
- ▶ `forEach` é ideal quando o objetivo é apenas **executar ações**, sem precisar de um retorno.
-  `some` e `every` são eficientes porque **interrompem a execução cedo**, assim que o resultado já pode ser determinado.
-  `reverse()` **altera o array original** — use com cuidado.
-  Esses métodos deixam o código mais **limpo, legível e profissional**.
-  São amplamente usados em **React, Node.js e APIs REST**.

---

### Referência rápida dos métodos de array

```
MODIFICAM O ORIGINAL:     push, pop, unshift, shift, splice, reverse
NÃO MODIFICAM O ORIGINAL: slice, indexOf, includes, map, filter, reduce,
                          some, every, find, join

CONVERSÃO STRING <-> ARRAY:
  split()  → string vira array
  join()   → array vira string
```
