# ESLint

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

**Antes de configurarmos nosso Linting de código, neste arquivo, iremos instalar o ESLint Plugin no VS Code.**


