import express from "express";
import {
  createSectionContent,
  deleteSectionContent,
  getSectionContents,
  updateSectionContent,
} from "../controller/about.js";

const router = express.Router();

router.route("/").get(getSectionContents).post(createSectionContent);
router
  .route("/:id")
  .get(getSelection)
  .patch(updateSectionContent)
  .delete(deleteSectionContent);

export { router as aboutRoute };
