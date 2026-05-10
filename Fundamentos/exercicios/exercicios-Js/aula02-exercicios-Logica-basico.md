# Exercícios de Lógica Básica em JavaScript
> Este arquivo contém uma série de exercícios progressivos para praticar os fundamentos da lógica de programação usando JavaScript. Os exercícios abrangem desde conceitos básicos como variáveis e operadores, até tópicos mais avançados como funções, arrays e objetos.


## 1. Declaração de Variáveis e Impressão
Fácil  
Tópicos: Variáveis, Strings, Template Literals  

Dica: Use `const` para declarar variáveis imutáveis e template literals para concatenação elegante.  

Crie um script que declare as variáveis `nome`, `idade` e `cidade` usando `const` e imprima uma frase utilizando concatenação de strings (template literal).  

Exemplo:  
Entrada: nome = "João", idade = 25, cidade = "São Paulo"  
Saída: "Olá, meu nome é João, tenho 25 anos e moro em São Paulo."  

Restrições:  
- Use apenas `const` para as declarações.  
- A saída deve ser uma string formatada.


---


## 2. Operações Matemáticas Básicas
Fácil  
Tópicos: Operadores Aritméticos  

Dica: Declare variáveis numéricas e use os operadores +, -, *, /, %.  

Declare duas variáveis numéricas e imprima o resultado da soma, subtração, multiplicação, divisão e módulo (%) entre elas.  

Exemplo:  
Entrada: a = 10, b = 3  
Saída: Soma: 13, Subtração: 7, Multiplicação: 30, Divisão: 3.333..., Módulo: 1  

Restrições:  
- As variáveis devem ser números.  
- Imprima cada operação em uma linha separada.


---


## 3. Cálculo da Área de um Retângulo
Fácil  
Tópicos: Entrada do Usuário, Cálculos  

Dica: Use `prompt()` para entrada e `console.log()` para saída.  

Utilize o `prompt()` para pedir a base e a altura de um retângulo e calcule sua área.  

Exemplo:  
Entrada: base = 5, altura = 10  
Saída: 50  

Restrições:  
- Converta as entradas para números.  
- A área é base * altura.


---


## 4. Cálculo do IMC
Fácil  
Tópicos: Variáveis, Cálculos  

Dica: IMC = peso / (altura * altura).  

Crie uma variável `peso` e uma variável `altura`. Calcule o IMC e imprima o resultado no console.  

Exemplo:  
Entrada: peso = 70, altura = 1.75  
Saída: 22.86  

Restrições:  
- Use números decimais para altura.  
- Imprima com duas casas decimais.


---


## 5. Conversão de String para Número
Fácil  
Tópicos: Conversão de Tipos  

Dica: Use `parseInt()` ou `Number()` para conversão.  

Converta a string "150" para um número inteiro e realize uma soma com o número 50.  

Exemplo:  
Entrada: string = "150", numero = 50  
Saída: 200  

Restrições:  
- A string deve conter apenas dígitos.  
- Imprima o resultado da soma.


---


## 6. Operadores de Incremento e Decremento
Fácil  
Tópicos: Operadores  

Dica: Use ++ e -- para modificar variáveis.  

Declare uma variável `numero` e use os operadores de incremento (++) e decremento (--).  

Exemplo:  
Entrada: numero = 5  
Saída: Após incremento: 6, Após decremento: 5  

Restrições:  
- Mostre o valor antes e depois das operações.


---


## 7. Template Literal com Expressão
Fácil  
Tópicos: Template Literals  

Dica: Use `${}` para inserir expressões em strings.  

Crie um template literal que inclua uma expressão matemática, por exemplo: A soma de 5 + 3 é ${5 + 3}.  

Exemplo:  
Saída: "A soma de 5 + 3 é 8."  

Restrições:  
- Use template literals.  
- Inclua pelo menos uma expressão matemática.


---


## 8. Cálculo de Desconto
Fácil  
Tópicos: Entrada, Cálculos  

Dica: Desconto = valor * 0.1.  

Peça ao usuário o valor total de uma compra e calcule o valor com 10% de desconto.  

Exemplo:  
Entrada: valor = 100  
Saída: 90  

Restrições:  
- O desconto é 10%.  
- Imprima o valor final.


---


## 9. Acesso a Elementos de Array
Fácil  
Tópicos: Arrays  

Dica: Arrays são indexados a partir de 0.  

Declare um array com 4 cores diferentes e acesse e imprima a segunda cor.  

Exemplo:  
Entrada: cores = ["vermelho", "azul", "verde", "amarelo"]  
Saída: "azul"  

Restrições:  
- O array deve ter exatamente 4 elementos.  
- Imprima a cor no índice 1.


---


## 10. Acesso a Propriedades de Objeto
Fácil  
Tópicos: Objetos  

Dica: Use notação de ponto para acessar propriedades.  

