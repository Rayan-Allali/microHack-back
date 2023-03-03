import { IsString,IsNumber,IsOptional } from 'class-validator';

export class UpdateSaleDto{
    @IsString()
    @IsOptional()
    farmerId:string;
    @IsString()
    @IsOptional()
    productId:string;
    @IsNumber()
    @IsOptional()
    quantity:number;
    @IsNumber()
    @IsOptional()
    soldPrice:number;
}