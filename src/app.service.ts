import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // ** 해당 영역에 비즈니스 서비스 코드를 작성
    console.log('hello world !!!');
    return 'Hello World!';
  }
}