Crie um objeto `carro` com as propriedades `marca` e `ano`, e imprima o ano do carro.  

Exemplo:  
Entrada: carro = {marca: "Toyota", ano: 2020}  
Saída: 2020  

Restrições:  
- O objeto deve ter as propriedades especificadas.  
- Imprima apenas o ano.


---


## 11. Verificação de Número Positivo ou Negativo
Fácil  
Tópicos: Condicionais  

Dica: Use if/else para comparações.  

Peça um número e use um if/else para determinar se ele é positivo ou negativo (0 é positivo).  

Exemplo:  
Entrada: numero = -5  
Saída: "Negativo"  

Exemplo:  
Entrada: numero = 0  
Saída: "Positivo"  

Restrições:  
- 0 é considerado positivo.  
- Use prompt() para entrada.


---


## 12. Verificação de Par ou Ímpar com Ternário
Fácil  
Tópicos: Operador Ternário  

Dica: numero % 2 === 0 ? "Par" : "Ímpar"  

Use o operador ternário (? :) para verificar se um número é par ou ímpar e imprima a resposta.  

Exemplo:  
Entrada: numero = 4  
Saída: "Par"  

Restrições:  
- Use apenas o operador ternário.  
- Imprima "Par" ou "Ímpar".


---


## 13. Classificação por Idade
Fácil  
Tópicos: Condicionais Múltiplas  

Dica: Use if/else if/else para faixas.  

Peça a idade e use um if/else if/else para classificar: "Criança" (0-12), "Adolescente" (13-17), "Adulto" (>=18).  

Exemplo:  
Entrada: idade = 15  
Saída: "Adolescente"  

Restrições:  
- Idades são números inteiros.  
- Cubra todas as faixas.


---


## 14. Cálculo de Média e Aprovação
Fácil  
Tópicos: Condicionais, Cálculos  

Dica: Média = (nota1 + nota2) / 2  

Peça duas notas. Se a média for maior ou igual a 7, imprima "Aprovado"; caso contrário, "Reprovado".  

Exemplo:  
Entrada: nota1 = 8, nota2 = 6  
Saída: "Aprovado"  

Restrições:  
- Notas são números de 0 a 10.  
- Média >= 7 para aprovado.


---


## 15. Dia da Semana com Switch
Fácil  
Tópicos: Switch  

Dica: Use switch com casos de 1 a 7.  

Peça um dia da semana (número de 1 a 7) e use um switch para imprimir o nome correspondente.  

Exemplo:  
Entrada: dia = 1  
Saída: "Domingo"  

Restrições:  
- 1 = Domingo, 2 = Segunda, etc.  
- Use switch.


---


## 16. Verificação de Acesso com AND
Fácil  
Tópicos: Operadores Lógicos  

Dica: maiorDeIdade && possuiPermissao  

Verifique se um usuário pode acessar um site. Ele deve ser maiorDeIdade E ter possuiPermissao (ambas booleanas).  

Exemplo:  
Entrada: maiorDeIdade = true, possuiPermissao = false  
Saída: "Acesso negado"  

Restrições:  
- Use && para a condição.  
- Imprima "Acesso permitido" ou "Acesso negado".


---


## 17. Verificação de Fim de Semana com OR
Fácil  
Tópicos: Operadores Lógicos  

Dica: dia === "Sábado" || dia === "Domingo"  

Verifique se um dia da semana é Sábado OU Domingo para imprimir "Fim de Semana".  

Exemplo:  
Entrada: dia = "Sábado"  
Saída: "Fim de Semana"  

Restrições:  
- Dias são strings.  
- Use ||.


---


## 18. Encontrar o Maior Número
Fácil  
Tópicos: Condicionais Aninhadas  

Dica: Compare os números em pares.  

Leia três números e use aninhamento de if/else para determinar qual é o maior.  

Exemplo:  
Entrada: a = 5, b = 10, c = 3  
Saída: 10  

Restrições:  
- Três números inteiros.  
- Imprima o maior.


---


## 19. Simulação de Login
Fácil  
Tópicos: Condicionais  

Dica: username === "admin" && senha === "123"  

Simule o login. Peça username e senha fixas. Imprima "Login Efetuado" se ambos estiverem corretos.  

Exemplo:  
Entrada: username = "admin", senha = "123"  
Saída: "Login Efetuado"  

Restrições:  
- Senhas fixas: admin/123.  
- Use if/else.


---


## 20. Valor Padrão com Nullish Coalescing
Fácil  
Tópicos: Operadores  

Dica: numero ?? 10  

Peça um número. Use o operador de coalescência nula (??) para definir um valor padrão de 10 caso o usuário não digite nada.  

Exemplo:  
Entrada: (vazio)  
Saída: 10  

Restrições:  
- Use ?? para valor padrão.  
- prompt() pode retornar null.


---


