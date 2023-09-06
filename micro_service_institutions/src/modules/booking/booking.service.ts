import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from 'src/entities';
import { Repository } from 'typeorm';
import { SpacesService } from '../spaces/spaces.service';
import axios from 'axios';


@Injectable()
export class BookingService {

  constructor(
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
    private spaceService: SpacesService
  ) { }

  async create(createBookingDto: CreateBookingDto) {
    const { fecha, space, space_number, user } = createBookingDto;
    const new_date = new Date(fecha);
    //verifico que el user exista
    const user_ver = await axios.get(`${process.env.URL_USER}/${user}`);
    if (!user_ver) {
      throw new HttpException("User", HttpStatus.CONFLICT);
    }
    //verifico que el space exista y este libre 
    const space_ver = await this.spaceService.findSpaceSpecify(space, space_number);
    if (!space_ver || space_ver.status == false) {
      throw new HttpException("Space", HttpStatus.CONFLICT);
    }
    //verifico que la fecha sea mayor a la actual


    const current_date = new Date();
    console.log("fecha actual", current_date);

    console.log("fecha parametro", fecha);

    if (new_date < current_date) {
      throw new HttpException("Date", HttpStatus.CONFLICT);
    }

    //verifico que el user no tenga una reserva en la misma fecha y en el mismo bloque horario
    const booking = await this.bookingRepository.findOne({ where: { date: new_date, user } })
    if (booking) {
      throw new HttpException("Booking", HttpStatus.CONFLICT);
    }

    //creo la reserva
    createBookingDto.state = true;
    createBookingDto.space = space_ver.id;
    createBookingDto.user = user_ver.data.id;
    const newBooking = this.bookingRepository.create({ date: createBookingDto.fecha, space: createBookingDto.space, user: createBookingDto.user, state: createBookingDto.state });
    await this.bookingRepository.save(newBooking);
    return { HttpStatus: HttpStatus.CREATED, Message: "Booking created successfully", Booking: newBooking };
  }

  async findAll() {
    return await this.bookingRepository.find({ where: { state: true } });
  }

  async findOne(id: string) {
    return await this.bookingRepository.findOne({ where: { id, state: true } });
  }

  async findBookingByUser(user: string) {
    return await this.bookingRepository.find({ where: { user, state: true }, relations: ['space'] });
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    return await this.bookingRepository.update(id, updateBookingDto);
  }

  async remove(id: string) {
    return "";
  }
}
