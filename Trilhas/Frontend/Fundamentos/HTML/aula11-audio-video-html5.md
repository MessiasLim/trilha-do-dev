# Audio e Vídeo em HTML5

*Domine a reprodução de mídia nativa sem plugins, com controles customizados e responsividade*

## Revolução do HTML5 em Mídia

HTML5 introduziu tags nativas `<audio>` e `<video>`,
eliminando a necessidade de Flash. Agora você pode incorporar mídia com controles nativos,
sem depender de bibliotecas externas. Isso melhora performance, segurança e compatibilidade.

## Tag Audio

### 1. Áudio Básico

**Exemplo 1: Áudio Simples com Controles**

```html
<audio controls>
  <source src="musica.mp3" type="audio/mpeg">
  <source src="musica.ogg" type="audio/ogg">
  Seu navegador não suporta áudio HTML5
</audio>
```

Resultado: player de áudio com play, pause, volume, progresso.

**Exemplo 2: Atributos de Áudio**

```html
<audio controls 
       autoplay 
       loop 
       muted 
       preload="metadata">
  <source src="musica.mp3" type="audio/mpeg">
</audio>
```

Atributos:
- `controls`: mostra controles de player
- `autoplay`: começa automaticamente (pode ser bloqueado)
- `loop`: repete quando termina
- `muted`: começa mudo
- `preload`: "none", "metadata", "auto"

### 2. Tag Source (Múltiplos Formatos)

**Formatos de Áudio Compatíveis**

- MP3: `type="audio/mpeg"` — mais compatível
- OGG: `type="audio/ogg"` — aberto, bom tamanho
- WAV: `type="audio/wav"` — sem compressão, grande
- FLAC: `type="audio/flac"` — compressão sem perda

Exemplo com fallback:

```html
<audio controls>
  <source src="musica.ogg" type="audio/ogg">
  <source src="musica.mp3" type="audio/mpeg">
  <p>Seu navegador não suporta áudio.</p>
</audio>
```

Tenta OGG primeiro, depois MP3, depois mostra texto.

## Tag Video

### 3. Vídeo Básico

**Exemplo 1: Vídeo com Controles**

```html
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Seu navegador não suporta vídeo HTML5
</video>
```

Resultado: player de vídeo profissional.

**Exemplo 2: Vídeo Responsivo**

```html
<video width="100%" controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

Ou com CSS:

```html
<video controls style="width: 100%; height: auto;">
  <source src="video.mp4" type="video/mp4">
</video>
```

### 4. Atributos de Vídeo

**Atributos Completos**

```html
<video width="640" 
       height="360" 
       controls 
       autoplay 
       loop 
       muted 
       preload="auto"
       poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
</video>
```

Atributos:
- `width`/`height`: dimensões
- `controls`: controles de player
- `autoplay`: começa automaticamente (requer muted)
- `loop`: repete
- `muted`: sem som (necessário para autoplay)
- `preload`: "none", "metadata", "auto"
- `poster`: imagem miniatura antes do vídeo

### 5. Formatos de Vídeo

| Formato | Extensão | Type | Compatibilidade | Tamanho |
|---|---|---|---|---|
| MP4 (H.264) | .mp4 | video/mp4 | ⭐⭐⭐⭐⭐ | Médio |
| WebM (VP9) | .webm | video/webm | ⭐⭐⭐⭐ | Pequeno |
| Ogg (Theora) | .ogv | video/ogg | ⭐⭐⭐ | Grande |
| MOV | .mov | video/quicktime | ⭐⭐ | Muito grande |

## Track (Legendas e Pistas)

### 6. Adicionando Legendas e Descrições

**Exemplo 1: Legendas em Português**

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track src="legenda-pt.vtt" kind="subtitles" srclang="pt" label="Português">
  <track src="legenda-en.vtt" kind="subtitles" srclang="en" label="Inglês">
</video>
```

Resultado: menu de legendas no player.

**Exemplo 2: Arquivo VTT (WebVTT Format)**

```
WEBVTT

00:00:00.000 --> 00:00:03.000
Bem-vindo ao nosso vídeo

00:00:04.000 --> 00:00:08.000
Neste tutorial vamos aprender HTML5

00:00:09.000 --> 00:00:12.000
Começaremos com o básico
```

Arquivo salvo como: `legenda.vtt`

**Exemplo 3: Tipos de Track**

- `kind="subtitles"` — legendas (tradução)
- `kind="captions"` — legendas para surdos
- `kind="descriptions"` — descrição de áudio
- `kind="chapters"` — capítulos
- `kind="metadata"` — metadados

Exemplo com múltiplos:

```html
<track src="subtitles-en.vtt" kind="subtitles" srclang="en" label="English">
<track src="captions-en.vtt" kind="captions" srclang="en" label="English (CC)">
<track src="descriptions-pt.vtt" kind="descriptions" srclang="pt" label="Descrição de Áudio">
```

## Controlando Áudio/Vídeo com JavaScript

### 7. Métodos e Propriedades da API Media

**Exemplo 1: Controles Customizados**

