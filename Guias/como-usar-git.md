# Como usar Git

Git é a ferramenta padrão para controle de versão. Entender os comandos básicos ajuda a trabalhar em qualquer projeto.

## Conceitos principais
- **Repositório:** lugar onde o código e o histórico são guardados.
- **Commit:** registro de uma mudança.
- **Branch:** linha paralela de desenvolvimento.
- **Merge:** juntar mudanças de uma branch na outra.

## Comandos essenciais
- `git clone <url>` — clona um repositório.
- `git status` — vê o estado dos arquivos.
- `git add <arquivo>` — prepara arquivos para commit.
- `git commit -m "mensagem"` — cria um commit.
- `git push` — envia mudanças ao repositório remoto.
- `git pull` — atualiza com as alterações do remoto.

## Fluxo sugerido
1. Crie uma branch com `git checkout -b minha-branch`.
2. Faça commits pequenos e claros.
3. Sincronize com `git pull origin main` antes de enviar.
4. Abra um pull request para revisão.

## Boas mensagens de commit
- Use verbo no infinitivo: `Adiciona`, `Corrige`, `Atualiza`.
- Seja curto e claro.
- Explique o porquê quando necessário.

## Dicas extras
- Use `.gitignore` para arquivos que não devem ir ao repositório.
- Revise o diff antes de commitar.
- Peça revisão quando fizer mudanças importantes.
