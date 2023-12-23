import express from "express";
import { body, param } from "express-validator";
import { authenticateUser } from "../middlewares/auth.middleware";
import sightsController from "../controllers/sights.controller";

export const sightsRouter = express.Router();

sightsRouter.post(
  "/create",
  body("name").exists(),
  body("desc").exists(),
  body("addr").exists(),
  body("lat").isNumeric(),
  body("lng").isNumeric(),
  authenticateUser,
  sightsController.createSight
);

sightsRouter.get(
  "/:id",
  param("id").exists().isNumeric(),
  authenticateUser,
  sightsController.getSight
);