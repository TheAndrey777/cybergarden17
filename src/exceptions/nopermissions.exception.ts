import { HttpException } from "./http.exception";

export class NoPermissionsException extends HttpException {
  constructor() {
    super(403, "У вас нет прав на выполнение данного действия");
  }
}