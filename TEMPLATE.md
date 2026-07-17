# TEMPLATE — TrilhaDoDev

> **Como usar este arquivo:**
> Copie a estrutura abaixo para criar um novo módulo de conteúdo.
> Delete os blocos que não se aplicam e substitua tudo que estiver entre `< >`.
> Este template ajuda a manter um padrão de leitura e navegação no projeto.

---

## Estrutura de pastas que você deve criar

```
<trilha>/<tecnologia>/<nome-do-modulo>/
├── README.md       ← Visão geral (use o Bloco 1)
├── conceito.md     ← Teoria (use o Bloco 2)
├── exemplo/
│   ├── README.md   ← Explica o exemplo (use o Bloco 3)
│   └── <arquivo>   ← O código em si (ex: index.js, Main.java)
└── exercicio.md    ← Desafio prático (use o Bloco 4)
```

---

---

# BLOCO 1 — `README.md` (visão geral do módulo)

---

# <Nome do Módulo>

> **Trilha:** `<trilha>/<tecnologia>`
> **Nível:** `[ ] Iniciante` `[ ] Intermediário` `[ ] Avançado`
> **Tempo estimado:** `<X> minutos`
> **Pré-requisitos:** <liste o que o leitor precisa saber antes>

## O que você vai aprender

- <Tópico 1>
- <Tópico 2>
- <Tópico 3>

## Como usar este módulo

1. Leia o [`conceito.md`](./conceito.md) para entender a teoria
2. Explore o código em [`exemplo/`](./exemplo/)
3. Resolva o desafio em [`exercicio.md`](./exercicio.md)

## Referências

- [<Nome do link>](<URL>) — <Breve descrição>
- [<Nome do link>](<URL>) — <Breve descrição>

---

---

# BLOCO 2 — `conceito.md` (explicação teórica)

---

# <Nome do Conceito>

## O que é?

<Explique o conceito em linguagem simples. Imagine que está explicando para alguém que nunca ouviu falar sobre isso. Evite jargão desnecessário no início.>

## Por que existe?

<Qual problema este conceito resolve? Por que foi criado? Esta seção é importante porque conecta o conteúdo à realidade do leitor.>

## Como funciona?

<Explique o funcionamento. Use analogias do mundo real se ajudar. Pode usar subtítulos se o conceito for complexo.>

### Exemplo mínimo

```<linguagem>
// Menor código possível que demonstra o conceito
// Comente cada linha importante
<código>
```

## Comparação / Variações

<Se existirem formas alternativas, variações ou tecnologias parecidas, compare-as aqui de forma objetiva.>

| Abordagem | Quando usar | Vantagem | Desvantagem |
|---|---|---|---|
| <A> | <situação> | <vantagem> | <desvantagem> |
| <B> | <situação> | <vantagem> | <desvantagem> |

## Erros comuns

> ❌ **Erro:** <Descreva um erro que iniciantes cometem com frequência>
>
> ✅ **Correto:** <Mostre como fazer do jeito certo>

---

> ❌ **Erro:** <Outro erro comum>
>
> ✅ **Correto:** <Como fazer certo>

## Boas práticas

- ✅ <Boa prática 1>
- ✅ <Boa prática 2>
- ❌ <O que evitar 1>

## Resumo

<Um parágrafo curto resumindo o que foi visto. Deve ser possível relembrar o conteúdo só lendo este bloco.>

---

---

# BLOCO 3 — `exemplo/README.md` (descrição do exemplo)

---

# Exemplo: <Nome do Exemplo>

## O que este exemplo demonstra

<Descreva em 2 a 3 frases o que o código faz e qual conceito ele ilustra.>

## Como executar

```bash
# Descreva o comando necessário para rodar o exemplo
<comando>
```

> Ou abra o arquivo `<nome-do-arquivo>` diretamente no navegador / editor.

## O que observar no código

- **Linha <X>:** <Explique por que esta linha é importante>
- **Linha <X>:** <Explique por que esta linha é importante>
- **Função `<nome>`:** <O que ela faz e por que está ali>

