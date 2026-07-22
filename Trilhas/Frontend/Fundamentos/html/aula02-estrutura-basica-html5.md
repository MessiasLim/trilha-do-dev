# Estrutura Básica de uma Página HTML5

## 1. DOCTYPE - Declaração do Tipo de Documento

### O que é DOCTYPE?

DOCTYPE é a primeira declaração de um arquivo HTML. Informa ao navegador qual versão
do HTML está sendo usada. DEVE estar na primeira linha do arquivo, antes de qualquer
outra coisa.

### HTML5 (Atual - Usar Este)

```html
<!DOCTYPE html>
```

Esta é a forma simplificada para HTML5. É muito mais curta que nas versões anteriores.
Todos os novos projetos DEVEM usar esta declaração.

### Versões Antigas (NÃO usar)

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
  "http://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

Estas são antigas e desnecessárias. Use apenas `<!DOCTYPE html>`.

## 2. Tag `<html>` - Raiz do Documento

### O que é?

A tag `<html>` é o elemento raiz que envolve toda a página. Tudo em um documento HTML
(exceto DOCTYPE) deve estar dentro desta tag.

### Atributo lang

Especifica o idioma principal da página. Melhor para SEO e acessibilidade.

```html
<!-- Português Brasil -->
<html lang="pt-br">

<!-- Português Portugal -->
<html lang="pt-PT">

<!-- Inglês -->
<html lang="en">

<!-- Espanhol -->
<html lang="es">
```

Leitores de tela usam este atributo para pronunciar o texto corretamente.

## 3. Tag `<head>` - Metadados da Página

### O que é?

O `<head>` contém informações sobre a página que NÃO são exibidas diretamente no navegador.
Inclui metadados, links para estilos CSS, scripts, favicon, etc.

### O que vai dentro do `<head>`?

#### 3.1 - Meta Charset

```html
<meta charset="UTF-8">
```

Define a codificação de caracteres. UTF-8 suporta todos os idiomas e caracteres especiais.
DEVE estar logo após a abertura do `<head>`.

#### 3.2 - Meta Viewport (Responsividade)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Essencial para dispositivos móveis. Sem isso, a página não será responsiva.

**Explicação dos atributos:**

- **width=device-width:** Largura da viewport = largura do dispositivo
- **initial-scale=1.0:** Zoom inicial 100% (sem zoom automático)

#### 3.3 - Title (Título da Página)

```html
<title>Minha Página Incível</title>
```

Aparece na aba do navegador e é muito importante para SEO.
Deve ser descritivo e conter palavras-chave relevantes (50-60 caracteres).

#### 3.4 - Meta Description

```html
<meta name="description" content="Descrição breve da página, até 160 caracteres">
```

Aparece nos resultados de busca do Google. Deve ser clara e atraente.

#### 3.5 - Link para CSS

```html
<link rel="stylesheet" href="style.css">
```

Vincula o arquivo CSS externo. Use isso em vez de `<style>` inline para melhor organização.

#### 3.6 - Favicon

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

Pequeno ícone exibido na aba do navegador ao lado do título.

#### 3.7 - Script

```html
<script src="script.js"></script>
```

Pode estar no `<head>` (com atributo `defer`) ou no final do `<body>` para melhor performance.

## 4. Tag `<body>` - Conteúdo Visível

### O que é?

Todo conteúdo visível no navegador vai dentro da tag `<body>`.
Textos, imagens, vídeos, formulários, botões, etc.

### Estrutura Semântica Dentro do Body

```html
<body>
  <!-- Cabeçalho da página -->
  <header>
    <h1>Logo/Título</h1>
  </header>

  <!-- Navegação principal -->
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/sobre">Sobre</a></li>
    </ul>
  </nav>

  <!-- Conteúdo principal -->
  <main>
    <article>
      <h2>Título do Artigo</h2>
      <p>Conteúdo...</p>
    </article>

    <aside>
      <h3>Sidebar</h3>
      <p>Conteúdo adicional...</p>
    </aside>
  </main>

  <!-- Rodapé -->
  <footer>
    <p>&copy; 2024 - Todos os direitos reservados</p>
  </footer>
</body>
```

## 5. Exemplo Completo - Template Básico

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <!-- Codificação e Responsividade -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO -->
  <title>Meu Incrível Site | Slogan da Marca</title>
  <meta name="description" content="Descrição breve do site que aparece no Google">
  
  <!-- Favicon -->
  <link rel="icon" href="favicon.ico">
  
  <!-- Estilos CSS -->
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <!-- Cabeçalho -->
  <header>
    <h1>Bem-vindo ao Meu Site</h1>
  </header>

  <!-- Navegação -->
  <nav>
    <a href="/">Home</a>
    <a href="/servicos">Serviços</a>
    <a href="/contato">Contato</a>
  </nav>

  <!-- Conteúdo Principal -->
  <main>
    <h2>Olá, mundo!</h2>
    <p>Este é um exemplo de página HTML bem estruturada.</p>
  </main>

  <!-- Rodapé -->
  <footer>
    <p>&copy; 2024 - Meu Site. Todos os direitos reservados.</p>
  </footer>

  <!-- Script JavaScript (opcional) -->
  <script src="script.js"></script>
</body>
</html>
```

## 6. Checklist - Estrutura Básica

- [ ] DOCTYPE html na primeira linha
- [ ] `<html lang="pt-br">` com atributo lang
- [ ] `<head>` com:
  - [ ] Meta charset UTF-8
  - [ ] Meta viewport
  - [ ] Title descritivo
  - [ ] Meta description
  - [ ] Link CSS (se houver)
- [ ] `<body>` com conteúdo estruturado semanticamente
- [ ] Todas as tags abertas e fechadas corretamente
- [ ] Indentação consistente para legibilidade
