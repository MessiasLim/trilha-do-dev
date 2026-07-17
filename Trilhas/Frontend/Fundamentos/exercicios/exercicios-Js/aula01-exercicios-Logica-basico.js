// =====================================================================================
// ======================= Nível 1: INICIANTE em JS (30 Questões) ======================
// =====================================================================================

    // Foco: Variáveis (let, const, var), Tipos Primitivos, Operadores, Condicionais Simples (if/else), Laços (for, while).

    // Bloco 1: Variáveis, Tipos e Operadores

    // 1 - Crie um script que declare as variáveis nome, idade e cidade usando const e imprima uma frase utilizando concatenação de strings (template literal).   !

    // const nome = 'Messias',
    // idade = 18,
    // cidade = 'Araioses';
    // console.log(`eu sou ${nome} tenho ${idade} e sou de ${cidade}`);



    // 2 - Declare duas variáveis numéricas e imprima o resultado da soma, subtração, multiplicação, divisão e módulo (%) entre elas. !

    //  const num1 = 8,
    // num2 = 2;
    // console.log(`o resultado da soma de ${num1} e ${num2} é ${num1 + num2}`);
    // console.log(`o resultado da subtração de ${num1} e ${num2} é ${num1 - num2}`);
    // console.log(`o resultado da multiplicação de ${num1} e ${num2} é ${num1 * num2}`);
    // console.log(`o resultado da divisão de ${num1} e ${num2} é ${num1 / num2}`);
    // console.log(`o resultado da modolo de ${num1} e ${num2} é ${num1 % num2}`);



    // 3 - Utilize o prompt() para pedir a base e a altura de um retângulo e calcule sua área. !

    // const base = parseInt(prompt('digite a base'));
    // const altura = parseInt(prompt('digite a altura'));
    // let area = base * altura;
    // alert(`a area é ${area}`);



    // 4 - Crie uma variável peso e uma variável altura. Calcule o IMC e imprima o resultado no console. !

    // let peso = 82,
    // altura = 1.74;
    // let imc = peso / (altura*altura);
    // console.log("o imc é: " + imc);



    // 5 - Converta a string "150" para um número inteiro e realize uma soma com o número 50. !

    // let string = "150";
    // console.log(typeof +string);



    // 6 - Declare uma variável numero e use os operadores de incremento (++) e decremento (--). !

    // let num = 5;
    // console.log(--num);
    // console.log(++num);



    // 7 - Crie um template literal que inclua uma expressão matemática, por exemplo: A soma de 5 + 3 é ${5 + 3}. !

    // const num1 = 5,
    // num2 = 5;
    // const resultado = `a soma de ${num1} + ${num2} é ${num1+num2}`;
    // console.log(resultado);



    // 8 - Peça ao usuário o valor total de uma compra e calcule o valor com 10% de desconto.  !

    // const valor = parseInt(prompt("Digite o valor de um produto"));
    // let valordesconto = valor*0.10;
    // alert(`valor da compra: ${valor}R$ \ncom o desconto de: ${valordesconto}R$ \nfica com o valor final de: ${valor - valordesconto}R$`);
    
    

    // 9 - Declare um array com 4 cores diferentes e acesse e imprima a segunda cor. !

    // const cores = ['vermelho', 'verde', 'preto', 'azul'];
    // console.log(cores[1]);



    // 10 - Crie um objeto carro com as propriedades marca e ano, e imprima o ano do carro. !

    // const carro = {
    //     marca: 'BMW',
    //     ano: 2025,
    // }

    // console.log(carro.ano);


// ============================================
    // Bloco 2: Condicionais e Controle de Fluxo
