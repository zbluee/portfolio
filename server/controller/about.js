import { StatusCodes } from "http-status-codes";

const getSectionContents = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "get all about data" });
};

const createSectionContent = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "create about data" });
};

const getSectionContent = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ success: true, daga: "get about data" });
};

const updateSectionContent = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "update about data" });
};

const deleteSectionContent = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "delete about data" });
};

export { createSectionContent, deleteSectionContent, getSectionContent,getSectionContents, updateSectionContent };
