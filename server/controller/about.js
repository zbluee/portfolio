import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/errors.js";
import Content from "../models/about.js";

const getSectionContents = async (req, res) => {
  const content = await Content.find({});
  res
    .status(StatusCodes.OK)
    .json({ success: true, count: content.length, content });
};

const createSectionContent = async (req, res) => {
  const content = await Content.create({ ...req.body, createdBy: req.user.id });
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, content, msg: "Successfully Created" });
};

const getSectionContent = async (req, res) => {
  const {
    params: { id: contentId },
    user: { id: userId },
  } = req;
  const content = await Content.findOne({ _id: contentId, createdBy : userId });
  if (!content)
    throw new NotFoundError(`No service content with id : ${contentId} found`);
  res.status(StatusCodes.OK).json({ success: true, content });
};

const updateSectionContent = async (req, res) => {
  const {
    params: { id: contentId },
    user: { id: userId },
    body: { title, subtitle },
  } = req;
  if (title === "" || subtitle === "")
    throw new BadRequestError("content title and subtitle are required");
  const content = await Content.findOneAndUpdate(
    { _id: contentId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!content)
    throw new NotFoundError(`No service content with id : ${contentId} found`);
  res
    .status(StatusCodes.OK)
    .json({ success: true, content, msg: "Successfully Updated" });
};

const deleteSectionContent = async (req, res) => {
  const {
    params: { id: contentId },
    user: { id: userId },
  } = req;
  const content = await Content.findOneAndDelete({
    _id: contentId,
    createdBy: userId,
  });
  if (!content)
    throw new NotFoundError(`No service content with id : ${contentId} found`);
  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: "Successfully Deleted" });
};

export {
  createSectionContent,
  deleteSectionContent,
  getSectionContent,
  getSectionContents,
  updateSectionContent,
};
