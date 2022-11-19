import { StatusCodes } from "http-status-codes";
import { NotFoundError, UnauthenticatedError } from "../errors/errors.js";
import jwt from "jsonwebtoken";

export const authMiddleware = async (res, req, next) => {
  const { authorization } = req.headers;
  if (!authMiddleware || !authMiddleware.startsWith("Bearer "))
    throw new UnauthenticatedError("Authentication Failed");
  try {
    const token = authMiddleware.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    res.user = { userId: decoded.userId, username: decoded.username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Failed");
  }
};
