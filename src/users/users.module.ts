import { Module } from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
  ],
})
export class UsersModule {}
