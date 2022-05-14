import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  price: number;
  img: string;
  name: string;
  favorite: [{ price: number }];
}
