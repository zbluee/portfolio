import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/errors.js";
import Work from "../models/work.js";

const getWorks = async (req, res) => {
  const works = await Work.find({});
  res
    .status(StatusCodes.OK)
    .json({ success: true, count: works.length, works });
};

const createWork = async (req, res) => {
  const work = await Work.create({ ...req.body, createdBy: req.user.id });
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, msg: "Successfully Created" });
};

const getWork = async (req, res) => {
  const {
    params: { id: workId },
    user: { id: userId },
  } = req;
  const work = await Work.findOne({ _id: workId, createdBy: userId });
  if (!work) throw new BadRequestError(`No work with ${workId} found`);
  res.status(StatusCodes.OK).json({ success: true, work });
};

const updateWork = async (req, res) => {
  const {
    params: { id: workId },
    user: { id: userId },
    body: { title, imageUrl, addressLink },
  } = req;
  if (!title || !imageUrl || !addressLink)
    throw new BadRequestError(
      "please provide title, imageUrl and address link"
    );
  const work = await Work.findOneAndUpdate(
    { _id: workId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!work) throw new BadRequestError(`No work with ${workId} found`);
  res
    .status(StatusCodes.OK)
    .json({ success: true, work, msg: "Successfully updated" });
};

const deleteWork = async (req, res) => {
  const {
    params: { id: workId },
    user: { id: userId },
  } = req;
  const work = await Work.findByIdAndDelete({ _id: workId, createdBy: userId });
  if (!work) throw new BadRequestError(`No work with ${workId} found`);
  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: "Successfully deleted" });
};

export { createWork, deleteWork, getWork, getWorks, updateWork };
