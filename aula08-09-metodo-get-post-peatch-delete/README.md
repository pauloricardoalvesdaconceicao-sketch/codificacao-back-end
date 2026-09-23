🎟️ API de Convidados

API REST desenvolvida com NestJS e TypeScript para gerenciamento de convidados.

O projeto foi desenvolvido com o objetivo de praticar a criação de APIs REST, utilizando os principais métodos HTTP:

GET — consultar dados

POST — cadastrar dados

PATCH — atualizar dados

DELETE — remover dados

🎯 Objetivo do projeto

O objetivo desta aplicação é desenvolver uma API simples para gerenciamento de convidados, permitindo:

Listar convidados cadastrados;

Cadastrar novos convidados;

Atualizar a idade de um convidado;

Remover um convidado pelo ID;

Verificar o status da aplicação;

Testar as rotas utilizando o Insomnia.

O projeto também permite praticar a organização de uma aplicação NestJS utilizando Controller, Service e DTO.

🛠️ Tecnologias utilizadas

Tecnologia

Utilização

🟢 Node.js

Ambiente de execução

🟣 NestJS

Framework para desenvolvimento da API

🔷 TypeScript

Linguagem de programação

🧪 Insomnia

Testes das requisições HTTP

📦 npm

Gerenciamento de dependências

⚙️ Instalação

1. Clonar ou acessar o projeto

Entre no diretório do projeto pelo terminal:

cd aula08-09-metodo-get-post-peatch-delete

2. Instalar as dependências

npm install

3. Executar a aplicação

Para executar em modo de desenvolvimento:

npm run start:dev

Quando a aplicação iniciar corretamente, o NestJS exibirá uma mensagem semelhante a:

[NestApplication] Nest application successfully started

A API ficará disponível em:

http://localhost:3000

🌐 Endpoints da API

💚 1. Verificar o status da aplicação

GET /status

Essa rota permite verificar se a aplicação está funcionando.

URL:

GET http://localhost:3000/status

Exemplo no Insomnia

Method: GET
URL: http://localhost:3000/status

👥 Rotas de convidados

📋 2. Listar convidados

GET /convidados

Retorna todos os convidados cadastrados.

URL:

GET http://localhost:3000/convidados

Exemplo no Insomnia

Method: GET
URL: http://localhost:3000/convidados

Exemplo de resposta

[
  {
    "id": 1,
    "nome": "Ana",
    "idade": 25
  },
  {
    "id": 2,
    "nome": "Bruno",
    "idade": 30
  },
  {
    "id": 3,
    "nome": "Carlos",
    "idade": 28
  }
]

➕ 3. Cadastrar convidado

POST /convidados

Cria um novo convidado.

URL:

POST http://localhost:3000/convidados

Configuração no Insomnia

Selecione:

Method: POST
URL: http://localhost:3000/convidados

Em Body, selecione:

JSON

Envie:

{
  "nome": "João",
  "idade": 25
}

Exemplo de resposta

{
  "mensagem": "Convidado João adicionado com sucesso!",
  "dados": {
    "nome": "João",
    "idade": 25
  }
}

✏️ 4. Atualizar idade do convidado

PATCH /convidados/:id

Atualiza a idade de um convidado utilizando seu ID.

URL de exemplo:

PATCH http://localhost:3000/convidados/1

Configuração no Insomnia

Method: PATCH
URL: http://localhost:3000/convidados/1

Em Body → JSON:

{
  "idade": 26
}

Nesse exemplo, a idade do convidado de ID 1 será atualizada para 26.

🗑️ 5. Remover convidado

DELETE /convidados/:id

Remove um convidado utilizando seu ID.

URL de exemplo:

DELETE http://localhost:3000/convidados/1

Configuração no Insomnia

Method: DELETE
URL: http://localhost:3000/convidados/1

Ao realizar a operação, o sistema registra no console:

[ADMINISTRADOR] Convidado com ID 1 removido com sucesso!

Importante: a rota correta é /convidados, com s no final.

Exemplo correto:

DELETE http://localhost:3000/convidados/1

Exemplo incorreto:

DELETE http://localhost:3000/convidado/1

🧪 Testando a API com Insomnia

O Insomnia foi utilizado para testar todas as rotas da aplicação.

Fluxo recomendado de testes

1️⃣ Listar convidados

GET http://localhost:3000/convidados

Verifique os IDs disponíveis.

2️⃣ Criar um convidado

POST http://localhost:3000/convidados

Body:

{
  "nome": "Maria",
  "idade": 22
}

3️⃣ Atualizar a idade

Utilize um ID existente:

PATCH http://localhost:3000/convidados/1

Body:

{
  "idade": 23
}

4️⃣ Remover o convidado

DELETE http://localhost:3000/convidados/1

5️⃣ Conferir novamente

GET http://localhost:3000/convidados

Dessa forma é possível verificar se o convidado foi removido.

📁 Estrutura do projeto

A estrutura principal da aplicação é organizada da seguinte maneira:

aula08-09-metodo-get-post-peatch-delete/
│
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   │
│   ├── convidados.controller.ts
│   ├── convidados.service.ts
│   └── criar.convidado.dto.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

🧩 Organização da aplicação

Controller

O Controller é responsável por receber as requisições HTTP e direcioná-las para os métodos correspondentes.

O ConvidadosController possui:

GET     /convidados
POST    /convidados
PATCH   /convidados/:id
DELETE  /convidados/:id

Service

O Service concentra a lógica responsável pelo gerenciamento dos convidados.

O ConvidadosService possui métodos como:

listarConvidados()
encontrarConvidado()
atualizarIdade()
removerConvidadoLista()

DTO

O CreateConvidadoDto representa os dados recebidos para criação de um novo convidado.

Exemplo:

{
  "nome": "João",
  "idade": 25
}

📚 Resumo das rotas

Método

Endpoint

Função

🟢 GET

/status

Verifica o status da API

🟢 GET

/convidados

Lista os convidados

🔵 POST

/convidados

Cadastra um convidado

🟡 PATCH

/convidados/:id

Atualiza a idade

🔴 DELETE

/convidados/:id

Remove um convidado

📌 Exemplos rápidos

GET

GET http://localhost:3000/convidados

POST

POST http://localhost:3000/convidados
Content-Type: application/json

{
  "nome": "Carlos",
  "idade": 28
}

PATCH

PATCH http://localhost:3000/convidados/1
Content-Type: application/json

{
  "idade": 29
}

DELETE

DELETE http://localhost:3000/convidados/1

✅ Funcionalidades implementadas

Configuração inicial do NestJS

Rota de status da aplicação

Listagem de convidados

Cadastro de convidados

Atualização da idade

Remoção de convidados

Utilização dos métodos HTTP GET, POST, PATCH e DELETE

Testes utilizando Insomnia

Organização utilizando Controller, Service e DTO

🎓 Objetivos de aprendizagem

Com este projeto foi possível praticar:

Criação de uma API REST com NestJS;

Criação e configuração de Controllers;

Criação de Services;

Utilização de DTOs;

Recebimento de parâmetros com @Param();

Recebimento de dados com @Body();

Criação de diferentes métodos HTTP;

Utilização de códigos de status HTTP;

Testes de API utilizando o Insomnia;

Organização de um projeto Back-end.

👨‍💻 Projeto acadêmico

Projeto desenvolvido para fins de estudo e prática de desenvolvimento Back-end com NestJS e TypeScript.

⭐ API de Convidados

NestJS • TypeScript • REST API • Insomnia