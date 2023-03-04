import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { randomBytes , scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import {JwtService} from '@nestjs/jwt'
import { FarmerService } from '../farmer/farmer.service';
import { LoginFarmerDto } from './dtos/login-farm.dto';
import { SigninFarmerDto } from './dtos/signin-farmer.dto';

const scrypt=promisify( _scrypt)
@Injectable()
export class AuthFarmerService {
    constructor(
        private FarmerService:FarmerService,
        private jwtService:JwtService
        ){}
    
        async validateUser(data:LoginFarmerDto){
            const farmer=await this.FarmerService.findByEmail(data.email);
     }

     async login(data:LoginFarmerDto){
         const farmer=await this.FarmerService.findByEmail(data.email);
         if(!farmer) throw new UnauthorizedException('invalid data')
         const [salt,storedhash] =farmer.password.split('.')
         const hash =(await scrypt(data.password,salt,32)) as Buffer;
         if(storedhash != hash.toString('hex')) throw new UnauthorizedException('invalid data')
         return farmer
     }
 
     async signin(data:SigninFarmerDto){
        const email=await this.FarmerService.findByEmail(data.email);
        if(email) throw new BadRequestException('this email is already in use')
        const salt=randomBytes(8).toString('hex')

        const hash=(await scrypt(data.password,salt,32)) as Buffer;

     const result = salt + '.' + hash.toString('hex')

     const farmer = await this.FarmerService.create(data.name,data.email,result,data.bio,data.location,data.img,data.wilaya)
     const payload={farmerEmail:farmer.email}
     const accessToken:string=await this.jwtService.sign(payload)
     console.log(accessToken)
    return (accessToken)
     }

}
