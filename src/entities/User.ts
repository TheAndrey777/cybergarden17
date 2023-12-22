import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

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

  @Column()
  provider: string;
}