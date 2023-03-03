import { Controller, Get, Param, Put, Body, Delete, Post, BadRequestException, UseGuards } from '@nestjs/common';
import { SaleService } from './sale.service';
import { UpdateSaleDto } from './dtos/update-sale.dto';
import { CreateSaleDto } from './dtos/create-sale.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetFarmer } from 'src/auth-farmer/get-farmer.decorator';
@Controller('sale')
export class SaleController {
    constructor(private SaleService:SaleService){}
    @Get()
    async sales(){
        const sales=await this.SaleService.sales()
        return sales
    }

    
    @Post()
    @UseGuards(AuthGuard('jwt'))
    async create(@Body() body:CreateSaleDto , @GetFarmer() farmer){
        if(!body.productId || !body.quantity || !body.soldPrice) throw new BadRequestException('data missing')
        const sales=await this.SaleService.create(body,farmer)
        return sales
    }
    @Get('/:id')
    async sale(@Param('id') id:string){
        const sale=await this.SaleService.sale(id)
        return sale
    }
   
    @Put('/:id')
    @UseGuards(AuthGuard('jwt'))
    async update(@Param('id') id:string ,@Body() body:UpdateSaleDto , @GetFarmer() farmer){
        if(!body.farmerId && !body.productId && !body.quantity && !body.soldPrice) throw new BadRequestException('data missing')
        const sale=await this.SaleService.update(id,body,farmer)
        return sale
    }
    
    @Delete('/:id')
    @UseGuards(AuthGuard('jwt'))
    async delete(@Param('id') id:string , @GetFarmer() farmer){
       await this.SaleService.delete(id,farmer)
        return null
    }

}
