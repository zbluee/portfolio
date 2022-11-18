import { StatusCodes } from "http-status-codes";
export const errorHandlerMiddleware = async (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong. Please try again later.",
  };
  // db errors will handled here

  return res
    .status(customError.statusCode)
    .json({ success: false, msg: customError.message });
};
