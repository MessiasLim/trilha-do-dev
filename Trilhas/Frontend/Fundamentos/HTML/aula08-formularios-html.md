# Formulários em HTML: inputs, validação e acessibilidade

Este guia cobre elementos de formulários: `input` (texto, email, password, number, date, checkbox, radio), `select`, `textarea`, validação nativa e acessibilidade.

## 1. Estrutura semântica

Formulários usam `<form>` como container. Use `<label>` para associar rótulos aos controles (`for` ou aninhamento).

### Exemplo básico

```html
<form action="/enviar" method="post">
  <label for="nome">Nome</label>
  <input type="text" id="nome" name="nome" required>

  <button type="submit">Enviar</button>
</form>
```

## 2. Tipos de input essenciais

- `text`: entrada livre
- `email`: validação básica de formato
- `password`: campo sensível
- `number`: valores numéricos com `min`/`max`
- `date`/`time`/`datetime-local`
- `checkbox`/`radio`: seleções

### Exemplo com vários tipos

```html
<form>
  <label>E-mail<input type="email" name="email" required></label>
  <label>Senha<input type="password" name="senha" minlength="8" required></label>
  <label>Idade<input type="number" name="idade" min="0" max="120"></label>
  <label>Data de nascimento<input type="date" name="nascimento"></label>
</form>
```

## 3. Validação HTML5

HTML5 fornece validação nativa: `required`, `pattern`, `minlength`, `maxlength`, `min`, `max`, e tipos específicos.

### Exemplo de pattern

```html
<label>CEP (formato 00000-000)<
  <input type="text" name="cep" pattern="\d{5}-\d{3}" required>
</label>
```

## 4. Acessibilidade em formulários

- Use `label` para todos os controles.
- Associe mensagens de erro com `aria-describedby`.
- Evite colocar placeholders como único rótulo — placeholders não são substitutos de rótulos.

### Exemplo com aria-describedby

```html
<label for="email">E-mail</label>
<input id="email" name="email" type="email" aria-describedby="emailHelp" required>
<small id="emailHelp">Nunca compartilharemos seu e-mail.</small>
```

## 5. Grupos de campos (fieldset e legend)

```html
<fieldset>
  <legend>Preferências</legend>
  <label><input type="checkbox" name="noticias"> Receber novidades</label>
</fieldset>
```

## 6. Exemplo prático: formulário de cadastro

```html
<form action="/cadastrar" method="post" novalidate>
  <label for="nome">Nome completo</label>
  <input id="nome" name="nome" type="text" required>

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>

  <label for="senha">Senha</label>
  <input id="senha" name="senha" type="password" minlength="8" required>

  <button type="submit">Cadastrar</button>
</form>
```

## 7. Boas práticas e armadilhas

- Use `autocomplete` para melhorar UX (ex.: `autocomplete="name"`).
- Não confie apenas na validação do cliente — valide no servidor.
- Evite múltiplos botões de submissão confusos; use roles claras.
- Considere usar `novalidate` se implementar validação customizada via JS.

## 8. Conclusão

Formulários bem feitos combinam semântica, validação e acessibilidade. Use atributos HTML nativos quando possível e complemente com JS apenas quando necessário.
