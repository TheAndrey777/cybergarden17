import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { ValidationException } from "../exceptions/validation.exception";
import { Sight } from "../entities/Sight";
import sightService from "../services/sight.service";
import { HttpException } from "../exceptions/http.exception";

class SightsController {
  async getSight(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException);
    }

    try {
      const sight = await sightService.getSight(Number(req.params.id));
      res.send({
        status: "success",
        data: sight
      });
    } catch {
      return next(new HttpException(200, "Произошла ошибка"));
    }
  }
}

export default new SightsController;