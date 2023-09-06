import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from '../users/users.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { GoogleAuthGuard } from '../google/google-auth.guard';
import { Request } from 'express';
import { BcryptService } from './codification.service';
import { UpdateUserDto } from '../users/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private usersService:UsersService,
    private bcryptService:BcryptService) {}


  //auth/google/login
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleGoogleLogin() {
    return {msg:'google Authentication'}
  }

  //auth/google/redirect
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return {msg:'OK'}
  }

  @Get('status')
  async status(@Req() request: Request){
    if(!request.user){
      return {msg:"Not Authenticated"};
    }
    return {msg:"Authenticated"};
    //return this.status(email);
  }
  
  //auth/login
  @Post('login')
  async login(
    @Body() loginUserDto: LoginUserDto){
      return await this.authService.login(loginUserDto);
    }
  //auth/regitser
  @Post('register')
  async register(@Body () createUserDto:CreateUserDto){
    return await this.authService.register(createUserDto);
  }

  //auth/changePassword
  @Patch('changePassword')
  async forgetPassword(@Body() resetPasswordDto:ResetPasswordDto){
    return await this.authService.forgetPassword(resetPasswordDto);
  }  

  //auth/changeInfo
  @Patch('changeInfo/:id')
  async changeInfo(@Param('id') id: string,@Body() UpdateUserDto:UpdateUserDto){
    const encrypt_password = await this.bcryptService.encriptPass(UpdateUserDto.password);
    UpdateUserDto.password = encrypt_password;
    return await this.usersService.update(id,UpdateUserDto);
  }



}
