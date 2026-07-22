# Acessibilidade com ARIA (Accessible Rich Internet Applications)

## O que é ARIA?

ARIA é um conjunto de atributos que complementam a semântica HTML5 para melhorar
a acessibilidade de aplicações web complexas. ARIA adiciona informações adicionais
para tecnologias assistivas (leitores de tela, magnificadores, etc).

### Princípio Fundamental

**Use HTML semântico PRIMEIRO. Use ARIA como complemento.**

## 1. Role - Definindo o Propósito

### O que é role?

`role` define o propósito funcional de um elemento.
Informa ao leitor de tela qual é o tipo/função do elemento.

```html
<!-- Exemplos de roles -->
<nav role="navigation">...</nav>
<div role="button">Clique</div>
<div role="alert">Erro!</div>
```

## 2. aria-label - Rótulo Acessível

### Quando usar

Para botões com ícones, elementos sem rótulo visual óbvio.

```html
<button aria-label="Fechar">×</button>
<button aria-label="Menu">☰</button>
```

## 3. aria-labelledby - Referência a Rótulo

```html
<h2 id="title">Modal de Confirmação</h2>
<div role="dialog" aria-labelledby="title">...</div>
```

## 4. aria-describedby - Descrição Adicional

```html
<input aria-describedby="hint">
<p id="hint">Mínimo 8 caracteres</p>
```

## 5. aria-live - Conteúdo Dinâmico

```html
<div aria-live="polite">Carregando...</div>
<div role="alert" aria-live="assertive">Erro!</div>
```

## 6. aria-hidden - Esconder de Leitores de Tela

```html
<span aria-hidden="true">★</span> 5 estrelas
```

## 7. aria-expanded e aria-controls

```html
<button aria-expanded="false" aria-controls="menu">Menu</button>
<nav id="menu" hidden>...</nav>
```

## 8. aria-current - Item Ativo

```html
<a href="/blog" aria-current="page">Blog</a>
```

## Boas Práticas

- Use HTML semântico PRIMEIRO
- Teste com leitores de tela reais
- Mantenha ARIA sincronizado com o DOM
- Use com moderação
