import { Module } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { FarmerController } from './farmer.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [FarmerService,PrismaService],
  controllers: [FarmerController]
})
export class FarmerModule {}
