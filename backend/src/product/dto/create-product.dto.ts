import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  img: string;

  // @IsArray()
  // colors?: string[];

  // @IsArray()
  // showcase?: any;
  // sizes?: string[];
  // description?: string;
}
