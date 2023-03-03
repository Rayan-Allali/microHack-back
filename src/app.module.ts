import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { FarmerModule } from './farmer/farmer.module';
import { UserModule } from './user/user.module';
import { SaleModule } from './sale/sale.module';
import { AuthFarmerModule } from './auth-farmer/auth-farmer.module';
import { AuthUserModule } from './auth-user/auth-user.module';

@Module({
  imports: [ProductModule, FarmerModule, UserModule, SaleModule, AuthFarmerModule, AuthUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
