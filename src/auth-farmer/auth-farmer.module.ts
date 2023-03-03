import { Module } from '@nestjs/common';
import { AuthFarmerService } from './auth-farmer.service';
import { AuthFarmerController } from './auth-farmer.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt-strategy';
import { PrismaService } from '../prisma.service';
import { FarmerService } from '../farmer/farmer.service';

@Module({
  imports:[PassportModule.register({defaultStrategy:'jwt'}),JwtModule.register({secret:'topSecrtet509',signOptions:{expiresIn:3600}})],
  providers: [AuthFarmerService,PrismaService,JwtStrategy,FarmerService],
  controllers: [AuthFarmerController],
  exports:[PassportModule,JwtStrategy]
})
export class AuthFarmerModule {}
