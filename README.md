# Desafio TXAI

## Sobre o projeto

Desafio Técnico para processo seletivo, este projeto consiste na implementação de um um sistema de controle de estoque com um login, CRUD de
produtos e CRUD de usuários.

Onde feito o login e gerado um token para a autenticação do usuário, pois apenas o próprio usuário pode ver, criar, atualizar e deletar seus produtos em estoque.

## Tecnologias Utilizadas


## Backend

#### :link: [Node.js](https://nodejs.org/en/)
#### :link: [Express](https://expressjs.com/pt-br/)
#### :link: [Sequelize](https://sequelize.org/)
#### :link: [MySQL](https://dev.mysql.com/doc/)
#### :link: [JsonWebToken](https://jwt.io/introduction)
#### :link: [Joi](https://joi.dev/api/?v=17.5.0)
#### :link: [ESLint](https://eslint.org/)


## Frontend
#### :link: [React](https://pt-br.reactjs.org/docs/getting-started.html)
#### :link: [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
#### :link: [Axios](https://github.com/axios/axios)
#### :link: [ESLint](https://eslint.org/)


## Pré-Requisitos

Este projeto Utiliza o banco de dados MySQL, para o funcionamento é necessário ter o banco de dados em sua máquina. Para instruções sobre a instalação do banco de dados acesse [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

## Instalação

-Clone o repositório através da seguinte chave https: `https://github.com/devwelljr/TXAI-challenge.git`

-Instale as dependências do backend e frontend, entrando na raiz `./backend` dando `npm install` e o mesmo processo no frontend.

-Crie um arquivo de variáveis de ambiente na raiz do `./backend`, `.env` seguindo o arquivo `.env.example` como molde.

-Dentro da raiz do backend `./backend` rode no terminal `npm run db:reset` ou os seguintes comandos: `npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all`, assim o sequelize irá criar o banco de dados no MySQL e popular o banco com alguns usuários. PS: O usuário `sistematxai` pedido será populado com o comando `npx sequelize-cli db:seed:all`.

-Para rodar a aplicação de `npm start` no `./frontend` e no `./backend`.

## Como utilizar

##Frontend

### Login: http://localhost:3000/login

A aplicação começa com o cliente tendo que fazer login ou se cadastrar no `Estoque TXAI`, onde deve gitar seu `usuário` com no mínimo 4 carácteres e sua senha.

![TelaDeLogin](.frontend/src/images/loginPage.png)

### Cadastro: http://localhost:3000/register

Na tela de cadastro para se criar uma conta o usuário precisa cadastrar seu `usuário` com no mínimo 4 carácteres, sua `senha` com no mínimo 6 carácteres e um `email` válido.
PS: O `email` é unico no sistema, não sendo possível ter dois usuários com o mesmo email.

![TelaDeCadastro](.frontend/src/images/registerPage.png)


### Produtos: http://localhost:3000/customer/products
