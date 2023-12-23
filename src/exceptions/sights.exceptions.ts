import { HttpException } from "./http.exception";

export class SightAlreadyExistsException extends HttpException {
  constructor() {
    super(409, "Достопримечательность уже существует");
  }
}