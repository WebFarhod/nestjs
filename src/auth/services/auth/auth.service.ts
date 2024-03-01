import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/services/user/user.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUserName(username);
    if (userDB) {
      const matched = comparePassword(password, userDB.password);
      if (matched) {
        console.log('userDB success');
        return userDB;
      }
      console.log('Password do not match');
      return null;
    }
    console.log('userDB failed');
    return null;
  }
}
