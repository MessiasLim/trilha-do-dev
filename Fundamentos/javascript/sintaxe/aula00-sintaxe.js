/*
====================================================
====== AULA 1: VARIÁVEIS E TIPOS DE DADOS  ======
====================================================  


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
O QUE SÃO VARIÁVEIS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Uma variável é como uma "caixa" ou "gaveta" no computador onde você guarda
informações para usar mais tarde.

Você dá um nome para essa caixa (o nome da variável) e coloca valores dentro
dela. Quando precisa desse valor, você chama a variável pelo seu nome.

EXEMPLO NO MUNDO REAL:
- Imagine uma gaveta com a etiqueta "NOME"
- Você coloca um papel lá escrito "Lucas"
- Toda vez que precisa, você abre a gaveta e pega o valor

SINTAXE NO JAVASCRIPT:
let nome = "Lucas";

EXPLICAÇÃO PARTE POR PARTE:
┌─────────────────────────────────────────────────────────┐
│ let        → "deixa eu criar uma gaveta aqui"           │
│ nome       → "o nome que eu vou dar para essa gaveta"   │
│ =          → "vou colocar um valor dentro dela"         │
│ "Lucas"    → "esse é o valor guardado"                  │
│ ;          → "fim da instrução"                         │
└─────────────────────────────────────────────────────────┘

RESULTADO:
Agora você pode usar 'nome' em qualquer lugar, e ele vai representar "Lucas".
*/

let nome = "Lucas";
console.log(nome); // Mostra "Lucas"

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 OS TRÊS MODOS DE CRIAR VARIÁVEIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Em JavaScript, existem 3 formas de criar variáveis:

var (EVITE USAR!)
   - Forma antiga do JavaScript
   - Pode causar bugs porque tem comportamento estranho (hoisting)
   - Não use em código novo

 let (RECOMENDADO)
   - Forma moderna do JavaScript
   - Você pode mudar o valor depois
   - Não pode redeclarar com o mesmo nome (seguro)

 const (MAIS SEGURO)
   - Para valores que NUNCA vão mudar
   - Uma vez que você guarda um valor, ele fica "congelado"
   - Mais seguro porque evita acidentes
*/

//  EVITE: var é forma antiga
var idadeAntiga = 18;

// USE: let permite mudanças depois
let altura = 1.75;
altura = 1.80; // Você pode mudar o valor depois (isso é permitido)

// USE: const para valores que não mudam
const PI = 3.14159;
// PI = 3.14; //  ERRO! Não pode mudar PI porque é uma constante

console.log("Altura:", altura); // 1.80
console.log("PI:", PI);         // 3.14159

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 OS TIPOS DE DADOS PRIMITIVOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JavaScript tem alguns tipos de dados básicos. Cada tipo serve para guardar
um tipo diferente de informação:

┌──────────────────────────────────────────────────────────────────┐
│ TIPO         │ O QUE É                    │ EXEMPLO              │
├──────────────────────────────────────────────────────────────────┤
│ string       │ Texto (palavras, frases)   │ "Ana", "JavaScript"  │
│ number       │ Números (inteiros/decimais)│ 25, 3.14, -5         │
│ boolean      │ Verdadeiro ou falso        │ true, false          │
│ undefined    │ Sem valor atribuído ainda  │ (automático)         │
│ null         │ Vazio propositalmente      │ null (você escolhe)  │
└──────────────────────────────────────────────────────────────────┘

VAMOS VER CADA UM NA PRÁTICA:
*/

// 1. STRING (texto)
let nome2 = "Maria";
let mensagem = "Bem-vindo ao JavaScript!";

// 2. NUMBER (números)
let idade = 25;
let preco = 19.90;
let temperatura = -5;

// 3. BOOLEAN (verdadeiro ou falso)
let estaAprovado = true;
let temCarro = false;

// 4. UNDEFINED (variável criada, mas sem valor)
let endereco;
console.log(endereco); // Mostra "undefined"

// 5. NULL (você coloca vazio propositalmente)
let telefone = null;
console.log(telefone); // Mostra "null"

console.log(nome2);        // "Maria"
console.log(idade);        // 25
console.log(estaAprovado); // true

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CONVERTENDO ENTRE TIPOS (Conversão de Tipos)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Às vezes você precisa transformar um tipo em outro.

EXEMPLOS COMUNS:
- Um usuário digita "42" (texto), mas você precisa fazer contas com isso
- Você tem um número 30 e quer mostrar "Você tem 30 anos" (texto)

AQUI ESTÃO AS PRINCIPAIS FUNÇÕES DE CONVERSÃO:
*/

// ========== CONVERTENDO STRING PARA NUMBER ==========
let numeroTexto = "42";
let numeroConvertido = Number(numeroTexto); // Converte "42" em 42
console.log("Texto: '42'");
console.log("Convertido:", numeroConvertido); // 42 (agora é number)
console.log("Tipo:", typeof numeroConvertido); // "number"

// ========== CONVERTENDO NUMBER PARA STRING ==========
let numeroInteiro = 30;
let textoIdade = String(numeroInteiro); // Converte 30 em "30"
console.log("Número: 30");
console.log("Convertido:", textoIdade); // "30" (agora é string)
console.log("Tipo:", typeof textoIdade); // "string"

