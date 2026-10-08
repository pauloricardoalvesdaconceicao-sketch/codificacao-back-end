```
# 📦 Aula — API de Produtos com NestJS

Nesta aula, vamos criar uma API simples de produtos utilizando **NestJS**, trabalhando com Controllers, Services, injeção de dependência, parâmetros de rota e tratamento de erros HTTP.

## 🚀 Conceitos abordados

- `Controller`
- `Service`
- `@Injectable()`
- `@Controller()`
- `@Get()`
- `@Param()`
- Injeção de dependência
- `BadRequestException`
- `NotFoundException`
- `Logger`
- Validação de parâmetros
- Busca de dados com `.find()`

---

## 📁 Estrutura do projeto
```

src/ └── produtos/ ├── produtos.controller.ts └── produtos.service.ts

```

---

# 🛠️ ProdutosService

O `ProdutosService` será responsável por armazenar e fornecer os produtos.
```

import { Injectable } from "@nestjs/common";

@Injectable() export class ProdutosService { produto = \[ { id: 2, nome: 'arroz namorado', preco: 9.99 }, { id: 3, nome: 'Macarrão', preco: 3.99 }, { id: 4, nome: 'açúcar', preco: 13.99 }, { id: 1, nome: 'sal', preco: 12.99 }, \];

listarProdutos() { return this.produto; } }

```

## `@Injectable()`

O decorator `@Injectable()` informa ao NestJS que a classe pode ser gerenciada pelo sistema de **injeção de dependências**.
```

