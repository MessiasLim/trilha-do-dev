# Atributos Globais HTML

*Explore atributos que funcionam em QUALQUER elemento HTML e transforme seu código*

## O que são Atributos Globais?

Atributos globais são aqueles que podem ser aplicados a praticamente QUALQUER elemento HTML,
não apenas a um tipo específico. Eles fornecem funcionalidades como acessibilidade,
interatividade, estilo, e armazenamento de dados customizados.

## Atributo ID

### 1. Identificador Único

`id` fornece um identificador único para um elemento. Deve ser único em toda a página.

**Exemplo 1: ID Básico**

```html
<div id="main-content">Conteúdo principal</div>
<aside id="sidebar">Sidebar</aside>
```

Uso em CSS:

```css
#main-content { width: 75%; }
#sidebar { width: 25%; }
```

Uso em JavaScript:

```javascript
document.getElementById('main-content').innerHTML = 'Novo conteúdo';
```

**Exemplo 2: IDs para Navegação**

```html
<a href="#secao-produtos">Ir para Produtos</a>
...
<section id="secao-produtos">
  <h2>Nossos Produtos</h2>
</section>
```

Clicando no link, a página pula para o elemento com aquele ID.

## Atributo Class

### 2. Classificação e Reutilização

`class` permite aplicar estilos e lógica a múltiplos elementos. Um elemento pode ter várias classes!

**Exemplo 1: Classes Simples**

```html
<div class="card">
  <h3>Produto 1</h3>
  <p>Descrição</p>
</div>

<div class="card">
  <h3>Produto 2</h3>
  <p>Descrição</p>
</div>
```

CSS:

```css
.card { border: 1px solid #ddd; padding: 20px; }
```

**Exemplo 2: Múltiplas Classes**

```html
<button class="btn btn-primary btn-lg">Clique aqui</button>
<button class="btn btn-secondary btn-sm">Cancelar</button>
```

CSS:

```css
.btn { padding: 10px 20px; border: none; cursor: pointer; }
.btn-primary { background: blue; color: white; }
.btn-secondary { background: gray; color: white; }
.btn-lg { font-size: 18px; }
.btn-sm { font-size: 12px; }
```

## Atributo Style (Inline CSS)

### 3. Estilos Inline

`style` permite aplicar CSS diretamente no elemento. Útil para estilos únicos e dinâmicos.

**Exemplo 1: Estilo Básico**

```html
<h1 style="color: blue; font-size: 36px;">Título Azul</h1>
<p style="text-align: center; margin: 20px;">Parágrafo centralizado</p>
```

**Exemplo 2: Estilos Dinâmicos com JavaScript**

```html
<div id="box">Box</div>

<script>
  // Mudar cor dinamicamente
  document.getElementById('box').style.backgroundColor = 'red';
  document.getElementById('box').style.width = '100px';
  document.getElementById('box').style.height = '100px';
</script>
```

## Data Attributes (data-*)

### 4. Armazenando Dados Customizados

`data-*` permite armazenar dados customizados em qualquer elemento, acessíveis via JavaScript.

**Exemplo 1: Data Attributes Básicos**

```html
<div class="user" data-id="123" data-name="João" data-role="admin">
  João (Admin)
</div>
```

JavaScript:

```javascript
const user = document.querySelector('.user');
console.log(user.dataset.id);     // "123"
console.log(user.dataset.name);   // "João"
console.log(user.dataset.role);   // "admin"
```

**Exemplo 2: Dados em Produtos**

```html
<div class="produto" 
     data-id="456"
     data-preco="99.90"
     data-estoque="15"
     data-categoria="eletrônicos">
  Smartphone
</div>
```

JavaScript:

```javascript
const produto = document.querySelector('.produto');
const preco = produto.dataset.preco;      // "99.90"
const estoque = produto.dataset.estoque;  // "15"
```

**Exemplo 3: Data Attributes com Hífens**

```html
<div data-user-first-name="João" data-user-last-name="Silva"></div>
```

JavaScript (camelCase automático):

```javascript
const nome = element.dataset.userFirstName;  // "João"
const sobrenome = element.dataset.userLastName; // "Silva"
```

## Atributo Title

### 5. Tooltip (Dica ao Passar o Mouse)

**Exemplo 1: Tooltips Básicos**

```html
<button title="Clique para salvar">Salvar</button>
<a href="#" title="Ir para página inicial">Home</a>
<img src="foto.jpg" title="Minha foto de perfil">
```

Resultado: ao passar o mouse, aparece o tooltip.

**Exemplo 2: Title em Elementos Complexos**

```html
<span title="Data de criação: 21 de fevereiro de 2026">
  Criado: 21/02/2026
</span>

<abbr title="HyperText Markup Language">HTML</abbr>
```

Resultado: abreviações e datas ganham contexto adicional.

## Atributo Lang

### 6. Indicando o Idioma

`lang` indica em qual idioma o conteúdo está escrito. Importante para acessibilidade e SEO.

**Exemplo 1: Lang no HTML**

```html
<html lang="pt-br">
```

Outros valores comuns:
- `en` (Inglês)
- `es` (Espanhol)
- `fr` (Francês)
- `de` (Alemão)
- `zh` (Chinês)

**Exemplo 2: Lang em Partes Específicas**

