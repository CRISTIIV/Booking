import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from 'src/entities';
import { InstitutionsService } from '../institutions/institutions.service';
import { InstitutionsModule } from '../institutions/institutions.module';

@Module({
  imports: [TypeOrmModule.forFeature([Zone]),InstitutionsModule],
  controllers: [ZonesController],
  providers: [ZonesService],
  exports: [ZonesService]
})
export class ZonesModule {}
