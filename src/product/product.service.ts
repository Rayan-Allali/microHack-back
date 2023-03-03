import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductService {
    constructor(private prisma:PrismaService){}

    async products(){
       const products= await this.prisma.product.findMany()
       return products
    }

    async product(id:string){
        const product= await this.prisma.product.findUnique({where:{
            id
        }})
        if(!product) throw new NotFoundException('Product not found')
        return product
     }

     async delete(id:string){
        const product= await this.prisma.product.findUnique({where:{
            id
        }})
        if(!product) throw new NotFoundException('Product not found')
        await this.prisma.product.delete({where:{
            id
        }})
        return null
     }


     async update(id:string,body:UpdateProductDto){
        const product= await this.prisma.product.findUnique({where:{
            id
        }})
        if(!product) throw new NotFoundException('Product not found')

        const updateProduct =await this.prisma.product.update({
            where:{
                id
            },
            data:{
                name:body.name? body.name:undefined,
                description:body.description? body.description:undefined,
                quality:body.quality? body.quality:undefined
            }
        })
        return updateProduct
     }

     async create(body:CreateProductDto){
        const newProduct =await this.prisma.product.create({
            data:{
                name:body.name,
                description:body.description,
                quality:body.quality
            }
        })
        return newProduct
     }

}
