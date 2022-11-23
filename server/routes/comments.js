import express from "express";
import { getComments, sendComments } from "../controller/comments.js";

const router = express.Router();

router.route("/").post(sendComments).get(getComments);

export { router as commentsRoute };