// Outra forma: usar .toString()
let outroTexto = numeroInteiro.toString(); // Também funciona
console.log("Com toString():", outroTexto); // "30"

// ========== CONVERTENDO PARA BOOLEAN ==========
let textoVazio = "";
let booleanoVazio = Boolean(textoVazio); // Strings vazias viram false
console.log("String vazia '':", booleanoVazio); // false

let textoComValor = "Oi";
let booleanoComValor = Boolean(textoComValor); // Strings com valor viram true
console.log("String 'Oi':", booleanoComValor); // true

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CUIDADO: CONVERSÃO AUTOMÁTICA (Coerção)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JavaScript às vezes tenta ser "esperto" e converte tipos automaticamente.
Isso pode causar resultados inesperados se você não souber!

REGRA: Quando você mistura tipos com operadores, JavaScript tenta converter.
*/

//  RESULTADO INESPERADO: Soma com string
console.log("5" + 3);     // "53" (o 3 virou string! Concatenou!)
console.log(5 + "3");     // "53" (o 5 virou string!)

// ESPERADO: Subtração com string
console.log("5" - 3);     // 2 (o "5" virou número!)
console.log(5 - "3");     // 2 (o "3" virou número!)

//  ESTRANHO: Boolean vira número
console.log(true + 1);    // 2 (true vira 1!)
console.log(false + 1);   // 1 (false vira 0!)

/*
DICA: Use Number() ou String() EXPLICITAMENTE para evitar surpresas!
*/

let resultado1 = Number("5") + 3; // 8 (converteu antes de somar)
let resultado2 = String(5) + 3;   // "53" (converteu antes de concatenar)

console.log("Conversão explícita de 5 + 3:", resultado1); // 8
console.log("Conversão explícita '5' + 3:", resultado2); // "53"

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 VERIFICANDO O TIPO COM typeof
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Você pode perguntar ao JavaScript: "Qual é o tipo dessa variável?"
Isso é útil para debugar ou tomar decisões no código.

SINTAXE: typeof nomeVariavel
*/

let exemploCadeia = "Olá";
let exemploNumero = 42;
let exemploBooleano = true;
let exemploVazio;
let exemploNulo = null;

console.log(typeof exemploCadeia);    // "string"
console.log(typeof exemploNumero);    // "number"
console.log(typeof exemploBooleano);  // "boolean"
console.log(typeof exemploVazio);     // "undefined"
console.log(typeof exemploNulo);      // "object" (isso é um "bug histórico" do JavaScript!)

/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                           RESUMO RÁPIDO - AULA 1                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║ USE let (moderno) ou const (mais seguro)                                     ║
║  EVITE var (forma antiga)                                                    ║
║                                                                              ║
║ PREFIRA const quando o valor não muda (mais seguro)                          ║
║ USE let quando o valor precisa mudar                                         ║
║                                                                              ║
║ NOMEIE VARIÁVEIS COM SENTIDO:                                                ║
║    - BOM: let nomeUsuario = "Lucas"                                          ║
║    -  RUIM: let x = "Lucas"                                                  ║
║                                                                              ║
║ USE camelCase (primeira letra minúscula, palavras seguintes maiúsculas):     ║
║    - minhaIdade, valorTotal, nomeCompleto, temEndereco                       ║
║                                                                              ║
║ CONVERTA TIPOS EXPLICITAMENTE (use Number(), String(), Boolean())            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
*/





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





/*
============================================================
===== AULA 3: ESTRUTURAS CONDICIONAIS EM JAVASCRIPT =====
============================================================

 O QUE SÃO ESTRUTURAS CONDICIONAIS?

As estruturas condicionais permitem que um programa tome decisões com base em determinadas condições.

 Em outras palavras: "Se algo for verdadeiro, faça isso. Se não, faça aquilo."

👉 Isso é essencial para criar lógica nos programas.

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





/*
===========================================
===== AULA 5: ARRAYS EM JAVASCRIPT =====
===========================================

 O QUE É UM ARRAY?

Um **array** (ou vetor) é uma **estrutura de dados** que serve para armazenar **vários valores** em uma única variável.

 Em vez de declarar várias variáveis, você agrupa todos os valores em uma lista (array).

 Um array pode armazenar números, textos, booleanos, objetos, e até outros arrays!

============================================================
 1. CRIAÇÃO DE UM ARRAY
============================================================

Existem duas formas principais:

*/

let numeros = [10, 20, 30, 40, 50]; // forma mais comum
let frutas = new Array("maçã", "banana", "uva"); // forma alternativa

console.log("Numeros:", numeros);
console.log("Frutas:", frutas);

/*
============================================================
 2. ACESSANDO ELEMENTOS
============================================================

Cada item do array tem um **índice (index)** que começa do 0.

Para acessar: nome_do_array[índice]
*/

console.log("Primeiro número:", numeros[0]); // 10
console.log("Última fruta:", frutas[2]); // uva

/*
============================================================
 3. MODIFICANDO ELEMENTOS
============================================================
*/

