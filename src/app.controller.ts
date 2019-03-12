import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return { info: 'Welcome to odpisze-potem-back api' };
  }
}