// ============================================


    // 11 - Peça um número e use um if/else para determinar se ele é positivo ou negativo (0 é positivo). !

    // const num = parseInt(prompt("digite um número!"));
    // if (num >=0) {
    //     alert(`o número ${num} e positivo.`);
    // } else {
    //     alert(`o número ${num} é negativo`);
    // }
    //const res = parseInt(prompt("1-branco ; 2-preto"));
    //if (res == 1) {
    // const a = parseInt(prompt("fala ai"));
    //if (a == Number){
    //if (a >= 0 ){
    //      alert("positivo");
        
    //}
    //else{
    //    alert("negativo");
    //}
    //}else{
    //alert("Não é um numero não seu porra")
    //}
    //}else{
    //    alert("você não pode usar essa aplicação")
    //}
    //Use o operador ternário (? :) para verificar se um número é par ou ímpar e imprima a resposta. !

    // const num = 8;
    // let resultado = (num%2 === 0) ? "par" : "impar";
    // console.log(resultado)



    // 12 - Peça a idade e use um if/else if/else para classificar: "Criança" (0-12), "Adolescente" (13-17), "Adulto" (>=18). !

    // const idade = parseInt(prompt("digite sua idade!"));
    // if ((idade >= 0) && (idade<=12)) {
    //     alert("você é criança.")
    // } else if((idade>=13) && (idade<=17)) {
    //     alert("você é adolescente.");
    // } else if(idade>=18){
    //     alert("você é adulto.");
    // } else{
    //     alert("digite uma idade válida!");
    // }



    // 13 - Peça duas notas. Se a média for maior ou igual a 7, imprima "Aprovado"; caso contrário, "Reprovado". !

    // const nota1 = parseInt(prompt("digite a primeira nota"));
    // const nota2 = parseInt(prompt("digite a segunda nota"));
    // let media = (nota1+nota2)/2;
    // if (media>=7) {
    //     alert("aprovado.");
    // } else {
    //     alert("reprovado.");
    // }



    // 14 - Peça um dia da semana (número de 1 a 7) e use um bloco switch para imprimir o nome correspondente.  !

    // const dia = parseInt(prompt("digite um dia da semana."));
    // switch (dia) {
    //     case 1:
    //         alert("hoje é domingo");
    //         break;

    //     case 2:
    //         alert("hoje é segunda");
    //         break;
        
    //     case 3:
    //         alert("hoje é terça");
    //         break;

    //     case 4:
    //         alert("hoje é quarta");
    //         break;

    //     case 5:
    //         alert("hoje é quinta");
    //         break;

    //     case 6:
    //         alert("hoje é sexta");
    //         break;

    //     case 7:
    //         alert("hoje é sábado");
    //         break;

    //     default:
    //         alert("dia invalido")
    //         break;
    // }



    // 15 - Verifique se um usuário pode acessar um site. Ele deve ser maiorDeIdade E ter possuiPermissao (ambas booleanas). !

    // const idade = 18;
    // const permicao = true;

    // if (idade>=18 && permicao === true) {
    //     console.log("você pode acessar o site");
    // } else {
    //     console.log("você não pode acessar o site");
    // }



    // 16 - Verifique se um dia da semana é Sábado OU Domingo para imprimir "Fim de Semana". !

    // const dia = "terça";
    // if (dia === "domingo" || dia === "sábado") {
    //     console.log("é fim de semana.")
    // } else {
    //     console.log("não é fim de semana.")
    // }



    // 17 - Leia três números e use aninhamento de if/else para determinar qual é o maior. !

    // const num1 = 15;
    // const num2 = 7;
    // const num3 = 9;
    // let numMaior;
    // if (num1>=num2 && num1>=num3) {
    //     numMaior = num1;
    // } else if (num2>=num1 && num2>=num3) {
    //     numMaior = num2;
    // } else {
    //     numMaior = num3;
    // }

    // console.log(`o número ${numMaior} é o maior número.`);





    // 18 - Simule o login. Peça username e senha fixas. Imprima "Login Efetuado" se ambos estiverem corretos. !

    // alert("====== Bem-vindo faça seu login ======")
    // const gmail = prompt("informe seu Gmail");
    // const senha = parseInt(prompt("digite sua senha"));

    // if (gmail === "messias@gmail.com" && senha === 12345) {
    //     alert("Login Efetuado");
    // } else {
    //     alert("Login não efetuado");
    // }



    // 19 - Peça um número. Use o operador de coalescência nula (??) para definir um valor padrão de 10 caso o usuário não digite nada. NÃO  POR NÃO SABER

    // let num = prompt("digite um numero");
    // let numPadrao;
    // if (num === null || num === "") {
    //     numPadrao = "10";
    // } else {
    //     numPadrao = num;
    // }

    // let numero = parseInt(numPadrao);
    // alert(`O número final é: ${numero}`);




