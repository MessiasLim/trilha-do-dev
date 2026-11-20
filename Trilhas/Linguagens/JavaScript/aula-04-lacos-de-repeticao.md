# Aula 4: Laços de Repetição (Loops) em JavaScript

---

## Índice

1. [O que são Laços de Repetição?](#1-o-que-são-laços-de-repetição)
2. [`for`](#2-for)
3. [`while`](#3-while)
4. [`do...while`](#4-dowhile)
5. [`break` e `continue`](#5-break-e-continue)
6. [Resumo dos Laços](#6-resumo-dos-laços)

---

## 1. O que são Laços de Repetição?

**Laços de repetição** (ou *loops*) são estruturas que permitem executar um bloco de código várias vezes, de forma automática, com base em uma condição.

Isso é essencial para evitar repetições manuais no código e para trabalhar com listas, contadores, animações, cálculos em massa, entre outros cenários.

Existem três laços principais em JavaScript:

- `for`
- `while`
- `do...while`

---

## 2. `for`

É o loop mais usado quando **sabemos quantas vezes** queremos repetir algo.

### Sintaxe

```javascript
for (inicialização; condição; incremento) {
   // código que será executado
}
```

### Anatomia do `for`

| Parte | Função |
|---|---|
| `inicialização` | Executada uma única vez, no começo (ex: `let i = 1`) |
| `condição` | Verificada antes de cada repetição; enquanto for `true`, o loop continua |
| `incremento` | Executado ao final de cada volta (ex: `i++`) |

### Exemplo 1 — Contar de 1 até 5

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Contagem:", i);
}
// Saída: Contagem: 1, 2, 3, 4, 5
```

**Explicação passo a passo:**

- `let i = 1` → a contagem começa em `1`
- `i <= 5` → o laço executa enquanto `i` for menor ou igual a `5`
- `i++` → a cada volta, `i` é incrementado em `1`

### Exemplo 2 — Mostrar números pares de 0 a 10

```javascript
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Par:", i);
    }
}
// Saída: Par: 0, 2, 4, 6, 8, 10
```

Aqui o `for` percorre todos os números de `0` a `10`, e a condição `i % 2 === 0` (vista na Aula 3) filtra apenas os pares.

---

## 3. `while`

Usa-se o `while` quando **não sabemos quantas vezes** o código vai repetir, mas sabemos qual é a **condição de parada**.

### Sintaxe

```javascript
while (condição) {
    // código
}
```

### Exemplo 1 — Repetir até que um número chegue a 5

```javascript
let numerox = 1;

while (numerox <= 5) {
    console.log("Número atual:", numerox);
    numerox++; // incrementa para não criar loop infinito
}
// Saída: Número atual: 1, 2, 3, 4, 5
```

>  **Cuidado:** se a condição nunca se tornar falsa, o `while` se transforma em um **loop infinito**, travando o programa. Por isso é essencial que algo dentro do laço (como o `numerox++`) eventualmente torne a condição falsa.

### Exemplo 2 — Contagem regressiva

```javascript
let contagem = 5;

while (contagem > 0) {
    console.log("Contando:", contagem);
    contagem--;
}
// Saída: Contando: 5, 4, 3, 2, 1
```

---

## 4. `do...while`

É parecido com o `while`, mas com uma diferença importante: **garante que o código será executado pelo menos uma vez**, mesmo que a condição já comece sendo falsa.

### Sintaxe

```javascript
do {
    // código
} while (condição);
```

### Exemplo — Executar pelo menos uma vez

```javascript
let x = 6;

do {
    console.log("Executando DO...WHILE: x =", x);
    x++;
} while (x <= 5);
// Saída: Executando DO...WHILE: x = 6
```

**Ponto-chave do exemplo:** mesmo `x` começando em `6` — valor que já torna a condição `x <= 5` falsa — o bloco dentro do `do` é executado **uma vez antes** de a condição ser verificada. Por isso a mensagem aparece no console mesmo a condição nunca sendo satisfeita.

### `while` vs. `do...while`

| Estrutura | Quando a condição é verificada | Executa ao menos uma vez? |
|---|---|---|
| `while` | Antes de cada execução do bloco | Não (pode nunca executar) |
| `do...while` | Depois de cada execução do bloco | Sim, sempre |

---

## 5. `break` e `continue`

Essas duas palavras-chave alteram o fluxo normal de um laço.

| Palavra-chave | Efeito |
|---|---|
| `break` | Interrompe o laço completamente, antes mesmo da condição se tornar falsa |
| `continue` | Pula apenas a iteração atual e segue para a próxima |

### Exemplo com `break` — Parar quando encontrar o número 3

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Número 3 encontrado! Parando...");
        break;
    }
    console.log("Número:", i);
}
// Saída:
// Número: 1
// Número: 2
// Número 3 encontrado! Parando...
```

Assim que `i` chega a `3`, o `break` interrompe o laço — os números `4` e `5` nunca são exibidos.

### Exemplo com `continue` — Pular o número 2

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        continue; // pula o resto do laço e vai para o próximo número
    }
    console.log("Número:", i);
}
// Saída:
// Número: 1
// Número: 3
// Número: 4
// Número: 5
```

Quando `i` é igual a `2`, o `continue` pula o `console.log` daquela iteração específica, mas o laço **continua normalmente** nas próximas voltas.

### `break` vs. `continue`

| Comportamento | `break` | `continue` |
|---|---|---|
| Interrompe o laço inteiro |  Sim |  Não |
| Pula apenas a iteração atual |  Não |  Sim |
| Laço continua depois |  Não |  Sim |

---

## 6. Resumo dos Laços

| Estrutura | Quando usar |
|---|---|
| **`for`** | Quando se sabe o número de repetições |
| **`while`** | Quando não se sabe o número de repetições, mas se sabe a condição de parada |
| **`do...while`** | Quando se quer executar o bloco pelo menos uma vez antes de verificar a condição |

| Palavra-chave | Efeito no laço |
|---|---|
| **`break`** | Interrompe o laço |
| **`continue`** | Pula a iteração atual |

---

### Referência rápida dos laços

```
FOR         → for (inicialização; condição; incremento) { ... }
WHILE       → while (condição) { ... }
DO...WHILE  → do { ... } while (condição);

BREAK       → encerra o laço imediatamente
CONTINUE    → pula para a próxima iteração
```
