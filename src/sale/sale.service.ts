import { Injectable, NotFoundException, Body, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {UpdateSaleDto} from './dtos/update-sale.dto'
import { CreateSaleDto } from './dtos/create-sale.dto';

@Injectable()
export class SaleService{
    constructor(private prisma:PrismaService){}

    async sales(){
        const sales=await this.prisma.sale.findMany({
            include:{
                farmer:true,
                product:true
            }
        })
        return sales
    }

    async sale(id:string){
        const sale=await this.prisma.sale.findUnique({
            where:{
                id
            },
            include:{
                farmer:true,
                product:true
            }
        })
        if(!sale) throw new NotFoundException('sale not found')
        return sale
    }

    async create(body:CreateSaleDto,farmer){
        const sale=await this.prisma.sale.create({
            data:{
                farmer:{connect:{
                    id:farmer.id
                }},
                product:{connect:{
                    id:body.productId
                }},
            quantity:body.quantity,
            soldPrice:body.soldPrice,
            }
        })
        return sale
    }

    async update(id:string,body:UpdateSaleDto,farmer){
        const sale=await this.prisma.sale.findUnique({
            where:{
                id
            },
            include:{
                farmer:true,
                product:true
            }
        })
        if(!sale) throw new NotFoundException('sale not found')
        if(farmer.id != sale.farmerId) throw new UnauthorizedException()
        const updateSale = await this.prisma.sale.update({
            where:{
                id
            },
            data:{
        quantity:body.quantity ? body.quantity : undefined,
        soldPrice:body.soldPrice ? body.soldPrice : undefined
            }
        })
        return updateSale
    }

    async delete(id:string,farmer){
        const sale=await this.prisma.sale.findUnique({
            where:{
                id
            }
        })
        if(!sale) throw new NotFoundException('sale not found')
        if(farmer.id != sale.farmerId) throw new UnauthorizedException()
        await this.prisma.sale.delete({
            where:{
                id
            }
        })
        return null
    }
}
