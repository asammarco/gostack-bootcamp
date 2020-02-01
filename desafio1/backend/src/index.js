// Importando o módulo express
const express = require('express');

// Importando nossas rotas
const routes = require('./routes/index');

// Instanciando uma nova aplicação
const app = express();

// Interpretar requisições cujo BODY esteja no formato JSON
app.use(express.json());

// Fazendo nossa aplicação utilizar nossas rotas
app.use(routes);

// Porta em que nossa aplicação irá rodar
app.listen(3333);