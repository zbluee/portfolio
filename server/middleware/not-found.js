import { StatusCodes } from "http-status-codes";
export const notFoundMiddleware = (req, res) =>
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ Sucess: false, msg: "Route does not exist" });
