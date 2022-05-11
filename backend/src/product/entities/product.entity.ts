import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;

  @Column({ default: 0 })
  views: number;

  @Column({ default: 0 })
  price: number;

  @Column('text', { array: true, default: [] })
  colors: string[];

  @Column('text', { array: true, default: [] })
  showcase: string[];

  @Column({ default: false })
  favorite: boolean;

  @Column('jsonb', { nullable: true })
  showCase: object[];

  // @Column('text', { array: true, default: [] })
  // sizes: string[];

  // @Column()
  // description: string;
}
