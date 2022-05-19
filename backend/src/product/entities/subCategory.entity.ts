import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('subcategory')
export class SubCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @ManyToMany(() => CategoryEntity)
  // category: CategoryEntity[];
}
