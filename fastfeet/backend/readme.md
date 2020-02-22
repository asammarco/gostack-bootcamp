# Backend - FastFeet

## Migration: create-users

* **is_admin[boolean true|false]**: esse campo foi incluído na modelagem para verificarmos quando um usuário é ou não um Administrador dentro da aplicação.

* **criação do usuário padrão**: o usuário padrão 'admin@fastfeet.com' está sendo criado na migration create-users. Dados "padrão do sistema" devem ser carregados em migrations. Sendo assim, foi criada a seed no-admin-user, para cumprir a proposta do desafio 2.

## Model: Recipient

* **createdByUserId**: como um Recipient só pode ser criado por um admin, na modelagem de Recipient foi incluído o atributo **createdByUserId**. Com este relacionamento de associação, pode-se obter maior qualidade sobre o cadastro de Recipient. Dessa forma, é possível obter qual administrador criou quais Recipients.
* **updatedByUserId**: este atributo foi adicionado na modelagem de Recipient, com intuito de podermos verificar qual usuário editou/atualizou os dados de um Recipient.

## Controller: RecipientController

* **createdByUserId**: o atributo recebe o valor do id do administrador, oriundo diretamente do payload do middleware de authenticação de usuário.
* **updatedByUserId**: o atributo recebe o valor do id do usuário que editou um determinado Recipient, oriundo diretamente do payload do middleware de authenticação de usuário.

## Middleware: auth

* **loggedIn**: verifica se o usuário está logado na aplicação (autenticado). Armazena o id do usuário na requisição, e também, o valor de isAdmin.
* **checkAdmin**: verifica se o usuário logado é um Administrador, utilizando o valor de isAdmin, atribuído a requisição em **loggedIn**.

Dessa forma, podemos tratar o acesso às rotas cujas quais o usuário deve estar autenticado, e adicionalmente, o caso em que o usuário autenticado deve ser um administrador. Essa solução garante um maior isolamento/encapsulamento dos middlewares de rota.
