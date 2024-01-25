import { Expose } from 'class-transformer';

export class UserUpdateDto {
  @Expose()
  role: string;
}
