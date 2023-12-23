import { HttpException } from "./http.exception";

export class ReviewAlreadyExistsException extends HttpException {
  constructor() {
    super(409, "Вы уже отправляли отзыв");
  }
}