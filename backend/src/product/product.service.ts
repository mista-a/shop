import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from 'src/product/entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>,
  ) {}

  create(dto: CreateProductDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const find = await this.repository.findOneBy({ id: +id });

    if (!find) {
      throw new NotFoundException('Product not found');
    }

    return this.repository.findOneBy({ id: +id });
  }

  async update(id: number, dto: UpdateProductDto) {
    const find = await this.repository.findOneBy({ id: +id });

    if (!find) {
      throw new NotFoundException('Product not found');
    }

    return this.repository.update(id, dto);
  }

  async remove(id: number) {
    const find = await this.repository.findOneBy({ id: +id });

    if (!find) {
      throw new NotFoundException('Product not found');
    }

    return this.repository.delete(id);
  }
}
