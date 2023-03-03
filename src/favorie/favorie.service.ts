import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateFavoriteDto } from './dtos/create-favorie.dto';

@Injectable()
export class FavorieService {
    constructor(private prisma:PrismaService){}

    async favories(){
        const favories=await this.prisma.favorite.findMany({
            include:{
                user:true,
                product:true
            }
        })
        return favories
    }

    async favorite(id:string){
        const favorite=await this.prisma.favorite.findUnique({
            where:{
                id
            },
            include:{
                user:true,
                product:true
            }
        })
        if(!favorite) throw new NotFoundException('favorite not found')
        return favorite
    }

    async create(body:CreateFavoriteDto){
        const favorite=await this.prisma.favorite.create({
            data:{
                user:{connect:{
                    id:body.userId
                }},
                product:{connect:{
                    id:body.productId
                }}
            }
        })
        return favorite
    }

    async delete(id:string){
        const favorite=await this.prisma.favorite.findUnique({
            where:{
                id
            }
        })
        if(!favorite) throw new NotFoundException('favorite not found')
        await this.prisma.favorite.delete({
            where:{
                id
            }
        })
        return null
    }
}
