
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  imageUrl: string;

  @Column('int')
  price: number;

  @Column('int')
  offer_price: number;

  @Column('int')
  quantity: number;

  @Column()
  isPublished: boolean;
}