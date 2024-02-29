import { Module } from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { UserService } from './services/user/user.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
  ],
})
export class UsersModule {}
