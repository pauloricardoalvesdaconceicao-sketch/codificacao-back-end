import fs from 'fs';

const data = new Date().toISOString().split('T')[0];
const hora = new Date().toLocaleTimeString();

const streamEscrita = fs.createWriteStream('Servidor.log')
console.log('gerando arquivo de log simulando...');

for(let i = 0; i < 400000; i++){
    const tipo = i % 7 === 0 ? 'ERRO' : 'INFO';
    streamEscrita.write(`[${data} - ${hora}] linha ${i}: status 200 - Mensagem de teste ${tipo} \n`);
}
streamEscrita.end();