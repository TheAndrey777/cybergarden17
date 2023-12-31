import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Sight } from "../entities/Sight";
import { Review } from "../entities/Review";
import * as dotenv from "dotenv";

dotenv.config();

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as number | undefined,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [User, Sight, Review]
});