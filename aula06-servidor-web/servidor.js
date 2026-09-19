
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