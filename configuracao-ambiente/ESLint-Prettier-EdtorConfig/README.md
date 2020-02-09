# <img src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" width="45" height="45" /> ESLint

## Instalação

Para instalar o ESLint em nossa aplicação, no terminal, faça:

```
yarn add eslint -D
```

Ele fará o linting do nosso código. Irá deixá-lo mais bonitinho.

## Configuração

Após adicionar o ESLint, precisamos configurá-lo em nossa aplicação. Para isso, faça:

```
yarn eslint --init
```

Escolha a opção:

```
? How would you like to use ESLint?
> To check syntax, find problems, and enforce code style
```

após,

```
? What type of modules does your project use?
> JavaScript modules (import/export)
```

e depois,

Para o Backend:

```
? Which framework does your project use?
> None of these
```

Para o Front-End:

```
? Which framework does your project use?
> React
```

Após, selecione a opção y caso esteja utilizando TypeScript.

```
Does your project use TypeScript? (y/N)
```

Após, devemos tirar a seleção de Browser e selecionar Node:

```
? Where does your code run? 
 ( ) Browser
>(*) Node
```

Após, selecione: 

```
How would you like to define a style for your project? (Use arrow keys)
> Use a popular style guide
```

E a seguir,

```
? Which style guide do you want to follow? (Use arrow keys)
> Airbnb: https://github.com/airbnb/javascript
```

Após,

```
? What format do you want your config file to be in? (Use arrow keys)
> JavaScript
```

E, por fim:

```
? Would you like to install them now with npm? (Y/n) Y
```

A instalação irá prosseguir.

Como a instalação utiliza o npm, um arquivo package-lock.json será criado. No entanto, estamos utilizano yarn. Então, iremos deletar esse arquivo.

Por fim, gere o comando:

```
yarn
```

Para refazer o mapeamento das dependência do nosso projeto.

Um arquivo, `.eslintrc.js` será criado na raiz da nossa aplicação.

**ATENÇÃO: para continuar instale a extensão ESLint no VS-CODE.**

Abra as preferências do VS-CODE, para isso pressione Ctrl+Shift+P > Open Settings (JSON), e adicione:

```
[...]

"[javascript]":{
        "editor.codeActionsOnSave":{
            "source.fixAll.eslint": true,
        }
    },

    "[javascriptreact]":{
        "editor.codeActionsOnSave":{
            "source.fixAll.eslint": true,
        }
    },

[...]
```
Essas regras são para corrigir o código para o padrão do Airbnb (selecionado anteriormente), automaticamente, sempre que for salvo.

Agora sim, iremos configurar o arquivo `.eslintrc.js`. Adicione as seguinte linhas:

```
[...]

rules: {
    "prettier/prettier":"error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars":["error",{"argsIgnorePattern":"next"}],
  },

[...]
```

Configuradas nossas regras de formatação do ESLint, iremos instalar o prettier.


# Prettier

O Prettier adiciona ainda mais formatação ao nosso código.

## Instalação

O comando abaixo instala o Prettier na nossa aplicação:

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

## Configuração

Novamente, no arquivo `.eslintrc.js`, iremos adicionar as seguintes informações:

```
[...]

extends: [
    'airbnb-base','prettier'
  ],
plugins:['prettier']
  ,

[...]

rules: {
    "prettier/prettier":"error",

[...]

```

Como o padrão do Airbnb e do prettier podem conter regras duplicadas, podemos criar um arquivo que irá definir, qual regra nosso código deverá obedecer.
Crie o arquivo `.prettierrc` na raiz do nosso projeto, com as seguintes informações:

```
{
  "singleQuote":true,
  "trailingComma": "es5"
}
```

Por fim, para  corrigir todos os arquivos .JS do nosso projeto, conforme as configurações realizadas, gere o comando abaixo:

```
yarn eslint --fix src --ext .js
```

Vamos para a instalação e configuração o EditorConfig

# EditorConfig

O EditorConfig padroniza o código que pode ser escrito em diferentes IDE: atom, sublime, etc.

## Instalação

Adicione a extensão do EditorConfig ao VS-CODE.

## Configuração

Após adicionada a extensão do EditorConfig, clicar com o botão direito na raiz do nosso projeto e escolher a opção:

```
Generate .editorconfig
```

No arquivo `.editorconfig` gerado, altere os últimos dois parâmetros para `true`. Dessa forma, o conteúdo do arquivo deve ficar da seguinte forma:

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```