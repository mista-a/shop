import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateProductDto } from 'src/product/dto/create-product.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  async getFavorite(id: number) {
    const user = this.repository.findOneBy({ id });
    return (await user).favorite;
  }

  async addToFavorite(id: number, dto: UpdateUserDto) {
    const user = this.repository.findOneBy({ id });
    (await user).favorite.push({
      price: dto.price,
      img: dto.img,
      name: dto.name,
    });
    this.repository.update(id, {
      favorite: (await user).favorite,
    });
  }

  findByCond(cond: LoginUserDto) {
    return this.repository.findOne({ where: cond });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }
}
