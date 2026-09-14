import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatLog } from './utilitario.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function salvarlogSistema(mensagemLog) {
    try{
        const pastaLog = path.join(__dirname, 'Logs');
        const arquivoLog = path.join(pastaLog, 'syslog.Logs');
        await fs.mkdir(pastaLog, {recursive:true});
        const registro = formatLog(mensagemLog);
        await fs.appendFile(arquivoLog, registro, 'utf-8');
        console.log('log registrado com sucesso...');

    }catch(erro){
        console.error('erro ao resgistrar log: ',erro);
    }
    
}

salvarlogSistema('Inicialcização do servior concluída!\n');
salvarlogSistema('Conexão com o banco de dados estabelecido!\n');