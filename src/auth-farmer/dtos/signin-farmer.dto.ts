import { IsString, IsEmail } from 'class-validator';

export class SigninFarmerDto{
    @IsEmail()
    email:string;
    @IsString()
    password:string;
    @IsString()
    name:string;
    @IsString()
    location:string
    @IsString()
    bio:string
    @IsString()
    img:string
    @IsString()
    wilaya:string
}