// ============================================
    // Bloco 3: Laços e Funções Simples
// ============================================


    // 20 - Use um laço for para imprimir todos os números de 1 a 10. 

    // for (let i = 0; i <= 10; i++) {
    //     console.log(i);
        
    // }



    // 21 - Use um laço while para fazer uma contagem regressiva de 5 a 1. 

    // let num = 5;
    // while (num>=0) {
    //     console.log(num--);
    // }



    // 22 - Crie uma função chamada saudar que recebe um nome como parâmetro e retorna "Olá, [Nome]!". 

    // function saudar(nome){
    //     return `olá ${nome}`;
    // }
    // console.log(saudar("messias"));



    // 23 - Crie uma função anônima que calcula a área de um círculo (use π≈3.14) e a chame. 

    // const calcula = (raio)=>{
    //     const pi = 3.14;
    //     return pi*(raio**2);
    // }
    // console.log(calcula(10).toFixed(1));



    // 24 - Crie uma arrow function que recebe um número e retorna seu quadrado. 

    // const quadrado = (num) =>{
    //     return num**2;
    // }
    // console.log(quadrado(4));



    // 25 - Itere sobre um array de números usando o método forEach e imprima cada elemento. 

    // const numeros = [1,2,3,4,5];
    // numeros.forEach(function(num, index){
    //     console.log(`o numero ${num} esta ${index}`)
    // });





    // 26 - Peça números ao usuário até que ele digite 0. Use um laço do/while para garantir que o bloco rode pelo menos uma vez. 

    // let num;
    // do {
    //     num = parseInt(prompt("digite um numero"));
    //     if (num !== 0) {
    //     alert(`Você digitou: ${num}. Continuando...`);
    //     }
        
    // } while (num !== 0); 

    // console.log("Você digitou 0. O laço terminou.");



    // 27 - Crie um laço for para iterar de 1 a 20, mas use continue para pular a impressão dos números múltiplos de 3. ,MAS PRESTE ATEÇÃO NO FOR

    // for (let i = 1; i <= 20; i++) {
    //     if(i % 3 === 0){
    //     continue;
    //     }
    //     console.log(i);
    // }



    // 28 - Crie uma função que receba um array de números e retorne a soma de todos os elementos, usando um laço for. 

    // let array = [1,2,3,4,5];
    // function soma(array){
    //     let soma = 0;
    //     for (let i = 0; i < array.length; i++) {
    //         soma += array[i];
    //     }
    //     return soma;
    // }
    // let total = soma(array);
    // console.log(total);



    // 29 - Crie um array de 5 strings. Use um laço for...of para imprimi-las em maiúsculas. 

    // let strings = ["a","b","c","d","e"];
    // for (let string of strings) {
    //     console.log(string.toUpperCase());
    // }

    
// ==================== ESTUDE MAIS SOBRE FOR E SUA LOGICA ====================





// =====================================================================================
// ===================== Nível 2: INTERMEDIÁRIO em JS (30 Questões) ====================
// =====================================================================================


    // Foco: Funções Avançadas, High-Order Functions (map, filter, reduce), Manipulação de Arrays/Objetos, Closures.





