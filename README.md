# 💻 Codificação para Back-End

Repositório destinado às atividades, exercícios e projetos desenvolvidos durante a unidade curricular de **Codificação para Back-End**.

## 🎯 Objetivos

A unidade curricular tem como objetivo desenvolver conhecimentos e habilidades para a criação de aplicações Back-End.

Durante o curso, serão estudados conceitos de programação no lado do servidor, criação de aplicações, desenvolvimento de APIs, gerenciamento de pacotes e utilização de ferramentas de versionamento.

Ao final da unidade curricular, espera-se que o estudante seja capaz de desenvolver aplicações Back-End utilizando **JavaScript, Node.js e Express**, aplicando boas práticas de desenvolvimento.

## 📚 Conteúdo

Os principais conteúdos abordados durante a unidade curricular são:

* Fundamentos do desenvolvimento Back-End;
* JavaScript;
* Node.js;
* NPM;
* Express;
* Criação de servidores;
* Desenvolvimento de APIs;
* Rotas e requisições HTTP;
* Manipulação de dados;
* Estruturação de aplicações Back-End;
* Gerenciamento de dependências;
* Controle de versão com Git e GitHub.

## 🚀 Tecnologias

### JavaScript

Linguagem de programação utilizada para desenvolver a lógica das aplicações Back-End.

🔗 [Documentação do JavaScript — MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

### Node.js

Ambiente de execução que permite utilizar JavaScript no lado do servidor.

🔗 [Site oficial do Node.js](https://nodejs.org/)

### Express

Framework para Node.js utilizado na criação de servidores, rotas e APIs.

🔗 [Site oficial do Express](https://expressjs.com/)

## 🛠️ Ferramentas

### Git e GitHub

O **Git** é utilizado para controle de versão, permitindo registrar e acompanhar as alterações realizadas nos projetos.

O **GitHub** é utilizado para hospedar os repositórios e armazenar os projetos remotamente.

* 🔗 [Site oficial do Git](https://git-scm.com/)
* 🔗 [Site oficial do GitHub](https://github.com/)

### NPM

O **NPM (Node Package Manager)** é o gerenciador de pacotes utilizado no ecossistema Node.js. Ele permite instalar, atualizar e gerenciar dependências utilizadas nos projetos.

🔗 [Site oficial do NPM](https://www.npmjs.com/)

### Node.js

O Node.js também será utilizado como ferramenta de desenvolvimento para executar aplicações JavaScript no ambiente Back-End.

🔗 [Site oficial do Node.js](https://nodejs.org/)

### Express

O Express será utilizado como framework para facilitar o desenvolvimento de servidores e APIs utilizando Node.js.

🔗 [Site oficial do Express](https://expressjs.com/)

## 📌 Status

🚧 **Em desenvolvimento**

Este repositório será atualizado conforme o desenvolvimento das atividades e projetos da unidade curricular.

## 👨‍💻 Autor

**Paulo Ricardo**

Projeto desenvolvido para fins acadêmicos na unidade curricular de **Codificação para Back-End**.

## ⌨️ Comandos

### 📦 NPM

Instalar as dependências do projeto:

```bash
npm install
```

Inicializar um novo projeto Node.js:

```bash
npm init -y
```

Instalar o Express:

```bash
npm install express
```

Instalar uma dependência como dependência de desenvolvimento:

```bash
npm install --save-dev nome-do-pacote
```

Executar o projeto:

```bash
npm start
```

### 🟢 Node.js

Verificar a versão instalada do Node.js:

```bash
node -v
```

Executar um arquivo JavaScript:

```bash
node app.js
```

Verificar a versão do NPM:

```bash
npm -v
```

### 🌐 Express

Exemplo de execução de um servidor Express:

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});
```

Após iniciar o servidor, ele poderá ser acessado em:

```text
http://localhost:3000
```

### 🔄 Git

Inicializar o Git no projeto:

```bash
git init
```

Verificar o estado dos arquivos:

```bash
git status
```

Adicionar arquivos ao staging:

```bash
git add .
```

Criar um commit:

```bash
git commit -m "mensagem do commit"
```

Adicionar o repositório remoto:

```bash
git remote add origin URL_DO_REPOSITORIO
```

Enviar os arquivos para o GitHub:

```bash
git push -u origin main
```

Baixar alterações do GitHub:

```bash
git pull
```

### 📚 Fluxo básico de versionamento

```bash
git status
git add .
git commit -m "mensagem do commit"
git push
```

Esse fluxo será utilizado para registrar e enviar as alterações realizadas no projeto para o repositório remoto no GitHub.
