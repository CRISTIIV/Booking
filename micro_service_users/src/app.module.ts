import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PassportModule } from '@nestjs/passport';
import baseConfig from './config/database.config';
import { databaseConfig } from './config/database.source';
import { AppController } from './app.controller';
import { AppService } from './app.service';



@Module({
  imports: [
  ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
    load: [baseConfig],
  }),
  TypeOrmModule.forRoot({
    ...databaseConfig,
  }),
  PassportModule.register({session:true}),
  UsersModule,AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
