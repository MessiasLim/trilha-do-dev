# 🔍 Meta Tags para SEO e Social Media

*Domine meta tags para melhorar ranking nos buscadores e compartilhamento em redes sociais*

## 📌 Introdução às Meta Tags

Meta tags são elementos HTML que fornecem informações sobre sua página aos buscadores e redes sociais.
Embora não apareçam visualmente na página, são CRÍTICAS para SEO, compartilhamento social e
experiência de usuário. Dominar meta tags pode aumentar seu tráfego em 30-50%.

## 🎯 Meta Tags Essenciais

### 1. Meta Tags Básicas

**Charset (Codificação)**

```html
<meta charset="UTF-8">
```

Deve ser a PRIMEIRA meta tag do head! UTF-8 é o padrão recomendado.

**Viewport (Responsividade)**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Essencial para mobile! Controla o zoom e largura da página.

**Description (Descrição da Página)**

```html
<meta name="description" content="Desenvolvedor web especializado em HTML, CSS e JavaScript. Vejo portfólio de projetos e entre em contato.">
```

- Limite: 150-160 caracteres (Google corta depois disso)
- Aparece no snippet dos resultados de busca
- MUITO importante para CTR (Click-Through Rate)

**Keywords (Palavras-chave)**

```html
<meta name="keywords" content="web development, HTML, CSS, JavaScript, SEO, frontend">
```

Nota: Google não utiliza mais esta tag para ranking, mas ainda é útil para contexto.

**Author (Autor da Página)**

```html
<meta name="author" content="João da Silva">
```

Identifica quem criou o conteúdo.

## 🚀 Meta Tags SEO Avançadas

### 2. Robots e Crawlers

**Meta Robots - Controle de Indexação**

```html
<meta name="robots" content="index, follow">
```

Valores:
- `index`: permite indexar a página
- `noindex`: não indexar a página
- `follow`: permite seguir links
- `nofollow`: não seguir links
- `all`: equivalente a "index, follow"
- `none`: equivalente a "noindex, nofollow"

Exemplo para página privada:

```html
<meta name="robots" content="noindex, nofollow">
```

### 3. Canonical URL

**Evitar Conteúdo Duplicado**

```html
<link rel="canonical" href="https://seudomain.com/produtos/camiseta">
```

Indica qual é a versão "oficial" se houver duplicação.
Muito importante se sua página é acessível por múltiplas URLs.

Exemplo de uso:
- `https://seudomain.com/produto?id=123`
- `https://seudomain.com/products/123`
- `https://seudomain.com/items/123`

Coloque canonical apontando para a URL preferida.

## 📱 Open Graph (Facebook, LinkedIn, etc)

### 4. Meta Tags Open Graph Completas

Open Graph permite controlar como sua página aparece quando compartilhada em redes sociais.

**Exemplo Completo de Open Graph**

```html
<!-- Open Graph Meta Tags -->
<meta property="og:url" content="https://seudomain.com/artigos/seo-2026">
<meta property="og:type" content="article">
<meta property="og:title" content="Guia Completo de SEO para 2026">
<meta property="og:description" content="Aprenda as melhores práticas de SEO para melhorar seu ranking">
<meta property="og:image" content="https://seudomain.com/img/seo-cover.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

Resultado: quando compartilhado no Facebook, mostra title, descrição e imagem customizada!

**Types de Open Graph Comuns**

```html
<meta property="og:type" content="website">
<!-- Para sites genéricos -->

<meta property="og:type" content="article">
<!-- Para artigos e blog posts -->

<meta property="og:type" content="video.movie">
<!-- Para vídeos -->

<meta property="og:type" content="music.song">
<!-- Para músicas -->

<meta property="og:type" content="product">
<!-- Para produtos de e-commerce -->
```

**Exemplo: Produto de E-commerce**

```html
<meta property="og:title" content="Camiseta Premium">
<meta property="og:type" content="product">
<meta property="og:price:amount" content="89.90">
<meta property="og:price:currency" content="BRL">
<meta property="og:image" content="https://seudomain.com/img/camiseta.jpg">
<meta property="og:description" content="Camiseta 100% algodão">
```

## 🐦 Twitter Card

### 5. Meta Tags do Twitter

Controle como seu conteúdo aparece quando compartilhado no Twitter/X.

**Exemplo Completo de Twitter Card**

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@seuTwitter">
<meta name="twitter:creator" content="@seuTwitter">
<meta name="twitter:title" content="Guia de SEO para 2026">
<meta name="twitter:description" content="Descubra as melhores estratégias de SEO">
<meta name="twitter:image" content="https://seudomain.com/img/seo.jpg">
```

