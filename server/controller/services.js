import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/errors.js";
import Service from "../models/service.js";

const getServices = async (req, res) => {
  const services = await Service.find({});
  res
    .status(StatusCodes.OK)
    .json({ success: true, count: services.length, services });
};

const createService = async (req, res) => {
  const service = await Service.create({ ...req.body, createdBy: req.user.id });
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, msg: "Successfully Created" });
};

const getService = async (req, res) => {
  const {
    params: { id: serviceId },
    user: { id: userId },
  } = req;
  const service = await Service.findOne({ _id: serviceId, createdBy: userId });
  if (!service)
    throw new NotFoundError(`No service with id : ${serviceId} found`);
  res.status(StatusCodes.OK).json({ success: true, service });
};

const updateService = async (req, res) => {
  const {
    params: { id: serviceId },
    user: { id: userId },
    body: { title, description },
  } = req;
  if (title === "" || description === "" )
    throw new BadRequestError(
      "please provide service title, description and infos"
    );
  const service = await Service.findOneAndUpdate(
    { _id: serviceId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!service)
    throw new NotFoundError(`No service with id : ${serviceId} found`);
  res
    .status(StatusCodes.OK)
    .json({ success: true, service, msg: "Successfully Updated" });
};

const deleteService = async (req, res) => {
  const {
    params: { id: serviceId },
    user: { id: userId },
  } = req;
  const service = await Service.findOneAndDelete({
    _id: serviceId,
    createdBy: userId,
  });
  if (!service)
    throw new NotFoundError(`No service with id : ${serviceId} found`);
  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: "Successfully Deleted" });
};

export { createService, updateService, getService, getServices, deleteService };
