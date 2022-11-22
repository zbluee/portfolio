import express from "express";
import {
  createSectionContent,
  deleteSectionContent,
  getSectionContent,
  getSectionContents,
  updateSectionContent,
} from "../controller/about.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(getSectionContents).post(authMiddleware, createSectionContent);
router
  .route("/:id")
  .get(authMiddleware, getSectionContent)
  .patch(authMiddleware, updateSectionContent)
  .delete(authMiddleware, deleteSectionContent);

export { router as aboutRoute };
