import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async save(userDto: UserDto): Promise<UserDto> {
    const savedUser = await this.userRepository.save(userDto);
    return plainToInstance(UserDto, savedUser);
  }
}
