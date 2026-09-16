import  fs  from 'fs';
import  readline  from 'readline';


async function filtrarErros(){
console.log('Iniciando porcessando com stream...');
exibirConsumoMemoria('Inicio')

    const streamLeitura = fs.createReadStream('servidor.log');
    const streamEscrita = fs.createWriteStream('apenas_erros.log');
    const leitorLinhaALinha = readline.createInterface({input: streamLeitura, crlfDelay: Infinity});

    let totalErros = 0;
    for await (const linha of leitorLinhaALinha){
        if(linha.includes('ERRO')){
            streamEscrita.write(linha + '\n');
            totalErros++;
        }
    }

    exibirConsumoMemoria('Fim');
    console.log(`Processamento concluído`)
    console.log(`Quantidade de erros encontrados: ${totalErros} linha.\n` )

    
}
filtrarErros();

function exibirConsumoMemoria(consumo){
    const memoria = process.memoryUsage();
    const rssMB = (memoria.rss / 1024 / 1024).toFixed(2);
    const heapMB = (memoria.heapUsed / 1024/ 1024).toFixed(2);
    console.log(`[${consumo}] RSS: ${rssMB} MB | Heap Utilizado: ${heapMB} MB`);

}