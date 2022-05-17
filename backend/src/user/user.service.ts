import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { ProductEntity } from 'src/product/entities/product.entity';
import { CartEntity } from './entities/cart.entity';
import { count } from 'console';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
    @InjectRepository(ProductEntity)
    private cartRepo: Repository<CartEntity>,
  ) {}

  async create(dto: CreateUserDto) {
    return this.repository.save({
      email: dto.email,
      name: dto.name,
      password: dto.password,
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  async getCart(userId: number) {
    let findUser = await this.repository.findOneBy({ id: userId });
    if (!findUser.cart) {      
      const qb = this.cartRepo.createQueryBuilder();
      qb.insert()
          .into(CartEntity)
          .values({ id: findUser.id, cartItems: [] })
          .execute();
          findUser = await this.repository.save({
            ...findUser,
            cart: { id: findUser.id },
          });
    }
    if (findUser) {
      return {
        statusCode: 200,
        message: 'Success',
        response: { cart: findUser.cart },
      };
    }
    throw new UnauthorizedException('Invalid Credentials');
  }

  async addToCart(
    userId: number,
    cartItems: { productId: number; count: number }[],
  ) {
    
    let findUser = await this.repository.findOne({ where: { id: userId } });
    if (findUser) {
      if (!findUser.cart) {
        const qb = this.cartRepo.createQueryBuilder();
        qb.insert()
          .into(CartEntity)
          .values({ id: findUser.id, cartItems: [] })
          .execute();
        findUser = await this.repository.save({
          ...findUser,
          cart: { id: findUser.id },
        });
      }
      let cart = findUser.cart.cartItems;
      (() => {
        cartItems.forEach(async ({ productId, count }) => {
          if (!cart.find((product) => product.item.id === productId) ?? false) {            
            const product = await this.productRepo.findOneBy({ id: productId });
            if (product) {
              cart.push({ item: product, count });
            }
          }
        });
      })();
      await this.repository.save(findUser);
      return {
        statusCode: 200,
        message: 'Success',
        response: { cart: cartItems },
      };
    }
    throw new UnauthorizedException('Invalid Credentials');
  }

  findByCond(cond) {
    return this.repository.findOne({ where: cond });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }
}
