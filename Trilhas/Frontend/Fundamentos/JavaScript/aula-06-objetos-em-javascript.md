# Aula 6: Objetos em JavaScript

---

## Índice

1. [O que são Objetos?](#1-o-que-são-objetos)
2. [Criando um Objeto](#2-criando-um-objeto)
3. [Acessando Propriedades (GET — Leitura)](#3-acessando-propriedades-get--leitura)
4. [Modificando e Adicionando Propriedades (SET)](#4-modificando-e-adicionando-propriedades-set)
5. [Conceito Crítico: Referência vs. Valor](#5-conceito-crítico-referência-vs-valor)
6. [Compreendendo `this`](#6-compreendendo-this)
7. [Objetos Aninhados (Nested Objects)](#7-objetos-aninhados-nested-objects)
8. [Métodos Úteis do Objeto (`Object.`)](#8-métodos-úteis-do-objeto-object)
9. [Destructuring (Desempacotamento)](#9-destructuring-desempacotamento)
10. [Spread Operator (`...`) — Espalhamento](#10-spread-operator--espalhamento)
11. [Trabalhando com JSON](#11-trabalhando-com-json)
12. [Constructor Functions](#12-constructor-functions)

---

## 1. O que são Objetos?

Um **objeto** é uma estrutura de dados que agrupa informações relacionadas usando pares **chave:valor**. Enquanto arrays usam índices numéricos (Aula 5), objetos usam **nomes descritivos** para acessar os dados.

Objetos servem para:

- Guardar dados estruturados (dados de uma pessoa, produto, etc.)
- Agrupar propriedades e métodos relacionados
- Representar entidades do mundo real de forma organizada

### Exemplo introdutório

```javascript
let pessoa = {
  nome: "Lucas",
  idade: 25,
  saudacao: function() { /* ... */ }
};
```

Nesse exemplo:

| Elemento | Tipo | Papel |
|---|---|---|
| `nome`, `idade` | **Propriedade** | Armazena um dado |
| `saudacao` | **Método** | Uma função definida dentro do objeto |

---

## 2. Criando um Objeto

Para criar um objeto, usa-se chaves `{}` com pares `chave: valor` dentro.

```javascript
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
```

---

## 3. Acessando Propriedades (GET — Leitura)

Existem duas formas de ler dados de um objeto:

| Notação | Sintaxe | Quando usar |
|---|---|---|
| **Dot notation** (ponto) | `objeto.propriedade` | Mais comum e recomendada — quando se sabe o nome da propriedade |
| **Bracket notation** (colchetes) | `objeto["propriedade"]` ou `objeto[variavel]` | Quando a chave é dinâmica (vem de uma variável) ou contém hífen/espaço |

### Exemplo — Dot notation

```javascript
console.log("Nome:", pessoa.nome);   // "Lucas"
console.log("Idade:", pessoa.idade); // 25
console.log("Email:", pessoa.email); // "lucas@example.com"
```

### Exemplo — Bracket notation

```javascript
console.log("Profissão:", pessoa["profissao"]); // "Desenvolvedor"
```

>  Use **bracket notation** quando o nome da propriedade for acessado por meio de uma variável (`pessoa[variavel]`) ou tiver caracteres que não são válidos em dot notation, como hífen ou espaço (`pessoa["nome-completo"]`).

---

## 4. Modificando e Adicionando Propriedades (SET)

Em JavaScript, objetos são **dinâmicos**: é possível adicionar, modificar e remover propriedades a qualquer momento.

### Modificando uma propriedade existente

```javascript
pessoa.idade = 26; // Muda de 25 para 26
console.log("Idade atualizada:", pessoa.idade); // 26

pessoa.profissao = "Desenvolvedor Senior";
console.log("Profissão atualizada:", pessoa.profissao);
```

### Adicionando uma nova propriedade

```javascript
pessoa.telefone = "(11) 98765-4321"; // Propriedade que não existia antes
console.log("Telefone adicionado:", pessoa.telefone);

pessoa.ativo = true; // Nova propriedade booleana
console.log("Ativo:", pessoa.ativo);
```

### Deletando uma propriedade

```javascript
delete pessoa.email; // Remove a propriedade "email"
console.log("Email após delete:", pessoa.email); // undefined
```

### Tabela-resumo das operações

| Ação | Sintaxe | Efeito |
|---|---|---|
| Modificar | `objeto.propriedade = novoValor` | Sobrescreve o valor existente |
| Adicionar | `objeto.novaPropriedade = valor` | Cria a propriedade se ela não existir |
| Remover | `delete objeto.propriedade` | Remove a propriedade completamente |

---

## 5. Conceito Crítico: Referência vs. Valor

Este é **um dos conceitos mais importantes do JavaScript**.

| Categoria | Comportamento ao atribuir/copiar |
|---|---|
| Tipos primitivos (`string`, `number`, `boolean`) | Cópia do **valor** |
| Objetos e arrays | Cópia da **referência** (não é uma cópia real!) |

### Exemplo com números (valor)

```javascript
let numeroA = 10;
let numeroB = numeroA; // Cópia do valor
numeroB = 20;

console.log("NumeroA:", numeroA); // 10 (não mudou!)
console.log("NumeroB:", numeroB); // 20
```

### Exemplo com objetos (referência)

```javascript
let pessoaA = { nome: "Ana", idade: 25 };
let pessoaB = pessoaA; // NÃO é cópia, é uma referência!

pessoaB.idade = 30; // Muda a idade em pessoaB

console.log("PessoaA.idade:", pessoaA.idade); // 30 (MUDOU!)
console.log("PessoaB.idade:", pessoaB.idade); // 30

console.log("São a mesma coisa?", pessoaA === pessoaB); // true!
```

### Por que isso acontece?

```
NÚMEROS:
  numeroA → [valor: 10]
  numeroB → [valor: 10]   (cópia independente)

OBJETOS:
  pessoaA → [endereço de memória: 0x1234]
  pessoaB → [endereço de memória: 0x1234]   (mesmo endereço!)
```

Ambas as variáveis (`pessoaA` e `pessoaB`) apontam para o **mesmo objeto** na memória — por isso, alterar uma reflete na outra.

### Como fazer uma cópia real de um objeto?

#### Opção 1 — `Object.assign()`

```javascript
let usuario1 = { nome: "Carlos", idade: 30 };
let usuario2 = Object.assign({}, usuario1); // Cria uma cópia rasa

usuario2.idade = 35; // Modifica apenas usuario2

console.log("Usuario1.idade:", usuario1.idade); // 30 (não mudou)
console.log("Usuario2.idade:", usuario2.idade); // 35
```

#### Opção 2 — Spread Operator (recomendado)

```javascript
let usuario3 = { nome: "Diana", idade: 28 };
let usuario4 = { ...usuario3 }; // Copia o objeto

usuario4.idade = 40;

console.log("Usuario3.idade:", usuario3.idade); // 28
console.log("Usuario4.idade:", usuario4.idade); // 40
```

>  **Importante:** essas são cópias **rasas** (*shallow copy*). Se o objeto tiver outros objetos dentro dele, esses objetos internos ainda compartilham a mesma referência. Para cópias **profundas** (*deep copy*), é necessário usar `JSON.stringify`/`JSON.parse` combinados, ou bibliotecas como o Lodash.

---

## 6. Compreendendo `this`

`this` é uma palavra especial que significa **"o objeto atual"**.

Quando o código está dentro de um método, `this` se refere ao objeto que contém esse método — isso permite que o método acesse outras propriedades do mesmo objeto.

### Exemplo — conta bancária

```javascript
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
```

###  Cuidado com Arrow Functions

**Arrow functions (`=>`) não têm seu próprio `this`.** Se uma arrow function for usada como método de um objeto, `this` vai se referir ao **escopo externo**, não ao objeto.

####  Errado

```javascript
let contaErrada = {
  saldo: 100,
  sacar: (valor) => {  // ERRADO: arrow function
      this.saldo -= valor; // `this` NÃO é a conta!
  }
};
```

####  Correto

```javascript
let contaCorreta = {
  saldo: 100,
  sacar: function(valor) { // CORRETO: função normal
      this.saldo -= valor; // `this` é a conta
  }
};
```

### Tabela-resumo sobre `this`

| Tipo de função como método | `this` se refere a... |
|---|---|
| `function() { ... }` (função normal) | O objeto que contém o método |
| `() => { ... }` (arrow function) | O escopo externo (não o objeto) |

---

## 7. Objetos Aninhados (Nested Objects)

Objetos podem conter outros objetos (ou arrays) dentro deles, permitindo criar estruturas de dados mais complexas.

```javascript
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

console.log("Empresa:", empresa.nome);                              // TechCorp
console.log("Cidade:", empresa.endereco.cidade);                    // São Paulo
console.log("CEP:", empresa.endereco.cep);                          // 01234-567
console.log("Primeira funcionária:", empresa.funcionarios[0].nome); // Ana
console.log(empresa.informacoes());                                 // Mensagem com endereço
console.log("Funcionários:", empresa.listarFuncionarios());         // ["Ana", "Bruno", "Carlos"]
```

>  Para acessar dados aninhados, encadeiam-se pontos e/ou colchetes: `empresa.endereco.cidade`, `empresa.funcionarios[0].nome`. O método `listarFuncionarios` combina objetos aninhados com o método `map()` de arrays (Aula 5).

---

## 8. Métodos Úteis do Objeto (`Object.`)

JavaScript oferece vários métodos *built-in* para trabalhar com objetos, todos iniciando com `Object.` (maiúscula).

```javascript
let produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 10,
  categoria: "Eletrônicos"
};
```

| Método | O que faz |
|---|---|
| `Object.keys(obj)` | Retorna um array com todas as **chaves** |
| `Object.values(obj)` | Retorna um array com todos os **valores** |
| `Object.entries(obj)` | Retorna um array de pares `[chave, valor]` |
| `Object.assign(alvo, ...fontes)` | Mescla objetos em um novo objeto (ou no `alvo`) |
| `objeto.hasOwnProperty(chave)` | Verifica se a chave existe no objeto (`true`/`false`) |

### `Object.keys()` — pega todas as chaves

```javascript
console.log("Chaves:", Object.keys(produto));
// Saída: ["nome", "preco", "estoque", "categoria"]
```

### `Object.values()` — pega todos os valores

```javascript
console.log("Valores:", Object.values(produto));
// Saída: ["Notebook", 3500, 10, "Eletrônicos"]
```

### `Object.entries()` — pega pares `[chave, valor]`

```javascript
console.log("Entradas:", Object.entries(produto));
// Saída: [["nome", "Notebook"], ["preco", 3500], ["estoque", 10], ["categoria", "Eletrônicos"]]
```

### Usando `entries()` com loops

```javascript
for (let [chave, valor] of Object.entries(produto)) {
  console.log(`${chave}: ${valor}`);
}
```

### `Object.assign()` — mescla objetos

```javascript
let detalhes = { cor: "Preto", peso: "2kg" };
let produtoCompleto = Object.assign({}, produto, detalhes);

console.log("Produto completo:", produtoCompleto);
// Tem todas as propriedades de produto + detalhes
```

### `for...in` — loop sobre chaves

```javascript
for (let chave in produto) {
  console.log(`${chave}: ${produto[chave]}`);
}
```

### `hasOwnProperty()` — verifica se uma chave existe

```javascript
console.log("Tem 'nome'?", produto.hasOwnProperty("nome"));   // true
console.log("Tem 'marca'?", produto.hasOwnProperty("marca")); // false
```

---

## 9. Destructuring (Desempacotamento)

**Destructuring** permite extrair dados de um objeto de forma rápida e limpa.

### Forma tradicional

```javascript
let carro = { marca: "Toyota", modelo: "Corolla", ano: 2023 };

marca = carro.marca;
modelo = carro.modelo;
ano = carro.ano;
```

### Forma moderna (com destructuring)

```javascript
let { marca: marcaCarro, modelo: modeloCarro, ano: anoCarro } = carro;
console.log(marcaCarro); // "Toyota"
```

Ou, de forma ainda mais simples, quando o nome da variável é igual ao nome da propriedade:

```javascript
let { marca, modelo, ano } = carro;
console.log(marca);  // "Toyota"
console.log(modelo); // "Corolla"
console.log(ano);    // 2023
```

### Com valores padrão

```javascript
let { marca: marcaVeiculo, cor = "Branco" } = carro;
console.log(marcaVeiculo); // "Toyota"
console.log(cor);          // "Branco" (valor padrão, pois não existe em `carro`)
```

### Destructuring em parâmetros de função

```javascript
function mostrarInfo({ nome, idade }) {
  console.log(`${nome} tem ${idade} anos`);
}

let pessoa2 = { nome: "Mariana", idade: 30 };
mostrarInfo(pessoa2); // Mariana tem 30 anos
```

### Tabela-resumo das variações

| Sintaxe | Uso |
|---|---|
| `let { chave } = objeto;` | Extrai com o mesmo nome da propriedade |
| `let { chave: novoNome } = objeto;` | Extrai renomeando a variável |
| `let { chave = padrao } = objeto;` | Extrai com valor padrão caso a chave não exista |
| `function f({ chave }) { ... }` | Desestrutura diretamente nos parâmetros da função |

---

## 10. Spread Operator (`...`) — Espalhamento

O **spread operator** (`...`) permite "espalhar" as propriedades de um objeto dentro de outro — muito útil para **copiar** e **mesclar** objetos.

### Adicionando uma propriedade a uma cópia

```javascript
let pessoa3 = { nome: "Roberto", idade: 35 };
let pessoaComEmail = { ...pessoa3, email: "roberto@example.com" };

console.log(pessoaComEmail);
// { nome: "Roberto", idade: 35, email: "roberto@example.com" }
```

### Mesclando múltiplos objetos

```javascript
let endereco1 = { rua: "Rua A", numero: 100 };
let endereco2 = { cidade: "São Paulo", estado: "SP" };
let enderecoCompleto = { ...endereco1, ...endereco2 };

console.log(enderecoCompleto);
// { rua: "Rua A", numero: 100, cidade: "São Paulo", estado: "SP" }
```

### Sobrescrevendo propriedades

```javascript
let usuario = { nome: "João", idade: 25 };
let usuarioAtualizado = { ...usuario, idade: 26, ativo: true };

console.log(usuarioAtualizado);
// { nome: "João", idade: 26, ativo: true }
```

>  Quando uma propriedade é repetida no espalhamento, o valor **mais à direita** prevalece — por isso `idade: 26` sobrescreve o `idade: 25` original.

---

## 11. Trabalhando com JSON

**JSON** (*JavaScript Object Notation*) é um formato de texto para trocar dados, muito usado em APIs, armazenamento e comunicação entre sistemas.

JSON é praticamente um objeto JavaScript, mas representado como **texto**.

### Diferenças de sintaxe

| JavaScript | JSON |
|---|---|
| `{ nome: "Lucas", ativo: true }` | `{"nome": "Lucas", "ativo": true}` |

>  Em JSON, as chaves **devem** estar entre aspas duplas.

### Objeto JavaScript → String JSON (`JSON.stringify`)

```javascript
let usuario1Js = {
  nome: "Ana",
  idade: 28,
  hobbies: ["leitura", "programação", "música"]
};

let usuarioJSON = JSON.stringify(usuario1Js);
console.log("String JSON:", usuarioJSON);
// Saída: {"nome":"Ana","idade":28,"hobbies":["leitura","programação","música"]}
```

### String JSON → Objeto JavaScript (`JSON.parse`)

```javascript
let jsonTexto = '{"nome":"Bruno","email":"bruno@example.com","ativo":true}';
let usuarioObjeto = JSON.parse(jsonTexto);

console.log("Objeto:", usuarioObjeto);
console.log("Nome:", usuarioObjeto.nome);   // "Bruno"
console.log("Email:", usuarioObjeto.email); // "bruno@example.com"
```

### Exemplo prático — salvando e carregando dados

```javascript
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
```

### `JSON.stringify()` vs. `JSON.parse()`

| Método | Direção da conversão |
|---|---|
| `JSON.stringify(objeto)` | Objeto JavaScript → string JSON |
| `JSON.parse(string)` | String JSON → objeto JavaScript |

---

## 12. Constructor Functions

**Constructor functions** são funções que criam objetos com a mesma estrutura — funcionam como um "molde" ou "template" para objetos. Usa-se a palavra-chave `new` para criar uma instância.

### Definindo um constructor

```javascript
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
```

### Criando instâncias

```javascript
let livro1 = new Livro("1984", "George Orwell", 1949, 328);
let livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, 1216);

console.log(livro1.informacoes()); // "1984" de George Orwell (1949)
console.log(livro2.titulo);        // O Senhor dos Anéis
console.log(livro2.paginas);       // 1216
```

>  **Nota:** hoje em dia, o JavaScript possui a palavra-chave `class`, que é a forma moderna de estruturar esse tipo de "molde" de objetos. Ainda assim, as *constructor functions* continuam sendo usadas e são importantes de entender, especialmente ao ler código mais antigo.

---

### Referência rápida da Aula 7

```
CRIAR OBJETO:        let obj = { chave: valor };
LER PROPRIEDADE:     obj.chave  |  obj["chave"]
MODIFICAR/ADICIONAR: obj.chave = valor;
REMOVER:             delete obj.chave;

REFERÊNCIA vs VALOR: objetos e arrays são copiados por REFERÊNCIA
CÓPIA REAL:          Object.assign({}, obj)  |  { ...obj }

this                 → refere-se ao objeto atual (não funciona em arrow functions)

MÉTODOS Object.:      Object.keys() | Object.values() | Object.entries() |
                       Object.assign() | obj.hasOwnProperty()

DESTRUCTURING:        let { chave } = obj;
SPREAD:                let copia = { ...obj };

JSON:                 JSON.stringify(obj)  → texto
                       JSON.parse(texto)   → objeto

CONSTRUCTOR FUNCTION: function Nome(...) { this.prop = ...; }
                       let instancia = new Nome(...);
```
