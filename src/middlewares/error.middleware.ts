import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/http.exception";

export const errorHandler = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  return res.status(error.status || 200).send({
    status: "error",
    error: error.message || "Что-то пошло не так"
  });
}