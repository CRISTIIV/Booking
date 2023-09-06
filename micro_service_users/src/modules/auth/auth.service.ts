import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from 'src/entities';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { GoogleLoginUserDto } from '../auth/dto/google-login-user.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { BcryptService } from './codification.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {

  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private bcryptService: BcryptService
  ) { }

  //verifica un usuario en la base de datos
  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new HttpException("Error", HttpStatus.BAD_REQUEST)
    }
    const verify = await this.bcryptService.verifyPass(password, user.password)
    if (!verify) {
      throw new HttpException("Error", HttpStatus.UNAUTHORIZED);
    }
    const token = this.getToken(user);
    return { token, HttpStatus: HttpStatus.OK };
  }


  async register(registryUser: CreateUserDto) {
    const { password, email } = registryUser;
    const user = await this.userService.findOne(email);
    //verifico que el usuario no exista
    if (user) {
      throw new HttpException("Error", HttpStatus.BAD_REQUEST)
    }

    //ingreso los datos del usuario
    const EncyptedPass = await this.bcryptService.encriptPass(password);
    registryUser.password = EncyptedPass;
    await this.userService.create(registryUser);

    return HttpStatus.CREATED;
  }


  //rehace la contraseña de un usuario en la base de datos
  async forgetPassword(resetPasswordDto: ResetPasswordDto) {
    const { email, password, password_confirmation } = resetPasswordDto;
    const user = await this.userService.findOne(email);
    if (!user) {
      return HttpStatus.UNAUTHORIZED;
    }
    if (password !== password_confirmation) {
      return HttpStatus.BAD_REQUEST;
    }
    return await this.userService.forgetPassword(email, password);
  }

  getToken(user: User) {
    const payload = user.getPayload();
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: any) {
    const { email } = payload;

    const user = this.userService.findOne(email);
    if (!user) {
      return HttpStatus.UNAUTHORIZED;
    }
    return user;
  }

  async googleLogin(GoogleLoginUserDto: GoogleLoginUserDto) {
    console.log("google Login")

    const { email, name, last_name, City = "Google" } = GoogleLoginUserDto;
    const user = await this.userService.findOne(email);
    if (user) return;

    //nuevo usuario con google     

    if (last_name === "") {
      const last_name_google = "Google_Last_Name"
    }
    const is_admin = false;
    console.log("User not found, creating ...")
    console.log("Login")
    //const newUser = await this.userService.create({});

  }



  async status(email: string) {
    console.log("status")
    const user = this.userService.findOne(email);
    if (!user) {
      return { msg: "Not Authenticated" };
    };
    return { msg: "Authenticated" };
  }
}