numeros[1] = 25; // troca o 20 por 25
console.log("Array modificado:", numeros);

/*
============================================================
 4. TAMANHO DE UM ARRAY
============================================================

Use .length para saber quantos elementos tem o array
*/

console.log("Quantidade de frutas:", frutas.length); // 3

/*
============================================================
 5. PERCORRENDO ARRAYS COM LOOPS
============================================================

Usando `for`
*/

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta no índice", i + ":", frutas[i]);
}

/*8
Usando `for...of` (forma mais limpa)
*/

for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

/*
============================================================
 6. MÉTODOS COMUNS DE ARRAYS
============================================================

Os arrays em JavaScript possuem vários métodos prontos
para adicionar, remover, buscar e manipular elementos.
Abaixo estão os principais, com uma explicação clara
do que cada um faz.

push() 
→ adiciona um ou mais elementos NO FINAL do array
→ modifica o array original

pop() 
→ remove o ÚLTIMO elemento do array
→ modifica o array original

unshift() 
→ adiciona um ou mais elementos NO INÍCIO do array
→ modifica o array original

shift() 
→ remove o PRIMEIRO elemento do array
→ modifica o array original

indexOf() 
→ retorna o índice (posição) de um elemento
→ se não encontrar, retorna -1

includes() 
→ verifica se um elemento existe no array
→ retorna true ou false

slice() 
→ recorta uma parte do array
→ NÃO altera o array original
→ o segundo índice não é incluído

splice() 
→ remove, adiciona ou substitui elementos
→ ALTERA o array original
*/

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

// Retorna o índice da letra "c"
console.log("Índice da letra c:", lista.indexOf("c")); 
// Resultado: 2

// Verifica se a letra "b" existe no array
console.log("Contém letra b?", lista.includes("b")); 
// Resultado: true

// Cria um novo array com parte do array original
// Pega do índice 1 até antes do índice 3
let subLista = lista.slice(1, 3); 
console.log("Sublista:", subLista);
// Resultado: ["b", "c"]

// Remove 1 elemento a partir do índice 1
lista.splice(1, 1); 
console.log("Depois do splice:", lista);
// Resultado: ["a", "c", "d"]



/*
===================================================
 7. MÉTODOS DE MANIPULAÇÃO: forEach, map, filter, 
reduce, some, every, find, split, reverse, join
===================================================

Esses métodos são muito usados no dia a dia do JavaScript
para percorrer, transformar, filtrar e analisar arrays
de forma mais clara, legível e funcional.

forEach() 
→ percorre todos os elementos do array
→ executa uma função para cada item
→ NÃO retorna um novo array (retorno é undefined)

map() 
→ transforma cada elemento do array
→ retorna um NOVO array com os valores modificados
→ NÃO altera o array original

filter() 
→ filtra elementos com base em uma condição
→ retorna um NOVO array apenas com os elementos aprovados
→ NÃO altera o array original

reduce() 
→ reduz o array a um único valor (número, string, objeto, etc.)
→ usa um acumulador que guarda o resultado parcial
→ muito usado para somas, médias, contagens e agrupamentos

some() 
→ verifica se PELO MENOS UM elemento atende à condição
→ retorna true ou false
→ para a execução assim que encontra um caso verdadeiro

every() 
→ verifica se TODOS os elementos atendem à condição
→ retorna true ou false
→ para a execução assim que encontra um caso falso

find() 
→ retorna o PRIMEIRO elemento que satisfaz a condição
→ se não encontrar, retorna undefined

reverse() 
→ inverte a ordem dos elementos do array
→ ALTERA o array original

split() 
→ divide uma STRING em um ARRAY
→ o separador define onde a string será cortada
→ MÉTODO DE STRING

join() 
→ junta os elementos de um ARRAY em uma STRING
→ o separador define como os elementos serão unidos
→ MÉTODO DE ARRAY

 EXEMPLO: forEach
Percorre o array e executa uma ação para cada elemento
*/
const numeros = [15, 20, 25, 30, 35, 40]; // Array de exemplo

numeros.forEach(function(num, index) {
    console.log("Número", num, "está na posição", index);
});

/*
 EXEMPLO: map
Cria um novo array transformando cada valor
Aqui, cada número é multiplicado por 2
*/
let dobrados = numeros.map(function(num) {
    return num * 2;
});
console.log("Números dobrados:", dobrados); 
// Saída: [30, 40, 50, 60, 70, 80]

/*
 EXEMPLO: filter
Cria um novo array contendo apenas números maiores que 25
*/
let maiores = numeros.filter(function(num) {
    return num > 25;
});
console.log("Maiores que 25:", maiores); 
// Saída: [30, 35, 40]

/*
 EXEMPLO: reduce
Soma todos os valores do array e retorna um único número
*/
let somaTotal = numeros.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0); // 0 é o valor inicial do acumulador

console.log("Soma total:", somaTotal); 
// Saída: 165

/*
 EXEMPLO: some
Verifica se existe PELO MENOS UM número maior que 35
*/
let existeMaior35 = numeros.some(function(num) {
    return num > 35;
});
console.log("Existe número maior que 35?", existeMaior35); 
// Saída: true

