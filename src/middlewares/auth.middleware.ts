import { Request, Response, NextFunction } from "express";
import { UnauthorizedException } from "../exceptions/auth.exceptions";
import passport from "passport";

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", { session: false }, (err: any, user: any, info: any) => {
    if (err) return res.send({ status: "error" });
    if (!user) throw new UnauthorizedException;
    req.user = user;
    return next();
  })(req, res, next);
}