# Dominando Git e GitHub

## Sumário

1. [O que é Git e por que usar?](#1-o-que-é-git-e-por-que-usar)
2. [Instalação e Configuração Inicial](#2-instalação-e-configuração-inicial)
3. [Conceitos Fundamentais](#3-conceitos-fundamentais)
4. [Fluxo Básico: O Ciclo de Trabalho](#4-fluxo-básico-o-ciclo-de-trabalho)
5. [Ramificação (Branching)](#5-ramificação-branching)
6. [Trabalho Remoto com GitHub](#6-trabalho-remoto-com-github)
7. [Comandos Avançados e Recuperação](#7-comandos-avançados-e-recuperação)
8. [Boas Práticas e Fluxos de Trabalho](#8-boas-práticas-e-fluxos-de-trabalho)
9. [Git para Equipes: Cenários Reais](#9-git-para-equipes-cenários-reais)
10. [Aliases e Produtividade](#10-aliases-e-produtividade)
11. [Referência Rápida de Comandos](#11-referência-rápida-de-comandos)

---

## 1. O que é Git e por que usar?

O **Git** é um sistema de **controle de versão distribuído** criado por Linus Torvalds em 2005, originalmente para gerenciar o desenvolvimento do kernel Linux. Ele rastreia alterações em arquivos ao longo do tempo e coordena o trabalho entre múltiplos desenvolvedores.

Diferente de sistemas centralizados (como SVN), **cada desenvolvedor possui uma cópia completa do repositório**, incluindo todo o histórico. Isso significa que você pode trabalhar offline e sem depender de um servidor central.

### Por que usar o Git?

| Benefício | Descrição |
| :--- | :--- |
| **Histórico completo** | Cada versão do projeto fica salva. Você pode voltar a qualquer ponto da história. |
| **Trabalho em equipe** | Múltiplos devs trabalham em paralelo sem sobrescrever o trabalho uns dos outros. |
| **Segurança** | Código funcional fica protegido em branches estáveis. Experimentos ficam isolados. |
| **Rastreabilidade** | Sabe-se exatamente quem alterou o quê, quando e por quê. |
| **Velocidade** | Operações locais são instantâneas (sem latência de rede). |
| **Branching barato** | Criar uma nova branch custa praticamente zero em memória e tempo. |

### Git vs. GitHub — Qual a diferença?

| | Git | GitHub |
| :--- | :--- | :--- |
| **O que é** | Software de controle de versão que roda na sua máquina | Plataforma web para hospedar repositórios Git |
| **Funciona sem o outro?** | Sim, Git funciona 100% offline | Não — GitHub depende de repositórios Git |
| **Alternativas** | Mercurial, SVN | GitLab, Bitbucket, Gitea |

<br> 

> Git é tipo uma "máquina do tempo" local. E o GitHub é o "servidor na nuvem" onde você armazena e compartilha essas versões.

---

## 2. Instalação e Configuração Inicial

### Instalação

```bash
# Linux (Debian/Ubuntu)
sudo apt update && sudo apt install git

# macOS (via Homebrew)
brew install git

# Windows
# Baixe o instalador em: https://git-scm.com/download/win
```

Verifique a instalação:

```bash
git --version
# Exemplo de saída: git version 2.44.0
```

### Configuração Global

Antes de qualquer coisa, informe ao Git quem você é. Essas informações aparecem em cada commit que você fizer.

```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu@email.com"
```

### Configurações Adicionais Recomendadas

```bash
# Define o VS Code como editor padrão (para mensagens de commit, rebase, etc.)
git config --global core.editor "code --wait"

# Define 'main' como nome padrão da branch inicial (padrão moderno)
git config --global init.defaultBranch main

# Ativa cores no terminal para melhor leitura
git config --global color.ui auto

# Configura o comportamento de push padrão
git config --global push.default current

# Configura o tratamento de quebras de linha (evita problemas entre Windows e Linux/Mac)
# No Windows:
git config --global core.autocrlf true
# No Linux/macOS:
git config --global core.autocrlf input
```

### Verificando a Configuração

```bash
git config --list
# Ou para ver onde cada configuração está definida:
git config --list --show-origin
```

### Níveis de Configuração

O Git possui três níveis de configuração, do mais específico para o mais geral:

| Nível | Arquivo | Flag | Abrangência |
| :--- | :--- | :--- | :--- |
| **Local** | `.git/config` | `--local` | Apenas o repositório atual |
| **Global** | `~/.gitconfig` | `--global` | Todos os repositórios do usuário |
| **System** | `/etc/gitconfig` | `--system` | Todos os usuários do sistema |

A configuração mais específica sempre tem prioridade. Isso permite, por exemplo, usar um e-mail pessoal globalmente e sobrescrever com o e-mail corporativo em projetos de trabalho.

```bash
# Exemplo: sobrescrever o e-mail apenas para o projeto atual
git config --local user.email "trabalho@empresa.com"
```

---

## 3. Conceitos Fundamentais

Antes de usar os comandos, é essencial entender como o Git pensa.

### Os Três Estados de um Arquivo

```
┌──────────────────┐    git add     ┌──────────────┐    git commit    ┌────────────┐
│ Working Directory│ ─────────────▶ │ Staging Area │ ───────────────▶ │ Repository │
│  (pasta local)   │ ◀───────────── │  (index)     │                  │ (histórico)│
└──────────────────┘  git checkout  └──────────────┘                  └────────────┘
```

- **Working Directory:** Onde você edita seus arquivos normalmente.
- **Staging Area (Index):** Área de preparação. Você escolhe quais mudanças vão para o próximo commit.
- **Repository:** O banco de dados do Git com todo o histórico de commits.

### O que é um Commit?

Um commit é um **snapshot (fotografia) do seu projeto** em um determinado momento. Ele contém:
- Um identificador único (hash SHA-1), ex: `a3f5c2d`.
- Autor, e-mail e data.
- A mensagem descritiva.
- Uma referência ao commit anterior (pai).

### O que é uma Branch?

Uma branch é simplesmente um **ponteiro móvel para um commit**. Quando você cria uma branch e faz novos commits, o ponteiro avança automaticamente.

```
main:    A --- B --- C
                      \
feature:               D --- E
```

### O que é HEAD?

`HEAD` é um ponteiro especial que indica **em qual branch/commit você está agora**. Normalmente aponta para a branch atual; quando aponta diretamente para um commit (não uma branch), você está em "detached HEAD state".

---

## 4. Fluxo Básico: O Ciclo de Trabalho

### Iniciando um Repositório

**Opção 1: Projeto novo (do zero)**

```bash
mkdir meu-projeto
cd meu-projeto
git init
# Saída: Initialized empty Git repository in /meu-projeto/.git/
```

Isso cria a pasta oculta `.git/` — o coração do repositório. Nunca a delete.

**Opção 2: Projeto existente**

```bash
cd pasta-do-projeto-existente
git init
git add .
git commit -m "chore: commit inicial do projeto existente"
```

---

### `git status` — Entendendo o Estado Atual

```bash
git status
```

**Exemplo de saída comentada:**

```
On branch main                    # Branch atual
Your branch is up to date with 'origin/main'. # Sincronizado com o remoto

Changes to be committed:          # No Stage — prontos para commit
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html

Changes not staged for commit:    # Modificados, mas fora do Stage
  (use "git add <file>..." to update what will be committed)
        modified:   style.css

Untracked files:                  # Novos arquivos que o Git ainda não conhece
  (use "git add <file>..." to include in what will be committed)
        script.js
```

---

### `git add` — Preparando Mudanças

```bash
# Adicionar um arquivo específico
git add index.html

# Adicionar múltiplos arquivos
git add index.html style.css

# Adicionar todos os arquivos do diretório atual
git add .

# Adicionar arquivos de forma interativa (escolhendo pedaços do arquivo)
git add -p index.html
# O Git mostrará cada "hunk" (bloco de mudança) e perguntará: Stage this hunk [y,n,q,a,d,s,?]?
```

> **Dica Avançada:** `git add -p` é extremamente útil para separar mudanças lógicas que você fez no mesmo arquivo em commits distintos.

---

### `git commit` — Gravando no Histórico

```bash
# Forma mais comum: mensagem inline
git commit -m "feat: adicionar formulário de login"

# Abre o editor configurado para mensagem mais longa (com título e corpo)
git commit

# Atalho: add + commit de arquivos JÁ rastreados (não pega arquivos novos)
git commit -am "fix: corrigir validação do formulário"

# Corrigir o último commit (mensagem ou adicionar arquivo esquecido)
git add arquivo-esquecido.js
git commit --amend -m "feat: adicionar formulário de login com validação"
# ATENÇÃO: Nunca use --amend em commits já enviados (pushed) para o remoto!
```

### Anatomia de uma Boa Mensagem de Commit

```
feat: resumo curto em até 72 caracteres (imperativo, sem ponto final)

Corpo opcional explicando o "por quê" da mudança, não o "o quê"
(o código já mostra o quê). Separe do título com uma linha em branco.

- Pode usar bullets para listar múltiplas mudanças
- Referencia issues: Closes #42
```

---

### `git log` — Visualizando o Histórico

```bash
# Log completo
git log

# Log compacto (uma linha por commit)
git log --oneline

# Log visual com branches
git log --oneline --graph --all --decorate

# Log com filtros
git log --author="João"
git log --since="2024-01-01"
git log --grep="login"          # Busca na mensagem do commit
git log -p                      # Mostra o diff de cada commit
git log --stat                  # Mostra quais arquivos foram alterados

# Ver o log de um arquivo específico
git log --follow -p index.html
```

**Exemplo de `git log --oneline --graph --all`:**

```
* e5a1b2c (HEAD -> main) feat: página de contato
* 3d8f9a1 fix: quebra de layout no mobile
| * 7c2e4f0 (feature/login) feat: tela de login
|/
* 1a4b5c6 chore: commit inicial
```

---

### `git diff` — Comparando Mudanças

```bash
# Diferença entre Working Directory e Stage
git diff

# Diferença entre Stage e último commit
git diff --staged

# Diferença entre dois commits
git diff 1a4b5c6 e5a1b2c

# Diferença entre duas branches
git diff main feature/login

# Diferença de um arquivo específico
git diff index.html
```

---

## 5. Ramificação (Branching)

### Criando e Navegando entre Branches

```bash
# Listar branches locais (* indica a branch atual)
git branch

# Listar branches remotas também
git branch -a

# Criar uma nova branch
git branch feature/cadastro

# Mudar para uma branch existente
git checkout feature/cadastro
# Forma moderna (Git 2.23+):
git switch feature/cadastro

# Criar e mudar em um único comando
git checkout -b feature/cadastro
# Forma moderna:
git switch -c feature/cadastro

# Renomear a branch atual
git branch -m novo-nome

# Deletar uma branch (apenas se já foi mergeada)
git branch -d feature/cadastro

# Forçar deleção mesmo sem merge
git branch -D feature/cadastro
```

---

### `git merge` — Unindo Branches

```bash
# Estando na branch de destino (ex: main):
git checkout main
git merge feature/cadastro
```

**Tipos de Merge:**

**1. Fast-Forward (sem commit de merge)**
Ocorre quando a branch principal não teve novos commits desde a criação da feature branch. O Git simplesmente avança o ponteiro.

```
Antes:  main: A --- B
                     \
              feature: C --- D

Depois (fast-forward):
        main: A --- B --- C --- D
```

```bash
# Para forçar um commit de merge mesmo quando fast-forward é possível:
git merge --no-ff feature/cadastro
```

**2. Merge com Commit de Junção (3-way merge)**
Ocorre quando há commits em ambas as branches desde o ponto de divergência.

```
Antes:  

    main:    A --- B --- E
                    \
          feature:   C --- D


Depois: 

    main:    A --- B --- E --- M (commit de merge)
                    \         /
          feature:   C ----- D
```

---

### `git rebase` — Reescrevendo o Histórico

O rebase "move" os commits de uma branch para que eles pareçam ter sido feitos a partir do topo de outra.

```bash
# Estando na feature branch:
git checkout feature/cadastro
git rebase main
```

```
Antes:  

    main:    A --- B --- E
                    \
          feature:   C --- D
          

Depois (rebase):

    main:    A --- B --- E
                          \
          feature:         C' --- D'  (commits "replicados" em cima de E)
```

**Quando usar cada um?**

| Situação | Usar |
| :--- | :--- |
| Integrar uma feature completa na `main` | `merge --no-ff` (preserva contexto) |
| Atualizar sua feature branch com mudanças da `main` | `rebase` (mantém histórico linear) |
| Branch já foi compartilhada com o time | **NUNCA use rebase!** Reescreve histórico público. |

> **Regra de ouro do Rebase:** "Nunca faça rebase de commits que existam fora do seu repositório local."

---

### Resolvendo Conflitos — Passo a Passo Detalhado

Conflitos ocorrem quando Git não consegue mesclar automaticamente duas versões do mesmo trecho de código.

**1. Identifique os conflitos:**

```bash
git merge feature/cadastro
# AUTO-MERGING FAILED
# CONFLICT (content): Merge conflict in index.html
# Automatic merge failed; fix conflicts and then commit the result.

git status
# both modified: index.html
```

**2. Abra o arquivo com conflito:**

```html
<<<<<<< HEAD                        <!-- Início do seu código (branch atual) -->
<h1>Bem-vindo ao Sistema</h1>
=======                             <!-- Separador -->
<h1>Bem-vindo ao Portal</h1>
>>>>>>> feature/cadastro            <!-- Código que veio do merge -->
```

**3. Edite manualmente e escolha o resultado final:**

```html
<!-- Pode ser uma das versões, ambas, ou algo completamente diferente -->
<h1>Bem-vindo ao Portal do Sistema</h1>
```

**4. Marque como resolvido e finalize:**

```bash
git add index.html
git commit -m "merge: integrar feature/cadastro resolvendo conflito no título"
```

**Ferramentas visuais para conflitos:**

```bash
# Usar ferramenta configurada (VS Code, IntelliJ, etc.)
git mergetool

# Configurar VS Code como mergetool padrão
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'
```

---

### `git cherry-pick` — Copiando Commits Específicos

Permite aplicar um commit específico de outra branch na branch atual, sem fazer merge de tudo.

```bash
# Ver o hash do commit desejado
git log --oneline feature/pagamento

# Aplicar apenas aquele commit na branch atual
git cherry-pick a3f5c2d

# Aplicar múltiplos commits
git cherry-pick a3f5c2d b7e1f9a

# cherry-pick sem fazer commit automático (você revisa antes)
git cherry-pick -n a3f5c2d
```

**Caso de uso:** Um bug crítico foi corrigido em uma feature branch e precisa ir para `main` imediatamente, sem esperar o merge da feature inteira.

---

## 6. Trabalho Remoto com GitHub

### Conectando ao Repositório Remoto

```bash
# Clonar um repositório remoto (já cria e configura tudo automaticamente)
git clone https://github.com/usuario/repositorio.git

# Clonar em uma pasta com nome diferente
git clone https://github.com/usuario/repositorio.git meu-projeto

# Clonar apenas uma branch específica
git clone -b develop https://github.com/usuario/repositorio.git

# Adicionar um remoto a um repositório local existente
git remote add origin https://github.com/usuario/repositorio.git

# Verificar remotos configurados
git remote -v
# origin  https://github.com/usuario/repositorio.git (fetch)
# origin  https://github.com/usuario/repositorio.git (push)

# Adicionar mais de um remoto (útil em forks)
git remote add upstream https://github.com/original/repositorio.git

# Alterar a URL de um remoto
git remote set-url origin https://github.com/usuario/novo-repo.git

# Remover um remoto
git remote remove upstream
```

---

### `git push` — Enviando para o Remoto

```bash
# Enviar branch local para o remoto (primeira vez — define o "upstream")
git push -u origin main

# Enviar após o upstream estar configurado
git push

# Enviar uma branch específica
git push origin feature/login

# Forçar push (PERIGOSO — reescreve histórico remoto)
git push --force
# Versão mais segura (falha se outros fizeram push enquanto isso)
git push --force-with-lease

# Enviar uma tag
git push origin v1.0.0

# Enviar todas as tags
git push --tags
```

---

### `git fetch` vs `git pull`

```bash
# fetch: baixa as mudanças do remoto MAS NÃO aplica ao seu código
git fetch origin
# Agora você pode inspecionar o que veio:
git log origin/main --oneline
git diff main origin/main
# E aplicar quando quiser:
git merge origin/main

# pull: fetch + merge em um comando
git pull origin main

# pull com rebase (histórico mais limpo, sem commits de merge)
git pull --rebase origin main
```

> **Dica profissional:** Prefira `git fetch` + análise + `git merge` em projetos críticos, para não aplicar mudanças cegas na sua branch local.

---

### Autenticação com GitHub

**Via SSH (recomendado para uso diário):**

```bash
# 1. Gerar par de chaves SSH
ssh-keygen -t ed25519 -C "seu@email.com"

# 2. Iniciar o ssh-agent e adicionar a chave
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# 3. Copiar a chave pública
cat ~/.ssh/id_ed25519.pub
# Cole em: GitHub > Settings > SSH and GPG keys > New SSH key

# 4. Testar a conexão
ssh -T git@github.com
# Saída esperada: Hi usuario! You've successfully authenticated...

# 5. Usar URL SSH nos remotos
git remote set-url origin git@github.com:usuario/repositorio.git
```

---

### Pull Requests (PRs) — O Fluxo de Revisão

Um Pull Request é a solicitação formal para que o código de uma branch seja revisado e integrado à branch principal.

**Fluxo típico:**

```bash
# 1. Crie uma branch para a feature
git switch -c feature/nova-funcionalidade

# 2. Desenvolva e faça commits
git add .
git commit -m "feat: implementar nova funcionalidade"

# 3. Envie a branch para o remoto
git push -u origin feature/nova-funcionalidade

# 4. No GitHub: abra um Pull Request da sua branch para 'main'
# 5. A equipe revisa, comenta, pede ajustes
# 6. Você faz os ajustes e empurra novos commits para a mesma branch
# 7. Após aprovação, o PR é mergeado

# 8. Limpe a branch local após o merge
git switch main
git pull
git branch -d feature/nova-funcionalidade
```

---

### Trabalhando com Forks (Open Source)

```bash
# 1. No GitHub: faça o fork do repositório original
# 2. Clone o SEU fork
git clone https://github.com/SEU-USUARIO/projeto.git

# 3. Adicione o repositório original como remoto "upstream"
git remote add upstream https://github.com/AUTOR-ORIGINAL/projeto.git

# 4. Para manter seu fork atualizado com o original:
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

# 5. Crie sua feature branch, desenvolva, e abra um PR do seu fork para o original
```

---

## 7. Comandos Avançados e Recuperação

### `git stash` — Guardando Trabalho Temporariamente

Útil quando você precisa trocar de branch com mudanças inacabadas (sem querer fazer commit ainda).

```bash
# Guardar as mudanças atuais
git stash

# Guardar com uma descrição
git stash push -m "trabalho em andamento: validação do formulário"

# Guardar incluindo arquivos novos (untracked)
git stash -u

# Ver a lista de stashes
git stash list
# stash@{0}: On main: trabalho em andamento: validação do formulário
# stash@{1}: WIP on feature/login: a3f5c2d ajuste no layout

# Aplicar o stash mais recente (mantém na lista)
git stash apply

# Aplicar um stash específico
git stash apply stash@{1}

# Aplicar e remover da lista ao mesmo tempo
git stash pop

# Remover um stash específico
git stash drop stash@{1}

# Limpar todos os stashes
git stash clear

# Ver o conteúdo de um stash sem aplicar
git stash show -p stash@{0}
```

---

### `git reset` — Voltando no Tempo (Branch Privada)

```bash
# Ver o log para pegar o ID do commit
git log --oneline
# e5a1b2c (HEAD -> main) feat: página de contato  <- commit atual
# 3d8f9a1 fix: quebra de layout no mobile
# 1a4b5c6 chore: commit inicial

# --soft: desfaz o commit, mantém as mudanças NO STAGE
git reset --soft 3d8f9a1
# Útil para: reescrever a mensagem de commit ou reagrupar commits

# --mixed (padrão): desfaz o commit, mantém as mudanças NO WORKING DIRECTORY
git reset 3d8f9a1
# Útil para: refazer os commits com mais granularidade

# --hard: desfaz o commit E DESCARTA as mudanças (IRREVERSÍVEL*)
git reset --hard 3d8f9a1
# *Use com extremo cuidado. Mudanças não commitadas são perdidas para sempre.
```

> **Aviso:** `git reset` REESCREVE o histórico. Nunca use em branches já compartilhadas (pushed). Use `git revert` nesses casos.

---

### `git revert` — Desfazendo com Segurança (Branch Compartilhada)

```bash
# Cria um NOVO commit que desfaz as mudanças do commit indicado
git revert a3f5c2d

# Revert sem abrir o editor (usa mensagem automática)
git revert a3f5c2d --no-edit

# Revert de um merge commit
git revert -m 1 <hash-do-merge-commit>
# -m 1 indica que queremos manter o "lado 1" (branch de destino, normalmente main)
```

---

### Recuperando Commits "Perdidos" com `git reflog`

O `reflog` é um diário interno do Git que registra para onde o `HEAD` apontou, mesmo que o commit não apareça mais no `git log`.

```bash
git reflog
# HEAD@{0}: reset: moving to 3d8f9a1
# HEAD@{1}: commit: feat: página de contato   <- commit "perdido"!
# HEAD@{2}: commit: fix: quebra de layout

# Para recuperar o commit perdido:
git checkout -b branch-recuperada HEAD@{1}
# Ou:
git reset --hard HEAD@{1}
```

---

### `git bisect` — Encontrando o Commit que Introduziu um Bug

```bash
# Iniciar a bisseção
git bisect start

# Informar que o commit atual tem o bug
git bisect bad

# Informar um commit que NÃO tinha o bug
git bisect good 1a4b5c6

# O Git vai fazer checkout de um commit do meio.
# Teste o código e informe:
git bisect good   # Se não tem o bug
git bisect bad    # Se tem o bug

# Repita até o Git identificar o primeiro commit problemático.
# Ao finalizar:
git bisect reset
```

---

### `git tag` — Marcando Versões

```bash
# Criar uma tag leve (apenas um ponteiro)
git tag v1.0.0

# Criar uma tag anotada (com mensagem, autor e data — recomendada)
git tag -a v1.0.0 -m "Versão 1.0.0: lançamento inicial"

# Criar uma tag em um commit específico
git tag -a v0.9.0 3d8f9a1 -m "Release candidate"

# Listar tags
git tag
git tag -l "v1.*"   # com filtro

# Ver detalhes de uma tag
git show v1.0.0

# Enviar tags para o remoto
git push origin v1.0.0
git push --tags   # todas as tags

# Deletar uma tag
git tag -d v1.0.0
git push origin --delete v1.0.0   # remover do remoto
```

---

### `git blame` — Rastreando Autoria

```bash
# Ver quem escreveu cada linha de um arquivo
git blame index.html

# Ver blame de um intervalo de linhas
git blame -L 10,20 index.html
```

Saída:

```
a3f5c2d (João Silva  2024-03-10 09:15:42 -0300  10) <h1>Bem-vindo</h1>
3d8f9a1 (Maria Lima  2024-03-11 14:22:01 -0300  11) <p>Texto descritivo</p>
```

---

## 8. Boas Práticas e Fluxos de Trabalho

### Padrão de Mensagens de Commit (Conventional Commits)

```
git commit -m "tipo(escopo): o que foi feito"
```

| Tipo | Uso |
| :--- | :--- |
| `feat` | Nova funcionalidade para o usuário |
| `fix` | Correção de bug |
| `docs` | Mudanças apenas na documentação |
| `style` | Formatação, ponto-e-vírgula faltando (sem mudança de lógica) |
| `refactor` | Refatoração de código (sem fix, sem feat) |
| `test` | Adicionando ou corrigindo testes |
| `chore` | Atualizações de build, dependências, CI |
| `perf` | Melhoria de performance |
| `ci` | Mudanças em configuração de CI/CD |
| `revert` | Reversão de commit anterior |

**Exemplos:**

```
git commit -m "feat: adicionar login com Google OAuth"
git commit -m "fix: corrigir erro 500 ao criar usuário sem e-mail"
git commit -m "docs: atualizar README com instruções de instalação"
git commit -m "style: ajustar espaçamento e remover ponto e vírgula desnecessário"
git commit -m "refactor: separar lógica de validação em service"
git commit -m "test: adicionar testes para rota de criação de usuário"
git commit -m "chored: atualizar dependências do projeto"
git commit -m "perf: otimizar consulta ao banco de dados"
git commit -m "ci: configurar pipeline de deploy no GitHub Actions"
git commit -m "revert: reverter commit de autenticação por quebra na API"
```

---

### O Arquivo `.gitignore`

O `.gitignore` lista padrões de arquivos e pastas que o Git deve ignorar completamente.

```bash
# Criar na raiz do projeto
touch .gitignore
```

**Conteúdo de exemplo para um projeto Node.js:**

```gitignore
# Dependências
node_modules/
.npm

# Variáveis de ambiente (NUNCA versionar senhas!)
.env
.env.local
.env.*.local

# Build
dist/
build/
out/

# Logs
*.log
logs/

# Sistema operacional
.DS_Store         # macOS
Thumbs.db         # Windows
.idea/            # IntelliJ
.vscode/          # VS Code (configurações pessoais)

# Cobertura de testes
coverage/
```

**Sintaxe do `.gitignore`:**

```gitignore
# Comentário
arquivo.txt         # Ignora um arquivo específico
*.log               # Ignora todos os arquivos .log (em qualquer subpasta)
/arquivo.txt        # Ignora apenas na raiz
pasta/              # Ignora uma pasta inteira
!importante.log     # Exceção: NÃO ignora este arquivo específico
```

> **Dica:** Use [gitignore.io](https://www.toptal.com/developers/gitignore) para gerar `.gitignore` específico para sua stack.

---

### Ignorando arquivos já rastreados

Se você já commitou um arquivo e quer que o Git passe a ignorá-lo:

```bash
# 1. Adicione ao .gitignore
echo "config/secrets.json" >> .gitignore

# 2. Remova do rastreamento (mas mantém o arquivo localmente)
git rm --cached config/secrets.json

# 3. Commit a remoção
git commit -m "chore: parar de rastrear arquivo de segredos"
```

---

### Fluxos de Trabalho (Git Workflow)

#### Git Flow

Ideal para projetos com releases versionadas e ciclos de lançamento definidos.

```
main        ──●────────────────────────────●──  (código em produção, com tags)
              │                           /│\
hotfix        └──●───────────────────────● │ |
                                           │ │
develop     ──●──●──●──●──●──●──●──●──●────● │  (integração)
                 │              │            │
feature/A        └────●──●──●───┘            │
                                             │
release/1.0   ●──────────────────────────────┘  (preparação de release)
```

**Branches:**
- `main` / `master`: código em produção, sempre estável. Cada merge gera uma tag de versão.
- `hotfix/*`: correções urgentes em produção (saem de `main`, vão para `main` e `develop`).
- `develop`: branch de integração, o "próximo release".
- `feature/*`: novas funcionalidades (saem de `develop`, voltam para `develop`).
- `release/*`: preparação de release (saem de `develop`, vão para `main` e `develop`).

#### Trunk-Based Development

Ideal para times ágeis com CI/CD maduro. Todos trabalham em branches de curta duração (max 1-2 dias) e mergeiam diretamente na `main`.

```bash
# Branch de vida curta
git switch -c fix/corrigir-login
# ... trabalhe ...
git push -u origin fix/corrigir-login
# Abra PR → Aprovação automática via CI → Merge → Deletar branch
```

#### Feature Flags

Complemento ao Trunk-Based: código novo é mergeado mas ativado por flags de configuração, não por branches separadas.

---

## 9. Git para Equipes: Cenários Reais

### Cenário 1: Sincronizando com a Main antes de finalizar sua feature

```bash
# Você está na sua feature branch
git switch feature/minha-feature

# Opção A: Merge (preserva histórico)
git fetch origin
git merge origin/main

# Opção B: Rebase (histórico limpo — preferida)
git fetch origin
git rebase origin/main
# Se houver conflitos, resolva e continue:
git rebase --continue
# Para abortar o rebase:
git rebase --abort
```

### Cenário 2: Squash de commits antes do PR

Agrupa vários commits WIP em um único commit limpo:

```bash
# Ver quantos commits você quer "espremer"
git log --oneline main..HEAD
# 4 commits acima da main

# Squash interativo dos últimos 4 commits
git rebase -i HEAD~4
```

O editor abrirá:

```
pick a3f5c2d feat: página de login
pick b7e1f9a wip: ajuste no formulário
pick c9d3e0f fix: typo no label
pick d1f4g5h fix: validação
```

Mude `pick` para `squash` (ou `s`) nos commits que deseja mesclar:

```
pick a3f5c2d feat: página de login
squash b7e1f9a wip: ajuste no formulário
squash c9d3e0f fix: typo no label
squash d1f4g5h fix: validação
```

Salve, edite a mensagem final, e pronto.

### Cenário 3: Erro grave em produção (Hotfix)

```bash
# 1. Crie hotfix a partir da main (código estável)
git switch main
git pull
git switch -c hotfix/corrigir-pagamento-critico

# 2. Corrija o bug
git add .
git commit -m "fix: corrigir cálculo de valor total no pagamento"

# 3. Merge em main E em develop
git switch main
git merge --no-ff hotfix/corrigir-pagamento-critico
git tag -a v1.0.1 -m "Hotfix: correção crítica no pagamento"
git push origin main --tags

git switch develop
git merge --no-ff hotfix/corrigir-pagamento-critico
git push origin develop

# 4. Deletar hotfix branch
git branch -d hotfix/corrigir-pagamento-critico
git push origin --delete hotfix/corrigir-pagamento-critico
```

---

## 10. Aliases e Produtividade

Configure atalhos para os comandos mais usados:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --all --decorate"
git config --global alias.undo "reset --soft HEAD~1"
git config --global alias.unstage "reset HEAD --"
git config --global alias.last "log -1 HEAD --stat"
git config --global alias.aliases "config --get-regexp alias"
```

**Usando:**

```bash
git st          # git status
git lg          # log visual
git undo        # desfaz o último commit mantendo as mudanças
git unstage arquivo.js  # tira do stage
```

---

## 11. Referência Rápida de Comandos

### Configuração

| Comando | Descrição |
| :--- | :--- |
| `git config --global user.name "Nome"` | Define nome global |
| `git config --global user.email "email"` | Define e-mail global |
| `git config --list` | Lista todas as configurações |

### Repositório

| Comando | Descrição |
| :--- | :--- |
| `git init` | Inicializa repositório local |
| `git clone <url>` | Clona repositório remoto |

### Ciclo Básico

| Comando | Descrição |
| :--- | :--- |
| `git status` | Estado dos arquivos |
| `git add <arquivo>` | Adiciona ao stage |
| `git add .` | Adiciona tudo ao stage |
| `git commit -m "msg"` | Cria commit |
| `git commit --amend` | Corrige o último commit |
| `git log --oneline` | Histórico compacto |
| `git diff` | Diferenças no working dir |
| `git diff --staged` | Diferenças no stage |

### Branches

| Comando | Descrição |
| :--- | :--- |
| `git branch` | Lista branches |
| `git branch <nome>` | Cria branch |
| `git switch <nome>` | Muda de branch |
| `git switch -c <nome>` | Cria e muda para branch |
| `git merge <branch>` | Mescla branch na atual |
| `git rebase <branch>` | Reaplica commits em cima de outra branch |
| `git branch -d <nome>` | Deleta branch (safe) |
| `git cherry-pick <hash>` | Copia commit específico |

### Remoto

| Comando | Descrição |
| :--- | :--- |
| `git remote -v` | Lista remotos |
| `git remote add origin <url>` | Adiciona remoto |
| `git push -u origin <branch>` | Envia e define upstream |
| `git pull` | Fetch + merge do remoto |
| `git fetch` | Baixa sem aplicar |

### Recuperação

| Comando | Descrição |
| :--- | :--- |
| `git stash` | Guarda mudanças temporariamente |
| `git stash pop` | Restaura e remove stash |
| `git reset --soft HEAD~1` | Desfaz commit, mantém no stage |
| `git reset --hard HEAD~1` | Desfaz commit e mudanças  |
| `git revert <hash>` | Desfaz com novo commit (seguro) |
| `git reflog` | Histórico de movimentos do HEAD |
| `git restore <arquivo>` | Descarta mudanças no working dir |
| `git restore --staged <arquivo>` | Tira do stage |

### Avançado

| Comando | Descrição |
| :--- | :--- |
| `git tag -a v1.0.0 -m "msg"` | Cria tag anotada |
| `git blame <arquivo>` | Mostra autoria por linha |
| `git bisect start` | Inicia busca binária por bug |
| `git rebase -i HEAD~N` | Rebase interativo (squash, etc.) |

---

## Recursos para Continuar Aprendendo

- **Documentação Oficial:** [git-scm.com/doc](https://git-scm.com/doc)
- **Livro gratuito:** [Pro Git Book](https://git-scm.com/book/pt-br/v2) (disponível em português)
- **Prática interativa:** [learngitbranching.js.org](https://learngitbranching.js.org/?locale=pt_BR)
- **Gerar .gitignore:** [gitignore.io](https://www.toptal.com/developers/gitignore)
- **Conventional Commits:** [conventionalcommits.org](https://www.conventionalcommits.org/pt-br/)

---

*Guia elaborado como referência técnica completa — do iniciante ao intermdintermediário.*