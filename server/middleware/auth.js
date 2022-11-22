import { StatusCodes } from "http-status-codes";
import { NotFoundError, UnauthenticatedError } from "../errors/errors.js";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) throw new UnauthenticatedError("Authentication Failed");
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    res.user = { userId: decoded.userId, username: decoded.username, isAdmin : decoded.isAdmin };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Failed");
  }
};
