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