## Resultado esperado

<Descreva ou mostre (em texto) o que aparece quando o exemplo é executado corretamente.>

```
<saída esperada no terminal ou descrição visual>
```

## Experimente modificar

> Tente fazer estas alterações para entender melhor o comportamento:
>
> - Mude `<X>` para `<Y>` e veja o que acontece
> - Adicione `<Z>` e observe a diferença
> - Remova `<W>` — o que quebra?

---

---

# BLOCO 4 — `exercicio.md` (desafio prático)

---

# Exercício: <Nome do Exercício>

> **Nível:** `[ ] Iniciante` `[ ] Intermediário` `[ ] Avançado`
> **Tempo estimado:** `<X> minutos`

## Contexto

<Crie uma pequena história ou situação do mundo real que justifique o exercício. Isso torna o desafio mais interessante e próximo da realidade.>

**Exemplo:**
> Você foi contratado como dev júnior em uma startup e seu primeiro PR é criar uma página de perfil de usuário. O designer passou o protótipo e você precisa implementar...

## O que você deve fazer

- [ ] <Tarefa 1 clara e específica>
- [ ] <Tarefa 2 clara e específica>
- [ ] <Tarefa 3 clara e específica>

## Requisitos

### Obrigatórios
- <Requisito que deve ser cumprido>
- <Requisito que deve ser cumprido>

### Opcionais (desafio extra)
- <Requisito mais difícil, para quem quiser ir além>
- <Requisito mais difícil, para quem quiser ir além>

## Recursos que você vai precisar

- [`conceito.md`](./conceito.md) — Revise a teoria se precisar
- [<Link externo>](<URL>) — <Por que este link ajuda>

## Critérios de avaliação

Seu exercício está completo quando:

- [ ] <Critério verificável 1>
- [ ] <Critério verificável 2>
- [ ] O código funciona sem erros
- [ ] O código está legível e comentado nos pontos importantes

## Dica

> <Uma dica que ajuda sem entregar a resposta. Aponte a direção, não o caminho completo.>

## Solução de referência

<Escolha uma das opções abaixo:>

**Opção A — Solução no repositório:**
> A solução está em [`solucao/`](./solucao/). Tente resolver sozinho antes de olhar!

**Opção B — Sem solução disponível:**
> Não existe uma única resposta certa. Compartilhe sua solução abrindo uma Issue com a tag `exercicio` — adoramos ver as diferentes abordagens da comunidade!

---

---

# Checklist final antes de abrir o PR

Use este checklist para garantir que seu conteúdo está completo e no padrão do projeto.

## Estrutura

- [ ] A pasta segue o padrão `trilha/tecnologia/nome-do-modulo/`
- [ ] Os arquivos estão nomeados em `kebab-case`
- [ ] Existe `README.md` na pasta do módulo
- [ ] Existe `conceito.md`
- [ ] Existe a pasta `exemplo/` com código funcional
- [ ] Existe `exercicio.md`

## Conteúdo

- [ ] A explicação está clara para um iniciante no assunto
- [ ] O exemplo de código funciona e está comentado
- [ ] O exercício tem contexto, requisitos e critérios de avaliação
- [ ] Os erros comuns estão documentados
- [ ] As boas práticas estão listadas

## Qualidade

- [ ] Não há erros de português
- [ ] Links externos funcionam
- [ ] O código foi testado antes do PR
- [ ] HTML/CSS (se houver) segue padrões de acessibilidade
- [ ] CSS (se houver) usa abordagem Mobile-First

## PR

- [ ] Li o [`CONTRIBUTING.md`](../CONTRIBUTING.md)
- [ ] Minha branch tem um nome descritivo (`feat/trilha-tecnologia-modulo`)
- [ ] Meu commit segue o padrão Conventional Commits
- [ ] Preenchi a descrição do PR com o template fornecido

---

> Ficou com dúvida sobre como usar este template? Abra uma Issue com a tag `duvida` ou entre em contato com o líder do projeto.