// ===============================================
    // Bloco 4: Funções de Ordem Superior e Arrays
// ===============================================


    // 30 - Crie uma função que recebe uma callback function e um nome, e executa a callback passando o nome como argumento. 

    // addEventListener("click",function(){
    //     console.log("messias");
    // });




    // 31 - Use o método map em um array de números para retornar um novo array com todos os valores multiplicados por 2. , MAS ESTUDE MAIS ISSO!

    // let array = [1,2,3,4,5];
    // let dobro = array.map(function(i){
    //     return (i*2);
    // });
    // console.log(dobro);



    // 32 - Use o método filter em um array de idades para retornar apenas as idades maiores que 18. 

    // let array = [17,24,39,4,15];
    // let maiorDeIdade = array.filter(function(i){
    //     return (i>=18);
    // });
    // console.log(maiorDeIdade);



    // 33 - Use o método reduce em um array de preços para calcular o valor total da compra. , MAS ESTUDE UM POUCO MAIS

    // let array = [9,14,17];
    // let total = array.reduce(function(acumulador,valorTotal){
    //     return acumulador + valorTotal;
    // }, 0);
    // console.log(total); // 40

    



    // 34 - Dada uma string com palavras separadas por espaço, use split e join para inverter a ordem das palavras (Ex: "Eu sou JavaScript" → "JavaScript sou Eu"). 

    // let strings = "Eu sou Messias";
    // let palavras = strings.split(" ");
    // palavras.reverse();
    // let palavrasInversas = palavras.join(" ");
    // console.log(palavrasInversas);




    // 35 - Use o método find em um array de objetos produtos para encontrar e retornar o produto com o id: 3. 

    // let produtos = [
    //     {id: 1, produto: "notebook", preco: 2700},
    //     {id: 2, produto: "mouse", preco: 200},
    //     {id: 3, produto: "teclado", preco: 100},
    //     {id: 4, produto: "monitor", preco: 700},
    // ];

    // let retornar = produtos.find(function(produt){
    //     return produt.id === 3;
    // });
    // console.log(retornar);



    // 36 - Implemente a função que calcula o fatorial de um número usando recursão (função que chama a si mesma). 

    // function calcularFatorial(n){
    //     if (n === 0) {
    //         return 1;
    //     }

    //     return n * calcularFatorial(n-1);
    // }
    // let resultado = calcularFatorial(4);
    // console.log("o fatorial de 4 é: " + resultado);



    // 37 - Crie uma função que receba uma lista de nomes e use o método sort para ordená-los em ordem alfabética. 

    // let nomes = ["Messias", "Lucas", "Ruan", "Davi", "Itallo", "Carlos"];
    // function ordenarNomes(nomesBaguncados){
    //     nomesBaguncados.sort();
    //     return nomesBaguncados;
    // }
    // let nomesArrumados = ordenarNomes(nomes);
    // console.log(nomesArrumados);



    // 38 - Crie uma função que verifique se uma palavra é um palíndromo (lida igual de trás para frente) ignorando o case.

    // function palavrasInversas(palavra){
    //     let letras = palavra.split('')
    //     let letrascontraria = letras.reverse();
    //     let contraria = letrascontraria.join('');
    //     if (palavra === contraria) {
    //         return `a palavra ${palavra} pode ser lida de de trás pra frente, e fica ${palavra}`;
    //     }
    //     else{
    //         return `a palavra ${palavra} não se pode ler de tras para frente`;
    //     }
    // }
    // console.log(palavrasInversas("Messias"));
    // console.log(palavrasInversas("SUBINOONIBUS"));



    // 39 - Implemente uma função que receba um array de números e retorne um novo array contendo apenas os números que são primos. ESTUDE TUDO ANTES DE CONTINUAR

    // let numeros = [1,2,3,4,5,6,7];
    // function ehPrimos(numero){
    //     if (numero<=1) {
    //         return false;
    //     }
    //     for (let i = 2; i * i <= numero; i++) {
    //         if (numero % i === 0) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // function filtrarPrimos(listaNumeros){
    //     return listaNumeros.filter(ehPrimos);
    // }

    // console.log(filtrarPrimos(numeros));

    // let numeros = [1,2,3,4,5,6,7];
    // function ehPrimos(numero){
    //     if (numero<0) {
    //         return false;
    //     }
    //     if (numero % 2 === 0) {
    //         return false;
    //     }
    //     return true;
    // }

    // function filtrarPrimos(listaNumeros){
    //     return listaNumeros.filter(ehPrimos);
    // }

    // console.log(filtrarPrimos(numeros));




