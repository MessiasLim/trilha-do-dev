// =========================
//  SELECIONANDO ELEMENTOS
// =========================

// Selecionando os elementos atraves do ID (getElementById), usando só o nome do ID, sem o #.
const animais = document.getElementById('animais');
console.log(animais);


// elementos atraves da classe (getElementsByClassName), usando só o nome da classe, sem o ponto, e ele retorna uma HTMLCollection, que é uma coleção de elementos, mesmo que haja apenas um elemento com a classe, ele retorna uma coleção.
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

// tags (getElementsByTagName), usando só o nome da tag, sem os sinais de menor e maior, e ele retorna uma HTMLCollection, que é uma coleção de elementos, mesmo que haja apenas um elemento com a tag, ele retorna uma coleção.
const ul = document.getElementsByTagName('ul');

// mas também e possivel usar um seletor geral (querySelector), que pode ser usado para selecionar qualquer elemento, usando os mesmos seletores do CSS, e ele retorna o primeiro elemento encontrado.
const primeiraLi = document.querySelector('li');
const linkInternos = document.querySelector('[href^="#"');

// para selecionar todos os elementos que correspondem ao seletor, usamos o querySelectorAll, que retorna uma NodeList, que é uma coleção de elementos, mesmo que haja apenas um elemento com o seletor, ele retorna uma coleção.
const animaisIMG = document.querySelectorAll('.animais img');
console.log(animaisIMG);

const gridSectionNode = document.querySelectorAll('.grid-section');
console.log(gridSectionNode);

// =========================================
// Diferença entre HTMLCollection e NodeList
// ==========================================

// HTMLCollection é uma coleção de elementos que é atualizada automaticamente quando o DOM é modificado, ou seja, se um elemento for adicionado ou removido do DOM, a HTMLCollection será atualizada para refletir essa mudança. Já a NodeList é uma coleção de nós que não é atualizada automaticamente, ou seja, se um elemento for adicionado ou removido do DOM, a NodeList não será atualizada para refletir essa mudança. Além disso, a HTMLCollection é uma coleção de elementos, enquanto a NodeList pode conter qualquer tipo de nó, como elementos, textos e comentários. E o HTMLcollection possui menos métodos e propriedades do que a NodeList, como por exemplo, o método forEach, que é um método de array, mas que pode ser usado em uma NodeList, mas não em uma HTMLCollection. Por isso, é importante escolher o método de seleção de acordo com a necessidade do projeto e do tipo de coleção que se deseja trabalhar.


// =========================
// Array-like
// =========================

// HTMLCollection e NodeList são ambos array-like, ou seja, eles possuem a propriedade length e podem ser acessados por índice, mas eles não possuem os métodos de array, como forEach, map, filter, etc. Para usar esses métodos, é necessário converter a coleção em um array usando o método Array.from() ou o operador spread (...). Por exemplo:

gridSectionNode.forEach(function(item, index) {
    console.log(index);
});

// ======================
// Tranformando Array-like em Array
// ======================

const gridSectionArray = Array.from(gridSectionNode);

// Assim, agora podemos usar os métodos de array normalmente, como forEach, map, filter, etc...
gridSectionArray.forEach(function(item) {
    console.log(item);
});