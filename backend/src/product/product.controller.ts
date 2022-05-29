import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SearchProductDto } from './dto/search-product';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  // @User() user: UserEntity,
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@User() id) {
    return this.productService.findAll();
  }

  @Get('/popular')
  async getPopularProducts(dto: UpdateProductDto) {
    return this.productService.popular();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/popular/auth')
  getAuthPopularProducts(@User() id: number, dto: UpdateProductDto) {
    return this.productService.popular(id);
  }

  @Get('/search')
  searchProducts(@Query() dto: SearchProductDto) {
    return this.productService.search(dto);
  }

  @Get('/categories')
  allCategories() {
    return this.productService.findAllCategories();
  }

  @Get('/category/:name')
  getByCategory(@Param('name') name: string) {
    return this.productService.findByCategory(name);
  }

  // @Get('/category/:name/subcategories')
  // subCategories(@Param('name') name: string) {
  //   return this.productService.findSubCategories(name);
  // }

  @UseGuards(JwtAuthGuard)
  @Get('/subcategories/:name')
  getBySubCategory(
    @User() id: number,
    @Param('name') name: string,
    @Query() dto: SearchProductDto,
  ) {
    let page = 1;
    if (dto.page) {
      page = +dto.page;
    }
    let limit = 12;
    if (dto.limit) {
      limit = +dto.limit;
    }
    return this.productService.getBySubCategory(id, name, limit, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(+id, updateProductDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
