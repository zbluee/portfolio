import { StatusCodes } from "http-status-codes";
export const errorHandlerMiddleware = async (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong. Please try again later.",
  };
  // db errors will handled here
  // CastError
  if (err.name === "CastError") {
    customError.message = `No item with id : ${err.value} found`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  //Validation Error
  if (err.name === "ValidationError") {
    customError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  //Duplicate Error
  if ((err.code = 11000)) {
    customError.message = `Please choose another value, duplicate value found : ${Object.keys(
      err.keyValue
    )} `;
    customError.statusCode = StatusCodes.BAD_GATEWAY;
  }

  return res
    .status(customError.statusCode)
    .json({ success: false, msg: customError.message });
};
