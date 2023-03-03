import { Module } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';
import { AuthUserController } from './auth-user.controller';

@Module({
  providers: [AuthUserService],
  controllers: [AuthUserController]
})
export class AuthUserModule {}
