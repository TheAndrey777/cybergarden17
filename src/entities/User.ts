import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Review } from "./Review";
import { Sight } from "./Sight";

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

  @ManyToMany(() => Sight, { onDelete: 'CASCADE' })
  @JoinTable()
  favourites: Sight[];

  @Column()
  provider: string;
}