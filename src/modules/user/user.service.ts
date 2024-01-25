import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { plainToInstance } from 'class-transformer';
import { UserUpdateDto } from './dtos/userUpdate.dto';

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

  async getAll(): Promise<UserDto[]> {
    const users = await this.userRepository.find();
    return users.map((user) => plainToInstance(UserDto, user));
  }

  async getById(id: string): Promise<UserDto> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return plainToInstance(UserDto, user);
  }

  async update(id: string, user: UserUpdateDto): Promise<{ result: string }> {
    const updatedResult = await this.userRepository.update(id, user);
    return { result: updatedResult.affected.toString() };
  }

  async deleteById(id: string): Promise<{ result: string }> {
    const deleteResult = this.userRepository.softDelete(id);
    return { result: (await deleteResult).affected.toString() };
  }
}
