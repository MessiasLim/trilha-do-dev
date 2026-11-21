# Conteúdo Externo (iframe, embed, object)

*Incorpore conteúdo externo na sua página: vídeos, mapas, widgets e mais*

## Introdução ao Conteúdo Externo

Às vezes você precisa incorporar conteúdo de outras fontes: vídeos do YouTube, mapas do Google,
widgets de redes sociais, documentos PDF, etc. HTML oferece várias maneiras de fazer isso,
cada uma com seus prós e contras.

## Iframe (Inline Frame)

### 1. Incorporando Conteúdo HTML Externo

`<iframe>` cria uma janela de navegador integrada que pode carregar outro HTML.
Muito popular para incorporar vídeos, mapas e widgets.

**Exemplo 1: Iframe Básico**

```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ">
</iframe>
```

Resultado: vídeo do YouTube incorporado.

**Exemplo 2: Iframe com Dimensões**

```html
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ">
</iframe>
```

Com border:

```html
<iframe src="pagina.html" 
        width="100%" 
        height="600" 
        border="1">
</iframe>
```

**Exemplo 3: Mapa Google Incorporado**

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.47......" 
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
</iframe>
```

### 2. Atributos Importantes de Iframe

| Atributo | Função | Exemplo |
|---|---|---|
| `src` | URL da página a carregar | `src="https://youtube.com/embed/..."` |
| `width` | Largura do iframe | `width="560"` |
| `height` | Altura do iframe | `height="315"` |
| `frameborder` | Mostrar/ocultar borda | `frameborder="0"` |
| `loading` | lazy para carregamento lento | `loading="lazy"` |
| `sandbox` | Restrições de segurança | `sandbox="allow-scripts"` |
| `allowfullscreen` | Permite fullscreen | `allowfullscreen` |

**Exemplo 4: Iframe Responsivo**

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ">
  </iframe>
</div>
```

Este padrão mantém aspecto 16:9 em qualquer tamanho!

## Atributo Sandbox (Segurança)

### 3. Restringindo Permissões do Iframe

`sandbox` restringe o que o conteúdo do iframe pode fazer. Muito importante para segurança!

**Exemplo 1: Sandbox Restritivo**

```html
<iframe src="conteudo-nao-confiavel.html" sandbox></iframe>
```

Com apenas sandbox, o iframe não pode:
- Executar scripts
- Enviar formulários
- Acessar seu armazenamento local
- Abrir janelas/abas

**Exemplo 2: Sandbox com Permissões Específicas**

```html
<iframe src="video-player.html" 
        sandbox="allow-scripts allow-same-origin allow-presentation">
</iframe>
```

Permissões permitidas:
- `allow-scripts`: executa JavaScript
- `allow-same-origin`: acessa mesma origem
- `allow-forms`: pode enviar formulários
- `allow-presentation`: permite apresentações

## Tag Embed

### 4. Incorporando Conteúdo Flash/PDF

`<embed>` incorpora plugins como PDFs, Flash, imagens.
Menos flexível que iframe, mas mais simples.

**Exemplo 1: PDF Incorporado**

```html
<embed src="documento.pdf" type="application/pdf" width="100%" height="600">
```

Resultado: PDF visualizável na página.

**Exemplo 2: Imagem Incorporada**

```html
<embed src="imagem.png" type="image/png" width="300" height="300">
```

Nota: para imagens, use `<img>` em vez de `<embed>`!

## Tag Object

### 5. Conteúdo com Fallback

`<object>` é mais versátil e permite conteúdo alternativo se não conseguir carregar.

**Exemplo 1: Object com Fallback**

```html
<object data="documento.pdf" type="application/pdf" width="100%" height="600">
  <p>Seu navegador não suporta PDF. 
     <a href="documento.pdf">Clique para baixar</a></p>
</object>
```

Se PDF não carregar, mostra fallback.

**Exemplo 2: Nested Objects**

```html
<object data="video.mp4" type="video/mp4" width="640" height="480">
  <object data="video.webm" type="video/webm" width="640" height="480">
    <p>Seu navegador não suporta vídeo.</p>
  </object>
</object>
```

Tenta MP4 primeiro, depois WebM, depois mensagem.

