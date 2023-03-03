import { IsString,IsOptional } from 'class-validator';
export class UpdateProductDto{
    @IsString()
    @IsOptional()
    name:string;
    @IsString()
    @IsOptional()
    description:string;
    @IsString()
    @IsOptional()
    quality:string;
}