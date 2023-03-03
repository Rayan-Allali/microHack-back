import { Controller, Body, Post, BadRequestException } from '@nestjs/common';
import { AuthFarmerService } from './auth-farmer.service';
import { SigninFarmerDto } from './dtos/signin-farmer.dto';
import { LoginFarmerDto } from './dtos/login-farm.dto';

@Controller('auth-farmer')
export class AuthFarmerController {
    constructor(private authService: AuthFarmerService){}
    @Post('/signin')
    async signin(@Body() body:SigninFarmerDto){
        if(!body.email || !body.password || !body.name || !body.location || !body.bio)throw new BadRequestException('data is required');
       const farmer=await this.authService.signin(body);
        return farmer
    }
    @Post('/login')
    async login(@Body() body:LoginFarmerDto){
        if(!body.email || !body.password)throw new BadRequestException('data is required');
       const farmer=await this.authService.login(body);
       if(farmer){
        console.log('login succefully')
       }
        return farmer
    }
}
