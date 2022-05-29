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
import { count } from 'console';
import { CartItemEntity } from './entities/cartItem.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    @InjectRepository(ProductEntity)
    private product: Repository<ProductEntity>,
    @InjectRepository(CartItemEntity)
    private cartItem: Repository<CartItemEntity>,
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
    // const user = await this.repository.findOneBy({ id: userId });
    // let price = 0;
    // user.cart.cartItems.forEach((product) => {
    //   price += product.item.price * product.count;
    // });

    // return price;
    return this.repository.findOneBy({ id });
  }

  async toggleFavorite(id: number, productId: number) {
    const user = this.repository.findOne({
      where: { id },
      relations: ['favorites'],
    });
    let inFavorite = false;
    const qb = this.repository.createQueryBuilder();
    for (let product of (await user).favorites) {
      if (product.id === productId) {
        inFavorite = true;
        await qb.relation(UserEntity, 'favorites').of(id).remove(productId);
        return;
      }
    }
    if (!inFavorite) {
      await qb.relation(UserEntity, 'favorites').of(id).add(productId);
    }
  }

  async getFavorites(id: number) {
    const user = await this.repository.findOne({
      where: { id },
      relations: ['favorites'],
    });

    user.favorites.map((product) => {
      product.inFavorite = true;
    });

    return user.favorites;
  }

  async getCart(userId: number) {
    const user = await this.repository.findOne({
      where: { id: userId },
      relations: ['cartItems'],
    });

    const cart = [];

    await Promise.all(
      user.cartItems.map(async (cartItem) =>
        cart.push(
          await this.cartItem.findOne({
            where: { id: cartItem.id },
            relations: ['product'],
          }),
        ),
      ),
    );

    console.log(cart);

    return user.cartItems;
  }

  async addToCart(
    userId: number,
    count: number,
    typeId: number,
    productId: number,
  ) {
    const user = await this.repository.findOne({
      where: { id: userId },
      relations: ['cartItems'],
    });

    const product = await this.product.findOneBy({
      id: productId,
    });

    const cartItem = await this.cartItem.save({
      count,
      typeId,
      product,
    });

    user.cartItems.push(cartItem);

    return this.repository.save(user);
  }

  async deleteFromCart(userId: number, productId: number) {
    // const user = await this.repository.findOne({
    //   where: { id: userId },
    //   relations: ['cartItems'],
    // });
    // return user.cartItems.map((product, index) => {
    //   if (product.id === productId) {
    //     user.cartItems.splice(index, 1);
    //   }
    // });
  }

  findByCond(cond) {
    return this.repository.findOne({ where: cond });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }
}
