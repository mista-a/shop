import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ProductEntity } from './product/entities/product.entity';
import { AuthModule } from './auth/auth.module';
import { CategoryEntity } from './product/entities/category.entity';
import { SubCategoryEntity } from './product/entities/subCategory.entity';
import { CartItemEntity } from './user/entities/cartItem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ppassword',
      database: 'shop',
      entities: [
        UserEntity,
        ProductEntity,
        CategoryEntity,
        SubCategoryEntity,
        CartItemEntity,
      ],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
