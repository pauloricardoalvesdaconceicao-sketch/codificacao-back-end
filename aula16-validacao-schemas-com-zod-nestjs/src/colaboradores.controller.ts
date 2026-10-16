import { Controller, Post, Body, UsePipes, } from "@nestjs/common";
import { colaboradorSchema } from "./coloborador.schema.js";
import { ZodValidationPipe } from "./zod-validation.pipe.js";
import type { Colaborador } from "./coloborador.schema.js";

@Controller('colaboradores')
export class colaboradoresController {
    @Post()
    @UsePipes(new ZodValidationPipe(colaboradorSchema))
    async create (@Body() body: Colaborador){
        return{
            Mensagem: 'Colaborador cadrastado com sucesso',
            dados: body,
        };
    };
};