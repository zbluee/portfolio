import express from "express";
import { createService, deleteService, getService, getServices, updateService } from "../controller/services.js";
import {
  
} from "../controller/testimonies.js";

const router = express.Router();

router.route("/").get(getServices).post(createService);
router
  .route("/:id")
  .get(getService)
  .patch(updateService)
  .delete(deleteService);

export { router as servicesRoute };
