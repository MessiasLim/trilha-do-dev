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


