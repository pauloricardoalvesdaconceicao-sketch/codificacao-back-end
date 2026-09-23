# 🚀 API de Convidados — NestJS

Projeto desenvolvido durante as aulas de desenvolvimento **Back-End**, utilizando **NestJS, TypeScript e Node.js**.

A aplicação consiste em uma API REST para gerenciamento de convidados, permitindo realizar operações de consulta, criação, atualização e exclusão.

## 🛠️ Tecnologias

- Node.js
- NestJS
- TypeScript
- Insomnia
- Git
- GitHub
- npm

## 🎯 Objetivo

Praticar os principais conceitos de desenvolvimento de APIs com NestJS, incluindo:

- Controllers
- Services
- DTOs
- Injeção de dependência
- Rotas
- Métodos HTTP
- Parâmetros de rota
- Body das requisições
- Status HTTP

## 📁 Estrutura do projeto

```text
aula08-09-metodo-get-post-peatch-delete/
│
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── convidados.controller.ts
│   ├── convidados.service.ts
│   ├── criar.convidado.dto.ts
│   └── main.ts
│
├── test/
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 🚀 Instalação

Instale as dependências:

```bash
npm install
```

Execute o projeto em modo desenvolvimento:

```bash
npm run start:dev
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

## 🌐 Endpoints

### Verificar status

```http
GET /status
```

Exemplo:

```text
http://localhost:3000/status
```

### Listar convidados

```http
GET /convidados
```

Exemplo de resposta:

```json
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
  }
]
```

### Criar convidado

```http
POST /convidados
```

Body:

```json
{
  "nome": "Paulo",
  "idade": 35
}
```

### Atualizar convidado

```http
PATCH /convidados/:id
```

Exemplo:

```text
PATCH http://localhost:3000/convidados/1
```

Body:

```json
{
  "idade": 30
}
```

### Remover convidado

```http
DELETE /convidados/:id
```

Exemplo:

```text
DELETE http://localhost:3000/convidados/1
```

A exclusão utiliza o status:

```text
204 No Content
```

## 🧪 Testes com Insomnia

As rotas da API podem ser testadas utilizando o **Insomnia**.

### GET

```text
GET http://localhost:3000/convidados
```

### POST

```text
POST http://localhost:3000/convidados
```

Body:

```json
{
  "nome": "Maria",
  "idade": 28
}
```

### PATCH

```text
PATCH http://localhost:3000/convidados/1
```

Body:

```json
{
  "idade": 29
}
```

### DELETE

```text
DELETE http://localhost:3000/convidados/1
```

## 📚 Conceitos praticados

Durante o desenvolvimento foram praticados:

- Criação de API REST
- NestJS
- TypeScript
- Controllers
- Services
- DTOs
- GET, POST, PATCH e DELETE
- Rotas com parâmetros
- Requisições JSON
- Status HTTP
- Testes com Insomnia
- Versionamento com Git e GitHub

## 🔄 Fluxo da aplicação

```text
Cliente
   ↓
Controller
   ↓
Service
   ↓
Dados
   ↓
Resposta HTTP
   ↓
Cliente
```

## 🎓 Projeto acadêmico

Projeto desenvolvido para fins de estudo e aprendizado em **Desenvolvimento Back-End**, utilizando NestJS e TypeScript.

**Autor:** Paulo Ricardo Alves da Conceição

**Tecnologias:** Node.js • NestJS • TypeScript • Insomnia • Git • GitHub