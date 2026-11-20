# Aula 7: Funções em JavaScript

---

## Índice

1. [O que é uma Função?](#1-o-que-é-uma-função)
2. [Como Declarar uma Função](#2-como-declarar-uma-função)
3. [Expressões de Função (armazenadas em variáveis)](#3-expressões-de-função-armazenadas-em-variáveis)
4. [Arrow Functions (funções de seta)](#4-arrow-functions-funções-de-seta)
5. [Parâmetros Padrão](#5-parâmetros-padrão)
6. [Escopo de Variáveis em Funções](#6-escopo-de-variáveis-em-funções)
7. [Funções Aninhadas](#7-funções-aninhadas)
8. [Funções como Valores (Funções de Primeira Classe)](#8-funções-como-valores-funções-de-primeira-classe)
9. [Callbacks e Assincronia (introdução)](#9-callbacks-e-assincronia-introdução)
10. [Funções Recursivas](#10-funções-recursivas)

---

## 1. O que é uma Função?

Uma **função** é um bloco de código reutilizável que pode ser chamado para executar uma tarefa específica.

Ela serve para:

- **Organizar** o código
- **Evitar repetições**
- Deixar o programa mais **limpo, modular e compreensível**

---

## 2. Como Declarar uma Função

Existem três formas principais de declarar funções em JavaScript.

### 2.1 Forma tradicional (declaração de função)

```javascript
function saudacao() {
  console.log("Olá, bem-vindo!");
}

saudacao(); // chamando a função
```

### 2.2 Função com parâmetros

Parâmetros permitem personalizar a execução da função.

```javascript
function dizerOla(nome) { // "nome" é o parâmetro
  console.log("Olá, " + nome + "!");
}

dizerOla("Lucas"); // "Lucas" é o argumento
dizerOla("Maria"); // "Maria" é o argumento
```

>  **Parâmetro vs. Argumento:** o *parâmetro* é o nome definido na declaração da função (`nome`); o *argumento* é o valor real passado na hora de chamá-la (`"Lucas"`, `"Maria"`).

### 2.3 Função que retorna valor

Usa-se `return` para devolver um resultado a quem chamou a função.

```javascript
function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);
console.log("Resultado da soma:", resultado);
```

### 2.4 Argumentos que são funções (introdução a callbacks)

Argumentos também podem ser funções — chamadas de **callbacks**, geralmente usadas para executar algo após algum evento acontecer.

```javascript
addEventListener('click', function() {
  console.log('clicou');
});
```

Nesse exemplo, `addEventListener` recebe dois argumentos:

| Argumento | Tipo | Papel |
|---|---|---|
| `'click'` | string | Nome do evento a ser observado |
| `function() {...}` | função anônima | Código executado quando o evento ocorrer |

### 2.5 Funções sem `return`

Quando `return` não é definido, a função retorna `undefined`. O código interno é executado normalmente, independentemente de haver ou não um valor de retorno.

```javascript
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
}

console.log(imc(80, 1.80)); // undefined → a função calcula, mas nunca retorna o valor
```

>  **Atenção:** repare que a função calcula o IMC internamente, mas como não há `return`, o valor calculado nunca sai da função — o `console.log` mostra `undefined`.

>  **Regra prática:** use `return` sempre que precisar **reutilizar o resultado** de uma função fora dela.

---

## 3. Expressões de Função (armazenadas em variáveis)

Funções podem ser armazenadas dentro de variáveis — essa forma é chamada de **expressão de função**.

```javascript
const multiplicar = function (a, b) {
  return a * b;
};

console.log("Multiplicação:", multiplicar(4, 5));
```

---

## 4. Arrow Functions (funções de seta)

As **arrow functions** são uma forma mais curta de escrever funções, muito usada em conjunto com métodos como `map` e `filter` (vistos na Aula 5).

### Sintaxe completa

```javascript
const dividir = (a, b) => {
  return a / b;
};

console.log("Divisão:", dividir(10, 2));
```

### Sintaxe resumida (função de uma linha)

Quando a função tem apenas uma linha, as chaves `{}` e o `return` podem ser omitidos:

```javascript
const dobro = x => x * 2;
console.log("Dobro de 6:", dobro(6));
```

### Comparação entre as formas de função

| Forma | Sintaxe | Observação |
|---|---|---|
| Declaração tradicional | `function nome() { ... }` | Forma clássica, cria uma função nomeada |
| Expressão de função | `const nome = function() { ... }` | Função guardada em uma variável |
| Arrow function completa | `const nome = (a, b) => { return ...; }` | Sintaxe mais moderna e curta |
| Arrow function resumida | `const nome = x => x * 2` | Sem chaves nem `return`, para uma única expressão |

>  Como visto na Aula 7, arrow functions têm um comportamento diferente em relação ao `this` — não possuem seu próprio `this` quando usadas como métodos de objeto.

---

## 5. Parâmetros Padrão

É possível definir um valor padrão para um parâmetro, que será usado caso nenhum argumento seja passado na chamada da função.

```javascript
function apresentar(nome = "Visitante") {
  console.log("Olá, " + nome + "!");
}

apresentar();        // Olá, Visitante!
apresentar("Bruna"); // Olá, Bruna!
```

---

## 6. Escopo de Variáveis em Funções

Variáveis declaradas **dentro** de uma função são chamadas de **locais** — só existem dentro dela. Variáveis declaradas **fora** de qualquer função são chamadas de **globais** e podem ser acessadas de qualquer lugar do código, inclusive de dentro de funções.

```javascript
let nomeGlobal = "Messi";

function mostrarNome() {
  let nomeLocal = "Cristiano";
  console.log("Nome local:", nomeLocal);
  console.log("Nome global (acessado de dentro):", nomeGlobal);
}

mostrarNome();
// console.log(nomeLocal); // ERRO: nomeLocal não existe aqui fora!
```

### Tabela-resumo de escopo

| Tipo de variável | Onde é declarada | Onde pode ser acessada |
|---|---|---|
| **Local** | Dentro de uma função | Somente dentro da própria função |
| **Global** | Fora de qualquer função | Em qualquer parte do código, inclusive dentro de funções |

---

## 7. Funções Aninhadas

Funções podem ser declaradas dentro de outras funções — são chamadas de **funções aninhadas**.

```javascript
function operacao(a, b) {
  function somarInterno(x, y) {
      return x + y;
  }
  return somarInterno(a, b);
}

console.log("Soma com função aninhada:", operacao(2, 3));
```

Aqui, `somarInterno` só existe dentro do escopo de `operacao` — funciona como uma função auxiliar privada, usada apenas internamente.

---

## 8. Funções como Valores (Funções de Primeira Classe)

Em JavaScript, funções são tratadas como **valores** — isso é chamado de "funções de primeira classe". Isso significa que é possível:

- Atribuí-las a variáveis
- Passá-las como argumentos para outras funções
- Retorná-las de dentro de outras funções

```javascript
function executar(outraFuncao) {
  outraFuncao(); // executa a função recebida
}

executar(function () {
  console.log("Executando função passada como argumento!");
});
```

---

## 9. Callbacks e Assincronia (introdução)

Uma função passada como argumento para outra função é chamada de **callback**. Esse padrão é muito útil em eventos e operações assíncronas — situações em que uma ação precisa esperar outra terminar antes de ser executada.

```javascript
function carregarPagina(callback) {
  console.log("Carregando...");
  callback(); // chamada da função quando "terminar"
}

carregarPagina(function () {
  console.log("Página carregada com sucesso!");
});
// Saída:
// Carregando...
// Página carregada com sucesso!
```

>  O exemplo do `addEventListener` na Seção 2.4 já era, na prática, um uso de callback: a função anônima passada como segundo argumento só é executada quando o evento `'click'` acontece.

---

## 10. Funções Recursivas

Uma **função recursiva** é aquela que **chama a si mesma** para resolver um problema, dividindo-o em partes menores e idênticas.

>  Toda função recursiva **precisa de uma condição de parada** (chamada de **caso base**), para evitar um loop infinito que resultaria em um erro de `Stack Overflow` (estouro de pilha).

### Exemplo — Cálculo de Fatorial

O fatorial de um número é o produto de todos os números inteiros positivos até ele (por exemplo, `5! = 5 × 4 × 3 × 2 × 1 = 120`).

```javascript
function calcularFatorial(n) {
    // Condição de Parada (Caso Base): 0! sempre é 1.
    if (n === 0) {
        return 1;
    }

    // Passo Recursivo: chama a função com um número menor (n - 1)
    // até que o Caso Base seja atingido.
    return n * calcularFatorial(n - 1);
}

const resultadoFatorial = calcularFatorial(5);
console.log(`Fatorial de 5 (Recursão): ${resultadoFatorial}`); // Saída: 120
```

### Como a recursão se desenrola, passo a passo

```
calcularFatorial(5)
  = 5 * calcularFatorial(4)
      = 4 * calcularFatorial(3)
          = 3 * calcularFatorial(2)
              = 2 * calcularFatorial(1)
                  = 1 * calcularFatorial(0)
                      = 1   ← Caso Base atingido

Voltando (resolvendo de trás para frente):
  calcularFatorial(1) = 1 * 1 = 1
  calcularFatorial(2) = 2 * 1 = 2
  calcularFatorial(3) = 3 * 2 = 6
  calcularFatorial(4) = 4 * 6 = 24
  calcularFatorial(5) = 5 * 24 = 120
```

### Elementos essenciais de uma função recursiva

| Elemento | Função | No exemplo |
|---|---|---|
| **Caso base** | Condição que interrompe a recursão | `if (n === 0) return 1;` |
| **Passo recursivo** | Chamada da função a si mesma com um valor "menor" | `return n * calcularFatorial(n - 1);` |

---

### Referência rápida da Aula 6

```
DECLARAÇÃO TRADICIONAL:  function nome(params) { return valor; }
EXPRESSÃO DE FUNÇÃO:     const nome = function(params) { return valor; };
ARROW FUNCTION:          const nome = (params) => { return valor; };
ARROW RESUMIDA:          const nome = param => valor;

PARÂMETRO PADRÃO:        function nome(param = valorPadrao) { ... }

ESCOPO:                  variável dentro da função → local
                          variável fora da função  → global

CALLBACK:                função passada como argumento para outra função

RECURSÃO:                função que chama a si mesma
                          SEMPRE precisa de um caso base para parar
```
