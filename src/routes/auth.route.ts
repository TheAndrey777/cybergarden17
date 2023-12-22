import express from "express";
import passport, { authorize } from "passport";
import { body } from "express-validator";
import { authenticateUser } from "../middlewares/auth.middleware";
import authController from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.get(
  "/me",
  authenticateUser,
  authController.getUser
);

authRouter.post(
  "/register", 
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("username").isLength({ min: 5 }),
  authController.registerUser
);

authRouter.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  authController.loginUser
);

authRouter.get(
  "/google/redirect",
  passport.authenticate("google", { session: false }), 
  authController.authGoogle
);

authRouter.get(
  "/vk/redirect",
  passport.authenticate("vkontakte", { session: false }),
  authController.authVk
);

authRouter.get(
  "/google", 
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/vk",
  passport.authenticate("vkontakte", { scope: ["email"] })
);