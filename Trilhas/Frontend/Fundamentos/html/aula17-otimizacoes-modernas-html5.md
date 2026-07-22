# ⚡ Otimizações Modernas em HTML5

*Técnicas modernas para melhorar performance, velocidade de carregamento e SEO*

## 📌 Performance é Crítico

Um site 1 segundo mais lento pode resultar em 7% menos conversões. Performance não é luxo,
é necessidade! HTML5 oferece várias técnicas nativas para otimizar sites modernos:
lazy loading, preload/prefetch, imagens responsivas, WebP, e muito mais.

## ⏳ Lazy Loading (Carregamento Preguiçoso)

### 1. Carregar Conteúdo Sob Demanda

**Exemplo 1: Lazy Loading em Imagens**

```html
<img src="placeholder.jpg" 
     loading="lazy" 
     alt="Imagem da galeria">
```

Atributo `loading`:
- `eager`: carrega imediatamente (padrão)
- `lazy`: carrega quando próxima da viewport

**Exemplo 2: Lazy Loading com Dimensões**

```html
<img src="placeholder.jpg" 
     loading="lazy"
     width="300"
     height="200"
     alt="Imagem otimizada">
```

Indicar width/height evita layout shift (CLS - Cumulative Layout Shift).

**Exemplo 3: Lazy Loading em Iframes**

```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        loading="lazy">
</iframe>
```

YouTube e mapas carregam apenas quando próximos.

### 2. Intersection Observer (Controle Avançado)

**Exemplo: Lazy Loading Customizado**

```html
<img class="lazy-img" data-src="imagem-real.jpg" src="placeholder.jpg">
<img class="lazy-img" data-src="imagem2.jpg" src="placeholder.jpg">

<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy-img');
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('.lazy-img').forEach(img => {
  observer.observe(img);
});
</script>
```

Mais controle que `loading="lazy"`.

## 🔗 Preload e Prefetch

### 3. Pré-Carregando Recursos

**Exemplo 1: Preload (Recurso Necessário)**

```html
<!-- Preload de fonte customizada -->
<link rel="preload" as="font" 
      href="minha-fonte.woff2" 
      type="font/woff2" 
      crossorigin>

<!-- Preload de script crítico -->
<link rel="preload" as="script" href="critical.js">

<!-- Preload de imagem hero -->
<link rel="preload" as="image" href="hero.jpg">
```

Use preload para recursos CRÍTICOS que aparecem na primeira viewport.

**Exemplo 2: Prefetch (Recurso Provavelmente Necessário)**

```html
<!-- Prefetch de próxima página -->
<link rel="prefetch" href="/proxima-pagina.html">

<!-- Prefetch de recurso que pode ser usado -->
<link rel="prefetch" href="video.mp4">

<!-- Prefetch de CSS de página seguinte -->
<link rel="prefetch" href="galeria-estilos.css">
```

Use prefetch para recursos que PODEM ser necessários depois.

**Exemplo 3: DNS-Prefetch**

```html
<!-- Resolver DNS em background -->
<link rel="dns-prefetch" href="//cdn.example.com">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
```

Melhora performance de recursos de terceiros.

## 📱 Imagens Responsivas Modernas

### 4. Srcset e Picture Tag

**Exemplo 1: Srcset Básico (Tamanho)**

```html
<img src="imagem-pequena.jpg"
     srcset="imagem-pequena.jpg 480w,
             imagem-media.jpg 768w,
             imagem-grande.jpg 1200w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1200px) 50vw,
            800px"
     alt="Descrição">
```

Navegador carrega versão correta baseado em tela.

**Exemplo 2: Srcset com DPI (Retina)**

```html
<img src="imagem.jpg"
     srcset="imagem.jpg 1x,
             imagem-2x.jpg 2x,
             imagem-3x.jpg 3x"
     alt="Imagem para telas de alta densidade">
```

Telas Retina (2x) recebem imagem 2x mais detalhada.

**Exemplo 3: Picture Tag (Imagem Completa)**

```html
<picture>
  <source srcset="imagem-grande.webp" 
          type="image/webp"
          media="(min-width: 1200px)">
  <source srcset="imagem-grande.jpg" 
          media="(min-width: 1200px)">
  
  <source srcset="imagem-media.webp" 
          type="image/webp"
          media="(min-width: 768px)">
  <source srcset="imagem-media.jpg" 
          media="(min-width: 768px)">
  
  <img src="imagem-pequena.jpg" alt="Responsiva">
</picture>
```

Permite trocar imagem INTEIRA, não só tamanho. Prioriza WebP em navegadores modernos.

## 📸 Formato WebP

### 5. Imagens Modernas com Melhor Compressão

**Exemplo 1: WebP com Fallback**

```html
<picture>
  <source srcset="imagem.webp" type="image/webp">
  <img src="imagem.jpg" alt="Imagem">
</picture>
```

WebP é ~25% menor que JPEG com mesma qualidade. Navegadores antigos usam JPEG.

**Exemplo 2: Múltiplos Formatos**

```html
<picture>
  <source srcset="imagem.avif" type="image/avif">
  <source srcset="imagem.webp" type="image/webp">
  <source srcset="imagem.jpg" type="image/jpeg">
  <img src="imagem.jpg" alt="Imagem otimizada">
</picture>
```

Ordem: AVIF (melhor) → WebP (boa) → JPEG (fallback)

| Formato | Suporte | Tamanho vs JPEG | Qualidade | Quando Usar |
|---|---|---|---|---|
| JPEG | ⭐⭐⭐⭐⭐ | 100% | Boa | Sempre (fallback) |
| WebP | ⭐⭐⭐⭐ | -25% | Muito boa | Navegadores modernos |
| AVIF | ⭐⭐⭐ | -50% | Excelente | Futuro, não use sozinho |
| PNG | ⭐⭐⭐⭐⭐ | +200% | Perfeita | Apenas se precisa transparência |

