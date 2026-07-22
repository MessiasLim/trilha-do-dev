# Boas Práticas em HTML5

*15+ práticas essenciais para escrever HTML profissional, acessível, semântico e performático*

## Por que Boas Práticas Importam?

HTML bem escrito não é apenas sobre "funcionar". É sobre criar código:
**acessível** para todos os usuários, **semântico** para máquinas compreenderem,
**performático** para carregar rápido, e **manutenível** para o futuro.
Boas práticas impactam SEO, acessibilidade, performance e experiência do usuário.

## 1. Sempre Use Semântica HTML

Use elementos semânticos para significado, não apenas estilo.

**❌ Não Semântico**

```html
<div class="header">
  <div class="nav">
    <div class="nav-item">Home</div>
  </div>
</div>

<div class="main-content">
  <div class="article">
    <div class="title">Título</div>
    <div class="text">Texto...</div>
  </div>
</div>

<div class="footer">Rodapé</div>
```

Problema: sem contexto semântico, máquinas não entendem a estrutura.

**✅ Semântico**

```html
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

<main>
  <article>
    <h1>Título</h1>
    <p>Texto...</p>
  </article>
</main>

<footer>Rodapé</footer>
```

Benefício: estrutura clara, máquinas entendem significado.

## 2. Use Heading Hierarchy Corretamente

**❌ Hierarquia Errada**

```html
<h1>Bem-vindo</h1>
<h4>Seção Principal</h4>
<h2>Subsseção</h2>
<h5>Detalhe</h5>
```

Problema: ordem aleatória confunde leitores de tela e SEO.

**✅ Hierarquia Correta**

```html
<h1>Bem-vindo</h1>
<h2>Seção Principal</h2>
<h3>Subsseção</h3>
<h4>Detalhe</h4>
```

Benefício: ordem lógica, estrutura clara e compreensível.

> **Dica:** Uma página deve ter apenas um `<h1>`. Use h2, h3, etc para subsseções.

## 3. Alt Text em Todas as Imagens

**❌ Sem Alt Text**

```html
<img src="foto.jpg">
<img src="grafico.png">
<img src="imagem123.jpg">
```

Problema: acessibilidade ruim, SEO prejudicado, confuso para deficientes visuais.

**✅ Alt Text Descritivo**

```html
<img src="foto.jpg" 
     alt="João sorrindo na praia">
<img src="grafico.png" 
     alt="Gráfico de vendas 2026">
<img src="logo.svg" 
     alt="Logo da empresa">
```

Benefício: acessível, melhor SEO, faz sentido para deficientes visuais.

## 4. Labels em Formulários

**❌ Sem Label**

```html
<input type="text" placeholder="Nome">
<input type="email" placeholder="Email">
<input type="password" placeholder="Senha">
```

Problema: acessibilidade péssima, sem relação entre campo e rótulo.

**✅ Com Label Conectado**

```html
<label for="nome">Nome:</label>
<input type="text" id="nome">

<label for="email">Email:</label>
<input type="email" id="email">

<label for="senha">Senha:</label>
<input type="password" id="senha">
```

Benefício: acessível, clicável, leitores de tela entendem.

## 5. Contraste de Cor Adequado

**WCAG AA (Recomendado):** Ratio 4.5:1 para texto comum
**WCAG AAA (Acessível):** Ratio 7:1 para máxima acessibilidade

```
Bom: Texto preto (#000000) em branco (#FFFFFF) = 21:1
Bom: Texto cinza escuro (#333333) em branco = 12.6:1
Ruim: Texto cinza claro (#CCCCCC) em branco = 1.2:1
Ruim: Texto vermelho (#FF0000) em roxo (#800080) = 2.5:1
```

Use ferramentas: WebAIM Contrast Checker, Stark.

## 6. Meta Tags Essenciais

**Head HTML5 Completo**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Descrição da página">
  <meta name="keywords" content="palavra1, palavra2">
  <title>Título da Página</title>
  
  <!-- Links essenciais -->
  <link rel="icon" href="/favicon.ico">
  <link rel="canonical" href="https://seusite.com/pagina">
  
  <!-- CSS -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  ...
