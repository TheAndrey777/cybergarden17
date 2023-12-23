import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { User } from "./User";
import { Sight } from "./Sight";

@Entity("reviews")
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(
    () => User,
    (user) => user.reviews,
    { onDelete: 'CASCADE' }
  )
  creator: User;

  @ManyToOne(
    () => User,
    (sight) => sight.reviews,
    { onDelete: 'CASCADE' }
  )
  sight: Sight;

  @Column()
  desc: string

  @Column()
  grade: number
}