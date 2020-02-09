# Docker

## Instalação

Instalar o Docker é simples.

Vá até o site [Docker Desktop](https://www.docker.com/products/docker-desktop) e siga as instruções.

## Configuração

Vamos utilizar o Docker para criar ambientes isolados de desenvolvimento de nossas aplicações (containers). A base de dados PostgreSQL de nossa aplicação, por exemplo, estará em um container.

Para isso, após instalado o Docker, iremos gerar o seguinte comando em nosso terminal:

```
docker create -v /var/lib/postgresql/data --name PostgresData alpine
```
E após,

```
docker run -p 5432:5432 --name [nome_container] -e POSTGRES_PASSWORD=[password] -d --volumes-from PostgresData postgres
```

O primeiro comando, cria um container para armazenar os dados do PostgreSQL, ou seja, a pasta `postgresql/data`, enquanto que o segundo comando, cria uma nova instância do PostgreSQL.



