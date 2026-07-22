# Imagens em HTML: `<img>`, `<picture>`, responsive e performance

Este guia cobre atributos essenciais (`src`, `alt`, `width`, `height`), técnicas responsivas (`srcset`, `picture`), formatos modernos (WebP, AVIF), lazy loading e acessibilidade.

## 1. Elemento `<img>` básico

```html
<img src="/imagens/foto.jpg" alt="Descrição da imagem" width="600" height="400">
```

`alt` é obrigatório para acessibilidade e SEO — descreva o conteúdo ou função da imagem.

## 2. Quando usar `figure` e `figcaption`

```html
<figure>
<img src="/imagens/grafico.png" alt="Gráfico de vendas">
<figcaption>Vendas mensais, 2025</figcaption>
</figure>
```

Use quando a imagem precisa de uma legenda associada semanticamente.

## 3. Imagens responsivas: `srcset` e `sizes`

```html
<img
  src="/img/foto-400.jpg"
  srcset="/img/foto-400.jpg 400w, /img/foto-800.jpg 800w, /img/foto-1200.jpg 1200w"
  sizes="(max-width:600px) 100vw, 50vw"
  alt="Exemplo responsivo">
```

`srcset` permite ao navegador escolher a melhor fonte com base em viewport e densidade de tela.

## 4. `<picture>` para controle avançado

```html
<picture>
<source type="image/avif" srcset="/img/foto.avif">
<source type="image/webp" srcset="/img/foto.webp">
<img src="/img/foto.jpg" alt="Imagem com formatos modernos">
</picture>
```

Use `picture` quando precisar trocar fontes com base em tipo/condição específica (ex.: arte vs foto, formato preferido).

## 5. Formatos modernos e compressão

- WebP/AVIF: melhor compressão que JPEG/PNG.
- Use ferramentas (imagemagick, svgo, cwebp) para gerar várias versões.

## 6. Lazy loading

```html
<img src="/img/foto.jpg" alt="Lazy" loading="lazy">
```

`loading="lazy"` é suportado na maioria dos navegadores modernos e melhora a performance ao adiar carregamento de imagens fora da viewport.

## 7. Acessibilidade

- `alt`: descreva função ou conteúdo; vazio (`alt=""`) quando imagem for decorativa.
- Forneça texto alternativo para gráficos complexos por meio de `figcaption` ou descrição longa em texto.

## 8. Exemplos práticos

### Card responsivo

```html
<article class="card">
<picture>
<source type="image/webp" srcset="/cards/capa.webp">
<img src="/cards/capa.jpg" alt="Capa do artigo" loading="lazy">
</picture>
<h3>Título do artigo</h3>
</article>
```

## 9. Boas práticas e armadilhas

- Evite usar imagens grandes sem escalonamento; redimensione no servidor.
- Não deixe `alt` vazio para imagens informativas.
- Use `width` e `height` para evitar CLS (layout shift).
- Prefira formatos modernos quando possível; forneça fallback.

## 10. Conclusão

Imagens são essenciais, mas impactam performance e acessibilidade. Use técnicas responsivas, formatos modernos e atributos semânticos corretos.
