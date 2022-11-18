import { StatusCodes } from "http-status-codes";

const getTestimonies = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ success: true, data: "get all testimonies" });
};

const getTestimony = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, data: "get a testimonies" });
};

const createTestimony = async (req, res) => {
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, msg: "create a testimonies" });
};

const updateTestimony = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ success: true, data: "update a testimonies" });
};

const deleteTestimony = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: "delete a testimonies" });
};

export {
  updateTestimony,
  deleteTestimony,
  createTestimony,
  getTestimonies,
  getTestimony,
};
