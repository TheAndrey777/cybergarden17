import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Review } from "./Review";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  admin: boolean;

  @Column()
  email: string;
  
  @Column()
  username: string;

  @Column({ nullable: true })
  password: string;

  @OneToMany(
    () => Review,
    (review) => review.creator
  )
  reviews: Review[];

  @Column()
  provider: string;
}