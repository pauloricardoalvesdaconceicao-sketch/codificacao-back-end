# Aula 13 - Middlewares e Interceptors no NestJS

Nesta aula foi desenvolvido um exemplo de **Middleware no NestJS**, utilizando um middleware para registrar informações das requisições e controlar o acesso a uma rota administrativa.

## 📚 Conteúdos da aula

- Middleware no NestJS
- `NestMiddleware`
- `MiddlewareConsumer`
- `NestModule`
- Interceptação de requisições
- Registro de logs
- Verificação de cabeçalhos HTTP
- Controle de acesso
- Status HTTP `403 - Forbidden`
- Proteção de rotas

---

## 📂 Estrutura do projeto

```text
src/
├── app.controller.ts
├── app.module.ts
└── logger/
    └── logger.middleware.ts
```

---

## ⚙️ 1. Configuração do Middleware

No `AppModule`, implementamos a interface `NestModule` e utilizamos o `MiddlewareConsumer` para registrar o middleware.

```typescript
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { LoggerMiddleware } from './logger/logger.middleware.js';

@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
```

### Como funciona?

O código:

```typescript
consumer.apply(LoggerMiddleware).forRoutes('*');
```

informa ao NestJS que o `LoggerMiddleware` será executado nas rotas da aplicação.

O `*` indica que o middleware será aplicado a todas as rotas.

---

## 🔎 2. Criando o LoggerMiddleware