Tipos de Card:
- `summary`: pequeno preview com texto
- `summary_large_image`: preview grande com imagem
- `player`: para vídeos
- `app`: para aplicativos móveis

**Exemplo: Tweet Embarcado Otimizado**

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Aprenda React em 30 dias">
<meta name="twitter:description" content="Curso gratuito, totalmente prático">
<meta name="twitter:image" content="https://seudomain.com/react-course.jpg">
<meta name="twitter:url" content="https://seudomain.com/react-course">
```

## 📄 Head Completo Otimizado para SEO

**Template Profissional Completo**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <!-- BASICS -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seu Título | Seu Site</title>
  
  <!-- SEO -->
  <meta name="description" content="Descrição até 160 caracteres que aparece no Google">
  <meta name="keywords" content="palavra1, palavra2, palavra3">
  <meta name="author" content="Seu Nome">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://seudominio.com/pagina">
  
  <!-- OPEN GRAPH (Facebook, LinkedIn) -->
  <meta property="og:url" content="https://seudominio.com/pagina">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Seu Título">
  <meta property="og:description" content="Sua descrição">
  <meta property="og:image" content="https://seudominio.com/imagem.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  
  <!-- TWITTER CARD -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Seu Título">
  <meta name="twitter:description" content="Sua descrição">
  <meta name="twitter:image" content="https://seudominio.com/imagem.jpg">
  
  <!-- LINKS -->
  <link rel="icon" href="/favicon.ico">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  ...
</body>
</html>
```

## ⚙️ Meta Tags Adicionais Úteis

**Language (Idioma)**

```html
<html lang="pt-br">
```

Importante para buscadores entenderem o idioma.

**Theme Color (Cor do Tema - Mobile)**

```html
<meta name="theme-color" content="#667eea">
```

Define a cor da barra de navegação em dispositivos mobile.

**Apple Meta Tags**

```html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Seu App">
<link rel="apple-touch-icon" href="apple-icon.png">
```

Para otimizar aparência em iOS.

**Viewport Alternativas**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
```

Permite zoom até 5x e que usuário faça zoom manual.

## 📋 Tabela Completa de Meta Tags

| Meta Tag | Propósito | Exemplo | Importância |
|---|---|---|---|
| `charset` | Codificação | UTF-8 | ⭐⭐⭐⭐⭐ |
| `viewport` | Mobile responsivo | width=device-width | ⭐⭐⭐⭐⭐ |
| `description` | Snippet do Google | 150-160 caracteres | ⭐⭐⭐⭐⭐ |
| `og:*` | Social media | Facebook, LinkedIn | ⭐⭐⭐⭐ |
| `twitter:*` | Twitter/X | Twitter Cards | ⭐⭐⭐⭐ |
| `canonical` | Conteúdo duplicado | URL preferida | ⭐⭐⭐⭐ |
| `keywords` | Palavras-chave | Contexto apenas | ⭐⭐ |

## 💡 Boas Práticas para Meta Tags

### ✅ Faça Isto:

- Sempre use descrição única e descritiva (150-160 caracteres)
- Coloque charset como primeira meta tag
- Use título e descrição que motivem cliques
- Adicione Open Graph para compartilhamento social
- Use imagens de alta qualidade (1200x630px) para social
- Mantenha meta tags consistentes com conteúdo real
- Teste com ferramentas: Facebook Debugger, Twitter Card Validator
- Use keywords naturalmente no content, não só na tag

### ❌ Não Faça Isto:

- Não keyword stuffing - não repita palavras desnecessariamente
- Não crie description muito curta (<120 caracteres)
- Não use descriptions genéricas ("Bem-vindo")
- Não copie description de outros sites
- Não esqueça og:image - é crítico para shares
- Não use imagens muito pesadas (otimize <100KB)
- Não coloque conteúdo importante APENAS em meta tags

## 🔧 Ferramentas para Testar Meta Tags

**Recomendadas:**

- **Google Search Console:** verifica indexação e ranking
- **Meta Tags Checker:** visualiza como fica nos buscadores
- **Facebook Debugger:** testa Open Graph
- **Twitter Card Validator:** valida Twitter Cards
- **Lighthouse (Chrome):** SEO score
- **SEMrush / Ahrefs:** análise profissional completa

## 🏆 Conclusão

Meta tags bem otimizadas podem aumentar seu CTR (Click-Through Rate) em 20-30% e ajudar
no ranking do Google. Combine meta tags básicas, Open Graph, Twitter Cards e SEO
tradicional para máximo impacto. Lembre-se: meta tags são apenas o começo - conteúdo
de qualidade e backlinks ainda são reis!

---

*Desenvolvido para aprendizado de Meta Tags para SEO*
*Última atualização: Fevereiro de 2026*
