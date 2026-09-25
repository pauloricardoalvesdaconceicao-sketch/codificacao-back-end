Aula 10 — Rotas Dinâmicas com NestJS

Projeto desenvolvido durante o curso de desenvolvimento Back-End com NestJS, com o objetivo de praticar a criação de rotas dinâmicas, parâmetros de URL, validação e injeção de dependências.

📚 Sobre o projeto

Nesta aula foi desenvolvida uma API simples para consulta de jogos utilizando NestJS.

A aplicação permite buscar um jogo pelo seu ID através de uma rota dinâmica:

GET /jogos/:id


O projeto também demonstra como utilizar:

Controllers

Services

Injeção de dependências

Rotas dinâmicas

@Param()

ParseIntPipe

NotFoundException

HTTP Status 404

Organização básica de uma API NestJS

🛠️ Tecnologias utilizadas

Node.js

NestJS

TypeScript

npm

Git

📁 Estrutura do projeto
aula10-rotas-dinamicas/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── jogos.controller.ts
│   ├── jogos.service.ts
│   └── main.ts
├── package.json
├── tsconfig.json
└── README.md

🎮 Dados disponíveis

A API possui alguns jogos cadastrados em memória:

ID	Jogo	Estúdio
1	Minecraft	Mojang Studios
2	The Legend of Zelda: Ocarina of Time	Nintendo
3	Grand Theft Auto V	Rockstar North
4	Elden Ring	FromSoftware
5	God of War	Santa Monica Studios
🚀 Como executar o projeto

Clone o repositório:

git clone <URL_DO_REPOSITORIO>


Entre na pasta do projeto:

cd aula10-rotas-dinamicas


Instale as dependências:

npm install


Inicie o projeto em modo de desenvolvimento:

npm run start:dev


Por padrão, a aplicação estará disponível em:

http://localhost:3000

🔎 Testando a rota dinâmica

Para buscar o jogo de ID 1:

GET http://localhost:3000/jogos/1


Resposta:

{
  "id": 1,
  "titulo": "Minecraft",
  "estudio": "Mojang Studios"
}


Outro exemplo:

GET http://localhost:3000/jogos/4


Resposta:

{
  "id": 4,
  "titulo": "Elden Ring",
  "estudio": "FromSoftware"
}

❌ Jogo não encontrado

Quando um ID que não existe é informado, o serviço lança uma NotFoundException.

Exemplo:

GET http://localhost:3000/jogos/99


A API retorna:

{
  "statusCode": 404,
  "message": "Jogo com ID 99 não localizado em nosso estoque",
  "error": "Not Found"
}

🧩 Rota dinâmica

A rota principal da aplicação é definida no controller:

@Get(':id')
buscarPorId(@Param('id', ParseIntPipe) id: number) {
  return this.jogosService.buscarPorId(id);
}


O trecho:

:id


representa um parâmetro dinâmico da URL.

Por exemplo:

/jogos/1
/jogos/2
/jogos/3


O valor é capturado através de:

@Param('id', ParseIntPipe)


O ParseIntPipe converte o valor recebido na URL para um número inteiro.

⚙️ Service

A lógica de busca dos jogos fica no JogosService.

buscarPorId(id: number) {
  const jogo = this.jogos.find((j) => j.id === id);

  if (!jogo) {
    throw new NotFoundException(
      `Jogo com ID ${id} não localizado em nosso estoque`,
    );
  }

  return jogo;
}


Essa separação permite manter a responsabilidade de cada parte da aplicação organizada:

Controller: recebe as requisições HTTP.

Service: executa a lógica da aplicação.

Module: organiza os componentes e suas dependências.

📌 Conceitos praticados

Durante esta aula foram praticados conceitos importantes do NestJS:

Criação de Controllers.

Criação de Services.

Injeção de dependências.

Rotas dinâmicas.

Parâmetros de rota.

ParseIntPipe.

Tratamento de recursos não encontrados.

NotFoundException.

Organização de módulos.

Execução da aplicação em modo de desenvolvimento.

👨‍💻 Autor

Paulo Conceição

Projeto desenvolvido para fins de estudo durante o curso de desenvolvimento Back-End com NestJS.