
Servidor Web — Aula 06
Projeto de servidor HTTP básico com Node.js, desenvolvido na aula de Back-End.
Código (servidor.js)
javascript
Run
import http from 'http';
const servidorWeb = http.createServer((req, res) => {
    console.log(`[LOG] Método Recebido: ${req.method} | rota: ${req.url}`);
    
    const cabecalhoPadrao = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY'
    };
    if (req.url === '/status') {
        res.writeHead(200, {
            ...cabecalhoPadrao,
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ servidorWeb: 'Online' }));
    } else {
        res.writeHead(404, {
            ...cabecalhoPadrao,
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ erro: 'Página não encontrada!' }));
    }
});
servidorWeb.listen(3000, () => {
    console.log(' Servidor Web Ativo');
    console.log(' Rodando em: http://localhost:3000');
    console.log(' Status: http://localhost:3000/status');
});
Como executar
bash
node servidor.js
Rotas
Tabela
Endereço	Resposta
http://localhost:3000/status	{"servidorWeb":"Online"}
Qualquer outro endereço	{"erro":"Página não encontrada!"}
Funcionalidades
✅ Servidor HTTP na porta 3000
✅ Registro de método e rota no terminal
✅ Cabeçalhos de segurança
✅ Respostas em JSON