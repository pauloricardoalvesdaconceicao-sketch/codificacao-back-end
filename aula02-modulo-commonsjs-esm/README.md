Sistema de Logs com Node.js

Este projeto foi desenvolvido para praticar o uso de módulos ES Modules (ESM) no Node.js, além da manipulação de arquivos e diretórios utilizando o módulo nativo fs/promises.

O que foi desenvolvido

Foi criado um sistema simples para registrar mensagens de log em um arquivo automaticamente.

O projeto possui duas partes principais:

Arquivo principal: responsável por criar a pasta de logs, registrar as mensagens e salvar os registros em um arquivo.
Módulo utilitário: responsável por formatar as mensagens adicionando a data e o horário em que o log foi gerado.
Funcionalidades
Criação automática da pasta Logs caso ela ainda não exista.
Criação e atualização do arquivo syslog.Logs.
Registro de novas mensagens utilizando fs.appendFile().
Formatação dos logs com data e horário.
Utilização de funções assíncronas com async/await.
Tratamento de erros com try/catch.
Organização do código utilizando módulos separados.
Utilização de import e export através do padrão ES Modules.
Exemplo de funcionamento

Ao executar o projeto, as mensagens:

Inicialização do servidor concluída!
Conexão com o banco de dados estabelecido!


são registradas no arquivo de log com data e horário, seguindo um formato semelhante a:

[2026-09-14 - 20:43:00]: Inicialização do servidor concluída!
[2026-09-14 - 20:43:00]: Conexão com o banco de dados estabelecido!

Tecnologias utilizadas
Node.js
JavaScript
ES Modules (ESM)
fs/promises
path
url
async/await
Estrutura do projeto
projeto/
├── Logs/
│   └── syslog.Logs
├── index.js
├── utilitario.js
└── package.json


O projeto também utiliza "type": "module" no package.json, permitindo trabalhar com a sintaxe import e export do JavaScript.