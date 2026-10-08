import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutosService {
    produto = [
        {id: 2, nome: 'arroz namorado', preco: 9.99},
         {id: 3, nome: 'Macarrão', preco: 3.99},
          {id: 4, nome: 'açúcar', preco: 13.99},
           {id: 1, nome: 'sal', preco: 12.99},
    ];
    listarProdutos(){
        return this.produto;
    }
    
}