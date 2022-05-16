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

  async createCart(userId: number) {
    console.log('1');

    return await this.cartRepo.save({ user: { id: userId, cartItems: [] } });
  }

  async create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  async getCart(userId: number) {
    const findUser = await this.repository.findOneBy({ id: userId });
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
    // const qb = this.cartRepo.createQueryBuilder();
    // qb.insert().into(CartEntity).values({ id: 1, cartItems: [] }).execute();
    const findUser = await this.repository.findOneBy({ id: userId });
    if (!findUser.cart) {
      const cart = await this.cartRepo.save({
        id: findUser.id,
        cartItems: [],
      });

      const newCart = this.productRepo.findOne({
        where: { id: cart.id },
        relations: ['user'],
      });

      console.log(newCart);
    }

    // console.log(CartEntity);

    // // findUser.cart = { id: userId, cartItems: [], user: userId };

    // console.log(findUser);

    // let cart = [];
    // if (findUser) {
    //   cartItems.forEach(async ({ productId, count }) => {
    //     const product = await this.productRepo.findOneBy({ id: productId });

    //     if (product) {
    //       cart.push({ item: product, count });
    //     }
    //   });
    //   findUser.cart.cartItems = cart;
    //   await this.repository.save(findUser);
    //   return {
    //     statusCode: 200,
    //     message: 'Success',
    //     response: { cart: cartItems },
    //   };
    // }
    // throw new UnauthorizedException('Invalid Credentials');
  }

  // async addToCart(userId: number, cartItems: { productId: number }) {
  //   const findUser = await this.repository.findOneBy({ id: userId });
  //   if (findUser) {
  //     const product = await this.productRepo.findOneBy({
  //       id: cartItems.productId,
  //     });
  //     if (product) {
  //       findUser.cart.cartItems.push({ item: product, count: 1 });
  //       await this.repository.save(findUser);
  //       return {
  //         statusCode: 200,
  //         message: 'Success',
  //         response: {
  //           wishList: findUser.cart.cartItems,
  //         },
  //       };
  //     }
  //     throw new UnprocessableEntityException(
  //       "Product with given id doesn't exists",
  //     );
  //   }
  //   throw new UnauthorizedException('Invalid Credentials');
  // }

  // addToCart(id: number, cart: ProductEntity) {
  //   this.repository.update(id, cart);
  // }

  // async addToCart(id: number, dto: ProductEntity) {
  //   const user = this.repository.findOneBy({ id });
  //   (await user).cart.push({
  //     price: dto.price,
  //     img: dto.img,
  //     name: dto.name,
  //   });
  //   this.repository.update(id, {
  //     cart: (await user).cart,
  //   });
  // }

  findByCond(cond: LoginUserDto) {
    return this.repository.findOne({ where: cond });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }
}
