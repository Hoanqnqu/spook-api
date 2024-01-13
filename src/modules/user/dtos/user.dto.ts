import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @Expose()
  id: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @Expose()
  isActive: boolean;

  @Expose()
  role: string;
}
