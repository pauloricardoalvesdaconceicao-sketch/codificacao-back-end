
# Aula 17 — Documentação Técnica com Swagger e NestJS

## Objetivo

Aprender a documentar uma API desenvolvida com NestJS utilizando o Swagger, facilitando a visualização dos endpoints e a integração com outras aplicações.

## Conteúdo abordado

- Introdução à documentação de APIs.
- Configuração do Swagger em uma aplicação NestJS.
- Utilização do `DocumentBuilder` para configurar a documentação.
- Criação de tags para organizar os endpoints.
- Utilização de decorators para documentar rotas e respostas.
- Documentação de dados com DTOs.
- Cadastro de produtos por meio de requisições HTTP POST.
- Configuração de autenticação Bearer na documentação.

## Tecnologias e ferramentas

- **Node.js:** ambiente de execução JavaScript.
- **TypeScript:** linguagem utilizada no desenvolvimento.
- **NestJS:** framework para desenvolvimento de aplicações back-end.
- **Swagger:** ferramenta para documentação e teste de APIs.
- **NPM:** gerenciador de pacotes.
- **Git e GitHub:** ferramentas para versionamento e armazenamento do código.

## Estrutura do projeto

```text
aula17-documento-tecnica-com-swagger-nestjs/
├── src/
│   ├── produtos/
│   │   ├── dto/
│   │   │   └── criar.produto.dto.ts
│   │   └── produtos.controller.ts
│   ├── app.controller.spec.ts
│   ├── app.module.ts
│   └── main.ts
├── package.json
└── README.md
```

## Endpoint implementado

### Cadastrar produto

**Método:** `POST`

**Rota:** `/produtos`

Esse endpoint recebe os dados de um produto e retorna uma resposta com um identificador, os dados enviados e a data de criação.

### Exemplo de requisição

```json
{
  "nome": "Café Grão de Ouro 500g",
  "preco": 9.99,
  "categoria": "Alimentos"
}
```

### Exemplo de resposta

```json
{
  "id": 67,
  "nome": "Café Grão de Ouro 500g",
  "preco": 9.99,
  "categoria": "Alimentos",
  "criadoEm": "16/10/2026"
}
```

*Observação: o identificador é fixo no código apresentado, e a data retornada depende do dia em que a requisição for executada.*

## Documentação com Swagger

A documentação é configurada no arquivo `main.ts`, utilizando o `DocumentBuilder` e o `SwaggerModule`.

Após iniciar a aplicação, acesse:

```text
http://localhost:3000/docs
```

Nessa página, é possível visualizar a documentação da API, consultar o endpoint de produtos e conferir as respostas documentadas.

## Respostas documentadas

- **201 — Created:** produto cadastrado com sucesso.
- **400 — Bad Request:** requisição com dados malformados ou inválidos.

*Observação: as respostas estão documentadas no Swagger. A validação efetiva dos dados não foi demonstrada no código enviado.*

## Resultado esperado

Compreender como configurar o Swagger em uma aplicação NestJS, documentar endpoints e DTOs e disponibilizar uma interface para consultar e testar as operações da API.

## Autor

Paulo Ricardo Alves da Conceição

**Curso:** Qualificação Profissional em Programador Full Stack — SENAI / Petrobras.
