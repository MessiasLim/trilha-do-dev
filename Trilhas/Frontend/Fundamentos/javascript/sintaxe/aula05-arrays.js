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
