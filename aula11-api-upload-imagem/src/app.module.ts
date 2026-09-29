import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { imagemController } from './imagem.controller.js';

@Module({
  imports: [],
  controllers: [AppController, imagemController],
  providers: [AppService],
})
export class AppModule {}