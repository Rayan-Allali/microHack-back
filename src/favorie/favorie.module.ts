import { Module } from '@nestjs/common';
import { FavorieService } from './favorie.service';
import { FavorieController } from './favorie.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [FavorieService,PrismaService],
  controllers: [FavorieController]
})
export class FavorieModule {}
