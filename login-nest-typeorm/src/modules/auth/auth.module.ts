import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './GoogleStrategy';
import { JwtStrategy } from './jwt.strategy';
import { SessionSerializer } from './Serializer';
import { BcryptService } from './condification.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    JwtStrategy,
    SessionSerializer,
    BcryptService,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    }
  ],
  exports:[AuthService]
})
export class AuthModule {}
