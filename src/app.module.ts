import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { CatsService } from './cats/cats.service';

// ** Nest JS 에서는 의존성을 명료하게 함으로써 공급자-소비자 역할을 확실히 정의하고 있음.
@Module({
  // ** 모듈을 연결(가져오는)하는 것
  // - 모듈에서 만든 공급자들은 여기서 퍼블릭으로 만들어 사용할 수 있도록 하는 것이 좋은 구조 (각 모듈의 exports 영역에 추가)
  imports: [CatsModule, UsersModule],
  controllers: [AppController],
  // - 자체적으로 만든 공급자는 해당 영역에 넣어주는 것이 좋음. (중요)
  providers: [AppService],
})
export class AppModule {}
