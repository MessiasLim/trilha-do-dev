/*
=====================================================
======== AULA 2: OPERADORES EM JAVASCRIPT ========
=====================================================

 O QUE SÃO OPERADORES?

Operadores são símbolos especiais que dizem ao computador para realizar uma operação matemática, de comparação ou lógica.

Eles são a base da construção de decisões e cálculos nos programas.

A seguir, vamos ver os principais tipos de operadores em JavaScript:

============================================================
1. OPERADORES ARITMÉTICOS (Matemáticos)
============================================================

Esses operadores lidam com números. Eles servem para fazer contas:

+  ➜ adição
-  ➜ subtração
*  ➜ multiplicação
/  ➜ divisão
%  ➜ módulo (resto da divisão)
** ➜ exponenciação (potência)

prioriza a multiplicação/divisão ou o que está entre parenteses

Exemplos:
*/

let a = 10;
let b = 3;

console.log("Soma:", a + b);              // 13
console.log("Subtração:", a - b);         // 7
console.log("Multiplicação:", a * b);     // 30
console.log("Divisão:", a / b);           // 3.333...
console.log("Resto da divisão:", a % b);  // 1
console.log("Potência:", a ** b);         // 1000


//========================================================
// OPERADORES ARITMÉTICOS (STRINGS)
//========================================================

let soma = '100' + 50; // 10050
let subt = '100' - 50; // 50
let mult = '100' * '2'; // 200

// NaN significa "Not a Number"
// Ele aparece quando uma operação matemática falha.

'comprei 10' / 2; // NaN

typeof NaN; // "number" (comportamento histórico do JavaScript)


/*
============================================================
 2. OPERADORES DE ATRIBUIÇÃO
============================================================

Usamos para armazenar valores em variáveis, ou alterar seus valores:

=     ➜ atribuição simples
+=    ➜ soma e atribuição
-=    ➜ subtração e atribuição
*=    ➜ multiplicação e atribuição
/=    ➜ divisão e atribuição
%=    ➜ módulo e atribuição

Exemplo:
*/

let k = 5;
k += 3; // mesmo que k = k + 3
console.log("k após += 3:", k); // 8

k *= 2; // k = k * 2
console.log("k após *= 2:", k); // 16

/*
============================================================
 3. OPERADORES DE COMPARAÇÃO
============================================================

Usados para comparar dois valores. Retornam um booleano: true ou false.

==    ➜ igual (com conversão de tipo)
===   ➜ estritamente igual (sem conversão de tipo)
!=    ➜ diferente
!==   ➜ estritamente diferente
>     ➜ maior que
<     ➜ menor que
>=    ➜ maior ou igual
<=    ➜ menor ou igual

Exemplos:
*/

console.log("5 == '5' :", 5 == '5');     // true (conversão implícita)
console.log("5 === '5' :", 5 === '5');   // false (tipos diferentes)
console.log("10 != '10':", 10 != '10'); // false
console.log("10 !== '10':", 10 !== '10'); // true
console.log("7 > 3:", 7 > 3);           // true
console.log("3 <= 3:", 3 <= 3);         // true

/*
============================================================
 4. OPERADORES LÓGICOS
============================================================

Usados para tomar decisões baseadas em múltiplas condições.*/

// && (E lógico)
// Retorna true apenas se TODAS as expressões forem verdadeiras.
// Caso encontre um valor falso, ele retorna imediatamente esse valor.

true && true;    // true
true && false;   // false
false && true;   // false
false && false;  // false

// Em JavaScript, nem tudo é true ou false.
// Alguns valores são considerados "truthy" ou "falsy".

// Valores falsy:
false, 0, "", null, undefined, NaN

// Todo o resto é truthy

'gato' && 'cão';   // "cão" → ambos são truthy, retorna o último
0 && 10;           // 0 → 0 é falsy, retorna imediatamente

'gato' && false; // false
(5>=5) && (3<6); // true

// ||  ➜ OU lógico,retorna o primeiro true,se ambas forem false retorna false

true || true; // true
true || false; // true
false || true; // true
'gato' || 'cão'; // gato
(5-5) || (5+5); // 10
'gato' || false; // gato
(5>=5) || (3<6); // true


// !   ➜ NÃO lógico (inverte o valor)



/*

Exemplos:

let idade1 = 20;
let temCarteira = true;

console.log("Pode dirigir?", idade1 >= 18 && temCarteira); // true
console.log("É menor ou sem carteira?", idade1 < 18 || !temCarteira); // false

/*
============================================================
5. OPERADORES DE INCREMENTO E DECREMENTO
============================================================

++ ➜ incrementa 1 unidade
-- ➜ decrementa 1 unidade

*/

let contador = 0;
contador++; // contador = contador + 1
console.log("Contador após incremento:", contador); // 1

contador--; // contador = contador - 1
console.log("Contador após decremento:", contador); // 0

/*
 Pré vs Pós incremento

let x = 5;
console.log(x++); ➜ mostra 5, depois incrementa
console.log(++x); ➜ incrementa primeiro, depois mostra
*/

let y = 5;
console.log("x++:", y++); // 5 (depois vira 6)
console.log("Agora x:", y); // 6
console.log("++x:", ++y); // 7 (incrementa antes)

/*
============================================================
 BOAS PRÁTICAS

Use === e !== sempre que possível (evita bugs com conversão de tipo)
Deixe o código claro: evite condições complicadas demais
Use parênteses para organizar condições lógicas complexas

============================================================

*/