</body>
</html>
```

Essencial para SEO e bom funcionamento.

## 7. Validação HTML5

> **Validar regularmente:** use https://validator.w3.org/ para garantir HTML válido. Erros podem causar bugs inesperados.

**Checklist de Validação**

- [ ] DOCTYPE correto: `<!DOCTYPE html>`
- [ ] Lang no HTML: `<html lang="pt-br">`
- [ ] Charset primeiro no head: `<meta charset="UTF-8">`
- [ ] Viewport presente: `<meta name="viewport" ...>`
- [ ] Título da página: `<title>...</title>`
- [ ] Sem tags não-fechadas
- [ ] Atributos sem typos
- [ ] Sem IDs duplicados
- [ ] Estrutura semântica correta
- [ ] Alt text em imagens

## 8. Mobile-First Responsive

**❌ Desktop-First**

```css
/* Cria em desktop, depois diminui */
@media (max-width: 768px) {
  /* Tudo quebra e precisa ajustar */
}
```

Resultado: experiência mobile ruim.

**✅ Mobile-First**

```css
/* Começa mobile, depois expande */
/* Base: mobile */
body { font-size: 14px; }

@media (min-width: 768px) {
  body { font-size: 16px; }
}
```

Resultado: melhor performance mobile.

## 9. Links Acessíveis

**❌ Link Vago**

```html
<a href="/artigo">Clique aqui</a>
<a href="/sobre">Leia mais</a>
<a href="/contato">Link</a>
```

Problema: "Clique aqui" sem contexto. Leitores de tela anunciam algo vago.

**✅ Link Descritivo**

```html
<a href="/artigo">Leia sobre SEO em 2026</a>
<a href="/sobre">Conheça nossa empresa</a>
<a href="/contato">Entre em contato conosco</a>
```

Benefício: contexto claro, acessível, melhor para SEO (anchor text).

## 10. Loading Performance

**Otimizações Essenciais:**

- Lazy load imagens e iframes
- Comprimir imagens (TinyPNG, Squoosh)
- Use WebP com fallback JPEG
- Scripts com defer
- CSS minificado
- Remover código não-utilizado

## 11. Estrutura Semântica Completa

**Exemplo de Página Bem Estruturada**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seu Site</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/sobre">Sobre</a>
    </nav>
  </header>
  
  <main>
    <article>
      <h1>Título Principal</h1>
      <p>Conteúdo...</p>
    </article>
    
    <aside>
      <h2>Sidebar</h2>
      <!-- Conteúdo lateral -->
    </aside>
  </main>
  
  <footer>
    <p>© 2026 Seu Site</p>
  </footer>
</body>
</html>
```

## 12. Separação de Responsabilidades

**❌ HTML com Estilo Inline**

```html
<div style="color: red; font-size: 18px;">
  Texto vermelho
</div>
<div style="color: red; font-size: 18px;">
  Outro texto
</div>
```

Problema: repetido, difícil manter.

**✅ CSS Separado**

```html
<style>
.erro-mensagem {
  color: red;
  font-size: 18px;
}
</style>

<div class="erro-mensagem">Texto vermelho</div>
<div class="erro-mensagem">Outro texto</div>
```

Benefício: DRY, fácil manter.

## 13. Nomeação Consistente

**Use Nomenclatura Clara**

Bom:
- `id="main-content"`
- `class="btn-primary"`
- `data-user-id="123"`
- `aria-label="Fechar menu"`

Ruim:
- `id="div1"`
- `class="x"`
- `data-id="123"` (vago)
- `aria-label="Close"` (sem contexto)

## 14. Não Abuse de Divs

**❌ Divitis**

```html
<div class="container">
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <div>Título</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

Problema: muitos divs aninhados. Difícil ler, muitas classes.

**✅ Semântico**

```html
<article class="card">
  <header class="card-header">
    <h3>Título</h3>
  </header>
  <section class="card-body">
    Conteúdo...
  </section>
