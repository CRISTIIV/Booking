import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { InstitutionsController } from './institutions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from 'src/entities';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[TypeOrmModule.forFeature([Institution]), 
   ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
  })],
  controllers: [InstitutionsController],
  providers: [InstitutionsService],
  exports:[InstitutionsService]
})
export class InstitutionsModule {}
