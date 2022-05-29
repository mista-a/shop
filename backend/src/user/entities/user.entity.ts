import { ProductEntity } from 'src/product/entities/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
  AfterInsert,
} from 'typeorm';
import { CartItemEntity } from './cartItem.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 0 })
  cartPrice: number;

  @ManyToMany(() => CartItemEntity)
  @JoinTable()
  cartItems: CartItemEntity[];

  @ManyToMany(() => ProductEntity)
  @JoinTable()
  favorites: ProductEntity[];

  // @Column('json', { default: [], unique: true })
  // cart: [{ price: number; img: string; name: string }];
}
