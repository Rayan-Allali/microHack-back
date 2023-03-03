import { Controller, Get, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private UserService:UserService){}

    @Get()
    async users(){
        const users=await this.UserService.users()
        return users
    }

    @Get('/:id')
    async user(@Param('id') id:string){
        const user=await this.UserService.user(id)
        return user
    }

    @Delete('/:id')
    async delete(@Param('id') id:string){
        const user=await this.UserService.delete(id)
        return null
    }
}
