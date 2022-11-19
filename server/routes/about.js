import express from "express";
import {
  createSectionContent,
  deleteSectionContent,
  getSectionContent,
  getSectionContents,
  updateSectionContent,
} from "../controller/about.js";

const router = express.Router();

router.route("/").get(getSectionContents).post(createSectionContent);
router
  .route("/:id")
  .get(getSectionContent)
  .patch(updateSectionContent)
  .delete(deleteSectionContent);

export { router as aboutRoute };
