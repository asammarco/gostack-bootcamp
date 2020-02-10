# <img src="https://sequelize.org/v5/manual/asset/logo-small.png" width="34" height="34"/> Sequelize ORM

O sequelize é um ORM (Object-Relational Mapping), uma aplicação que abstrai a manipulação de dados de nossa aplicação. Atualmente, disponível para PostgreSQL, MySQL, MariaDB, SQLite and Microsoft SQL Server. 

Entre as diversas funcionalidades do Sequelize, estão:

* a criação de tabelas (Models)
* a população de nossos models com dados (Seeds)
* o controle de versão dos elementos de dados (Migrations)
* a utilzação de linguagem JavaScript (e não SQL).

## Instalação

No terminal, em nossa aplicação, execute o comando:

```
yarn add sequelize
```

Após, iremos instalar o sequelize-cli, dependência de desenvolvimento do sequelize, com as principais funcionalidades que utilizaremos, podendo ser acessadas via linha de comando (cli).

```
yarn add sequelize-cli -D
```

## Configuração

Iniciaremos a configuração criando na raiz do nosso projeto, o arquivo `.sequelizerc`, com as seguintes informações:

```
const { resolve } = require('path');

 module.exports = {
   config: resolve(__dirname,'src', 'config', 'database.js'),
   'models-path': resolve(__dirname,'src', 'app', 'models'),
   'migrations-path': resolve(__dirname,'src', 'database', 'migrations'),
   'seeders-path': resolve(__dirname,'src', 'database', 'seeds'),
 }
```

Basicamente, esse arquivo configura os caminhos utilizados pelo sequelize em nossa aplicação:

Caminho      | Descrição
------------ | -------------
../src/config/database.js | Caminho para o arquivo de configuração de nossa base de dados (hostname, usuário, senha, etc)
../src/app/models | Indica a pasta na qual nossos models serão armazenados
../src/database/migrations | Indica a pasta na qual nossos arquivos de migrations serão armazenados
../src/database/seeds | Indica a pasta na qual nossos arquivos de seeds serão armazenados


Dessa forma, precisaremos criar a estrutura de pastas acima, em nossa  aplicação.

Criada as pastas, também precisaremos criar o arquivo `../config/database.js`, com as informações de acesso a nossa base de dados:

```
module.exports = {
  dialect: 'postgres',
  host: [endereço do host],
  username: [usuário de acesso],
  password: [senha do usuário],
  database: [nome da base de dados],
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
```

**Atenção: Insira o arquivo ../config/database.js no .gitignore, pois este contém informações privadas de acesso a base de dados da aplicação**


## Instalação pg e pg-host

Para que o nosso Sequelize converse com o PostgreSQL, precisamos instalar as dependências para este SGBD. Para isso, execute o comando abaixo:

```
yarn add pg pg-hstore
```



## Principais Comandos (CLI)


Migrate para criação da nossa tabela de Usuários:

```
yarn sequelize migration:create --name=create-users
```

Para rodar a migrate faça:

```
yarn sequelize db:migrate
```

Para desfazer a última migrate:

```
yarn sequelize db:migrate:undo
```

Para desfazer todas as migrates:

```
yarn sequelize db:migrate:undo:all
```

