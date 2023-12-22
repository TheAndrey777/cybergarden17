import { HttpException } from "./http.exception";

export class ValidationException extends HttpException {
  constructor() {
    super(403, "Произошла ошибка");
  }
}