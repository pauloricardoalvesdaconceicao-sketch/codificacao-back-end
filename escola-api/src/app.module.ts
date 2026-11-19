import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { AlunosModule } from './alunos/schemas/alunos.module.js';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import { inject } from 'vitest';
import { config } from 'process';



@Module({
  imports: [
    AlunosModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
        .valid('development' , 'production','test' )
        .default('development'),
        PORT: Joi.number().default(3000),
        DATABASE_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
  MongooseModule.forRootAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory:(ConfigService: ConfigService) => ({
      uri: ConfigService.get<string>('DATABASE_URI'),
    }),
  }),
  ],
  
  
})
export class AppModule {}
