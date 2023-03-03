import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [SaleService,PrismaService],
  controllers: [SaleController]
})
export class SaleModule {}