## 21. Laço For para Imprimir Números
Fácil  
Tópicos: Laços  

Dica: for(let i = 1; i <= 10; i++)  

Use um laço for para imprimir todos os números de 1 a 10.  

Exemplo:  
Saída: 1 2 3 4 5 6 7 8 9 10  

Restrições:  
- Use for.  
- Imprima em uma linha ou separadamente.


---


## 22. Contagem Regressiva com While
Fácil  
Tópicos: Laços  

Dica: while(contador >= 1)  

Use um laço while para fazer uma contagem regressiva de 5 a 1.  

Exemplo:  
Saída: 5 4 3 2 1  

Restrições:  
- Use while.  
- Comece de 5.


---


## 23. Função Saudar
Fácil  
Tópicos: Funções  

Dica: function saudar(nome) { return `Olá, ${nome}!`; }  

Crie uma função chamada saudar que recebe um nome como parâmetro e retorna "Olá, [Nome]!".  

Exemplo:  
Entrada: nome = "Maria"  
Saída: "Olá, Maria!"  

Restrições:  
- Use function declaration.  
- Retorne a string.


---


## 24. Função Anônima para Área do Círculo
Fácil  
Tópicos: Funções Anônimas  

Dica: const area = function(raio) { return 3.14 * raio * raio; }  

Crie uma função anônima que calcula a área de um círculo (use π≈3.14) e a chame.  

Exemplo:  
Entrada: raio = 5  
Saída: 78.5  

Restrições:  
- Use função anônima.  
- π = 3.14.


---


## 25. Arrow Function para Quadrado
Fácil  
Tópicos: Arrow Functions  

Dica: const quadrado = num => num * num;  

Crie uma arrow function que recebe um número e retorna seu quadrado.  

Exemplo:  
Entrada: num = 4  
Saída: 16  

Restrições:  
- Use arrow function.  
- Retorne num * num.


---


## 26. Iteração com forEach
Fácil  
Tópicos: Arrays, Métodos  

Dica: array.forEach(element => console.log(element))  

Itere sobre um array de números usando o método forEach e imprima cada elemento.  

Exemplo:  
Entrada: array = [1, 2, 3]  
Saída: 1 2 3  

Restrições:  
- Use forEach.  
- Imprima cada elemento.


---


## 27. Laço Do/While para Entrada
Fácil  
Tópicos: Laços  

Dica: do { ... } while(condicao)  

Peça números ao usuário até que ele digite 0. Use um laço do/while para garantir que o laço rode pelo menos uma vez.  

Exemplo:  
Entrada: 5, 3, 0  
Saída: Números digitados: 5, 3  

Restrições:  
- Use do/while.  
- Pare quando 0.


---


## 28. Laço For com Continue
Fácil  
Tópicos: Laços, Controle  

Dica: if(i % 3 === 0) continue;  

Crie um laço for para iterar de 1 a 20, mas use continue para pular a impressão dos números múltiplos de 3.  

Exemplo:  
Saída: 1 2 4 5 7 8 10 11 13 14 16 17 19 20  

Restrições:  
- Use for e continue.  
- Pule múltiplos de 3.


---


## 29. Função para Soma de Array
Fácil  
Tópicos: Funções, Arrays, Laços  

Dica: let soma = 0; for(let num of array) soma += num;  

Crie uma função que receba um array de números e retorne a soma de todos os elementos, usando um laço for.  

Exemplo:  
Entrada: array = [1, 2, 3]  
Saída: 6  

Restrições:  
- Use for.  
- Retorne a soma.


---


## 30. Laço For...Of para Strings
Fácil  
Tópicos: Laços, Strings  

Dica: for(let str of array) console.log(str.toUpperCase())  

Crie um array de 5 strings. Use um laço for...of para imprimi-las em maiúsculas.  

Exemplo:  
Entrada: array = ["ola", "mundo"]  
Saída: "OLA" "MUNDO"  

Restrições:  
- Array de 5 strings.  
- Use for...of e toUpperCase().


---


## 31. Callback Function
Médio  
Tópicos: Funções de Ordem Superior  

Dica: function executar(callback, nome) { callback(nome); }  

Crie uma função que recebe uma callback function e um nome, e executa a callback passando o nome como argumento.  

Exemplo:  
Entrada: callback = (n) => console.log(`Oi ${n}`), nome = "João"  
Saída: "Oi João"  

Restrições:  
- A função deve aceitar callback e nome.  
- Execute a callback.


---


## 32. Map para Multiplicar
Médio  
Tópicos: Arrays, Map  

Dica: array.map(num => num * 2)  

Use o método map em um array de números para retornar um novo array com todos os valores multiplicados por 2.  

Exemplo:  
Entrada: array = [1, 2, 3]  
Saída: [2, 4, 6]  

Restrições:  
- Use map.  
- Retorne novo array.


---


## 33. Filter para Maiores de 18
Médio  
Tópicos: Arrays, Filter  

