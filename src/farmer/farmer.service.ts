import { Injectable, NotFoundException, Delete } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UpdateFarmerDto } from './dtos/update-farmer.dto';
import { CreateFarmerDto } from './dtos/create-farmer.dto';

@Injectable()
export class FarmerService {
    constructor(private prisma:PrismaService){}
    async farmers(){
        const farmers=await this.prisma.farmer.findMany({
            select:{
                name:true,
                email:true,
                bio:true,
                location:true,
                points:true
            }
        })
        return farmers
    }
    async farmer(id:string){
        const farmer=await this.prisma.farmer.findUnique({where:{
            id
        },select:{
            name:true,
            email:true,
            bio:true,
            location:true,
            points:true,
            sales:{
                select:{
                    product:true
                }
            }
        }})
        if(!farmer) throw new NotFoundException('farmer not found')
        return farmer
    }
    async findByEmail(email:string){
        const user=await this.prisma.farmer.findFirst({where:{email}})
        return user
    }
    async create(name,email,password,bio,location,img,wilaya){
        const farmer=await this.prisma.farmer.create({data:{
            name,
            email,
            password,
            bio,
            location,
            img,wilaya
        }})
        return farmer
    }
    
    async update(id:string,body:UpdateFarmerDto){
      const farmer=await this.farmer(id)
      const updateFarmer =await this.prisma.farmer.update({
        where:{
            id
        },
        data:{
            name:body.name? body.name:undefined,
            email:body.email? body.email:undefined,
            password:body.password? body.password:undefined,

        }
    })
    return updateFarmer 
    }

    async delete(id:string){
        const farmer=await this.farmer(id)
        const deleteFarmer =await this.prisma.farmer.delete({
          where:{
              id:id
          }
      })
      return null
      }
}
