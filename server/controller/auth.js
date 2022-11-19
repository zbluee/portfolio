import { StatusCodes } from "http-status-codes";
import User from "../models/user.js";
import { BadRequestError, UnauthenticatedError } from "../errors/errors.js";

const register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    throw new BadRequestError("please provide username and password");

  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ sucess: true, token, msg: "Successfully registered " });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    throw new BadRequestError("please provide username and password");
  const user = await User.findOne({ username });

  if (!user) throw new UnauthenticatedError("Invalid Credentials");
  const match = await user.isPasswordMatch(password);
  if (!match) throw new UnauthenticatedError("Invalid Credentials");
  const token = user.createJWT();
  res
    .status(StatusCodes.OK)
    .json({ sucess: true, token, msg: "Successfully logged in " });
};

export { login, register };
