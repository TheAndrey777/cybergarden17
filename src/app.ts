import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import * as path from "path";
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

app.use("/api/auth", authRouter);
app.use("/api/sights", sightsRouter);

app.use("/img", express.static("src/images"));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.use(errorHandler);

export default app;