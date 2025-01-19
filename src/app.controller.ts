import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  // ** 데코레이터 패던 - 함수에 기능을 첨가하여 재사용성을 늘림.
  //  @Get() == @Get('/')

  // ** localhost:8000/cats/hello
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
