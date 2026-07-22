# ✅ Validação HTML5 Completa

*Domine todos os atributos de validação nativos do HTML5 para criar formulários robustos e acessíveis*

## 📌 Introdução à Validação HTML5

HTML5 introduziu validação nativa do lado do cliente sem precisar de JavaScript!
Você pode validar entrada de usuário diretamente no HTML com atributos especiais.
Isso melhora a experiência do usuário e reduz a carga no servidor.

## 🔴 Atributo Required (Obrigatório)

### 1. Tornando Campos Obrigatórios

O atributo `required` força o preenchimento de um campo antes de enviar o formulário.

**Exemplo 1: Input Text Obrigatório**

```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required>
  <button type="submit">Enviar</button>
</form>
```

Resultado: campo não pode ser deixado em branco.

**Exemplo 2: Múltiplos Campos Obrigatórios**

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" required>
  
  <label for="senha">Senha:</label>
  <input type="password" id="senha" required>
  
  <label for="termos"><input type="checkbox" id="termos" required> Aceito os termos</label>
  
  <button type="submit">Registrar</button>
</form>
```

## 🎯 Validação por Type

### 2. Tipos de Input com Validação Integrada

HTML5 oferece vários tipos de input que validam automaticamente o formato.

| Type | Validação | Exemplo | Uso |
|---|---|---|---|
| `email` | Formato de email válido | usuario@exemplo.com | Formulários de contato, login |
| `url` | URL válida | https://exemplo.com | Campos de website |
| `number` | Apenas números | 42, -15.5 | Quantidades, idades |
| `date` | Data válida | 2026-02-21 | Agendamentos, nascimento |
| `time` | Hora válida | 14:30 | Horários |
| `tel` | Número de telefone | (11) 98765-4321 | Contato telefônico |

**Exemplo: Formulário com Vários Types**

```html
<form>
  <input type="email" placeholder="seu@email.com" required>
  <input type="url" placeholder="https://seu-site.com">
  <input type="tel" placeholder="(11) 98765-4321">
  <input type="date" required>
  <input type="time">
  <input type="number" placeholder="Quantidade">
  <button type="submit">Enviar</button>
</form>
```

## 📏 Atributos Min e Max

### 3. Limitando Valores Numéricos e Datas

Defina limites mínimo e máximo para campos numéricos, datas e horas.

**Exemplo 1: Números com Min e Max**

```html
<label for="idade">Sua idade:</label>
<input type="number" id="idade" min="18" max="120" required>
```

Resultado: só aceita números de 18 a 120.

**Exemplo 2: Datas com Limites**

```html
<label for="nascimento">Data de nascimento:</label>
<input type="date" id="nascimento" 
       min="1950-01-01" 
       max="2008-12-31" 
       required>
```

Resultado: só aceita datas entre 1950 e 2008.

**Exemplo 3: Range Slider com Min/Max**

```html
<label for="volume">Volume: <span id="valor">50</span>%</label>
<input type="range" id="volume" min="0" max="100" value="50">

<script>
  document.getElementById('volume').addEventListener('input', 
    function() {
      document.getElementById('valor').textContent = this.value;
    }
  );
</script>
```

## 🔤 Atributo Pattern (Regex)

### 4. Validação com Expressões Regulares

Use `pattern` com regex para validação complexa e customizada.

**Exemplo 1: Apenas Letras e Números**

```html
<input type="text" 
       pattern="[A-Za-z0-9]+" 
       placeholder="Apenas letras e números"
       title="Digite apenas letras (A-Z, a-z) e números (0-9)"
       required>
```

**Exemplo 2: CEP Brasileiro (5 dígitos)**

```html
<input type="text" 
       pattern="\d{5}" 
       placeholder="00000"
       title="Digite 5 dígitos"
       required>
```

Apenas aceita: 12345, 98765, etc.

**Exemplo 3: CPF Brasileira (11 dígitos)**

```html
<input type="text" 
       pattern="\d{11}" 
       placeholder="00000000000"
       title="Digite 11 dígitos"
       required>
