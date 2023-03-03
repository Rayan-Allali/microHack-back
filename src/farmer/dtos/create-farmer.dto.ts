import { IsString,IsEmail } from "class-validator";
export class CreateFarmerDto{
    @IsString()
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    password:string;
    @IsString()
    location:string;
    @IsString()
    bio:string   
    @IsString()
    img:string
}