/*
============================================================
===== AULA 3: ESTRUTURAS CONDICIONAIS EM JAVASCRIPT =====
============================================================

 O QUE SÃO ESTRUTURAS CONDICIONAIS?

As estruturas condicionais permitem que um programa tome decisões com base em determinadas condições.

 Em outras palavras: "Se algo for verdadeiro, faça isso. Se não, faça aquilo."

Isso é essencial para criar lógica nos programas.

============================================================
 1. IF, ELSE IF, ELSE
============================================================

A estrutura mais básica de decisão é o `if`.

Sintaxe:
if (condição) {
   // bloco de código se a condição for verdadeira
} else if (outraCondição) {
   // bloco se a segunda condição for verdadeira
} else {
   // bloco se nenhuma das anteriores for verdadeira
}

 EXEMPLO PRÁTICO 1: Verificar idade para votar
*/

let idade0 = 17;

if (idade0 >= 18) {
    console.log("Pode votar");
} else if (idade0 >= 16 && idade0 < 18) {
    console.log("Voto facultativo");
} else {
    console.log("Não pode votar");
}

/*
 EXEMPLO PRÁTICO 2: Verificar nota de um aluno
*/

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

/*
============================================================
 2. OPERADOR TERNÁRIO (Condicional em uma linha)
============================================================

É uma forma resumida do if...else.
Sintaxe:
condição ? valor_se_verdadeiro : valor_se_falso;

 EXEMPLO PRÁTICO: Verificar se número é par ou ímpar
*/

let numero = 11;
let resultad = (numero % 2 === 0) ? "Par" : "Ímpar";
console.log("Resultado:", resultad); // Ímpar

/*
Outro exemplo: verificação de maioridade
*/

let idade2 = 20;
let status = (idade2 >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status);

/*
============================================================
 3. SWITCH CASE
============================================================

Quando temos muitas opções a comparar com um único valor, usamos switch.

Sintaxe:
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

 EXEMPLO PRÁTICO: Menu de opções
*/

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

/*
 IMPORTANTE:

Use IF/ELSE para decisões com múltiplas condições complexas (>, <, ==, etc.)
Use SWITCH para comparar valores exatos com muitas opções
Use o OPERADOR TERNÁRIO para decisões simples e rápidas

============================================================
 DICAS DE LEITURA LÓGICA

➤ As condições sempre retornam um valor booleano (true ou false).
➤ Cuidado com o uso de === vs == (prefira sempre ===).
➤ Você pode combinar condições com operadores lógicos (&&, ||, !).

EXEMPLO:

let idade = 25;
let temCNH = true;

if (idade >= 18 && temCNH) {
   console.log("Pode dirigir!");
}

============================================================

*/