@Injectable() export class ProdutosService {

```

Isso permite que o `ProdutosService` seja utilizado dentro do Controller.

---

## 📋 Lista de produtos

Nesta aula, os produtos são armazenados diretamente em um array:
```

produto = \[ { id: 2, nome: 'arroz namorado', preco: 9.99 }, { id: 3, nome: 'Macarrão', preco: 3.99 }, { id: 4, nome: 'açúcar', preco: 13.99 }, { id: 1, nome: 'sal', preco: 12.99 }, \];

```

> **Observação:** os dados estão armazenados em memória. Em uma aplicação real, normalmente os produtos seriam armazenados em um banco de dados.

---

## 📄 Método `listarProdutos()`

O método abaixo retorna todos os produtos:
```

listarProdutos() { return this.produto; }

```

---

# 🎮 ProdutosController

O Controller será responsável por receber as requisições HTTP e retornar as respostas.
```

import { Controller, Get, Param, BadRequestException, NotFoundException, Logger } from "@nestjs/common";

import { ProdutosService } from "./produtos.service.js";

@Controller('produtos') export class ProdutosController {

private readonly logger = new Logger(ProdutosController.name);

constructor( private readonly produtosService: ProdutosService ) { }

produtos() { return this.produtosService.listarProdutos(); }

@Get(':id') buscarProduto(@Param('id') idproduto: string) {

const id = Number(idproduto);

if (isNaN(id)) {

this.logger.warn( `Tentativa de buscar com ID ${idproduto} não numérico.` );

throw new BadRequestException( 'O ID do produto deve ser um número inteiro.' ); }

const produto = this.produtos() .find((produto) =\> produto.id === id);

if (!produto) {

this.logger.warn( `Produto com ID ${id} não localizado.` );

throw new NotFoundException( `Produto com ID ${id} não encontrado.` ); }

return produto; } }

```

---

# 🛣️ Rota `/produtos`

O decorator:
```

@Controller('produtos')

```

define o prefixo das rotas desse Controller.

Por exemplo:
```

GET /produtos GET /produtos/1 GET /produtos/2 GET /produtos/3

```

---

# 💉 Injeção de dependência

O `ProdutosService` é recebido pelo Controller através do construtor:
```

constructor( private readonly produtosService: ProdutosService ) { }

```

O NestJS identifica que o `ProdutosService` é um provider e realiza a injeção automaticamente.

Depois podemos utilizar:
```

this.produtosService

```

para acessar os métodos do Service.

---

# 📋 Listando todos os produtos

O método:
```

produtos() { return this.produtosService.listarProdutos(); }

```

utiliza o Service para retornar a lista de produtos.

A requisição será:
```

GET /produtos

```

### Resposta
```

\[ { "id": 2, "nome": "arroz namorado", "preco": 9.99 }, { "id": 3, "nome": "Macarrão", "preco": 3.99 }, { "id": 4, "nome": "açúcar", "preco": 13.99 }, { "id": 1, "nome": "sal", "preco": 12.99 } \]

```

---

# 🔎 Buscando um produto pelo ID

Para buscar um produto específico, utilizamos:
```

@Get(':id')

```

Isso cria uma rota dinâmica:
```

GET /produtos/:id

```

Por exemplo:
```

GET /produtos/1

```

---

## `@Param()`

Para receber o ID enviado pela URL, utilizamos:
```

@Param('id') idproduto: string

```

O valor recebido inicialmente será uma `string`.

Por exemplo:
```

GET /produtos/1

idproduto = "1"

```

Por isso realizamos a conversão:
```

const id = Number(idproduto);

```

Agora:
```

"1" → 1 "2" → 2 "3" → 3

```

---

# 🔍 Procurando o produto

Depois de converter o ID, utilizamos o método `.find()`:
```

const produto = this.produtos() .find((produto) =\> produto.id === id);

```

O `.find()` percorre o array procurando um produto cujo `id` seja igual ao ID informado.

Por exemplo:
```

GET /produtos/1

```

A aplicação procura:
```

produto.id === 1

```

E encontra:
```

{ "id": 1, "nome": "sal", "preco": 12.99 }

```

---

# ⚠️ Tratamento de erros

Nesta aula também aprendemos a trabalhar com exceções HTTP.

---

## ❌ `BadRequestException`

Primeiro verificamos se o ID informado é numérico:
```

if (isNaN(id)) { throw new BadRequestException( 'O ID do produto deve ser um número inteiro.' ); }

```

Se o usuário fizer:
```

GET /produtos/abc

```

O valor:
```

abc

```

não pode ser convertido para um número válido.

Nesse caso, a API retorna:
```

400 Bad Request

```

### Resposta
```

{ "statusCode": 400, "message": "O ID do produto deve ser um número inteiro.", "error": "Bad Request" }

```

---

# ❌ `NotFoundException`

Depois de validar o ID, procuramos o produto:
```

const produto = this.produtos() .find((produto) =\> produto.id === id);

```

Caso nenhum produto seja encontrado:
```

if (!produto) { throw new NotFoundException( `Produto com ID ${id} não encontrado.` ); }

```

Por exemplo:
```

GET /produtos/99

```

Como não existe um produto com ID `99`, a API retorna:
```

404 Not Found

```

### Resposta
```

{ "statusCode": 404, "message": "Produto com ID 99 não encontrado.", "error": "Not Found" }

```

---

# 📝 Logger

Também utilizamos o `Logger` do NestJS:
```

private readonly logger = new Logger(ProdutosController.name);

```

O `Logger` permite registrar informações importantes durante a execução da aplicação.

Por exemplo:
```

this.logger.warn( `Tentativa de buscar com ID ${idproduto} não numérico.` );

```

Ou:
```

this.logger.warn( `Produto com ID ${id} não localizado.` );

```

Isso ajuda a identificar problemas e acompanhar o comportamento da aplicação.

---

# 🧪 Testando a API

## 1. Buscar todos os produtos
```

GET /produtos

```

Retorna todos os produtos cadastrados.

---

## 2. Buscar um produto existente
```

GET /produtos/1

```

### Resposta
```

{ "id": 1, "nome": "sal", "preco": 12.99 }

```

---

## 3. Buscar um produto inexistente
```

GET /produtos/99

```

### Resposta
```

{ "statusCode": 404, "message": "Produto com ID 99 não encontrado.", "error": "Not Found" }

```

---

## 4. Informar um ID inválido
```

GET /produtos/abc

```

### Resposta
```

{ "statusCode": 400, "message": "O ID do produto deve ser um número inteiro.", "error": "Bad Request" }

```

---

# 🔄 Fluxo da aplicação

O funcionamento da API pode ser representado da seguinte forma:
```

CLIENTE │ │ GET /produtos/1 ▼ ┌──────────────┐ │ CONTROLLER │ └──────┬───────┘ │ │ recebe o ID ▼ ┌──────────────┐ │ VALIDAÇÃO │ └──────┬───────┘ │ ┌────────┴────────┐ │ │ ID inválido ID válido │ │ ▼ ▼ 400 Bad Request ProdutosService │ ▼ Procura produto │ ┌────────┴────────┐ │ │ Encontrado Não encontrado │ │ ▼ ▼ Retorna produto 404 Not Found

```

---

# 🎯 O que aprendemos?

Nesta aula aprendemos como:

- Criar um `Service` utilizando `@Injectable()`.
- Criar um `Controller` utilizando `@Controller()`.
- Criar endpoints com `@Get()`.
- Utilizar **injeção de dependência**.
- Receber parâmetros utilizando `@Param()`.
- Converter `string` para `number`.
- Validar parâmetros recebidos pela API.
- Utilizar `BadRequestException`.
- Utilizar `NotFoundException`.
- Utilizar o `Logger`.
- Procurar elementos de um array com `.find()`.
- Separar responsabilidades entre **Controller** e **Service**.

---

# 📚 Resumo

A principal ideia da aula é entender a separação de responsabilidades dentro do NestJS:
```

Controller │ │ recebe requisições ▼ Service │ │ trabalha com os dados ▼ Resposta

```

O **Controller** fica responsável pelas requisições HTTP, parâmetros e respostas.

O **Service** fica responsável pela lógica relacionada aos produtos.

Essa separação deixa o código mais **organizado, reutilizável e fácil de manter**.

---

## 🚀 Próximos passos

Depois dessa aula, alguns conceitos interessantes para continuar são:

- Criar `POST` para cadastrar produtos.
- Criar `PUT` para atualizar produtos.
- Criar `DELETE` para excluir produtos.
- Criar DTOs.
- Utilizar `ValidationPipe`.
- Criar entidades.
- Conectar a API a um banco de dados.
- Utilizar TypeORM ou Prisma.
```