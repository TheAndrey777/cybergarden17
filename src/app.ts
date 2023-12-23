import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import { errorHandler } from "./middlewares/error.middleware";
import { authRouter } from "./routes/auth.route";
import { sightsRouter } from "./routes/sights.route";
import "./strategies/google.strategy";
import "./strategies/jwt.strategy";
import "./strategies/vk.strategy";

dotenv.config();

const app : Application = express();

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: "ok"
  });
});

app.use("/api/auth", authRouter);
app.use("/api/sights", sightsRouter);

app.use(errorHandler);

export default app;