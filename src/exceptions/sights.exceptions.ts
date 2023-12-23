import { HttpException } from "./http.exception";

export class SightAlreadyExistsException extends HttpException {
  constructor() {
    super(409, "Достопримечательность уже существует");
  }
}

export class SightNotExistsException extends HttpException {
  constructor() {
    super(409, "Достопримечательность не существует");
  }
}