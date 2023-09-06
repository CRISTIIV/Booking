import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>) { }

  //crea un usuario en la base de datos
  async create(createUserDto: CreateUserDto) {
    //verifico si la cuenta existe o no
    const { email } = createUserDto;
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new HttpException("Error", HttpStatus.CONFLICT);
    }
    //consulta al microservicio de ciudades para verificar si la ciudad existe
    try {
      const city = await axios.get(`${process.env.URL_CITY}/${createUserDto.City}`);
      if (city.status !== 200) {
        throw new HttpException("Error", HttpStatus.BAD_REQUEST);
      }
      //creo el usuario
      createUserDto.City = city.data.id;
      createUserDto.is_active = true;
      if (createUserDto.is_admin === true) {
        createUserDto.is_admin = true;
      } else {
        createUserDto.is_admin = false;
      }
      const user_create = this.userRepository.create(createUserDto);
      await this.userRepository.save(user_create);
      return HttpStatus.CREATED;
    } catch (error) {
      return HttpStatus.CONFLICT;
    }
  }

  //obtiene un usuario de la base de datos por su id
  async getProfile(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new HttpException("Error", HttpStatus.CONFLICT);
    };
    const city = await axios.get(`${process.env.URL_CITY}/${user.City}`);
    const reservation = await axios.get(`${process.env.URL_BOOKING}/user/${user.id}`);
    if (!reservation) {
      throw new HttpException("Error", HttpStatus.BAD_REQUEST);
    }

    if (!city) {
      throw new HttpException("Error", HttpStatus.BAD_REQUEST);
    }


    const status_ = HttpStatus.OK
    return {
      reservation: reservation.data,
      email: user.email,
      name: user.name,
      last_name: user.last_name,
      City: city.data.name,
      status_
    };
  }


  //obtiene todos los usuarios de la base de datos
  async findAll() {
    return this.userRepository.find({ where: { is_active: true } });
  }

  //actualiza un usuario de la base de datos
  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id, is_active: true }, });
    if (!user) {
      return HttpStatus.CONFLICT;
    };

    const city = await axios.get(`${process.env.URL_CITY}/${user.City}`);
    if (!city) {
      return HttpStatus.CONFLICT;
    }

    const user_changed = await this.userRepository.update({ id: user.id }, updateUserDto)
    if (!user_changed) {
      return HttpStatus.BAD_REQUEST
    }
    return HttpStatus.OK;
  }

  async remove(id: string) {
    return await this.userRepository.update({ id: id }, { is_active: false });
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && user.password === password) {
      return user;
    }
    return null
  }

  async forgetPassword(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('User does not exists');
    };
    user.password = password;
    return await this.userRepository.save(user);
  }



  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email, is_active: true } });
  }

  async findOneById(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  saveUser(user: User) {
    return this.userRepository.save(user);
  }
}
