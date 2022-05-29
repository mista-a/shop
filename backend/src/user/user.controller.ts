import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { ProductEntity } from 'src/product/entities/product.entity';
import { User } from '../decorators/user.decorator';
import { addToCartDto } from './dto/add-to-cart.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return this.userService.findById(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me')
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+req.user.id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/favorites')
  toggleFavorite(@User() id: number, @Body() data: { productId: number }) {
    return this.userService.toggleFavorite(id, data.productId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/favorites')
  getFavorites(@User() id: number) {
    return this.userService.getFavorites(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/cart')
  // @Param('id') id: string
  getCart(@User() id: number) {
    return this.userService.getCart(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/cart')
  addToCart(@User() userId: number, @Body() dto: addToCartDto) {
    return this.userService.addToCart(
      userId,
      dto.typeId,
      dto.count,
      dto.productId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/cart')
  deleteFromCart(@User() id: number, @Body() productId: { productId: number }) {
    return this.userService.deleteFromCart(id, productId.productId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findById(+id);
  }
}