// ============================================
    // Bloco 5: Manipulação de Objetos e Dados
// ============================================

    // 40 - Crie um array de 10 números e use um algoritmo manual para encontrar e retornar o maior e o menor valor.

    // let numeros = [12,72,37,41,53,60,7];
    // let numeroMaior = numeros[0],
    // numeroMenor = numeros[0];
    // for (let i = 0; i < numeros.length; i++) {
    //     if (numeros[i]>numeroMaior) {
    //         numeroMaior = numeros[i];
            
    //     } else if (numeros[i]<numeroMenor) {
    //         numeroMenor = numeros[i];
    //     }
        
    // }
    //  console.log("\nRESULTADO FINAL")

    // const numeroMaior = Math.max(...numeros);
    // const numeroMenor = Math.min(...numeros);

    // console.log(`Maior número: ${numeroMaior}`);
    // console.log(`Menor número: ${numeroMenor}`);


    // 41 - Crie um objeto aluno com as propriedades nome e notas (array). Use reduce nas notas para calcular e retornar a média do aluno. 

    // const aluno = {
    //     nome: "Messias Lima",
    //     idade: 19,
    //     notas: [10, 8.5, 9]
    // }
    // let mediaNotas = aluno.notas.reduce((acc,total) => {
    //     return acc+total;
    // }, 0);
    // console.log(`A média das notas de ${aluno.nome} é ${(mediaNotas/aluno.notas.length).toFixed(1)} `);



    // 42 - Crie uma função que receba dois arrays e retorne um novo array contendo apenas os elementos que são comuns a ambos (interseção). 

   // versão feita por Messias
    // const array1 = [1,2,4,6,8,9];
    // const array2 = [0,2,5,6,7,9];
    // function novoArray(lista1, lista2){
    //     let newArray = [];
    //     for (let i = 0; i < lista1.length; i++) {
    //         let element = lista1[i];
    //         if (lista2.includes(element)) {
    //             newArray.push(element);
    //         }
    //     }
    //     return newArray;
    // }
    // console.log(novoArray(array1,array2));

    // let intersecao = array1.filter(item => array2.includes(item));
    // console.log(intersecao);
    
     
    //versão feita por Messias
    // const arrayNovo = {
    //     Array1: [1,2,4,6,8,9],
    //     Array2: [1,3,4,5,7,8],
    //     novoArray: (listaA, listaB) => {
    //         let newArray = [];
    //         for (let i = 0; i < listaA.length; i++) {
    //         let element = listaA[i];
    //             if (listaB.includes(element)) {
    //                 newArray.push(element);
    //             }
    //         }
    //         return newArray;
    //     }
    // }
    // console.log(arrayNovo.novoArray(arrayNovo.Array1, arrayNovo.Array2));
    
    // //versão feita pela IA
    // const dados = {
    //     listaA: [1, 2, 4, 6, 8, 9],
    //     listaB: [1, 3, 4, 5, 7, 8]
    // };

    // const intersecao = dados.listaA.filter(item => dados.listaB.includes(item));

    // console.log(intersecao); // Resultado: [1, 4, 8]
        

    


    // 43 - Use a desestruturação de objeto ({}) para extrair as variáveis titulo e autor de um objeto livro. 

    // const livro = {
    //     autor: "Messias",
    //     titulo: "A vida"
    // }
    // let {autor,titulo} = livro;
    // console.log(autor,titulo);
    



    // 44 - Use a desestruturação de array ([]) para trocar os valores de duas variáveis sem usar uma variável temporária.

    // let num = [1,2,3,4,5];
    // console.log(num);
    // console.log("--------------");
    // [num[0],num[4]] = [num[4],num[0]];
    // console.log(num);
    
    
    



    // 45 - Crie uma função que use parâmetros de descanso (...) para somar uma quantidade indefinida de números.

    // function somar(...numeros){
    //     let total = 0;
    //     for (let numero of numeros) {
    //         total += numero;
    //     }
    //     return total;
    // }
    // console.log(somar(1,2,3));
    



    // 46 - Crie uma função que receba um objeto e retorne um novo objeto com as chaves e valores invertidos (Ex: {a: 1} \to {1: 'a'}). !

    // function inverterValoresChaves(objeto){
    //     const novoObjeto = {};
    //     for (const chave in objeto) { // a chave e as chaves do objeto
    //         const valorOriginal = objeto[chave]; // mostra os valores do objeto
            
    //         novoObjeto[valorOriginal]=chave; // aqui vc coloca os valores como chaves e depois atribui as chaves
    //         //console.log(valorOriginal); // mostra os valores
    //         //console.log(chave); // mostrar as chaves
    //     }
    //     return novoObjeto;
    // }
    
    // const objetoTeste = {
    //     a:1,
    //     b:3,
    //     c:5
    // }

    // const obj = inverterValoresChaves(objetoTeste);

    // console.log("Ojeto original:\n",objetoTeste);
    // console.log("======================");
    // console.log("O objeto com os valores inertidos:\n",obj);
    
    


    // 47 - Crie um Closure (função interna que acessa o escopo da função externa) para criar um contador que pode ser incrementado e retornado. ESTUDE!

    // function criarContador() {
    //     let contador = 0; 
        
    //     // Função interna que retorna
    //     return () => {
    //         contador++;
    //         return contador;
    //     };
        
    // }
    // const closure = criarContador();
    // console.log(closure());
    // console.log(closure());
    // console.log(closure());



    // 48 - Dada uma lista de objetos pessoas com a chave cidade, use reduce para retornar um objeto que conta quantas pessoas há em cada cidade (Ex: { 'SP': 2, 'RJ': 1}). ESTUDE O REDUCE!!

    // const lista = [
    //     {
    //         nome: "messias", cidade: "Araioses"
    //     },
    //     {
    //         nome: "lucas", cidade: "Araioses"
    //     },
    //     {
    //         nome: "davi", cidade: "São Luís"
    //     },
    //     {
    //         nome: "itallo", cidade: "São Luís"
    //     },
    //     {
    //         nome: "ruan", cidade: "Teresina"
    //     },
    //     {
    //         nome: "carlos", cidade: "Teresina"
    //     },
    //     {
    //         nome: "ana", cidade: "Araioses"
    //     },
    //     {
    //         nome: "bia", cidade: "São Luís"
    //     }
    // ]

    // const qntCidades = lista.reduce((acc,item) => {
    //     const city = item.cidade;
    //     if (!(city in acc)) {
    //         acc[city] = 1;
    //     } else {
    //         acc[city]++;
    //     }            
    //     return acc9;
    // }, {})

    // console.log(qntCidades);
    
    
    

   

    // 49 - Implemente uma função de Busca Sequencial em um array de objetos, buscando por um valor específico em uma de suas propriedades. REVISE TUDO O QUE NÃO SABE ANTES DE AVANÇAR!!
   
    // const lista = [
    //     {
    //         nome: "messias", cidade: "Araioses"
    //     },
    //     {
    //         nome: "lucas", cidade: "Araioses"
    //     },
    //     {
    //         nome: "davi", cidade: "São Luís"
    //     },
    //     {
    //         nome: "itallo", cidade: "São Luís"
    //     },
    //     {
    //         nome: "ruan", cidade: "Teresina"
    //     },
    //     {
    //         nome: "carlos", cidade: "Teresina"
    //     },
    //     {
    //         nome: "ana", cidade: "Araioses"
    //     },
    //     {
    //         nome: "bia", cidade: "São Luís"
    //     }
    // ]
    
    // function buscaSequencial(array,chave,valor){
    //     const obj = []
        
    //     for (let i = 0; i < array.length; i++) {
    //         if(array[i][chave]===valor){

    //             obj.push(array[i]);
    //         }

            
    //     }
    //     return obj;

    // }
    // console.log(buscaSequencial(lista,"cidade","Araioses"));
    



