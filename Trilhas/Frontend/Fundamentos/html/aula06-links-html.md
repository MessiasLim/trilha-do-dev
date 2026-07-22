# Links em HTML: `<a>` — atributos e casos avançados

Links conectam páginas, recursos e ações. Este guia mostra atributos essenciais e avançados, exemplos práticos, quando usar cada recurso e problemas de segurança/SEO.

## 1. Sintaxe básica

Elemento `<a>` cria uma âncora que pode apontar para uma URL, um fragmento, um email ou um arquivo para download.

### Exemplos

```html
<a href="https://example.com">Visitar site</a>

<a href="#secao">Ir para seção na mesma página</a>

<a href="mailto:contato@example.com">Enviar e-mail</a>
```

## 2. Atributo `target`

`target` controla onde o link será aberto. Valores comuns: `_self`, `_blank`, `_parent`, `_top`.

### Exemplo: abrir em nova aba

```html
<a href="https://exemplo.com" target="_blank">Abrir nova aba</a>
```

### Segurança com `_blank`

Quando usar `target="_blank"`, adicione `rel="noopener noreferrer"` para evitar que a página aberta acesse `window.opener` (vulnerabilidade de phishing/performance).

## 3. Atributo `rel`

`rel` define relação entre documento atual e destino. Muito usado com `nofollow`, `noopener`, `noreferrer`, `ugc` e `sponsored`.

### Exemplo e quando usar

```html
<a href="https://exemplo.com" target="_blank" rel="noopener noreferrer nofollow">Link seguro e sem follow</a>
```

- **nofollow**: pede que motores de busca não transfiram autoridade.
- **noopener** + **noreferrer**: segurança e privacidade ao abrir nova aba.

## 4. Atributo `download`

`download` instrui o navegador a baixar o recurso referenciado em vez de navegar até ele (nem sempre respeitado por CORS ou tipos MIME).

### Exemplo

```html
<a href="/arquivos/guia.pdf" download="guia-minha-empresa.pdf">Baixar guia (PDF)</a>
```

Dica: o atributo pode sugerir um nome de arquivo diferente.

## 5. Fragment identifiers e navegação interna

Use `#id` para navegar entre seções da mesma página. Combine com `tabindex="-1"` para focar programaticamente seções para acessibilidade.

### Exemplo

```html
<a href="#sobre">Saltar para Sobre</a>
...
<h2 id="sobre" tabindex="-1">Sobre</h2>
```

## 6. Links programáticos e atributos ARIA

Links devem ser semanticamente corretos. Use `role="button"` apenas quando um elemento age como botão mas precisa ser um link visualmente, porém prefira usar o elemento correto para evitar confusão.

## 7. Links para recursos cruzados e segurança (CORS, referrer)

Ao linkar arquivos que exigem autenticação, downloads podem falhar. Use cabeçalhos CORS corretos no servidor e `rel="noreferrer"` quando não quiser enviar o referrer.

## 8. Boas práticas e armadilhas

- Não use `<a href="#">` sem propósito — prefira `button` para ações JS.
- Use texto descritivo no link para acessibilidade e SEO.
- Evite abrir tudo em novas abas — deixe o usuário controlar.

## 9. Exemplo prático completo (navegação, documento e downloads)

```html
<nav aria-label="Menu principal">
  <ul>
    <li><a href="/">Início</a></li>
    <li><a href="/produtos">Produtos</a></li>
    <li><a href="/contato" target="_blank" rel="noopener">Contato</a></li>
  </ul>
</nav>

<footer>
  <a href="/termos.pdf" download>Baixar termos</a>
</footer>
```

## 10. Conclusão

Links são simples, mas possuem nuances importantes (segurança, SEO e UX). Use atributos de forma consciente e prefira semântica correta.