Dica: array.filter(idade => idade > 18)  

Use o método filter em um array de idades para retornar apenas as idades maiores que 18.  

Exemplo:  
Entrada: array = [15, 20, 25]  
Saída: [20, 25]  

Restrições:  
- Use filter.  
- Retorne novo array.


---


## 34. Reduce para Total
Médio  
Tópicos: Arrays, Reduce  

Dica: array.reduce((acc, preco) => acc + preco, 0)  

Use o método reduce em um array de preços para calcular o valor total da compra.  

Exemplo:  
Entrada: array = [10, 20, 30]  
Saída: 60  

Restrições:  
- Use reduce.  
- Comece com 0.


---


## 35. Inverter Ordem de Palavras
Médio  
Tópicos: Strings, Arrays  

Dica: string.split(' ').reverse().join(' ')  

Dada uma string com palavras separadas por espaço, use split e join para inverter a ordem das palavras.  

Exemplo:  
Entrada: string = "Eu sou JavaScript"  
Saída: "JavaScript sou Eu"  

Restrições:  
- Use split, reverse, join.  
- Palavras separadas por espaço.


---


## 36. Find para Produto
Médio  
Tópicos: Arrays, Objetos, Find  

Dica: array.find(prod => prod.id === 3)  

Use o método find em um array de objetos produtos para encontrar e retornar o produto com o id: 3.  

Exemplo:  
Entrada: produtos = [{id:1, nome:"A"}, {id:3, nome:"C"}]  
Saída: {id:3, nome:"C"}  

Restrições:  
- Objetos com id.  
- Retorne o objeto.


---


## 37. Fatorial com Recursão
Médio  
Tópicos: Recursão  

Dica: if(n === 0) return 1; return n * fatorial(n-1);  

Implemente a função que calcula o fatorial de um número usando recursão.  

Exemplo:  
Entrada: n = 5  
Saída: 120  

Restrições:  
- Use recursão.  
- n >= 0.


---


## 38. Sort para Nomes
Médio  
Tópicos: Arrays, Sort  

Dica: array.sort()  

Crie uma função que receba uma lista de nomes e use o método sort para ordená-los em ordem alfabética.  

Exemplo:  
Entrada: nomes = ["Carlos", "Ana", "Bruno"]  
Saída: ["Ana", "Bruno", "Carlos"]  

Restrições:  
- Use sort.  
- Ordem alfabética.


---


## 39. Verificar Palíndromo
Médio  
Tópicos: Strings  

Dica: str.toLowerCase() === str.toLowerCase().split('').reverse().join('')  

Crie uma função que verifique se uma palavra é um palíndromo ignorando o case.  

Exemplo:  
Entrada: palavra = "Radar"  
Saída: true  

Restrições:  
- Ignore case.  
- Retorne boolean.


---


## 40. Filtrar Números Primos
Médio  
Tópicos: Arrays, Lógica  

Dica: Função auxiliar para verificar primo.  

Implemente uma função que receba um array de números e retorne um novo array contendo apenas os números que são primos.  

Exemplo:  
Entrada: array = [1, 2, 3, 4, 5]  
Saída: [2, 3, 5]  

Restrições:  
- Números positivos.  
- Retorne array de primos.


---


## 41. Maior e Menor em Array
Médio  
Tópicos: Arrays, Algoritmos  

Dica: Inicialize maior e menor com o primeiro elemento.  

Crie um array de 10 números e use um algoritmo manual para encontrar e retornar o maior e o menor valor.  

Exemplo:  
Entrada: array = [1, 5, 3, 9, 2]  
Saída: Maior: 9, Menor: 1  

Restrições:  
- Array de 10 números.  
- Use laço for.


---


## 42. Média de Notas com Reduce
Médio  
Tópicos: Objetos, Arrays, Reduce  

Dica: aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length  

Crie um objeto aluno com as propriedades nome e notas (array). Use reduce nas notas para calcular e retornar a média do aluno.  

Exemplo:  
Entrada: aluno = {nome: "João", notas: [8, 7, 9]}  
Saída: 8  

Restrições:  
- Notas em array.  
- Use reduce.


---


## 43. Interseção de Arrays
Médio  
Tópicos: Arrays  

Dica: Use filter e includes.  

Crie uma função que receba dois arrays e retorne um novo array contendo apenas os elementos que são comuns a ambos.  

Exemplo:  
Entrada: arr1 = [1, 2, 3], arr2 = [2, 3, 4]  
Saída: [2, 3]  

Restrições:  
- Elementos únicos na interseção.  
- Use filter.


---


## 44. Desestruturação de Objeto
Médio  
Tópicos: Desestruturação  

Dica: const {titulo, autor} = livro;  

Use a desestruturação de objeto ({}) para extrair as variáveis titulo e autor de um objeto livro.  

