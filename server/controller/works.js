import { StatusCodes } from "http-status-codes";

const getWorks = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, data: "get all works" });
};

const createWork = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ success: true, msg: "create work" });
};

const getWork = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, data: "get a works" });
};

const updateWork = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, data: "update a works" });
};

const deleteWork = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, msg: "delete a works" });
};

export { createWork, deleteWork, getWork, getWorks, updateWork };
