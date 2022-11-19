import { StatusCodes } from "http-status-codes";

class CustomApiError extends Error {
  constructor(message) {
    super(message);
  }
}

class BadRequestError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

class UnauthenticatedError extends CustomApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

class NotFoundError extends CustomApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export { CustomApiError, BadRequestError, UnauthenticatedError, NotFoundError };
