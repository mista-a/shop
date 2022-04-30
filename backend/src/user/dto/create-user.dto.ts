import { IsEmail } from 'class-validator';

export class CreateUserDto {
  name: string;

  @IsEmail(undefined, { message: 'Wrong email' })
  email: string;

  password: string;
}
