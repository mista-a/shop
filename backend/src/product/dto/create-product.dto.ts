import { IsArray, IsNumber, IsString } from 'class-validator';

// class showcaseItem {
//   miniImg: string
//   imgs: string[]
// }

export class CreateProductDto {
  @IsString()
  name: string;

  // @IsNumber()
  price: number;

  @IsString()
  img: string;

  @IsArray()
  colors: string[];

  showcase: any;
  // sizes?: string[];
  // description?: string;
}