// ======================================================
    // Bloco 6: Matrizes, Assincronicidade Básica e ES6+
// ======================================================



// 50 - Crie uma função que recebe um array de números e retorna um novo array sem números duplicados (use Set). NÃO SABIA!

// const lista = [1,2,3,4,5,5,6,7,7,8,9,9];
// function semDuplicatas(array){
//     return [...new Set(array)];
// }

// console.log(semDuplicatas(lista)); // [0, 1, 2, 4, 5]




// 51 - Crie uma matriz 3×3 (array de arrays). Itere sobre ela usando laços aninhados e calcule a soma de todos os elementos.






// 52 - Crie uma função que simule um atraso usando setTimeout e imprima uma mensagem após 2 segundos.







// 53 - Crie uma Promise que resolve com a mensagem "Sucesso!" se um número aleatório for maior que 0.5, e rejeita caso contrário.






// 54 - Crie um generator function (function*) que gere a sequência de números ímpares (1, 3, 5, 7...).






// 55 - Use o operador spread (...) para concatenar dois arrays e adicionar um novo elemento ao mesmo tempo.






// 56 - Crie uma função que recebe um array de objetos e o método de ordenação ('asc' ou 'desc') e ordena os objetos por uma propriedade específica (Ex: nome).






// 57 - Crie uma função que recebe um número inteiro e o converte para sua representação em binário (string).