Exemplo:  
Entrada: livro = {titulo: "Livro A", autor: "Autor B"}  
Saída: titulo = "Livro A", autor = "Autor B"  

Restrições:  
- Use desestruturação.  
- Imprima as variáveis.


---


## 45. Desestruturação de Array para Troca
Médio  
Tópicos: Desestruturação  

Dica: [a, b] = [b, a];  

Use a desestruturação de array ([]) para trocar os valores de duas variáveis sem usar uma variável temporária.  

Exemplo:  
Entrada: a = 1, b = 2  
Saída: a = 2, b = 1  

Restrições:  
- Use desestruturação.  
- Sem variável temp.


---


## 46. Parâmetros de Rest para Soma
Médio  
Tópicos: Parâmetros Rest  

Dica: function soma(...nums) { return nums.reduce((acc, n) => acc + n, 0); }  

Crie uma função que use parâmetros de descanso (...) para somar uma quantidade indefinida de números.  

Exemplo:  
Entrada: 1, 2, 3, 4  
Saída: 10  

Restrições:  
- Use ...nums.  
- Retorne a soma.


---


## 47. Inverter Chaves e Valores
Médio  
Tópicos: Objetos  

Dica: Use Object.entries e reduce.  

Crie uma função que receba um objeto e retorne um novo objeto com as chaves e valores invertidos.  

Exemplo:  
Entrada: obj = {a: 1, b: 2}  
Saída: {1: 'a', 2: 'b'}  

Restrições:  
- Valores únicos.  
- Use Object.entries.


---


## 48. Closure para Contador
Médio  
Tópicos: Closures  

Dica: function contador() { let count = 0; return () => ++count; }  

Crie uma Closure para criar um contador que pode ser incrementado e retornado.  

Exemplo:  
Saída: 1, 2, 3 (chamadas sucessivas)  

Restrições:  
- Use closure.  
- Retorne função.


---


## 49. Contar Pessoas por Cidade
Médio  
Tópicos: Arrays, Objetos, Reduce  

Dica: pessoas.reduce((acc, p) => { acc[p.cidade] = (acc[p.cidade] || 0) + 1; return acc; }, {})  

Dada uma lista de objetos pessoas com a chave cidade, use reduce para retornar um objeto que conta quantas pessoas há em cada cidade.  

Exemplo:  
Entrada: pessoas = [{cidade: "SP"}, {cidade: "RJ"}, {cidade: "SP"}]  
Saída: {"SP": 2, "RJ": 1}  

Restrições:  
- Use reduce.  
- Objeto de contagem.


---


## 50. Busca Sequencial
Médio  
Tópicos: Arrays, Algoritmos  

Dica: for(let item of array) if(item.propriedade === valor) return item;  

Implemente uma função de Busca Sequencial em um array de objetos, buscando por um valor específico em uma de suas propriedades.  

Exemplo:  
Entrada: array = [{nome: "A", id:1}], valor = 1, propriedade = "id"  
Saída: {nome: "A", id:1}  

Restrições:  
- Retorne o objeto ou null.  
- Use for.


---


## 51. Remover Duplicados com Set
Difícil  
Tópicos: Arrays, Set  

Dica: [...new Set(array)]  

Crie uma função que recebe um array de números e retorna um novo array sem números duplicados.  

Exemplo:  
Entrada: array = [1, 2, 2, 3]  
Saída: [1, 2, 3]  

Restrições:  
- Use Set.  
- Ordem preservada.


---


## 52. Soma de Matriz
Difícil  
Tópicos: Matrizes, Laços  

Dica: for(let row of matrix) for(let num of row) soma += num;  

Crie uma matriz 3×3. Itere sobre ela usando laços aninhados e calcule a soma de todos os elementos.  

Exemplo:  
Entrada: matrix = [[1,2,3],[4,5,6],[7,8,9]]  
Saída: 45  

Restrições:  
- Matriz 3x3.  
- Use for aninhados.


---


## 53. Simulação de Atraso com setTimeout
Difícil  
Tópicos: Assincronicidade  

Dica: setTimeout(() => console.log("Mensagem"), 2000);  

Crie uma função que simule um atraso usando setTimeout e imprima uma mensagem após 2 segundos.  

Exemplo:  
Saída: "Mensagem" após 2s  

Restrições:  
- Use setTimeout.  
- Atraso de 2000ms.


---


## 54. Promise Simples
Difícil  
Tópicos: Promises  

Dica: new Promise((resolve, reject) => { Math.random() > 0.5 ? resolve("Sucesso!") : reject("Erro"); })  

Crie uma Promise que resolve com "Sucesso!" se um número aleatório for maior que 0.5, e rejeita caso contrário.  

Exemplo:  
Saída: "Sucesso!" ou erro  

Restrições:  
- Use Promise.  
- Baseado em Math.random().


---


## 55. Generator para Ímpares
Difícil  
Tópicos: Generators  

