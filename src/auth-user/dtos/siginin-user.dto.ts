import { IsEmail, IsString } from "class-validator";

export class SignInUserDto{
    @IsEmail()
    email:string;
    @IsString()
    password:string
    @IsString()
    name:string
}