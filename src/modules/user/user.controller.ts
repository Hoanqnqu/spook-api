import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { FormDataRequest } from 'nestjs-form-data';
import { UserUpdateDto } from './dtos/userUpdate.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @FormDataRequest()
  create(@Body() user: UserDto): Promise<UserDto> {
    console.log(user);
    return this.userService.save(user);
  }

  @Get()
  findAll(): Promise<UserDto[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserDto> {
    return this.userService.getById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UserUpdateDto,
  ): Promise<{ result: string }> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ result: string }> {
    return this.userService.deleteById(id);
  }
}
