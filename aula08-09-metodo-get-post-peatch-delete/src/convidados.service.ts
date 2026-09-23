import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class ConvidadosService {
    private convidados = [
        {id: 1, nome: 'rebeca', idade: 18},
        {id: 2, nome: 'Lucas', idade: 21},
        {id: 3, nome: 'Mariana', idade: 25},
        {id: 4, nome: 'Gabriel', idade: 19},
    ];

    listarConvidados(){
        return this.convidados;
    }

    encontrarConvidado(id: number){
        const convidado = this.convidados.find((buscarConvidado) => buscarConvidado.id ===id);
        if(!convidado){
            throw new NotFoundException (`[ADMINISTRADOR] Convidado com ID ${id} não encontrado`);
        } 
        return convidado
    }
    atualizarIdade(id: number, idade: number){
        const convidado = this.encontrarConvidado(id);
        convidado.idade = idade;
        return convidado;

    }
    removerConvidadoLista(id: number){
        const index = this.convidados.findIndex((convidado) => convidado.id === id);
        if( index === -1){
            throw new NotFoundException(`[ADMINISTRADOR] Convidado com ID ${id} não encontrado`);
        }
        this.convidados.splice(index, 1);
    }

}