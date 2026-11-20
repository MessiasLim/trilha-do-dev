# Aula 3: Estruturas Condicionais em JavaScript

---

## Índice

1. [O que são Estruturas Condicionais?](#1-o-que-são-estruturas-condicionais)
2. [`if`, `else if`, `else`](#2-if-else-if-else)
3. [Operador Ternário](#3-operador-ternário)
4. [`switch case`](#4-switch-case)
5. [Quando Usar Cada Estrutura](#5-quando-usar-cada-estrutura)
6. [Dicas de Leitura Lógica](#6-dicas-de-leitura-lógica)

---

## 1. O que são Estruturas Condicionais?

As **estruturas condicionais** permitem que um programa tome decisões com base em determinadas condições.

Em outras palavras: **"Se algo for verdadeiro, faça isso. Se não, faça aquilo."**

Isso é essencial para criar lógica nos programas, permitindo que o código reaja de forma diferente dependendo dos dados recebidos.

---

## 2. `if`, `else if`, `else`

A estrutura mais básica de decisão em JavaScript é o `if`.

### Sintaxe

```javascript
if (condição) {
   // bloco de código se a condição for verdadeira
} else if (outraCondição) {
   // bloco se a segunda condição for verdadeira
} else {
   // bloco se nenhuma das anteriores for verdadeira
}
```

### Como funciona

| Bloco | Quando executa |
|---|---|
| `if (condição)` | Executa se a condição for `true` |
| `else if (outraCondição)` | Só é avaliado se o `if` anterior for `false`; executa se for `true` |
| `else` | Executa se **nenhuma** das condições anteriores for verdadeira |

### Exemplo prático 1 — Verificar idade para votar

```javascript
let idade0 = 17;

if (idade0 >= 18) {
    console.log("Pode votar");
} else if (idade0 >= 16 && idade0 < 18) {
    console.log("Voto facultativo");
} else {
    console.log("Não pode votar");
}
// Saída: "Voto facultativo"
```

**Como o JavaScript avalia esse código, passo a passo:**

1. Verifica `idade0 >= 18` → `17 >= 18` → `false`
2. Verifica `idade0 >= 16 && idade0 < 18` → `17 >= 16 && 17 < 18` → `true && true` → `true`
3. Executa o bloco correspondente e ignora o `else`

### Exemplo prático 2 — Verificar nota de um aluno

```javascript
let nota = 8.5;

if (nota >= 9) {
    console.log("Excelente!");
} else if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
// Saída: "Aprovado"
```

### Tabela-resumo do exemplo da nota

| Faixa de nota | Resultado |
|---|---|
| `nota >= 9` | "Excelente!" |
| `7 <= nota < 9` | "Aprovado" |
| `5 <= nota < 7` | "Recuperação" |
| `nota < 5` | "Reprovado" |

---

## 3. Operador Ternário

O **operador ternário** é uma forma resumida de escrever um `if...else` em uma única linha. É útil quando a decisão é simples: apenas dois resultados possíveis.

### Sintaxe

```javascript
condição ? valor_se_verdadeiro : valor_se_falso;
```

### Exemplo prático 1 — Verificar se um número é par ou ímpar

```javascript
let numero = 11;
let resultad = (numero % 2 === 0) ? "Par" : "Ímpar";
console.log("Resultado:", resultad); // Ímpar
```

**Explicação:** `numero % 2` calcula o resto da divisão de `11` por `2`, que é `1`. Como `1 === 0` é `false`, o ternário retorna o valor após os dois-pontos: `"Ímpar"`.

### Exemplo prático 2 — Verificação de maioridade

```javascript
let idade2 = 20;
let status = (idade2 >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status); // "Maior de idade"
```

### Comparação: `if...else` vs. Ternário

| Estrutura | Código equivalente |
|---|---|
| `if...else` | `if (idade2 >= 18) { status = "Maior de idade"; } else { status = "Menor de idade"; }` |
| Ternário | `status = (idade2 >= 18) ? "Maior de idade" : "Menor de idade";` |

>  O operador ternário é ideal quando o objetivo é apenas **atribuir um valor** com base em uma condição simples, tornando o código mais compacto.

---

## 4. `switch case`

Quando há muitas opções a comparar com um **único valor**, o `switch` costuma deixar o código mais organizado do que uma longa cadeia de `if/else if`.

### Sintaxe

```javascript
switch (variável) {
   case valor1:
      // código
      break;
   case valor2:
      // código
      break;
   default:
      // se nenhum valor for igual
}
```

### Como funciona

| Elemento | Função |
|---|---|
| `switch (variável)` | Define o valor que será comparado |
| `case valorX:` | Compara `variável` com `valorX`; se forem iguais, executa o bloco |
| `break` | Interrompe o `switch`, evitando que os próximos `case` sejam executados |
| `default` | Executado se nenhum `case` corresponder ao valor |

>  **Atenção:** esquecer o `break` faz o código continuar executando os `case` seguintes mesmo que não correspondam — esse comportamento é chamado de *fall-through* e normalmente não é o desejado.

### Exemplo prático — Menu de opções

```javascript
let opcao = 2;

switch (opcao) {
    case 1:
        console.log("Você escolheu Iniciar Jogo");
        break;
    case 2:
        console.log("Você escolheu Carregar Jogo");
        break;
    case 3:
        console.log("Você escolheu Sair");
        break;
    default:
        console.log("Opção inválida");
        break;
}
// Saída: "Você escolheu Carregar Jogo"
```

### Tabela-resumo do exemplo

| Valor de `opcao` | Saída |
|---|---|
| `1` | "Você escolheu Iniciar Jogo" |
| `2` | "Você escolheu Carregar Jogo" |
| `3` | "Você escolheu Sair" |
| qualquer outro | "Opção inválida" |

---

## 5. Quando Usar Cada Estrutura

| Estrutura | Quando usar |
|---|---|
| **`if / else`** | Decisões com múltiplas condições complexas (`>`, `<`, `==`, combinações lógicas, etc.) |
| **`switch`** | Comparação de um valor exato contra muitas opções possíveis |
| **Operador ternário** | Decisões simples e rápidas, geralmente para atribuir um valor |

---

## 6. Dicas de Leitura Lógica

-  As condições em uma estrutura condicional sempre retornam um valor **booleano** (`true` ou `false`).
-  Tenha cuidado com o uso de `===` (comparação estrita) versus `==` (comparação com conversão de tipo) — **prefira sempre `===`**, como recomendado na Aula 2.
-  É possível **combinar condições** usando os operadores lógicos `&&` (E), `||` (OU) e `!` (NÃO), também vistos na Aula 2.

### Exemplo combinando condição e operadores lógicos

```javascript
let idade = 25;
let temCNH = true;

if (idade >= 18 && temCNH) {
    console.log("Pode dirigir!");
}
// Saída: "Pode dirigir!"
```

---

### Referência rápida das estruturas condicionais

```
IF / ELSE IF / ELSE   → decisões com múltiplas condições complexas
OPERADOR TERNÁRIO ?:  → decisões simples de uma linha
SWITCH CASE           → comparação de um valor exato contra várias opções
```
