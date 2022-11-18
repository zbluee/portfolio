import { StatusCodes } from "http-status-codes";

const getSkills = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "get all skills" });
};

const createskill = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "create skill" });
};

const getskill = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ success: true, daga: "get a skill" });
};

const updateSkill = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "update a skill" });
};

const deleteSkill = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "delete a skill" });
};

export { createskill, deleteSkill, getskill, getSkills, updateSkill };
