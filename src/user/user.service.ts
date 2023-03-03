import { CreateUserDto } from './dtos/create-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma:PrismaService){}

    async users(){
        const users=await this.prisma.user.findMany({select:{
            name:true,email:true,favorites:true,points:true
        }})
        return users
    }

    async user(id:string){
    const user=await this.prisma.user.findUnique({where:{id},select:{
        name:true,email:true,favorites:true,points:true
    }})
        if(!user) throw new NotFoundException('no user was found')
    return user
    }
    async create(body:CreateUserDto){
        const user=await this.prisma.user.create({data:{
            email:body.email,
            password:body.password,
            name:body.name
        }})
        return user
    }
    async delete(id:string){
        const user=await this.user(id)
        await this.prisma.user.delete({where:{
            id
        }})
        return null
    }
    async update(id:string,body:UpdateUserDto){
        const user=await this.user(id)
        const updateUser= await this.prisma.user.update({where:{
            id
        },
    data:{
        name:body.name ? body.name : undefined,
        email:body.email ? body.email : undefined,
        password:body.password ? body.password : undefined
    }})
    }
}
