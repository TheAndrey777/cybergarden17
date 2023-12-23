import { HttpException } from "./http.exception";

export class UnauthorizedException extends HttpException {
  constructor() {
    super(401, "Пользователь не авторизован");
  }
}

export class UserExistsException extends HttpException {
  constructor() {
    super(409, "Пользователь уже существует");
  }
}

export class UserNotFoundException extends HttpException {
  constructor() {
    super(200, "Пользователь не найден");
  }
}

export class WrongPasswordException extends HttpException {
  constructor() {
    super(200, "Неверный пароль");
  }
}