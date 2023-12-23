import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity("sights")
export class Sight extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;
}