/*
 EXEMPLO: every
Verifica se TODOS os números são maiores que 10
*/
let todosMaiores10 = numeros.every(function(num) {
    return num > 10;
});
console.log("Todos são maiores que 10?", todosMaiores10); 
// Saída: true

/*
 EXEMPLO: find
Retorna o PRIMEIRO número que satisfaça a condição
Aqui, o primeiro múltiplo de 4 encontrado é o 20
*/
let primeiroMultiplo4 = numeros.find(function(num) {
    return num % 4 === 0;
});
console.log("Primeiro múltiplo de 4:", primeiroMultiplo4); 
// Saída: 20

/*
--- NOVOS MÉTODOS DE MANIPULAÇÃO ---
*/

const frase = "Use split, reverse e join";

/*
 EXEMPLO: split
Divide a string em um array usando o espaço como separador
*/
let palavras = frase.split(" ");
console.log("Array de palavras (split):", palavras); 
// Saída: ["Use", "split,", "reverse", "e", "join"]

/*
 EXEMPLO: reverse
Inverte a ordem dos elementos do array
ATENÇÃO: altera o array original
*/
palavras.reverse();
console.log("Array invertido (reverse):", palavras); 
// Saída: ["join", "e", "reverse", "split,", "Use"]

/*
 EXEMPLO: join
Junta os elementos do array em uma string
*/
let fraseInvertida = palavras.join(" ");
console.log("Frase invertida (join):", fraseInvertida); 
// Saída: "join e reverse split, Use"

/*
============================================================
 DICAS IMPORTANTES:

Arrays são estruturas dinâmicas — podem crescer ou diminuir.
Os índices começam em 0.
map, filter e reduce são essenciais para programação funcional.
forEach é ideal quando você só precisa executar ações, sem retorno.
some e every são eficientes, pois interrompem a execução cedo.
reverse() altera o array original — use com cuidado.
Esses métodos deixam o código mais limpo, legível e profissional.
São amplamente usados em React, Node.js e APIs REST.

/*
============================================================
*/





/*
==============================================
====== AULA 6: FUNÇÕES EM JAVASCRIPT ======
==============================================

 O QUE É UMA FUNÇÃO?

Uma função é um **bloco de código reutilizável** que pode ser chamado para executar uma **tarefa específica**. 

Ela serve para **organizar o código**, **evitar repetições**, e deixar o programa mais **limpo, modular e compreensível**.

============================================================
 1. COMO DECLARAR UMA FUNÇÃO
============================================================

Existem 3 formas principais de declarar funções em JavaScript:

Forma tradicional (declaração)
*/

function saudacao() {
  console.log("Olá, bem-vindo!");
}

saudacao(); // chamando a função

/*
 Função com parâmetros
Permite personalizar a execução
*/

function dizerOla(nome) { // nome é o parâmetro
  console.log("Olá, " + nome + "!");
}

dizerOla("Lucas"); // "Lucas" são os argumentos
dizerOla("Maria"); // "Maria" são os argumentos

/*
 Função que retorna valor
Usamos `return` para devolver um resultado
*/

function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);
console.log("Resultado da soma:", resultado);


/*
Argumentos podem ser funções: Chamadas de Callback, geralmente dão funções 
que ocorrem após algum evento.
*/

addEventListener('click', function(){
  console.log('clicou');
});

// A função possui 2 argumentos
// Primeira é a String 'click'
// Segunda é um função anônima



/*
Quando não definimos o return, ela irá retornar 'undefined'.
O código interno da função é executado normalmente, 
independente de existir valor de retorn ou não.
*/


function imc(peso,altura) {
  const imc = peso / (altura ** 2);
}

console.log(imc(80,1.80)); 

// Se uma função NÃO usar return, ela retorna undefined.
// Use return quando precisar reutilizar o resultado.



/*
============================================================
 2. EXPRESSÕES DE FUNÇÃO (ARMAZENADAS EM VARIÁVEIS)
============================================================

Você pode armazenar funções dentro de variáveis!
*/

const multiplicar = function (a, b) {
  return a * b;
};

console.log("Multiplicação:", multiplicar(4, 5));

/*
============================================================
 3. ARROW FUNCTIONS (FUNÇÕES DE SETA)
============================================================

Forma mais curta de escrever funções. Muito usada com `map`, `filter`, etc.
*/

const dividir = (a, b) => {
  return a / b;
};

console.log("Divisão:", dividir(10, 2));

/*
Se for uma função de uma linha só, você pode até omitir as chaves e o return:
*/

const dobro = x => x * 2;
console.log("Dobro de 6:", dobro(6));

/*
============================================================
 4. PARÂMETROS PADRÃO
============================================================

Você pode definir um valor padrão para um parâmetro:
*/

function apresentar(nome = "Visitante") {
  console.log("Olá, " + nome + "!");
}

apresentar();         // Olá, Visitante!
apresentar("Bruna");  // Olá, Bruna!

/*
============================================================
 5. ESCOPO DE VARIÁVEIS EM FUNÇÕES
============================================================

Variáveis declaradas dentro da função são **locais** (só existem lá dentro).
Variáveis fora da função são **globais**.
*/

