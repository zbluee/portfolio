import express from "express";
import {
  createWork,
  deleteWork,
  getWork,
  getWorks,
  updateWork,
} from "../controller/works.js";

const router = express.Router();

router.route("/").get(getWorks).post(createWork);
router.route("/:id").get(getWork).patch(updateWork).delete(deleteWork);

export {router as worksRoute}
