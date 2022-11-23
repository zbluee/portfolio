import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/errors.js";
import Testimony from "../models/testimony.js";

const getTestimonies = async (req, res) => {
  const testimonies = await Testimony.find({}).sort({ createdAt: "desc" });
  res
    .status(StatusCodes.OK)
    .json({ success: true, count: testimonies.length, testimonies });
};

const getTestimony = async (req, res) => {
  const {
    user: { id: userId },
    params: { id: testimonyId },
  } = req;
  const testimony = await Testimony.findOne({
    _id: testimonyId,
    createdBy: userId,
  });
  if (!testimony)
    throw new NotFoundError(`No testimony with id : ${testimonyId} found`);
  res.status(StatusCodes.OK).json({ success: true, testimony });
};

const createTestimony = async (req, res) => {
  const testimony = await Testimony.create({
    ...req.body,
    createdBy: req.user.id,
  });
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, msg: "Successfully Created" });
};

const updateTestimony = async (req, res) => {
  const {
    params: { id: testimonyId },
    user: { id: userId },
    body: { name, description, position },
  } = req;
  if (name === '' || description === '' || position ==='')
    throw new BadRequestError("please provide name and description");
  const testimony = await Testimony.findOneAndUpdate(
    { _id: testimonyId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!testimony)
    throw new NotFoundError(`No testimony with id : ${testimonyId} found`);
  res
    .status(StatusCodes.OK)
    .json({ success: true, testimony, msg: "Successfully updated" });
};

const deleteTestimony = async (req, res) => {
  const {
    params: { id: testimonyId },
    user: { id: userId },
  } = req;
  const testimony = await Testimony.findOneAndDelete({_id : testimonyId, createdBy : userId})
  if (!testimony)
  throw new NotFoundError(`No testimony with id : ${testimonyId} found`);
  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: "Successfully deleted" });
};

export {
  updateTestimony,
  deleteTestimony,
  createTestimony,
  getTestimonies,
  getTestimony,
};