// 58 - Implemente o algoritmo para calcular o Máximo Divisor Comum (MDC) entre dois números (pode ser com while ou recursão).






// 59 - Crie uma função que recebe um valor de saque e retorna um objeto com a quantidade mínima de notas de 100, 50, 10 e 1, simulando um caixa eletrônico.






// =========================================
    // Nível 3: AVANÇADO em JS (10 Questões)
// =========================================


// 60 - Crie uma class Pessoa com um construtor que inicialize nome e idade. Adicione um método apresentar() que imprima os dados.






// 61 - Crie uma class ContaBancaria com as propriedades saldo e os métodos depositar, sacar e transferir (para outra instância de ContaBancaria). O saque deve validar o saldo.






// 62 - Crie uma subclasse Aluno que extends Pessoa e adicione a propriedade matricula. Sobrescreva o método apresentar().






// 63 - Implemente a estrutura de dados Pilha (Stack) usando uma class e métodos push, pop e peek.






// 64 - Crie uma class Fila (Queue) com métodos enqueue (adicionar) e dequeue (remover).






// 65 - Implemente um algoritmo para verificar se uma expressão com parênteses, colchetes e chaves está balanceada, usando a classe Pilha (Stack) da questão 64.






// 66 - Crie uma função construtora (função tradicional usada com new) para criar objetos Produto.






// 67 - Implemente um Singleton Pattern para garantir que apenas uma instância de uma classe seja criada.






// 68 - Use Object.freeze() para criar um objeto imutável e tente modif




// icá-lo para observar o comportamento.






// 69 - Crie uma classe base Animal e duas classes que a herdam: Cachorro e Gato, cada uma com um método emitirSom diferente.
    
