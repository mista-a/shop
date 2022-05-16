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
import { CartEntity } from './cart.entity';

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

  @OneToOne(() => CartEntity, (cart) => cart.user, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'cartId' })
  cart: CartEntity;

  // @Column('json', { default: [], unique: true })
  // cart: [{ price: number; img: string; name: string }];
}
