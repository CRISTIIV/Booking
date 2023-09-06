import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/entities';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>,
  ){}

  //crea una ciudad en la base de datos
  async create(createCityDto: CreateCityDto) {
    const { name } = createCityDto;
    const city = await this.cityRepository.create({name});
    await this.cityRepository.save(city);
    return HttpStatus.CREATED;
  }
  
  //Busca todas las ciudades en la base de datos
  async findAll() {
    return await this.cityRepository.find();
  }

  //Busca una ciudad por id
  async findOne(name: string) {
    return await this.cityRepository.findOne({where: {name}});
  }
  //actualiza una ciudad por id
  async update(id: string, updateCityDto: UpdateCityDto) {
    const {name} = updateCityDto;
    if (!name || name === "") {
      return HttpStatus.BAD_REQUEST;
    }
    //busco la ciudad por id
    const city = await this.cityRepository.findOne({where: {id}});

    //Verifico que exista
    if (!city) {
      return HttpStatus.NOT_FOUND;
    }
    
    //actualizo los datos de city
    await this.cityRepository.update({id}, {name});
    return HttpStatus.OK;
  }
}