let nomeGlobal = "Messi";

function mostrarNome() {
  let nomeLocal = "Cristiano";
  console.log("Nome local:", nomeLocal);
  console.log("Nome global (acessado de dentro):", nomeGlobal);
}

mostrarNome();
// console.log(nomeLocal);  ERRO: nomeLocal não existe aqui fora!

/*
============================================================
 6. FUNÇÕES ANINHADAS (Funções dentro de funções)
============================================================
*/

function operacao(a, b) {
  function somarInterno(x, y) {
      return x + y;
  }
  return somarInterno(a, b);
}

console.log("Soma com função aninhada:", operacao(2, 3));

/*
============================================================
 7. FUNÇÕES COMO VALORES (Funções de primeira classe)
============================================================

Em JavaScript, funções são **valores**. Você pode:
Atribuí-las a variáveis
Passá-las como argumentos
Retorná-las de outras funções
*/

function executar(outraFuncao) {
  outraFuncao(); // executa a função recebida
}

executar(function () {
  console.log("Executando função passada como argumento!");
});

/*
============================================================
 8. CALLBACKS E ASSINCRONIA (introdução)
============================================================

Funções passadas como argumento para outras funções são chamadas de **callbacks**.

Muito útil em eventos e operações assíncronas.
*/

function carregarPagina(callback) {
  console.log("Carregando...");
  callback(); // chamada da função quando "terminar"
}

carregarPagina(function () {
  console.log("Página carregada com sucesso!");
});

/*
============================================================
 9. FUNÇÕES RECURSIVAS (Chamando a si mesma)
============================================================

Uma função recursiva é aquela que **chama a si mesma** para resolver um problema, dividindo-o em partes menores e idênticas.

**Necessita de uma condição de parada (Caso Base)** para evitar um loop infinito (`Stack Overflow`).

 EXEMPLO: Cálculo de Fatorial (5! = 5 * 4 * 3 * 2 * 1)
*/

function calcularFatorial(n) {
    //  Condição de Parada (Caso Base): 0! sempre é 1.
    if (n === 0) {
        return 1;
    }
    
    //  Passo Recursivo: Chama a função com um número menor (n - 1)
    // até que o Caso Base seja atingido.
    return n * calcularFatorial(n - 1);
}

const resultadoFatorial = calcularFatorial(5);
console.log(`Fatorial de 5 (Recursão): ${resultadoFatorial}`); // Saída: 120

/*
============================================================
*/





/*
============================================================
===== AULA 7: OBJETOS EM JAVASCRIPT =====
============================================================

 O QUE SÃO OBJETOS?

Um objeto é uma estrutura de dados que agrupa informações relacionadas usando
pares chave:valor. Enquanto arrays usam índices numéricos, objetos usam nomes
descritivos para acessar os dados.

Objetos servem para:
✓ Guardar dados estruturados (dados de uma pessoa, produto, etc.)
✓ Agrupar propriedades e métodos relacionados
✓ Representar entidades do mundo real de forma organizada

EXEMPLO:
let pessoa = {
  nome: "Lucas",
  idade: 25,
  saudacao: function() { ... }
};

Aqui:
- "nome" e "idade" são PROPRIEDADES (dados)
- "saudacao" é um MÉTODO (função dentro do objeto)

============================================================
 1. CRIANDO UM OBJETO
============================================================

Para criar um objeto, use chaves {} com pares chave:valor dentro.
*/

