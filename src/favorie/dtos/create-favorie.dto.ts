import { IsString } from 'class-validator';

export class CreateFavoriteDto{
    @IsString()
  userId:string;
  @IsString()
  productId:string
}