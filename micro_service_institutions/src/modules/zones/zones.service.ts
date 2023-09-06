import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Zone } from 'src/entities';
import { Repository } from 'typeorm';
import { InstitutionsService } from '../institutions/institutions.service';

@Injectable()
export class ZonesService {
  constructor(
    @InjectRepository(Zone) private zoneRepository: Repository<Zone>,
    private institutionService: InstitutionsService
  
    ) {}
  async create(createZoneDto: CreateZoneDto) {
    //crear la zona hay que verificar la institucion
    const institution_resp = await this.institutionService.findOne(createZoneDto.institution);
    if(!institution_resp){
      throw new HttpException('Institution not found', HttpStatus.NOT_FOUND);
    }
    createZoneDto.institution = institution_resp.institucion.id;
    createZoneDto.state = true;
    const zone = this.zoneRepository.create(createZoneDto);
    if(!zone){
      throw new HttpException('Error creating zone', HttpStatus.BAD_REQUEST);
    }
    await this.zoneRepository.save(zone);
    return HttpStatus.CREATED;
  }

  async findAll() {
    return await this.zoneRepository.find({where:{status:true}});
  }

  async findOne(name: string) {
    return await this.zoneRepository.findOne({where:{name:name}});
  }

  async update(id: string, updateZoneDto: UpdateZoneDto) {
    const zone = this.zoneRepository.findOne({where:{id:id}});
    if(!zone){
      throw new HttpException('Zone not found', HttpStatus.NOT_FOUND);
    }
    return {HttpStatus:HttpStatus.OK, zone:await this.zoneRepository.update(id,updateZoneDto)};
  }

  remove(id: number) {
    return `This action removes a #${id} zone`;
  }

  async findAllCategories() {
    const categories = process.env.ZONE_CATEGORIES
    return categories
  }
  async findOneCategory(name :string) {
    const categories = process.env.ZONE_CATEGORIES
    const category = categories.includes(name)
    return category
  }

}
