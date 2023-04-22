# Mini ecommerce - API

Essa aplicação tem como objetivo ser a API monólito de um projeto voltado para ser um mini ecommerce.
Aqui possuí todas as regras de negócio e comunicação externas, seja para outras APIs ou conexão com banco de dados.

A API recebeu um deploy pelo [render](https://render.com) e pode ser acessada por [aqui](https://ppessanhadev-mini-ecommerce.onrender.com), também tendo acesso a sua documentação por [esse link](https://ppessanhadev-mini-ecommerce.onrender.com/api/docs).

## Overview
Durante o desenvolvimento, utilizei alguns conceitos de padrões e arquitetura em conjunto com alguns pacotes para facilitar e dar mais escalabilidade ao projeto de maneira organizada.

A API foi construída utilizando [NestJS](https://nestjs.com) visando utilizar todos os seus beneficios e versatilidade.

#### Tecnologias
Para esse projeto, utilizei as seguintes principais ferramentas:

- [@nestjs/mongoose](https://docs.nestjs.com/techniques/mongodb) para comunicação e integração com o banco de dados [MongoDB](https://www.mongodb.com)
- [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction) para documentação geral da aplicação e suas rotas
- [nestjs/zod](https://www.npmjs.com/package/nestjs-zod) para validação de campos de campos e o seu fluxo em conjunto com swagger para gerar schemas completos e documentados
- [bcrypt](https://www.npmjs.com/package/bcrypt) para armazenar senhas no banco de dados dos usuários de maneira mais segura
- [prettier](https://prettier.io) e [eslint](https://eslint.org) para consistência e padronização de código

#### Rotas

A API também conta com uma documentação gerada através do [Swagger](https://swagger.io), ele possuí as seguintes rotas:

| Metodo |              Rota             | Auth | Parametro |                                                         Descrição                                                         |
|:------:|:-----------------------------:|:----:|:---------:|:-------------------------------------------------------------------------------------------------------------------------:|
|   GET  | /api/v1/products              |  Não |     -     | Lista todos os produtos disponíveis                                                                                       |
|  POST  | /api/v1/products              |  Sim |     -     | Recebe os campos: **name**, **price**, **stock** ou **image**(opcional)<br>E então cria um novo produto no banco de dados |
|  PATCH | /api/v1/products?id={id_aqui} |  Sim |     id    | Atualiza uma ou mais informação do produto em especifico<br>Podendo ser: **name**, **price**, **stock** ou **image**      |
| DELETE | /api/v1/products?id={id_aqui} |  Sim |     id    | Deleta por completo um produto especifico no banco de dados                                                               |
|  POST  | /api/v1/user                  |  Não |     -     | Recebe os campos: **username** e **password**<br>Retorna um token para ser utilizado em outras requisições                |
|   GET  | /api/v1/user/check-token      |  Sim |     -     | Rota para validar o token.<br>Util para recuperar sessão com o mesmo token gerado anteriormente.                       |

#### Arquitetura

Também construí a aplicação utilizando Arquitetura hexagonal com conceitos de DDD, Orientação a objetos e Clean Code.

Ela está divida nas seguintes camadas:

- `application`: Responsável por conter tudo o que é resposável pelo fluxo de entrada e saída - da aplicação, podendo incluir validações de entrada, tratativa de erro e segurança caso seja necessário.
- `domain`: Responsável por conter toda a lógica e regra de negócio através de seus casos de uso.
- `infra`: Responsável por conter e gerenciar comunicações externas, seja com banco de dados, com provedores como APIs externas e microserviços.
- `shared`: Responsável por conter tudo aquilo que pode ser compartilhado entre outras camadas, como tipagens e configurações de ambiente.

#### Como rodar o projeto

A partir da raiz do projeto em seu terminal, siga os próximos passos para rodar a API localmente:

**Rodando localmente com docker/docker-compose**

1. `cp .env.example .env`
2. `docker-compose up -d`

**Rodando localmente com pnpm**

O projeto em si foi desenvolvido utilizado o gerenciador de pacote [pnpm](https://pnpm.io), para instalar, no seu terminal execute o comando `npm i -g pnpm`, e siga os próximos passos:

1. `cp .env.example .env`
2. Altere o valor `DB_URI` dentro de `.env` para uri do seu mongo local
3. `pnpm start:dev`

**ATENÇÃO**: Por padrão o usuário admin é gerado como:
  - `username`: administrator
  - `password`: secretp4ssw0rd

Caso queira alterar, é necessário que apague a collection `users` gerada e altere os campos `ADMIN_USERANME` e `ADMIN_PASSWORD`

>> A aplicação estará rodando em: http://localhost:5500
