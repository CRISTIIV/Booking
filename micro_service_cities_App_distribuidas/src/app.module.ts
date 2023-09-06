import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import baseConfig from './config/database.config';
import { databaseConfig } from './config/database.source';
import { CityModule } from './modules/city/city.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
    load: [baseConfig],
  }),
  TypeOrmModule.forRoot({
    ...databaseConfig,
  }),CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
