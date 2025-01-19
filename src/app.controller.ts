import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ** 데코레이터 패던 - 함수에 기능을 첨가하여 재사용성을 늘림.
  //  @Get() == @Get('/')

  // ** localhost:8000/cats/hello
  @Get('hello/:id/:name')
  getHello(
    // ** Nest JS 에서는 바디를 인자에서 받아올 수 있다.
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string; name: string },
  ): string {
    // ** express에서 router/service를 분기했던 것처럼, 유지보수/가독성/디자인패턴에 맞게 모듈화하기 위해 비즈니스 로직은 service 단에서 처리한다.
    // console.log(req);
    // console.log(param);
    return this.appService.getHello();
  }
}
