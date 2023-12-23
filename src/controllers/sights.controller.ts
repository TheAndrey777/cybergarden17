import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { ValidationException } from "../exceptions/validation.exception";
import { NoPermissionsException } from "../exceptions/nopermissions.exception";
import { SightAlreadyExistsException, SightNotExistsException } from "../exceptions/sights.exceptions";
import { HttpException } from "../exceptions/http.exception";
import sightService from "../services/sight.service";
import userService from "../services/user.service";
import reviewService from "../services/review.service";
import { ReviewAlreadyExistsException } from "../exceptions/review.exceptions";

class SightsController {
  async getSight(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException);
    }

    const sight = await sightService.getSight(Number(req.params.id));
    if (!sight) {
      return next(new HttpException(200, "Произошла ошибка"));
    }
    res.send({
      status: "success",
      data: sight
    });
  }

  async createSight(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return next(new ValidationException);
    }
    
    const user = await userService.findUser(req.body.user);
    if (user?.admin) {
      return next(new NoPermissionsException);
    }

    const existSights = await sightService.findSight({ name: req.body.name, lng: req.body.lng, lat: req.body.lat });
    if (existSights.length > 0) {
      return next(new SightAlreadyExistsException);
    }
    await sightService.createSight({
      lat: req.body.lat,
      lng: req.body.lng,
      name: req.body.name,
      description: req.body.desc,
      address: req.body.addr
    });
    res.send({
      status: "success"
    });
  }

  async rateSight(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException);
    }
    
    const review = await reviewService.findReview(Number(req.params.id), Number(req.user?.id));
    if (review) {
      return next(new ReviewAlreadyExistsException);
    }

    const sight = await sightService.getSight(Number(req.params.id));
    if (!sight) {
      return next(new SightNotExistsException);
    }

    await reviewService.createReview({
      desc: req.body.desc,
      grade: req.body.grade,
      creator: await userService.findUser({ id: req.user?.id }),
      sight: sight
    });

    res.send({
      status: "success"
    });
  }
}

export default new SightsController;