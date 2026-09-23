import { Controller, Get, Post, Body, Patch, Delete, Param, HttpCode } from '@nestjs/common';
import { CreateConvidadoDto } from './criar.convidado.dto.js';
import { ConvidadosService } from './convidados.service.js';
@Controller('convidados')
export class ConvidadosController {
    constructor(private readonly convidadoService: ConvidadosService){}
// 1. Rota GET /convidados

@Get()

listaConvidado(){
    return this.convidadoService.listarConvidados();
}

listarTodos() {
return ['Ana', 'Bruno', 'Carlos']; // Retorna array serializado em JSON (Status 200)
}
// 2. Rota POST /convidados
@Post()
criar(@Body() createConvidadoDto: CreateConvidadoDto) {
// Exibe no console o nome recebido
console.log(`[PORTEIRO DIGITAL] Novo convidado recebido: ${createConvidadoDto.nome}`);
return {
mensagem: `Convidado ${createConvidadoDto.nome} adicionado com sucesso!`,
dados: createConvidadoDto,
}; // Retorno padrão com Status 201 Created
}
@Patch(':id')
atualizarIdade(@Param('id') id: string, @Body('idade') idade: number){
    console.log(`[ADMINISTRADOR] Atualizando idade do ID ${id}`);
}

@Delete(':id')
@HttpCode(204)
removerConvidado(@Param('id') id:string){
    console.log(`[ADMINISTRADOR] Convidado com ID ${id} removido com sucesso!`);
    this.convidadoService.removerConvidadoLista(+id);
}
}