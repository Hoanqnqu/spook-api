import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @Expose()
  id: string;

  @IsString()
  @IsNotEmpty()
  firebaseUID: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Expose()
  role: string;
}