## 📦 Async e Defer em Scripts

### 6. Otimizando Carregamento de JavaScript

**Sem Atributo (Default)**

```html
<script src="script.js"></script>
```

Comportamento:
1. HTML pausa
2. Script faz download
3. Script executa
4. HTML continua

Resultado: página congela até script carregar!

**Async (Não Bloqueante, Ordem Indefinida)**

```html
<script async src="analytics.js"></script>
```

Comportamento:
1. HTML continua enquanto script faz download
2. Quando pronto, executa (pode ser antes de HTML terminar)

Melhor para: analytics, ads, scripts independentes.

**Defer (Não Bloqueante, Ordem Preservada)**

```html
<script defer src="app.js"></script>
<script defer src="utils.js"></script>
```

Comportamento:
1. HTML continua enquanto scripts fazem download
2. Scripts executam APÓS HTML terminar
3. Ordem garantida (app.js depois utils.js)

Melhor para: scripts principais.

**Comparação Visual**

```
Sem atributo:  [HTML download] [pause] [script] [HTML continues]
Async:         [HTML download] [script2] [script1] [HTML continues]
Defer:         [HTML download] [script1] [script2] [HTML continues]
```

Recomendação: use defer para scripts principais!

## 🎨 Critical CSS (CSS Crítico)

### 7. CSS Acima da Dobra (Above the Fold)

**Exemplo: Inline Critical CSS**

```html
<head>
  <!-- CSS crítico inline para primeira viewport -->
  <style>
    body { margin: 0; padding: 0; }
    header { background: blue; color: white; padding: 20px; }
    h1 { font-size: 32px; }
  </style>
  
  <!-- CSS não-crítico carregado async -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
```

Resultado: página renderiza muito mais rápido!

> **Nota:** use ferramentas como Google PageSpeed Insights para gerar CSS crítico automaticamente.

## 🗜️ Compressão (Gzip, Brotli)

### 8. Reduzindo Tamanho de Transferência

**Configurar no Servidor (Nginx)**

```nginx
gzip on;
gzip_types text/plain text/css text/xml text/javascript application/json application/javascript;
gzip_min_length 500;
gzip_comp_level 6;
```

Resulta em:
- HTML: 70% menor
- CSS: 80% menor
- JS: 75% menor

**No Apache (.htaccess)**

```apache
<IfModule mod_gzip.c>
  mod_gzip_on On
  mod_gzip_dechunk On
  mod_gzip_item_include file .(html|txt|xml|php|pl)$
  mod_gzip_item_include mime ^application/x-javascript.*
  mod_gzip_item_include mime ^text/.*
  mod_gzip_minimum_file_size 500
  mod_gzip_maximum_file_size 600000
</IfModule>
```

## 🔤 Web Fonts Otimizadas

### 9. Carregar Fontes Eficientemente

**Exemplo 1: Font-Display**

```css
@font-face {
  font-family: 'MinhaFonte';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}
```

`font-display`:
- `auto`: comportamento padrão
- `block`: font invisível até carregar
- `swap`: exibe fallback rápido
- `fallback`: se demorar, usa fallback
- `optional`: pode usar fallback se tarde

**Exemplo 2: Preload de Fonte**

```html
<link rel="preload" 
      href="minha-fonte.woff2" 
      as="font" 
      type="font/woff2" 
      crossorigin>
```

Carrega fonte antes de CSS ser processado.

## 📊 Reduzindo Tamanho do Bundle

**Checklist de Otimização**

- [ ] Remover código não utilizado (dead code)
- [ ] Minificar HTML, CSS, JavaScript
- [ ] Usar tree-shaking em bundlers
- [ ] Code splitting por rota
- [ ] Remover dependências não necessárias
- [ ] Usar apenas o Bootstrap que precisa (não tudo)
- [ ] Lazy load componentes pesados
- [ ] Usar CDN para bibliotecas comuns

## 💡 Boas Práticas de Performance

### ✅ Faça Isto:

- Use lazy loading para imagens abaixo da dobra
- Use WebP com fallback JPEG
- Comprima imagens (TinyPNG, Squoosh)
- Use defer em scripts principais
- Minifique HTML, CSS, JS
- Implemente cache no navegador (Service Workers)
- Use CDN global para arquivos estáticos
- Teste performance com Lighthouse/PageSpeed

### ❌ Não Faça Isto:

- Não carregue scripts desnecessários no início
- Não ignore imagens não otimizadas
- Não use apenas JPEG em 2024
- Não incorpore CSS inline sem motivo
- Não ignore Core Web Vitals
- Não use atributo width/height sem valores reais

## 📈 Core Web Vitals

| Métrica | O que mede | Bom | Precisa melhorar | Ruim |
|---|---|---|---|---|
| LCP | Carregamento | < 2.5s | 2.5-4s | > 4s |
| FID | Interatividade | < 100ms | 100-300ms | > 300ms |
| CLS | Estabilidade Visual | < 0.1 | 0.1-0.25 | > 0.25 |

## 🏆 Conclusão

Performance é uma característica fundamental de design moderno. HTML5 oferece muitas
ferramentas nativas: lazy loading, preload, imagens responsivas, WebP, defer scripts.
Use-os todos para criar sites que carregam em segundos, não minutos!
Meça com Lighthouse, otimize continuamente.

---

*Desenvolvido para aprendizado de Otimizações Modernas em HTML5*
*Última atualização: Fevereiro de 2026*
