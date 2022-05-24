import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from 'src/product/entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchProductDto } from './dto/search-product';
import { CategoryEntity } from './entities/category.entity';
import { SubCategoryEntity } from './entities/subCategory.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>,
    @InjectRepository(CategoryEntity)
    private category: Repository<CategoryEntity>,
    @InjectRepository(SubCategoryEntity)
    private subCategory: Repository<SubCategoryEntity>,
    @InjectRepository(UserEntity)
    private user: Repository<UserEntity>,
  ) {}

  create(dto: CreateProductDto) {
    return this.repository.save({
      name: dto.name,
      price: dto.price,
      img: dto.img,
      showcase: dto.showcase,
      colors: dto.colors,
      category: { name: dto.category },
    });
  }

  findAll() {
    // this.user.
    return this.repository.find();
  }

  async findAllCategories() {
    let categories = await this.category.find();

    await Promise.all(
      categories.map(async (category) => {
        const { subCategories } = await this.category.findOne({
          where: {
            name: category.name,
          },
          relations: ['subCategories'],
        });
        category.subCategories = subCategories;
      }),
    );

    return { categories };
  }

  async findByCategory(name: string) {
    name = name.substring(1, 1) + name[0].toUpperCase() + name.substring(1);
    return this.category.find({
      where: {
        name,
      },
      relations: ['products'],
    });
  }

  findSubCategories(name: string) {
    name = name.substring(1, 1) + name[0].toUpperCase() + name.substring(1);
    return this.category.find({
      where: {
        name,
      },
      relations: ['subCategories'],
    });
  }

  getBySubCategories(name: string) {
    name = name.substring(1, 1) + name[0].toUpperCase() + name.substring(1);
    return this.subCategory.find({
      where: {
        name,
      },
      relations: ['products'],
    });
  }

  async popular(id?: number) {
    const qb = this.repository.createQueryBuilder();

    qb.orderBy('views', 'DESC');
    // qb.limit(10);

    const [products, total] = await qb.getManyAndCount();

    let user: UserEntity;
    if (id) {
      user = await this.user.findOne({
        where: {
          id,
        },
        relations: ['inFavorite'],
      });

      if (user.inFavorite.length !== 0) {
        for (const favoriteProduct of user.inFavorite) {
          products.map((product) => {
            if (favoriteProduct.id === product.id) {
              product.favorite = true;
            }
          });
        }
      }
    }

    return {
      products,
      total,
    };
  }

  // async getFavorite(dto: UpdateProductDto) {
  //   const qb = this.repository.createQueryBuilder();
  //   qb.orderBy('favorite', 'DESC');
  //   qb.where(`cart = TRUE`);
  //   // qb.limit(dto.limit || 0);
  //   const [products, total] = await qb.getManyAndCount();
  //   return {
  //     products,
  //     total,
  //   };
  // }

  // async toggleFavorite(id: number, dto: UpdateProductDto) {
  //   const find = await this.repository.findOneBy({ id });

  //   if (!find) {
  //     throw new NotFoundException('Product not found');
  //   }

  //   return this.repository.update(id, dto);
  // }

  async search(dto: SearchProductDto) {
    const qb = this.repository.createQueryBuilder('products');

    // qb.limit(dto.limit || 0);
    // qb.take(dto.limit || 10);

    if (dto.views) {
      qb.orderBy('views', dto.views);
    }

    if (dto.name) {
      qb.where(`products.name ILIKE :name`);
    }

    if (dto.price) {
      qb.where(`CAST(products.price AS TEXT) ILIKE :price`);
    }

    if (dto.colors) {
      qb.where(`:colors = ANY(products.colors)`);
    }

    if (dto.sizes) {
      qb.where(`:size =  ANY(products.sizes)`);
    }

    // if (dto.type) {
    //   qb.where(`products.type ILIKE %${dto.type}`);
    // }

    qb.setParameter('name', `%${dto.name}%`);
    qb.setParameter('price', `%${dto.price}%`);
    qb.setParameter('colors', `${dto.colors}`);
    // qb.setParameter('size', `${dto.sizes}`);

    const [products, total] = await qb.getManyAndCount();

    return {
      products,
      total,
    };
  }

  async findOne(id: number) {
    await this.repository
      .createQueryBuilder('products')
      .whereInIds(id)
      .update()
      .set({ views: () => 'views + 1' })
      .execute();

    // if (!find) {
    //   throw new NotFoundException('Product not found');
    // }

    return this.repository.findOneBy({ id: +id });
  }

  // async update(id: number, dto: UpdateProductDto) {
  //   const find = await this.repository.findOneBy({ id });

  //   if (!find) {
  //     throw new NotFoundException('Product not found');
  //   }

  //   return this.repository.update(id, dto);
  // }

  async remove(id: number) {
    const find = await this.repository.findOneBy({ id: +id });

    if (!find) {
      throw new NotFoundException('Product not found');
    }

    return this.repository.delete(id);
  }
}