// ======= EXEMPLO BÁSICO =======
let pessoa = {
  // Propriedades (dados)
  nome: "Lucas",
  idade: 25,
  profissao: "Desenvolvedor",
  email: "lucas@example.com",
  
  // Método (função dentro do objeto)
  saudacao: function() {
      return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
  
  // Outro método com arrow function
  seApresentar: () => {
      return "Sou um desenvolvedor!";
  }
};

console.log("Objeto completo:", pessoa);

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 2. ACESSANDO PROPRIEDADES (GET - Leitura)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Existem 2 formas de LER dados de um objeto:

DOT NOTATION (ponto) - MAIS COMUM E RECOMENDADO
   objeto.propriedade

 BRACKET NOTATION (colchetes) - QUANDO A CHAVE É DINÂMICA
   objeto["propriedade"]
   objeto[variavel]
*/

// ======= EXEMPLO 1: DOT NOTATION =======
console.log("Nome:", pessoa.nome);           // "Lucas"
console.log("Idade:", pessoa.idade);         // 25
console.log("Email:", pessoa.email);         // "lucas@example.com"

// ======= EXEMPLO 2: BRACKET NOTATION =======
console.log("Profissão:", pessoa["profissao"]); // "Desenvolvedor"

/*
QUANDO USAR CADA UM:
DOT NOTATION (.): quando você sabe o nome da propriedade
   - pessoa.nome
   
BRACKET NOTATION ([]): quando o nome da propriedade vem de uma variável
   - pessoa[variavel]
   - pessoa["nome-completo"] (nomes com hífen ou espaços)
*/

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 3. MODIFICANDO E ADICIONANDO PROPRIEDADES (SET)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Em JavaScript, objetos são DINÂMICOS. Você pode adicionar, modificar e
remover propriedades a qualquer momento!
*/

// ======= MODIFICANDO UMA PROPRIEDADE EXISTENTE =======
pessoa.idade = 26; // Muda de 25 para 26
console.log("Idade atualizada:", pessoa.idade); // 26

pessoa.profissao = "Desenvolvedor Senior"; // Muda a profissão
console.log("Profissão atualizada:", pessoa.profissao);

// ======= ADICIONANDO UMA NOVA PROPRIEDADE =======
pessoa.telefone = "(11) 98765-4321"; // Adiciona propriedade que não existia
console.log("Telefone adicionado:", pessoa.telefone);

pessoa.ativo = true; // Adiciona nova propriedade booleana
console.log("Ativo:", pessoa.ativo);

// ======= DELETANDO UMA PROPRIEDADE =======
delete pessoa.email; // Remove a propriedade "email"
console.log("Email após delete:", pessoa.email); // undefined

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CONCEITO CRÍTICO: REFERÊNCIA vs VALOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este é UM DOS CONCEITOS MAIS IMPORTANTES DO JAVASCRIPT!

TIPOS PRIMITIVOS (string, number, boolean) → CÓPIA DO VALOR
OBJETOS E ARRAYS → CÓPIA DA REFERÊNCIA (não é uma cópia real!)

EXEMPLO DO PROBLEMA:
*/

// ======= COM NÚMEROS (VALOR) =======
let numeroA = 10;
let numeroB = numeroA; // Cópia do valor
numeroB = 20;

console.log("NumeroA:", numeroA); // 10 (não mudou!)
console.log("NumeroB:", numeroB); // 20

// ======= COM OBJETOS (REFERÊNCIA) =======
let pessoaA = { nome: "Ana", idade: 25 };
let pessoaB = pessoaA; // NÃO é cópia, é uma referência!

pessoaB.idade = 30; // Muda age em pessoaB

console.log("PessoaA.idade:", pessoaA.idade); // 30 (MUDOU!)
console.log("PessoaB.idade:", pessoaB.idade); // 30

console.log("São a mesma coisa?", pessoaA === pessoaB); // true!

/*
POR QUÊ ISSO ACONTECE?

NÚMEROS:       
  pessoaA → [valor: 10]
  pessoaB → [valor: 10]

OBJETOS:       
  pessoaA → [endereço de memória: 0x1234]
  pessoaB → [endereço de memória: 0x1234]
  
Ambos apontam para O MESMO objeto!

COMO FAZER UMA CÓPIA REAL DE UM OBJETO?

Opção 1: Usar Object.assign()
*/

let usuario1 = { nome: "Carlos", idade: 30 };
let usuario2 = Object.assign({}, usuario1); // Cria uma cópia rasa

usuario2.idade = 35; // Modifica apenas usuario2

console.log("Usuario1.idade:", usuario1.idade); // 30 (não mudou)
console.log("Usuario2.idade:", usuario2.idade); // 35

/*
Opção 2: Usar Spread Operator (RECOMENDADO)
*/

let usuario3 = { nome: "Diana", idade: 28 };
let usuario4 = { ...usuario3 }; // Copia o objeto

usuario4.idade = 40;

console.log("Usuario3.idade:", usuario3.idade); // 28
console.log("Usuario4.idade:", usuario4.idade); // 40

/*
 IMPORTANTE: Essas são cópias RASAS (shallow copy)!
Se o objeto tem objetos dentro, ainda compartilham referência.
Para cópias PROFUNDAS (deep copy), use JSON ou bibliotecas como Lodash.
*/

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 4. COMPREENDENDO `this`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`this` é uma palavra especial que significa "O OBJETO ATUAL".

Quando você está dentro de um método, `this` se refere ao objeto que contém
esse método. Isso permite que o método acesse outras propriedades do objeto.

EXEMPLO:
*/

let conta = {
  titular: "João Silva",
  saldo: 1000,
  
  // Método que usa `this`
  sacar: function(valor) {
      if (valor <= this.saldo) {
          this.saldo -= valor;
          return `Saque de R$ ${valor} realizado! Novo saldo: R$ ${this.saldo}`;
      } else {
          return "Saldo insuficiente!";
      }
  },
  
  // Outro método que usa `this`
  depositar: function(valor) {
      this.saldo += valor;
      return `Depósito de R$ ${valor} realizado! Novo saldo: R$ ${this.saldo}`;
  },
  
  // Método que acessa várias propriedades com `this`
  extrato: function() {
      return `Titular: ${this.titular}\nSaldo: R$ ${this.saldo}`;
  }
};

console.log(conta.sacar(200));      // Novo saldo: 800
console.log(conta.depositar(500));  // Novo saldo: 1300
console.log(conta.extrato());       // Mostra dados da conta

/*
 CUIDADO COM ARROW FUNCTIONS!

Arrow functions (=>) NÃO têm seu próprio `this`.
Se você usar arrow function em um método, `this` vai se referir ao escopo
externo, não ao objeto!

ERRADO:
*/

let contaErrada = {
  saldo: 100,
  sacar: (valor) => {  //  ERRADO: arrow function
      this.saldo -= valor; // `this` NÃO é a conta!
  }
};

/*
CORRETO:
*/

let contaCorreta = {
  saldo: 100,
  sacar: function(valor) { // CORRETO: função normal
      this.saldo -= valor; // `this` é a conta
  }
};

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 5. OBJETOS ANINHADOS (NESTED OBJECTS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Objetos podem conter outros objetos (ou arrays) dentro deles.
Isso permite criar estruturas de dados mais complexas.
*/

let empresa = {
  nome: "TechCorp",
  fundacao: 2015,
  
  // Objeto aninhado: endereço
  endereco: {
      rua: "Rua das Flores, 123",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01234-567"
  },
  
  // Array de objetos: funcionários
  funcionarios: [
      { nome: "Ana", cargo: "Desenvolvedora", salario: 5000 },
      { nome: "Bruno", cargo: "Designer", salario: 4000 },
      { nome: "Carlos", cargo: "Gerente", salario: 6000 }
  ],
  
  // Método que usa dados aninhados
  informacoes: function() {
      return `${this.nome} fica em ${this.endereco.cidade}, ${this.endereco.estado}`;
  },
  
  // Método que percorre array de funcionários
  listarFuncionarios: function() {
      return this.funcionarios.map(f => f.nome);
  }
};

console.log("Empresa:", empresa.nome);                    // TechCorp
console.log("Cidade:", empresa.endereco.cidade);          // São Paulo
console.log("CEP:", empresa.endereco.cep);                // 01234-567
console.log("Primeira funcionária:", empresa.funcionarios[0].nome); // Ana
console.log(empresa.informacoes());                       // Mensagem com endereço
console.log("Funcionários:", empresa.listarFuncionarios()); // ["Ana", "Bruno", "Carlos"]

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 6. MÉTODOS ÚTEIS DO OBJETO (Object.)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JavaScript oferece vários métodos built-in para trabalhar com objetos.
Todos começam com `Object.` (maiúscula).
*/

let produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 10,
  categoria: "Eletrônicos"
};

// ======= Object.keys() - PEGA TODAS AS CHAVES =======
console.log("Chaves:", Object.keys(produto));
// Saída: ["nome", "preco", "estoque", "categoria"]

// ======= Object.values() - PEGA TODOS OS VALORES =======
console.log("Valores:", Object.values(produto));
// Saída: ["Notebook", 3500, 10, "Eletrônicos"]

// ======= Object.entries() - PEGA [chave, valor] =======
console.log("Entradas:", Object.entries(produto));
// Saída: [["nome", "Notebook"], ["preco", 3500], ["estoque", 10], ["categoria", "Eletrônicos"]]

// ======= USANDO ENTRIES COM LOOPS =======
for (let [chave, valor] of Object.entries(produto)) {
  console.log(`${chave}: ${valor}`);
}
// Mostra cada propriedade formatada

// ======= Object.assign() - MESCLA OBJETOS =======
let detalhes = { cor: "Preto", peso: "2kg" };
let produtoCompleto = Object.assign({}, produto, detalhes);

console.log("Produto completo:", produtoCompleto);
// Tem todas as propriedades de produto + detalhes

// ======= for...in - LOOP SOBRE CHAVES =======
for (let chave in produto) {
  console.log(`${chave}: ${produto[chave]}`);
}

// ======= Object.hasOwnProperty() - VERIFICA SE EXISTE UMA CHAVE =======
console.log("Tem 'nome'?", produto.hasOwnProperty("nome"));      // true
console.log("Tem 'marca'?", produto.hasOwnProperty("marca"));    // false

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 7. DESTRUCTURING (Desempacotamento)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Destructuring permite EXTRAIR dados de um objeto de forma rápida e limpa.

FORMA TRADICIONAL:
*/

let carro = { marca: "Toyota", modelo: "Corolla", ano: 2023 };

marca = carro.marca;
modelo = carro.modelo;
ano = carro.ano;

/*
FORMA MODERNA (COM DESTRUCTURING):
*/

let { marca: marcaCarro, modelo: modeloCarro, ano: anoCarro } = carro;
console.log(marcaCarro);  // "Toyota"

// Ou de forma ainda mais simples (se o nome for igual):
let { marca, modelo, ano } = carro;
console.log(marca);   // "Toyota"
console.log(modelo);  // "Corolla"
console.log(ano);     // 2023

// ======= COM VALORES PADRÃO =======
let { marca: marcaVeiculo, cor = "Branco" } = carro;
console.log(marcaVeiculo); // "Toyota"
console.log(cor);          // "Branco" (valor padrão, pois não existe)

// ======= DESTRUCTURING EM PARÂMETROS =======
function mostrarInfo({ nome, idade }) {
  console.log(`${nome} tem ${idade} anos`);
}

let pessoa2 = { nome: "Mariana", idade: 30 };
mostrarInfo(pessoa2); // Mariana tem 30 anos

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 8. SPREAD OPERATOR (...) - ESPALHAMENTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O spread operator (...) permite "espalhar" um objeto em outro.
Muito útil para copiar e mesclar objetos.
*/

let pessoa3 = { nome: "Roberto", idade: 35 };
let pessoaComEmail = { ...pessoa3, email: "roberto@example.com" };

console.log(pessoaComEmail);
// { nome: "Roberto", idade: 35, email: "roberto@example.com" }

// ======= MESCLANDO MÚLTIPLOS OBJETOS =======
let endereco1 = { rua: "Rua A", numero: 100 };
let endereco2 = { cidade: "São Paulo", estado: "SP" };
let enderecoCompleto = { ...endereco1, ...endereco2 };

console.log(enderecoCompleto);
// { rua: "Rua A", numero: 100, cidade: "São Paulo", estado: "SP" }

// ======= SOBRESCREVENDO PROPRIEDADES =======
let usuario = { nome: "João", idade: 25 };
let usuarioAtualizado = { ...usuario, idade: 26, ativo: true };

console.log(usuarioAtualizado);
// { nome: "João", idade: 26, ativo: true }

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 9. TRABALHANDO COM JSON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JSON (JavaScript Object Notation) é um formato de texto para trocar dados.
É muito usado em APIs, armazenamento e comunicação entre sistemas.

JSON é praticamente um objeto JavaScript, mas como TEXTO.

DIFERENÇAS:
- JavaScript: { nome: "Lucas", ativo: true }
- JSON: {"nome": "Lucas", "ativo": true}

As chaves DEVEM estar entre aspas duplas em JSON!
*/

// ======= OBJETO JAVASCRIPT →  STRING JSON =======
let usuario1Js = {
  nome: "Ana",
  idade: 28,
  hobbies: ["leitura", "programação", "música"]
};

let usuarioJSON = JSON.stringify(usuario1Js);
console.log("String JSON:", usuarioJSON);
// Saída: {"nome":"Ana","idade":28,"hobbies":["leitura","programação","música"]}

// ======= STRING JSON → OBJETO JAVASCRIPT =======
let jsonTexto = '{"nome":"Bruno","email":"bruno@example.com","ativo":true}';
let usuarioObjeto = JSON.parse(jsonTexto);

console.log("Objeto:", usuarioObjeto);
console.log("Nome:", usuarioObjeto.nome); // "Bruno"
console.log("Email:", usuarioObjeto.email); // "bruno@example.com"

// ======= EXEMPLO PRÁTICO: SALVANDO E CARREGANDO =======
let dados = {
  usuario: "Carlos",
  pontos: 1500,
  nivel: 5
};

// Salva como string
let dadosSalvos = JSON.stringify(dados);
console.log("Salvo:", dadosSalvos);

// Carrega de volta
let dadosCarregados = JSON.parse(dadosSalvos);
console.log("Carregado:", dadosCarregados);
console.log("Usuário:", dadosCarregados.usuario); // "Carlos"

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 10. CONSTRUCTOR FUNCTIONS (Criando "classes" de objetos)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Constructor functions são funções que criam objetos com a mesma estrutura.
É como um "molde" ou "template" para objetos.

Use `new` para criar uma instância!
*/

// ======= DEFININDO UM CONSTRUCTOR =======
function Livro(titulo, autor, ano, paginas) {
  // `this` se refere ao novo objeto sendo criado
  this.titulo = titulo;
  this.autor = autor;
  this.ano = ano;
  this.paginas = paginas;
  
  // Método
  this.informacoes = function() {
      return `"${this.titulo}" de ${this.autor} (${this.ano})`;
  };
}

// ======= CRIANDO INSTÂNCIAS =======
let livro1 = new Livro("1984", "George Orwell", 1949, 328);
let livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, 1216);

