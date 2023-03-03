import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { FarmerService } from './farmer.service';

@Controller('farmer')
export class FarmerController {
    constructor(private FarmerService:FarmerService){}
    @Get()
    async farmers(){
        const farmers=await this.FarmerService.farmers()
        return farmers
    }

    @Get('/:id')
    async farmer(@Param('id') id:string){
        const farmer=await this.FarmerService.farmer(id)
        return farmer
    }

    @Delete('/:id')
    async delete(@Param('id') id:string){
        const farmer=await this.FarmerService.delete(id)
        return null
    }
    
}
