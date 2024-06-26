import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as UserEntity } from '../../../typeorm';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { SerializedUser, User } from 'src/users/types/User';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  private user: User[] = [];

  getUsers() {
    return this.user.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.user.find((user) => user.username == username);
  }

  getUserById(id: number) {
    return this.user.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    console.log('password', password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }

  findUserByUserName(username: string) {
    return this.userRepository.findOneBy({ username });
  }
  // findUserByUsername(username: string) {
  //   return this.userRepository.findOne({ username });
  // }

  findUserById(id: number) {
    return this.userRepository.findOneBy({ id });
  }
}
