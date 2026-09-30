import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { start } from 'repl';

@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
