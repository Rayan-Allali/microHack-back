import { JwtStrategy2 } from './../jwt-strategy2';
import { Module } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';
import { AuthUserController } from './auth-user.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports:[PassportModule.register({defaultStrategy:'jwt'}),JwtModule.register({secret:'topSecrtet509',signOptions:{expiresIn:3600}})],
  providers: [AuthUserService,PrismaService,JwtStrategy2,UserService],
  controllers: [AuthUserController]
})
export class AuthUserModule {}
