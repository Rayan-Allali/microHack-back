import { IsString,IsDate,IsNumber } from 'class-validator';

export class CreateSaleDto{
    @IsString()
    farmerId:string;
    @IsString()
    productId:string;
    @IsNumber()
    quantity:number;
    @IsNumber()
    soldPrice:number;
}