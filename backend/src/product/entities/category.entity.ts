import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { SubCategoryEntity } from './subCategory.entity';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];

  @ManyToMany(() => SubCategoryEntity)
  @JoinTable()
  subCategories: SubCategoryEntity[];

  // @ManyToMany(() => SubCategoryEntity)
  // @JoinTable()
  // subcategories: SubCategoryEntity[];
}
