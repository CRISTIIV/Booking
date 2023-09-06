import { DateTime } from 'luxon';

export class CreateBookingDto {

    //import fecha: npm install --save luxon';
    fecha: DateTime;
    space: string;
    space_number: number;
    user: string;
    state: boolean;
}
