import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Institution } from 'src/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';

@Injectable()
export class InstitutionsService {

  constructor(
    @InjectRepository(Institution) private institutionRepository: Repository<Institution>
  ){}

  async create(createInstitutionDto: CreateInstitutionDto) {
    const {name} = createInstitutionDto   

    //verifico que la institucion no exista
    const institucion_verify = await this.institutionRepository.findOne({where:{name}})
    if (institucion_verify){
      throw new HttpException("Error",HttpStatus.CONFLICT)
    }

    //si va admin en el request, verifico que exista 
    if (createInstitutionDto.admin){
      const admin_response = await axios.get(`${process.env.URL_USER}/${createInstitutionDto.admin}`);
      if (admin_response.status >= 400 ){
        throw new HttpException("Error",HttpStatus.CONFLICT)
      }
      //verifico que sea admin 
      if (!admin_response.data.is_admin){
        throw new HttpException("Error",HttpStatus.UNAUTHORIZED)
      }
      //almaceno al admin en la base de datos de la instuitucion
      createInstitutionDto.admin = admin_response.data.id
      
    }

    //verifico que la ciudad sea la correcta
    const city_response = await axios.get(`${process.env.URL_CITY}/${createInstitutionDto.city}`);
    if (city_response.status >= 400 ){
      throw new HttpException("Error",HttpStatus.CONFLICT)
    }
    //creo la institucion en la base de datos
    const institucion = await this.institutionRepository.create({city:city_response.data.id,name,admin:createInstitutionDto.admin,category:createInstitutionDto.category})
    await this.institutionRepository.save(institucion)
    return HttpStatus.CREATED;
  }

  async findAll() {
    return await this.institutionRepository.find()
  }

  async findOne(name: string) {
    const institucion = await this.institutionRepository.findOne({where:{name}})
    if (!institucion){
      throw new HttpException("Error",HttpStatus.BAD_REQUEST)
    }
    return {institucion:institucion,HttpStatus:HttpStatus.OK};
  }

  update(id: string, updateInstitutionDto: UpdateInstitutionDto) {
    const institution = this.institutionRepository.findOne({where:{id}});
    if (!institution){
      throw new HttpException("Error",HttpStatus.BAD_REQUEST)
    }
    const institucion_changed = this.institutionRepository.update({id:id},{name:updateInstitutionDto.name,city:updateInstitutionDto.city,category:updateInstitutionDto.category,admin:updateInstitutionDto.admin})
    if(!institucion_changed){
      throw new HttpException("Error",HttpStatus.BAD_REQUEST)
    }
    return HttpStatus.OK;
  }

  remove(id: string) {
    return `This action removes a #${id} institution`;
  }

  institution_exist(name:string):boolean{
    const institution = this.findOne(name)
    if(institution){
      return true
    }
    return false
  }

  async findAllCategories() {
    const categories = process.env.INSTITUTIONS_CATEGORIES
    return categories
  }
}