Dica: function* impares() { let n = 1; while(true) { yield n; n += 2; } }  

Crie um generator function que gere a sequência de números ímpares.  

Exemplo:  
Saída: 1, 3, 5, ...  

Restrições:  
- Use function*.  
- yield ímpares.


---


## 56. Spread para Concatenar Arrays
Difícil  
Tópicos: Spread Operator  

Dica: [...arr1, ...arr2, novoElemento]  

Use o operador spread (...) para concatenar dois arrays e adicionar um novo elemento ao mesmo tempo.  

Exemplo:  
Entrada: arr1 = [1,2], arr2 = [3,4], novo = 5  
Saída: [1,2,3,4,5]  

Restrições:  
- Use spread.  
- Adicione elemento.


---


## 57. Ordenação de Objetos
Difícil  
Tópicos: Arrays, Sort  

Dica: array.sort((a,b) => metodo === 'asc' ? a.prop.localeCompare(b.prop) : b.prop.localeCompare(a.prop))  

Crie uma função que recebe um array de objetos e o método de ordenação ('asc' ou 'desc') e ordena os objetos por uma propriedade específica.  

Exemplo:  
Entrada: array = [{nome:"B"}, {nome:"A"}], metodo = 'asc', prop = 'nome'  
Saída: [{nome:"A"}, {nome:"B"}]  

Restrições:  
- Use sort.  
- 'asc' ou 'desc'.


---


## 58. Conversão para Binário
Difícil  
Tópicos: Números, Strings  

Dica: num.toString(2)  

Crie uma função que recebe um número inteiro e o converte para sua representação em binário.  

Exemplo:  
Entrada: num = 10  
Saída: "1010"  

Restrições:  
- Use toString(2).  
- Retorne string.


---


## 59. Máximo Divisor Comum
Difícil  
Tópicos: Algoritmos  

Dica: Use algoritmo de Euclides.  

Implemente o algoritmo para calcular o MDC entre dois números.  

Exemplo:  
Entrada: a = 48, b = 18  
Saída: 6  

Restrições:  
- Use while.  
- Números positivos.


---


## 60. Simulação de Caixa Eletrônico
Difícil  
Tópicos: Lógica, Arrays  

Dica: Calcule quantas notas de cada tipo.  

Crie uma função que receba um valor de saque e retorne um objeto com a quantidade mínima de notas de 100, 50, 10 e 1.  

Exemplo:  
Entrada: valor = 150  
Saída: {100: 1, 50: 1, 10: 0, 1: 0}  

Restrições:  
- Notas: 100, 50, 10, 1.  
- Valor inteiro.


---


## 61. Classe Pessoa
Difícil  
Tópicos: POO, Classes  

Dica: class Pessoa { constructor(nome, idade) { this.nome = nome; this.idade = idade; } apresentar() { ... } }  

Crie uma class Pessoa com um construtor que inicialize nome e idade. Adicione um método apresentar().  

Exemplo:  
Entrada: nome = "João", idade = 25  
Saída: "Olá, meu nome é João e tenho 25 anos."  

Restrições:  
- Use class.  
- Método apresentar.


---


## 62. Classe ContaBancaria
Difícil  
Tópicos: POO, Classes  

Dica: Adicione métodos depositar, sacar, transferir.  

Crie uma class ContaBancaria com saldo, depositar, sacar e transferir. Sacar valida saldo.  

Exemplo:  
Entrada: saldo inicial 100, sacar 50  
Saída: saldo = 50  

Restrições:  
- Sacar só se saldo >= valor.  
- Transferir para outra instância.


---


## 63. Subclasse Aluno
Difícil  
Tópicos: Herança  

Dica: class Aluno extends Pessoa { constructor(nome, idade, matricula) { super(nome, idade); this.matricula = matricula; } }  

Crie uma subclasse Aluno que extends Pessoa e adicione matricula. Sobrescreva apresentar().  

Exemplo:  
Entrada: nome = "Maria", idade = 20, matricula = "123"  
Saída: "Olá, meu nome é Maria, tenho 20 anos e minha matrícula é 123."  

Restrições:  
- Use extends.  
- Sobrescreva método.


---


## 64. Pilha com Classe
Difícil  
Tópicos: Estruturas de Dados  

Dica: class Pilha { constructor() { this.items = []; } push(item) { ... } pop() { ... } peek() { ... } }  

Implemente a estrutura de dados Pilha usando uma class e métodos push, pop e peek.  

Exemplo:  
push(1), push(2), pop() -> 2, peek() -> 1  

Restrições:  
- Use array interno.  
- Métodos especificados.


---


## 65. Fila com Classe
Difícil  
Tópicos: Estruturas de Dados  

Dica: enqueue adiciona no fim, dequeue remove do início.  

Crie uma class Fila com métodos enqueue e dequeue.  