```html
<p lang="pt-br">Este parágrafo está em português.</p>
<p lang="en">This paragraph is in English.</p>
<p lang="es">Este párrafo está en español.</p>
```

Leitores de tela ajustam pronúncia automaticamente.

## Atributo Contenteditable

### 7. Tornando Elementos Editáveis

**Exemplo 1: Elemento Editável**

```html
<div contenteditable="true">
  Clique aqui para editar este texto!
</div>
```

O usuário pode clicar e editar o conteúdo diretamente.

**Exemplo 2: Notas Editáveis**

```html
<div class="nota" contenteditable="true" data-id="nota-1">
  Digite suas anotações aqui...
</div>

<script>
  const nota = document.querySelector('.nota');
  nota.addEventListener('blur', function() {
    const conteudo = this.textContent;
    const id = this.dataset.id;
    // Salvar no servidor
    salvarNota(id, conteudo);
  });
</script>
```

## Atributo Spellcheck

### 8. Verificação Ortográfica

**Exemplo 1: Ativar/Desativar Spell Check**

```html
<textarea spellcheck="true">Digite aqui...</textarea>

<input type="text" spellcheck="false" placeholder="Código">
```

Valores:
- `true`: ativa verificação ortográfica
- `false`: desativa verificação

## Atributo Draggable

### 9. Tornando Elementos Arrastáveis

**Exemplo 1: Elemento Arrastável**

```html
<div draggable="true" id="box">
  Arraste-me!
</div>

<script>
  const box = document.getElementById('box');
  
  box.addEventListener('dragstart', function(e) {
    e.dataTransfer.effectAllowed = 'move';
  });
</script>
```

## Atributo Hidden

### 10. Ocultando Elementos

**Exemplo 1: Elemento Oculto**

```html
<div hidden>Este elemento não será visível</div>
```

O elemento fica `display: none` sem precisar de CSS.

JavaScript para remover:

```javascript
element.removeAttribute('hidden');
```

JavaScript para adicionar:

```javascript
element.setAttribute('hidden', '');
```

## ⌨ Atributo Tabindex

### 11. Controlando Ordem de Tabulação

**Exemplo 1: Ordem de Tab**

```html
<input type="text" tabindex="1" placeholder="Primeiro">
<input type="text" tabindex="2" placeholder="Segundo">
<button tabindex="3">Enviar</button>
```

Pressionar Tab segue a ordem: 1 → 2 → 3

Valores especiais:
- `tabindex="0"`: elemento fica focável via Tab (ordem natural)
- `tabindex="-1"`: elemento não fica focável via Tab, mas focável via JS

## ♿ Atributos ARIA (Acessibilidade)

### 12. Melhorando Acessibilidade

ARIA (Accessible Rich Internet Applications) oferece atributos para melhorar acessibilidade para leitores de tela.

**Exemplo 1: aria-label**

```html
<button aria-label="Fechar menu">✕</button>
```

O leitor de tela lerá "Fechar menu" em vez de apenas "✕".

**Exemplo 2: aria-describedby**

```html
<input type="password" aria-describedby="pwd-hint">
<small id="pwd-hint">Mínimo 8 caracteres</small>
```

O leitor de tela lê a descrição junto com o input.

**Exemplo 3: aria-live (Conteúdo Dinâmico)**

```html
<div aria-live="polite" aria-atomic="true">
  Item adicionado ao carrinho!
</div>
```

O leitor de tela anuncia mudanças dinamicamente.

## Tabela de Referência Rápida

| Atributo | Valor | Função | Exemplo |
|---|---|---|---|
| `id` | Texto único | Identificador único | `id="main"` |
| `class` | Nomes separados por espaço | Classificação | `class="btn btn-primary"` |
| `style` | CSS inline | Estilos diretos | `style="color: red;"` |
| `data-*` | Qualquer valor | Dados customizados | `data-id="123"` |
| `title` | Texto | Tooltip | `title="Clique aqui"` |
| `lang` | Código idioma | Idioma do conteúdo | `lang="pt-br"` |
| `contenteditable` | true/false | Editar conteúdo | `contenteditable="true"` |
| `hidden` | Booleano | Ocultar elemento | `hidden` |
| `tabindex` | Número inteiro | Ordem de tab | `tabindex="1"` |

## Boas Práticas

### Faça Isto:

- Use IDs para elementos únicos (header, main, footer)
- Use classes para estilos reutilizáveis
- Use data-* para informações customizadas
- Sempre adicione atributos ARIA em interfaces complexas
- Use lang para indicar idiomas diferentes
- Combine atributos globais com semântica HTML5

### Não Faça Isto:

- Não use IDs para estilos (use classes)
- Não abuse de style inline (use CSS externo)
- Não crie classes com nomes vagos (use nomes descritivos)
- Não esqueça ARIA em elementos interativos
- Não misture dados importantes em data-* (sempre salve no servidor)

## Conclusão

Atributos globais são ferramentas poderosas que transformam elementos HTML simples
em componentes ricos e acessíveis. Domine id, class, data-*, ARIA e outros para
criar interfaces profissionais, acessíveis e fáceis de manter.

---

*Desenvolvido para aprendizado de Atributos Globais HTML*
*Última atualização: Fevereiro de 2026*
