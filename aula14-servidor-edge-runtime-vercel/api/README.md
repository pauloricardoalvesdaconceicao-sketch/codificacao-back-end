# Aula 14 - Servidor Edge Runtime com Vercel

Projeto desenvolvido durante a aula sobre criação de uma API utilizando o **Vercel Edge Runtime**.

## 📚 Objetivo

Criar uma função executada no Edge Runtime da Vercel, retornando informações sobre a execução da função, como:

- Mensagem de execução;
- Horário do servidor;
- Região de execução;
- Tempo de execução da função.

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- Vercel
- Vercel CLI
- Edge Runtime
- Thunder Client

## 📁 Estrutura do projeto

```text
aula14-servidor-edge-runtime-vercel/
│
├── api/
│   └── hora-servidor.ts
│
├── README.md
└── ...
```

## ⚙️ Funcionamento

A função está localizada no arquivo:

```text
api/hora-servidor.ts
```

O Edge Runtime é configurado através do código:

```typescript
export const config = {
    runtime: 'edge',
};
```

A função retorna uma resposta no formato JSON contendo informações sobre a execução.

## ▶️ Executando o projeto

Para executar o projeto localmente, utilize o comando:

```bash
vercel dev
```

Após iniciar o servidor, ele estará disponível em:

```text
http://localhost:3000
```

## 🔗 Endpoint

O endpoint da aplicação é:

```text
GET /api/hora-servidor
```

Para acessar localmente:

```text
http://localhost:3000/api/hora-servidor
```

## 🧪 Testando com Thunder Client

Foi utilizado o **Thunder Client** para realizar os testes da API.

### Método

```text
GET
```

### URL

```text
http://localhost:3000/api/hora-servidor
```

Não é necessário enviar parâmetros ou corpo na requisição.

### Resposta

A API retorna um objeto JSON semelhante a:

```json
{
    "mensagem": "Função executada na borda de rede",
    "horarioDoServidor": "2026-10-06T23:00:00.000Z",
    "regiao": "local-dev",
    "tempoDeExecucao": "0 ms"
}
```

O valor de `horarioDoServidor` será diferente a cada requisição, pois representa o horário em que a função foi executada.

## 🌐 Edge Runtime

O **Edge Runtime** permite executar funções em uma infraestrutura distribuída, aproximando a execução dos usuários.

Neste projeto, o runtime é definido através de:

```typescript
export const config = {
    runtime: 'edge',
};
```

Durante a execução local, a região é identificada como:

```text
local-dev
```

## 📌 Observação

Ao acessar:

```text
http://localhost:3000/
```

pode ser exibido um erro:

```text
404: NOT_FOUND
```

Isso acontece porque não foi criada uma rota para `/`.

A rota disponível neste projeto é:

```text
http://localhost:3000/api/hora-servidor
```

## 💻 Comandos utilizados

Para iniciar o servidor local:

```bash
vercel dev
```

Para verificar a versão do Vercel CLI:

```bash
vercel --version
```

## 👨‍💻 Projeto

Projeto desenvolvido para fins educacionais durante os estudos de desenvolvimento **Back-end**, utilizando **TypeScript, Vercel e Edge Runtime**.
