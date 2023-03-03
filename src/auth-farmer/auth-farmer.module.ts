import { Module } from '@nestjs/common';
import { AuthFarmerService } from './auth-farmer.service';
import { AuthFarmerController } from './auth-farmer.controller';

@Module({
  providers: [AuthFarmerService],
  controllers: [AuthFarmerController]
})
export class AuthFarmerModule {}
