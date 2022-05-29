import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { SubCategoryEntity } from './subCategory.entity';

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

  @Column({ default: false })
  inFavorite: boolean;

  @Column('json')
  showcase: any;

  @ManyToOne(() => CategoryEntity)
  category: CategoryEntity;

  @ManyToOne(() => SubCategoryEntity)
  subCategory: SubCategoryEntity;

  // @OneToMany(() => SubCategoryEntity, (subcategories) => subcategories.product)
  // subcategories: SubCategoryEntity[];

  // @Column('text', { array: true, default: [] })
  // sizes: string[];

  // @Column()
  // description: string;
}