O middleware implementa a interface `NestMiddleware`.

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const currentUrl = req.originalUrl || req.url;

    console.log(`[LOG] Método: ${req.method} | Rota: ${req.path}`);

    if (currentUrl.startsWith('/admin')) {
      const base = req.headers['x-user-base'];

      if (base !== 'Administrador') {
        return res.status(403).json({
          Codigo: 403,
          mensagem: 'Acesso Negado: Privilégio de Administrador necessário',
          registro: new Date(),
        });
      }
    }

    next();
  }
}
```

## 📝 O que o Middleware faz?

O middleware possui duas responsabilidades principais:

### 1. Registrar informações da requisição

```typescript
console.log(`[LOG] Método: ${req.method} | Rota: ${req.path}`);
```

No terminal será possível visualizar:

```text
[LOG] Método: GET | Rota: /
```

ou:

```text
[LOG] Método: GET | Rota: /admin
```

### 2. Verificar o acesso à rota `/admin`

O middleware verifica se a URL começa com `/admin`:

```typescript
if (currentUrl.startsWith('/admin')) {
```

Quando a rota é administrativa, o middleware verifica o cabeçalho:

```text
x-user-base
```

através de:

```typescript
const base = req.headers['x-user-base'];
```

Para ter acesso à área administrativa, o valor precisa ser:

```text
Administrador
```

---

## 🔐 3. Bloqueando o acesso

Caso o usuário não possua o privilégio necessário:

```typescript
if (base !== 'Administrador') {
```

a aplicação retorna um erro HTTP `403`:

```typescript
return res.status(403).json({
  Codigo: 403,
  mensagem: 'Acesso Negado: Privilégio de Administrador necessário',
  registro: new Date(),
});
```

O código `403` significa:

> Forbidden - Acesso proibido

Ou seja, o servidor recebeu a requisição, mas o usuário não possui autorização para acessar o recurso.

---

## ▶️ 4. Utilizando o `next()`

Quando o usuário possui permissão, o middleware executa:

```typescript
next();
```

O `next()` permite que a requisição continue para o próximo middleware ou para o Controller responsável pela rota.

### Fluxo da requisição

```text
Requisição
    ↓
Middleware
    ↓
Verificação
    ↓
É /admin?
   ↙       ↘
 NÃO       SIM
 ↓          ↓
next()   Verificar permissão
             ↓
       Administrador?
          ↙       ↘
        NÃO       SIM
         ↓          ↓
       403        next()
                    ↓
                Controller
                    ↓
                 Resposta
```

---

## 🎯 5. Criando as rotas

O `AppController` possui duas rotas:

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getPublic() {
    return {
      mensagem: 'Rota Publica acessada com sucesso!',
      data: new Date(),
    };
  }

  @Get('admin')
  getPrivate() {
    return {
      mensagem: 'Bem-vindo ao painel administrativo',
      data: new Date(),
    };
  }
}
```

### 🌎 Rota pública

A rota:

```text
GET /
```

retorna:

```json
{
  "mensagem": "Rota Publica acessada com sucesso!",
  "data": "..."
}
```

Essa rota pode ser acessada normalmente.

### 🔒 Rota administrativa

A rota:

```text
GET /admin
```

é protegida pelo Middleware.

Sem o cabeçalho correto:

```text
x-user-base: Administrador
```

a aplicação retorna:

```json
{
  "Codigo": 403,
  "mensagem": "Acesso Negado: Privilégio de Administrador necessário",
  "registro": "..."
}
```

---

## 🧪 6. Testando a aplicação

Primeiro, execute o projeto em modo de desenvolvimento:

```bash
npm run start:dev
```

### Testando a rota pública

```bash
curl http://localhost:3000/
```

Resposta esperada:

```json
{
  "mensagem": "Rota Publica acessada com sucesso!",
  "data": "..."
}
```

### Testando `/admin` sem permissão

```bash
curl http://localhost:3000/admin
```

Resposta esperada:

```json
{
  "Codigo": 403,
  "mensagem": "Acesso Negado: Privilégio de Administrador necessário",
  "registro": "..."
}
```

### Testando `/admin` com permissão

Enviando o cabeçalho:

```bash
curl -H "x-user-base: Administrador" http://localhost:3000/admin
```

Resposta:

```json
{
  "mensagem": "Bem-vindo ao painel administrativo",
  "data": "..."
}
```

---

## 🧠 Conceitos importantes

### Middleware

Middleware é uma função executada durante o processamento de uma requisição.

Ele pode ser utilizado para:

- Logs
- Autenticação
- Autorização
- Validação
- Tratamento de requisições
- Modificação de `request`
- Modificação de `response`

### Request

Representa a requisição recebida pelo servidor.

Exemplos:

```typescript
req.method
req.path
req.headers
req.originalUrl
```

### Response

Representa a resposta que será enviada para o cliente.

Exemplo:

```typescript
res.status(403).json(...)
```

### NextFunction

É responsável por permitir que a execução continue:

```typescript
next();
```

Se o middleware não chamar `next()` e também não enviar uma resposta, a requisição poderá ficar aguardando.

---

## ⚠️ Observação sobre segurança

Neste exemplo, o cabeçalho:

```text
x-user-base
```

é utilizado para demonstrar o funcionamento de autorização através de um Middleware.

Em uma aplicação real, **não é seguro confiar diretamente em um cabeçalho enviado pelo cliente** para determinar se ele é administrador.

Em sistemas reais, normalmente são utilizados mecanismos como:

- JWT
- Sessões
- Guards
- Autenticação
- Autorização baseada em papéis (Roles)
- Controle de acesso no backend

O objetivo desta aula é demonstrar o funcionamento dos **Middlewares no NestJS**.

---

## 📌 Resumo

Nesta aula foi criado um Middleware capaz de:

```text
Receber uma requisição
        ↓
Registrar método e rota
        ↓
Verificar se é /admin
        ↓
Verificar o header x-user-base
        ↓
Administrador?
   ↙           ↘
 NÃO           SIM
 ↓              ↓
403            next()
                 ↓
             Controller
                 ↓
              Resposta
```

Dessa forma, foi possível entender na prática como um **Middleware pode interceptar uma requisição antes que ela chegue ao Controller**, permitindo executar regras de log, validação e controle de acesso.

---

## 🚀 Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- Express
- HTTP
- Git
- GitHub
