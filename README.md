<h1 align="center">ntt-challenge</h1>

## 📃 Sobre o projeto
<p align="center">Simples api para consulta externa de filmes por título e coleção de favoritos</p>


## ⚙️ Funcionalidades

 - Consulta filme por título, usando a OMDBAPI como rescurso
   Collection: Get movie by title

 - A partir dos filmes, atribui-se a uma lista de favoritos
   Collection: Create favorite movie

 - Recupera um filme dentre os favoritos por id
   Collection: Get favorite movie
 
 - Recupera uma lista paginada com filtros opcionais
   Collection: Get all favorite movies
 
 - Informa se um filme pertence aos favoritos
   Collection: Check movie is favorite

## 📁 Acesso ao projeto

Você pode [acessar o código fonte do projeto](https://github.com/padacomo/ntt-challenge).

## 🚀 Documentos para executar o projeto
- Pasta Docs
  - db.sql (script de criação da tabela para atender aos endpoints)
  - collection.json ( Collection para testes no insomnia )

## 💻 Rodando a aplicação

- Clone o projeto 
- Instale as dependências 
- DB: rode o comando docker-compose up


## 🚀 Como executar o projeto

Este projeto contém a parte do Backend do sistema.

### Pré-requisitos
 - docker
 - nest
 - TS
 - Node
 - Gerenciado de dependências
 - recomenda-se insômnia para testar os endpoints, pois há a collection exportada
