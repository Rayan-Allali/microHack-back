import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { randomBytes , scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import {JwtService} from '@nestjs/jwt'
import { UserService } from '../user/user.service';
import { LoginUserDto } from './dtos/login-user.dto';
import { SignInUserDto } from './dtos/siginin-user.dto';

const scrypt=promisify( _scrypt)
@Injectable()
export class AuthUserService {
    constructor(
        private UserService:UserService,
        private jwtService:JwtService
        ){}
    
        async validateUser(data:LoginUserDto){
            const User=await this.UserService.findByEmail(data.email);
     }

     async login(data:LoginUserDto){
         const user=await this.UserService.findByEmail(data.email);
         if(!user) throw new UnauthorizedException('invalid data')
         const [salt,storedhash] =user.password.split('.')
         const hash =(await scrypt(data.password,salt,32)) as Buffer;
         if(storedhash != hash.toString('hex')) throw new UnauthorizedException('invalid data')
         return user
     }
 
     async signin(data:SignInUserDto){
        const email=await this.UserService.findByEmail(data.email);
        if(email) throw new BadRequestException('this email is already in use')
        const salt=randomBytes(8).toString('hex')

        const hash=(await scrypt(data.password,salt,32)) as Buffer;

     const result = salt + '.' + hash.toString('hex')

     const user = await this.UserService.create(data.name,result,data.email)
     const payload={userEmail:user.email}
     const accessToken:string=await this.jwtService.sign(payload)
     console.log(accessToken)
    return (accessToken)
     }

}

