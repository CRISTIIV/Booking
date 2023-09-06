import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City, User } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(City) private cityRepository: Repository<City>){}

  async create(createUserDto: CreateUserDto) {
    const {username,email,password,last_name,city_name,is_admin = false} = createUserDto;   
    //verifica la ciudad
    const City = await this.cityRepository.findOne({where:{name:city_name}});
    if (!City){
      throw new Error('City does not exists');
    }
    //verifica que el usuario no exista
    const user = await this.userRepository.findOne({where:{email}}) ;
    if(!user){
      const user = this.userRepository.create({username,password,email,last_name,is_admin,City:City.id});
      await this.userRepository.save(user);
      return user; 
    }
  }

  async getProfile(email:string){
    const user = await this.userRepository.findOne({where:{email}});
    if(!user){
      throw new Error('User does not exists');
    };
    const city = await this.cityRepository.findOne({where:{name:user.City}});
    return {
      email:user.email,
      username:user.username,
      last_name:user.last_name,
      city_name:city.name,
    };
  }

  async findAll() {
    return this.userRepository.find({relations:['City']});
  }

  async update(email:string, updateUserDto: UpdateUserDto) {
    const {username,last_name,city_name} = updateUserDto;
    const City = await this.cityRepository.findOne({where:{name:city_name}});
    if (!City){
      throw new Error('City does not exists');
    }
    const user = await this.userRepository.findOne({where:{email}});
    if(!user){
      throw new Error('User does not exists');
    };
    user.username = username;
    user.last_name = last_name;
    user.City = City.id;
    
    this.saveUser(user)
    return user;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async validateUser(email:string,password:string){
    const user = await this.userRepository.findOne({where:{email}});
    if(user && user.password === user.password){
      return user;
    }
    return null
  }

  async forgetPassword(email:string,password:string){
    const user = await this.userRepository.findOne({where:{email}});
    if(!user){
      throw new Error('User does not exists');
    };
    user.password = password;
    await this.userRepository.save(user);
    return HttpStatus.OK;
  }

  async findOne(email:string) {
    return this.userRepository.findOne({where:{email}});

  }
  
  async findOneById(id:string) {
    return this.userRepository.findOne({where:{id}});
  }

  saveUser(user:User){
    return this.userRepository.save(user);
  }

}
