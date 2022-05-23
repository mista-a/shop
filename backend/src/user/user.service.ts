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

  async toggleFavorite(id: number, productId: number) {
    const user = this.repository.findOne({
      where: { id },
      relations: ['inFavorite'],
    });
    let inFavorite = false;
    const qb = this.repository.createQueryBuilder();
    for (let product of (await user).inFavorite) {
      if (product.id === productId) {
        inFavorite = true;
        await qb.relation(UserEntity, 'inFavorite').of(id).remove(productId);
        return;
      }
    }
    if (!inFavorite) {
      await qb.relation(UserEntity, 'inFavorite').of(id).add(productId);
    }
  }

  async getFavorites(id: number) {
    const favorites = await this.repository.findOne({
      where: { id },
      relations: ['inFavorite'],
    });
    return favorites.inFavorite;
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
    cartItem: { productId: number; count: number; type: string },
  ) {
    let findUser = await this.repository.findOneBy({ id: userId });
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
      (async () => {
        const { productId, count, type } = cartItem;
        const product = await this.productRepo.findOneBy({ id: productId });
        if (!cart.find((product) => product.item.id === productId) ?? false) {
          if (product) {
            cart.push({ item: product, count, type });
          }
        } else {
          cart.forEach((oldProduct, index) => {
            if (oldProduct.item.id === productId) {
              findUser.cart.cartItems[index] = { item: product, count, type };
            }
          });
        }
      })();
      await this.repository.save(findUser);
      return {
        statusCode: 200,
        message: 'Success',
        response: { cart: cartItem },
      };
    }
    throw new UnauthorizedException('Invalid Credentials');
  }

  async deleteFromCart(userId: number, productId: number) {
    let findUser = await this.repository.findOneBy({ id: userId });
    if (findUser) {
      let cart = findUser.cart.cartItems;
      cart.forEach((product, index) => {
        if (product.item.id === productId) {
          cart.splice(index, 1);
        }
      });
      await this.repository.save(findUser);
      return {
        statusCode: 200,
        message: 'Success',
        response: { cart },
      };
    }
    throw new UnauthorizedException('Invalid Credentials');
  }

  async getCartPrice(userId: number) {
    
    const user = await this.repository.findOneBy({id: userId})
    let price = 0
    user.cart.cartItems.forEach((product) => {price += (product.item.price * product.count)});
    
    return price
  }

  findByCond(cond) {
    return this.repository.findOne({ where: cond });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }
}
