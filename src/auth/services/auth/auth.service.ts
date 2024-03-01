import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/services/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUserName(username);
    if (userDB && userDB.password === password) {
      console.log('userDB success');
      return userDB;
    }
    console.log('userDB failed');
    return null;
  }
}
