import { registerAs } from "@nestjs/config";

export default registerAs('auth', () => ({
    jwtSecret: process.env.JWT_SECRET || 'Chave_secreta_padrao',
    jwtExpiresIn: process.env.jwtExpiresIn || '1d',
}));