```html
<video id="meu-video">
  <source src="video.mp4" type="video/mp4">
</video>

<button onclick="play()">Play</button>
<button onclick="pause()">Pause</button>
<input type="range" min="0" max="100" id="volume-slider">

<script>
  const video = document.getElementById('meu-video');
  
  function play() {
    video.play();
  }
  
  function pause() {
    video.pause();
  }
  
  document.getElementById('volume-slider').addEventListener('input', 
    function(e) {
      video.volume = e.target.value / 100;
    }
  );
</script>
```

**Exemplo 2: Propriedades Úteis**

```javascript
// Reprodução
video.play()          // Inicia reprodução
video.pause()         // Pausa
video.currentTime     // Tempo atual em segundos
video.duration        // Duração total em segundos

// Volume
video.volume = 0.5    // Volume de 0-1
video.muted = true    // Mudar áudio

// Estado
video.paused          // True se pausado
video.ended           // True se terminado
video.readyState      // Estado do carregamento (0-4)
```

**Exemplo 3: Eventos**

```javascript
video.addEventListener('play', function() {
  console.log('Vídeo começou');
});

video.addEventListener('pause', function() {
  console.log('Vídeo pausado');
});

video.addEventListener('ended', function() {
  console.log('Vídeo terminou');
});

video.addEventListener('timeupdate', function() {
  console.log('Tempo atual:', video.currentTime);
});
```

Outros eventos: `loadstart`, `loadedmetadata`, `loadeddata`, `canplay`

## Fullscreen e Tela Cheia

### 8. Modo Fullscreen Customizado

**Exemplo 1: Botão Fullscreen**

```html
<video id="video" controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
</video>

<button onclick="toggleFullscreen()">Fullscreen</button>

<script>
  function toggleFullscreen() {
    const video = document.getElementById('video');
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Safari/Chrome antigo
    }
  }
</script>
```

## Player de Vídeo Customizado Profissional

**Exemplo: Player Completo**

```html
<div class="video-player">
  <video id="player" width="100%">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
  </video>
  
  <div class="controls">
    <button id="play-btn">▶ Play</button>
    <div class="progress-bar">
      <div class="progress"></div>
      <input type="range" id="progress-slider" min="0" max="100" value="0">
    </div>
    <span id="time">0:00 / 0:00</span>
    <input type="range" id="volume-slider" min="0" max="100" value="70">
    <button id="fullscreen-btn">⛶ Fullscreen</button>
  </div>
</div>
```

```css
.video-player {
  position: relative;
  background: black;
  max-width: 800px;
  margin: 0 auto;
}

.controls {
  display: flex;
  align-items: center;
  padding: 10px;
  background: rgba(0,0,0,0.7);
  gap: 10px;
}

.progress-bar {
  flex: 1;
  height: 5px;
  background: #666;
  cursor: pointer;
  border-radius: 3px;
  position: relative;
}

.progress {
  height: 100%;
  background: red;
  border-radius: 3px;
}
```

```javascript
const video = document.getElementById('player');
const playBtn = document.getElementById('play-btn');
const progressSlider = document.getElementById('progress-slider');
const timeDisplay = document.getElementById('time');

playBtn.addEventListener('click', () => {
  if (video.paused) video.play();
  else video.pause();
});

video.addEventListener('timeupdate', () => {
  progressSlider.value = (video.currentTime / video.duration) * 100;
  updateTime();
});

progressSlider.addEventListener('change', () => {
  video.currentTime = (progressSlider.value / 100) * video.duration;
});

function updateTime() {
  const formatTime = (s) => {
    const min = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return min + ':' + (sec < 10 ? '0' : '') + sec;
  };
  timeDisplay.textContent = formatTime(video.currentTime) + ' / ' + formatTime(video.duration);
}
```

## Boas Práticas

### Faça Isto:

- Sempre ofereça múltiplos formatos (MP4 + WebM)
- Use MP4 como fallback (mais compatível)
- Adicione poster em vídeos
- Use muted para autoplay
- Comprima vídeos antes de usar (reduza tamanho)
- Adicione legendas para acessibilidade
- Use lazy loading para vídeos fora da viewport

### Não Faça Isto:

- Não use autoplay sem muted
- Não carregue vídeos muito pesados (otimize!)
- Não ignore acessibilidade (sem legendas/descrições)
- Não use apenas um formato de vídeo
- Não esqueça preload para melhor performance

## Comparação de Formatos

| Formato | Qualidade | Tamanho | Compatibilidade | Quando Usar |
|---|---|---|---|---|
| MP4 | Boa | Médio | Excelente | Sempre (fallback) |
| WebM | Excelente | Pequeno | Boa | Preferido para web |
| Ogg | Boa | Grande | Média | Legado |

## Conclusão

HTML5 Audio e Video revolucionaram a forma como incorporamos mídia na web.
Com `<audio>` e `<video>` nativas, você pode criar
experiências ricas sem Flash ou bibliotecas pesadas. Domine os atributos, track para legendas,
e JavaScript para controles customizados. Lembre-se: sempre otimize o tamanho e ofereça múltiplos formatos!

---

*Desenvolvido para aprendizado de Audio e Vídeo em HTML5*
*Última atualização: Fevereiro de 2026*
