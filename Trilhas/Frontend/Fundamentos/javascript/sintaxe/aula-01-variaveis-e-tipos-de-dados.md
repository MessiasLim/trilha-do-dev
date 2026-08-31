# Aula 1: Variáveis e Tipos de Dados em JavaScript

---

## Índice

1. [O que são Variáveis?](#1-o-que-são-variáveis)
2. [Os Três Modos de Criar Variáveis](#2-os-três-modos-de-criar-variáveis)
3. [Tipos de Dados Primitivos](#3-tipos-de-dados-primitivos)
4. [Conversão de Tipos](#4-conversão-de-tipos)
5. [Coerção: Conversão Automática de Tipos](#5-coerção-conversão-automática-de-tipos)
6. [Verificando o Tipo com `typeof`](#6-verificando-o-tipo-com-typeof)
7. [Resumo Rápido](#7-resumo-rápido)

---

## 1. O que são Variáveis?

Uma **variável** é como uma "caixa" ou "gaveta" no computador onde você guarda informações para usar mais tarde. Você dá um nome a essa caixa (o nome da variável) e coloca valores dentro dela. Quando precisa desse valor, basta chamar a variável pelo nome.

### Analogia do mundo real

Imagine uma gaveta com a etiqueta **"NOME"**. Você coloca dentro dela um papel escrito "Lucas". Toda vez que precisar, você abre a gaveta e pega o valor guardado.

### Sintaxe básica

```javascript
let nome = "Lucas";
```

### Anatomia da instrução

| Parte | Significado |
|---|---|
| `let` | "Deixa eu criar uma gaveta aqui" |
| `nome` | O nome dado a essa gaveta |
| `=` | "Vou colocar um valor dentro dela" |
| `"Lucas"` | O valor guardado |
| `;` | Fim da instrução |

### Resultado

A partir desse momento, `nome` pode ser usado em qualquer parte do código e representará o valor `"Lucas"`.

```javascript
let nome = "Lucas";
console.log(nome); // Mostra "Lucas"
```

---

## 2. Os Três Modos de Criar Variáveis

Em JavaScript existem três palavras-chave para declarar variáveis, cada uma com um comportamento diferente.

### `var` — Evite usar

- Forma antiga do JavaScript.
- Pode causar bugs por conta de um comportamento estranho chamado *hoisting*.
- Não recomendado em código novo.

```javascript
var idadeAntiga = 18;
```

### `let` — Recomendado

- Forma moderna do JavaScript.
- Permite alterar o valor da variável depois de criada.
- Não pode ser redeclarada com o mesmo nome no mesmo escopo (mais seguro).

```javascript
let altura = 1.75;
altura = 1.80; // Permitido: o valor pode ser alterado depois
```

### `const` — Mais seguro

- Usado para valores que **nunca** vão mudar.
- Uma vez atribuído, o valor fica "congelado".
- Reduz erros acidentais no código.

```javascript
const PI = 3.14159;
// PI = 3.14; // ERRO! Não é possível reatribuir uma constante
```

### Comparativo

| Palavra-chave | Pode reatribuir? | Recomendado? | Observação |
|---|---|---|---|
| `var` | Sim | Não | Comportamento antigo e propenso a bugs |
| `let` | Sim | Sim | Uso padrão quando o valor muda |
| `const` | Não | Sim (preferencial) | Uso padrão quando o valor não muda |

### Saída no console

```javascript
console.log("Altura:", altura); // 1.80
console.log("PI:", PI);         // 3.14159
```

---

## 3. Tipos de Dados Primitivos

JavaScript possui tipos de dados básicos, cada um voltado a guardar um tipo específico de informação:

| Tipo | O que é | Exemplo |
|---|---|---|
| `string` | Texto (palavras, frases) | `"Ana"`, `"JavaScript"` |
| `number` | Números (inteiros ou decimais) | `25`, `3.14`, `-5` |
| `boolean` | Verdadeiro ou falso | `true`, `false` |
| `undefined` | Sem valor atribuído ainda | (automático) |
| `null` | Vazio propositalmente | `null` (definido por você) |

### 3.1 `string` (texto)

```javascript
let nome2 = "Maria";
let mensagem = "Bem-vindo ao JavaScript!";
```

### 3.2 `number` (números)

```javascript
let idade = 25;
let preco = 19.90;
let temperatura = -5;
```

### 3.3 `boolean` (verdadeiro ou falso)

```javascript
let estaAprovado = true;
let temCarro = false;
```

### 3.4 `undefined` (variável sem valor)

Quando uma variável é criada mas não recebe valor, o JavaScript atribui automaticamente `undefined`.

```javascript
let endereco;
console.log(endereco); // Mostra "undefined"
```

### 3.5 `null` (vazio proposital)

Diferente de `undefined`, o `null` é atribuído intencionalmente pelo programador para indicar "nenhum valor".

```javascript
let telefone = null;
console.log(telefone); // Mostra "null"
```

### Saídas de exemplo

```javascript
console.log(nome2);        // "Maria"
console.log(idade);        // 25
console.log(estaAprovado); // true
```

---

## 4. Conversão de Tipos

Em muitas situações é necessário transformar um tipo em outro — por exemplo, quando um usuário digita `"42"` (texto) mas o programa precisa fazer contas com esse valor, ou quando se tem o número `30` e deseja-se exibi-lo como parte de uma frase (`"Você tem 30 anos"`).

### 4.1 String → Number

Usa-se a função `Number()`:

```javascript
let numeroTexto = "42";
let numeroConvertido = Number(numeroTexto); // Converte "42" em 42

console.log("Texto: '42'");
console.log("Convertido:", numeroConvertido); // 42 (agora é number)
console.log("Tipo:", typeof numeroConvertido); // "number"
```

### 4.2 Number → String

Pode ser feito com `String()` ou com o método `.toString()`:

```javascript
let numeroInteiro = 30;
let textoIdade = String(numeroInteiro); // Converte 30 em "30"

console.log("Número: 30");
console.log("Convertido:", textoIdade); // "30" (agora é string)
console.log("Tipo:", typeof textoIdade); // "string"

// Forma alternativa
let outroTexto = numeroInteiro.toString();
console.log("Com toString():", outroTexto); // "30"
```

### 4.3 Para `boolean`

Usa-se a função `Boolean()`. A regra geral é: valores "vazios" ou "zero" tornam-se `false`; os demais tornam-se `true`.

```javascript
let textoVazio = "";
let booleanoVazio = Boolean(textoVazio); // Strings vazias viram false
console.log("String vazia '':", booleanoVazio); // false

let textoComValor = "Oi";
let booleanoComValor = Boolean(textoComValor); // Strings com valor viram true
console.log("String 'Oi':", booleanoComValor); // true
```

### Tabela-resumo das funções de conversão

| Função | Converte para | Exemplo |
|---|---|---|
| `Number(valor)` | `number` | `Number("42")` → `42` |
| `String(valor)` | `string` | `String(30)` → `"30"` |
| `valor.toString()` | `string` | `(30).toString()` → `"30"` |
| `Boolean(valor)` | `boolean` | `Boolean("")` → `false` |

---

## 5. Coerção: Conversão Automática de Tipos

O JavaScript, por vezes, tenta ser "esperto" e converte tipos automaticamente ao misturá-los em operações. Esse comportamento é chamado de **coerção de tipos** e pode gerar resultados inesperados quando não é compreendido.

> **Regra geral:** ao misturar tipos diferentes com operadores, o JavaScript tenta convertê-los automaticamente para conseguir realizar a operação.

### 5.1 Soma com string — resultado inesperado (concatenação)

```javascript
console.log("5" + 3); // "53" → o número 3 foi convertido em string e concatenado
console.log(5 + "3"); // "53" → o número 5 foi convertido em string e concatenado
```

### 5.2 Subtração com string — resultado numérico esperado

```javascript
console.log("5" - 3); // 2 → o "5" foi convertido em número antes da subtração
console.log(5 - "3"); // 2 → o "3" foi convertido em número antes da subtração
```

### 5.3 Boolean em operações aritméticas

```javascript
console.log(true + 1);  // 2 → true é convertido em 1
console.log(false + 1); // 1 → false é convertido em 0
```

### Tabela-resumo da coerção

| Operação | Resultado | Explicação |
|---|---|---|
| `"5" + 3` | `"53"` | `+` com string vira concatenação |
| `5 + "3"` | `"53"` | `+` com string vira concatenação |
| `"5" - 3` | `2` | `-` força conversão para number |
| `5 - "3"` | `2` | `-` força conversão para number |
| `true + 1` | `2` | `true` vira `1` |
| `false + 1` | `1` | `false` vira `0` |

### Boas práticas para evitar surpresas

Sempre que possível, faça a conversão de tipos **explicitamente**, usando `Number()` ou `String()` antes de operar:

```javascript
let resultado1 = Number("5") + 3; // 8   → conversão explícita antes da soma
let resultado2 = String(5) + 3;   // "53" → conversão explícita antes da concatenação

console.log("Conversão explícita de 5 + 3:", resultado1); // 8
console.log("Conversão explícita '5' + 3:", resultado2);  // "53"
```

---

## 6. Verificando o Tipo com `typeof`

O operador `typeof` permite perguntar ao JavaScript: **"Qual é o tipo desta variável?"**. É extremamente útil para depuração (debug) e para tomar decisões dentro do código.

### Sintaxe

```javascript
typeof nomeVariavel
```

### Exemplos práticos

```javascript
let exemploCadeia = "Olá";
let exemploNumero = 42;
let exemploBooleano = true;
let exemploVazio;
let exemploNulo = null;

console.log(typeof exemploCadeia);   // "string"
console.log(typeof exemploNumero);   // "number"
console.log(typeof exemploBooleano); // "boolean"
console.log(typeof exemploVazio);    // "undefined"
console.log(typeof exemploNulo);     // "object" (bug histórico do JavaScript!)
```

> **Atenção:** `typeof null` retorna `"object"`, o que é considerado um erro histórico da linguagem, mantido até hoje por razões de compatibilidade retroativa.

### Tabela-resumo de `typeof`

| Valor | Resultado de `typeof` |
|---|---|
| `"Olá"` | `"string"` |
| `42` | `"number"` |
| `true` | `"boolean"` |
| variável sem valor | `"undefined"` |
| `null` | `"object"` (exceção histórica) |

---

## 7. Resumo Rápido

- **Use `let`** (moderno) ou **`const`** (mais seguro).
- **Evite `var`** (forma antiga e propensa a bugs).
- **Prefira `const`** quando o valor não muda — é a opção mais segura.
- **Use `let`** quando o valor precisar mudar ao longo do código.
- **Nomeie variáveis com sentido:**
  - Bom: `let nomeUsuario = "Lucas";`
  - Ruim: `let x = "Lucas";`
- **Use `camelCase`** (primeira palavra minúscula, demais iniciando com maiúscula):
  - `minhaIdade`, `valorTotal`, `nomeCompleto`, `temEndereco`
- **Converta tipos explicitamente**, usando `Number()`, `String()` e `Boolean()`, em vez de depender da coerção automática do JavaScript.

---

### Referência rápida de tipos primitivos

```
string    → texto                 → "Ana"
number    → números                → 25, 3.14, -5
boolean   → verdadeiro/falso       → true, false
undefined → sem valor atribuído    → (automático)
null      → vazio proposital       → null
```