```

**Exemplo 4: Nome do Usuário (6-20 caracteres, sem espaços)**

```html
<input type="text" 
       pattern="[A-Za-z0-9_]{6,20}" 
       placeholder="seu_usuario"
       title="6-20 caracteres, letras, números e underscore"
       required>
```

## 📝 Atributos Minlength e Maxlength

### 5. Limitando Quantidade de Caracteres

**Exemplo 1: Comprimento Mínimo e Máximo**

```html
<label for="senha">Senha:</label>
<input type="password" 
       id="senha" 
       minlength="8" 
       maxlength="20"
       placeholder="8-20 caracteres"
       required>
```

**Exemplo 2: Textarea com Limites**

```html
<label for="bio">Sua biografia:</label>
<textarea id="bio" 
          minlength="10" 
          maxlength="500"
          placeholder="Mínimo 10, máximo 500 caracteres"
          required></textarea>
```

## 📋 Datalist - Sugestões Automáticas

### 6. Campo de Input com Opções Sugeridas

`Datalist` fornece sugestões enquanto o usuário digita, como um autocomplete.

**Exemplo 1: Sugestões de Países**

```html
<label for="pais">País:</label>
<input type="text" id="pais" list="paises" placeholder="Digite o país">

<datalist id="paises">
  <option value="Brasil">
  <option value="Portugal">
  <option value="Argentina">
  <option value="Chile">
  <option value="México">
</datalist>
```

Resultado: input com autocomplete de países.

**Exemplo 2: Sugestões de Cores**

```html
<label for="cor">Escolha uma cor:</label>
<input type="text" id="cor" list="cores">

<datalist id="cores">
  <option value="Vermelho">
  <option value="Azul">
  <option value="Verde">
  <option value="Amarelo">
  <option value="Rosa">
</datalist>
```

**Exemplo 3: Sugestões Dinâmicas com Tecnologias**

```html
<label for="tech">Tecnologia favorita:</label>
<input type="text" id="tech" list="tecnologias" placeholder="HTML, CSS, JS...">

<datalist id="tecnologias">
  <option value="HTML5">
  <option value="CSS3">
  <option value="JavaScript">
  <option value="Python">
  <option value="React">
  <option value="Node.js">
  <option value="MongoDB">
</datalist>
```

## ⏸️ Atributo Step

### 7. Definindo Incrementos para Números

`Step` define o incremento quando o usuário clica nos botões de seta.

**Exemplo 1: Quantidade com Incremento de 1**

```html
<label for="quantidade">Quantidade:</label>
<input type="number" id="quantidade" min="1" max="100" step="1" value="1">
```

Clicando nas setas: 1, 2, 3, 4...

**Exemplo 2: Preço com Incremento de 0.50**

```html
<label for="preco">Preço (R$):</label>
<input type="number" id="preco" min="0" max="1000" step="0.50" value="0">
```

Clicando nas setas: 0, 0.50, 1.00, 1.50...

**Exemplo 3: Hora com Incremento de 15 minutos**

```html
<label for="horario">Horário:</label>
<input type="time" id="horario" step="900">
```

900 segundos = 15 minutos. Horários: 08:00, 08:15, 08:30, 08:45...

## 🔒 Atributos Readonly e Disabled

### 8. Protegendo Campos

**Exemplo 1: Campo Readonly (legível, não editável)**

```html
<label for="id-usuario">ID do Usuário:</label>
<input type="text" id="id-usuario" value="12345" readonly>
```

Resultado: campo cinzento, não pode editar, envia no form.

**Exemplo 2: Campo Disabled (não editável, não envia)**

```html
<label for="promocao">Código de Promoção:</label>
<input type="text" id="promocao" value="Expirada" disabled>
```

Resultado: campo cinzento, não pode editar, NÃO envia no form.

**Exemplo 3: Desabilitar Múltiplos Campos**

```html
<fieldset disabled>
  <legend>Opções Desabilitadas</legend>
  <input type="text" placeholder="Desabilitado">
  <input type="text" placeholder="Também desabilitado">
  <button>Botão Desabilitado</button>
