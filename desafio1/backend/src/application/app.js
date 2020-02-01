// Importando o módulo express
const express = require('express');

// Importando nossas rotas
const routes = require('../routes/index');

class App{
  constructor(){
    // Criando um server para nossa aplicação
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(){
    // Interpretar requisições cujo BODY esteja no formato JSON
    this.server.use(express.json());
  }

  routes(){
    // Fazendo nossa aplicação utilizar nossas rotas    
    this.server.use(routes);
  }
}

module.exports = new App().server;