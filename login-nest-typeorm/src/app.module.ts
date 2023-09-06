import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import baseConfig from './config/base-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/data.source';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CityModule } from './modules/city/city.module';
import { PassportModule } from '@nestjs/passport';
import { InstitutionsModule } from './modules/institutions/institutions.module';
import { ZonesModule } from './modules/zones/zones.module';
import { SpacesModule } from './modules/spaces/spaces.module';
import { BookingModule } from './modules/booking/booking.module';



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
  UsersModule,CityModule, AuthModule, InstitutionsModule, ZonesModule, SpacesModule, BookingModule
  ],
})
export class AppModule {}
