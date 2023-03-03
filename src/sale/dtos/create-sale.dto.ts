import { IsString,IsDate,IsNumber } from 'class-validator';

export class CreateSaleDto{
    @IsString()
    productId:string;
    @IsNumber()
    quantity:number;
    @IsNumber()
    soldPrice:number;
}