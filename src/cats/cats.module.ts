import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { UsersModule } from 'src/users/users.module';

// module의 provider
@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService], // *** 해당 module 에서 export 해줘야만 app.controller에서 cats.service를 사용할 수 있다.
})
export class CatsModule {}
