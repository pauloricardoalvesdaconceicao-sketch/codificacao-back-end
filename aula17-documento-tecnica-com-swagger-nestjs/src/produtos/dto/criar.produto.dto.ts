import { ApiProperty } from "@nestjs/swagger";

export class CriarProdutoDto {
    //!nome do produto
     @ApiProperty({
        example:'café Grão de ouro 500g',
        description:'nome comercial do produto cadrastrado.',

     })
     nome:string;

     //!Preço do produto
     @ApiProperty({
        example:9.99,
        description:'Preço unitário do produto',

     })
     preco:number;

     //! genero do produto
       @ApiProperty({
        example:'Alimentos',
        description:'Categoria do produto',

     })
     categoria:string;
}