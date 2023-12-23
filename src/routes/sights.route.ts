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
  body("type").exists().isInt({ min: 0, max: 6 }),
  authenticateUser,
  sightsController.createSight
);

sightsRouter.post(
  "/:id/mark/toggle",
  param("id").exists().isNumeric(),
  authenticateUser,
  sightsController.toggleMarkSight
);

sightsRouter.post(
  "/:id/rate",
  param("id").exists().isNumeric(),
  body("desc").exists(),
  body("grade").exists().isInt({ min: 1, max: 5 }),
  authenticateUser,
  sightsController.rateSight
);

sightsRouter.get(
  "/:id",
  param("id").exists().isNumeric(),
  authenticateUser,
  sightsController.getSight
);