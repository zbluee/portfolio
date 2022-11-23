import express from "express";
import {
  createWork,
  deleteWork,
  getWork,
  getWorks,
  updateWork,
} from "../controller/works.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(getWorks).post( authMiddleware, createWork);
router.route("/:id").get( authMiddleware, getWork).patch( authMiddleware, updateWork).delete( authMiddleware, deleteWork);

export {router as worksRoute}
