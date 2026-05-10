/*
============================================================
===== AULA 7: OBJETOS EM JAVASCRIPT =====
============================================================

 O QUE SÃO OBJETOS?

Um objeto é uma estrutura de dados que agrupa informações relacionadas usando
pares chave:valor. Enquanto arrays usam índices numéricos, objetos usam nomes
descritivos para acessar os dados.

Objetos servem para:
- Guardar dados estruturados (dados de uma pessoa, produto, etc.)
- Agrupar propriedades e métodos relacionados
- Representar entidades do mundo real de forma organizada

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
