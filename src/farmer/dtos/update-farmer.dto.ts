import { IsString,IsOptional,IsEmail } from "class-validator";
export class UpdateFarmerDto{
    @IsString()
    @IsOptional()
    name:string;
    @IsEmail()
    @IsOptional()
    email:string;
    @IsString()
    @IsOptional()
    password:string;
    @IsString()
    @IsOptional()
    location:string;
    @IsString()
    @IsOptional()
    bio:string   
}