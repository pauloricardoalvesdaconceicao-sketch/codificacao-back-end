
# Project Title

A brief description of what this project does and who it's for

## Aula 03 — Streams e Buffers

Nesta aula foram estudados os conceitos de **Streams** no Node.js para trabalhar com arquivos grandes de forma mais eficiente, realizando a leitura e escrita dos dados em fluxo.

### Atividades realizadas

#### 1. Geração de arquivo de log

Foi desenvolvido um script chamado `gerarLogGigante.js` para simular um arquivo de log grande.

O script utiliza `fs.createWriteStream()` para criar e escrever no arquivo `Servidor.log`.

Foram geradas **400.000 linhas**, contendo registros dos tipos `INFO` e `ERRO`, simulando mensagens de um servidor.

#### 2. Processamento dos logs

Foi desenvolvido o script `processarLogs.js` para processar o arquivo `Servidor.log`.

O arquivo é lido utilizando `fs.createReadStream()` e o módulo `readline`, permitindo processar o conteúdo linha por linha.

Durante o processamento:

* As linhas que contêm `ERRO` são identificadas;
* Os erros encontrados são gravados no arquivo `apenas_erros.log`;
* É contabilizada a quantidade total de erros encontrados;
* É exibido o consumo de memória no início e no final do processamento.

### Arquivos desenvolvidos

* `gerarLogGigante.js` — gera um arquivo `Servidor.log` com 400.000 registros simulados.
* `processarLogs.js` — lê e processa o arquivo de log, filtrando os registros que contêm `ERRO`.
* `Servidor.log` — arquivo de log gerado pelo script.
* `apenas_erros.log` — arquivo contendo somente os registros identificados como `ERRO`.

### Tecnologias e recursos utilizados

* Node.js
* JavaScript
* Módulo `fs`
* Módulo `readline`
* `createReadStream()`
* `createWriteStream()`
* Streams
* Processamento de arquivos linha por linha
* `process.memoryUsage()`

### Objetivo

Praticar o uso de **Streams no Node.js** para gerar, ler e processar arquivos grandes de maneira eficiente, além de observar o consumo de memória durante o processamento.