console.log(livro1.informacoes()); // "1984" de George Orwell (1949)
console.log(livro2.titulo); // O Senhor dos Anéis
console.log(livro2.paginas); // 1216

/*
NOTA: Hoje em dia, JavaScript tem `class` que é a forma moderna de fazer isso.
Mas constructors ainda são usados e importantes de entender!
*/

/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                           RESUMO RÁPIDO - AULA 7                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║ OBJETOS GUARDAM DADOS ESTRUTURADOS em {chave: valor}                         ║
║ USE DOT NOTATION (.propriedade) para acessar                                 ║
║ USE BRACKET NOTATION ([chave]) quando a chave é dinâmica                     ║
║                                                                              ║
║  OBJETOS SÃO REFERÊNCIAS: {...obj} faz cópia, obj = obj2 compartilha         ║
║                                                                              ║
║ `this` DENTRO DE MÉTODOS se refere ao objeto atual                           ║
║  NÃO USE arrow function em métodos (perde `this`)                            ║
║                                                                              ║
║ Object.keys(), Object.values(), Object.entries() são muito úteis             ║
║ DESTRUCTURING: let {nome, idade} = usuario (código limpo)                    ║
║ SPREAD OPERATOR: {...obj1, ...obj2} (mescla objetos)                         ║
║                                                                              ║
║ JSON.stringify() transforma objeto em texto                                  ║
║ JSON.parse() transforma texto em objeto                                      ║
║                                                                              ║
║ CONSTRUCTOR FUNCTIONS (function Pessoa() {}) criam "moldes"                  ║
║ USE `new` ao chamar constructor: new Pessoa("João")                          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
*/
