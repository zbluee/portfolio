import express from "express";
import {
  createTestimony,
  deleteTestimony,
  getTestimonies,
  getTestimony,
  updateTestimony,
} from "../controller/testimonies.js";

const router = express.Router();

router.route("/").get(getTestimonies).post(createTestimony);
router
  .route("/:id")
  .get(getTestimony)
  .patch(updateTestimony)
  .delete(deleteTestimony);

export { router as testimoniesRoute };
