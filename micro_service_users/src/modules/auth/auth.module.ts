import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleModule } from '../google/google.module';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { BcryptService } from './codification.service';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[UsersModule,GoogleModule, 
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    JwtModule.register({
    secret:  process.env.JWT_SECRET,
    signOptions: { expiresIn: '1d' },
  })
],
  controllers: [AuthController],
  providers: [AuthService, BcryptService,JwtStrategy],
  exports:[AuthService]
})

export class AuthModule {}
