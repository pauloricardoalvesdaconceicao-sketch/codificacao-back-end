Aula 05 — Variáveis de Ambiente, Configurações e Segurança
📚 Objetivo

Nesta aula foi desenvolvido um exemplo de aplicação Node.js utilizando variáveis de ambiente para armazenar configurações da aplicação de forma mais segura e flexível.

Foram utilizados:

dotenv para carregar variáveis do arquivo .env;

process.env para acessar as variáveis de ambiente;

.env para armazenar configurações sensíveis e específicas do ambiente;

.gitignore para impedir que arquivos sensíveis e dependências sejam enviados ao Git.

📦 Instalação

Foi utilizado o pacote dotenv:

npm install dotenv

⚙️ Configuração das variáveis de ambiente

Foi criado um arquivo .env contendo as configurações da aplicação:

PORT=3000
API_KEY_PAGAMENTO=sua_chave_api_aqui
DATABASE_URL=mongodb://localhost:27017/meu_banco

Variáveis utilizadas
Variável	Descrição
PORT	Define a porta em que a aplicação será executada.
API_KEY_PAGAMENTO	Armazena a chave de acesso utilizada pelo serviço de pagamento.
DATABASE_URL	Armazena a URL de conexão com o banco de dados.

⚠️ O arquivo .env não deve ser enviado para o repositório, pois pode conter informações sensíveis, como senhas, tokens e chaves de API.

💻 Código da aplicação

O arquivo app.js utiliza o pacote dotenv para carregar as variáveis definidas no .env.

import dotenv from 'dotenv';

dotenv.config();

function iniciarAplicacao() {

    const porta = process.env.PORT || 8080;

    const apiKey = process.env.API_KEY_PAGAMENTO;

    const dbUrl = process.env.DATABASE_URL;

    if (!apiKey) {
        console.error(
            `[ERRO CRÍTICO]: a chave API_KEY_PAGAMENTO não está definida nas variáveis de ambiente!`
        );

        process.exit(1);
    }

    console.log('=== ||| SERVIÇO DE CONFIGURAÇÃO CARREGADO ||| ===');

    console.log(`Serviço rodando na porta ${porta}`);

    console.log(`Banco de Dados: ${dbUrl}`);

    console.log(`APIKey: ${apiKey}`);

    console.log(
        `Status da API: Chave de tamanho ${apiKey.length} autenticada.`
    );
}

iniciarAplicacao();

🔐 Carregamento das configurações

O comando:

dotenv.config();


carrega as informações presentes no arquivo .env para as variáveis de ambiente disponíveis através de:

process.env


Por exemplo:

const porta = process.env.PORT || 8080;


Nesse caso, a aplicação tenta utilizar a variável PORT. Caso ela não esteja definida, utiliza a porta 8080 como valor padrão.

🚨 Validação da API Key

A aplicação verifica se a variável API_KEY_PAGAMENTO foi configurada:

if (!apiKey) {
    console.error(
        '[ERRO CRÍTICO]: a chave API_KEY_PAGAMENTO não está definida nas variáveis de ambiente!'
    );

    process.exit(1);
}


Caso a chave não exista, a aplicação exibe uma mensagem de erro e encerra sua execução.

Essa validação evita que a aplicação continue funcionando sem uma configuração obrigatória.

🛡️ Proteção com .gitignore

Foi criado um arquivo .gitignore para evitar o envio de arquivos que não devem fazer parte do repositório:

.env
node_modules/
*.log

.env

Impede que as variáveis de ambiente e possíveis informações sensíveis sejam enviadas para o Git.

node_modules/

Impede que as dependências instaladas pelo npm sejam versionadas no Git.

*.log

Impede que arquivos de log sejam enviados para o repositório.

▶️ Executando o projeto

Após instalar as dependências:

npm install


a aplicação pode ser executada com:

node app.js


Se o .env estiver configurado corretamente, a aplicação exibirá informações semelhantes a:

=== ||| SERVIÇO DE CONFIGURAÇÃO CARREGADO ||| ===
Serviço rodando na porta 3000
Banco de Dados: mongodb://localhost:27017/meu_banco
Status da API: Chave de tamanho XX autenticada.

🔒 Boas práticas de segurança

Durante o desenvolvimento, é importante:

Não enviar o arquivo .env para o GitHub.

Não colocar API Keys reais no código-fonte.

Não colocar senhas no README.md.

Não compartilhar tokens e credenciais em commits.

Utilizar variáveis de ambiente para configurações sensíveis.

Utilizar valores fictícios em exemplos e documentação.

⚠️ Caso uma chave real tenha sido publicada acidentalmente em um repositório, ela deve ser considerada comprometida e substituída/revogada pelo serviço responsável.

📝 Conteúdos praticados

Nesta aula foram praticados conceitos de:

Variáveis de ambiente;

Arquivo .env;

dotenv;

process.env;

Configuração de portas;

Configuração de banco de dados;

Armazenamento de API Keys;

Validação de configurações obrigatórias;

Encerramento da aplicação com process.exit(1);

.gitignore;

Boas práticas de segurança no desenvolvimento Node.js.