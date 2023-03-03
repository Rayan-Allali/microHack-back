import { IsEmail, IsString } from "class-validator";

export class LoginFarmerDto{
    @IsEmail()
    email:string;
    @IsString()
    password:string
}