import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { ProductEntity } from './product.entity';

@Entity('subCategory')
export class SubCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];

  @ManyToMany(() => CategoryEntity, (category) => category.subCategories)
  category: CategoryEntity;
}
