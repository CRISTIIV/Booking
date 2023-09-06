import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/entities';
import { SpacesModule } from '../spaces/spaces.module';

@Module({
  imports: [TypeOrmModule.forFeature([Booking]),SpacesModule],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService]
})
export class BookingModule {}
