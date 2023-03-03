import { Injectable, UnauthorizedException } from '@nestjs/common';
import{PassportStrategy} from '@nestjs/passport'
import {Strategy,ExtractJwt} from 'passport-jwt'
import { PrismaService } from './prisma.service';
@Injectable()

export class JwtStrategy2 extends PassportStrategy(Strategy){
constructor(
    private prisma:PrismaService){
        super(
            {
                secretOrKey:'topSecrtet509',
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

            }
        )
    }

    async validate(payload){
        const {userEmail} = payload
        const user= await this.prisma.user.findFirst({where:{
            email:userEmail
        }})
        if(!user) throw new UnauthorizedException()
        return user
    }

}