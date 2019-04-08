import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersProviders } from './entities/users.providers';
import { UserService } from './users.service';
import { UserController } from './users.controller';
@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...UsersProviders],
  controllers: [UserController],
  exports: [],
})
export class UsersModule implements NestModule {
  // tslint:disable-next-line:no-empty
  configure(consumer: MiddlewareConsumer): void {}
}
