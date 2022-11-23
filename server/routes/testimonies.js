import express from "express";
import {
  createTestimony,
  deleteTestimony,
  getTestimonies,
  getTestimony,
  updateTestimony,
} from "../controller/testimonies.js";
import { authMiddleware } from "../middleware/auth.js"

const router = express.Router();

router.route("/").get(getTestimonies).post( authMiddleware, createTestimony);
router
  .route("/:id")
  .get(authMiddleware, getTestimony)
  .patch(authMiddleware, updateTestimony)
  .delete(authMiddleware, deleteTestimony);

export { router as testimoniesRoute };
