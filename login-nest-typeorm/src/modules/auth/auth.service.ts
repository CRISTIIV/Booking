import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from 'src/entities';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { GoogleStrategy } from './GoogleStrategy';
import { BcryptService } from './condification.service';


@Injectable()
export class AuthService {

  constructor (
    private userService: UsersService,
    private jwtService: JwtService,
    private BcryptService:BcryptService
  ){}
 
  async login(loginUserDto: LoginUserDto){
      const {email,password} = loginUserDto;
      const user = await this.userService.findOne(email);
      if(!user){
        throw new Error("Invalid credentials ")
      }
      
      const decryp_pass = await this.BcryptService.verifyPass(password,user.password)
      if(!decryp_pass){
        throw new Error("Invalid credentials pass")  
      }
      const token = this.getToken(user);
      return {token,user};   
      
  }

    async register(registryUser: CreateUserDto){
      const {password,email} = registryUser;
      const user = await this.userService.findOne(email);
      //verifico que el usuario no exista
      if(user){
        throw new HttpException("User already exist ",HttpStatus.BAD_REQUEST)
      }
      //ingreso los datos del usuario
      const EncyptedPass = await this.BcryptService.encriptPass(password);
      registryUser.is_admin = false;
      registryUser.password = EncyptedPass;
      await this.userService.create(registryUser);
      
      return HttpStatus.CREATED;
    }

  async forgetPassword(resetPasswordDto:ResetPasswordDto){
    const {email,password} = resetPasswordDto;
    const user = await this.userService.findOne(email);
    if (!user){
      throw new Error('Invalid credentials') ;
    }
    user.password = await this.BcryptService.encriptPass(password);
    return await this.userService.forgetPassword(email,user.password);
  }


    getToken(user:User){
      const payload = user.getPayload();
      return this.jwtService.sign(payload);
    }

    async validateUser(payload:any){
      const {email} = payload;
      const user = this.userService.findOne(email);
      if (!user){
          throw new Error('Invalid credentials') ;
      }
      return user;
    }

    async googleLogin(Userdto: CreateUserDto){
      console.log("googleLogin")
      console.log(Userdto)
      const user = await this.userService.findOne(Userdto.email);
      console.log(user)
      if (user) return user; 
      
      //nuevo usuario con google     
      console.log("User not found, creating ...")
      Userdto.city_name = "Google"
      const newUser = await this.userService.create(Userdto)
      return this.userService.saveUser(newUser);
    }

     

    async status (email:string){
      console.log("status")
      const user = this.userService.findOne(email);
      if (!user){
        return{msg:"Not Authenticated"} ; //!pregutar si throw
      };
      return{msg:"Authenticated"};
    }
}
