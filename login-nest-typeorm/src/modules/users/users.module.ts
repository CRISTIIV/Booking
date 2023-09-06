import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City, User } from 'src/entities';


@Module({
  imports: [TypeOrmModule.forFeature([User,City])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService,]
})
export class UsersModule {}
