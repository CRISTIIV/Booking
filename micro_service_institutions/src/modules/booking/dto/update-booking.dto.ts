import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
    fecha: Date;
    bloque_horario: number;
    state: boolean;
}