## Srcset (Imagens Responsivas)

### 6. Carregando Imagens Certas para Cada Dispositivo

**Exemplo 1: Srcset Básico**

```html
<img src="imagem-pequena.jpg"
     srcset="imagem-pequena.jpg 480w,
             imagem-media.jpg 768w,
             imagem-grande.jpg 1200w"
     alt="Descrição">
```

- 480w = para telas de até 480px
- 768w = para telas de até 768px
- 1200w = para telas maiores

**Exemplo 2: Srcset com Sizes**

```html
<img src="imagem.jpg"
     srcset="imagem-pequena.jpg 480w,
             imagem-media.jpg 768w,
             imagem-grande.jpg 1200w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1200px) 50vw,
            800px"
     alt="Descrição">
```

`sizes` define qual width usar em cada breakpoint.

**Exemplo 3: Picture Tag (Mais Controle)**

```html
<picture>
  <source srcset="imagem-grande.jpg" media="(min-width: 1200px)">
  <source srcset="imagem-media.jpg" media="(min-width: 768px)">
  <img src="imagem-pequena.jpg" alt="Descrição">
</picture>
```

Permite trocar imagem inteira, não só tamanho.

## Lazy Loading

### 7. Carregamento Preguiçoso (Otimização de Performance)

**Exemplo 1: Lazy Loading em Imagens**

```html
<img src="placeholder.jpg"
     loading="lazy"
     alt="Imagem carregada sob demanda">
```

Atributo `loading`:
- `eager`: carrega imediatamente (padrão)
- `lazy`: carrega quando próxima da viewport

**Exemplo 2: Lazy Loading em Iframe**

```html
<iframe src="https://www.youtube.com/embed/..."
        loading="lazy">
</iframe>
```

YouTube/mapas carregam apenas quando usuário está perto.

**Exemplo 3: Intersection Observer (JS)**

```html
<img data-src="imagem-real.jpg" src="placeholder.jpg" alt="">

<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img);
  });
</script>
```

Mais controle que `loading="lazy"`.

## Comparação: Iframe vs Embed vs Object

| Elemento | Uso | Prós | Contras |
|---|---|---|---|
| `<iframe>` | YouTube, mapas, widgets | Flexível, seguro com sandbox | Pode ser pesado |
| `<embed>` | Flash, PDF, plugins | Simples, compacto | Sem fallback, deprecado |
| `<object>` | Conteúdo variado | Permite fallback | Complexo, menos usado |
| `<img>` | Imagens | Simples, performance | Não interativo |

## Boas Práticas

### Faça Isto:

- Use iframe para conteúdo de terceiros com sandbox
- Use lazy loading para melhorar performance
- Use srcset/picture para imagens responsivas
- Adicione atributo title/alt em todas as embeds
- Teste segurança de sandbox antes de produção
- Use CDN para arquivos externos quando possível

### Não Faça Isto:

- Não coloque iframe sem sandbox de fonte desconhecida
- Não incorpore todo PDF do site (use links)
- Não use object/embed para imagens (use img)
- Não carregue muitos iframes pesados sem lazy loading
- Não esqueça alt text em imagens responsivas

## Exemplos Avançados

**Exemplo 1: Galeria Responsiva com Lazy Loading**

```html
<div class="galeria">
  <picture>
    <source srcset="foto-grande.webp" type="image/webp" media="(min-width: 1200px)">
    <img src="foto-pequena.jpg" 
         loading="lazy"
         alt="Foto da galeria">
  </picture>
</div>
```

WebP moderno em telas grandes, JPEG em pequenas, lazy load.

**Exemplo 2: YouTube Seguro com Sandbox**

```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
        width="560" 
        height="315"
        frameborder="0"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allowfullscreen
        loading="lazy">
</iframe>
```

Sandbox permite vídeo mas restringe outras ações.

## Conclusão

Conteúdo externo é poderoso mas deve ser usado com cuidado.
Escolha o elemento certo para cada caso: iframe para conteúdo seguro,
img para imagens, embed/object para plugins especializados.
Sempre considere performance com lazy loading e responsividade com srcset.

---

*Desenvolvido para aprendizado de Conteúdo Externo HTML*
*Última atualização: Fevereiro de 2026*
