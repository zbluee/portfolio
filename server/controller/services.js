import { StatusCodes } from "http-status-codes";

const getServices = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "get all services" });
};

const createService = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "create services" });
};

const getService = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ success: true, daga: "get a service" });
};

const updateService = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "update a service" });
};

const deleteService = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, daga: "delete a service" });
};

export { createService, updateService, getService,getServices, deleteService };
