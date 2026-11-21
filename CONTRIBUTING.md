# Como contribuir com o TrilhaDoDev

Obrigado por querer participar do TrilhaDoDev. O projeto é colaborativo e busca oferecer conteúdo de estudo claro, prático e acessível em português.

## Antes de começar

Leia estes arquivos para entender o projeto e o padrão esperado:

- [README.md](./README.md) — visão geral e pontos de entrada.
- [TEMPLATE.md](./TEMPLATE.md) — estrutura sugerida para aulas, módulos, exercícios e projetos.
- [Código de conduta](./CODE_OF_CONDUCT.md) — expectativas para a comunidade.
- [Guias de estudo](./Guias/README.md) — materiais de apoio.
- [Guia de Git e GitHub](./Guias/como-usar-git-e-github.md) — fluxo de versionamento e colaboração.

Você precisará de uma conta no GitHub, Git instalado e um editor de texto ou código.

## O que pode ser contribuído

- Correções de conteúdo, ortografia, acessibilidade ou links.
- Melhorias em explicações e exemplos existentes.
- Novas aulas, exercícios, módulos e projetos.
- Organização de uma área que ainda esteja em construção.
- Issues com sugestões, dúvidas ou propostas de novos temas.

## Fluxo de contribuição

1. Abra ou procure uma issue para entender o contexto da alteração, quando aplicável.
2. Faça um fork do repositório e clone o seu fork.
3. Crie uma branch descritiva a partir de `main`.
4. Faça a alteração mantendo o padrão da pasta e dos arquivos relacionados.
5. Revise o conteúdo e valide os links relativos.
6. Faça um commit pequeno e descritivo.
7. Envie a branch para o seu fork e abra um pull request.

Exemplo:

```bash
git checkout -b docs/frontend-fundamentos
git add README.md
git commit -m "docs(frontend): atualiza guia de fundamentos"
git push -u origin docs/frontend-fundamentos
```

## Organização do repositório

- `Guias/` — materiais de apoio para estudo, pesquisa e Git/GitHub.
- `Trilhas/` — conteúdo principal organizado por área.
- `Img/` — imagens e recursos visuais.
- `TEMPLATE.md` — modelo geral para novos conteúdos.
- `CHANGELOG.md` — histórico de alterações relevantes.

Na trilha de Frontend, os fundamentos estão em `Trilhas/Frontend/Fundamentos/`, com conteúdos em `HTML/`, `CSS/` e a estrutura inicial de `DOM/`. Respeite maiúsculas e minúsculas nos nomes: os caminhos podem ser diferenciados em sistemas Linux e em servidores Git.

## Padrões para novos conteúdos

- Coloque o arquivo na trilha e no assunto corretos.
- Use nomes descritivos, em minúsculas quando criar novos arquivos, com palavras separadas por hífen.
- Explique o objetivo e os pré-requisitos antes do conteúdo principal.
- Apresente o conceito antes do exemplo e inclua exercícios quando fizer sentido.
- Prefira exemplos funcionais, originais e fáceis de reproduzir.
- Use Markdown consistente e links relativos que realmente existam.
- Inclua referências confiáveis quando o conteúdo depender de uma fonte externa.
- Não inclua senhas, tokens, dados pessoais ou arquivos gerados desnecessários.

O [TEMPLATE.md](./TEMPLATE.md) contém estruturas prontas para módulos, projetos e exercícios.

## Commits

Use mensagens curtas no formato `tipo(escopo): descrição`, por exemplo:

```text
feat(javascript): adiciona aula sobre funções
fix(docs): corrige link para o guia de Git
docs(contributing): esclarece fluxo de pull request
```

Tipos comuns são `feat`, `fix`, `docs`, `refactor` e `chore`.

## Pull requests

Descreva no pull request:

- o que foi alterado e por quê;
- quais pastas ou áreas foram afetadas;
- como o conteúdo foi revisado ou validado;
- dúvidas, limitações ou pontos que precisam de atenção.

Mantenha cada pull request focado em um objetivo. Se a mudança for grande, divida-a em partes menores quando possível.

## Checklist antes de enviar

- [ ] O conteúdo está claro, correto e adequado ao nível proposto.
- [ ] Os arquivos estão na pasta correta e seguem a nomenclatura do projeto.
- [ ] Os links relativos foram verificados.
- [ ] Não há duplicação desnecessária ou conteúdo copiado sem adaptação.
- [ ] O Markdown foi revisado no preview.
- [ ] O pull request explica a alteração e sua validação.

## Dúvidas e convivência

Abra uma issue para dúvidas e sugestões. Ao participar, siga o [Código de conduta](./CODE_OF_CONDUCT.md) e mantenha as discussões respeitosas, objetivas e acolhedoras.
