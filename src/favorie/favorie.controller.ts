import { Controller, Get, Param, Delete, Body, Post } from '@nestjs/common';
import { FavorieService } from './favorie.service';
import { CreateFavoriteDto } from './dtos/create-favorie.dto';

@Controller('favorie')
export class FavorieController {
    constructor(private FavorieService:FavorieService){}
    @Get()
    async favories(){
        const favories=await this.FavorieService.favories()
        return favories
    }

    @Get('/:id')
    async favorie(@Param() id:string){
        const favorie=await this.FavorieService.favorite(id)
        return favorie
    }

    @Delete('/:id')
    async delete(@Param() id:string){
        const favorie=await this.FavorieService.delete(id)
        return null
    }

    @Post()
    async create(@Body() body:CreateFavoriteDto){
        const favorie=await this.FavorieService.create(body)
        return favorie
    }
}
