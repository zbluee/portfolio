import express from "express";
import {
  getComment,
  getComments,
  sendComments,
} from "../controller/comments.js";

const router = express.Router();

router.route("/").post(sendComments).get(getComments);

router.route("/:id").get(getComment);

export { router as commentsRoute };
