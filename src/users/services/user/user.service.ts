import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UserService {
  user: User[] = [
    {
      id: 1,
      username: 'Farhod',
      password: 'farhod',
    },
    {
      id: 2,
      username: 'Farrux',
      password: 'farrux',
    },
    {
      id: 3,
      username: 'Muhammad yusuf',
      password: 'password1',
    },
    {
      id: 4,
      username: 'Suxrob',
      password: 'suxrob',
    },
  ];

  getUsers() {
    return this.user.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.user.find((user) => user.username == username);
  }

  getUserById(id: number) {
    return this.user.find((user) => user.id === id);
  }
}
