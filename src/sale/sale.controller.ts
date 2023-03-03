import { Controller, Get, Param, Put, Body, Delete, Post, BadRequestException } from '@nestjs/common';
import { SaleService } from './sale.service';
import { UpdateSaleDto } from './dtos/update-sale.dto';
import { CreateSaleDto } from './dtos/create-sale.dto';
@Controller('sale')
export class SaleController {
    constructor(private SaleService:SaleService){}
    @Get()
    async sales(){
        const sales=await this.SaleService.sales()
        return sales
    }

    @Post()
    async create(@Body() body:CreateSaleDto){
        if(!body.farmerId || !body.productId || !body.quantity || !body.soldPrice) throw new BadRequestException('data missing')
        const sales=await this.SaleService.create(body)
        return sales
    }
    @Get('/:id')
    async sale(@Param('id') id:string){
        const sale=await this.SaleService.sale(id)
        return sale
    }
    @Put('/:id')
    async update(@Param('id') id:string ,@Body() body:UpdateSaleDto){
        if(!body.farmerId && !body.productId && !body.quantity && !body.soldPrice) throw new BadRequestException('data missing')
        const sale=await this.SaleService.update(id,body)
        return sale
    }
    @Delete('/:id')
    async delete(@Param('id') id:string){
       await this.SaleService.delete(id)
        return null
    }

}
