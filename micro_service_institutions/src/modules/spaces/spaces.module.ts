import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesController } from './spaces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Space } from 'src/entities';
import { ZonesModule } from '../zones/zones.module';

@Module({
  imports: [TypeOrmModule.forFeature([Space]),ZonesModule],
  controllers: [SpacesController],
  providers: [SpacesService],
  exports: [SpacesService]
})
export class SpacesModule {}
