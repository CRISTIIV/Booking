import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>){}

  async create(createCityDto: CreateCityDto) {
    const {name} = createCityDto;
    const city = await this.cityRepository.findOne({where:{name}});
    console.log(city);
    if(city){
      throw new Error('City already exists');
    }
    const new_city = this.cityRepository.create({name});
    await this.cityRepository.save(new_city);
    return new_city; //mientras dev
  }

  async findAll() {
    return this.cityRepository.find();
  }

  async findOne(name:string) {
    return await this.cityRepository.findOne({where:{name}});
  }

  async update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  async remove(id: number) {
    return `This action removes a #${id} city`;
  }

  async googleCity(createCityDto: CreateCityDto) {
    return this.cityRepository.save(createCityDto)
  }
}
