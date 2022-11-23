import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/errors.js";
import Skill from "../models/skill.js";
const getSkills = async (req, res) => {
  const skills = await Skill.find({})
  res.status(StatusCodes.OK).json({ success: true, count : skills.length, skills});
};

const createskill = async (req, res) => {
  const skill = await Skill.create({ ...req.body, createdBy: req.user.id });
  res.status(StatusCodes.OK).json({ success: true, msg: "Successfully Created" });
};

const getskill = async (req, res) => {
  const {
    params: { id: skillId },
    user: { id: userId },
  } = req;
  const skill = await Skill.findOne({ _id: skillId, createdBy: userId })
  if (!skill) throw new NotFoundError(`No skill with ${skillId} found`);
  res.status(StatusCodes.CREATED).json({ success: true, skill});
};

const updateSkill = async (req, res) => {
  const { params : {id : skillId}, user : {id : userId}, body : {skillTitle}} = req
  if( skillTitle === '' ) throw new BadRequestError("skillTitle and skills are required");
  const skill = await Skill.findOneAndUpdate({_id : skillId, createdBy : userId}, req.body, {new : true, runValidators : true})
  if(!skill) throw new NotFoundError(`No skill with id : ${skillId} found`);

  res.status(StatusCodes.OK).json({ success: true, skill , msg: "Successfully updated" });
};

const deleteSkill = async (req, res) => {
  const { params : {id : skillId}, user : {id : userId}} = req
  const skill = await Skill.findOneAndDelete({_id : skillId, createdBy : userId})
  if(!skill) throw new NotFoundError(`No skill with id : ${skillId} found`);
  res.status(StatusCodes.OK).json({ success: true, msg: "Successfully deleted" });
};

export { createskill, deleteSkill, getskill, getSkills, updateSkill };
