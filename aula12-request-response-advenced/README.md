# Aula 12 - Request/Response Advanced

Projeto desenvolvido em NestJS para demonstrar conceitos de Request e Response, utilizando Controllers, Services e Modules.

## Estrutura do projeto

aula12-request-response-advanced/
├── dist/
├── node_modules/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── seguranca.controller.ts
└── README.md

## Tecnologias utilizadas

- NestJS
- Node.js
- TypeScript
- npm

## Principais arquivos

### main.ts

Arquivo responsável pelo ponto de entrada da aplicação.

É onde a aplicação NestJS é inicializada e o servidor é colocado em execução.

### app.module.ts

Módulo principal da aplicação.

É responsável por organizar e registrar os Controllers e Services utilizados no projeto.

### app.controller.ts

Controller principal da aplicação.

É responsável por receber as requisições HTTP e definir as rotas da API.

### app.service.ts

Service principal da aplicação.

É responsável por concentrar a lógica de negócio utilizada pelo Controller.

### seguranca.controller.ts

Controller relacionado às funcionalidades de segurança da aplicação.

Pode ser utilizado para trabalhar com requisições relacionadas à segurança, autenticação e autorização.

### app.controller.spec.ts

Arquivo utilizado para realizar testes automatizados do AppController.

## Instalação

Primeiro, instale as dependências do projeto:

npm install

## Executando a aplicação

Para iniciar a aplicação em modo de desenvolvimento:

npm run start:dev

Para iniciar normalmente:

npm run start

A aplicação estará disponível, por padrão, em:

http://localhost:3000

## Build

Para gerar a versão compilada da aplicação:

npm run build

Os arquivos compilados serão gerados na pasta dist/.

## Testes

Para executar os testes:

npm run test

Para executar os testes com cobertura:

npm run test:cov

## Fluxo da aplicação

Cliente
   ↓
HTTP Request
   ↓
Controller
   ↓
Service
   ↓
Controller
   ↓
HTTP Response
   ↓
Cliente

## Conceitos estudados

Neste projeto são trabalhados conceitos importantes do NestJS, como:

- Controllers
- Services
- Modules
- Request
- Response
- Rotas HTTP
- Status HTTP
- Testes automatizados
- Organização de uma API
- Conceitos de segurança

## Observações

A pasta node_modules/ contém as dependências instaladas pelo npm e normalmente não deve ser enviada para o repositório Git.

A pasta dist/ contém os arquivos gerados durante o processo de build.

## Objetivo

Este projeto foi desenvolvido para fins de estudo e prática com NestJS, TypeScript, Request/Response e desenvolvimento de APIs REST.
