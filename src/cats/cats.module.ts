import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { UsersModule } from 'src/users/users.module';

// module의 provider
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // *** 해당 module 에서 export 해줘야만 app.controller에서 cats.service를 사용할 수 있다.
  // - provider로서 CatsService를 만들어서 원래는 캡슐화되어있는 상태이기에 다른 모듈에서는 접근 불가능한 상태이나 exports 를 통해 다른 모듈에서도 접근 가능하도록 설정 
  exports: [CatsService],
})
export class CatsModule {}
