import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), NestjsFormDataModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
