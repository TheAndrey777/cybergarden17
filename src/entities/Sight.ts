import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity("sights")
export class Sight extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("decimal", { precision: 6, scale: 3 })
  lat: number;

  @Column("decimal", { precision: 6, scale: 3 })
  lng: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;
}