</fieldset>
```

## 🔄 Atributo Autocomplete

### 9. Controle de Autopreenchimento do Navegador

**Exemplo 1: Permitir Autopreenchimento**

```html
<input type="text" autocomplete="name" placeholder="Seu nome">
<input type="email" autocomplete="email" placeholder="Seu email">
<input type="tel" autocomplete="tel" placeholder="Seu telefone">
```

Valores válidos: `name`, `email`, `tel`, `address-line1`, `postal-code`, etc.

**Exemplo 2: Desabilitar Autopreenchimento**

```html
<input type="password" autocomplete="new-password">
```

Para campos sensíveis, use "off":

```html
<input type="text" autocomplete="off">
```

## 🎯 Formulário Completo com Validações

**Exemplo: Registro de Usuário**

```html
<form>
  <fieldset>
    <legend>Informações Pessoais</legend>
    
    <label for="nome">Nome Completo:</label>
    <input type="text" id="nome" name="nome" 
           minlength="3" maxlength="100" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="idade">Idade:</label>
    <input type="number" id="idade" name="idade" 
           min="18" max="120" required>
  </fieldset>
  
  <fieldset>
    <legend>Segurança</legend>
    
    <label for="senha">Senha:</label>
    <input type="password" id="senha" name="senha" 
           minlength="8" maxlength="32" 
           pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}" 
           title="Mínimo 8 caracteres, 1 maiúscula, 1 minúscula, 1 número"
           required>
    
    <label for="confirmar">Confirmar Senha:</label>
    <input type="password" id="confirmar" name="confirmar" required>
  </fieldset>
  
  <label for="termos">
    <input type="checkbox" id="termos" name="termos" required>
    Aceito os termos de serviço
  </label>
  
  <button type="submit">Registrar</button>
  <button type="reset">Limpar</button>
</form>
```

## 💡 Boas Práticas de Validação

### ✅ Faça Isto:

- Use validação HTML5 nativa sempre que possível
- Combine múltiplos atributos de validação (required, min, max, pattern)
- Use `title` para explicar o padrão esperado
- Forneça feedback claro de erro ao usuário
- Use labels associadas com `for` e `id`
- SEMPRE valide também no servidor/backend
- Use `novalidate` se precisar de validação customizada com JS

### ❌ Não Faça Isto:

- Não confie APENAS em validação HTML5 (valide no backend também!)
- Não use padrões de regex muito complexos que confundem usuários
- Não remova mensagens de erro padrão sem oferecer alternativa
- Não deixe campos obrigatórios sem indicação visual (use * ou "required")
- Não use validação HTML5 sem fallback para navegadores antigos

## 🎨 Customizando Validações com CSS

**Pseudo-classes de Validação:**

```css
/* Campo válido */
input:valid {
  border-color: green;
  background-color: #e8f5e9;
}

/* Campo inválido */
input:invalid {
  border-color: red;
  background-color: #ffebee;
}

/* Campo em foco */
input:focus {
  outline: 2px solid blue;
}

/* Campo desabilitado */
input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Campo obrigatório não preenchido */
input:required:invalid {
  box-shadow: 0 0 5px red;
}
```

## ⚙️ Validação JavaScript Adicional

**Exemplo: Validação Customizada**

```html
<form id="form-registro">
  <input type="password" id="senha">
  <input type="password" id="confirmar-senha">
  <button type="submit">Registrar</button>
</form>

<script>
  const form = document.getElementById('form-registro');
  
  form.addEventListener('submit', function(e) {
    const senha = document.getElementById('senha').value;
    const confirmar = document.getElementById('confirmar-senha').value;
    
    if (senha !== confirmar) {
      e.preventDefault();
      alert('As senhas não correspondem!');
    }
  });
</script>
```

## 🏆 Conclusão

HTML5 oferece validação nativa poderosa que melhora a experiência do usuário
e reduz trabalho de desenvolvimento. Combine `required`, `type`,
`min/max`, `pattern` e outros atributos para criar
formulários robustos. Mas nunca esqueça: SEMPRE valide também no servidor!

---

*Desenvolvido para aprendizado de Validação HTML5*
*Última atualização: Fevereiro de 2026*
