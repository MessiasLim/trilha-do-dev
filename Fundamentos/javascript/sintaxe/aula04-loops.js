/*
=================================================================
====== AULA 4: LAÇOS DE REPETIÇÃO (LOOPS) EM JAVASCRIPT ======
=================================================================

 O QUE SÃO LAÇOS DE REPETIÇÃO?

São estruturas que permitem executar um bloco de código várias vezes, de forma automática, com base em uma condição.

 Isso é essencial para evitar repetições manuais e para trabalhar com listas, contadores, animações, cálculos em massa, etc.

Existem 3 laços principais em JavaScript:

for
 while
 do...while

============================================================
 1. FOR
============================================================

 É o loop mais usado quando sabemos quantas vezes queremos repetir algo.

Sintaxe:
for (inicialização; condição; incremento) {
   // código que será executado
}

 EXEMPLO: Contar de 1 até 5
*/

for (let i = 1; i <= 5; i++) {
  console.log("Contagem:", i);
}

/*
Explicação:
- let i = 1 → começa do 1
- i <= 5 → executa enquanto i for menor ou igual a 5
- i++ → incrementa 1 a cada volta

 EXEMPLO: Mostrar números pares de 0 a 10
*/

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
      console.log("Par:", i);
  }
}

/*
============================================================
 2. WHILE
============================================================

 Usamos o `while` quando não sabemos quantas vezes o código vai repetir, mas sabemos a condição de parada.

Sintaxe:
while (condição) {
 // código
}

 EXEMPLO: Repetir até que um número chegue a 5
*/

let numerox = 1;

while (numerox <= 5) {
  console.log("Número atual:", numerox);
  numerox++; // incrementa para não criar loop infinito
}

/*
 Cuidado: se a condição nunca for falsa, o while se tornará um LOOP INFINITO!

 EXEMPLO: Contagem regressiva
*/

let contagem = 5;

while (contagem > 0) {
  console.log("Contando:", contagem);
  contagem--;
}

/*
============================================================
 3. DO...WHILE
============================================================

 É parecido com o `while`, mas garante que o código será executado pelo menos UMA VEZ, mesmo que a condição seja falsa.

Sintaxe:
do {
 // código
} while (condição);

 EXEMPLO: Executar pelo menos uma vez
*/

let x = 6;

do {
  console.log("Executando DO...WHILE: x =", x);
  x++;
} while (x <= 5);

/*
Veja que mesmo `x` começando com 6, o código rodou uma vez antes da verificação.

============================================================
 4. LOOP COM BREAK E CONTINUE
============================================================

 BREAK → Interrompe o loop antes da condição ser falsa.
 CONTINUE → Pula a iteração atual e vai para a próxima.

 EXEMPLO: Parar quando encontrar o número 3
*/

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
      console.log("Número 3 encontrado! Parando...");
      break;
  }
  console.log("Número:", i);
}

/*
 EXEMPLO: Pular o número 2
*/

for (let i = 1; i <= 5; i++) {
  if (i === 2) {
      continue; // pula o resto do laço e vai para o próximo número
  }
  console.log("Número:", i);
}

/*
============================================================
 RESUMO DOS LAÇOS

FOR → quando souber o número de repetições
WHILE → quando não souber o número de repetições, mas souber a condição de parada
DO WHILE → quando quiser executar pelo menos uma vez antes de verificar a condição

BREAK → interrompe o laço
CONTINUE → pula a iteração atual

============================================================
*/