Exemplo:  
enqueue(1), enqueue(2), dequeue() -> 1  

Restrições:  
- Use array.  
- FIFO.


---


## 66. Verificar Parênteses Balanceados
Difícil  
Tópicos: Pilha, Algoritmos  

Dica: Use Pilha para empilhar abre e desempilhar fecha.  

Implemente uma função que verifique se uma expressão com parênteses está balanceada, usando a classe Pilha.  

Exemplo:  
Entrada: "(()"  
Saída: false  

Restrições:  
- Use Pilha da questão 64.  
- Parênteses (), [], {}.


---


## 67. Função Construtora Produto
Difícil  
Tópicos: Funções Construtoras  

Dica: function Produto(nome, preco) { this.nome = nome; this.preco = preco; }  

Crie uma função construtora para criar objetos Produto.  

Exemplo:  
new Produto("Livro", 20) -> {nome: "Livro", preco: 20}  

Restrições:  
- Use function.  
- new para instanciar.


---


## 68. Singleton Pattern
Difícil  
Tópicos: Padrões de Design  

Dica: class Singleton { static instance; static getInstance() { if(!this.instance) this.instance = new Singleton(); return this.instance; } }  

Implemente um Singleton Pattern para garantir apenas uma instância.  

Exemplo:  
getInstance() sempre retorna a mesma instância.  

Restrições:  
- Use class.  
- Método estático.


---


## 69. Object.freeze
Difícil  
Tópicos: Objetos Imutáveis  

Dica: Object.freeze(obj)  

Crie um objeto imutável e tente modificá-lo para observar o comportamento.  

Exemplo:  
obj = {a:1}; Object.freeze(obj); obj.a = 2; // não muda  

Restrições:  
- Use Object.freeze.  
- Tente modificar.


---


## 70. Herança com Animal
Difícil  
Tópicos: Herança  

Dica: class Animal { emitirSom() { } } class Cachorro extends Animal { emitirSom() { console.log("Au"); } }  

Crie uma classe base Animal e duas classes que a herdam: Cachorro e Gato, cada uma com emitirSom diferente.  

Exemplo:  
cachorro.emitirSom() -> "Au"  

Restrições:  
- Use extends.  
- Métodos diferentes.


---


## 71. Async/Await para Promise
Difícil  
Tópicos: Assincronicidade  

Dica: async function exemplo() { try { const result = await promise; } catch(e) { } }  

Reescreva a Promise da questão 54 usando async/await.  

Exemplo:  
Saída: "Sucesso!" ou erro tratado  

Restrições:  
- Use async/await.  
- try/catch.


---


## 72. Promises Sequenciais
Difícil  
Tópicos: Promises  

Dica: async function sequencial() { const res1 = await p1(); const res2 = await p2(); }  

Crie uma função async que chame duas promises sequencialmente.  

Exemplo:  
p1 resolve "A", p2 resolve "B" -> "A" then "B"  

Restrições:  
- Use await.  
- Sequencial.


---


## 73. Promise.all para Paralelo
Difícil  
Tópicos: Promises  

Dica: const results = await Promise.all([p1, p2, p3]);  

Crie uma função async que chame múltiplas promises em paralelo.  

Exemplo:  
p1, p2, p3 resolvem -> array de resultados  

Restrições:  
- Use Promise.all.  
- Paralelo.


---


## 74. LCS com DP
Difícil  
Tópicos: Programação Dinâmica  

Dica: Use matriz para armazenar comprimentos.  

Implemente LCS entre duas strings.  

Exemplo:  
Entrada: "abc", "ac"  
Saída: "ac"  

Restrições:  
- Use DP.  
- Retorne a subsequência.


---


## 75. Quicksort
Difícil  
Tópicos: Algoritmos de Ordenação  

Dica: Escolha pivô, particione, recursão.  

Implemente o Quicksort em JavaScript.  

Exemplo:  
Entrada: [3,1,4,1,5]  
Saída: [1,1,3,4,5]  

Restrições:  
- Use recursão.  
- Ordenação in-place.


---


## 76. Validação de CPF com Regex
Difícil  
Tópicos: Regex  

Dica: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)  

Crie uma função que use Regex para validar CPF no formato '000.000.000-00'.  

Exemplo:  
Entrada: "123.456.789-00"  
Saída: true  

Restrições:  
- Use regex.  
- Formato específico.


---


## 77. Agrupar por Categoria com Reduce
Difícil  
Tópicos: Arrays, Reduce  

Dica: produtos.reduce((acc, p) => { (acc[p.categoria] = acc[p.categoria] || []).push(p); return acc; }, {})  

Crie uma função que receba um array de objetos e use reduce para agrupar por categoria.  

Exemplo:  
Entrada: [{categoria: "A", nome: "X"}]  
Saída: {"A": [{...}]}  

Restrições:  
- Use reduce.  
- Agrupar por chave.


