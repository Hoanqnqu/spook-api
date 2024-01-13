import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @FormDataRequest()
  createUser(@Body() user: UserDto): Promise<UserDto> {
    console.log(user);
    return this.userService.save(user);
  }
}
