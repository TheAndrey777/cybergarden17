import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { ValidationException } from "../exceptions/validation.exception";
import { UserExistsException, WrongPasswordException, UserNotFoundException } from "../exceptions/auth.exceptions";
import userService from "../services/user.service";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class AuthController {
  async getUser(req: Request, res: Response) {
    res.send({
      id: req.user?.id,
      email: req.user?.email,
      username: req.user?.username,
      expire: (1000 * (req.user as any).exp - Date.now()) / 1000
    });
  }

  async registerUser(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException);
    }

    const user = await userService.findUser({
      email: req.body.email,
      provider: "jwt",
    });
    if (user) {
      return next(new UserExistsException);
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      id: 0,
      username: req.body.username,
      email: req.body.email,
      provider: "jwt",
      password: hash
    }
    const resp = await userService.createUser(newUser);
    newUser.id = resp.id;
    const token = jwt.sign(newUser, process.env.JWT_SECRET || "dev", { expiresIn: 60000 });
    res.cookie("auth", token);
    res.send({
      status: "success",
      token: token
    });
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException);
    }

    const existsUser = await userService.findUser({
      email: req.body.email,
      provider: "jwt",
    });
    if (!existsUser) {
      return next(new UserNotFoundException);
    }

    const isMatch = bcrypt.compareSync(req.body.password, existsUser.password);
    if (!isMatch) {
      return next(new WrongPasswordException);
    }

    const token = jwt.sign({
        id: existsUser.id,
        username: existsUser.username,
        email: existsUser.email,
        provider: "jwt",
    }, process.env.JWT_SECRET || "dev", { expiresIn: 60000 });

    res.cookie("auth", token);
    res.send({ status: "success", token: token });
  }

  async authGoogle(req: Request, res: Response) {
    const token = jwt.sign({
      id: req.user?.id,
      username: req.user?.username,
      email: req.user?.email,
      provider: req.user?.provider,
    }, process.env.JWT_SECRET || "dev", { expiresIn: 60000 });

    res.cookie("auth", token);
    res.redirect(process.env.BASE_URL || "");
  }

  async authVk(req: Request, res: Response) {
    const token = jwt.sign({
      id: req.user?.id,
      username: req.user?.username,
      email: req.user?.email,
      provider: req.user?.provider,
    }, process.env.JWT_SECRET || "dev", { expiresIn: 60000 });

    res.cookie("auth", token);
    res.redirect(process.env.BASE_URL || "");
  }
}

export default new AuthController;