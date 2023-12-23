import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Review } from "./Review";

@Entity("sights")
export class Sight extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    () => Review,
    (review) => review.sight
  )
  reviews: Review[];

  @Column("decimal", { precision: 10, scale: 3 })
  lat: number;

  @Column("decimal", { precision: 10, scale: 3 })
  lng: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;
}