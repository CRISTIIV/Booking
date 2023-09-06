import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Space } from 'src/entities';
import { ZonesService } from '../zones/zones.service';

@Injectable()
export class SpacesService {
  constructor(
    @InjectRepository(Space) private spaceRepository: Repository<Space>,
    private zonesService: ZonesService
  ){}
  async create(createSpaceDto: CreateSpaceDto) {
    //verifico que la zona exista
    const zone = await this.zonesService.findOne(createSpaceDto.zone);
    if(!zone){
      throw new HttpException("Zone not found",HttpStatus.CONFLICT);
    }
    //verifico que el espacio no exista
    const space = await this.spaceRepository.findOne({where:{name:createSpaceDto.name}});
    if(space){
      if (space.number === createSpaceDto.number){
        throw new HttpException("Space number already exists",HttpStatus.CONFLICT);
      }
      throw new HttpException("Space already exists",HttpStatus.CONFLICT);
    }
    //creo el espacio
    createSpaceDto.state = true;
    createSpaceDto.zone = zone.id;
    const newSpace = await this.spaceRepository.create(createSpaceDto);
    

    await this.spaceRepository.save(newSpace);
    return {HttpStatus:HttpStatus.CREATED, space:newSpace};
  }

  async findAll() {
    return await this.spaceRepository.find({where:{status:true}});
  }

  async findSpaceSpecify(name: string,number:number) {
    return await this.spaceRepository.findOne({where:{name:name,number:number}});
  }

  async findName(name: string) {
    return await this.spaceRepository.findOne({where:{name:name}});
  }

  async getSpaceState(name: string){
    const space = await this.spaceRepository.findOne({where:{name:name}});
    if(!space){
      throw new HttpException("",HttpStatus.CONFLICT);
    }
    return space.status;
    
  }

  async update(id: string, updateSpaceDto: UpdateSpaceDto) {
    const space = await this.spaceRepository.findOne({where:{id:id}});
    if(!space){
      throw new HttpException('Space not found', HttpStatus.NOT_FOUND);
    }
    return {HttpStatus:HttpStatus.OK, space:await this.spaceRepository.update(id,updateSpaceDto)};
  }

  remove(id: string) {
    return `This action removes a #${id} space`;
  }
}
