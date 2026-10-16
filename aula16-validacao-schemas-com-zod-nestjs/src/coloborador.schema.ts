import { z } from "zod";

export const colaboradorSchema = z.object({
    nome: z.string().min(3, {message: 'O nome deve ter no mínimo 3 letras!'}),
    email: z.email({message: 'O email deve ser valido!'}),
    idade: z.number({message: 'a idade deve ser ter um numero valido'})
    .min(18, {message: 'a idade deve ser igual ou maor que 18 anos!'})
    .max(65, {message: 'a idade máxima permitida é 65 anos'}),
    departamento: z.enum(['IT' , 'RH' , 'Comercial' , 'financeiro'],{
        error: () => (
            {
                message: 'departamento dev ser obrigatorio TI, RH, Comercial ou financeiro'}),
    }),
    
});
export type Colaborador = z.infer<typeof colaboradorSchema>;