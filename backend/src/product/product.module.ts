import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { CartEntity } from 'src/user/entities/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, CartEntity, UserEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
