# Nodemon E Sucrase

Para utilizar a nomenclatura `import/export` e ainda, autoreload do código em nosso backend, precisamos adicionar e configurar o sucrase e o nodemon.

## Instalação

```
yarn add nodemon sucrase -D
```

## Configuração
No arquivo `package.json`, insira a chave **scripts**, da seguinte forma:

```
[...]

"license": "MIT",
"scripts": {
    "dev":"nodemon src/server.js"
},
"dependencies": {
    "express": "^4.17.1"
},

[...]
```

Por fim, para que o nodemon e o sucrase trabalhem juntos, precisamos criar um arquivo ``nodemon.json`` na raiz do nosso projeto, com o conteúdo abaixo:

```
{
  "exec-map":{
  "js":"node -r sucrase/register"
  }
}
```

No terminal, para iniciar a aplicação, execute o comando:

```
yarn dev
``` 

## Alterar o modo DEBUG

Novamente, no package.json de nossa aplicação, precisamos adicionar um segundo script, para fazer o debug da aplicação:

```
[...]

"scripts": {
    "dev":"nodemon src/server.js",
    "dev:debug":"nodemon --inspect src/server.js"
  },

[...]
```

Após, criar uma nova configuração de debug, clicando no ícone ``run debug`` do vs-code, e após, ``create a lauch.json file``.
Nesse arquivo, iremos inserir a seguinte configuração:

```
[...]
  
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",    
      "restart": true,
      "protocol":"inspector"
    }
  ]
  
[...]  
```

E dessa forma, para iniciar em modo debug, basta executar o comando:

```
yarn dev:debug
```