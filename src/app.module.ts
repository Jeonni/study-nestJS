import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';

// ** Nest JS 에서는 의존성을 명료하게 함으로써 공급자-소비자 역할을 확실히 정의하고 있음.
@Module({
  imports: [CatsModule, UsersModule], // 모듈을 연결(가져오는)하는 것
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
