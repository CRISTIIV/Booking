import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstitutionsModule } from './modules/institutions/institutions.module';
import { ZonesModule } from './modules/zones/zones.module';
import { SpacesModule } from './modules/spaces/spaces.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import baseConfig from './config/database.config';
import { databaseConfig } from './config/database.source';
import { BookingModule } from './modules/booking/booking.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
    load: [baseConfig],
  }),
  TypeOrmModule.forRoot({
    ...databaseConfig,
  }),
    InstitutionsModule, ZonesModule, SpacesModule, BookingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
