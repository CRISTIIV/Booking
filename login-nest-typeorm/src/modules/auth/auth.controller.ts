import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { GoogleAuthGuard } from './Google-auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,) {}


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
    //!user de test : 
  // email = tmhnoss@team.manco.com, pass = test_pass
  // email = register@gmail.com = pass_register
  @Post('login')
  async login(
    @Body() loginUserDto: LoginUserDto){
      return await this.authService.login(loginUserDto);
    }
  //auth/register
  @Post('register')
  async register(@Body () createUserDto:CreateUserDto){
    return await this.authService.register(createUserDto);
  }
  //auth/changePassword
  @Patch('changePassword')
  async forgetPassword(@Body() resetPasswordDto:ResetPasswordDto){
    return await this.authService.forgetPassword(resetPasswordDto);
  }  
}
