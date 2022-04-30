import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;

  // @Column()
  // colors: string[];

  // @Column()
  // sizes: string[];

  @Column()
  description: string;
}