---


## 78. Mesclar Intervalos
Difícil  
Tópicos: Arrays, Algoritmos  

Dica: Ordene e mescle sobrepostos.  

Implemente uma função que receba intervalos e os mescle.  

Exemplo:  
Entrada: [[1,3],[2,6],[8,10]]  
Saída: [[1,6],[8,10]]  

Restrições:  
- Intervalos ordenados.  
- Mesclar sobrepostos.


---


## 79. Caminho de Menor Custo
Difícil  
Tópicos: Programação Dinâmica  

Dica: Matriz de custos, movimentos baixo/direita.  

Desenvolva uma função que encontre o caminho de menor custo.  

Exemplo:  
Entrada: matrix = [[1,3],[2,1]]  
Saída: 4 (1+3+1)  

Restrições:  
- Apenas baixo/direita.  
- Use DP.


---


## 80. Generator para Matriz
Difícil  
Tópicos: Generators, Matrizes  

Dica: for(let row of matrix) for(let val of row) yield val;  

Crie um generator que itere uma matriz 3x3.  

Exemplo:  
matrix = [[1,2],[3,4],[5,6]] -> 1,2,3,4,5,6  

Restrições:  
- Use function*.  
- Yield elementos.


---


## 81. Busca Binária
Difícil  
Tópicos: Algoritmos de Busca  

Dica: while(left <= right) { mid = ... if(arr[mid] === target) return mid; }  

Implemente Busca Binária em array ordenado.  

Exemplo:  
Entrada: arr = ["a","b","c"], target = "b"  
Saída: 1  

Restrições:  
- Array ordenado.  
- Retorne índice.


---


## 82. Próximo Número Maior
Difícil  
Tópicos: Permutações  

Dica: Encontre quebra na ordem decrescente, troque e reverta.  

Implemente função para próximo número maior com mesmos dígitos.  

Exemplo:  
Entrada: 123  
Saída: 132  

Restrições:  
- Mesmo dígitos.  
- Retorne número.


---


## 83. Árvore Binária de Busca
Difícil  
Tópicos: Estruturas de Dados  

Dica: class Node { ... } class BST { insert(val) { ... } inOrder() { ... } }  

Implemente ABB com percurso in-order.  

Exemplo:  
insert(5), insert(3), inOrder() -> 3,5  

Restrições:  
- Use classes.  
- Método inOrder.


---


## 84. BFS em Grafo
Difícil  
Tópicos: Grafos, BFS  

Dica: Use fila para visitar nós.  

Implemente BFS em grafo simulado.  

Exemplo:  
Grafo: 0->1,2; BFS de 0 -> [0,1,2]  

Restrições:  
- Use array para grafo.  
- Retorne ordem.


---


## 85. Dijkstra
Difícil  
Tópicos: Grafos, Algoritmos  

Dica: Use priority queue para distâncias.  

Implemente Dijkstra para menor caminho.  

Exemplo:  
Grafo com pesos, caminho de 0 a 2 -> [0,1,2]  

Restrições:  
- Use arrays.  
- Retorne caminho.


---


## 86. Par Mais Próximo de Zero
Difícil  
Tópicos: Arrays, Algoritmos  

Dica: Ordene e use dois ponteiros.  

Encontre par de números mais próximo de zero.  

Exemplo:  
Entrada: [-1,2,3,-4]  
Saída: [-1,2] (soma 1)  

Restrições:  
- Dois números.  
- Soma mais próxima de 0.


---


## 87. Cifra de César
Difícil  
Tópicos: Strings, Algoritmos  

Dica: (char.charCodeAt(0) - 65 + shift) % 26 + 65  

Implemente Cifra de César.  

Exemplo:  
Entrada: "ABC", shift=1  
Saída: "BCD"  

Restrições:  
- Maiúsculas.  
- Deslocamento.


---


## 88. Mochila 0/1
Difícil  
Tópicos: Programação Dinâmica  

Dica: Matriz dp para valores.  

Implemente Knapsack 0/1.  

Exemplo:  
Itens: peso[1,2], valor[1,2], capacidade=3  
Saída: 3 (1+2)  

Restrições:  
- Use DP.  
- Máximo valor.


---


## 89. Conversão de Base
Difícil  
Tópicos: Números, Strings  

Dica: while(num > 0) { resto = num % base; num = Math.floor(num / base); }  

Converta número para base B.  

Exemplo:  
Entrada: 10, base=2  
Saída: "1010"  

Restrições:  
- Base > 1.  
- Retorne string.


---


## 90. Cache LRU Simples
Difícil  
Tópicos: Estruturas de Dados  

Dica: Use array para ordem, objeto para valores.  

Implemente cache com 3 últimos resultados.  

Exemplo:  
get(1) -> compute, cache [1], get(2) -> [2,1], etc.  

Restrições:  
- LRU com array.  
- Máximo 3.