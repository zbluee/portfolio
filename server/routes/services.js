import express from "express";
import {
  createService,
  deleteService,
  getService,
  getServices,
  updateService,
} from "../controller/services.js";
import {} from "../controller/testimonies.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(getServices).post(authMiddleware, createService);
router
  .route("/:id")
  .get(authMiddleware, getService)
  .patch(authMiddleware, updateService)
  .delete(authMiddleware, deleteService);

export { router as servicesRoute };
