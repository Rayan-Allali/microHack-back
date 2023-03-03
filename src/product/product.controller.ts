import { BadRequestException, Body, Controller, Delete, Get, Param, Put, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dtos/update-product.dto';
import { CreateProductDto } from './dtos/create-product.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('product')
export class ProductController {
    constructor(private ProductService:ProductService){}
    @Get()
    async products(){
        const products=await this.ProductService.products()
        return products
    }

    @Get('/:id')
    async product(@Param('id') id:string){
        const product=await this.ProductService.product(id)
        return product
    }
   
    @Delete('/:id')
    @UseGuards(AuthGuard('jwt'))
    async delete(@Param('id') id:string){
        await this.ProductService.delete(id)
        return null
    }
    
    @Put('/:id')
    @UseGuards(AuthGuard('jwt'))
    async update(@Param('id') id:string ,@Body() body:UpdateProductDto){
        if(!body.description && !body.name && !body.quality) throw new BadRequestException('no data was sent')
        const product=await this.ProductService.update(id,body)
        return product
    }
    
    @Post()
    @UseGuards(AuthGuard('jwt'))
    async create(@Body() body:CreateProductDto){
        if(!body.description || !body.name || !body.quality) throw new BadRequestException('no data was sent')
        const product=await this.ProductService.create(body)
        return product
    }

}
