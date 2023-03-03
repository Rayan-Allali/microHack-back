import { Injectable, UnauthorizedException } from '@nestjs/common';
import{PassportStrategy} from '@nestjs/passport'
import {Strategy,ExtractJwt} from 'passport-jwt'
import { PrismaService } from './prisma.service';
@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy){
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
        const {farmerEmail} = payload
        const farmer= await this.prisma.farmer.findFirst({where:{
            email:farmerEmail
        }})
        if(!farmer) throw new UnauthorizedException()
        return farmer
    }

}