</article>
```

Benefício: menos divs, mais semântica. Código legível e compreensível.

## 15. ARIA para Acessibilidade

**Quando Usar ARIA**

```html
<!-- Botão customizado -->
<div role="button" 
     tabindex="0" 
     aria-pressed="false">
  Clique
</div>

<!-- Menu dinâmico -->
<nav aria-label="Navegação principal">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<!-- Região viva (updates dinâmicos) -->
<div aria-live="polite" aria-atomic="true">
  Itens carregados!
</div>
```

ARIA complementa HTML semântico, não substitui.

## 16. Documentação e Comentários

**Documente Seções Complexas**

```html
<!-- ========== HEADER ========== -->
<header>
  <!-- Logo e navegação principal -->
  <nav>...</nav>
</header>

<!-- ========== MAIN CONTENT ========== -->
<main>
  <!-- Hero section com image de background -->
  <section class="hero">...</section>
  
  <!-- Grid de produtos (3 colunas em desktop) -->
  <section class="produtos">...</section>
</main>
```

Comentários ajudam você e seu time.

## 17. Testabilidade

**HTML Testável**

```html
<!-- Com data-testid para testes automatizados -->
<form data-testid="login-form">
  <input data-testid="email-input" type="email">
  <button data-testid="submit-btn" type="submit">
    Entrar
  </button>
</form>
```

No JavaScript (Cypress, Jest):

```javascript
cy.get('[data-testid="email-input"]').type('teste@email.com');
cy.get('[data-testid="submit-btn"]').click();
```

Facilita testes automatizados.

## Comparação: Código Amador vs Profissional

**❌ Amador**

```html
<html>
<body bgcolor="white">

<div class="x">
  <h3 style="color:blue">Título</h3>
  <img src="foto.jpg">
</div>

<center>
  <b>Rodapé</b>
</center>

</body>
</html>
```

Problemas: sem DOCTYPE, sem meta tags, sem semântica, styles inline.

**✅ Profissional**

```html
<!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width">
    <title>Meu Site</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main>
      <article class="card">
        <h1>Título</h1>
        <img src="foto.jpg" alt="Descrição">
      </article>
    </main>
    <footer>
      <p>© 2026</p>
    </footer>
  </body>
  </html>
```

Profissional: completo, semântico, acessível, bem estruturado.

## Checklist Final de Boas Práticas

**Antes de Publicar:**

- [ ] DOCTYPE e html lang corretos
- [ ] Charset UTF-8 no head
- [ ] Viewport meta tag presente
- [ ] Título e meta description
- [ ] Semântica HTML: header, nav, main, article, aside, footer
- [ ] Heading hierarchy correta (h1 → h2 → h3)
- [ ] Alt text em TODAS as imagens
- [ ] Labels em todos os inputs
- [ ] Links descritivos (não "clique aqui")
- [ ] Contraste de cor WCAG AA (4.5:1)
- [ ] ARIA onde necessário
- [ ] Mobile responsivo testado
- [ ] Validação HTML (W3C Validator)
- [ ] Lighthouse score > 90
- [ ] Imagens otimizadas e comprimidas
- [ ] Sem erros no console

## Conclusão

Boas práticas em HTML não são "opcional". São fundamentais para criar
aplicações web profissionais, acessíveis e sustentáveis. Cada prática
impacta SEO, acessibilidade, performance e manutenibilidade. Cultive bons
hábitos desde o início - seu código futuro agradecerá!

**Lembre-se:**

- HTML semântico beneficia TODOS: máquinas, usuários, SEO
- Acessibilidade é para inclusão, não caridade
- Performance importa - cada KB adicional custa conversões
- Código limpo é código manutenível - suas futuras cópias agradecerão
- Teste em navegadores reais e dispositivos reais

---

*Desenvolvido para aprendizado de Boas Práticas em HTML5*
*Última atualização: Fevereiro de 2026*
