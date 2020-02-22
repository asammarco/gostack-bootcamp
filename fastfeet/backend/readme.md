# Backend - FastFeet

## Migration: create-users

* **is_admin[boolean true|false]**: esse campo foi incluído na modelagem para verificarmos quando um usuário é ou não um Administrador dentro da aplicação.

* **criação do usuário padrão**: o usuário padrão 'admin@fastfeet.com' está sendo criado na migration create-users. Entendemos que, dados "padrão do sistema" devem ser carregados em migrations. Apesar disso, também criamos a seed admin-user, mas somente porque foi proposto em exercício.

