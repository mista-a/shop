import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  OneToOne,
} from 'typeorm';

import { ProductEntity } from '../../product/entities/product.entity';
import { UserEntity } from './user.entity';

@Entity()
export class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  cartItems: { item: ProductEntity; count: number }[];

  @OneToOne(() => UserEntity)
  public user: UserEntity;
}
